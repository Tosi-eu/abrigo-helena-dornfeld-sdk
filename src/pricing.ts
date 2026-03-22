export type PriceSearchItemType = "medicine" | "input";

export type PriceSearchRequestBody = {
  itemName: string;
  itemType: PriceSearchItemType;
  dosage?: string;
  measurementUnit?: string;
};
  
export type PriceSearchHttpResponse = {
  averagePrice: number | null;
  source: string;
  lastUpdated: string | null;
};
  
export type PriceSearchResult = {
  averagePrice: number | null;
  source: string;
  lastUpdated: Date;
};
