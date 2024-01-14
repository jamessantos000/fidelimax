import "../app/css.css";
import "../app/globals.css";

import Radio from "../app/components/Radio";

export default {
  title: "UI/Radio",
  component: Radio,
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

const Template = (args) => <Radio {...args} />;

export const Unchecked = Template.bind({});
Unchecked.args = {
  name: "radio",
  value: 1,
  id: 1,
  checked: false,
};

export const Checked = Template.bind({});
Checked.args = {
    name: "radio",
    value: 1,
    id: 1,
    checked: true,
  };
