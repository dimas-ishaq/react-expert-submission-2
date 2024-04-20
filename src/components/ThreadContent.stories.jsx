import ThreadContent from "./ThreadContent";
import { Provider } from "react-redux";
import store from '../states/index'
import { MemoryRouter } from "react-router-dom";


export default {
  component: 'Threads',
  title: 'Thread List'
}

const Template = (args) => {
  return (
    <Provider store={store}>
      <MemoryRouter>
        <div className="bg-gray-200 p-5 rounded">
          <ThreadContent {...args} />
        </div>

      </MemoryRouter>
    </Provider>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "thread-1",
  title: "Thread Pertama",
  body: "Ini adalah thread pertama",
  avatar: "https://ui-avatars.com/api/?name=Reviewer&background=random"
}