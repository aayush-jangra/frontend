import { useState } from "react";
import { useProducts } from "../../data/useProducts";
import "./paginationStyles.css";
import { Loader } from "../../components/Loader";

const PAGE_SIZE = 10;

export const Pagination = () => {
  const [page, setPage] = useState(1);

  const { isLoading, data } = useProducts({ page, pageSize: PAGE_SIZE });

  return (
    <div className="pagination-container">
      <table>
        <thead className="pagination-table-head">
          <tr>
            <td>Id</td>
            <td>Title</td>
            <td>Price</td>
          </tr>
        </thead>
        <tbody>
          {isLoading || !data ? (
            <tr>
              <td colSpan={3}>
                <div className="pagination-data-loader">
                  <Loader />
                </div>
              </td>
            </tr>
          ) : (
            data.products.map((product) => (
              <tr className="pagination-table-row" key={product.id}>
                <td>{product.id}</td>
                <td>{product.title}</td>
                <td>{product.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
      <div className="pagination-buttons-container">
        <button
          className="pagination-button"
          disabled={page === 1}
          onClick={() => {
            setPage((prev) => prev - 1);
          }}
        >
          Prev
        </button>
        {page}
        <button
          className="pagination-button"
          disabled={!data?.hasNextPage}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
