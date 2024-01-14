import "../app/css.css";
import AskMultiSelect from "../app/components/questions/MultiSelect";

export default {
  title: "Questions/6 - Seleção múltipla",
  component: AskMultiSelect,
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

const Template = (args) => <AskMultiSelect {...args} />;

export const Erro = Template.bind({});
Erro.args = {
  ask: "Você gostou deste produto?",
  reply: null,
  options: [
    { value: 0, description: "Opcão 1" },
    { value: 1, description: "Opcão 2" },
    { value: 2, description: "OPC 3" },
    { value: 3, description: "Mais alguma coisa" },
  ],
  mandatory: true,
  error: true,
};

export const Ok = Template.bind({});
Ok.args = {
  ask: "Você gostou deste produto?",
  reply: [0,3],
  options: [
    { value: 0, description: "Opcão 1" },
    { value: 1, description: "Opcão 2" },
    { value: 2, description: "OPC 3" },
    { value: 3, description: "Mais alguma coisa" },
  ],
  mandatory: true,
  error: false,
};
