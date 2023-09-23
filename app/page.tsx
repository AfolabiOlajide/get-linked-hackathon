
// local imports
import FAQs from "./components/FAQs";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import JudgingCri from "./components/JudgingCri";
import PartnersSponsors from "./components/PartnersSponsors";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Rewards from "./components/Rewards";
import RulesGuidelines from "./components/RulesGuidelines";
import Timeline from "./components/Timeline";



export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Introduction />
      <RulesGuidelines />
      <JudgingCri />
      <FAQs />
      <Timeline />
      <Rewards />
      <PartnersSponsors />
      <PrivacyPolicy />
    </main>
  )
}
