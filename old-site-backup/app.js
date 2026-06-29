// Smile Dental Care - Premium Interactive Client Logic

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // 1. Dark Mode Persistence & Initialization
    initTheme();

    // 2. Navigation Styling & Scrollspy
    initNavigation();

    // 3. Testimonials Carousel/Slider
    initTestimonials();

    // 4. FAQ Accordions
    initFAQs();

    // 5. Bookings & Modal Managers
    initBookings();
});

// ==========================================
// 1. Theme Management (Light / Dark Mode)
// ==========================================
function initTheme() {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    // Check local storage or system preference
    const savedTheme = localStorage.getItem('smilecare_theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        document.body.classList.add('dark-mode');
        updateThemeIcon(true);
    } else {
        document.body.classList.remove('dark-mode');
        updateThemeIcon(false);
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const isDark = document.body.classList.toggle('dark-mode');
            localStorage.setItem('smilecare_theme', isDark ? 'dark' : 'light');
            updateThemeIcon(isDark);
        });
    }
}

function updateThemeIcon(isDark) {
    const themeIcon = document.getElementById('theme-icon');
    if (!themeIcon) return;
    
    if (isDark) {
        themeIcon.setAttribute('data-lucide', 'sun');
    } else {
        themeIcon.setAttribute('data-lucide', 'moon');
    }
    
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// ==========================================
// 2. Navigation & Scrollspy
// ==========================================
function initNavigation() {
    const header = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const sections = document.querySelectorAll('section[id]');

    // Header scroll background modification
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-3', 'shadow-lg', 'bg-white/95', 'dark:bg-slate-900/95');
            header.classList.remove('py-5', 'bg-transparent');
        } else {
            header.classList.add('py-5', 'bg-transparent');
            header.classList.remove('py-3', 'shadow-lg', 'bg-white/95', 'dark:bg-slate-900/95');
        }

        // Active link tracking (Scrollspy)
        let currentSectionId = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 120;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // Mobile Navigation Toggle
    if (mobileMenuBtn && mobileNav) {
        mobileMenuBtn.addEventListener('click', () => {
            const isOpen = mobileNav.classList.contains('max-h-96');
            if (isOpen) {
                mobileNav.classList.remove('max-h-96', 'opacity-100', 'py-4');
                mobileNav.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
                mobileMenuBtn.querySelector('i').setAttribute('data-lucide', 'menu');
            } else {
                mobileNav.classList.remove('max-h-0', 'opacity-0', 'pointer-events-none');
                mobileNav.classList.add('max-h-96', 'opacity-100', 'py-4');
                mobileMenuBtn.querySelector('i').setAttribute('data-lucide', 'x');
            }
            if (window.lucide) window.lucide.createIcons();
        });

        // Close mobile nav when clicking a link
        mobileNav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileNav.classList.remove('max-h-96', 'opacity-100', 'py-4');
                mobileNav.classList.add('max-h-0', 'opacity-0', 'pointer-events-none');
                mobileMenuBtn.querySelector('i').setAttribute('data-lucide', 'menu');
                if (window.lucide) window.lucide.createIcons();
            });
        });
    }
}

// ==========================================
// 3. Testimonials Carousel
// ==========================================
function initTestimonials() {
    const track = document.querySelector('.testimonial-track');
    const slides = Array.from(document.querySelectorAll('.testimonial-slide'));
    const prevBtn = document.getElementById('prev-testimonial');
    const nextBtn = document.getElementById('next-testimonial');
    const dotsContainer = document.getElementById('testimonial-dots');
    
    if (!track || slides.length === 0) return;

    let currentIndex = 0;

    // Create Navigation Dots
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `w-3 h-3 rounded-full transition-all duration-300 ${index === 0 ? 'bg-[#6D5DF6] w-6' : 'bg-gray-300 dark:bg-gray-700'}`;
        dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.children);

    function updateTrack() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Update dots styling
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('bg-[#6D5DF6]', 'w-6');
                dot.classList.remove('bg-gray-300', 'dark:bg-gray-700');
            } else {
                dot.classList.remove('bg-[#6D5DF6]', 'w-6');
                dot.classList.add('bg-gray-300', 'dark:bg-gray-700');
            }
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateTrack();
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateTrack();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateTrack();
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto-advance testimonials every 6 seconds
    let autoPlayInterval = setInterval(nextSlide, 6000);

    // Pause autoplay on mouse hover
    const carouselContainer = document.querySelector('.testimonial-carousel');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
        carouselContainer.addEventListener('mouseleave', () => autoPlayInterval = setInterval(nextSlide, 6000));
    }
}

// ==========================================
// 4. FAQ Accordion Logic
// ==========================================
function initFAQs() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const header = item.querySelector('.faq-header');
        header.addEventListener('click', () => {
            const isActive = item.classList.contains('accordion-active');
            
            // Close other items
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('accordion-active');
            });
            
            // Toggle active state on current item
            if (!isActive) {
                item.classList.add('accordion-active');
            }
        });
    });
}

// ==========================================
// 5. Booking System & Local Storage Manager
// ==========================================
function initBookings() {
    const bookingForm = document.getElementById('appointment-form');
    const successModal = document.getElementById('success-modal');
    const confirmBtn = document.getElementById('success-confirm');
    const myBookingsBtn = document.getElementById('view-bookings-btn');
    const mobileMyBookingsBtn = document.getElementById('mobile-view-bookings-btn');
    const bookingsDrawer = document.getElementById('bookings-drawer');
    const closeDrawerBtn = document.getElementById('close-drawer-btn');
    const drawerOverlay = document.getElementById('drawer-overlay');
    const bookingsListContainer = document.getElementById('bookings-list');
    
    // Set min date for date input to today
    const dateInput = document.getElementById('booking-date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }

    // Load and Display existing bookings in drawer
    renderBookings();

    // Form Submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Gather inputs
            const name = document.getElementById('booking-name').value.trim();
            const phone = document.getElementById('booking-phone').value.trim();
            const email = document.getElementById('booking-email').value.trim();
            const service = document.getElementById('booking-service').value;
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            const message = document.getElementById('booking-notes').value.trim();

            if (!name || !phone || service === 'Choose Service' || !date || !time) {
                alert('Please fill out all required fields.');
                return;
            }

            // Create booking object
            const booking = {
                id: 'APT-' + Date.now().toString().slice(-6),
                name,
                phone,
                email,
                service,
                date,
                time,
                message,
                createdAt: new Date().toLocaleDateString()
            };

            // Save to localStorage
            const bookings = getLocalBookings();
            bookings.push(booking);
            localStorage.setItem('smilecare_bookings', JSON.stringify(bookings));

            // Populate success modal text
            document.getElementById('modal-booking-id').innerText = booking.id;
            document.getElementById('modal-booking-service').innerText = booking.service;
            document.getElementById('modal-booking-datetime').innerText = `${formatDate(booking.date)} at ${booking.time}`;
            
            // Open Success Modal
            openModal(successModal);

            // Reset Form & update drawer contents
            bookingForm.reset();
            renderBookings();
        });
    }

    // Modal Control
    if (confirmBtn && successModal) {
        confirmBtn.addEventListener('click', () => {
            closeModal(successModal);
        });
    }

    // Drawer Controls
    const openDrawer = () => {
        bookingsDrawer.classList.add('open');
        drawerOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Disable scroll background
    };

    const closeDrawer = () => {
        bookingsDrawer.classList.remove('open');
        drawerOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Re-enable scroll
    };

    if (myBookingsBtn) myBookingsBtn.addEventListener('click', openDrawer);
    if (mobileMyBookingsBtn) mobileMyBookingsBtn.addEventListener('click', openDrawer);
    if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
    if (drawerOverlay) drawerOverlay.addEventListener('click', closeDrawer);

    // Helpers
    function getLocalBookings() {
        const bookingsRaw = localStorage.getItem('smilecare_bookings');
        return bookingsRaw ? JSON.parse(bookingsRaw) : [];
    }

    function renderBookings() {
        if (!bookingsListContainer) return;
        
        const bookings = getLocalBookings();
        
        // Show count badge in buttons
        const badgeCount = bookings.length;
        const badges = document.querySelectorAll('.booking-badge');
        badges.forEach(badge => {
            badge.innerText = badgeCount;
            badge.style.display = badgeCount > 0 ? 'flex' : 'none';
        });

        if (bookings.length === 0) {
            bookingsListContainer.innerHTML = `
                <div class="text-center py-12 px-4">
                    <div class="text-gray-300 dark:text-gray-600 mb-4 flex justify-center">
                        <i data-lucide="calendar-x" class="w-12 h-12"></i>
                    </div>
                    <p class="text-gray-400 font-medium">No appointments booked yet.</p>
                    <p class="text-xs text-gray-500 mt-2">Any bookings you make online will appear here.</p>
                </div>
            `;
            if (window.lucide) window.lucide.createIcons();
            return;
        }

        // Sort by date upcoming
        bookings.sort((a, b) => new Date(a.date) - new Date(b.date));

        bookingsListContainer.innerHTML = bookings.map(booking => `
            <div class="p-5 rounded-2xl border border-gray-100 dark:border-slate-800 bg-white/50 dark:bg-slate-900/30 flex flex-col justify-between transition-all duration-300 hover:border-[#6D5DF6]/30">
                <div>
                    <div class="flex justify-between items-start mb-3">
                        <span class="inline-block px-2.5 py-1 text-xs font-bold text-[#6D5DF6] bg-[#EDE9FF]/80 dark:bg-[#6D5DF6]/20 rounded-md uppercase tracking-wider">${booking.service}</span>
                        <span class="text-xs font-semibold text-gray-400">ID: ${booking.id}</span>
                    </div>
                    <h5 class="font-bold text-sm text-gray-800 dark:text-slate-200 flex items-center gap-2">
                        <i data-lucide="user" class="w-3.5 h-3.5 text-gray-400"></i> ${booking.name}
                    </h5>
                    <p class="text-xs text-gray-500 dark:text-slate-400 mt-2 flex items-center gap-2">
                        <i data-lucide="calendar" class="w-3.5 h-3.5 text-[#6D5DF6]"></i> ${formatDate(booking.date)}
                    </p>
                    <p class="text-xs text-gray-500 dark:text-slate-400 mt-1 flex items-center gap-2">
                        <i data-lucide="clock" class="w-3.5 h-3.5 text-[#6D5DF6]"></i> ${booking.time}
                    </p>
                </div>
                <div class="border-t border-gray-100 dark:border-slate-800/80 mt-4 pt-3 flex justify-end">
                    <button class="cancel-booking-btn text-xs text-red-500 hover:text-red-600 font-bold flex items-center gap-1 transition-all" data-id="${booking.id}">
                        <i data-lucide="trash-2" class="w-3.5 h-3.5"></i> Cancel Appointment
                    </button>
                </div>
            </div>
        `).join('');

        if (window.lucide) window.lucide.createIcons();

        // Add Delete Event Handlers
        document.querySelectorAll('.cancel-booking-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const bookingId = e.currentTarget.getAttribute('data-id');
                if (confirm('Are you sure you want to cancel this appointment?')) {
                    cancelBooking(bookingId);
                }
            });
        });
    }

    function cancelBooking(id) {
        let bookings = getLocalBookings();
        bookings = bookings.filter(b => b.id !== id);
        localStorage.setItem('smilecare_bookings', JSON.stringify(bookings));
        renderBookings();
    }

    // Helper functions for modals
    function openModal(modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal(modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function formatDate(dateStr) {
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        const dateObj = new Date(dateStr + 'T00:00:00');
        return dateObj.toLocaleDateString('en-US', options);
    }
}
