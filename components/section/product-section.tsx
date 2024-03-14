import ProductCard from "../card/product-card";

type Gene = "Male" | "Female";

type PetProduct = {
 id: string;
 title: string;
 gene: Gene;
 age: number;
 price: number;
 image: string;
};

const dummyPetData: PetProduct[] = [
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

const ProductSection = () => {
 return (
  <section className="py-[28px] sm:px-[130px] px-[80px] grid lg:grid-cols-4 sm:grid-cols-2  gap-4">
   {dummyPetData.map((pet) => (
    <ProductCard key={pet.id} product={pet} />
   ))}
  </section>
 );
};

export default ProductSection;
