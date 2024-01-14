import "../app/css.css";
import "../app/globals.css";

import Flex from "../app/components/Flex";

export default {
  title: "UI/Flex",
  component: Flex,
  decorators: [
    (Story) => (
      <div className="w-11/12 md:w-2/5 h-screen bg-orange">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Flex {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </>
  ),
  additionalClass: "text-white bg-indigo-950 text-center p-8 justify-around",
  additionalStyles: { width: "100vw", height: "100vh" },
};
