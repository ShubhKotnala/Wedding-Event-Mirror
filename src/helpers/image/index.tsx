import { LazyLoadImage as LazyImage } from "react-lazy-load-image-component";

const MyImage = ({ alt, src, className, loading, onClick }: any) => {
  return (
    <LazyImage
      alt={alt}
      src={src}
      className={className}
      loading={loading}
      onClick={onClick}
    />
  );
};

export default MyImage;
