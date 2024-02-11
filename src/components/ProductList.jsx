import React, { useState } from "react";

export default function ProductList(props) {
  const { title, description, products } = props;

  // Number of products to show per page
  const productsPerPage = 4;

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the currently displayed products
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;

  // Get the products to display on the current page
  const currentProducts = products.slice(startIndex, endIndex);

  // Function to handle page number click
  const handlePageClick = (event, page) => {
    event.preventDefault();
    setCurrentPage(page);
  };

  // Function to handle prev/next button click
  const handlePrevNextClick = (event, direction) => {
    event.preventDefault();
    if (direction === "prev" && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === "next" && endIndex < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-4 max-w-md text-gray-500">{description}</p>
        </header>

        <div className="mt-8">
          <p className="text-sm text-gray-500">
            Showing <span> {currentProducts.length} </span> of {products.length}
          </p>
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currentProducts.map((product) => (
            <li key={product.id}>
              <a href="#" className="group block overflow-hidden">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
                />
                <div className="relative bg-white pt-3">
                  <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                    {product.name}
                  </h3>
                  <p className="mt-2">
                    <span className="sr-only"> Regular Price </span>
                    <span className="tracking-wider text-gray-900">
                      {" "}
                      ${product.price.toFixed(2)} USD{" "}
                    </span>
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <ol className="mt-8 flex justify-center gap-1 text-xs font-medium">
          <li>
            <a
              href="#"
              onClick={(event) => handlePrevNextClick(event, "prev")}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
            >
              <span className="sr-only">Prev Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>

          {/* Page numbers */}
          {Array.from(
            { length: Math.ceil(products.length / productsPerPage) },
            (_, i) => i + 1
          ).map((page) => (
            <li key={page}>
              <a
                href="#"
                onClick={(event) => handlePageClick(event, page)}
                className={`block h-8 w-8 rounded border ${
                  page === currentPage
                    ? "bg-black text-white"
                    : "border-gray-100"
                } text-center leading-8`}
              >
                {page}
              </a>
            </li>
          ))}

          <li>
            <a
              href="#"
              onClick={(event) => handlePrevNextClick(event, "next")}
              className="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100"
            >
              <span className="sr-only">Next Page</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </li>
        </ol>
      </div>
    </section>
  );
}
