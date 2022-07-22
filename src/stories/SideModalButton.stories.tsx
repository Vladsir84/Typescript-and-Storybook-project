import {Meta, Story} from "@storybook/react";
import SideModalButton from "../components/SideModalComponent/SideModalButton";

export default {
  title: "SideModalButton",
  component: SideModalButton,
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

// const Template: Story<typeof SideModalButton> = () => <SideModalButton />;

// export const Default = Template.bind({});

// Default.args= {
//     // label: 'Password',
//     // variant: 'outlined',
//     // size: 'medium',
//     // autoComplete: "email",
//     // fullWidth: false,
//     // disabled: false,
// }