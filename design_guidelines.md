# Design Guidelines for Zing Cloud

## Design Approach
**Reference-Based**: Inspired by modern cloud hosting platforms (AsakaCloud.vn aesthetic) with heavy emphasis on glassmorphism, gradient themes, and premium tech aesthetics.

## Core Design Principles
- **Glassmorphism-First**: All interactive elements (panels, modals, forms, cards) feature semi-transparent bluish glass treatment with blur effects
- **Gradient Dominance**: Purple ↔ Blue ↔ Black gradient flows throughout the design
- **No Loading Screens**: Immediate content display, no splash screens
- **Premium Tech Aesthetic**: High-end cloud hosting platform appearance

## Typography
- **Font Family**: Inter (primary), system UI (fallback)
- **Weights**: Bold/Extrabold for all headings and titles, Regular/Medium for body text
- **Hierarchy**: Large bold headings for sections, medium weight for descriptions, clear size differentiation between H1/H2/H3

## Layout System
**Spacing Units**: Tailwind units of 4, 6, 8, 12, 16, 20, 24 (p-4, h-8, m-6, etc.)
- Header: Large padding when expanded, compact when scrolled
- Sections: Generous vertical spacing (py-16 to py-24)
- Cards/Panels: Consistent internal padding (p-6 to p-8)
- Mobile: Reduced spacing (py-8 to py-12)

## Color Treatment
- Primary gradient: Purple → Blue → Black (smooth transitions)
- Glass panels: Semi-transparent bluish tint with backdrop blur
- Overlays: Translucent blue-tinted backgrounds for all modals/popups
- Accents: Bright purple-blue highlights for CTAs and active states

## Component Library

### Header/Navigation
- **Fixed Position**: Always visible at top
- **Two States**: 
  - Expanded (at page top): Larger padding, bigger logo, more breathing room
  - Shrunk (scrolled): Compact padding, smaller logo, minimal height
- **Transition**: Smooth 0.25-0.35s ease on all size changes
- **Menu Items**: Home, Dịch vụ, Hỗ trợ, Liên hệ, Đăng nhập, Đăng ký
- **Mobile**: Full-screen overlay menu or slide-in panel
- **Logo**: Letter "Z" badge with 3D gradient (purple-blue), displayed as text-based or inline SVG

### Buttons
- **Primary CTAs**: Gradient background (purple-blue), bold text, generous padding
- **Zoom Effect**: Scale 1.06-1.1 on active/click with fast transition (0.12-0.20s)
- **Hover**: Subtle gradient shift or enhanced shadow
- **Glass Buttons** (on hero/images): Blurred translucent background, no hover interactions (Button component handles its own states)

### Service Cards
- **Layout**: Grid of 3 main services (VPS, Cloud Game, Dedicated)
- **Glass Treatment**: Semi-transparent bluish background with blur
- **Pricing Plans**: Each service shows 3 tiers (Performance, Plastic, Premium)
- **Plan Details**: Name, specs (CPU/RAM/Disk), features (bandwidth, AntiDDoS), pricing
- **CTA**: "Mua" button on each plan opens checkout modal

### Carousel/Brand Strip
- **Height**: 200-300px fixed
- **Design**: Continuous horizontal scroll of varied cards (verification badges, logos, testimonials)
- **Card Shapes**: Mix of round and square elements
- **Animation**: Smooth continuous left-scroll, hover lifts card with subtle rotateY tilt
- **Visual Depth**: Cards have slight 3D effect with shadows

### Modals & Popups
- **Login/Register**: Translucent bluish glass background with blur, centered on screen
- **Checkout**: QR code display area, order summary, glass treatment
- **Form Fields**: Clean inputs with subtle borders, good contrast against glass background
- **Close**: ESC key support, X button in corner
- **Accessibility**: Clear focus states, proper ARIA labels

### Floating Action Button (FAB)
- **Position**: Bottom corner (fixed)
- **Icon**: Branch/contact logo
- **Expand**: Reveals contact menu (Discord, Facebook, Messenger, Email: ZingCloud.tech@gmail.com, Hotline: 0705 983 391)
- **Design**: Circular glass button with gradient accent

### QR Code Feature
- **Checkout Modal**: Display generated QR code from input string
- **Layout**: QR centered, order details alongside, all within glass panel
- **Demo Purpose**: Frontend-only, no real payment processing

## Responsive Behavior
- **Desktop**: Full multi-column layouts, expanded spacing, all effects visible
- **Tablet**: 2-column grids, medium spacing, simplified animations
- **Mobile**: Single column, larger touch targets (min 44x44px), overlay menus, reduced spacing
- **Header Compensation**: Main content has dynamic padding-top to prevent header overlap

## Interactive Elements
- All clickable elements have clear hover/focus states
- Keyboard navigation fully supported
- Tab order follows visual hierarchy
- Touch targets sized appropriately for mobile (minimum 44x44px)

## Animations
- **Minimal & Purposeful**: Only header shrink/expand, button zoom, carousel scroll, card hover effects
- **Duration**: Fast interactions (0.12-0.20s), medium transitions (0.25-0.35s)
- **Easing**: Smooth, natural motion curves
- **No Distractions**: Avoid excessive motion that detracts from content

## Images
- **Logo**: 3D gradient "Z" badge (SVG preferred) - purple to blue gradient, dimensional appearance
- **Service Icons**: Simple, clean icons representing VPS, Cloud Gaming, Dedicated services
- **Brand Strip**: Mix of verification badges, partner logos, trust indicators in carousel
- **No large hero image required**: Design focuses on glassmorphism and gradients over photography

## Accessibility
- High contrast text against glass backgrounds
- Clear focus indicators (visible outline or glow)
- Proper heading hierarchy (H1→H2→H3)
- ARIA labels on modals, buttons, navigation
- Screen reader friendly structure