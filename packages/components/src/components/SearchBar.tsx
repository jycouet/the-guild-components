import {
  FC,
  ChangeEvent,
  useEffect,
  useState,
  useRef,
  useCallback,
  createElement,
} from 'react';
import algoliaSearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectHits,
  connectSearchBox,
  connectStateResults,
} from 'react-instantsearch-dom';
import type {
  Hit,
  SearchBoxProvided,
  StateResultsProvided,
} from 'react-instantsearch-core';
import clsx from 'clsx';
import { useDebouncedCallback } from 'use-debounce';
import { Modal } from './Modal';
import type { ISearchBarProps } from '../types/components';
import { searchBarThemedIcons } from '../helpers/assets';
import { toggleLockBodyScroll } from '../helpers/modals';
import { useThemeContext } from '../helpers/theme';
import { algoliaConfig } from '../configs';
import { CloseIcon, SearchIcon } from './Icon';

const algoliaClient = algoliaSearch(algoliaConfig.appID, algoliaConfig.apiKey, {
  hosts: algoliaConfig.hosts,
});

interface ResultDoc {
  hierarchy: Record<string, string | null>;
  anchor?: string;
  content?: string;
  url: string;
  type: string;
}

const searchClient: Pick<typeof algoliaClient, 'search'> = {
  search(requests) {
    // In case of empty queries
    if (
      !requests.length ||
      requests.every((req) => req.params?.query?.length === 0)
    ) {
      // return an empty result
      return Promise.resolve({
        results: requests.map(() => ({
          hits: [],
          exhaustiveNbHits: true,
          hitsPerPage: 20,
          nbHits: 0,
          nbPages: 0,
          page: 0,
          params:
            'query=&highlightPreTag=%3Cais-highlight-0000000000%3E&highlightPostTag=%3C%2Fais-highlight-0000000000%3E&facets=%5B%5D',
          processingTimeMS: 0,
          query: '',
        })),
      });
    }
    return algoliaClient.search(requests);
  },
};

function useIcons() {
  const { isDarkTheme } = useThemeContext();
  return searchBarThemedIcons(isDarkTheme);
}

function getPropertyByPath(obj: any, path: string) {
  const parts = path.split('.');

  return parts.reduce((current, key) => current && current[key], obj);
}

const Snippet: FC<{
  hit: Hit<ResultDoc>;
  attribute: string;
  tagName?: string;
}> = ({ hit, attribute, tagName = 'span' }) => {
  let html =
    getPropertyByPath(hit, `_snippetResult.${attribute}.value`) ||
    getPropertyByPath(hit, attribute);
  if (html) {
    // some query results contains `.css-` selectors, so we strips them out
    html = html.replace(/\s+\.css-.*/, '');
  }

  return createElement(tagName, {
    dangerouslySetInnerHTML: { __html: html },
    className:
      tagName === 'span'
        ? 'dark:text-gray-300 text-gray-700'
        : 'text-xs text-gray-400',
  });
};

const SearchBox: FC<
  SearchBoxProvided & {
    accentColor: string;
    placeholder: string;
    isModalOpen: boolean;
  }
> = ({ currentRefinement, refine, accentColor, placeholder, isModalOpen }) => {
  const searchRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState(currentRefinement);

  const debouncedRefine = useDebouncedCallback((value: string) => {
    refine(value);
  }, 500);

  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;

      setQuery(value);
      debouncedRefine(value);
    },
    [setQuery, debouncedRefine]
  );

  useEffect(() => {
    if (isModalOpen) {
      searchRef.current?.focus();
    }
  }, [isModalOpen]);

  return (
    <form
      noValidate
      action=""
      role="search"
      className="
        sticky
        -top-6
        z-10
        -m-6
        bg-white
        p-6
        shadow-sm
        font-default
        dark:bg-gray-900
      "
    >
      <div
        className="
          flex
          w-full
          items-center
          gap-x-1
          rounded-lg
          border-2
          bg-gray-50
          p-2.5
          text-lg
          text-gray-500
          [border-color:var(--accentColor)]
          dark:bg-gray-800
          dark:text-gray-300
        "
        style={{ '--accentColor': accentColor }}
      >
        <SearchIcon />
        <input
          aria-autocomplete="both"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          enterKeyHint="search"
          spellCheck="false"
          placeholder={placeholder}
          maxLength={64}
          type="search"
          ref={searchRef}
          value={query}
          onChange={onChange}
          className="
            mx-2
            grow
            border-0
            bg-transparent
            outline-none
            placeholder:text-gray-500
            dark:placeholder:text-gray-300
          "
        />
        {currentRefinement && (
          <button
            type="button"
            onClick={() => refine('')}
            className="
              cursor-pointer
              border-0
              bg-transparent
              p-0
              transition
              duration-200
              ease-in-out
              hover:opacity-70
            "
          >
            <CloseIcon />
          </button>
        )}
      </div>
    </form>
  );
};

const StateResults: FC<StateResultsProvided<ResultDoc>> = ({
  searchState,
  searchResults,
  children,
}) => {
  const content = searchState &&
    searchResults &&
    !searchResults.nbHits &&
    searchResults.query.length > 0 && (
      <span>
        No results for <strong>&quot;{searchState.query}&quot;</strong>.
      </span>
    );

  return <div className="mt-9">{content || children}</div>;
};

const Hits: FC<{ hits: Hit<any>[]; accentColor: string }> = ({
  hits,
  accentColor,
}) => {
  const icons = useIcons();

  const transformItems = (items: Hit<any>[]) => {
    const groupBy = items.reduce((acc, item) => {
      const list = acc[item.hierarchy.lvl0] || [];

      return {
        ...acc,
        [item.hierarchy.lvl0]: list.concat(item),
      };
    }, {});

    return Object.keys(groupBy).map((level) => ({
      items: groupBy[level],
      level,
    }));
  };

  const transformIcon = (item: Hit<ResultDoc>) => {
    if (item.anchor) {
      return icons.hashtag;
    }
    if (item.content) {
      return icons.content;
    }
    return icons.page;
  };

  const groupedHits = transformItems(hits);

  return (
    <>
      {groupedHits.map((hit) => (
        <article key={hit.level} style={{ '--color': accentColor }}>
          <h2 className="text-base font-semibold [color:var(--color)]">
            {hit.level}
          </h2>
          {hit.items.map((subHit: Hit<ResultDoc>) => {
            const isSameWebsite = subHit.url.startsWith(window.location.origin);
            let content;

            if (subHit.hierarchy[subHit.type] && subHit.type === 'lvl1') {
              content = (
                <>
                  <Snippet hit={subHit} attribute="hierarchy.lvl1" />
                  {subHit.content ? (
                    <Snippet tagName="p" hit={subHit} attribute="content" />
                  ) : (
                    <Snippet
                      tagName="p"
                      hit={subHit}
                      attribute="hierarchy.lvl1"
                    />
                  )}
                </>
              );
            } else if (
              subHit.hierarchy[subHit.type] &&
              ['lvl2', 'lvl3', 'lvl4', 'lvl5', 'lvl6'].includes(subHit.type)
            ) {
              content = (
                <>
                  <Snippet
                    hit={subHit}
                    attribute={`hierarchy.${subHit.type}`}
                  />
                  <Snippet
                    tagName="p"
                    hit={subHit}
                    attribute="hierarchy.lvl1"
                  />
                </>
              );
            } else if (subHit.type === 'content') {
              content = (
                <>
                  <Snippet hit={subHit} attribute="content" />
                  <Snippet
                    tagName="p"
                    hit={subHit}
                    attribute="hierarchy.lvl1"
                  />
                </>
              );
            }


            return (
              <a
                key={subHit.url}
                href={subHit.url}
                target={isSameWebsite ? '_self' : '_blank'}
                className="
                  mb-2
                  flex
                  items-center
                  break-all
                  rounded-md
                  bg-gray-100
                  px-5
                  py-3
                  no-underline
                  hover:![background:var(--color)]
                  dark:bg-gray-800
                "
                rel="noreferrer"
              >
                <img
                  src={transformIcon(subHit)}
                  className="mr-4 h-6 w-6"
                  alt="Result icon"
                />
                <div>
                  {content}
                </div>
              </a>
            );
          })}
        </article>
      ))}
    </>
  );
};

export const SearchBar: FC<ISearchBarProps> = ({
  accentColor,
  title,
  placeholder,
  isFull,
  onHandleModal,
  className,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleModal = useCallback(
    (state: boolean) => {
      toggleLockBodyScroll(state);
      setModalOpen(state);
      onHandleModal?.(state);
    },
    [onHandleModal]
  );

  const CustomSearchBox = connectSearchBox(SearchBox);
  const CustomStateResults = connectStateResults(StateResults);
  const CustomHits = connectHits(Hits);

  return (
    <>
      <button
        className={clsx(
          `
        flex
        cursor-pointer
        items-center
        border-transparent
        bg-transparent
        p-0
        text-xs
        font-medium
        text-gray-500
        font-default
        hocus:transition
        md:ml-3
        md:rounded-md
        md:border-2
        md:bg-gray-100
        md:py-1
        md:pl-1
        md:pr-8
        md:hocus:[border-color:var(--accentColor)]
        md:dark:bg-gray-800
        md:dark:text-gray-300
        `,
          isFull && '!md:p-2 !m-0 w-full',
          className
        )}
        style={{ '--accentColor': accentColor }}
        onClick={() => handleModal(true)}
      >
        <SearchIcon className="h-6 w-6 md:mr-1 md:h-4.5 md:w-4.5" />
        <span className="hidden md:block">{placeholder}</span>
      </button>
      <Modal
        title={title}
        visible={modalOpen}
        placement="top"
        onCancel={() => handleModal(false)}
      >
        <InstantSearch
          indexName={algoliaConfig.searchIndex}
          searchClient={searchClient}
          stalledSearchDelay={500}
        >
          <CustomSearchBox
            accentColor={accentColor}
            placeholder={placeholder}
            isModalOpen={modalOpen}
          />
          <CustomStateResults>
            <CustomHits accentColor={accentColor} />
          </CustomStateResults>
        </InstantSearch>
      </Modal>
    </>
  );
};
