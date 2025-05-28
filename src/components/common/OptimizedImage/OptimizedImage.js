// Purpose: Optimized Image component with responsive sizes, lazy loading, and WebP support

import React from "react";
import Image from "next/image";

const OptimizedImage = ({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  sizes = "100vw",
  fill = false,
  quality = 75,
  placeholder = "blur",
  blurDataURL,
  style,
  ...props
}) => {
  // Generate default blur placeholder if not provided
  const defaultBlurDataURL =
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q==";

  // Generate responsive sizes based on common breakpoints
  const responsiveSizes =
    sizes === "responsive" ? "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" : sizes;

  const imageProps = {
    src,
    alt,
    className,
    quality,
    placeholder: blurDataURL || defaultBlurDataURL ? placeholder : "empty",
    blurDataURL: blurDataURL || defaultBlurDataURL,
    style,
    ...props,
  };

  if (fill) {
    return <Image {...imageProps} fill sizes={responsiveSizes} priority={priority} />;
  }

  return (
    <Image
      {...imageProps}
      width={width}
      height={height}
      sizes={responsiveSizes}
      priority={priority}
    />
  );
};

export default OptimizedImage;
