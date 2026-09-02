import { BeforeAfter } from "@/components/before-after";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { HeroNav } from "@/components/hero-nav";
import { HowItWorks } from "@/components/how-it-works";
import { Location } from "@/components/location";
import { PricingSnapshot } from "@/components/pricing-snapshot";
import { RecipesTeaser } from "@/components/recipes-teaser";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <HeroNav />
      <BeforeAfter />
      <PricingSnapshot />
      <Testimonials />
      <HowItWorks />
      <RecipesTeaser />
      <Faq />
      <Location />
    </main>
  );
}
