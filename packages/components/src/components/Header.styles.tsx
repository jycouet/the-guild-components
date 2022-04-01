import tw, { css, styled } from 'twin.macro';

interface IStyleProps {
  accentColor?: string;
  isActiveLink?: boolean;
  isModalOpen?: boolean;
  iconType?: 'close' | 'theme';
}

export const Wrapper = styled.header(() => [
  tw`py-2 md:py-5 bg-white dark:bg-gray-900 font-default`,
  css`
    button:focus:not(:focus-visible) {
      ${tw`outline-none!`}
    }
  `,
]);

export const Container = styled.div(() => [
  tw`container-max flex justify-between`,
]);

export const Navigation = styled.nav(({ isModalOpen }: IStyleProps) => [
  tw`fixed flex flex-col justify-center`,
  tw`transition-all duration-300 ease-in-out`,
  tw`md:(static flex-row justify-end items-center transition-none)`,
  tw`dark:bg-gray-900 bg-white`,
  css`
    @media screen and (max-width: 768px) {
      ${[
        tw`inset-0`,
        css`
          z-index: 300; // TODO: Used for Docusaurus, remove when no longer needed.
        `,
        !isModalOpen &&
          css`
            top: -100%;
            bottom: 100%;
          `,
      ]}
    }
  `,
]);

export const Controls = styled.menu(() => [
  tw`flex justify-center m-0 p-0 md:ml-2.5`,
  css`
    button:first-of-type:not(:only-child) {
      ${tw`hidden md:flex`}
    }
  `,
]);

export const Link = styled.a(({ accentColor, isActiveLink }: IStyleProps) => [
  tw`flex mx-auto py-3 w-max font-medium text-base text-center no-underline!`,
  tw`sm:(text-lg py-5)`,
  tw`md:(mx-2.5 py-0 text-xs text-left)`,
  tw`transition duration-200 ease-in-out`,
  css`
    img {
      ${tw`pl-1 pb-0.5`}
    }
  `,
  accentColor &&
    css`
      &:hover {
        color: ${accentColor} !important;
      }
    `,
  isActiveLink
    ? [
        tw`dark:text-gray-50 text-black relative`,
        css`
          :after {
            content: '';
            ${tw`absolute left-0 bottom-0 sm:bottom-2.5 md:-bottom-2 h-0.5 w-full dark:bg-white bg-black rounded`}
          }
        `,
      ]
    : tw`dark:text-gray-400 text-gray-500`,
]);

export const Icon = styled.button(({ iconType }: IStyleProps) => [
  tw`flex md:hidden justify-center items-center p-1.5`,
  tw`bg-transparent border-0 cursor-pointer outline-none hover:opacity-70`,
  tw`transition duration-200 ease-in-out`,
  iconType === 'close' &&
    tw`absolute top-6 right-6 dark:bg-gray-700 bg-gray-200 rounded-lg`,
  iconType === 'theme' &&
    tw`transform scale-125 mt-4 md:(flex transform-none mt-0 ml-3)`,
]);

export const Side = styled.div(() => [
  tw`flex first-of-type:justify-start last:justify-end md:hidden`,
  css`
    min-width: 3.25rem;
  `,
]);
