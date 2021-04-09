import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'
import { Header } from './Header';
import { HeaderProps } from './types';

export default {
  title: 'Header',
  component: Header,
  argTypes: {
    accentColor: {
      name: 'Accent Color',
      description: 'Used in the hover effect on the navigation.',
      control: {
        type: 'color'
      }
    },
    sameSite: {
      name: 'Same Site',
      description: 'When enabled, links will open in the same tab, using the existing domain.',
    }
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    }
  }
} as Meta

const Template: Story<HeaderProps> = args => <Header {...args}>Header</Header>

export const Primary = Template.bind({})
Primary.args = {
  accentColor: '#03a6a6',
  sameSite: false,
}
