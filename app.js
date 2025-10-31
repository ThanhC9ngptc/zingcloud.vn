// ==========================================
// Zing Cloud - JavaScript
// ==========================================

// Pricing data for services
const pricingData = {
    vps: {
        title: 'VPS Server',
        plans: [
            {
                name: 'Performance',
                price: '199.000đ/tháng',
                specs: {
                    cpu: '2 vCPU',
                    ram: '4GB RAM',
                    disk: '80GB NVMe SSD',
                    bandwidth: '100Mbps Unlimited',
                    antiddos: 'AntiDDoS Basic'
                }
            },
            {
                name: 'Plastic',
                price: '399.000đ/tháng',
                specs: {
                    cpu: '4 vCPU',
                    ram: '8GB RAM',
                    disk: '160GB NVMe SSD',
                    bandwidth: '200Mbps Unlimited',
                    antiddos: 'AntiDDoS Pro'
                }
            },
            {
                name: 'Premium',
                price: '799.000đ/tháng',
                specs: {
                    cpu: '8 vCPU',
                    ram: '16GB RAM',
                    disk: '320GB NVMe SSD',
                    bandwidth: '500Mbps Unlimited',
                    antiddos: 'AntiDDoS Premium'
                }
            }
        ]
    },
    cloudgame: {
        title: 'Cloud Game Server',
        plans: [
            {
                name: 'Performance',
                price: '299.000đ/tháng',
                specs: {
                    cpu: '4 vCPU',
                    ram: '8GB RAM',
                    disk: '120GB NVMe SSD',
                    bandwidth: '200Mbps Unlimited',
                    antiddos: 'AntiDDoS Gaming'
                }
            },
            {
                name: 'Plastic',
                price: '599.000đ/tháng',
                specs: {
                    cpu: '8 vCPU',
                    ram: '16GB RAM',
                    disk: '240GB NVMe SSD',
                    bandwidth: '500Mbps Unlimited',
                    antiddos: 'AntiDDoS Gaming Pro'
                }
            },
            {
                name: 'Premium',
                price: '1.199.000đ/tháng',
                specs: {
                    cpu: '16 vCPU',
                    ram: '32GB RAM',
                    disk: '480GB NVMe SSD',
                    bandwidth: '1Gbps Unlimited',
                    antiddos: 'AntiDDoS Gaming Premium'
                }
            }
        ]
    },
    dedicated: {
        title: 'Dedicated Server',
        plans: [
            {
                name: 'Performance',
                price: '2.999.000đ/tháng',
                specs: {
                    cpu: 'Intel Xeon E-2236',
                    ram: '32GB DDR4 ECC',
                    disk: '2x 480GB NVMe SSD',
                    bandwidth: '1Gbps Unlimited',
                    antiddos: 'AntiDDoS Enterprise'
                }
            },
            {
                name: 'Plastic',
                price: '4.999.000đ/tháng',
                specs: {
                    cpu: 'Intel Xeon E-2288G',
                    ram: '64GB DDR4 ECC',
                    disk: '2x 960GB NVMe SSD',
                    bandwidth: '10Gbps Unlimited',
                    antiddos: 'AntiDDoS Enterprise Pro'
                }
            },
            {
                name: 'Premium',
                price: '9.999.000đ/tháng',
                specs: {
                    cpu: 'AMD EPYC 7443P',
                    ram: '128GB DDR4 ECC',
                    disk: '4x 1.92TB NVMe SSD',
                    bandwidth: '10Gbps Unlimited',
                    antiddos: 'AntiDDoS Enterprise Premium'
                }
            }
        ]
    }
};

// ==========================================
// Header Scroll Effect
// ==========================================

let lastScrollTop = 0;
const header = document.getElementById('header');
const mainContent = document.getElementById('mainContent');

function updateHeaderPadding() {
    const headerHeight = header.offsetHeight;
    mainContent.style.paddingTop = `${headerHeight + 20}px`;
}

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50) {
        header.classList.remove('header-expanded');
        header.classList.add('header-shrunk');
    } else {
        header.classList.remove('header-shrunk');
        header.classList.add('header-expanded');
    }
    
    lastScrollTop = scrollTop;
    updateHeaderPadding();
});

// Initial padding
updateHeaderPadding();
window.addEventListener('resize', updateHeaderPadding);

// ==========================================
// Mobile Menu
// ==========================================

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuClose = document.getElementById('mobileMenuClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

mobileMenuClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ==========================================
// Service Cards
// ==========================================

const serviceCards = document.querySelectorAll('.service-card');
const serviceModal = document.getElementById('serviceModal');
const pricingGrid = document.getElementById('pricingGrid');
let currentService = '';

serviceCards.forEach(card => {
    const serviceBtn = card.querySelector('.btn-service');
    serviceBtn.addEventListener('click', () => {
        const serviceType = card.getAttribute('data-service');
        currentService = serviceType;
        openServiceModal(serviceType);
    });
});

function openServiceModal(serviceType) {
    const data = pricingData[serviceType];
    if (!data) return;
    
    // Clear previous content
    pricingGrid.innerHTML = '';
    
    // Create pricing cards
    data.plans.forEach(plan => {
        const card = document.createElement('div');
        card.className = 'pricing-card';
        
        const features = Object.entries(plan.specs).map(([key, value]) => 
            `<div class="feature-item">${value}</div>`
        ).join('');
        
        card.innerHTML = `
            <div class="pricing-header">
                <div class="pricing-name">${plan.name}</div>
                <div class="pricing-price">${plan.price}</div>
            </div>
            <div class="pricing-features">
                ${features}
            </div>
            <button class="btn-buy btn-zoom" data-plan="${plan.name}" data-price="${plan.price}" data-testid="button-buy-${plan.name.toLowerCase()}">
                Mua ngay
            </button>
        `;
        
        pricingGrid.appendChild(card);
    });
    
    // Add event listeners to buy buttons
    const buyButtons = pricingGrid.querySelectorAll('.btn-buy');
    buyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const plan = btn.getAttribute('data-plan');
            const price = btn.getAttribute('data-price');
            openCheckoutModal(data.title, plan, price);
        });
    });
    
    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==========================================
// Checkout Modal
// ==========================================

const checkoutModal = document.getElementById('checkoutModal');
let qrCodeInstance = null;

function openCheckoutModal(service, plan, price) {
    document.getElementById('orderService').textContent = service;
    document.getElementById('orderPlan').textContent = plan;
    document.getElementById('orderPrice').textContent = price;
    
    // Close service modal
    serviceModal.classList.remove('active');
    
    // Generate QR code using API (simpler and more reliable)
    const qrContainer = document.getElementById('qrcode');
    qrContainer.innerHTML = ''; // Clear previous QR
    
    const qrData = `ZINGCLOUD|${service}|${plan}|${price}|${Date.now()}`;
    const encodedData = encodeURIComponent(qrData);
    
    // Use QR Server API to generate QR code
    const qrImage = document.createElement('img');
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedData}`;
    qrImage.alt = 'QR Code thanh toán';
    qrImage.style.width = '200px';
    qrImage.style.height = '200px';
    qrImage.style.border = '4px solid white';
    qrImage.style.borderRadius = '8px';
    
    qrContainer.appendChild(qrImage);
    
    checkoutModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ==========================================
// Auth Modals
// ==========================================

const loginModal = document.getElementById('loginModal');
const registerModal = document.getElementById('registerModal');
const loginButtons = document.querySelectorAll('.btn-login');
const registerButtons = document.querySelectorAll('.btn-register');

loginButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

registerButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        registerModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
});

// ==========================================
// Modal Close Functionality
// ==========================================

const modals = document.querySelectorAll('.modal');
const modalCloseButtons = document.querySelectorAll('.modal-close');
const modalOverlays = document.querySelectorAll('.modal-overlay');

modalCloseButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const modal = btn.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

modalOverlays.forEach(overlay => {
    overlay.addEventListener('click', () => {
        const modal = overlay.closest('.modal');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ESC key to close modals
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        modals.forEach(modal => {
            if (modal.classList.contains('active')) {
                modal.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
        
        if (fabMenu.classList.contains('active')) {
            fabMenu.classList.remove('active');
        }
        
        if (mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    }
});

// ==========================================
// Form Submissions (Demo)
// ==========================================

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    console.log('Login attempt:', email);
    alert(`Đăng nhập thành công với email: ${email}\n(Demo - chưa kết nối backend)`);
    loginModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    loginForm.reset();
});

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    console.log('Register attempt:', email);
    alert(`Đăng ký thành công với email: ${email}\n(Demo - chưa kết nối backend)`);
    registerModal.classList.remove('active');
    document.body.style.overflow = 'auto';
    registerForm.reset();
});

// ==========================================
// Floating Action Button (FAB)
// ==========================================

const fabButton = document.getElementById('fabButton');
const fabMenu = document.getElementById('fabMenu');

fabButton.addEventListener('click', (e) => {
    e.stopPropagation();
    fabMenu.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!fabButton.contains(e.target) && !fabMenu.contains(e.target)) {
        fabMenu.classList.remove('active');
    }
});

// ==========================================
// Carousel Animation
// ==========================================

const carouselTrack = document.getElementById('carouselTrack');
const carouselItems = Array.from(document.querySelectorAll('.carousel-item'));

// Duplicate items for infinite scroll
carouselItems.forEach(item => {
    const clone = item.cloneNode(true);
    carouselTrack.appendChild(clone);
});

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================

const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Console Welcome Message
// ==========================================

console.log('%c🚀 Zing Cloud', 'color: #8B5CF6; font-size: 24px; font-weight: bold;');
console.log('%cPremium Cloud Services', 'color: #3B82F6; font-size: 14px;');
console.log('%cWebsite loaded successfully!', 'color: #06B6D4; font-size: 12px;');
