// Purpose: Optimized project image component with responsive sizing

import React from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";

const ProjectImage = ({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  isHero = false,
}) => {
  const sizes = isHero
    ? "(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 800px"
    : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px";

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes={sizes}
      quality={90}
    />
  );
};

export default ProjectImage;
