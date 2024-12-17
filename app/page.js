import { BackgroundLinesDemo } from "./components/pages/Home";
import { SparklesPreview } from "./components/pages/Aboutus";
import { CardHoverEffectDemo } from "./components/pages/Services";
import ContactSection from "./components/pages/Footer";

export default function Home() {
  return (
    <div>
      <BackgroundLinesDemo />
      <SparklesPreview />
      <CardHoverEffectDemo />
      <ContactSection />
    </div>
    );
}
