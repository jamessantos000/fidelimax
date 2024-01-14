import "../app/css.css";
import AskStar from "../app/components/questions/Star";

export default {
  title: "Questions/1 - Questão de estrela",
  component: AskStar,
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

const Template = (args) => <AskStar {...args} />;

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
  reply: 3,
  mandatory: true,
  error: false,
};
