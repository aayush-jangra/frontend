import { useCustomQuery } from "./useCustomQuery";

export const useProducts = ({ page, pageSize }) => {
  //   const [data, setData] = useState(null);
  //   const [isLoading, setIsLoading] = useState(true);

  //   const fetchData = async () => {
  //     const skip = (page - 1) * 10;

  // const res = await fetch(
  //   `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}&select=title,price`
  // );

  //     const data = await res.json();

  //     const hasNextPage = data.total > skip + pageSize;

  //     cache[page] = {
  //       products: data.products,
  //       hasNextPage,
  //     };

  //     setData({
  //       products: data.products,
  //       hasNextPage,
  //     });
  //     setIsLoading(false);
  //   };

  //   useEffect(() => {
  //     setIsLoading(true);
  //     setData(null);

  //     if (cache[page]) {
  //       setIsLoading(false);
  //       setData({ ...cache[page] });
  //       return;
  //     }

  //     fetchData();
  //   }, [page]);

  //   return { data, isLoading };

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
