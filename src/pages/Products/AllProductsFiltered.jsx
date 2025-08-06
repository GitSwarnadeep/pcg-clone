import React from "react";
import AllProductCard from "../../components/AllProductCard";

const AllProductsFiltered = () => {
  const allProduct = [
    { title: "Dog Foods", image: "/assets/allDog.png" },
    { title: "Cat Foods", image: "/assets/allCat.png" },
    { title: "Fish Foods", image: "/assets/allFish.png" },
    { title: "Rabbit Foods", image: "/assets/allRabbit.png" },
    { title: "Hamster Foods", image: "/assets/allHamster.png" },
    { title: "Litter", image: "/assets/petSupplies.png" },
  ].map((product) => ({
    ...product,
    path: `/products?category=${encodeURIComponent(
      product.title.replace(/s$/, "")
    )}`,
  }));

  return (
    <div className="mx-auto my-14 px-5">
      <div className="flex flex-col w-full gap-10 justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-xl text-sky-600">All Products</h1>
          <h1 className="text-3xl lg:text-4xl tracking-wider text-[#19325b] font-semibold">
            Products for beloved pets
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mx-auto">
          {allProduct.map((product, index) => (
            <div key={index} className="my-5 shadow-xl">
              <AllProductCard
                title={product.title}
                image={product.image}
                path={product.path}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProductsFiltered;
