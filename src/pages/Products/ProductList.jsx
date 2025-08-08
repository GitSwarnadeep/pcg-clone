import { useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import useCategoryStore from "../../utils/store";
import ProductCard from "./ProductCard";
import products from "../../constants/products.json";
import getUniqueCategories from "../../utils/category";
import FilterAccordion from "../../components/FilterAccordion";
import AllProductsFiltered from "./AllProductsFiltered";

const ProductList = () => {
  const setCategory = useCategoryStore((state) => state.setCategory);

  const [filters, setFilters] = useState({
    category: "Dog Food",
    subCategory: "",
    lifeStage: "",
    brand: "",
  });

  const [filterOptions, setFilterOptions] = useState({
    categories: [],
    subCategories: [],
    lifeStage: [],
    brand: [],
  });

  const [itemsToShow, setItemsToShow] = useState(12);
  const location = useLocation();

  useEffect(() => {
    const options = getUniqueCategories(products);
    setFilterOptions(options);
  }, []);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category") || "Dog Food";
    const brand = queryParams.get("brand") || "";

    setFilters({
      category,
      subCategory: "",
      lifeStage: "",
      brand,
    });
    setCategory(category);
  }, [location, setCategory]);

  const filteredProducts = useMemo(() => {
    console.log("Applying filters:", filters); 
    console.log("Original products:", products.products);

    if (!products?.products) return [];

    let updatedProducts = products.products;

    Object.keys(filters).forEach((key) => {
      if (filters[key]) {
        const productKey =
          key === "category"
            ? "Category"
            : key === "subCategory"
            ? "Sub Category"
            : key === "brand"
            ? "Brand Name"
            : key;

        updatedProducts = updatedProducts.filter(
          (product) => product[productKey] === filters[key]
        );
      }
    });

    const uniqueProducts = updatedProducts.map((product, index) => ({
      ...product,
      uniqueId: `${product["PRODUCTS CODE"]}-${index}`,
    }));

    console.log("Filtered products:", updatedProducts);
    console.log("Filtered products:", uniqueProducts);
    return uniqueProducts;
  }, [filters]);

  const handleViewMore = () => {
    setItemsToShow((prev) => prev + 9);
  };

  const clearFilter = () => {
    setFilters({
      category: "Dog Food",
      subCategory: "",
      lifeStage: "",
      brand: "",
    });
    setCategory("Dog Food");
  };

  const isAllSelected = filters.category === "";

  return (
    <div className="flex flex-col lg:flex-row lg:relative">
      {isAllSelected ? (
        <AllProductsFiltered />
      ) : (
        <>
          <div className="lg:w-1/4 p-4 px-7 border-r lg:border-r-2 lg:border-gray-200 lg:mb-0 mb-4">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <div className="flex justify-between mb-3">
              <h2 className="flex gap-2">
                <span>
                  <img src="/filter.svg" className="size-5 inline-block" alt="filter img"/>
                </span>
                <span className="text-lg font-medium text-[#19325b]">
                  Filter
                </span>
              </h2>

              <button
                onClick={clearFilter}
                className="text-lg text-blue-600 font-medium"
              >
                Clear
              </button>
            </div>

            <div className="flex flex-col">
              <FilterAccordion
                title="Choose Type"
                filterKey="category"
                filters={filters}
                setFilters={setFilters}
                options={filterOptions.categories}
              />

              <FilterAccordion
                title="Type"
                filterKey="subCategory"
                filters={filters}
                setFilters={setFilters}
                options={filterOptions.subCategories}
              />

              <FilterAccordion
                title="Brand"
                filterKey="brand"
                filters={filters}
                setFilters={setFilters}
                options={filterOptions.brand}
              />
            </div>
          </div>

          <div className="flex flex-col items-center px-5 mt-3 w-full">
            <div className="bg-[#19325b] text-white p-5 w-full rounded-xl text-xl flex justify-between">
              <h1>{filters.category || "All Products"}</h1>
              <p>
                ({Math.min(itemsToShow, filteredProducts.length)} ~{" "}
                {filteredProducts.length})
              </p>
            </div>

            {/* Product Cards */}
            <div className="w-full py-5 ml-10 lg:ml-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-4 justify-center lg:justify-start ">
                {filteredProducts.slice(0, itemsToShow).map((product) => (
                  <ProductCard
                    key={product["PRODUCTS CODE"]}
                    product={product}
                  />
                ))}
              </div>
              {itemsToShow < filteredProducts.length && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleViewMore}
                    className="p-2 bg-blue-500 text-white text-center rounded"
                  >
                    View More
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductList;
