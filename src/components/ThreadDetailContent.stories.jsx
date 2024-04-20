import ThreadDetailContent from './ThreadDetailContent';

export default {
  component: 'ThreadDetailContent',
  title: 'Thread Detail Content',
};

function Template(args) {
  return (
    <div className="bg-blue-950/95 p-5 rounded">
      <ThreadDetailContent {...args} />
    </div>
  );
}

export const Default = Template.bind({});
Default.args = {
  id: 'thread-1',
  title: 'This is a thread about something interesting!',
  body: 'Percobaan menggunakan storybook',
  category: 'learning',
  owner: {
    id: 'users-1',
    name: 'John Doe',
    avatar: 'https://ui-avatars.com/api/?name=Dimas&background=random',
  },
};
