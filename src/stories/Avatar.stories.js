import "../app/css.css";
import Avatar from "../app/components/Avatar";

export default {
  title: "UI/Avatar",
  component: Avatar,
  decorators: [
    (Story) => (
      <div className="w-11/12 md:w-2/5 h-screen bg-white">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'JS'
};