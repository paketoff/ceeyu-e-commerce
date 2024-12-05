// src/types/Product.ts

export interface IProductDetails {
    id: string;
    description: string;
    price: number;
    company: string;
    createdAt?: string;
    updatedAt?: string;
    dob?: string;
    imageUrl?: string;
  }
  
  export interface IProduct {
    id: string;
    name: string;
    details: IProductDetails;
  }
  