# Changelog

## [Unreleased] - 2025-07-31

### Changed
- Replaced all emoji icons with Material Icons throughout the application for a more professional appearance
- Added Material Icons library to all HTML pages
- Updated icon styling for consistent sizing and alignment

### Files Modified
- `index.html` - Replaced feature card emojis with Material Icons
- `mockup/index.html` - Updated payment options, reminders, and action buttons
- `mockup/community.html` - Replaced forum icons, badges, stats, and thread indicators
- `mockup/live-class.html` - Updated video controls and participant actions
- `mockup/microlearning.html` - Replaced module icons and achievement badges
- `mockup/admin-dashboard.html` - Updated navigation icons and chatbot interface
- `mockup/embed-preview.html` - Replaced event details and rating icons
- `mockup/api-docs.html` - Updated API key section icon
- `mockup/instructor-portal.html` - No emojis found (already clean)

### Technical Details
- Material Icons are loaded via Google Fonts CDN
- Icons use consistent sizing classes: `md-18`, `md-24`, `md-36`, `md-48`, `md-72`
- Proper vertical alignment implemented with `vertical-align: middle`
- Color utility classes applied where appropriate: `text-danger`, `text-success`, `text-warning`, etc.