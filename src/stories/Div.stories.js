import "../app/css.css";
import "../app/globals.css";

import Div from "../app/components/Div";

export default {
  title: "UI/Div",
  component: Div,
  decorators: [
    (Story) => (
      <div className="w-11/12 md:w-2/5 h-screen bg-orange">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Div {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Esse é o exemplo do uso de uma div",
  additionalClass: "text-white bg-indigo-950 text-center p-8",
  additionalStyles: {width: '100vw', height: '100vh'}
};
