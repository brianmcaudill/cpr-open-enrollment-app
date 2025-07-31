# Mobile Testing Checklist

## What to Test on Your Cellphone

### 1. Navigation
- [ ] Hamburger menu appears in top navigation
- [ ] Menu opens/closes when tapped
- [ ] All navigation links are tappable
- [ ] User dropdown menu works

### 2. Main Pages (index.html)
- [ ] Hero section text is readable
- [ ] Course cards stack vertically
- [ ] Calendar dates are tappable
- [ ] Filter checkboxes are easy to tap
- [ ] "Enroll Now" buttons are full-width
- [ ] Forms in checkout are single column

### 3. Admin Dashboard
- [ ] Mobile menu toggle button appears (top left)
- [ ] Sidebar slides in from left when tapped
- [ ] Dashboard cards stack vertically
- [ ] Tables scroll horizontally
- [ ] All sections load properly

### 4. Instructor Portal
- [ ] Mobile menu toggle button appears
- [ ] Navigation drawer works
- [ ] Class cards are readable
- [ ] Forms adapt to screen width
- [ ] Calendar embed code is readable

### 5. Live Class
- [ ] Video area adapts to screen
- [ ] Chat/participants button appears (bottom right blue circle)
- [ ] Bottom sheet slides up when tapped
- [ ] Tabs are tappable
- [ ] Controls are touch-friendly

### 6. Community Forum
- [ ] "Categories" and "Info" buttons appear at top
- [ ] Sidebars slide in when buttons tapped
- [ ] Thread items are readable
- [ ] Posts stack properly

### 7. Microlearning
- [ ] Module cards stack in single column
- [ ] Quiz options are tappable
- [ ] Progress bars visible
- [ ] Videos fit screen width

### 8. API Docs
- [ ] "API Reference" menu button appears
- [ ] Sidebar slides in when tapped
- [ ] Code blocks scroll horizontally
- [ ] Tables are scrollable

### 9. General Checks
- [ ] All text is readable (not too small)
- [ ] Buttons are at least 44px tall
- [ ] No horizontal scrolling of entire page
- [ ] Touch targets don't overlap
- [ ] Forms are usable

## Known Issues to Watch For
1. If hamburger menu doesn't appear, hard refresh the page
2. Some tables might need horizontal scroll - this is intentional
3. Embedded calendar (embed-preview.html) is a standalone page

## Quick Test URLs
Access these on your phone:
- `/mockup/index.html` - Main app
- `/mockup/admin-dashboard.html` - Admin area
- `/mockup/instructor-portal.html` - Instructor area
- `/mockup/live-class.html` - Live class interface
- `/mockup/community.html` - Forum
- `/mockup/microlearning.html` - Learning modules

Let me know if you find any issues!