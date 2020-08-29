import { action } from "@storybook/addon-actions";
import { withKnobs, object, text } from "@storybook/addon-knobs";
import MyButton from "./Button.vue";

export default {
  title: "Example/Button",
  decorators: [withKnobs],
  component: MyButton,
  argTypes: {
    backgroundColor: { control: "color" },
    size: { control: { type: "select", options: ["small", "medium", "large"] } }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { MyButton },
  decorators: [withKnobs],
  template: '<my-button @onClick="onClick" v-bind="$props" />'
});

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: text("label", "Button")
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button"
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button"
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button"
};
