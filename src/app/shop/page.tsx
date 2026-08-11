import React from "react";
import { GetAllProdect } from "@/lib/prodect.action";
import ShopPage from "./shop";

async function Page() {
  const data = await GetAllProdect();

  return <ShopPage data={data} />;
}

export default Page;