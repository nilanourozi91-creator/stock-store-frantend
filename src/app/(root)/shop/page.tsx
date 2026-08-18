import React from "react";
// import CategoriesPage from "./products";
import { GetAllGategories, GetAllProdect } from "@/lib/prodect.action";
import { Metadata } from "next";
import ShopPage from "./shop";
export const metadata: Metadata = {
  title: "Catagories",
  description: "frashStock",
};
async function Page() {
  const response = await GetAllProdect();

  console.log("Categories API:", response);

  const categories = response?.data ?? [];

  return <ShopPage data={categories} />;
}

export default Page;