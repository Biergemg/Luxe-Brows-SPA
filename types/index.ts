export interface BaseService {
  id: string;
  name: string;
  description: string;
  price?: string;
  note?: string;
  highlight?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: BaseService[];
  iconName: string;
  imagePath: string;
  imagePosition?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  service: string;
  quote: string;
  rating: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BusinessInfo {
  name: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    postalCode?: string;
    location: string;
    unit?: string;
    fullAddress: string;
  };
  phone: string;
  whatsapp: string;
  mapsUrl?: string;
  hours: {
    days: string;
    time: string;
  }[];
  social: {
    instagram?: string;
    facebook?: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface GalleryItem {
  id: string;
  imagePath: string;
  alt: string;
  category: string;
}
