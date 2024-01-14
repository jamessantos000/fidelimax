import "../app/css.css";
import AskText from "../app/components/questions/Text";

export default {
  title: "Questions/3 - Texto",
  component: AskText,
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

const Template = (args) => <AskText {...args} />;

export const Erro = Template.bind({});
Erro.args = {
  ask: "Como você avalia este produto?",
  reply: '',
  mandatory: true,
  error: true,
};

export const Ok = Template.bind({});
Ok.args = {
  ask: "Como você avalia este produto?",
  reply: 'Ah, sem dúvida, este produto é absolutamente incrível! Eu o avaliaria com um impressionante 11 em uma escala de 1 a 10.',
  mandatory: true,
  error: false,
};
