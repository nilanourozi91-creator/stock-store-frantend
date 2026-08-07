import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Categories from "@/components/landing/categories";
import PopularProducts from "@/components/landing/popular-products";
import WhyChooseFreshStock from "@/components/landing/WhyChooseFreshStock";
import SpecialOffers from "@/components/landing/SpecialOffers";
import Testimonials from "@/components/landing/Testimonials";
import Newsletter from "@/components/landing/Newsletter";
import Footer from "@/components/landing/Footer";
import { GetAllProdects } from "../../lib/actions/prodect.action";

async function Page() {
  const data= await GetAllProdects();
  return (
    <div>
      <Navbar />

      <main className="min-h-screen">
        <Hero />

        <Categories />

        <PopularProducts prodeucts={data} />

        <WhyChooseFreshStock />

        <SpecialOffers />

        <Testimonials />

        <Newsletter />
        <Footer/>
      </main>
    </div>
  );
}

export default Page;