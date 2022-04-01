import type { FC } from 'react';
import type { IFooterProps, ILink } from '../types/components';
import { GuildLogoMono } from './Icon';

const links: ILink[] = [
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
    children: 'GitHub',
    title: 'See our GitHub profile',
    href: 'https://github.com/the-guild-org',
  },
  {
    children: 'Medium',
    title: 'Read our Medium posts',
    href: 'https://medium.com/the-guild',
  },
  {
    children: 'YouTube',
    title: 'Our Videos',
    href: 'https://youtube.com/watch?v=d_GBgH-L5c4&list=PLhCf3AUOg4PgQoY_A6xWDQ70yaNtPYtZd',
  },
];

export const Footer: FC<IFooterProps> = ({ sameSite, ...restProps }) => {
  const logoOptions = sameSite
    ? { href: '/' }
    : {
        href: 'https://the-guild.dev',
        rel: 'noreferrer',
        target: '_blank',
      };

  return (
    <footer
      className="bg-white text-xs text-gray-500 font-default dark:bg-gray-900 dark:text-gray-400"
      {...restProps.wrapperProps}
    >
      <div
        className="flex flex-col flex-wrap items-center justify-between pb-4 container-max md:flex-row md:pb-5"
        {...restProps.containerProps}
      >
        <hr
          className="m-0 mb-4 w-full border-0 border-t border-solid border-gray-300 dark:border-gray-800 md:mb-5"
          {...restProps.lineProps}
        />
        <p className="hidden flex-1 md:block" {...restProps.copyrightProps}>
          Belong anywhere. © The Guild, Inc.
        </p>
        <a {...logoOptions} {...restProps.logoProps}>
          <GuildLogoMono className="mb-3 transition hover:text-gray-900 dark:hover:text-gray-100 md:mb-0" />
        </a>
        <ul className="m-0 flex flex-1 list-none flex-wrap justify-end p-0">
          {links.map((link) => (
            <li
              key={link.href}
              className="
                before:mx-2
                before:content-['•']
                before:first-of-type:hidden
              "
            >
              <a
                target="_blank"
                rel="noreferrer"
                className="inline-block no-underline transition hover:text-black hover:dark:text-gray-100"
                {...link}
                {...restProps.linkProps}
              />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};
