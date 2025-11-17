import { Link } from "react-router"
import defaultImage from "../../assets/default_product.jpg"

const ProductItem = ({ product }) => {
  return (
    <div className="max-w-7xl mx-auto shadow-md rounded-sm">
      <figure className="relative group overflow-hidden rounded">
        <img
          src={product.image?.length > 0 ? product.image : defaultImage}
          alt={product.name}
          className="rounded-xl w-full h-full object-cover"
        />
        {/* Hover overlay with action icons */}
        <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end justify-center pb-4 rounded-xl">
          <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0">
            {/* Expand icon */}
            <button className="w-10 h-10 rounded-full bg-white hover:bg-green-300 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6v4m12 0h4V6m0 12v4h-4m-12 0H6v-4"
                />
              </svg>
            </button>
            {/* Wishlist/Heart icon */}
            <button className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            {/* Shopping bag icon */}
            <button className="w-10 h-10 rounded-full bg-white hover:bg-gray-100 flex items-center justify-center transition-colors">
              <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </div>
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product.name}</h2>
        <h3 className="font-bold text-xl text-red-700">${product.price}</h3>
        <p>{product.description}</p>
        <Link to={`/shop/${product.id}`}>
          <div className="card-actions">
            <button className="btn bg-blue-300 hover:bg-blue-400">View Details</button>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default ProductItem
