import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Categories from "@/components/landing/categories";
import PopularProducts from "@/components/landing/popular-products";
import WhyChooseFreshStock from "@/components/landing/WhyChooseFreshStock";
import SpecialOffers from "@/components/landing/SpecialOffers";
import Testimonials from "@/components/landing/Testimonials";
import Newsletter from "@/components/landing/Newsletter";

import { GetAllProdects } from "@/lib/prodect.action";


async function Page() {
  const data= await GetAllProdects();
  return (
    <div>
      {/* <Navbar /> */}
      <main className="min-h-screen dark:bg-gray-800">
        <Hero />
        <Categories />
        <PopularProducts prodeucts={data} />

        <WhyChooseFreshStock />

        <SpecialOffers />

        <Testimonials />

        <Newsletter />
      </main>
    </div>
  );
}

export default Page;