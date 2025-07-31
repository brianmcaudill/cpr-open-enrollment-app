// Page Navigation
function navigateTo(pageId) {
    // For instructor and admin portals, redirect to separate pages
    if (pageId === 'instructor') {
        window.location.href = 'instructor-portal.html';
        return;
    }
    if (pageId === 'admin') {
        window.location.href = 'admin-dashboard.html';
        return;
    }
    
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    document.getElementById(pageId + '-page').classList.add('active');
    
    // Close user dropdown if open
    const dropdown = document.getElementById('user-dropdown');
    if (dropdown) {
        dropdown.classList.remove('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// User Menu Toggle
function toggleUserMenu() {
    const dropdown = document.getElementById('user-dropdown');
    dropdown.classList.toggle('active');
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const userMenu = document.querySelector('.user-menu');
    const dropdown = document.getElementById('user-dropdown');
    
    if (dropdown && !userMenu.contains(event.target)) {
        dropdown.classList.remove('active');
    }
});

// Show Confirmation Modal
function showConfirmation() {
    document.getElementById('confirmation-modal').classList.add('active');
    
    // Simulate processing
    setTimeout(() => {
        // You could add a processing animation here
    }, 1000);
}

// Close Modal
document.addEventListener('click', function(event) {
    const modal = document.getElementById('confirmation-modal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});

// Calendar Day Selection
document.addEventListener('DOMContentLoaded', function() {
    const calendarDays = document.querySelectorAll('.calendar-day.has-courses');
    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // Remove previous selection
            document.querySelectorAll('.calendar-day').forEach(d => {
                d.classList.remove('selected');
            });
            // Add selection to clicked day
            this.classList.add('selected');
        });
    });
    
    // Filter checkboxes
    const filterCheckboxes = document.querySelectorAll('.checkbox-filter input');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            // In a real app, this would filter the courses
            console.log('Filter changed:', this.parentElement.textContent.trim());
        });
    });
    
    // Distance slider
    const distanceSlider = document.querySelector('.distance-slider');
    if (distanceSlider) {
        distanceSlider.addEventListener('input', function() {
            const labels = document.querySelector('.distance-labels');
            labels.children[1].textContent = this.value + ' miles';
        });
    }
    
    // Payment option selection
    const paymentOptions = document.querySelectorAll('.payment-option');
    paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selection from all
            paymentOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selection to clicked
            this.classList.add('selected');
            // Check the radio button
            this.querySelector('input').checked = true;
        });
    });
    
    // Checklist items
    const checklistItems = document.querySelectorAll('.checklist-item input');
    checklistItems.forEach(item => {
        item.addEventListener('change', function() {
            // In a real app, this would save the state
            console.log('Checklist item toggled:', this.checked);
        });
    });
    
    // Tab switching
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add active to clicked tab
            this.classList.add('active');
            // In a real app, this would switch tab content
        });
    });
    
    // Add smooth transitions
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.3s';
        document.body.style.opacity = '1';
    }, 100);
});

// Simulate real-time updates
setInterval(() => {
    // Update notification badge
    const badge = document.querySelector('.notification-badge');
    if (badge && Math.random() > 0.95) {
        const count = parseInt(badge.textContent);
        badge.textContent = count + 1;
    }
    
    // Update seats remaining
    const seatsElements = document.querySelectorAll('.seats');
    seatsElements.forEach(seats => {
        if (Math.random() > 0.98) {
            const match = seats.textContent.match(/(\d+)/);
            if (match) {
                const current = parseInt(match[1]);
                if (current > 1) {
                    seats.textContent = (current - 1) + ' seats left';
                }
            }
        }
    });
}, 5000);

// Mobile Menu Toggle
function toggleMobileMenu() {
    const navRight = document.querySelector('.nav-right');
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    
    if (navRight) {
        navRight.classList.toggle('mobile-active');
        
        // Update icon
        if (menuToggle) {
            menuToggle.innerHTML = navRight.classList.contains('mobile-active') 
                ? '<span class="material-icons">close</span>' 
                : '<span class="material-icons">menu</span>';
        }
    }
}

// Toggle Admin Sidebar on Mobile
function toggleAdminSidebar() {
    const sidebar = document.querySelector('.admin-sidebar');
    if (sidebar) {
        sidebar.classList.toggle('mobile-active');
    }
}

// Toggle Instructor Sidebar on Mobile
function toggleInstructorSidebar() {
    const sidebar = document.querySelector('.instructor-nav');
    if (sidebar) {
        sidebar.classList.toggle('mobile-active');
    }
}

// Close sidebars when clicking overlay
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('sidebar-overlay')) {
        document.querySelectorAll('.admin-sidebar, .instructor-nav').forEach(sidebar => {
            sidebar.classList.remove('mobile-active');
        });
        event.target.remove();
    }
});

// Add mobile menu toggle to all pages
document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle if navbar exists
    const navbar = document.querySelector('.navbar');
    if (navbar && !document.querySelector('.mobile-menu-toggle')) {
        const navLeft = navbar.querySelector('.nav-left');
        if (navLeft) {
            const menuToggle = document.createElement('button');
            menuToggle.className = 'mobile-menu-toggle';
            menuToggle.innerHTML = '<span class="material-icons">menu</span>';
            menuToggle.onclick = toggleMobileMenu;
            navLeft.appendChild(menuToggle);
        }
    }
    
    // Add sidebar toggle for admin dashboard
    const adminContent = document.querySelector('.admin-content');
    if (adminContent && !document.querySelector('.admin-menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle admin-menu-toggle';
        menuToggle.innerHTML = '<span class="material-icons">menu</span>';
        menuToggle.onclick = toggleAdminSidebar;
        menuToggle.style.position = 'fixed';
        menuToggle.style.top = '1rem';
        menuToggle.style.left = '1rem';
        menuToggle.style.zIndex = '1001';
        menuToggle.style.background = 'white';
        menuToggle.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        menuToggle.style.borderRadius = '0.375rem';
        adminContent.appendChild(menuToggle);
    }
    
    // Add sidebar toggle for instructor portal
    const instructorContent = document.querySelector('.instructor-content');
    if (instructorContent && !document.querySelector('.instructor-menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle instructor-menu-toggle';
        menuToggle.innerHTML = '<span class="material-icons">menu</span>';
        menuToggle.onclick = toggleInstructorSidebar;
        menuToggle.style.position = 'fixed';
        menuToggle.style.top = '1rem';
        menuToggle.style.left = '1rem';
        menuToggle.style.zIndex = '1001';
        menuToggle.style.background = 'white';
        menuToggle.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        menuToggle.style.borderRadius = '0.375rem';
        instructorContent.appendChild(menuToggle);
    }
});