import {Meta, Story} from "@storybook/react";
import DatePickerInput from "../components/SideModalComponent/datePickerInput";

export default {
  title: "DatePickerInput",
  component: DatePickerInput,
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

const Template: Story<typeof DatePickerInput> = (args) => <DatePickerInput {...args} />;

export const Default = Template.bind({});

Default.args= {
    // label: 'Password',
    // variant: 'outlined',
    // size: 'medium',
    // autoComplete: "email",
    // fullWidth: false,
    // disabled: false,
}