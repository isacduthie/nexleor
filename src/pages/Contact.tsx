import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight } from "lucide-react";

function ContactHero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[var(--gradient-subtle)]" />
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      <div className="relative section-container">
        <div className="max-w-3xl">
          <span className="text-accent text-sm font-medium uppercase tracking-wider mb-4 block">
            Contact
          </span>
          <h1 className="heading-display text-foreground mb-6">
            Let's Solve Your Engineering Challenges
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to discuss your project? We'd love to hear about your 
            challenges and explore how we can help.
          </p>
        </div>
      </div>
    </section>
  );
}

function ContactInfo() {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="max-w-2xl mx-auto">
          <div className="bg-muted/50 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Get in Touch
            </h3>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Email</p>
                  <a
                    href="mailto:hello@nexleor.com"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    hello@nexleor.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="font-medium text-foreground mb-1">Locations</p>
                  <p className="text-muted-foreground">
                    77 Town Center, Bengaluru 37, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8">
            <h3 className="text-xl font-semibold text-primary-foreground mb-4">
              Ready to Start a Conversation?
            </h3>
            <p className="text-primary-foreground/70 mb-6">
              Reach out to discuss your challenges and explore how we might help.
            </p>
            <a href="mailto:hello@nexleor.com" className="block">
              <Button variant="hero" className="w-full">
                Email Us
                <ArrowRight size={16} />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  return (
    <Layout>
      <ContactHero />
      <ContactInfo />
    </Layout>
  );
};

export default Contact;
