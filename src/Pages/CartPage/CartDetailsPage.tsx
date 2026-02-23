import NewDrops from "../../Components/Shared/NewDrops"
import { useNewDrops } from "../../customHooks/useNewDrop";
import CartPage from "./components/CartPage"


function CartDetailsPage() {
    const  product = useNewDrops().product;
  return (
    <div>
        <CartPage/>
        <NewDrops products={product} />
    </div>
  )
}

export default CartDetailsPage