# 🎨 Personal Portfolio Website

Welcome to my personal portfolio website! This project showcases my skills as a full-stack web developer. It features a fully responsive multi-page design built with modern web technologies, including React.js, Next.js, Tailwind CSS, and Nodemailer.

Now with internationalization (i18n) support, the website is available in both English and Japanese, providing a localized experience for users. The language switcher allows seamless toggling between languages, ensuring accessibility for a global audience.

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
- 🔍 **SEO Optimized**: Meta tags for social sharing (Twitter, LinkedIn) and search engine visibility.
- 📜 **Drawer Menu**: A custom diagonal drawer menu built for easy navigation in smaller screen sizes.
- 🌐 **Social Links**: Social media icons with links to profiles on GitHub, LinkedIn, Instagram, and more.
- 🎨 **Smooth Transitions**: Smooth hover effects and animations for buttons, links, and elements throughout the site.
- 🔝 **Scroll to Top Button**: A button that appears when the user scrolls, allowing them to easily return to the top of the page.

## 🛠️ Technologies Used

- ⚛️ **React.js**: For building the user interface.
- ⚡ **Next.js**: For server-side rendering and routing and internationalization (i18n) to support multiple languages.
- 💨 **Tailwind CSS**: For utility-first styling and responsive design.
- 🚀 **Vercel**: For seamless integration with Next.js and for easy deployment.
- 📧 **Nodemailer**: For handling contact form submissions.
- 🛎️ **React Toastify**: For CTA button that scrolls up to the top portion of home page by clicking.
- 🎡 **React Slick**: For a dynamic, responsive slider component and inifinite slider.
- ✍️ **Google Fonts**: Custom fonts including Hind for a clean and consistent typography.
- 🖼️ **Image Optimization**: Next.js `Image` component for optimized image loading.

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

🛠️ Deployment

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
