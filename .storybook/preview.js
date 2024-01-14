/** @type { import('@storybook/react').Preview } */
import '../src/app/css.css'
const preview = {
  parameters: {
    backgrounds: {
      default: "white",
      values: [
        {
          name: "white",
          value: "#FFF",
        },
      ],
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
