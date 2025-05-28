// Purpose: Optimized profile image component with responsive sizing

import React from "react";
import OptimizedImage from "../OptimizedImage/OptimizedImage";

const ProfileImage = ({ src, alt, className = "", priority = true, width = 600, height = 600 }) => {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      priority={priority}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
      quality={95}
    />
  );
};

export default ProfileImage;
