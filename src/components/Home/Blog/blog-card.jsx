export function BlogCard({ image, category, date, title, description }) {
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden rounded-lg mb-4">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 md:h-56 lg:h-64 object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xs md:text-sm text-muted-foreground uppercase tracking-wide">
          {category} / {date}
        </p>
        <h3 className="text-lg md:text-xl font-bold text-foreground leading-snug md:leading-tight">{title}</h3>
        <p className="text-xs md:text-sm text-muted-foreground line-clamp-3">{description}</p>
      </div>
    </div>
  )
}
