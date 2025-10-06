import SectionOne from "./components/section-one";
import SectionTwo from "./components/section-two";
import SectionThree from "./components/section-three";
import SectionFour from "./components/section-four";
import ContactSection from "./components/contact-section";

export default function Home() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <div className="my-12 border-t border-gray-200" />
      <ContactSection />
    </div>
  );
}
