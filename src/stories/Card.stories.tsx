import {Meta, Story} from "@storybook/react";
import Card from "../components/CardComponent/Card";

export default {
  title: "Card",
  component: Card,
  parameters: {
    type: {
      type: "string",
      options: ["checkbox", "radio"],
      control: {
        type: "radio",
      },
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
  },
} as Meta;

const Template: Story<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args= {
    // label: 'Password',
    // variant: 'outlined',
    // size: 'medium',
    // autoComplete: "email",
    // fullWidth: false,
    // disabled: false,
}