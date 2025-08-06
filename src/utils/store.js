import { create } from "zustand";

const useCategoryStore = create((set) => ({
  category: "",
  setCategory: (category) => set({ category }),
}));

export default useCategoryStore;