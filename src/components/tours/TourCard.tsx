
import { Link } from "react-router-dom";
import { Tour } from "@/types/tour";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface TourCardProps {
  tour: Tour;
}

export function TourCard({ tour }: TourCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow duration-300 animate-fade-in">
      <img 
        src={tour.image} 
        alt={tour.title}
        className="tour-card-image"
      />
      <CardHeader className="pt-4">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold">{tour.title}</h3>

        </div>
        <div className="flex items-center text-sm text-muted-foreground mt-1 space-x-4">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{tour.duration}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">
          {tour.shortDescription}
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center pt-0">
        <p className="text-lg font-bold">
          ${tour.price}
          <span className="text-sm font-normal text-muted-foreground"> / person</span>
        </p>
        <Link to={`/tours/${tour.id}`}>
          <Button variant="default">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
