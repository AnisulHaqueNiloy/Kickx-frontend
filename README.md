# 👟 Kicks - Premium Footwear E-commerce Platform

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Redux](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

**Kicks** is a high-performance, pixel-perfect e-commerce web application designed for sneaker enthusiasts. Built with a focus on modern UI/UX, scalable architecture, and seamless state management.

---

## 🚀 Live Demo
[Explore Kicks Live →](https://jade-cactus-6d327a.netlify.app/)

## 🛠️ Tech Stack & Tools

* **Core:** React.js + TypeScript
* **State Management:** Redux Toolkit (RTK)
* **Data Fetching:** RTK Query (Caching, Mutations, and Automated Re-fetching)
* **Styling:** Tailwind CSS (Custom configurations for brand identity)
* **Animations:** AOS (Animate On Scroll) & Tailwind-based micro-interactions
* **Icons:** Lucide React & React Icons
* **Slider:** Swiper.js (Custom grid integration)

## ✨ Key Features

* **Advanced Cart Management:** Fully functional cart with RTK state, calculating shipping, taxes, and real-time total updates.
* **Smart Product Grid:** Adaptive layouts that switch from 2-column grids on desktop to 1-column, 2-row layouts on mobile.
* **Seamless UX:** Clean, minimalist design with a "See All" review toggle and interactive category carousels.
* **Performance First:** Used RTK Query for optimized API handling and efficient re-rendering.
* **Mobile Optimized:** Fully responsive design with specific focus on mobile-first touch interactions.

## 📂 Project Structure

```text
src/
├── app/                # Redux store & Root reducer
├── features/           # RTK Query API slices & State logic
├── components/         # Atomic & Reusable UI components
│   ├── ui/             # Reusable base components (Buttons, Inputs)
│   ├── shared/         # Common layout parts (Navbar, Footer)
│   └── review/         # Review & Category specific cards
├── hooks/              # Custom TypeScript hooks
├── pages/              # Page-level view components
├── assets/             # Global styles and static assets
└── utils/              # Formatting & helper functions


## ⚙️ Installation & Setup

Follow these steps to get the project running on your local machine:

1. **Clone the Repo:**
   ```bash
   git clone [https://github.com/your-username/kicks-ecommerce.git](https://github.com/your-username/kicks-ecommerce.git)

2. **Install Dependencies:**
   ```bash
   npm install

3. **Run Development Server:**
   ```bash
   npm run dev
