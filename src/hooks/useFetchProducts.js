import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProduct = (
  currentPage,
  priceRange,
  selectedCategory,
  searchQuery,
  sortOrder
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    let url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&search=${searchQuery}&ordering=${sortOrder}`;

    if (selectedCategory) {
      url += `&category_id=${selectedCategory}`;
    }

    console.log("Fetching URL:", url); // Debug

    try {
      const response = await apiClient.get(url);
      const data = await response.data;

      setProducts(data.results);
      setTotalPages(Math.ceil(data.count / data.results.length));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  fetchProducts();
}, [currentPage, priceRange, selectedCategory, searchQuery, sortOrder]);

  return { products, loading, totalPages };
};

export default useFetchProduct;

