import "../app/css.css";
import AskSelect from "../app/components/questions/Select";

export default {
  title: "Questions/4 - Seleção única select",
  component: AskSelect,
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

const Template = (args) => <AskSelect {...args} />;

export const Erro = Template.bind({});
Erro.args = {
  ask: "Como você avalia este produto?",
  reply: "",
  option: [
    { value: 0, description: "Opcão 1" },
    { value: 1, description: "Opcão 2" },
  ],
  mandatory: true,
  error: true,
};

export const Ok = Template.bind({});
Ok.args = {
  ask: "Como você avalia este produto?",
  reply: 1,
  option: [
    { value: 0, description: "Opcão 1" },
    { value: 1, description: "Opcão 2" },
  ],
  mandatory: true,
  error: false,
};
