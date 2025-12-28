import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Plane, Heart, Microchip, Shield, CheckCircle2 } from "lucide-react";

const industries = [
  {
    id: "aerospace",
    icon: Plane,
    title: "Aerospace & Defense",
    subtitle: "Safety-Critical Systems for the Skies",
    description:
      "We understand what it takes to design, certify, and manufacture systems that must work—every time.",
    capabilities: [
      "Flight systems and avionics",
      "Unmanned aerial systems (UAS/UAV)",
      "Ground support equipment",
      "Defense electronics and communications",
      "Certification-ready development processes",
      "Supplier development and oversight",
    ],
    highlights: [
      "Experience with major OEMs and Tier-1 suppliers",
      "DO-178C/DO-254 development and certification support",
      "Program recovery for delayed aerospace programs",
    ],
  },
  {
    id: "healthcare",
    icon: Heart,
    title: "Healthcare & Medical Devices",
    subtitle: "Regulated Innovation for Patient Safety",
    description:
      "Medical device development demands precision, traceability, and regulatory rigor. We help organizations navigate FDA, CE marking, and ISO requirements while delivering innovative products.",
    capabilities: [
      "Class II and Class III device development",
      "Software as a Medical Device (SaMD)",
      "Implantable and wearable devices",
      "Diagnostic and monitoring systems",
      "IEC 62304 software lifecycle compliance",
      "Risk management per ISO 14971",
    ],
    highlights: [
      "FDA 510(k) and PMA submission support",
      "ISO 13485 QMS implementation",
      "Design controls and DHF documentation",
    ],
  },
  {
    id: "embedded",
    icon: Microchip,
    title: "Embedded & High-Tech Systems",
    subtitle: "Real-Time Performance, Industrial Reliability",
    description:
      "From IoT platforms to industrial control systems, we design and build embedded solutions that perform reliably in demanding environments.",
    capabilities: [
      "Real-time operating systems (RTOS)",
      "Industrial automation and control",
      "IoT platforms and edge computing",
      "Motor drives and power electronics",
      "Sensor integration and signal processing",
      "Communication protocols (CAN, Ethernet, wireless)",
    ],
    highlights: [
      "Cross-platform firmware development",
      "Hardware-software co-design",
      "Functional safety for industrial systems",
    ],
  },
];

function IndustriesHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      <div className="relative section-container">
        <div className="max-w-3xl">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            Industries
          </span>
          <h1 className="heading-display text-foreground mb-6">
            Deep Domain Expertise
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We focus on industries where engineering complexity meets regulatory 
            rigor—and where getting it wrong is not an option.
          </p>
        </div>
      </div>
    </section>
  );
}

function IndustrySection({
  industry,
  index,
}: {
  industry: (typeof industries)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <section
      id={industry.id}
      className={`section-padding ${isEven ? "bg-background" : "bg-muted/50"}`}
    >
      <div className="section-container">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left Column - Info */}
          <div className="lg:col-span-2">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
              <industry.icon className="w-7 h-7 text-primary" />
            </div>
            <h2 className="heading-section text-foreground mb-2">
              {industry.title}
            </h2>
            <p className="text-accent font-medium mb-6">{industry.subtitle}</p>
            <p className="text-body mb-8">{industry.description}</p>

            {/* Highlights */}
            <div className="space-y-3">
              {industry.highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-accent mt-1 shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Link to="/contact">
                <Button variant="cta">
                  Discuss Your Project
                  <ArrowRight size={16} />
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column - Capabilities */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-xl p-8 h-full">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Core Capabilities
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {industry.capabilities.map((capability) => (
                  <div
                    key={capability}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 shrink-0" />
                    <span className="text-sm">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustriesCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container text-center">
        <h2 className="heading-section text-primary-foreground mb-6">
          Working in a Different Industry?
        </h2>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">
          Our engineering fundamentals translate across domains. If you're 
          building something complex and regulated, we should talk.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="xl">
            Let's Explore Together
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
}

const Industries = () => {
  return (
    <Layout>
      <IndustriesHero />
      {industries.map((industry, index) => (
        <IndustrySection key={industry.id} industry={industry} index={index} />
      ))}
      <IndustriesCTA />
    </Layout>
  );
};

export default Industries;
