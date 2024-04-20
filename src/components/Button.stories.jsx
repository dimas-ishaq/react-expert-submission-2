import Button from './Button';

export default {
  component: Button,
  title: 'Button',
  argTypes: {
    onClick: { action: 'clicked' },
  },
};
function Template(args) {
  return <Button {...args} />;
}

export const Primary = Template.bind({});

Primary.args = {
  variant: 'blue',
  label: 'Primary Button',
  onClick: () => alert('Hello'),
};

export const Secondary = Template.bind({});

Secondary.args = {
  variant: 'sky',
  label: 'Secondary Button',
  onClick: () => alert('Holla'),
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'red',
  label: 'Danger Button',
  onClick: () => alert('danger'),
};
