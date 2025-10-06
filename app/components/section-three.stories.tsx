import type { Meta, StoryObj } from "@storybook/react";
import SectionThree from "./section-three";

const meta = {
  title: "Website/SectionThree",
  component: SectionThree,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionThree>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SectionThree />,
};


