// ==========================================
// Zing Cloud - JavaScript
// ==========================================

// Pricing data for services
const pricingData = {
  gameServer: {
    title: 'Game Server Hosting',
    plans: [
      {
        name: 'Starter-1',
        price: '149.000đ/tháng',
        specs: {
          cpu: 'Intel Xeon E3-1230 v2 (4C/8T)',
          ram: '4GB DDR4',
          disk: '40GB NVMe SSD',
          bandwidth: '50Mbps Unlimited',
          gpu: 'Không có',
          antiddos: 'AntiDDoS Basic'
        }
      },
      {
        name: 'Starter-2',
        price: '249.000đ/tháng',
        specs: {
          cpu: 'Intel Xeon E5-2620 v3 (6C/12T)',
          ram: '8GB DDR4',
          disk: '80GB NVMe SSD',
          bandwidth: '100Mbps Unlimited',
          gpu: 'Không có',
          antiddos: 'AntiDDoS Basic'
        }
      },
      {
        name: 'Starter-3',
        price: '349.000đ/tháng',
        specs: {
          cpu: 'AMD Ryzen 5 3600 (6C/12T)',
          ram: '12GB DDR4',
          disk: '100GB NVMe SSD',
          bandwidth: '150Mbps Unlimited',
          gpu: 'GTX 1050 2GB',
          antiddos: 'AntiDDoS Basic'
        }
      },
      {
        name: 'Standard-1',
        price: '499.000đ/tháng',
        specs: {
          cpu: 'Intel Xeon E5-2670 v3 (12C/24T)',
          ram: '16GB DDR4',
          disk: '160GB NVMe SSD',
          bandwidth: '200Mbps Unlimited',
          gpu: 'GTX 1060 3GB',
          antiddos: 'AntiDDoS Pro'
        }
      },
      {
        name: 'Standard-2',
        price: '699.000đ/tháng',
        specs: {
          cpu: 'AMD Ryzen 7 3700X (8C/16T)',
          ram: '24GB DDR4',
          disk: '240GB NVMe SSD',
          bandwidth: '300Mbps Unlimited',
          gpu: 'GTX 1660 6GB',
          antiddos: 'AntiDDoS Pro'
        }
      },
      {
        name: 'Standard-3',
        price: '999.000đ/tháng',
        specs: {
          cpu: 'Intel Xeon E-2278G (8C/16T)',
          ram: '32GB DDR4 ECC',
          disk: '320GB NVMe SSD',
          bandwidth: '400Mbps Unlimited',
          gpu: 'RTX 2060 6GB',
          antiddos: 'AntiDDoS Gaming'
        }
      },
      {
        name: 'Advanced-1',
        price: '1.499.000đ/tháng',
        specs: {
          cpu: 'AMD Ryzen 9 5900X (12C/24T)',
          ram: '48GB DDR4',
          disk: '480GB NVMe SSD',
          bandwidth: '500Mbps Unlimited',
          gpu: 'RTX 3060 12GB',
          antiddos: 'AntiDDoS Gaming'
        }
      },
      {
        name: 'Advanced-2',
        price: '1.999.000đ/tháng',
        specs: {
          cpu: 'Intel Xeon E-2388G (8C/16T)',
          ram: '64GB DDR4 ECC',
          disk: '640GB NVMe SSD',
          bandwidth: '700Mbps Unlimited',
          gpu: 'RTX 3070 8GB',
          antiddos: 'AntiDDoS Gaming Pro'
        }
      },
      {
        name: 'Advanced-3',
        price: '2.999.000đ/tháng',
        specs: {
          cpu: 'AMD Ryzen 9 7950X (16C/32T)',
          ram: '96GB DDR5',
          disk: '1TB NVMe Gen4 SSD',
          bandwidth: '1Gbps Unlimited',
          gpu: 'RTX 4070 12GB',
          antiddos: 'AntiDDoS Gaming Pro'
        }
      },
      {
        name: 'Pro-1',
        price: '3.999.000đ/tháng',
        specs: {
          cpu: 'Intel Xeon Gold 6248R (24C/48T)',
          ram: '128GB DDR4 ECC',
          disk: '1.5TB NVMe SSD',
          bandwidth: '2Gbps Unlimited',
          gpu: 'RTX 4070Ti 12GB',
          antiddos: 'AntiDDoS Pro+'
        }
      },
      {
        name: 'Pro-2',
        price: '4.999.000đ/tháng',
        specs: {
          cpu: 'AMD EPYC 7302P (16C/32T)',
          ram: '128GB DDR4 ECC',
          disk: '1.92TB NVMe SSD',
          bandwidth: '3Gbps Unlimited',
          gpu: 'RTX 4080 16GB',
          antiddos: 'AntiDDoS Pro+'
        }
      },
      {
        name: 'Pro-3',
        price: '5.999.000đ/tháng',
        specs: {
          cpu: 'Intel Xeon Silver 4314 (16C/32T)',
          ram: '192GB DDR4 ECC',
          disk: '2TB NVMe SSD',
          bandwidth: '3Gbps Unlimited',
          gpu: 'RTX 4080 Super 16GB',
          antiddos: 'AntiDDoS Enterprise'
        }
      },
      {
        name: 'Enterprise-1',
        price: '7.999.000đ/tháng',
        specs: {
          cpu: 'AMD EPYC 7443P (24C/48T)',
          ram: '256GB DDR4 ECC',
          disk: '2.5TB NVMe SSD',
          bandwidth: '5Gbps Unlimited',
          gpu: 'RTX 4090 24GB',
          antiddos: 'AntiDDoS Enterprise Premium'
        }
      },
      {
        name: 'Enterprise-2',
        price: '9.999.000đ/tháng',
        specs: {
          cpu: 'Intel Xeon Gold 6258R (28C/56T)',
          ram: '256GB DDR4 ECC',
          disk: '3TB NVMe SSD',
          bandwidth: '5Gbps Unlimited',
          gpu: 'RTX 4090 24GB',
          antiddos: 'AntiDDoS Enterprise Premium'
        }
      },
      {
        name: 'Enterprise-3',
        price: '12.999.000đ/tháng',
        specs: {
          cpu: 'AMD EPYC 9654 (32C/64T)',
          ram: '384GB DDR5 ECC',
          disk: '4TB NVMe SSD',
          bandwidth: '8Gbps Unlimited',
          gpu: 'RTX 5000 Ada 24GB',
          antiddos: 'AntiDDoS Enterprise Ultra'
        }
      },
      {
        name: 'Titan-1',
        price: '15.999.000đ/tháng',
        specs: {
          cpu: 'AMD Threadripper 7980X (64C/128T)',
          ram: '512GB DDR5',
          disk: '6TB NVMe Gen4 SSD',
          bandwidth: '10Gbps Unlimited',
          gpu: 'RTX 5000 Ada 32GB',
          antiddos: 'AntiDDoS Ultra'
        }
      },
      {
        name: 'Titan-2',
        price: '18.999.000đ/tháng',
        specs: {
          cpu: 'Intel Xeon Platinum 8370C (32C/64T)',
          ram: '512GB DDR4 ECC',
          disk: '8TB NVMe SSD',
          bandwidth: '10Gbps Unlimited',
          gpu: 'RTX 6000 Ada 48GB',
          antiddos: 'AntiDDoS Ultra'
        }
      },
      {
        name: 'Titan-3',
        price: '21.999.000đ/tháng',
        specs: {
          cpu: 'AMD EPYC 9654 (96C/192T)',
          ram: '768GB DDR5 ECC',
          disk: '10TB NVMe SSD',
          bandwidth: '10Gbps Unlimited',
          gpu: 'RTX 6000 Ada 48GB',
          antiddos: 'AntiDDoS Ultra'
        }
      },
      {
        name: 'Extreme-1',
        price: '24.999.000đ/tháng',
        specs: {
          cpu: 'AMD EPYC 9754 (128C/256T)',
          ram: '1024GB DDR5 ECC',
          disk: '12TB NVMe SSD',
          bandwidth: '10Gbps Unlimited',
          gpu: '2x RTX 4090 24GB',
          antiddos: 'AntiDDoS Supreme'
        }
      },
      {
        name: 'Extreme-2',
        price: '27.999.000đ/tháng',
        specs: {
          cpu: 'Dual Xeon Platinum 8490H (2x60C/120T)',
          ram: '1536GB DDR5 ECC',
          disk: '16TB NVMe SSD',
          bandwidth: '20Gbps Unlimited',
          gpu: '2x RTX 5000 Ada 32GB',
          antiddos: 'AntiDDoS Supreme'
        }
      },
      {
        name: 'Extreme-3',
        price: '29.999.000đ/tháng',
        specs: {
          cpu: 'AMD EPYC 9754 (128C/256T)',
          ram: '2048GB DDR5 ECC',
          disk: '20TB NVMe SSD',
          bandwidth: '20Gbps Unlimited',
          gpu: '4x RTX 4090 24GB',
          antiddos: 'AntiDDoS Supreme'
        }
      },
      {
        name: 'Ultimate-1',
        price: '34.999.000đ/tháng',
        specs: {
          cpu: 'Dual Xeon Platinum 8592+ (2x64C/128T)',
          ram: '3TB DDR5 ECC',
          disk: '24TB NVMe SSD',
          bandwidth: '25Gbps Unlimited',
          gpu: '4x RTX 6000 Ada 48GB',
          antiddos: 'AntiDDoS Extreme'
        }
      },
      {
        name: 'Ultimate-2',
        price: '39.999.000đ/tháng',
        specs: {
          cpu: 'AMD EPYC 9754 (128C/256T)',
          ram: '4TB DDR5 ECC',
          disk: '32TB NVMe SSD',
          bandwidth: '40Gbps Unlimited',
          gpu: '8x RTX 6000 Ada 48GB',
          antiddos: 'AntiDDoS Extreme'
        }
      },
      {
        name: 'Ultimate-3',
        price: '49.999.000đ/tháng',
        specs: {
          cpu: 'Dual AMD EPYC 9754 (256C/512T)',
          ram: '6TB DDR5 ECC',
          disk: '40TB NVMe SSD',
          bandwidth: '50Gbps Unlimited',
          gpu: '8x RTX 6000 Ada 48GB',
          antiddos: 'AntiDDoS Extreme Plus'
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

document.addEventListener("DOMContentLoaded", () => {
  const musicBtn = document.getElementById("musicButton");
  const audio = document.getElementById("bgMusic");
  const src = document.getElementById("bgSource")?.src || null;
  if (!musicBtn || !audio) return;

  // Kiểm tra file tồn tại (fetch HEAD)
  async function checkAudioUrl(url) {
    try {
      const res = await fetch(url, { method: 'HEAD' });
      return res.ok && res.headers.get('content-type')?.startsWith('audio');
    } catch (e) {
      return false;
    }
  }

  (async () => {
    if (src) {
      const ok = await checkAudioUrl(src);
      if (!ok) {
        console.warn('Audio file không truy cập được:', src);
        // fallback: nếu có file local nhac.mp3 thì dùng
        const local = 'nhac.mp3';
        try {
          const r2 = await fetch(local, { method: 'HEAD' });
          if (r2.ok) {
            document.getElementById('bgSource').src = local;
            audio.load();
            console.log('Chuyển sang nhac.mp3 local fallback');
          } else {
            console.error('Không tìm thấy file nhạc (raw và local đều fail).');
          }
        } catch (e) {
          console.error('Lỗi kiểm tra local audio:', e);
        }
      }
    }
  })();

  let isPlaying = false;

  musicBtn.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        await audio.play();
        isPlaying = true;
        musicBtn.textContent = "⏸ Dừng";
        musicBtn.classList.add("playing");
      } else {
        audio.pause();
        isPlaying = false;
        musicBtn.textContent = "🎵 Phát";
        musicBtn.classList.remove("playing");
      }
    } catch (err) {
      console.warn("Không thể phát nhạc:", err);
      alert("Trình duyệt chặn phát nhạc — thử nhấn lại hoặc mở console để xem lỗi.");
    }
  });
});
