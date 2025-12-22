import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-[60vh] flex items-center justify-center">
        <div className="section-container text-center">
          <h1 className="text-8xl font-bold text-primary mb-4">404</h1>
          <h2 className="heading-section text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-body max-w-md mx-auto mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="cta" size="lg">
              <Home size={18} />
              Back to Home
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
