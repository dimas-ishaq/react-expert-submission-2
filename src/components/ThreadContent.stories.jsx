import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import ThreadContent from './ThreadContent';
import store from '../states/index';

export default {
  component: 'Threads',
  title: 'Thread List',
};

function Template(args) {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <div className="bg-gray-200 p-5 rounded">
          <ThreadContent {...args} />
        </div>
      </MemoryRouter>
    </Provider>
  );
}

export const Default = Template.bind({});
Default.args = {
  id: 'thread-1',
  title: 'Thread Pertama',
  body: 'Ini adalah thread pertama',
  avatar: 'https://ui-avatars.com/api/?name=Reviewer&background=random',
};
