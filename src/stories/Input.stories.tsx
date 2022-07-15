import {Meta, Story} from "@storybook/react";
import Checkbox from "../components/SideModalComponent/checkbox";

export default {
  title: "Checkbox",
  component: Checkbox,
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

const Template: Story<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

Default.args= {
    // label: 'Password',
    // variant: 'outlined',
    // size: 'medium',
    // autoComplete: "email",
    // fullWidth: false,
    // disabled: false,
}
