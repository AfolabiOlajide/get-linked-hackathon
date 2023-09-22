
// local imports
import Button from "./components/Button";
import Divider from "./components/Divider";
import Hero from "./components/Hero";
import Introduction from "./components/Introduction";
import JudgingCri from "./components/JudgingCri";
import RulesGuidelines from "./components/RulesGuidelines";


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Divider />
      <Introduction />
      <Divider />
      <RulesGuidelines />
      <Divider />
      <JudgingCri />
      <Divider />
    </main>
  )
}
