export interface Tour {
    id: string;
    title: string;
    description: string;
    shortDescription: string;
    duration: string;
    location: string;
    price: number;
    image: string;
    includedServices: string[];
    itinerary: {
      day: number;
      title: string;
      description: string;
    }[];
    maxGroupSize: number;
  }
  