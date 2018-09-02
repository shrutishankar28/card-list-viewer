export interface CardType {
  imageUrl: string;
  caption: string;
  id: string;
  taggedImages: string[];
  taggedTexts: TaggedTextType[];
  vendorData: VendorType;
}

export interface VendorType {
  vendor: string;
  location: string;
  name: string;
  price: string;
}

export interface TaggedTextType {
  year: string;
  season: string;
  gender: string;
  category: string;
}

export interface Notification {
  message: string;
}
