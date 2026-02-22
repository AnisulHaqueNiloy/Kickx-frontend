import { baseApi } from "../../../Redux/api/BaseApi";
import type { newDropsProps } from "../../../types/requiredTypes";

const categoryApi = baseApi.injectEndpoints({
 endpoints:(builder)=>({
        getCategory:builder.query<newDropsProps[], void>({
            query: () => ({
                url: '/categories',
                method: 'GET',
            }),
            
        })
    })
})

export const { useGetCategoryQuery } = categoryApi