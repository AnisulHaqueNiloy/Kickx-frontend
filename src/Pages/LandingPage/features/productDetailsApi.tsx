import { baseApi } from "../../../Redux/api/BaseApi";
import type { ProductType } from "../../../types/requiredTypes";

const getProductDetails = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getProductDetails: builder.query<ProductType, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'GET',
            }),
        })
    })
})

export const { useGetProductDetailsQuery } = getProductDetails