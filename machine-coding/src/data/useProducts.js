import { useCustomQuery } from "./useCustomQuery";

export const useProducts = ({ page, pageSize }) => {
  const skip = (page - 1) * 10;

  const { data, isLoading } = useCustomQuery(
    () =>
      fetch(
        `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}&select=title,price`
      ),
    [page, pageSize]
  );

  if (data) {
    const hasNextPage = data.total > skip + pageSize;

    return {
      data: {
        products: data.products,
        hasNextPage,
      },
      isLoading,
    };
  }

  return {
    data,
    isLoading,
  };
};
