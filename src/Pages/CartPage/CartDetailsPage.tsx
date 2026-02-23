import NewDrops from "../../Components/Shared/NewDrops";
import { useNewDrops } from "../../customHooks/useNewDrop";
import CartPage from "./components/CartPage";

function CartDetailsPage() {
  const product = useNewDrops().product;
  const shoesProducts = product.filter(
    (item) => item.category?.name === "Shoes",
  );
  return (
    <div>
      <CartPage />
      <NewDrops products={shoesProducts} />
    </div>
  );
}

export default CartDetailsPage;
