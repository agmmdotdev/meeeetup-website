import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "./nav-bar";

const meta = {
  title: "Website/NavBar",
  component: NavBar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <NavBar />,
};
