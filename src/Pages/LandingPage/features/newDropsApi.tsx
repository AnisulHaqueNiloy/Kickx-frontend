import { baseApi } from "../../../Redux/api/BaseApi"
import type { newDropsProps } from "../../../types/requiredTypes"

 const newDropsApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getNewDrops:builder.query<newDropsProps[], void>({
            query: () => ({
                url: '/products',
                method: 'GET',
            }),
            
        })
    })
})

export const { useGetNewDropsQuery } = newDropsApi
//  const settingApi= baseApi.injectEndpoints({
//     endpoints:(builder)=>({
//    getHistory: builder.query<MessageHistoryResponse, void>({
//       query: () => ({
//         url: '/message/history',
//         method: 'GET',
//       }),
//       providesTags: ['Message'], 
//     }),
//     })
// })