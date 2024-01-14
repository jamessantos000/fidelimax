import "../app/css.css";
import AskRadioSelect from "../app/components/questions/RadioSelect";

export default {
  title: "Questions/5 - Seleção única rádio",
  component: AskRadioSelect,
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

const Template = (args) => <AskRadioSelect {...args} />;

export const Erro = Template.bind({});
Erro.args = {
  ask: "Você gostou deste produto?",
  reply: "",
  mandatory: true,
  error: true,
};

export const Ok = Template.bind({});
Ok.args = {
  ask: "Você gostou deste produto?",
  reply: 1,
  mandatory: true,
  error: false,
};
