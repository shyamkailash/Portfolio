# Premium AI Engineer Portfolio - Design System

## 🎨 Color Palette

### Primary Colors
- **Background Primary**: `#020617` - Deep space black
- **Background Card**: `#0f172a` - Slate card background
- **Accent Cyan**: `#22d3ee` - Primary accent, energy
- **Accent Blue**: `#3b82f6` - Secondary accent, trust
- **Accent Purple**: `#8b5cf6` - Tertiary accent, innovation

### Text Colors
- **Primary Text**: `#f8fafc` - Main content
- **Secondary Text**: `#94a3b8` - Supporting text
- **Muted Text**: `#64748b` - Disabled/subtle text

### Effects
- **Border Light**: `rgba(148, 163, 184, 0.16)` - Subtle borders
- **Border Medium**: `rgba(148, 163, 184, 0.25)` - Prominent borders
- **Glassmorphic**: `rgba(15, 23, 42, 0.65)` - Glass effect background

## 📝 Typography

### Font Families
- **Headings**: Space Grotesk (500, 600, 700 weights)
- **Body**: Inter (400, 500, 600, 700, 800 weights)

### Font Sizes (Clamp for Responsiveness)
- **H1**: `clamp(3.8rem, 7.5vw, 6.8rem)` - Hero heading
- **H2**: `clamp(1.8rem, 4vw, 2.8rem)` - Section heading
- **Body**: `1.08rem` - Standard body text
- **Small**: `0.95rem` - Reduced text

## 🎬 Animations

### Core Animations
- **fadeInUp**: Fade in with upward motion (0.6s)
- **fadeIn**: Simple fade in (0.5s)
- **slideInLeft/Right**: Slide in from sides (0.6s)
- **scaleIn**: Scale up from center (0.5s)

### Interactive Animations
- **Hover**: -3px to -4px vertical lift
- **Active**: Scale down slightly (0.95x)
- **Ripple**: Circular expansion on click

### Continuous Animations
- **Glow Pulse**: 4s loop glow effect
- **Ring Rotate**: 8s continuous rotation
- **Background Shift**: 20s background animation
- **Card Float**: 5s up/down bobbing

## 🌟 Effects & Shadows

### Glow Effects
- **Glow SM**: `0 0 20px rgba(34, 211, 238, 0.15)`
- **Glow MD**: `0 0 28px rgba(34, 211, 238, 0.22), 0 0 58px rgba(139, 92, 246, 0.12)`
- **Glow LG**: `0 0 40px rgba(34, 211, 238, 0.25), 0 0 80px rgba(139, 92, 246, 0.15)`

### Shadows
- **Shadow SM**: `0 4px 16px rgba(0, 0, 0, 0.15)`
- **Shadow MD**: `0 12px 32px rgba(34, 211, 238, 0.2)`
- **Shadow LG**: `0 20px 50px rgba(0, 0, 0, 0.25)`

## 🎭 Glassmorphism

All glass-effect elements include:
- Semi-transparent background with blend mode
- Backdrop blur (12px-18px)
- Subtle border with transparency
- Inset shadow for depth

## 📐 Spacing

Uses consistent spacing scale:
- 8px base unit
- Multiples: 8px, 12px, 16px, 24px, 32px, 40px, 48px, 56px, 64px

## 🔤 Component Patterns

### Buttons
- **Primary**: Gradient background + glow shadow + hover lift
- **Secondary**: Glass effect + border + hover background
- **Ripple effect** on active state

### Cards
- Gradient background with glassmorphism
- Animated border with conic-gradient
- Hover state with enhanced glow
- 3D transform on hover

### Social Icons
- Glass background with border
- Gradient border on hover
- Vertical lift on hover
- Semi-transparent overlay

## 🎯 Breakpoints

- **Mobile**: 320px - 479px
- **Small**: 480px - 679px
- **Medium**: 680px - 979px
- **Large**: 980px - 1279px
- **XL**: 1280px+

## ✨ Premium Features

### Navbar
- Sticky positioning with smooth scale transition on scroll
- Active menu indicator with underline animation
- Gradient CTA button with reversed gradient on hover
- Mobile menu with slide-down animation

### Hero
- Animated background with parallax-like subtle shift
- Staggered child animations for content
- Animated status badge with pulsing indicator
- Gradient text with text-shadow glow

### Identity Card
- Realistic hanging strap and clip design
- Rotating conic-gradient ring around profile photo
- Animated border with gradient outline
- 3D perspective transforms on hover
- Floating animation with subtle bob effect
- Multiple layers of glowing effects

### Background
- Multi-layered radial gradients
- Animated grid pattern
- Mouse-tracking glow effect (throttled)
- Subtle continuous animation

## 🚀 Performance Optimizations

- CSS animations use GPU-accelerated transforms
- Throttled mouse tracking (20ms debounce)
- Pointer-events: none for non-interactive overlays
- Will-change applied to frequently animated elements
- No unnecessary re-renders with proper React optimization

## 📱 Responsive Design

- Fluid typography using `clamp()`
- CSS Grid with auto-fit for flexibility
- Mobile-first approach with progressive enhancement
- Touch-friendly interactive elements (48px minimum)
- Optimized spacing for small screens

## 🎓 Future Component Templates

Templates prepared for:
- About section with split layout
- Skills section with animated cards
- Projects section with hover effects
- Timeline section with vertical connections
- Certificates section with modals
- Contact form with validation
- Footer with social links
