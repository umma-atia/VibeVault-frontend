import { useEffect, useState } from "react";
import useWishlist from "../hooks/useWishlist"; 

const WishlistPage = () => {
  const {
    wishlists,
    loading,
    createOrGetWishlist,
    updateWishlist,
    deleteWishlist,
  } = useWishlist();

  const [wishlist, setWishlist] = useState(null);

  useEffect(() => {
    if (!wishlists && !loading) {
      createOrGetWishlist();
    } else if (wishlists && wishlists.length > 0) {
      setWishlist(wishlists[0]);
    }
  }, [wishlists, loading, createOrGetWishlist]);


  const handleUpdateWishlist = async () => {
    if (wishlist) {
      await updateWishlist(wishlist.id, { name: "Updated Wishlist Name" });
    }
  };


  const handleDeleteWishlist = async () => {
    if (wishlist) {
      await deleteWishlist(wishlist.id);
      setWishlist(null);
    }
  };

  if (loading || !wishlist) {
    return <p>Loading wishlist...</p>;
  }

  return (
    <div className="wishlist-page p-4">
      <div className="wishlist-list mb-4 border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Wishlist Details</h2>
        <p>ID: {wishlist.id}</p>
        <p>Name: {wishlist.name || "My Wishlist"}</p>
        <button
          onClick={handleUpdateWishlist}
          className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
        >
          Update Wishlist
        </button>
        <button
          onClick={handleDeleteWishlist}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Delete Wishlist
        </button>
      </div>

      <div className="wishlist-summary border p-4 rounded shadow">
        <h2 className="text-xl font-bold mb-2">Wishlist Summary</h2>
        <p>Total Items: {wishlist.product_ids ? wishlist.product_ids.length : 0}</p>
      </div>
    </div>
  );
};

export default WishlistPage;