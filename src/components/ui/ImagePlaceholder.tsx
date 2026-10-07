/**
 * Clean image slot for future project photography.
 * Pass `src` when a real image is available; otherwise a labeled surface is shown.
 */
type ImagePlaceholderProps = {
  label: string
  src?: string
  alt?: string
  className?: string
  aspectClassName?: string
}

export function ImagePlaceholder({
  label,
  src,
  alt,
  className = '',
  aspectClassName = 'aspect-[4/3]',
}: ImagePlaceholderProps) {
  if (src) {
    return (
      <div className={`overflow-hidden bg-surface ${aspectClassName} ${className}`}>
        <img
          src={src}
          alt={alt ?? label}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
    )
  }

  return (
    <div
      className={`flex items-end bg-surface ${aspectClassName} ${className}`}
      role="img"
      aria-label={alt ?? `${label} photo coming soon`}
    >
      <div className="w-full border-t border-border/70 bg-bg/70 px-4 py-3 backdrop-blur-[2px]">
        <p className="text-sm font-medium text-muted">{label}</p>
      </div>
    </div>
  )
}
