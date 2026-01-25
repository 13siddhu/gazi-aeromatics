# 🌿 Gazi Aeromatics - Corporate Website

A modern, responsive, and interactive web application developed for **Gazi Aeromatics**, a leading manufacturer of organic essential oils, aroma chemicals, and medicinal plants. This project showcases the company's infrastructure, certifications, and product catalog with a focus on user experience and aesthetic appeal.

---

## 🚀 Project Overview

- **Type:** Corporate Website / Product Showcase
- **Industry:** Organic & Conventional Essential Oils Manufacturing
- **Location:** Badaun, Uttar Pradesh, India
- **Established:** 2010
- **Key Features:** Interactive animations, responsive design, dynamic routing, and detailed product/certification showcases

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [React.js](https://reactjs.org/) with [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** [React Router DOM](https://reactrouter.com/)
- **Animations:** CSS Keyframes & Tailwind Utilities

### Backend (Structure Prepared)
- **Folder:** `backend/` (Ready for Node.js/Express or Python integration)

---

## 📂 Project Structure

```
gazi-aeromatics/
├── backend/                      # Backend API and Database logic
├── frontend/                     # React Frontend Application
│   ├── public/                   # Static assets
│   ├── src/
│   │   ├── assets/               # Images, logos, and icons
│   │   │   ├── photo/            # Certificate images (USDA, ISO, etc.)
│   │   │   └── productimage/     # General site images
│   │   ├── components/           # Reusable UI components
│   │   │   ├── partials/         # Header, Footer components
│   │   │   ├── AboutUs.jsx       # Company history and mission
│   │   │   ├── Certificates.jsx  # Certifications showcase
│   │   │   ├── Home.jsx          # Landing page
│   │   │   ├── Products.jsx      # Product catalog
│   │   │   └── Contact.jsx       # Contact information
│   │   ├── App.jsx               # Main application layout
│   │   ├── main.jsx              # Entry point
│   │   └── index.css             # Global styles & Tailwind directives
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
└── README.md
```

---

## ✨ Key Features

### 1. **Immersive UI/UX**
- Smooth scrolling and hover effects using Tailwind CSS
- Custom gradients and shadow depths for a premium feel
- Responsive navigation menu with dropdowns
- Mobile-first design approach

### 2. **Dedicated Certifications Page**
- Grid layout displaying industry standards:
  - USDA Organic Certification
  - ISO 9001:2015 Quality Management
  - Kosher Certification
  - Halal Certification
- Visual "Quality Assurance" breakdown
- Downloadable certificate PDFs

### 3. **About Us & Company History**
- Interactive timeline showcasing company journey since 2010
- Infrastructure showcase highlighting:
  - Manufacturing capabilities in Badaun, UP
  - State-of-the-art distillation units
  - Quality control laboratories
  - Storage and packaging facilities

### 4. **Product Catalog**
- Comprehensive listing of essential oils
- Category-wise filtering (Organic/Conventional)
- Detailed product specifications
- High-quality product imagery

### 5. **Contact & Location**
- Interactive contact form
- Google Maps integration
- Multiple communication channels
- Business inquiry handling

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally.

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Git**

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/gazi-aeromatics.git
cd gazi-aeromatics
```

### 2. Frontend Setup

Navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

### 3. Run the Development Server

Start the frontend development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 4. Build for Production

Create an optimized production build:

```bash
npm run build
```

The build files will be generated in the `dist/` directory.

### 5. Preview Production Build

```bash
npm run preview
```

---

## 🎨 Customization

### Tailwind Configuration

Modify `tailwind.config.js` to customize:
- Color schemes
- Typography
- Spacing
- Breakpoints

### Adding New Components

1. Create a new component file in `src/components/`
2. Import and use in `App.jsx` or other components
3. Add routing in `App.jsx` if needed

### Updating Assets

- Place images in `src/assets/photo/`
- Place certificates in `src/assets/certifications/`
- Update import paths in components

---

## 📦 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint for code quality |

---

## 🌐 Deployment

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm install gh-pages --save-dev
npm run build
npx gh-pages -d dist
```


---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Guidelines

- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

---


## 🙏 Acknowledgments

- **Gazi Aeromatics** for the opportunity to develop this project
- **React** and **Vite** teams for amazing development tools
- **Tailwind CSS** for the utility-first CSS framework
- **Lucide Icons** for beautiful iconography

---


<div align="center">

**Developed with ❤️ by Siddhartha Singh**

</div>