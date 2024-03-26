import { PetProductType } from "@/types/pet-type";
import { ProductPetSection } from "./ProductPetSection";
import { ProductSellingSection } from "./ProductSellingSection";

export const dummyProductData: PetProductType[] = [
 {
  id: "PD001",
  title: "Product 1",
  product: "Cat Food",
  size: 10,
  promos: "Promo 1",
  price: 1000,
  image: "/product/image1.png",
 },
 {
  id: "PD002",
  title: "Product 2",
  product: "Dog Food",
  size: 20,
  promos: "Promo 2",
  price: 2000,
  image: "/product/image2.png",
 },
 {
  id: "PD003",
  title: "Product 3",
  product: "Toy",
  size: 30,
  promos: "Promo 3",
  price: 3000,
  image: "/product/image3.png",
 },
];
export const dummyPetData: PetProductType[] = [
 {
  id: "MO231",
  title: "MO231 - Pomeranian White",
  gene: "Male",
  age: 2,
  price: 6900000,
  image: "/product/image2.png",
 },
 {
  id: "MO502",
  title: "MO502 - Poodle Tiny Yellow",
  gene: "Female",
  age: 2,
  price: 3900000,
  image: "/product/image3.png",
 },
 {
  id: "MO102",
  title: "MO102 - Poodle Tiny Sepia",
  gene: "Male",
  age: 2,
  price: 4000000,
  image: "/product/image4.png",
 },
 {
  id: "MO512",
  title: "MO512 - Alaskan Malamute Grey",
  gene: "Male",
  age: 2,
  price: 8900000,
  image: "/product/image5.png",
 },
 {
  id: "MO232",
  title: "MO232 - Pembroke Corgi Cream",
  gene: "Male",
  age: 2,
  price: 7900000,
  image: "/product/image6.png",
 },
 {
  id: "MO572",
  title: "MO572 - Pembroke Corgi Tricolor",
  gene: "Female",
  age: 2,
  price: 9000000,
  image: "/product/image7.png",
 },
 {
  id: "MO231",
  title: "MO231 - Pomeranian White",
  gene: "Female",
  age: 2,
  price: 6500000,
  image: "/product/image7.png",
 },
 {
  id: "MO542",
  title: "MO542 - Poodle Tiny Dairy Cow",
  gene: "Male",
  age: 2,
  price: 5000000,
  image: "/product/image8.png",
 },
];

export { ProductPetSection, ProductSellingSection };
