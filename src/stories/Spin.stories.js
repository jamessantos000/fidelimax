import "../app/css.css";
import "../app/globals.css";

import Spin from "../app/components/Spin";

export default {
  title: "UI/Spin",
  component: Spin,
  decorators: [
    (Story) => (
      <div className="w-11/12 md:w-2/5 h-screen bg-orange">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Spin {...args} />;

export const Default = Template.bind({});
Default.args = {};
