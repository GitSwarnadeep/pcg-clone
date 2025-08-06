const getUniqueCategories = (data) => {
  const uniqueCategories = new Set();
  const uniqueSubCategories = new Set();
  const uniqueLifeStage = new Set();
  const uniqueBrand = new Set();

  data.products.forEach((product) => {
    if (product.Category) uniqueCategories.add(product.Category);
    if (product["Sub Category"])
      uniqueSubCategories.add(product["Sub Category"]);
    if (product["Life Stage"]) uniqueLifeStage.add(product["Life Stage"]);
    if (product["Brand Name"]) uniqueBrand.add(product["Brand Name"]);
  });

  return {
    categories: Array.from(uniqueCategories),
    subCategories: Array.from(uniqueSubCategories),
    lifestage: Array.from(uniqueLifeStage),
    brand: Array.from(uniqueBrand),                 
  };
};

export default getUniqueCategories;
