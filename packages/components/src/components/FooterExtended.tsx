import { FC, useCallback } from 'react';
import { Newsletter } from './Newsletter';
import { PRODUCTS } from '../helpers/products';
import type { IFooterExtendedProps, ILink } from '../types/components';
import { GuildLogo, TheGuild } from './Icon';

const COMPANY: ILink[] = [
  {
    children: 'About',
    title: 'Learn more about us',
    href: 'https://the-guild.dev/about-us',
  },
  {
    children: 'Blog',
    title: 'Read our blog',
    href: 'https://the-guild.dev/blog',
  },
  {
    children: 'GitHub',
    title: 'Check our GitHub profile',
    href: 'https://github.com/the-guild-org',
  },
];

const COMMUNITY: ILink[] = [
  {
    children: 'Twitter',
    title: 'Visit our Twitter',
    href: 'https://twitter.com/TheGuildDev',
  },
  {
    children: 'LinkedIn',
    title: 'Visit our LinkedIn',
    href: 'https://linkedin.com/company/the-guild-software',
  },
  {
    children: 'Discord',
    title: 'Reach us on Discord',
    href: 'https://discord.com/invite/xud7bH9',
  },
  {
    children: 'Medium',
    title: 'Read our Medium posts',
    href: 'https://medium.com/the-guild',
  },
  {
    children: 'YouTube',
    title: 'Watch Our Videos',
    href: 'https://youtube.com/watch?v=d_GBgH-L5c4&list=PLhCf3AUOg4PgQoY_A6xWDQ70yaNtPYtZd',
  },
];

const limitProductsTo = Math.ceil(PRODUCTS.length / 2);
const PRODUCTS_COLUMN_1 = PRODUCTS.slice(0, limitProductsTo);
const PRODUCTS_COLUMN_2 = PRODUCTS.slice(limitProductsTo);

const Title: FC = ({ children, ...props }) => {
  return (
    <p
      className="mb-3 text-xs font-semibold text-gray-900 dark:text-gray-100"
      {...props}
    >
      {children}
    </p>
  );
};

export const FooterExtended: FC<IFooterExtendedProps> = ({
  sameSite,
  resources,
  onNewsletterSubmit,
  ...restProps
}) => {
  const logoOptions = sameSite
    ? { href: '/' }
    : {
        href: 'https://the-guild.dev',
        rel: 'noreferrer',
        target: '_blank',
      };

  const renderLinks = useCallback(
    (list: ILink[]) => (
      <ul className="m-0 mb-8 list-none p-0 last:mb-0">
        {list.map((link) => (
          <li key={link.href} className="mb-3 last:mb-0">
            <a
              className="
                inline-block
                text-sm
                font-medium
                text-gray-500
                no-underline
                transition
                hover:text-black
                dark:text-gray-400
                hover:dark:text-gray-100
              "
              {...link}
              rel="noreferrer"
              target="_blank"
            />
          </li>
        ))}
      </ul>
    ),
    []
  );

  return (
    <footer
      className="bg-white text-xs font-default dark:bg-gray-900"
      {...restProps.wrapperProps}
    >
      <div
        className="border-t border-gray-300 container-max dark:border-gray-800"
        {...restProps.containerProps}
      >
        <div className="my-8 flex flex-col gap-6 pt-2 pb-4 lg:flex-row">
          <div className="lg:w-full">
            <Title {...restProps.titleProps}>PRODUCTS</Title>
            <div className="flex gap-6">
              <div className="w-1/2">{renderLinks(PRODUCTS_COLUMN_1)}</div>
              <div className="w-1/2">{renderLinks(PRODUCTS_COLUMN_2)}</div>
            </div>
          </div>
          <div className="flex flex-col gap-6 sm:w-full sm:flex-row">
            <div className="sm:w-1/2">
              {resources && (
                <>
                  <Title {...restProps.titleProps}>RESOURCES</Title>
                  {renderLinks(resources)}
                </>
              )}
              <Title {...restProps.titleProps}>COMPANY</Title>
              {renderLinks(COMPANY)}
            </div>
            <div className="sm:w-1/2">
              <Title {...restProps.titleProps}>COMMUNITY</Title>
              {renderLinks(COMMUNITY)}
              {onNewsletterSubmit && (
                <>
                  <Title {...restProps.titleProps}>NEWSLETTER</Title>
                  <p
                    className="mb-3 text-sm text-gray-500 dark:text-gray-400"
                    {...restProps.descriptionProps}
                  >
                    Stay up to date with the latest features and changes
                  </p>
                  <Newsletter
                    onNewsletterSubmit={onNewsletterSubmit}
                    {...restProps.newsletterProps}
                  />
                </>
              )}
            </div>
          </div>
        </div>
        <div
          className="
            flex
            flex-wrap
            items-center
            border-t
            border-gray-300
            py-4
            dark:border-gray-800
            md:py-8
            lg:flex-nowrap
          "
        >
          <a
            className="flex items-center gap-x-1.5 text-gray-500 transition hover:text-black hover:dark:text-gray-100"
            {...logoOptions}
            {...restProps.logoProps}
          >
            <GuildLogo className="w-7" />
            <TheGuild className="w-10" />
            <p
              className="ml-6 text-xs text-gray-500 dark:text-gray-400"
              {...restProps.copyrightProps}
            >
              Belong anywhere. © The Guild, Inc.
            </p>
          </a>
        </div>
      </div>
    </footer>
  );
};
