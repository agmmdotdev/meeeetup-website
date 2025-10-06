import type { Meta, StoryObj } from "@storybook/react";
import SectionTwo from "./section-two";

const meta = {
  title: "Website/SectionTwo",
  component: SectionTwo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <SectionTwo />,
};
