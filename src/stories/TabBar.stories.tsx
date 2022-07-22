import {Meta, Story} from "@storybook/react";
import TabBar from "../components/TabBarComponent/TabBar";

export default {
  title: "TabBar",
  component: TabBar,
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

const Template: Story<typeof TabBar> = () => <TabBar />;

export const Default = Template.bind({});

Default.args= {
    // label: 'Password',
    // variant: 'outlined',
    // size: 'medium',
    // autoComplete: "email",
    // fullWidth: false,
    // disabled: false,
}