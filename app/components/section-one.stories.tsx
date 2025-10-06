import type { Meta, StoryObj } from "@storybook/react";
import SectionOne from "./section-one";

const meta = {
  title: "Website/SectionOne",
  component: SectionOne,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SectionOne />,
};
