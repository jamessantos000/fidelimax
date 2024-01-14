import "../app/css.css";
import Alert from "../app/components/Alert";

export default {
  title: "UI/Alerta",
  component: Alert,
  argTypes: {
    closeAlert: { action: "closed" },
  },
  decorators: [
    (Story) => (
      <div className="w-11/12 md:w-2/5 h-screen bg-white">
        <Story />
      </div>
    ),
  ],
};

const Template = (args) => <Alert {...args} />;

export const Erro = Template.bind({});
Erro.args = {
  type: 'error',
  message: 'Algo não ocorreu como esperávamos.',
};

export const Sucesso = Template.bind({});
Sucesso.args = {
  type: 'success',
  message: 'Opaa, deu tudo certo.',
};