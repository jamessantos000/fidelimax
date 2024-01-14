import "../app/css.css";
import "../app/globals.css";

import Button from "../app/components/Button";

export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
  decorators: [
    (Story) => (
      <div className="w-11/12 md:w-2/5 h-screen bg-orange">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Cadastrar",
  additionalClass:
    "text-white border-solid border-2 rounded-lg w-full h-12 bg-green-800",
};
