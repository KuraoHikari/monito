export type Gene = "Male" | "Female";

export type PetProductType = {
 id: string;
 title: string;
 gene: Gene;
 age: number;
 price: number;
 image: string;
};
