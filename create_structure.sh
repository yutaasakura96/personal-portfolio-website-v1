#!/bin/bash

# Phase 1: Create New Folder Structure for Portfolio Website
# This script creates the recommended folder structure for better organization

echo "🚀 Creating new folder structure for Phase 1..."

# Create main directories under src/
mkdir -p src/components/common/{Button,Card,SocialIcons}
mkdir -p src/components/layout/{Header,Footer}
mkdir -p src/components/sections/{home,about,portfolio,contact,work-history,certifications}
mkdir -p src/hooks
mkdir -p src/lib
mkdir -p src/styles/components
mkdir -p src/utils

# Create specific component directories
echo "📁 Creating component directories..."

# Common components
mkdir -p src/components/common/LanguageSwitcher
mkdir -p src/components/common/ScrollToTop
mkdir -p src/components/common/LoadingSpinner

# Section-specific components
mkdir -p src/components/sections/home/HomeComponent
mkdir -p src/components/sections/about/AboutMe
mkdir -p src/components/sections/portfolio/{SliderCard,ProjectDetail}
mkdir -p src/components/sections/contact/ContactForm
mkdir -p src/components/sections/work-history/WorkHistory
mkdir -p src/components/sections/certifications/Certifications

# Create placeholder files to maintain structure
echo "📄 Creating placeholder files..."

# Hooks
touch src/hooks/useI18n.js
touch src/hooks/useScrollPosition.js
touch src/hooks/useContactForm.js
touch src/hooks/useWindowSize.js

# Lib files
touch src/lib/api.js
touch src/lib/i18n.js
touch src/lib/constants.js

# Utils
touch src/utils/validators.js
touch src/utils/helpers.js

# Styles
touch src/styles/components/common.css
touch src/styles/components/layout.css
touch src/styles/components/sections.css

# Create index.js files for better imports
echo "📋 Creating index files for barrel exports..."

# Common components index
cat > src/components/common/index.js << 'EOF'
export { default as Button } from './Button/Button';
export { default as Card } from './Card/Card';
export { default as SocialIcons } from './SocialIcons/SocialIcons';
export { default as LanguageSwitcher } from './LanguageSwitcher/LanguageSwitcher';
export { default as ScrollToTop } from './ScrollToTop/ScrollToTop';
export { default as LoadingSpinner } from './LoadingSpinner/LoadingSpinner';
EOF

# Layout components index
cat > src/components/layout/index.js << 'EOF'
export { default as Header } from './Header/Header';
export { default as Footer } from './Footer/Footer';
EOF

# Sections components index
cat > src/components/sections/index.js << 'EOF'
export { default as HomeComponent } from './home/HomeComponent/HomeComponent';
export { default as AboutMe } from './about/AboutMe/AboutMe';
export { default as WorkHistory } from './work-history/WorkHistory/WorkHistory';
export { default as Certifications } from './certifications/Certifications/Certifications';
export { default as SliderCard } from './portfolio/SliderCard/SliderCard';
export { default as ProjectDetail } from './portfolio/ProjectDetail/ProjectDetail';
export { default as ContactForm } from './contact/ContactForm/ContactForm';
EOF

# Hooks index
cat > src/hooks/index.js << 'EOF'
export { default as useI18n } from './useI18n';
export { default as useScrollPosition } from './useScrollPosition';
export { default as useContactForm } from './useContactForm';
export { default as useWindowSize } from './useWindowSize';
EOF

# Utils index
cat > src/utils/index.js << 'EOF'
export * from './validators';
export * from './helpers';
EOF

echo "✅ New folder structure created successfully!"
echo ""
echo "📂 Created structure:"
echo "src/"
echo "├── components/"
echo "│   ├── common/           # Reusable UI components"
echo "│   ├── layout/           # Layout components (Header, Footer)"
echo "│   └── sections/         # Page-specific sections"
echo "├── hooks/                # Custom React hooks"
echo "├── lib/                  # Utility functions and services"
echo "├── styles/               # Shared styles and theme"
echo "└── utils/                # Helper functions"
echo ""
echo "🎯 Next steps:"
echo "1. Review the created structure"
echo "2. Move existing components to new locations"
echo "3. Update import paths"
echo "4. Extract reusable components"
echo ""
echo "Run this script from your project root directory:"
echo "chmod +x create_structure.sh && ./create_structure.sh"
