import { Layout } from "@/components/layout/Layout";
import {
  HeroSection,
  ValuePillarsSection,
  CTASection,
} from "@/components/home/HomeComponents";
import { Link } from "react-router-dom";
import { ArrowRight, Plane, Microchip, HeartPulse } from "lucide-react";

const industries = [
  {
    icon: Plane,
    name: "Aerospace & Defense",
    description: "Safety-Critical Systems for the Skies - We understand what it takes to design, certify, and manufacture systems that must work—every time.",
    href: "/industries#aerospace",
  },
  {
    icon: Microchip,
    name: "Embedded & High-Tech Systems",
    description: "We support complex embedded and high-tech systems through hands-on engineering, helping teams design, stabilize, integrate, and scale mission-critical products across hardware, software, and controls.",
    href: "/industries#embedded",
  },
  {
    icon: HeartPulse,
    name: "MedTech & Healthcare",
    description: "A consulting partner focused on embedded systems that enable smarter, globally scalable medical devices.",
    href: "/industries#medtech",
  },
];

function IndustriesPreview() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div>
            <h2 className="heading-section text-foreground mb-4">
              Industries We Serve
            </h2>
            <p className="text-body max-w-xl">
              Deep domain expertise across regulated and safety-critical sectors.
            </p>
          </div>
          <Link
            to="/industries"
            className="text-accent font-medium flex items-center gap-2 hover:gap-3 transition-all mt-4 lg:mt-0"
          >
            View All Industries <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.name}
              to={industry.href}
              className="group card-elevated p-6 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <industry.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {industry.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {industry.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function DifferentiatorSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Approach
            </span>
            <h2 className="heading-section text-foreground mb-6">
              Not Consultants. Engineering Partners.
            </h2>
            <p className="text-body mb-8">
              We're practitioners first. Our team has spent decades designing, 
              building, and certifying complex systems—not just advising on them.
              We roll up our sleeves, work alongside your teams, and stay until 
              the job is done.
            </p>
            <Link to="/about">
              <span className="text-accent font-medium flex items-center gap-2 hover:gap-3 transition-all">
                Learn About Our Story <ArrowRight size={16} />
              </span>
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-secondary rounded-2xl overflow-hidden">
              <div className="absolute inset-0 geometric-pattern opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
              <div className="absolute inset-8 border-2 border-dashed border-border rounded-xl" />
              <div className="absolute inset-16 border-2 border-dashed border-border/50 rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValuePillarsSection />
      <DifferentiatorSection />
      <IndustriesPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
