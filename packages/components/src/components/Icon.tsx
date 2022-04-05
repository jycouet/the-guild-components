import { FC } from 'react';

const DEFAULT_PATH_PROPS = {
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const;

export const SearchIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
        {...DEFAULT_PATH_PROPS}
      />
      <path d="M21 21L16.65 16.65" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};

export const CloseIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M5.63607 5.35355L18.364 18.0815" {...DEFAULT_PATH_PROPS} />
      <path d="M18.0815 5.35354L5.35358 18.0815" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};

export const GuildLogo: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="34"
      viewBox="0 0 32 34"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.31588 12.7654C1.71365 12.899 2.1379 12.9749 2.58074 12.9749C2.9785 12.9749 3.36216 12.9148 3.72448 12.806V23.1377C3.72448 23.5028 3.92198 23.843 4.24061 24.0256L14.2562 29.7711C14.73 29.2217 15.4316 28.8719 16.2151 28.8719C17.0677 28.8719 17.8223 29.2863 18.2927 29.9211C18.301 29.9328 18.3099 29.9437 18.3182 29.955C18.3512 30.0015 18.3822 30.049 18.4121 30.0979L18.4465 30.1536C18.473 30.1987 18.4974 30.2445 18.5208 30.291C18.5336 30.316 18.5456 30.3413 18.5576 30.3666C18.5776 30.4097 18.5965 30.4534 18.6144 30.4979C18.6271 30.5297 18.6385 30.5615 18.6499 30.5936C18.6643 30.6343 18.6784 30.6753 18.6905 30.7167C18.7022 30.756 18.7114 30.7956 18.7214 30.8353L18.7472 30.9471C18.7572 30.9967 18.7637 31.0469 18.7706 31.0975C18.7744 31.1276 18.7803 31.157 18.783 31.1871C18.7909 31.2691 18.7957 31.3519 18.7957 31.436C18.7957 31.57 18.7823 31.7002 18.762 31.8288L18.7548 31.8766C18.5439 33.0811 17.4865 34 16.2151 34C15.0813 34 14.1183 33.2687 13.7724 32.2568L3.03631 26.0983C1.97137 25.4878 1.31588 24.3589 1.31588 23.1377V12.7654ZM29.4194 6.47938C30.8425 6.47938 32 7.62943 32 9.04341C32 9.81262 31.6559 10.5018 31.1143 10.9722V23.1377C31.1143 24.3589 30.4588 25.4878 29.3939 26.0983L20.1697 31.3895C20.1594 30.5239 19.8648 29.727 19.3762 29.0812L28.1896 24.0256C28.5082 23.843 28.7057 23.5028 28.7057 23.1377V11.5056C27.6291 11.1972 26.8387 10.2112 26.8387 9.04341C26.8387 8.47488 27.0283 7.95079 27.3449 7.52516C27.3497 7.51833 27.3549 7.51183 27.3597 7.50499C27.4195 7.42636 27.4835 7.35047 27.5517 7.27902L27.561 7.2691C27.7024 7.12278 27.8607 6.9939 28.0334 6.88415C28.0513 6.87253 28.0702 6.86193 28.0884 6.85065C28.1569 6.80997 28.2268 6.77168 28.299 6.73715C28.32 6.72724 28.341 6.7163 28.3623 6.70672C28.4528 6.66638 28.545 6.62912 28.6407 6.59938V6.59938L28.8283 6.54774C29.0183 6.50323 29.216 6.47938 29.4194 6.47938ZM25.8925 12.0075V20.4873C25.8925 21.4917 25.3485 22.4277 24.4732 22.9299L17.5753 26.8827L16.9388 27.2293L16.9463 26.5039V23.4974L22.6237 20.2408V17.2583L17.7911 15.8918L25.8925 12.0075ZM6.53772 12.0024L9.80652 13.5956V20.2405L15.3979 23.4479V27.1983L7.95707 22.9304C7.08172 22.4278 6.53772 21.4918 6.53772 20.4873V12.0024ZM14.7957 6.27607C15.6576 5.78207 16.7725 5.78207 17.6344 6.27607L25.2018 10.638L24.4827 10.9761L21.6753 12.3446L16.215 9.2124L10.7548 12.3446L7.23958 10.6308L7.91502 10.2267C7.92121 10.2213 7.93876 10.2096 7.95769 10.199L14.7957 6.27607ZM16.215 0C16.8092 0 17.4031 0.152474 17.9354 0.457765L27.2144 5.7807C26.5314 6.23812 26.0028 6.90306 25.7121 7.68184L16.7311 2.53053C16.5746 2.44028 16.396 2.3931 16.215 2.3931C16.034 2.3931 15.8558 2.44028 15.6989 2.53053L5.11998 8.59908C5.14545 8.74369 5.16127 8.89138 5.16127 9.04352C5.16127 10.1467 4.45521 11.0865 3.46941 11.4476C3.46184 11.4503 3.45392 11.4534 3.44635 11.4558C3.36825 11.4834 3.28911 11.5074 3.2079 11.5276L3.15939 11.5399C3.08507 11.557 3.00902 11.5703 2.93264 11.5809L2.87036 11.5901C2.77505 11.6007 2.6787 11.6075 2.58064 11.6075C2.47569 11.6075 2.37247 11.5993 2.27027 11.587C2.24275 11.5836 2.21591 11.5788 2.18872 11.5747C2.11027 11.5628 2.0332 11.5474 1.95716 11.5286C1.93376 11.5228 1.91036 11.5173 1.88696 11.5108C1.68567 11.4544 1.49436 11.3761 1.31578 11.2759L1.1624 11.1827C0.463092 10.7237 0 9.93694 0 9.04352C0 7.62954 1.15785 6.47948 2.58064 6.47948C2.94984 6.47948 3.30012 6.55811 3.61771 6.69725L14.4946 0.457765C15.0269 0.152474 15.6211 0 16.215 0Z"
      />
    </svg>
  );
};

export const TheGuild: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="47"
      height="25"
      viewBox="0 0 47 25"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M0.313477 2.77294H3.57946V10.6541H6.26751V2.77294H9.53349V0.163818H0.313477V2.77294Z" />
      <path d="M17.8588 0.163818V4.23889H13.5848V0.163818H10.9102V10.6541H13.5848V6.75386H17.8588V10.6541H20.5468V0.163818H17.8588Z" />
      <path d="M22.568 10.6541H30.6187V8.05842H25.2561V6.71352H29.6645V4.27923H25.2561V2.77294H30.6187V0.163818H22.568V10.6541Z" />
      <path d="M5.53497 20.9193H8.05247V21.2043C7.55963 21.9036 6.76042 22.3569 5.82801 22.3569C4.25624 22.3569 3.00414 21.1395 3.00414 19.6113C3.00414 18.0831 4.25624 16.8657 5.82801 16.8657C6.73378 16.8657 7.53299 17.2672 8.05247 17.9018L10.2237 16.4772C9.22464 15.208 7.61291 14.3661 5.82801 14.3661C2.81766 14.3661 0.313477 16.7232 0.313477 19.6113C0.313477 22.4994 2.81766 24.8564 5.82801 24.8564C6.89362 24.8564 7.94591 24.4679 8.45208 23.7167V24.6622H10.5433V18.7695H5.53497V20.9193Z" />
      <path d="M19.0352 14.5604V20.0905C19.0352 21.5539 18.3026 22.3569 16.904 22.3569C15.5187 22.3569 14.7994 21.5539 14.7994 20.0905V14.5604H12.1354V20.2459C12.1354 22.849 13.7871 24.8564 16.904 24.8564C20.0076 24.8564 21.6859 22.849 21.6859 20.2459V14.5604H19.0352Z" />
      <path d="M23.5364 14.5604V24.6622H26.2004V14.5604H23.5364Z" />
      <path d="M28.1958 24.6622H35.8283V22.1626H30.8465V14.5604H28.1958V24.6622Z" />
      <path d="M37.1999 24.6622H42.0218C45.2719 24.6622 46.937 22.3698 46.937 19.6113C46.937 16.8657 45.2719 14.5604 42.0218 14.5604H37.1999V24.6622ZM41.822 17.0729C43.4071 17.0729 44.2463 18.096 44.2463 19.6113C44.2463 21.1266 43.4071 22.1626 41.822 22.1626H39.864V17.0729H41.822Z" />
    </svg>
  );
};

export const MoonIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="currentColor"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.75 8.3425C14.4217 11.8944 11.3866 14.5777 7.82131 14.4682C4.256 14.3586 1.39135 11.494 1.2818 7.92867C1.17225 4.36336 3.85562 1.32824 7.40748 1C5.86275 3.08984 6.07942 5.99534 7.91703 7.83295C9.75464 9.67056 12.6601 9.88723 14.75 8.3425Z"
        {...DEFAULT_PATH_PROPS}
      />
    </svg>
  );
};

export const CaretIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1.5 1L5 4.5L8.5 1" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};

export const CaretSlimIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M4 8L12 16L20 8" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};

export const HamburgerIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M3 12H21" {...DEFAULT_PATH_PROPS} />
      <path d="M3 6H21" {...DEFAULT_PATH_PROPS} />
      <path d="M3 18H21" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};

export const MailIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
        {...DEFAULT_PATH_PROPS}
      />
      <path d="M22 6L12 13L2 6" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};

export const ArrowUpRightIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M7 17L17 7" {...DEFAULT_PATH_PROPS} />
      <path d="M7 7H17V17" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};

export const MoreIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 9.75C9.41421 9.75 9.75 9.41421 9.75 9C9.75 8.58579 9.41421 8.25 9 8.25C8.58579 8.25 8.25 8.58579 8.25 9C8.25 9.41421 8.58579 9.75 9 9.75Z"
        {...DEFAULT_PATH_PROPS}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4.5C9.41421 4.5 9.75 4.16421 9.75 3.75C9.75 3.33579 9.41421 3 9 3C8.58579 3 8.25 3.33579 8.25 3.75C8.25 4.16421 8.58579 4.5 9 4.5Z"
        {...DEFAULT_PATH_PROPS}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 15C9.41421 15 9.75 14.6642 9.75 14.25C9.75 13.8358 9.41421 13.5 9 13.5C8.58579 13.5 8.25 13.8358 8.25 14.25C8.25 14.6642 8.58579 15 9 15Z"
        {...DEFAULT_PATH_PROPS}
      />
    </svg>
  );
};

export const ShareIcon: FC<{ className?: string }> = ({ className }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 6C14.7426 6 15.75 4.99264 15.75 3.75C15.75 2.50736 14.7426 1.5 13.5 1.5C12.2574 1.5 11.25 2.50736 11.25 3.75C11.25 4.99264 12.2574 6 13.5 6Z"
        {...DEFAULT_PATH_PROPS}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.5 11.25C5.74264 11.25 6.75 10.2426 6.75 9C6.75 7.75736 5.74264 6.75 4.5 6.75C3.25736 6.75 2.25 7.75736 2.25 9C2.25 10.2426 3.25736 11.25 4.5 11.25Z"
        {...DEFAULT_PATH_PROPS}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 16.5C14.7426 16.5 15.75 15.4926 15.75 14.25C15.75 13.0074 14.7426 12 13.5 12C12.2574 12 11.25 13.0074 11.25 14.25C11.25 15.4926 12.2574 16.5 13.5 16.5Z"
        {...DEFAULT_PATH_PROPS}
      />
      <path d="M6.44336 10.1325L11.5659 13.1175" {...DEFAULT_PATH_PROPS} />
      <path d="M11.5584 4.88251L6.44336 7.86751" {...DEFAULT_PATH_PROPS} />
    </svg>
  );
};
