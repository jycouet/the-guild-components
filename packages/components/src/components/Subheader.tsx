import { FC, useCallback, useState } from 'react';
import clsx from 'clsx';
import type { ISubheaderProps } from '../types/components';
import { toggleLockBodyScroll } from '../helpers/modals';
import { CaretSlimIcon } from './Icon';
import { Nav } from './Nav';

export const Subheader: FC<ISubheaderProps> = ({
  product,
  activeLink,
  links,
  cta,
  ...restProps
}) => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const handleNav = useCallback(() => {
    setMobileNavOpen((prev) => {
      toggleLockBodyScroll(!prev);
      return !prev;
    });
  }, []);

  const nav = (
    <Nav
      isOpen={mobileNavOpen}
      setOpen={setMobileNavOpen}
      {...restProps.navigationProps}
    >
      {links.map((link) => {
        const isActiveLink =
          link.href === '/'
            ? activeLink === link.href
            : activeLink?.startsWith(link.href);

        return (
          <a
            key={link.href}
            className={clsx(
              `
              mx-auto
              w-max
              py-3
              text-center
              text-base
              font-medium
              no-underline
              transition
              hover:text-black
              hover:dark:text-gray-100
              sm:py-5
              sm:text-lg
              md:mx-2.5
              md:mr-1
              md:py-0
              md:text-left
              md:text-xs
            `,
              isActiveLink
                ? 'text-black dark:text-white'
                : 'text-gray-500 dark:text-gray-400'
            )}
            {...link}
            {...restProps.linkProps}
          />
        );
      })}
    </Nav>
  );

  return (
    <header
      className="
        sticky
        top-0
        z-10
        bg-white
        py-5
        shadow-xl
        shadow-gray-400/10
        font-default
        dark:bg-gray-900
      "
      {...restProps.wrapperProps}
    >
      <div
        className="flex items-center container-max md:justify-end"
        {...restProps.containerProps}
      >
        <a
          href="/"
          onClick={product.onClick}
          title={`${product.title} - ${product.description}`}
          className="flex grow no-underline"
          {...restProps.logoProps}
        >
          <img
            src={product.image.src}
            alt={product.image.alt}
            className="w-12"
          />
          <span className="ml-2 -mt-1 flex flex-col justify-center">
            <p className="font-semibold text-black dark:text-white">
              {product.title}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-300">
              {product.description}
            </p>
          </span>
        </a>
        {nav}
        {cta && (
          <a
            className="
              mx-1
              flex-none
              rounded-md
              bg-cyan-400
              p-3
              text-center
              text-xs
              font-medium
              text-white
              no-underline
              transition
              focus:bg-cyan-500
              hocus:shadow-lg
              hocus:shadow-cyan-400/40
              md:mr-0
              md:ml-3
              md:px-5
            "
            {...cta}
            {...restProps.ctaProps}
          />
        )}
        <button
          onClick={handleNav}
          className="mx-2.5 dark:text-white md:hidden"
          {...restProps.navOpenButtonProps}
        >
          <CaretSlimIcon />
        </button>
      </div>
    </header>
  );
};
