#!/bin/bash

# Phase 1: Move Existing Files to New Structure
# This script moves all existing components to their new organized locations

echo "🚀 Moving existing files to new structure..."

# Create backup of current structure (optional safety measure)
echo "📋 Creating backup of current components..."
cp -r src/app/components src/app/components_backup

echo "📁 Moving layout components..."
# Move Header components
mv src/app/components/Header/Header.js src/components/layout/Header/
mv src/app/components/Header/DiagonalDrawer.js src/components/layout/Header/
mv src/app/components/Header/DiagonalDrawer.css src/components/layout/Header/

# Move Footer component
mv src/app/components/Footer/Footer.js src/components/layout/Footer/

echo "📁 Moving section-specific components..."
# Move Home component
mv src/app/components/HomeComponent/HomeComponent.js src/components/sections/home/HomeComponent/

# Move About Me components
mv src/app/components/AboutMe/AboutMe.js src/components/sections/about/AboutMe/
mv src/app/components/AboutMe/aboutme.css src/components/sections/about/AboutMe/

# Move Portfolio/Slider components
mv src/app/components/SliderCard/SliderCard.js src/components/sections/portfolio/SliderCard/
mv src/app/components/SliderCard/MySlider.js src/components/sections/portfolio/SliderCard/

# Move Work History component
mv src/app/components/WorkHistory/WorkHistory.js src/components/sections/work-history/WorkHistory/

# Move Certifications component
mv src/app/components/Certifications/Certifications.js src/components/sections/certifications/Certifications/

echo "📁 Moving common/reusable components..."
# Move LanguageSwitcher to common (it's reusable)
mv src/app/components/LanguageSwitcher/LanguageSwitcher.js src/components/common/LanguageSwitcher/

# Move CallToAction (will become ScrollToTop) to common
mv src/app/components/CallToAction/CallToAction.js src/components/common/ScrollToTop/ScrollToTop.js

echo "📁 Moving page components..."
# Move portfolio detail design
mv src/app/page/portfolio-detail-design/index.js src/components/sections/portfolio/ProjectDetail/ProjectDetail.js

# Move contact page (will be refactored into ContactForm component)
mv src/app/page/contactme/page.js src/components/sections/contact/ContactForm/ContactForm.js

echo "📁 Moving configuration files..."
# Move i18n request file
mv src/app/i18n/request.js src/lib/i18n.js

echo "📁 Moving API routes (these stay in app directory)..."
# Note: API routes must stay in src/app/api/ for Next.js App Router
echo "ℹ️  API routes remain in src/app/api/ (required by Next.js App Router)"

echo "📁 Moving page files..."
# Move main page
mv src/app/page.js src/app/page.js.backup
echo "ℹ️  Main page.js backed up - will be recreated with new imports"

# Move portfolio detail page
mv src/app/portfoliodetail/[id]/page.js src/app/portfoliodetail/[id]/page.js.backup
echo "ℹ️  Portfolio detail page backed up - will be updated with new imports"

echo "🧹 Cleaning up empty directories..."
# Remove empty component directories (only if they're empty)
find src/app/components -type d -empty -delete 2>/dev/null || true

echo "✅ File movement completed successfully!"
echo ""
echo "📊 Movement Summary:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📂 Layout Components:"
echo "   Header/          → src/components/layout/Header/"
echo "   Footer/          → src/components/layout/Footer/"
echo ""
echo "📂 Section Components:"
echo "   HomeComponent/   → src/components/sections/home/HomeComponent/"
echo "   AboutMe/         → src/components/sections/about/AboutMe/"
echo "   SliderCard/      → src/components/sections/portfolio/SliderCard/"
echo "   WorkHistory/     → src/components/sections/work-history/WorkHistory/"
echo "   Certifications/  → src/components/sections/certifications/Certifications/"
echo ""
echo "📂 Common Components:"
echo "   LanguageSwitcher/→ src/components/common/LanguageSwitcher/"
echo "   CallToAction/    → src/components/common/ScrollToTop/ (renamed)"
echo ""
echo "📂 Configuration:"
echo "   i18n/request.js  → src/lib/i18n.js"
echo ""
echo "📂 Page Components:"
echo "   portfolio-detail-design/ → src/components/sections/portfolio/ProjectDetail/"
echo "   contactme/page.js → src/components/sections/contact/ContactForm/"
echo ""
echo "⚠️  Files that need import path updates:"
echo "   • src/app/layout.js"
echo "   • src/app/page.js (backed up)"
echo "   • src/app/portfoliodetail/[id]/page.js (backed up)"
echo "   • All moved components (internal imports)"
echo ""
echo "🎯 Next Steps:"
echo "1. Update import paths in all affected files"
echo "2. Recreate page.js files with correct imports"
echo "3. Update layout.js imports"
echo "4. Test that all components still work"
echo ""
echo "💾 Backup created at: src/app/components_backup"
