# moekyawaung-developer-portfolio-54 ✨

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black) ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Stars](https://img.shields.io/github/stars/Dev-moe-kyawaung/moekyawaung-developer-portfolio-54?style=for-the-badge&color=gold) ![Forks](https://img.shields.io/github/forks/Dev-moe-kyawaung/moekyawaung-developer-portfolio-54?style=for-the-badge&color=blue)

## 📝 Description

This repository hosts the interactive and visually engaging personal portfolio of **Moe Kyaw Aung**, a Senior Android Developer specializing in Kotlin, Jetpack Compose, Firebase, and Clean Architecture. Built with React, Vite, and Tailwind CSS, this single-page application serves as a dynamic showcase of their engineering principles, detailed case studies, GitHub activity, and open-source contributions.

The portfolio emphasizes a frontend-focused approach, combining design polish with robust system design. It features smooth animations, scroll-triggered content reveals, and graceful degradation for reduced motion preferences, mirroring high-quality mobile UI/UX principles. The site provides a comprehensive overview of Moe Kyaw Aung's expertise, project experience, and availability for new opportunities.

## 📖 Table of Contents

*   [✨ Features](#-features)
*   [💻 Tech Stack](#-tech-stack)
*   [🚀 Installation](#-installation)
*   [🛠️ Usage](#️-usage)
*   [📂 Project Structure](#-project-structure)
*   [🌐 Important Links](#-important-links)
*   [🤝 Contributing](#-contributing)
*   [📄 License](#-license)
*   [©️ Footer](#️-footer)

## ✨ Features

This portfolio is designed to be highly interactive and informative, showcasing a blend of technical prowess and thoughtful user experience.

*   **Dynamic Developer Profile** 🧑‍💻: Presents a detailed overview of Moe Kyaw Aung's role, location, contact information, and professional summary.
*   **Interactive UI/UX** 🎨: Incorporates responsive design, a subtle particle field background, scroll-triggered content reveals (`useInView`), typewriter effects (`useTypewriter`) for hero text, and a 3D tilt effect (`useTilt`) on showcase elements for an immersive experience. Respects user `prefers-reduced-motion` settings.
*   **Comprehensive Case Studies** 💼: Highlights key Android projects like `MoekyawTranslator` (AI Translation, Myanmar-first with TFLite & Claude API) and `PulseSync` (Offline-first real-time sync with multi-module architecture and CI/CD). Each study details technical trade-offs, metrics, and project verdicts.
*   **Real-time GitHub Statistics** 📈: Displays up-to-date metrics such as repositories, stars, estimated commits, a language mix breakdown, and a coding streak, providing a transparent look into development activity.
*   **Open Source Contributions** 🌍: Showcases involvement in community projects like "Thailand ⇄ Myanmar Workers Hub" and open-sourced architectural templates, demonstrating a commitment to building in public and knowledge sharing.
*   **Integrated Hiring Form** ✉️: A secure, in-app messaging modal (`HireModal`) allows potential employers to initiate contact directly, with simulated backend interaction and clear response time expectations.
*   **Intuitive Navigation** 🧭: Features a sticky bottom navigation dock and a Floating Action Button (FAB) for quick access to main sections and the hiring form.
*   **Accessibility First** ✅: Implements graceful degradation for animations on devices with low memory or `prefers-reduced-motion` enabled, ensuring a broad and inclusive user experience.
*   **Animated Counters** 🔢: Custom animated counters for GitHub statistics, providing an engaging visual representation of achievements.

## 💻 Tech Stack

This project leverages a modern web development stack to deliver a high-performance and visually rich experience.

*   **Frontend Framework**: React v19
*   **Language**: TypeScript v5
*   **Styling**: Tailwind CSS v4
*   **Build Tool**: Vite v7
*   **Utility Libraries**: `clsx`, `tailwind-merge`
*   **Deployment**: Optimized for single-file deployment (`vite-plugin-singlefile`)
*   **Backend (Simulated/Referenced)**: Firebase (Firestore, FCM, Crashlytics), Claude API (for AI features in case studies), Python (for tooling mentioned in `resume.ts`)

## 🚀 Installation

To set up the project locally, follow these steps.

### Prerequisites

Make sure you have the following installed on your machine:
*   Node.js (LTS recommended)
*   npm (Node Package Manager) or yarn

### Steps

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/Dev-moe-kyawaung/moekyawaung-developer-portfolio-54.git
    cd moekyawaung-developer-portfolio-54
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    # or yarn install
    ```

3.  **Run the development server**:
    ```bash
    npm run dev
    # or yarn dev
    ```
    The application will be accessible at `http://localhost:5173` (or another port if 5173 is in use).

4.  **Build for production**:
    ```bash
    npm run build
    # or yarn build
    ```
    This will compile the project into optimized static files in the `dist` directory.

5.  **Preview the production build**:
    ```bash
    npm run preview
    # or yarn preview
    ```
    This will serve the production build locally for testing.

## 🛠️ Usage

This project functions as a personal portfolio website. Once installed and running (or accessed via a live deployment), you can interact with it as follows:

*   **Explore Sections**: Navigate through the various sections of the portfolio using the persistent bottom dock or by scrolling.
*   **View Case Studies**: Discover detailed information about past projects. For links within case studies, you can **press and hold** to preview the destination before navigating, or simply click to open the link.
*   **Check GitHub Activity**: See aggregated statistics about repository contributions, stars, and coding habits.
*   **Learn About Open Source**: Read about community involvement and foundational contributions.
*   **Contact for Opportunities**: Use the prominent "Let's build together" button or the Floating Action Button (FAB) to open the hiring form and send a message. Direct contact information (email, phone, social media) is also available.

The site is designed to be self-explanatory and provides an interactive experience to showcase the developer's skills and projects effectively.

## 📂 Project Structure

The repository follows a clear and organized structure:

```
moekyawaung-developer-portfolio-54/
├── public/
│   ├── img/                  # Images for avatar and case studies
│   └── ...
├── src/
│   ├── App.tsx               # Main application component, orchestrates all sections
│   ├── main.tsx              # React application entry point
│   ├── index.css             # Global styles, TailwindCSS directives, custom animations
│   ├── components/           # Reusable UI components
│   │   ├── Chrome.tsx        # Status bar, FAB, and bottom navigation Dock
│   │   ├── HireModal.tsx     # The contact form modal
│   │   ├── ParticleField.tsx # Background starfield animation
│   │   ├── Reveal.tsx        # Scroll-triggered reveal animations
│   │   └── icons.tsx         # SVG icons used throughout the application
│   ├── data/                 # Static data for the portfolio content
│   │   └── resume.ts         # Profile details, case studies, GitHub stats, contributions
│   ├── hooks/                # Custom React hooks for interactive functionality
│   │   ├── useInView.ts      # Intersection Observer wrapper for scroll reveals
│   │   ├── useLongPress.ts   # Custom hook for long-press gestures
│   │   ├── usePrefersReducedMotion.ts # Hook to respect OS animation preferences
│   │   ├── useTilt.ts        # 3D tilt effect on elements
│   │   └── useTypewriter.ts  # Typewriter text effect
│   ├── sections/             # Major content sections of the portfolio
│   │   ├── CaseStudies.tsx   # Displays project case studies
│   │   ├── GitHubStats.tsx   # Displays GitHub activity and language mix
│   │   ├── Hero.tsx          # The introductory hero section
│   │   ├── Hire.tsx          # Contact and hiring information section
│   │   ├── Intro.tsx         # Introduction and engineering principles
│   │   └── OpenSource.tsx    # Details open-source contributions
│   └── utils/
│       └── cn.ts             # Utility for conditionally joining CSS classes (clsx + tailwind-merge)
├── package.json              # Project dependencies and scripts
├── tsconfig.json             # TypeScript compiler configuration
├── vite.config.ts            # Vite build tool configuration
└── index.html                # Main HTML file for the application
```

## 🌐 Important Links

Here are some important links related to the author and the projects mentioned:

*   **Live Portfolio**: Likely hosted via GitHub Pages or a similar service. You can access the deployed version of this portfolio to see it in action.
*   **GitHub Profile**: [Dev-moe-kyawaung](https://github.com/Dev-moe-kyawaung)
*   **LinkedIn Profile**: [Moe Kyaw Aung](https://www.linkedin.com/in/moe-kyaw-aung-2653093a1)
*   **Email**: [moekyawaung.dev@gmail.com](mailto:moekyawaung.dev@gmail.com)
*   **MoekyawTranslator GitHub**: [https://github.com/Moekyawaung2026/MoekyawTranslator](https://github.com/Moekyawaung2026/MoekyawTranslator)
*   **PulseSync Android GitHub**: [https://github.com/Dev-moe-kyawaung/pulsesync-android](https://github.com/Dev-moe-kyawaung/pulsesync-android)
*   **Thailand ⇄ Myanmar Workers Hub GitHub**: [https://github.com/Moekyawaung2026/thailand-resources-myanmar-workers](https://github.com/Moekyawaung2026/thailand-resources-myanmar-workers)
*   **Dribbble**: [https://moekyawaung.dribbble.com](https://moekyawaung.dribbble.com)
*   **YouTube**: [https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG](https://www.youtube.com/channel/UCuTXUguZb4xjeL2nX8WJG)

## 🤝 Contributing

While this is a personal portfolio, contributions in the form of suggestions, bug reports, or feature requests are welcome! Please feel free to open an issue or submit a pull request.

1.  **Fork** the repository.
2.  **Create a new branch** (`git checkout -b feature/your-feature-name`).
3.  **Commit your changes** (`git commit -m 'feat: Add new feature'`).
4.  **Push to the branch** (`git push origin feature/your-feature-name`).
5.  **Open a Pull Request**.

## 📄 License

No specific license information was provided for this repository.

## ©️ Footer

&copy; {currentYear} [moekyawaung-developer-portfolio-54](https://github.com/Dev-moe-kyawaung/moekyawaung-developer-portfolio-54) by Moe Kyaw Aung ([moekyawaung.dev@gmail.com](mailto:moekyawaung.dev@gmail.com)). 

Feel free to ⭐ star, 🍴 fork, or 👀 watch this repository. Your support is appreciated!


---
**<p align="center">Generated by [ReadmeCodeGen](https://www.readmecodegen.com/)</p>**