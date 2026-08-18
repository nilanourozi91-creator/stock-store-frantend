import React from "react";
import CategoriesPage from "./products";
import { GetAllGategories } from "@/lib/prodect.action";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Catagories",
  description: "frashStock",
};
async function Page() {
  const response = await GetAllGategories();

  console.log("Categories API:", response);

  const categories = response?.data ?? [];

  return <CategoriesPage data={categories} />;
}

export default Page;