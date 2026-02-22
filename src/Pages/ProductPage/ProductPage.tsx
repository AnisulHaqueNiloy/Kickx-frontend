import { useParams } from "react-router-dom"
import NewDrops from "../../Components/Shared/NewDrops"
import { useNewDrops } from "../../customHooks/useNewDrop"
import { useGetProductDetailsQuery } from "../LandingPage/features/productDetailsApi"


function ProductPage() {

  const {id}= useParams()

  const product = useNewDrops().product
  const {data:pro_details} = useGetProductDetailsQuery(Number(id) || 0)
console.log("Product Details:", pro_details);

  return (
    <div>
      {pro_details && <h2>{pro_details.title}</h2>}
      <NewDrops products={product}/>
    </div>
  )
}

export default ProductPage