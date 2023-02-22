export type createAdsParams = {
  id: string;
};

export type createAdsBodyParams = {
  state: string;
  category: string;
  images: string;
  dateCreated: Date;
  title: string;
  price: number;
  priceNegotiable: boolean;
  description: string;
  views: number;
  status: string;
};
