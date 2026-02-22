import { useGetNewDropsQuery } from "../Pages/LandingPage/features/newDropsApi";


export const useNewDrops = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetNewDropsQuery();

  return {
    product: data ?? [],
    isLoading,
    isError,
    error,
    refetch,
  };
};