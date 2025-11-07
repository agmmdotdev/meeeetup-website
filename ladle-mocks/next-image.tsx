import React from "react";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
};

const Image = ({ src, alt, width, height, className, ...props }: ImageProps) => {
  // Handle public folder paths
  const imageSrc = src.startsWith("/") ? src : `/${src}`;
  
  return (
    <img
      src={imageSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

export default Image;

