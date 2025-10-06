import type { Meta, StoryObj } from "@storybook/react";
import SectionFour from "./section-four";

const meta = {
  title: "Website/SectionFour",
  component: SectionFour,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionFour>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SectionFour />,
};
