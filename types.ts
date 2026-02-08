
export interface Tour {
  id: string;
  name: string;
  description: string;
  duration: string;
  peopleLimit: string;
  price: number;
  image: string;
  category: 'adventure' | 'luxury' | 'cultural';
}

export interface Destination {
  id: string;
  name: string;
  description: string;
  priceFrom: number;
  image: string;
}

export interface BookingDetails {
  tourId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  departureDate: string;
  travelers: number;
  accommodation: 'standard' | 'comfort' | 'deluxe';
  specialRequests: string;
}

export interface AIPlanResponse {
  destinations: string[];
  itinerary: {
    day: number;
    activity: string;
    details: string;
  }[];
  tips: string[];
}
