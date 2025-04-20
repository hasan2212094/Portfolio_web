import projects1 from "../assets/keuangan.png";
import projects2 from "../assets/absensi.png";
import projects3 from "../assets/antrian .png";
import projects4 from "../assets/e-commerce.png";
import projects5 from "../assets/android.png";
import projects6 from "../assets/android.jpeg";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Selamat datang di website Hasan..!! 🖐️",
  introduction:
    "Saya adalah seorang berpengalam di bidang IT Programming.",
  description:
    "Saya Sebagai.",
  resumeLinkText: "Download Resume",
  resumeLink: resume,
};

export const PROJECTS = [
  {
    name: "Web.Keuangaan",
    description: "Project ini menggunakan framework Laravel,filament dan menggunakan Database mysql",
    image: projects1,
    link: "https://github.com/hasan2212094/web.keuangaan-",
  },
  {
    name: "Web.Absensi",
    description: "Project ini menggunakan framework Laravel,React.js dan menggunakan Database mysql ",
    image: projects2,
    link: "https://github.com/hasan2212094/absensi-karyawan-git",
  },
  {
    name: "Web.Antrian",
    description: "Project ini menggunakan framework Laravel dan React.js",
    image: projects3,
    link: "https://github.com/hasan2212094/laravel-antrian",
  },
  {
    name: "Web.E-Commerce",
    description:
      "Project ini menggunakan framework laravel dan database mysql",
    image: projects4,
    link: "https://github.com/hasan2212094/laravel-9-ecommerce-main",
  },
  {
    name: "API",
    description: "Project ini menggunakan framework laravel dan database mysql",
    image: projects5,
    link: "https://github.com/hasan2212094/Laravel.androidPTSIS",
  },
  {
    name: "Android",
    description: "project ini menggunakan framework flutter",
    image: projects6,
    link: "https://github.com/viland22/sis_task_apps",
  },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "Saya berpengalaman dibidang IT Programmer, saya pernah mengikuti pelatihan di coding studio, saya berpengalaman membuat web e-commerce, web absensi menggunakan qr-scanner, membuat API untuk pembuataan Apps Android Perusahaan saat ini saya sedang mencari peluang baru mengembangkan keahlian profesional saya untuk masa depan yang lebih baik.",
    "Untuk frontend saya menggunakan React.js, Tailwind.css, flutter backend menggunakan framework laravel.php",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2024 — 2025",
    title: "Junior IT",
    location: "Bogor, Indonesia PT.Sribaru Indah Sejahtera",
    description: [
      "Bertanggug jawab untuk pembuataan dan perawatan Sistem Aplikasi.",
      "Bertanggung jawab pembuatan dan perawataan website.",
    ],
  },
 
];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
  },
  {
    name: "David Lee",
    title: "Senior Developer, Microsoft",
    feedback:
      "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
    image: person4,
  },
  {
    name: "Laura Martinez",
    title: "CTO, Shopify",
    feedback:
      "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
    image: person5,
  },
  {
    name: "Chris Brown",
    title: "Co-founder, Stripe",
    feedback:
      "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
    image: person6,
  },
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "panehasan094@gmail.com",
  socialLinks: [
    {
      platform: "Whatsapp",
      url: "https://api.whatsapp.com/send?phone=6285780072320",
      ariaLabel: "Hubungi saya",
      icon: "RiTwitterXFill",
    },
    {
      platform: "GitHub",
      url: "https://github.com/hasan2212094",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/hasan-pane-muhammad-9b999822b/",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Hasan Pane Muhammad. All rights reserved.`,
};
