
import { Tour } from "../types/tour";

export const tours: Tour[] = [
  {
    id: "kazbegi-adventure",
    title: "Tbilisi - Kaxeti",
    shortDescription: "Discover the majestic mountains and valleys of Kazbegi on this 3-day adventure.",
    description: "Experience the breathtaking beauty of the Kazbegi region with its snow-capped mountains, alpine meadows, and ancient villages. This 3-day tour takes you through Georgia's most spectacular mountain landscapes, including the iconic Gergeti Trinity Church perched high above the valley. You'll trek through stunning scenery, visit local communities, and enjoy authentic Georgian cuisine along the way.",
    duration: "3 days",
    location: "Tbilisi, Georgia",
    price: 530,
    image: "https://images.unsplash.com/photo-1563284223-333497472e88?q=80&w=1136&auto=format&fit=crop",
    includedServices: [
      "Transportation/Transfers During Tours (Driver Services, Including Transportation and Fuel)",
      "Services of English/Russian Speaking Driver-Guide",
      "Tickets for Tbilisi Cable Car",
      "Local Car in Kazbegi",
      "Accommodation in 4 stars Hotel BB Tbilisi",
      "1 Bottle of Water Per Day Per Person"
    ],
    itinerary: [
      {
        day: 1,
        title: "Tbilisi Tour",
        description: "Old Town: Bridge of Peace, Shardeni Street, Narikala Fortress (by cable car), Abanotubani Sulfur Baths, Holy Trinity Cathedral (Trinity Church). "
      },
      {
        day: 2,
        title: "Mtskheta (ancient capital of Georgia):",
        description: "Jvari Monastery (view of the confluence of the Kura and Aragvi rivers), Svetitskhoveli Cathedral, Uplistsikhe: Ancient rock-cut city, Return to Tbilisi: Free time. "
      },
      {
        day: 3,
        title: "Kazbegi (Stepantsminda)",
        description: "Ananuri (fortress and view of the Zhinvali Reservoir), Gudauri - Friendship Arch on the mountain (panoramic view), Stepantsminda: to the Holy Trinity Church (Gergeti) with Mount Kazbek in the background."
      },
      {
        day: 4,
        title: "Kakheti - wine region",
        description: "Sighnaghi (city of love): Walk along cozy streets with a view of the Alazani Valley, Visit Bodbe (a monastery and pilgrimage site where the relics of St. Nino, who brought Christianity to Georgia are kept), Wine tasting at a winery. Opportunity to taste traditional Georgian wines (Saperavi, Rkatsiteli)."
      }
    ],
    maxGroupSize: 12
  },
  {
    id: "tbilisi-city",
    title: "Tbilisi City Tour",
    shortDescription: "Explore the charming streets and rich history of Georgia's capital city.",
    description: "Discover the captivating blend of ancient and modern in Georgia's vibrant capital city, Tbilisi. This full-day tour takes you through narrow cobbled streets, sulfur baths, colorful houses with intricate wooden balconies, and modern architectural marvels. Experience the city's rich cultural heritage, sample delicious Georgian cuisine, and enjoy panoramic views from Narikala Fortress.",
    duration: "1 day",
    location: "Tbilisi, Georgia",
    price: 69,
    image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=1139&auto=format&fit=crop",
    includedServices: [
      "Professional English-speaking guide",
      "Transportation within the city",
      "Lunch at traditional Georgian restaurant",
      "Entrance fees to museums and attractions",
      "Cable car ticket",
      "Wine tasting"
    ],
    itinerary: [
      {
        day: 1,
        title: "Exploring Tbilisi",
        description: "Morning visit to the Old Town, Narikala Fortress, and Abanotubani district. Afternoon exploring Rustaveli Avenue, Freedom Square, and modern Tbilisi. Evening wine tasting and traditional dinner with folk show."
      }
    ],
    maxGroupSize: 15
  },
  {
    id: "kakheti-wine",
    title: "Kakheti Wine Experience",
    shortDescription: "Savor the flavors of Georgia's premier wine region on this full-day tour.",
    description: "Journey through Georgia's premier wine region, Kakheti, where wine-making traditions date back 8,000 years. This full-day tour takes you to family wineries and larger estates where you'll learn about the unique qvevri method of wine-making, a UNESCO-recognized cultural heritage. Taste a variety of Georgian wines, enjoy a traditional supra (feast), and explore the charming towns and landscapes of this beautiful region.",
    duration: "1 day",
    location: "Kakheti, Georgia",
    price: 89,
    image: "https://images.unsplash.com/photo-1566842937054-5150db5657a4?q=80&w=1074&auto=format&fit=crop",
    includedServices: [
      "Transportation from/to Tbilisi",
      "Professional English-speaking guide",
      "Visits to 3 different wineries",
      "Wine tasting (8+ varieties)",
      "Traditional Georgian lunch",
      "Bottled water"
    ],
    itinerary: [
      {
        day: 1,
        title: "Wine and Culture Tour",
        description: "Morning departure from Tbilisi. Visit to Sighnaghi, the 'City of Love'. Tour of family winery with tasting of traditional qvevri wines. Lunch at local restaurant. Afternoon visit to Khareba Winery and wine cellar tour. Return to Tbilisi in the evening."
      }
    ],
    maxGroupSize: 10
  },
  {
    id: "svaneti-trek",
    title: "Svaneti Trek",
    shortDescription: "Journey through the remote highland region of Svaneti with its medieval tower houses.",
    description: "Embark on an unforgettable adventure to Svaneti, Georgia's remote highland region known for its medieval tower houses and breathtaking mountain scenery. This 4-day trek takes you through pristine wilderness, traditional villages, and alongside glacial rivers. You'll stay in local guesthouses, interact with the proud Svan people, and experience their unique culture and cuisine.",
    duration: "4 days",
    location: "Svaneti, Georgia",
    price: 399,
    image: "https://images.unsplash.com/photo-1567344244928-8e88aa5d4801?q=80&w=1287&auto=format&fit=crop",
    includedServices: [
      "Transportation from/to Tbilisi",
      "3 nights accommodation in guesthouses",
      "All meals",
      "Professional English-speaking guide",
      "Luggage transport between villages",
      "Entrance fees to museums"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Mestia",
        description: "Early morning departure from Tbilisi. Scenic drive to Mestia, the main town in Svaneti. Evening exploration of Mestia and visit to the Svaneti Museum of History and Ethnography."
      },
      {
        day: 2,
        title: "Mestia to Zhabeshi Trek",
        description: "Trek from Mestia to Zhabeshi village through forests and alpine meadows. Visit to medieval Svan towers. Overnight in family guesthouse."
      },
      {
        day: 3,
        title: "Zhabeshi to Adishi Trek",
        description: "Full day trek from Zhabeshi to Adishi village. Cross mountain passes with views of glaciers. Traditional Svan dinner and folklore evening."
      },
      {
        day: 4,
        title: "Adishi Glacier and Return",
        description: "Morning hike to Adishi Glacier. Return to Mestia and drive back to Tbilisi, arriving in the evening."
      }
    ],
    maxGroupSize: 8
  },
  {
    id: "svaneti-trek",
    title: "Svaneti Trek",
    shortDescription: "Journey through the remote highland region of Svaneti with its medieval tower houses.",
    description: "Embark on an unforgettable adventure to Svaneti, Georgia's remote highland region known for its medieval tower houses and breathtaking mountain scenery. This 4-day trek takes you through pristine wilderness, traditional villages, and alongside glacial rivers. You'll stay in local guesthouses, interact with the proud Svan people, and experience their unique culture and cuisine.",
    duration: "4 days",
    location: "Svaneti, Georgia",
    price: 399,
    image: "https://images.unsplash.com/photo-1567344244928-8e88aa5d4801?q=80&w=1287&auto=format&fit=crop",
    includedServices: [
      "Transportation from/to Tbilisi",
      "3 nights accommodation in guesthouses",
      "All meals",
      "Professional English-speaking guide",
      "Luggage transport between villages",
      "Entrance fees to museums"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Mestia",
        description: "Early morning departure from Tbilisi. Scenic drive to Mestia, the main town in Svaneti. Evening exploration of Mestia and visit to the Svaneti Museum of History and Ethnography."
      },
      {
        day: 2,
        title: "Mestia to Zhabeshi Trek",
        description: "Trek from Mestia to Zhabeshi village through forests and alpine meadows. Visit to medieval Svan towers. Overnight in family guesthouse."
      },
      {
        day: 3,
        title: "Zhabeshi to Adishi Trek",
        description: "Full day trek from Zhabeshi to Adishi village. Cross mountain passes with views of glaciers. Traditional Svan dinner and folklore evening."
      },
      {
        day: 4,
        title: "Adishi Glacier and Return",
        description: "Morning hike to Adishi Glacier. Return to Mestia and drive back to Tbilisi, arriving in the evening."
      }
    ],
    maxGroupSize: 8
  },
  {
    id: "svaneti-trek",
    title: "Svaneti Trek",
    shortDescription: "Journey through the remote highland region of Svaneti with its medieval tower houses.",
    description: "Embark on an unforgettable adventure to Svaneti, Georgia's remote highland region known for its medieval tower houses and breathtaking mountain scenery. This 4-day trek takes you through pristine wilderness, traditional villages, and alongside glacial rivers. You'll stay in local guesthouses, interact with the proud Svan people, and experience their unique culture and cuisine.",
    duration: "4 days",
    location: "Svaneti, Georgia",
    price: 399,
    image: "https://images.unsplash.com/photo-1567344244928-8e88aa5d4801?q=80&w=1287&auto=format&fit=crop",
    includedServices: [
      "Transportation from/to Tbilisi",
      "3 nights accommodation in guesthouses",
      "All meals",
      "Professional English-speaking guide",
      "Luggage transport between villages",
      "Entrance fees to museums"
    ],
    itinerary: [
      {
        day: 1,
        title: "Journey to Mestia",
        description: "Early morning departure from Tbilisi. Scenic drive to Mestia, the main town in Svaneti. Evening exploration of Mestia and visit to the Svaneti Museum of History and Ethnography."
      },
      {
        day: 2,
        title: "Mestia to Zhabeshi Trek",
        description: "Trek from Mestia to Zhabeshi village through forests and alpine meadows. Visit to medieval Svan towers. Overnight in family guesthouse."
      },
      {
        day: 3,
        title: "Zhabeshi to Adishi Trek",
        description: "Full day trek from Zhabeshi to Adishi village. Cross mountain passes with views of glaciers. Traditional Svan dinner and folklore evening."
      },
      {
        day: 4,
        title: "Adishi Glacier and Return",
        description: "Morning hike to Adishi Glacier. Return to Mestia and drive back to Tbilisi, arriving in the evening."
      }
    ],
    maxGroupSize: 8
  }
];

export function getTourById(id: string): Tour | undefined {
  return tours.find(tour => tour.id === id);
}
