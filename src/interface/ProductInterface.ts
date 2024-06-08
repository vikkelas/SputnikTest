import { LoadStatus } from "./Enums";

export interface ProductI {
  id: number;
  type: string;
  name: string;
  price: number;
  installmentPlan:boolean;
  size: string[]|null;
  color: string[] | null;
  power: string| null;
  dateOfManufacture: string | null;
  bestBeforeDate: string | null;
  sale: number;
}

export interface ProductStateI {
  products: ProductI[];
  loadStatus: LoadStatus;
  error: string|null;
}
