
export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <div className="relative w-full aspect-square mb-4 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h3 className="text-sm md:text-base font-serif font-semibold text-foreground uppercase tracking-wide line-clamp-2">
          {product.name}
        </h3>
        <p className="text-sm md:text-base text-foreground font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
