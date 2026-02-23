import { useParams } from "react-router-dom";
import NewDrops from "../../Components/Shared/NewDrops";
import { useNewDrops } from "../../customHooks/useNewDrop";
import { useGetProductDetailsQuery } from "../LandingPage/features/productDetailsApi";
import ProductDetails from "./ProductDetails";

function ProductPage() {
  const { id } = useParams();

  const product = useNewDrops().product;
  const shoesProducts = product.filter(
    (item) => item.category?.name === "Shoes",
  );

  const { data: pro_details } = useGetProductDetailsQuery(Number(id) || 0);

  return (
    <div>
      {pro_details && <ProductDetails pro_details={pro_details} />}
      <NewDrops products={shoesProducts} />
    </div>
  );
}

export default ProductPage;
