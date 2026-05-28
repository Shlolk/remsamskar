interface PhotoCardProps {
  imgSrc: string;
  imgAlt: string;
  fallbackText: string;
  dotColor: string;
  label: string;
  labelColor: string;
  caption: string;
}

export default function PhotoCard({ imgSrc, imgAlt, fallbackText, dotColor, label, labelColor, caption }: PhotoCardProps) {
  const fallbackUrl = `https://placehold.co/640x360/fdf3e4/${encodeURIComponent('#c89f56')}?text=${encodeURIComponent(fallbackText)}`;

  return (
    <div className="fade-up photo-card">
      <div className="photo-img-wrap">
        <img src={imgSrc} alt={imgAlt} loading="lazy" onError={(e) => { (e.currentTarget as HTMLImageElement).src = fallbackUrl; }} />
        <div className="photo-dot" style={{ background: dotColor, boxShadow: `0 0 10px 3px ${dotColor}54` }} />
      </div>
      <div className="photo-body">
        <p className="photo-label" style={{ color: labelColor }}>{label}</p>
        <div className="photo-divider" style={{ background: labelColor }} />
        <p className="photo-caption">{caption}</p>
      </div>
    </div>
  );
}
