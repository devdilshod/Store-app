import { FeaturedProducts, Hero } from "../components";
import { customFetch } from "../utils";

const featuredProducts = "/products?featured=true"
export const loader = async () => {
   const response = await customFetch(featuredProducts);
   const products = response.data.data;
   return { products };

}


const Landing = () => {
   return <>
      <Hero />
      <FeaturedProducts />
   </>
}

export default Landing;