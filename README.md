# Children's Learning Cottage Website

A modern, responsive website for Children's Learning Cottage, a premium Reggio Emilia-inspired preschool in Mountain View, California.

## 🏫 About the Project

This website revamp creates a warm, engaging, and parent-friendly digital experience that reflects the school's educational philosophy and builds trust with prospective families. Built with modern web technologies and optimized for performance, accessibility, and SEO.

## ✨ Key Features

### 🎨 Design & User Experience
- **Modern, warm design** with nature-inspired color palette
- **Mobile-first responsive** design optimized for all devices
- **Accessibility compliant** (WCAG 2.1) with proper focus management
- **Fast loading speeds** with optimized images and code splitting
- **Smooth animations** and micro-interactions for enhanced UX

### 📱 Pages & Functionality
- **Homepage** - Hero section, key benefits, testimonials, CTAs
- **About Us** - School philosophy, Reggio Emilia approach, history
- **Programs** - Age-based program details and curriculum overview
- **Teachers & Staff** - Team profiles and qualifications
- **Admissions** - Enrollment process and requirements
- **Gallery** - Photos and videos of activities and facilities
- **Parents** - Resources and communication tools
- **Contact** - Contact forms, location, and tour booking
- **Testimonials** - Parent reviews and experiences
- **Blog/News** - Updates and educational resources

### 🛠 Technical Features
- **Contact forms** with validation and email integration
- **Tour booking system** for virtual and in-person visits
- **Photo gallery** with filtering capabilities
- **Google Maps integration** for location and directions
- **SEO optimization** for local search visibility
- **Social media integration** for community engagement

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS v4 with custom design system
- **Icons**: Lucide React for consistent iconography
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion for smooth transitions
- **Deployment**: Vercel-ready configuration

## 🎨 Design System

### Color Palette
- **Forest Green**: Primary brand color (#3a9a3a)
- **Warm Orange**: Secondary/accent color (#f88344)
- **Mauve Purple**: Tertiary accent (#6F4D6CFF)
- **Cream**: Background and neutral (#fefdf8)

### Typography
- **Headings**: Poppins (friendly, approachable)
- **Body**: Inter (clean, readable)
- **Display**: Custom font hierarchy for optimal readability

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/clc-new.git
   cd clc-new
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── forms/            # Form components
│   └── sections/         # Page sections
├── lib/                  # Utility functions
└── styles/               # Global styles
```

## 🌟 Key Components

### Layout Components
- **Header**: Navigation with responsive mobile menu
- **Footer**: Contact info, quick links, social media
- **Navigation**: Sticky header with smooth scrolling

### UI Components
- **Button**: Multiple variants (primary, secondary, outline, ghost)
- **Card**: Flexible content containers with consistent styling
- **Form Elements**: Styled inputs, selects, and textareas

### Page Sections
- **Hero**: Eye-catching introduction with CTAs
- **Features**: Highlighting school benefits and philosophy
- **Testimonials**: Parent reviews and experiences
- **Contact Forms**: Inquiry and tour booking forms

## 📧 Contact Form Integration

The contact forms are ready for backend integration. Current implementation includes:

- **Form validation** with real-time feedback
- **Loading states** and success messages
- **Accessible form design** with proper labeling
- **Multiple inquiry types** for better categorization

To integrate with a backend service:
1. Replace the mock form submission in `/src/app/contact/page.tsx`
2. Add your email service (SendGrid, Nodemailer, etc.)
3. Configure environment variables for API keys

## 🔍 SEO Optimization

The website includes comprehensive SEO optimization:

- **Metadata configuration** for all pages
- **Open Graph tags** for social media sharing
- **Structured data** for local business
- **Semantic HTML** with proper heading hierarchy
- **Image alt texts** and accessibility features
- **Local SEO** targeting Mountain View and Silicon Valley

## 🎯 Performance Optimization

- **Image optimization** with Next.js Image component
- **Code splitting** with dynamic imports
- **Font optimization** with next/font
- **CSS optimization** with Tailwind CSS purging
- **Bundle analysis** available with `npm run analyze`

## 📱 Browser Support

- **Modern browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile browsers**: iOS Safari, Chrome Mobile
- **Accessibility**: Screen readers and keyboard navigation

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables if needed
3. Deploy automatically on push to main branch

### Manual Deployment
1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting provider
3. Configure redirects for client-side routing

## 🔧 Customization

### Adding New Pages
1. Create a new folder in `src/app/`
2. Add `page.tsx` and `layout.tsx` if needed
3. Update navigation in `src/components/layout/header.tsx`

### Modifying Colors
Update the color palette in `src/app/globals.css`:
```css
:root {
  --color-primary: #your-color;
  /* Add more custom colors */
}
```

### Adding Components
1. Create component in appropriate folder under `src/components/`
2. Export from index file for easy imports
3. Follow existing patterns for consistency

## 📞 Support & Contact

For questions about this website implementation:

- **Email**: your-email@example.com
- **GitHub Issues**: Create an issue for bugs or feature requests
- **Documentation**: Check the component comments for detailed usage

## 📄 License

This project is created for Children's Learning Cottage. All rights reserved.

---

## 🎓 Educational Philosophy Integration

This website effectively communicates the Reggio Emilia approach through:

- **Visual storytelling** that shows children's learning experiences
- **Philosophy explanations** that help parents understand the approach
- **Teacher spotlights** that highlight educator qualifications
- **Project documentation** that makes learning visible
- **Community focus** that emphasizes collaborative learning

The design reflects the core principles of the Reggio Emilia philosophy while maintaining a professional, trustworthy appearance that appeals to Silicon Valley families.

---

*Built with ❤️ for Children's Learning Cottage*
