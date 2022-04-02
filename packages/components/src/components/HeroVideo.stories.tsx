import type { Story, Meta } from '@storybook/react/types-6-0';
import type { IHeroVideoProps } from '../types/components';
import { dummyHeroVideo } from '../helpers/dummy';
import { HeroVideo } from './HeroVideo';

export default {
  title: 'Components/Heroes/Video',
  component: HeroVideo,
  argTypes: {
    title: {
      name: 'Title',
    },
    description: {
      name: 'Description',
    },
    video: {
      name: 'Video',
    },
    flipped: {
      name: 'Flip Orientation',
    },
    link: {
      name: 'Link',
    },
  },
} as Meta;

const Template: Story<IHeroVideoProps> = (args) => <HeroVideo {...args} />;

export const Default = Template.bind({});

Default.args = {
  ...dummyHeroVideo,
};
