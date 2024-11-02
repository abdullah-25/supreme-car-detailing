// OptimizedImage.jsx
const OptimizedImage = ({ src, alt, className }) => (
  <img
    src={src}
    alt={alt}
    className={className}
    loading="lazy"
    decoding="async"
  />
);

export default OptimizedImage;
