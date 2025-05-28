// Purpose: Optimized tech stack icon component with consistent sizing and lazy loading

import React from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";

const TechStackIcon = ({ src, alt, className = "h-20 px-10 infinite-icons", priority = false }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={80}
      height={80}
      className={className}
      priority={priority}
      sizes="80px"
      quality={85}
    />
  );
};

export default TechStackIcon;
