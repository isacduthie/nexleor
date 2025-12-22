import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

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

function ContactForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "Thank you for reaching out. We'll get back to you shortly.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="heading-section text-foreground mb-6">
              Send Us a Message
            </h2>
            <p className="text-body mb-8">
              Tell us about your project or challenge. The more detail you 
              provide, the better we can prepare for our conversation.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="John"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    required
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Work Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john.doe@company.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  required
                  placeholder="Your Company"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">What can we help with?</Label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="e.g., System architecture review, Program recovery"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Tell us more</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Describe your project, challenge, or what you're looking to accomplish..."
                />
              </div>

              <Button
                type="submit"
                variant="cta"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <ArrowRight size={16} />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:pl-8">
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
                      India | Global Delivery
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-primary-foreground mb-4">
                Prefer a Quick Call?
              </h3>
              <p className="text-primary-foreground/70 mb-6">
                Schedule a 30-minute discovery call to discuss your challenges 
                and explore how we might help.
              </p>
              <Button variant="hero" className="w-full">
                Schedule a Call
                <ArrowRight size={16} />
              </Button>
            </div>
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
      <ContactForm />
    </Layout>
  );
};

export default Contact;
