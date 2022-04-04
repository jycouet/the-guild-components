import { AnchorHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

export const Button: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <a
      className={clsx(
        `
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
        md:px-5
      `,
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
