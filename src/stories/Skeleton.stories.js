import "../app/css.css";
import "../app/globals.css";

import Skeleton from "../app/components/Skeleton";

export default {
  title: "UI/Skeleton",
  component: Skeleton,
  decorators: [
    (Story) => (
      <div className="w-11/12 md:w-2/5 h-screen bg-orange">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});
Default.args = {
    item: 3
  };
