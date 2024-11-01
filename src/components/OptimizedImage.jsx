// components/OptimizedImage.jsx
const OptimizedImage = ({ src, alt, className }) => {
  const imageUrl = new URL(src, import.meta.url).href;

  return (
    <picture className={className}>
      <source
        srcSet={`${imageUrl}?w=480 480w, 
                ${imageUrl}?w=800 800w, 
                ${imageUrl}?w=1200 1200w`}
        type="image/webp"
        sizes="(max-width: 480px) 100vw,
               (max-width: 800px) 50vw,
               33vw"
      />
      <img
        src={imageUrl}
        alt={alt}
        className={className}
        loading="lazy"
        decoding="async"
        width="800"
        height="600"
      />
    </picture>
  );
};

export default OptimizedImage;
