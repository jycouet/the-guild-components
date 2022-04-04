import { FC } from 'react';
import type { IBannerProps } from '../types/components';
import { Wrapper } from './Banner.styles';

export const Banner: FC<IBannerProps> = ({ children, ...restProps }) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};
