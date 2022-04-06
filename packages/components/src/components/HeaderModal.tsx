import { FC, Fragment } from 'react';
import { Modal } from './Modal';
import type { IHeaderModalProps } from '../types/components';
import { PRODUCTS } from '../helpers/products';

// Copy array because splice mutate original array
const products = [...PRODUCTS];
const hiveIndex = PRODUCTS.findIndex((product) => product.children === 'Hive');
const [hive] = products.splice(hiveIndex, 1);

const productCategories = [
  { title: 'Products', items: [hive] },
  { title: 'Open Source', items: products },
];

export const HeaderModal: FC<IHeaderModalProps> = ({
  title,
  modalOpen,
  onCancelModal,
  ...restProps
}) => {
  return (
    <Modal
      title={title}
      placement="bottom"
      visible={modalOpen}
      onCancel={() => onCancelModal()}
      {...restProps.modalProps}
    >
      {productCategories.map((category, index) => (
        <Fragment key={index}>
          <h3
            className="mb-3 w-full text-base font-normal text-black dark:text-gray-400"
            {...restProps.categoryTitleProps}
          >
            {category.title}
          </h3>
          <div
            className="
              mb-6
              flex
              flex-wrap
              not-hover:opacity-20
              not-hover:brightness-0
              dark:not-hover:invert
            "
          >
            {category.items.map((product) => (
              <a
                className="
                  group
                  flex
                  w-full
                  items-center
                  rounded-lg
                  py-4
                  px-3
                  no-underline
                  outline-none
                  hocus:bg-gray-100
                  dark:hocus:bg-gray-800
                  md:w-1/2
                "
                key={product.children}
                href={product.href}
                target="_blank"
                rel="noreferrer"
                {...restProps.linkProps}
              >
                <div className="relative mr-3">
                  <img
                    src={product.logo}
                    alt={`${product.children} blurred logo`}
                    className="
                      absolute
                      hidden
                      max-w-[54px]
                      opacity-40
                      blur-sm
                      md:group-hover:block
                    "
                    {...restProps.imageProps}
                  />
                  <img
                    src={product.logo}
                    alt={`${product.children} logo`}
                    className="max-w-[54px]"
                    {...restProps.imageProps}
                  />
                </div>
                <div>
                  <h4
                    className="text-base font-semibold text-black dark:text-gray-400"
                    {...restProps.titleProps}
                  >
                    {product.children}
                  </h4>
                  <p
                    className="text-xs font-medium text-gray-400 dark:text-gray-500"
                    {...restProps.descriptionProps}
                  >
                    {product.title}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </Fragment>
      ))}
    </Modal>
  );
};
