import { useParams } from "react-router-dom"
import NewDrops from "../../Components/Shared/NewDrops"
import { useNewDrops } from "../../customHooks/useNewDrop"
import { useGetProductDetailsQuery } from "../LandingPage/features/productDetailsApi"
import CartPage from "../CartPage/CartPage"


function ProductPage() {

  const {id}= useParams()

  const product = useNewDrops().product
  const {data:pro_details} = useGetProductDetailsQuery(Number(id) || 0)
console.log("Product Details:", pro_details);

  return (
    <div>
      <CartPage pro_details={pro_details} />
      <NewDrops products={product}/>
    </div>
  )
}

export default ProductPage