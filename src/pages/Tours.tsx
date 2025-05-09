
import { tours } from "@/data/tours";
import { Layout } from "@/components/layout/Layout";
import { TourList } from "@/components/tours/TourList";

const Tours = () => {
  return (
    <Layout>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Our Tours</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover Georgia's breathtaking landscapes and rich cultural heritage with our expert-guided tours
          </p>
        </div>
        
        <TourList tours={tours} />
      </div>
    </Layout>
  );
};

export default Tours;
