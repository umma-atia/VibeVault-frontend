import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useFetchProduct = (
  currentPage,
  priceRange,
  selectedCategory,
  selectedSize,
  selectedColor,
  searchQuery,
  sortOrder
) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
  const fetchProducts = async () => {
    setLoading(true);
    const url = `/products/?price__gt=${priceRange[0]}&price__lt=${priceRange[1]}&page=${currentPage}&category__name=${selectedCategory}&size=${selectedSize}&color=${selectedColor}&search=${searchQuery}&ordering=${sortOrder}`;

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
}, [currentPage, priceRange, selectedCategory, selectedSize, selectedColor, searchQuery, sortOrder]);

  return { products, loading, totalPages };
};

export default useFetchProduct;

