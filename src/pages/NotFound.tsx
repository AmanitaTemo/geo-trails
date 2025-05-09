
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Layout>
      <div className="container py-20 flex flex-col items-center justify-center">
        <h1 className="text-6xl md:text-8xl font-bold text-geo-green-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-8">Page Not Found</h2>
        <p className="text-xl text-muted-foreground mb-12 text-center max-w-xl">
          The page you're looking for doesn't seem to exist. Let's get you back on the right trail.
        </p>
        <Link to="/">
          <Button size="lg">Return to Homepage</Button>
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;