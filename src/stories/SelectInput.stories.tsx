import {Meta, Story} from "@storybook/react";
import SelectInput from "../components/SideModalComponent/SelectInput";

export default {
  title: "SelectInput",
  component: SelectInput,
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

const Template: Story<typeof SelectInput> = (args) => <SelectInput {...args} />;

export const Default = Template.bind({});

Default.args= {
    // label: 'Password',
    // variant: 'outlined',
    // size: 'medium',
    // autoComplete: "email",
    // fullWidth: false,
    // disabled: false,
}