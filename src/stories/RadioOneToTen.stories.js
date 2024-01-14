import "../app/css.css";
import AskRadioOneToTen from "../app/components/questions/RadioOneToTen";

export default {
  title: "Questions/2 - Rádio de 1 a 10",
  component: AskRadioOneToTen,
  argTypes: {
    onChange: { action: "changed" },
  },
  decorators: [
    (Story) => (
      <div className="w-11/12 md:w-2/5 h-screen bg-white">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <AskRadioOneToTen {...args} />;

export const Erro = Template.bind({});
Erro.args = {
  ask: "Como você avalia este produto?",
  reply: 0,
  mandatory: true,
  error: true,
};

export const Ok = Template.bind({});
Ok.args = {
  ask: "Como você avalia este produto?",
  reply: 7,
  mandatory: true,
  error: false,
};
