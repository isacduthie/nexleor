import { Layout } from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Users, Target, Lightbulb, Wrench, User } from "lucide-react";
import isaacPhoto from "@/assets/isaac-raj.png";

const teamMembers = [
  {
    name: "Isaac Raj",
    title: "Principal Consultant | Engineering & Technology",
    photo: isaacPhoto,
    bio: [
      "Isaac Duthie is a senior engineering leader with 25+ years of experience across embedded systems, aerospace and defense, and safety-critical products. He brings deep hands-on engineering capability combined with leadership in program execution, supplier management, and global delivery.",
      "Formerly a Director of Engineering at Collins Aerospace, Isaac led multi-disciplinary teams spanning electronics, embedded software, systems, FPGA, test systems, and program management. His work includes avionics, control and power systems, sensors, communication platforms, and connected solutions—delivered from early technology development through NPI, certification, and sustained execution.",
      "Isaac's expertise covers embedded and real-time platforms, electronic hardware and FPGA-based systems, control and power electronics, and test and validation environments. He has built and scaled engineering teams, managed complex supplier ecosystems, and driven execution across distributed locations in India, Europe, and the Americas.",
      "At NexLeor, Isaac works closely with client leadership and engineering teams on complex product and system challenges—bringing engineering depth, execution discipline, and a strong focus on outcomes that work in the real world.",
    ],
  },
  {
    name: "Team Member",
    title: "Senior Consultant",
    photo: null,
    bio: ["Bio coming soon."],
  },
  {
    name: "Team Member",
    title: "Senior Consultant",
    photo: null,
    bio: ["Bio coming soon."],
  },
];

const differentiators = [
  {
    icon: Users,
    title: "Practitioner-Led",
    description:
      "Our consultants have designed and delivered the systems they advise on—not just studied them.",
  },
  {
    icon: Target,
    title: "Systems Thinking",
    description:
      "We understand how requirements, architecture, compliance, and execution interconnect.",
  },
  {
    icon: Lightbulb,
    title: "Applied AI Engineering",
    description:
      "We use AI-driven insights to navigate technical complexity, operational constraints, and regulatory realities.",
  },
  {
    icon: Wrench,
    title: "Hands-On Execution",
    description:
      "We embed with your teams to solve real problems—turning intent into delivered results.",
  },
];

const principles = [
  "Deep understanding of complex, regulated industries",
  "Decades of collective experience in aerospace and embedded systems",
  "Focus on outcomes, not just activities or deliverables",
  "Seamless integration with your engineering and program teams",
  "Global delivery capability with local expertise",
];

function AboutHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="absolute inset-0 geometric-pattern opacity-30" />
      
      <div className="relative section-container">
        <div className="max-w-3xl">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            About NexLeor
          </span>
          <h1 className="heading-display text-foreground mb-6">
            Engineers First. Consultants Second.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            NexLeor was founded by practitioners who spent their careers 
            building complex systems—and saw firsthand the gap between 
            traditional consulting and what engineering organizations 
            actually need.
          </p>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="heading-section text-foreground mb-6">Our Story</h2>
            <div className="space-y-6 text-body">
              <p>
                We've been in your shoes. We've led development programs, 
                navigated certification challenges, and delivered products 
                under pressure. We know the difference between a consultant 
                who understands your problem on paper and one who has lived it.
              </p>
              <p>
                NexLeor was built on a simple premise: engineering organizations 
                deserve partners who can roll up their sleeves and contribute 
                meaningfully—not just analyze from the sidelines.
              </p>
              <p>
                We work with OEMs, Tier-1 suppliers, and deep-tech 
                startups across aerospace and high-tech embedded systems. 
                We're trusted to tackle their hardest engineering challenges.
              </p>
            </div>
          </div>
          
          <div className="bg-secondary rounded-2xl p-8">
            <h3 className="heading-subsection text-foreground mb-6">
              What Sets Us Apart
            </h3>
            <ul className="space-y-4">
              {principles.map((principle, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-secondary-foreground">{principle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function DifferentiatorsSection() {
  return (
    <section className="section-padding bg-muted/50">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Different by Design
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            We're not a traditional IT services firm. We're a focused 
            engineering consulting practice built for technical depth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item) => (
            <div
              key={item.title}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <item.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-4">The Team</h2>
          <p className="text-body max-w-2xl mx-auto">
            Meet the practitioners who bring decades of hands-on engineering experience to every engagement.
          </p>
        </div>

        <div className="space-y-16">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-8 lg:p-12"
            >
              <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
                <div className="flex flex-col items-center lg:items-start">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl object-cover object-top mb-4"
                    />
                  ) : (
                    <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-2xl bg-muted flex items-center justify-center mb-4">
                      <User className="w-20 h-20 text-muted-foreground/50" />
                    </div>
                  )}
                  <h3 className="heading-subsection text-foreground text-center lg:text-left">
                    {member.name}
                  </h3>
                  <p className="text-accent text-sm font-medium text-center lg:text-left">
                    {member.title}
                  </p>
                </div>

                <div className="space-y-4">
                  {member.bio.map((paragraph, pIndex) => (
                    <p key={pIndex} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCTA() {
  return (
    <section className="section-padding bg-primary">
      <div className="section-container text-center">
        <h2 className="heading-section text-primary-foreground mb-6">
          Let's Build Something That Works
        </h2>
        <p className="text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8">
          Whether you're facing a complex technical challenge or need to 
          accelerate your program, we're ready to help.
        </p>
        <Link to="/contact">
          <Button variant="hero" size="xl">
            Schedule a Discovery Call
            <ArrowRight size={18} />
          </Button>
        </Link>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <Layout>
      <AboutHero />
      <StorySection />
      <DifferentiatorsSection />
      <TeamSection />
      <AboutCTA />
    </Layout>
  );
};

export default About;
