# 🎨 Personal Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills as a full-stack web developer. It features a fully responsive multi-page design built with modern web technologies, including React.js, Next.js, Tailwind CSS, and Nodemailer.

Now with internationalization (i18n) support, the website is available in both English and Japanese, providing a localized experience for users. The language switcher allows seamless toggling between languages, ensuring accessibility for a global audience.

The website also includes extensive accessibility improvements, providing a better experience for all users.

## 🌐 Demo

[🚀 Live Demo](https://www.asakurayuta.dev/)

## ✨ Features

- 📱 **Responsive Design**: Fully responsive design for mobile, tablet, and desktop views.
Media Queries
1920x1080
1600x900
1440x900
1366x768
1280x780
1024x768
820x1180
768x1024
430 x 932
393x932
375x667
- ⚛️ **React.js & Next.js**: Components built for a dynamic user interface with optimized performance using Next.js, now featuring internationalization (i18n) for seamless language switching between English and Japanese.
- 🎡 **Slider Carousel**: A smooth, infinite carousel of skills and technologies using `react-slick` and custom configurations.
- ✉️ **Contact Form**: A contact form with real-time validation and submission using **Nodemailer**.
- 🔍 **SEO Optimized**:  Structured data (JSON-LD) for improved SEO, Meta tags for social sharing (Twitter, LinkedIn) and search engine visibility.
- 📜 **Drawer Menu**: A custom diagonal drawer menu built for easy navigation in smaller screen sizes.
- 🌐 **Social Links**: Social media icons with links to profiles on GitHub, LinkedIn, Instagram, and more.
- 🎨 **Smooth Transitions**: Smooth hover effects and animations for buttons, links, and elements throughout the site.
- 🔝 **Scroll to Top Button**: A button that appears when the user scrolls, allowing them to easily return to the top of the page.
- 🧑‍🦯 **Enhanced Accessibility**: Detailed ARIA attributes, semantic HTML, and keyboard navigation across components.

## 🛠️ Technologies Used

- ⚛️ [**React.js**](https://react.dev/): For building dynamic and interactive user interfaces with component-based architecture.
- ⚡ [**Next.js**](https://nextjs.org/): For server-side rendering, optimized routing, and internationalization (i18n) to support multiple languages.
- 💨 [**Tailwind CSS**](https://tailwindcss.com/): Utility-first CSS framework for creating responsive designs efficiently.
- 🚀 [**Vercel**](https://vercel.com/docs): Deployment platform offering seamless integration with Next.js and effortless deployment.
- 📧 [**Nodemailer**](https://nodemailer.com/about/): For handling contact form submissions and sending emails.
- 🛎️ [**React Toastify**](https://fkhadra.github.io/react-toastify/introduction): For handling in-app notifications, used for displaying success/error messages on form submissions.
- 🎡 [**React Slick**](https://react-slick.neostack.com/): A responsive carousel component to showcase projects and skills.
- ✍️ [**Google Fonts**](https://fonts.google.com/): Custom fonts (e.g., Hind) for clean and consistent typography.
- 🖼️ [**Next.js Image Optimization**](https://nextjs.org/docs/basic-features/image-optimization): Using the `Image` component for optimized image loading and responsive images.
- 🌍 [**next-intl**](https://next-intl-docs.vercel.app/): Library for internationalization (i18n) in Next.js, supporting multi-language content and a global audience.

## 📋 Key Components

### 🌍 Internationalization (i18n) Support

The website now supports multiple languages (English and Japanese) using next-intl.

	•	Language Switcher: Allows users to toggle between supported languages (English and Japanese).
	•	Dynamic Content: All hardcoded strings have been replaced with translation keys, including navigation, section titles, and labels.
	•	Translation Files: Language files (en.json, ja.json) manage translations and ensure easy scalability for future language support.


### 🔝 Call to Action (Scroll to Top)

The `CallToAction` component tracks the scroll position and displays a "scroll to top" button when the user has scrolled down the page. It uses React's `useEffect` and `useState` hooks to handle the scroll event.

### 👨‍💻 About Me Section

The `AboutMe` component provides a detailed background about my journey, including a transition from the construction industry to web development. It features flip card animations to display my technical skills. A clean, responsive layout with smooth transitions enhances the user experience.

### 🎡 Slider Component

A skills and technologies carousel, using `react-slick`, showcases my development expertise, including tools like HTML, CSS, JavaScript, React, Next.js, Ruby, and more. The slider is fully responsive and adapts to different screen sizes.

### ✉️ Contact Form

The contact form includes fields for name, email, phone number, and a message, with real-time validation. After submission, the form sends data to an API endpoint that uses **Nodemailer** to send emails directly. Success and error messages are displayed using **React Toastify**.

### 📜 Diagonal Drawer Menu

The diagonal drawer navigation system enhances mobile usability, providing users with a sleek and engaging way to navigate the website. It's designed to adapt to different screen sizes and provides smooth animations.

### 🔗 Footer

The footer includes social media links (Twitter, GitHub, LinkedIn, Instagram) and copyright information, styled with custom fonts and colors.

### 🧑‍🦯 Accessibility Enhancements

The site was optimized with extensive accessibility features:
	•	Semantic HTML Structure: All sections and components follow a clear, accessible layout with appropriate roles.
	•	ARIA Labels: Descriptive labels were added across buttons, links, and interactive elements to improve screen reader support.
	•	Keyboard Navigation: Enhanced keyboard accessibility with focusable elements and navigation cues.
	•	Slider and Carousel: Screen readers can interpret each item with added ARIA labels and roles.


### 🛠️ Deployment

To deploy on Vercel:

	1.	Push your project to a GitHub repository.
	2.	Visit Vercel, sign in, and import your repository.
	3.	Follow the deployment steps, and your project will be live in a few clicks!


## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### ⚙️ Prerequisites

- 🖥️ [Node.js](https://nodejs.org/) and npm installed

### 🚀 Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Navigate to the project directory:
   ```bash
   cd your-repo-name
   ```

3. Install NPM packages:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Or, if you prefer using other package managers:
   ```bash
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### 🛠️ Deployment

This project was deployed using Vercel, which provides seamless integration with Next.js for easy deployment.

To deploy on Vercel:

	1.	Push your project to a GitHub repository.
	2.	Visit Vercel, sign in, and import your repository.
	3.	Follow the deployment steps, and your project will be live in a few clicks!

Or Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on how to deploy your project.

🖥️ Created and Coded by Yuta Asakura © 2024

## 📞 Contact

Feel free to reach out via the contact form on the website or connect with me on [LinkedIn](www.linkedin.com/in/yuta-asakura) or Gmail yuta.asakura.se@gmail.com
