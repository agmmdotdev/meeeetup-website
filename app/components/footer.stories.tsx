import React from "react";
import { Meta, Story } from "@storybook/react";
import Footer from "./footer";

const meta: Meta = {
  title: "Website/Footer",
  component: Footer,
};

export default meta;

const Template: Story = () => <Footer />;

export const Default = Template.bind({});
Default.storyName = "Default Footer";
