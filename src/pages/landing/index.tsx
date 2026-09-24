import { CTA, Feature, Header, Hero } from "../../components";

export default function Landing() {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <Hero />
        <Feature />
        <CTA />
      </main>
    </div>
  );
}
