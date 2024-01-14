import "../app/css.css";
import "../app/globals.css";

import StarIcon from "../app/components/Star";

export default {
  title: "UI/Estrela",
  component: StarIcon,
  argTypes: {
    onChange: { action: "changed" },
  },
  decorators: [
    (Story) => (
      <div className="w-11/12 md:w-2/5 h-screen bg-orange">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <StarIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
    star: 0,
    fill: 'orange'
};
