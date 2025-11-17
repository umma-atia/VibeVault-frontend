import { useCallback, useEffect, useState } from "react";
import authApiClient from "../services/auth-api-client";

const useWishlist = () => {
  const [authToken] = useState(
    () => JSON.parse(localStorage.getItem("authTokens"))?.access
  );
  const [wishlists, setWishlists] = useState(null);
  const [wishlistId, setWishlistId] = useState(() => localStorage.getItem("wishlistId"));
  const [loading, setLoading] = useState(false);

  // Create a new wishlist or get existing one
  const createOrGetWishlist = useCallback(async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/Wishlists/");
      if (!wishlistId) {
        localStorage.setItem("wishlistId", response.data.id);
        setWishlistId(response.data.id);
      }
      setWishlists([response.data]); // assuming API returns single wishlist object
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [wishlistId]);

  // Fetch wishlists (if multiple)
  const fetchWishlists = useCallback(async () => {
    setLoading(true);
    try {
      const response = await authApiClient.get("/Wishlists/");
      setWishlists(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Add product to wishlist
  const addProductToWishlist = useCallback(async (wishlistId, product_id) => {
    setLoading(true);
    try {
      const response = await authApiClient.post(`/Wishlists/${wishlistId}/add_product/`, {
        product_ids: [product_id],
      });
      // refresh wishlist data
      fetchWishlists();
      return response.data;
    } catch (error) {
      console.log("Error adding product to wishlist", error);
    } finally {
      setLoading(false);
    }
  }, [fetchWishlists]);

  // Update wishlist
  const updateWishlist = useCallback(async (wishlistId, product_id) => {
    try {
      await authApiClient.put(`/Wishlists/${wishlistId}/`, {
        product_ids: [product_id],
      });
      fetchWishlists();
    } catch (error) {
      console.log("Error updating wishlist", error);
    }
  }, [fetchWishlists]);

  // Patch wishlist
  const patchWishlist = useCallback(async (wishlistId, partialData) => {
    try {
      await authApiClient.patch(`/Wishlists/${wishlistId}/`, partialData);
      fetchWishlists();
    } catch (error) {
      console.log("Error patching wishlist", error);
    }
  }, [fetchWishlists]);

  // Delete wishlist
  const deleteWishlist = useCallback(async (wishlistId) => {
    try {
      await authApiClient.delete(`/Wishlists/${wishlistId}/`);
      fetchWishlists();
    } catch (error) {
      console.log("Error deleting wishlist", error);
    }
  }, [fetchWishlists]);

  useEffect(() => {
    // Optionally initialize wishlist
    fetchWishlists();
  }, [fetchWishlists]);

  return {
    wishlists,
    loading,
    wishlistId,
    createOrGetWishlist,
    fetchWishlists,
    addProductToWishlist,
    updateWishlist,
    patchWishlist,
    deleteWishlist,
  };
};

export default useWishlist;