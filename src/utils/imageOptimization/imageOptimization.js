// Purpose: Image optimization utilities and constants

// Common image sizes for different use cases
export const IMAGE_SIZES = {
  TECH_ICON: { width: 80, height: 80 },
  PROJECT_CARD: { width: 400, height: 300 },
  PROJECT_DETAIL: { width: 800, height: 600 },
  PROFILE: { width: 600, height: 600 },
  LOGO: { width: 200, height: 120 },
  BACKGROUND: { width: 1920, height: 1080 },
};

// Responsive sizes for different breakpoints
export const RESPONSIVE_SIZES = {
  FULL_WIDTH: "100vw",
  HALF_WIDTH: "(max-width: 1024px) 100vw, 50vw",
  THIRD_WIDTH: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  FIXED_SMALL: "(max-width: 640px) 100px, 200px",
  TECH_ICON: "80px",
  PROJECT_CARD: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px",
};

// Generate blur placeholder for images
export const generateBlurPlaceholder = (width = 10, height = 10) => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
    </svg>
  `)}`;
};

// Check if image should be prioritized (above the fold)
export const shouldPrioritizeImage = (imageName) => {
  const priorityImages = ["pixaryuta.png", "profile", "hero"];
  return priorityImages.some((name) => imageName.includes(name));
};

// Get optimal image quality based on use case
export const getImageQuality = (useCase) => {
  const qualityMap = {
    hero: 95,
    profile: 95,
    project: 90,
    tech: 85,
    background: 80,
    thumbnail: 75,
    default: 75,
  };

  return qualityMap[useCase] || qualityMap.default;
};
