export type Gene = "Male" | "Female";

export type Product = "Dog Food" | "Cat Food" | "Toy" | "Costume";

export type PetProductType = {
 id: string;
 title: string;
 gene?: Gene;
 age?: number;
 product?: Product;
 size?: number;
 price: number;
 image: string;
};
