export const Bio = {
  name: "B Unenbat",
  roles: ["Full Stack Developer", "Programmer"],
  description:
    "I am a motivated and versatile full-stack developer, passionate about building high-quality web applications and solving complex problems. With a growth mindset and a dedication to continuous learning, I strive to deliver impactful results and create meaningful digital experiences.",
  github: "https://github.com/unenbat623",
  resume:
    "https://www.figma.com/file/ommgInCjaW15chlhXWsBvl/Untitled?type=design&node-id=0-1&mode=design&t=scA8eZviRh8fuWqt-0",
  linkedin: "https://www.linkedin.com/in/b-unenbat-7a4b7823b/",
  twitter: "https://twitter.com/Unenbat050604",
  insta: "https://www.instagram.com/unenbat_618/",
  facebook: "https://www.facebook.com/profile.php?id=100089448708671",
  mn: {
    name: "Б. Үнэнбат гэдэг",
    roles: ["Full Stack хөгжүүлэгч", "Программист"],
    description:
      "Би шинэ сорилтуудыг даван туулах хүсэл эрмэлзэлтэй, тууштай хөгжүүлэгч юм. Сурах хүсэл тэмүүлэл, өсөлтийн сэтгэлгээгээр дамжуулан би чанартай үр дүнг хүргэж, агуу зүйлсийг бүтээхийн төлөө хичээн ажиллаж байна.",
    github: "https://github.com/unenbat623",
    resume:
      "https://www.figma.com/file/ommgInCjaW15chlhXWsBvl/Untitled?type=design&node-id=0-1&mode=design&t=scA8eZviRh8fuWqt-0",
    linkedin: "https://www.linkedin.com/in/b-unenbat-7a4b7823b/",
    twitter: "https://twitter.com/Unenbat050604",
    insta: "https://www.instagram.com/unenbat_618/",
    facebook: "https://www.facebook.com/profile.php?id=100089448708671",
  },
};

export const navigation = {
  en: {
    about: "About",
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    github: "Github Profile",
  },
  mn: {
    about: "Тухай",
    skills: "Ур чадвар",
    experience: "Туршлага",
    projects: "Төслүүд",
    education: "Боловсрол",
    github: "Github Профайл",
  },
};

export const uiText = {
  en: {
    frontend: "Frontend",
    backend: "Backend",
    others: "Others",
    all: "ALL",
    webApps: "WEB APPS",
    machineLearning: "MACHINE LEARNING",
    viewWebApp: "Live Demo",
    viewGithub: "GitHub",
    unavailable: "Coming Soon",
    skills: "Skills",
  },
  mn: {
    frontend: "Фронтенд",
    backend: "Бэкенд",
    others: "Бусад",
    all: "БҮГД",
    webApps: "ВЭБ АПП",
    machineLearning: "МАШИН СУРГАЛТ",
    viewWebApp: "Вэб Апп Үзэх",
    viewGithub: "GitHub",
    unavailable: "Тун удахгүй",
    skills: "Ур чадвар",
  }
};

export const staticText = {
  en: {
    hero: {
      hi: "Hi, I am",
      iam: "I am a",
      checkResume: "Check Resume",
    },
    skills: {
      title: "Skills",
      desc: "Here are some of my skills on which I have been working on for the past 3 years.",
    },
    experience: {
      title: "Experience",
      desc: "My work experience as a software engineer and working on different companies and projects.",
    },
    projects: {
      title: "Projects",
      desc: "I have worked on a wide range of projects. From web apps to android apps. Here are some of my projects.",
    },
    education: {
      title: "Education",
      desc: "My education has been a journey of self-discovery and growth. My educational details are as follows.",
    },
    contact: {
      title: "Contact",
      desc: "Feel free to reach out to me for any questions or opportunities!",
      email: "Email",
      name: "Your Name",
      subject: "Subject",
      message: "Message",
      send: "Send",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
  mn: {
    hero: {
      hi: "Сайн байна уу, намайг",
      iam: "Би бол",
      checkResume: "CV Үзэх",
    },
    skills: {
      title: "Ур чадвар",
      desc: "Сүүлийн 3 жилийн хугацаанд миний сурч мэдсэн, ажилласан зарим ур чадварууд.",
    },
    experience: {
      title: "Туршлага",
      desc: "Програм хангамжийн инженерээр ажилласан болон янз бүрийн компани, төслүүдэд ажилласан туршлага.",
    },
    projects: {
      title: "Төслүүд",
      desc: "Би олон төрлийн төслүүд дээр ажилласан. Веб аппликейшнээс эхлээд Android аппликейшн хүртэл. Миний зарим төслүүд энд байна.",
    },
    education: {
      title: "Боловсрол",
      desc: "Миний боловсрол бол өөрийгөө нээх, өсч хөгжих аялал байлаа. Миний боловсролын дэлгэрэнгүй мэдээлэл.",
    },
    contact: {
      title: "Холбоо барих",
      desc: "Асуулт, боломжуудын талаар надтай чөлөөтэй холбогдоорой!",
      email: "Имэйл",
      name: "Таны нэр",
      subject: "Гарчиг",
      message: "Зурвас",
      send: "Илгээх",
    },
    footer: {
      rights: "Бүх эрх хуулиар хамгаалагдсан.",
    },
  },
};

const projectCover = (title, subtitle, accent = "#818cf8", icon = "code") => {
  const cleanTitle = String(title)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const cleanSubtitle = String(subtitle)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  const icons = {
    code: `<path d="M240 250 185 305l55 55M440 250l55 55-55 55M382 224l-84 164" fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>`,
    shop: `<path d="M174 244h310l-33 146H210l-36-146Zm37 0-28-70h-53M248 430h2M414 430h2" fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/><circle cx="249" cy="430" r="20" fill="#fff"/><circle cx="415" cy="430" r="20" fill="#fff"/>`,
    food: `<path d="M210 173v228M172 173v86c0 34 16 55 38 55s38-21 38-55v-86M382 175c-45 33-60 93-35 138 10 18 24 28 41 34v54" fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>`,
    doc: `<path d="M208 148h188l72 72v198H208V148Zm188 0v72h72M252 278h172M252 332h172M252 386h120" fill="none" stroke="#fff" stroke-width="20" stroke-linecap="round" stroke-linejoin="round"/>`,
    job: `<path d="M180 235h320v176H180V235Zm87 0v-44h146v44M180 294h320M315 309h50" fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>`,
    finance: `<path d="M190 382h300M225 334v-84M310 334V198M395 334V226M480 334V170M202 185l89 49 80-62 85 28" fill="none" stroke="#fff" stroke-width="22" stroke-linecap="round" stroke-linejoin="round"/>`,
  };
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 680 380"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stop-color="${accent}"/><stop offset="1" stop-color="#111827"/></linearGradient><filter id="s"><feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#000" flood-opacity=".28"/></filter></defs><rect width="680" height="380" rx="34" fill="url(#g)"/><circle cx="552" cy="90" r="118" fill="#fff" opacity=".12"/><circle cx="96" cy="318" r="150" fill="#fff" opacity=".08"/><g filter="url(#s)">${icons[icon] || icons.code}</g><text x="54" y="112" font-family="Inter, Arial, sans-serif" font-size="54" font-weight="850" fill="#fff">${cleanTitle}</text><text x="56" y="165" font-family="Inter, Arial, sans-serif" font-size="25" font-weight="650" fill="#e5e7eb">${cleanSubtitle}</text><rect x="54" y="210" width="185" height="12" rx="6" fill="#fff" opacity=".72"/><rect x="54" y="236" width="112" height="12" rx="6" fill="#fff" opacity=".42"/></svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
};

export const experiencesMn = [
  {
    id: 0,
    img: "/img/company-pinecone.png",
    role: "Full-stack хөгжүүлэгч",
    company: "Pinecone",
    date: "2023 оны 10 сар - 2024 оны 9 сар",
    desc: "Full-stack хөгжүүлэлтийн суурь, багаар ажиллах арга барил, responsive веб интерфэйс болон backend API хөгжүүлэлтийн дадлага хийсэн.",
    skills: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    id: 1,
    img: "/img/company-tixy.svg",
    role: "Full-stack хөгжүүлэгч",
    company: "Tixy Digital",
    date: "2024 оны 6 сар - 2024 оны 9 сар",
    desc: "Үйлчлүүлэгчийн веб төслүүд дээр frontend болон backend хөгжүүлэлт хийж, UI сайжруулалт, API интеграц, performance засварууд дээр ажилласан.",
    skills: [
      "React JS",
      "TypeScript",
      "Node JS",
      "GraphQL",
      "Tailwind CSS",
      "JavaScript",
      "AWS",
    ],
  },
  {
    id: 2,
    img: "/img/company-devandsoft.svg",
    role: "Full-stack хөгжүүлэгч",
    company: "Dev and Soft",
    date: "2025 оны 9 сар - 2025 оны 11 сар",
    desc: "Дотоод болон захиалгат веб аппликейшн дээр full-stack хөгжүүлэлт хийж, PostgreSQL өгөгдлийн сан, AWS deployment, AI туслах хэрэгслүүдтэй workflow ашигласан.",
    skills: [
      "React JS",
      "GraphQL",
      "Node JS",
      "Tailwind CSS",
      "JavaScript",
      "AWS",
      "PostgreSQL",
      "Antigravity"
    ],
  },
  {
    id: 3,
    img: "/img/company-tavanbogd-nura.svg",
    role: "Full-stack хөгжүүлэгч",
    company: "Tavan Bogd NURA",
    date: "2026 оны 5 сарын 1 - Одоо",
    desc: "Tavan Bogd NURA-д одоогоор full-stack хөгжүүлэгчээр ажиллаж, GitLab дээрх төслүүдийн хөгжүүлэлт, branch/merge request workflow, bug fix болон feature implementation дээр ажиллаж байна.",
    skills: [
      "React JS",
      "TypeScript",
      "Node JS",
      "GitLab",
      "Git",
      "Docker",
      "DBeaver",
      "Jira",
      "REST API",
      "PostgreSQL",
    ],
  },
];

export const educationMn = [
  {
    id: 0,
    img: "https://tse3.mm.bing.net/th?id=OIP.54Qil8lVkZ33ttRVl_i7XwAAAA&pid=Api&P=0&h=220",
    school: "Нийслэлийн ерөнхий боловсролын 1-р сургууль",
    date: "2011 оны 10 сар - 2023 оны 9 сар",
    grade: "93.2 ",
    desc: "Ерөнхий боловсролоо амжилттай төгсөж, мэдээллийн технологи болон програмчлалын чиглэлд сонирхлоо гүнзгийрүүлсэн.",
    degree: "Ахлах сургууль",
  },
  {
    id: 1,
    img: "/img/company-pinecone.png",
    school: "Pinecone Академи",
    date: "2023 оны 10 сар - 2024 оны 9 сар",
    grade: "гэрчилгээ",
    desc: "Full-stack веб хөгжүүлэлтийн сургалтаар React, Node.js, өгөгдлийн сан, багаар төсөл хэрэгжүүлэх дадлага эзэмшсэн.",
    degree: "Pinecone Academy Summer Leap",
  },
];

export const projectsMn = [
  {
    id: 0,
    title: "Djgeo.mn",
    date: "2024 оны 6 сар - 2024 оны 9 сар",
    description:
      "Геодези, зураглалын үйлчилгээний компанид зориулсан responsive веб сайт. Компанийн үйлчилгээ, төслийн мэдээлэл, холбоо барих урсгалыг хэрэглэгчдэд ойлгомжтой байдлаар хүргэсэн.",
    image: "/img/djgeo.png",
    tags: ["TypeScript", "GraphQL", "React"],
    category: "web app",
    webapp: "https://www.djgeo.mn/",
    github: "https://github.com/unenbat623/",
    member: [
      {
        name: "Б. Үнэнбат",
        img: "/img/unenbat.jpg",
        linkedin: "https://www.linkedin.com/in/b-unenbat-7a4b7823b/",
        github: "https://github.com/unenbat623/",
      },
    ],
  },
  {
    id: 1,
    title: "Central Cinema website",
    date: "2024 оны 4 сар - 2024 оны 6 сар",
    description:
      "Киноны жагсаалт, дэлгэрэнгүй мэдээлэл, цагийн хуваарь, хэрэглэгчийн нэвтрэлттэй Central Cinema хэрэглэгчийн веб апп.",
    image: "/img/cinema.png",
    tags: ["React Js", "TypeScript", "Node JS"],
    category: "web app",
    webapp: "https://cinema-app-client-front.vercel.app/",
    github: "https://github.com/unenbat623/teamBlog",
  },
  {
    id: 2,
    title: "Central Cinema Admin",
    date: "2024 оны 4 сар - 2024 оны 6 сар",
    description:
      "Кино, танхим, цагийн хуваарь болон админ үйлдлүүдийг удирдах dashboard веб апп. CRUD урсгал болон responsive админ UI-г багтаасан.",
    image: "/img/cinema_admin.png",
    tags: ["React Js", "TypeScript", "Node JS"],
    category: "web app",
    github: "https://github.com/unenbat623/Todo-Web-App",
    webapp: "https://cinema-app-client-front.vercel.app/",
  },
  {
    id: 3,
    title: "Blog Web App",
    date: "2023 оны 9 сар - 2023 оны 10 сар",
    description:
      "Нийтлэл үүсгэх, унших, ангилах боломжтой блог веб апп. React болон Node.js ашиглан frontend/backend урсгалыг хэрэгжүүлсэн.",
    image: "/img/blog.png",
    tags: ["React Js", "TypeScript", "Node JS"],
    category: "web app",
    webapp: "https://team-blog-ten.vercel.app/",
    github: "https://github.com/unenbat623/teamBlog",
  },
  {
    id: 4,
    title: "Автомашин түрээсийн вэб аппликейшн",
    date: "2025 оны 2 сар - 2025 оны 3 сар",
    description:
      "Хэрэглэгчид машин үзэх, ангиллаар шүүх, захиалга өгөх боломжтой орчин үеийн машин түрээсийн вэб програм. Энэ нь респонсив UI, шүүлтүүрийн систем болон цэвэр UX-ийг багтаасан болно.",
    image: "/img/car_rental.png",
    tags: ["Next Js", "TypeScript", "Tailwind CSS"],
    category: "web app",
    webapp: "https://car-rental-client-6khh.vercel.app/",
    github: "https://github.com/unenbat623/car-rental-client",
    member: [
      {
        name: "Б. Үнэнбат",
        img: "/img/unenbat.jpg",
        linkedin: "https://www.linkedin.com/in/b-unenbat-7a4b7823b/",
        github: "https://github.com/unenbat623/",
      },
    ],
  },
  {
    id: 5,
    title: "Zeel.mn",
    date: "2024 оны 10 сар - 2024 оны 12 сар",
    description: "Зээлийн мэдээлэл, төлөлтийн хуваарь болон хэрэглэгчийн удирдлагыг нэг дороос хянах боломжтой зээлийн удирдлагын систем.",
    image: "/zeel.jpg",
    tags: ["React Js", "TypeScript", "Node JS", "PostgreSQL"],
    category: "web app",
    webapp: "https://zeel.mn/",
  },
  {
    id: 6,
    title: "Taki App",
    date: "2024 оны 11 сар - Одоо",
    description: "Хөгжим болон энтертайнмент контентыг хэрэглэгчдэд хурдан, ойлгомжтой хүргэхэд чиглэсэн веб аппликейшн.",
    image: "/taki.jpeg",
    tags: ["React Js", "Tailwind CSS", "Framer Motion"],
    category: "web app",
  },
  {
    id: 7,
    title: "AI Chatbot",
    date: "2024 оны 12 сар - 2025 оны 1 сар",
    description:
      "ChatGPT маягийн conversational UI бүхий AI chatbot төсөл. Prompt илгээх, хариу харах, responsive chat layout болон хэрэглэгчдэд ойлгомжтой message history-г хэрэгжүүлсэн.",
    image: projectCover("AI Chatbot", "OpenAI conversational UI", "#10b981", "code"),
    tags: ["React Js", "Node JS", "OpenAI API"],
    category: "machine learning",
    github: "https://github.com/unenbat623/",
  },
  {
    id: 8,
    title: "PDF Generator",
    date: "2026 оны 8 сар",
    description: "Файл болон PDF үүсгэх backend service. Railway дээр deploy хийж, хэрэглэгчийн өгөгдлөөс document generate хийх workflow туршсан.",
    image: "/img/projects/pdf-generate.png",
    tags: ["JavaScript", "Node JS", "Railway"],
    category: "web app",
    github: "https://github.com/unenbat623/pdf-generate",
    webapp: "https://pdf-generate-production.up.railway.app",
  },
  {
    id: 9,
    title: "Zity Chef",
    date: "2026 оны 7 сар",
    description: "Chef/food төрлийн responsive веб апп. TypeScript ашиглан UI бүтэц, routing, deployment workflow дээр ажилласан.",
    image: "/img/projects/zity-chef.png",
    tags: ["TypeScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/zity-chef",
    webapp: "https://zity-chef.vercel.app",
  },
  {
    id: 10,
    title: "Zurhai.mn",
    date: "2026 оны 4 сар - 2026 оны 5 сар",
    description: "Монгол зурхайн өдөр тутмын мэдээлэл, сарны тоолол, уламжлалт зурхайн контентыг орчин үеийн веб UI-тай холбосон платформ.",
    image: projectCover("Zurhai.mn", "Монгол зурхайн апп", "#f59e0b", "code"),
    tags: ["TypeScript", "React Js", "UI/UX"],
    category: "web app",
    github: "https://github.com/unenbat623/zurhai.mn",
  },
  {
    id: 11,
    title: "Todo List",
    date: "2026 оны 5 сар",
    description: "Даалгавар нэмэх, засах, устгах, жагсаалтаа удирдах боломжтой TypeScript todo апп.",
    image: projectCover("Todo List", "Task manager", "#3b82f6", "code"),
    tags: ["TypeScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/todo_list",
    webapp: "https://todo-list-6d98.vercel.app",
  },
  {
    id: 12,
    title: "Demo LLC",
    date: "2026 оны 4 сар - 2026 оны 5 сар",
    description: "Компанийн танилцуулга болон бизнесийн мэдээллийг харуулах demo website төсөл.",
    image: projectCover("Demo LLC", "Компанийн веб сайт", "#64748b", "code"),
    tags: ["TypeScript", "React Js", "Responsive UI"],
    category: "web app",
    github: "https://github.com/unenbat623/demo-llc",
  },
  {
    id: 13,
    title: "Enola Shop",
    date: "2026 оны 4 сар",
    description: "Онлайн дэлгүүрийн бүтээгдэхүүн харах, shop layout, deployment workflow бүхий e-commerce веб апп.",
    image: projectCover("Enola Shop", "Онлайн дэлгүүр", "#f97316", "shop"),
    tags: ["TypeScript", "React Js", "Render"],
    category: "web app",
    github: "https://github.com/unenbat623/enola-shop",
    webapp: "https://enola-shop-1.onrender.com/",
  },
  {
    id: 14,
    title: "My Portfolio",
    date: "2024 оны 5 сар - 2026 оны 4 сар",
    description: "Өөрийн танилцуулга, туршлага, ур чадвар, төслүүдийг харуулах responsive portfolio website.",
    image: projectCover("My Portfolio", "Хувийн portfolio", "#818cf8", "code"),
    tags: ["JavaScript", "React Js", "Three.js"],
    category: "web app",
    github: "https://github.com/unenbat623/my-portfolio",
    webapp: "https://my-portfolio-delta-three-17.vercel.app",
  },
  {
    id: 15,
    title: "Little Lemon Web",
    date: "2026 оны 3 сар - 2026 оны 4 сар",
    description: "Ресторан/хоолны газрын landing болон booking төрлийн UI туршсан TypeScript веб төсөл.",
    image: "/img/projects/little-lemon-web.png",
    tags: ["TypeScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/little-lemon-web",
    webapp: "https://little-lemon-web-liart.vercel.app",
  },
  {
    id: 16,
    title: "Valentine",
    date: "2026 оны 2 сар",
    description: "Interactive Valentine theme-тэй веб experience. Animation, visual layout, responsive design дээр төвлөрсөн төсөл.",
    image: projectCover("Valentine", "Interactive web experience", "#ec4899", "code"),
    tags: ["TypeScript", "React Js", "Animation"],
    category: "web app",
    github: "https://github.com/unenbat623/Valentine-",
    webapp: "https://valentine-liart-ten.vercel.app",
  },
  {
    id: 17,
    title: "JobPortal.mn",
    date: "2025 оны 11 сар - 2025 оны 12 сар",
    description: "Ажил хайгч, ажил олгогч, админы урсгалтай Монгол job portal. CV үүсгэх, ажлын зар нийтлэх, өргөдөл шалгах ATS workflow багтаасан.",
    image: "/img/projects/jobportal.png",
    tags: ["TypeScript", "React Js", "ATS"],
    category: "web app",
    github: "https://github.com/unenbat623/JobPortal.mn",
    webapp: "https://job-portal-mn.vercel.app",
  },
  {
    id: 18,
    title: "Food Delivery",
    date: "2024 оны 1 сар - 2025 оны 12 сар",
    description: "Хоол захиалга, бүтээгдэхүүний жагсаалт, хэрэглэгчийн захиалгын урсгал бүхий food delivery веб апп.",
    image: projectCover("Food Delivery", "Хоол захиалгын апп", "#ef4444", "food"),
    tags: ["TypeScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/food_delivery",
    webapp: "https://food-delivery-gold.vercel.app",
  },
  {
    id: 19,
    title: "E-commerce",
    date: "2024 оны 9 сар",
    description: "Бүтээгдэхүүний жагсаалт, shop UI, TypeScript бүтэцтэй e-commerce дадлагын төсөл.",
    image: projectCover("E-commerce", "Онлайн дэлгүүрийн UI", "#f97316", "shop"),
    tags: ["TypeScript", "React Js", "E-commerce"],
    category: "web app",
    github: "https://github.com/unenbat623/e-commerce",
  },
  {
    id: 20,
    title: "Team Blog",
    date: "2023 оны 12 сар - 2024 оны 5 сар",
    description: "Багаар хийсэн блог веб апп. Нийтлэл унших, жагсаах, frontend deployment хийх дадлага багтаасан.",
    image: projectCover("Team Blog", "Багаар хийсэн блог", "#06b6d4", "code"),
    tags: ["JavaScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/teamBlog",
    webapp: "https://team-blog-nine.vercel.app",
  },
  {
    id: 21,
    title: "Todo",
    date: "2024 оны 1 сар",
    description: "React болон TypeScript ашиглан state management, CRUD үйлдэл, component бүтэц дадлага хийсэн todo апп.",
    image: projectCover("Todo", "CRUD task app", "#3b82f6", "code"),
    tags: ["TypeScript", "React Js", "CRUD"],
    category: "web app",
    github: "https://github.com/unenbat623/todo",
    webapp: "https://todo-pearl-chi.vercel.app",
  },
  {
    id: 22,
    title: "Vue App",
    date: "2024 оны 4 сар",
    description: "Vue framework-ийн component, template, basic app structure сурч туршсан жижиг төсөл.",
    image: projectCover("Vue App", "Vue frontend practice", "#42b883", "code"),
    tags: ["Vue", "JavaScript", "Frontend"],
    category: "web app",
    github: "https://github.com/unenbat623/vue-app",
  },
  {
    id: 23,
    title: "Shopping Project",
    date: "2023 оны 11 сар",
    description: "Анхны shopping/e-commerce санааг GitHub дээр эхлүүлсэн дадлагын repo.",
    image: projectCover("Shopping", "E-commerce practice", "#f97316", "shop"),
    tags: ["GitHub", "E-commerce", "Practice"],
    category: "web app",
    github: "https://github.com/unenbat623/shopping.project",
  },
  {
    id: 24,
    title: "Geld Project",
    date: "2023 оны 11 сар - 2024 оны 1 сар",
    description: "Орлого, зарлага, санхүүгийн бүртгэл хянах money tracker төрлийн веб апп.",
    image: projectCover("Geld Project", "Finance tracker", "#22c55e", "finance"),
    tags: ["JavaScript", "React Js", "Finance"],
    category: "web app",
    github: "https://github.com/unenbat623/Geld.project",
    webapp: "https://geld-project.vercel.app",
  },
  {
    id: 25,
    title: "Next.js Lesson",
    date: "2023 оны 9 сар - 2024 оны 1 сар",
    description: "Next.js framework-ийн routing, page structure, deployment workflow сурсан дадлагын төсөл.",
    image: projectCover("Next.js Lesson", "Routing and deployment", "#111827", "code"),
    tags: ["Next Js", "JavaScript", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/lessson_next_js",
    webapp: "https://lessson-next-js.vercel.app",
  }
];

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React Js",
        image:
          "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      },
      {
        name: "Next Js",
        image:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACTklEQVR4Ab1XAaQqURB9DyohSykREpRIQSAlBCoECKUFCSRCBBEAaSEABQEoCIEASCwAUICALgCo83do0//9v819XX845O7VnDkzOzP7JWGaBd3C3IJpQVjAHeJ+Rs9a97vKLGrBsB1KgMhEP3FMUUwt4ENMfxr1yQIU4SSjRkbeOZtERmHk6pXQVDlnkHh9S+QLTm1hkiz4n/gzFQuny9FoFLquE+i34x+n02k0m00UCoV3BIzn3MMJrVYLtp1OJ0cS/X4f5/MZhmG8IyDsWtDfEaDIn2232/3zbrvdxuFwwGg04qRBt+VnETBNE0IIkE2n07/erdfrWK/X6Ha73Hb9ZXII3G43ivy3dNRqtZe7lUoFs9mM6oBDwCQCgquALT1FT3a5XF7qIZ/PYzgcolqtcggIIgBZAgRKB6lCRalp2uM8k8mAVMrlchwC+DEBipycE4n5fP44j8ViKJVKSCaTbAJCpgaez4vFIsjoWa/XA50FAgEkEgmEw2F2CkxZBZ5Br5tt1ITcbjd8Ph88Hg+7CBefECCsVitS4aVJcV9D/VMCVITk/Hq9YrPZyBBo2a1YMGvAcQYcj0cCtWMugcdYNhjDiBrP25mx3++x3W6RzWZZ8isfxzQLlsslJpMJpYY5jhkqcOH1ejEYDDAej9FoNOByuZxGsfqVzC7KTqcDSkkqleKsZOqX0mAwiHK5DGrJfr+fs5SqX8sjkQji8ThCoRC+v78Za7l6JagrUh3YkUuZpqgwDaecc9VYSDoV5Fg+at7n+eLN57kuE/EvzHr/Kvs31aYAAAAASUVORK5CYII=",
      },
      {
        name: "Vue Js",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg",
      },
      {
        name: "HTML",
        image: "https://www.w3.org/html/logo/badge/html5-badge-h-solo.png",
      },
      {
        name: "CSS",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
      },
      {
        name: "JavaScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
      },
      {
        name: "TypeScript",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png",
      },
      {
        name: "Python",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Tailwindcss",
        image:
          "https://logowik.com/content/uploads/images/tailwind-css3232.logowik.com.webp",
      },
      {
        name: "Material UI",
        image: "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
      },
      {
        name: "Three.js",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Three.js_Icon.svg",
      },
      {
        name: "Framer Motion",
        image: "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
      },
      {
        name: "Vite",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Node Js",
        image: "https://nodejs.org/static/images/logo.svg",
      },
      {
        name: "Express Js",
        image: "https://cdn.worldvectorlogo.com/logos/expressjs.svg"
      },
      {
        name: "Graph Ql",
        image: "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
      },
      {
        name: "REST API",
        image: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png",
      },
      {
        name: "MySQL",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
      },
      {
        name: "PostgreSQL",
        image: "https://www.postgresql.org/media/img/about/press/elephant.png",
      },
      {
        name: "MongoDB",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      },
      {
        name: "Prisma",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
      },
      {
        name: "C++",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg",
      },
      {
        name: "Docker",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "AWS",
        image: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      },
      {
        name: "PDF Generation",
        image: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
      },
      {
        name: "Authentication",
        image: "https://cdn-icons-png.flaticon.com/512/3064/3064155.png",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "Git",
        image: "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
      },
      {
        name: "GitLab",
        image: "https://about.gitlab.com/images/press/logo/png/gitlab-icon-rgb.png",
      },
      {
        name: "Jira",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      },
      {
        name: "Vercel",
        image: "https://assets.vercel.com/image/upload/front/favicon/vercel/180x180.png",
      },
      {
        name: "Railway",
        image: "https://railway.com/brand/logotype-light.png",
      },
      {
        name: "Render",
        image: "https://render.com/icon.svg",
      },
      {
        name: "DBeaver",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dbeaver/dbeaver-original.svg",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "VS Code Extensions",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "ESLint",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg",
      },
      {
        name: "Prettier",
        image: "https://prettier.io/icon.png",
      },
      {
        name: "npm",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg",
      },
      {
        name: "Chrome DevTools",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chrome/chrome-original.svg",
      },
      {
        name: "Postman",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFcYJoetYqKxgVtDoFHN08qIF811Aglug-sw&s",
      },
      {
        name: "Swagger",
        image: "https://static1.smartbear.co/swagger/media/assets/swagger_fav.png",
      },
      {
        name: "Figma",
        image:
          "https://s3-alpha.figma.com/hub/file/1481185752/fa4cd070-6a79-4e1b-b079-8b9b76408595-cover.png",
      },
      {
        name: "Antigravity",
        image: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg",
      },
      {
        name: "Cursor AI",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQbz3c2-DSKpInXJjhhenXinyn_9fZO9Dug&s",
      },
      {
        name: "Lovable AI",
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQG6Pv34cWmbZw/company-logo_200_200/B4EZfRRwffHIAM-/0/1751562783258/lovable_dev_logo?e=2147483647&v=beta&t=scjR7-oS-zt-QzwSTjLYJFVT_3D9TojrclHJMdTN2gU",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: "/img/company-pinecone.png",
    role: "Full-stack developer",
    company: "Pinecone",
    date: "Oct 2023 - Sep 2024",
    desc: "Built a strong full-stack foundation through hands-on projects, team workflows, responsive interfaces, and backend API development.",
    skills: [
      "React JS",
      "Node JS",
      "Express JS",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
    ],
  },
  {
    id: 1,
    img: "/img/company-tixy.svg",
    role: "Full-stack developer",
    company: "Tixy Digital",
    date: "Jun 2024 - Sep 2024",
    desc: "Worked on client web projects across frontend and backend development, including UI improvements, API integrations, and performance fixes.",
    skills: [
      "React JS",
      "TypeScript",
      "Node JS",
      "GraphQL",
      "Tailwind CSS",
      "JavaScript",
      "AWS",
    ],
  },
  {
    id: 2,
    img: "/img/company-devandsoft.svg",
    role: "Full-stack developer",
    company: "Dev and Soft",
    date: "Sep 2025 - Nov 2025",
    desc: "Developed internal and client-facing web applications with PostgreSQL, AWS deployment workflows, and AI-assisted development tools.",
    skills: [
      "React JS",
      "GraphQL",
      "Node JS",
      "Tailwind CSS",
      "JavaScript",
      "AWS",
      "PostgreSQL",
      "Antigravity",
    ],
  },
  {
    id: 3,
    img: "/img/company-tavanbogd-nura.svg",
    role: "Full-stack developer",
    company: "Tavan Bogd NURA",
    date: "May 1, 2026 - Present",
    desc: "Currently working as a full-stack developer at Tavan Bogd NURA, contributing to GitLab-based projects through branch and merge request workflows, bug fixes, and feature implementation.",
    skills: [
      "React JS",
      "TypeScript",
      "Node JS",
      "GitLab",
      "Git",
      "Docker",
      "DBeaver",
      "Jira",
      "REST API",
      "PostgreSQL",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: "https://tse3.mm.bing.net/th?id=OIP.54Qil8lVkZ33ttRVl_i7XwAAAA&pid=Api&P=0&h=220",
    school: "The 1st school of general education of the capital",
    date: "Oct 2011 - Sep 2023",
    grade: "93.2 ",
    desc: "Completed secondary education while building an early interest in information technology and programming.",
    degree: "High school",
  },
  {
    id: 1,
    img: "https://yt3.googleusercontent.com/eQSLrYh7Bh0VbjIsh4T9auqgBgIIqtrtMcTpw7TEmCA0yb-PKg7YTsnLrYYsEmYgnJ-MOKzSqw=s176-c-k-c0x00ffffff-no-rj",
    school: "Pinecone Academy",
    date: "Oct 2023 - Sep 2024",
    grade: "Certificate",
    desc: "Studied full-stack web development with practical experience in React, Node.js, databases, and team-based product projects.",
    degree: "Pinecone Academy Summer Leap",
  },
];

// ── English projects — all images use local /img/ paths ──
export const projects = [
  {
    id: 5,
    title: "Car Rental Web App",
    date: "Feb 2025 - Mar 2025",
    description:
      "A modern car rental web application where users can browse cars, filter by categories, and make bookings. It includes responsive UI, filtering system, and clean UX.",
    image: "/img/car_rental.png",
    tags: ["Next Js", "TypeScript", "Tailwind CSS"],
    category: "web app",
    github: "https://github.com/unenbat623/car-rental-client",
    webapp: "https://car-rental-client-6khh.vercel.app/",
    member: [
      {
        name: "B.unenbat",
        img: "/img/unenbat.jpg",
        linkedin: "https://www.linkedin.com/in/b-unenbat-7a4b7823b/",
        github: "https://github.com/unenbat623/",
      },
    ],
  },
  {
    id: 0,
    title: "Djgeo.mn",
    date: "Jun 2024 - Sep 2024",
    description:
      "A responsive website for a geodesy and mapping services company, presenting services, project information, and contact flows clearly for customers.",
    image: "/img/djgeo.png",
    tags: ["TypeScript", "GraphQL", "React"],
    category: "web app",
    github: "https://github.com/unenbat623/",
    webapp: "https://www.djgeo.mn/",
    member: [
      {
        name: "B.unenbat",
        img: "/img/unenbat.jpg",
        linkedin: "https://www.linkedin.com/in/b-unenbat-7a4b7823b/",
        github: "https://github.com/unenbat623/",
      },
    ],
  },
  {
    id: 1,
    title: "Central Cinema website",
    date: "Apr 2024 - Jun 2024",
    description:
      "A customer-facing Central Cinema web app with movie listings, detail pages, schedules, and login-ready user flows.",
    image: "/img/cinema.png",
    tags: ["React Js", "TypeScript", "Node JS"],
    category: "web app",
    github: "https://github.com/unenbat623/Todo-Web-App",
    webapp: "https://cinema-app-client-front.vercel.app/",
  },
  {
    id: 2,
    title: "Central Cinema Admin",
    date: "Apr 2024 - Jun 2024",
    description:
      "An admin dashboard for managing movies, halls, schedules, and operational content with CRUD flows and a responsive admin UI.",
    image: "/img/cinema_admin.png",
    tags: ["React Js", "TypeScript", "Node JS"],
    category: "web app",
    github: "https://github.com/unenbat623/Todo-Web-App",
    webapp: "https://cinema-app-client-front.vercel.app/",
  },
  {
    id: 3,
    title: "Blog Web App",
    date: "Sep 2023 - Oct 2023",
    description:
      "A blog web app for creating, browsing, and organizing posts, built with a React frontend and Node.js backend flow.",
    image: "/img/blog.png",
    tags: ["React Js", "TypeScript", "Node JS"],
    category: "web app",
    github: "https://github.com/unenbat623/teamBlog",
    webapp: "https://team-blog-ten.vercel.app/",
  },
  {
    id: 6,
    title: "Zeel.mn",
    date: "Oct 2024 - Dec 2024",
    description: "A loan management system for tracking loan information, repayment schedules, and customer workflows in one place.",
    image: "/zeel.jpg",
    tags: ["React Js", "TypeScript", "Node JS", "PostgreSQL"],
    category: "web app",
    webapp: "https://zeel.mn/",
  },
  {
    id: 7,
    title: "Taki App",
    date: "Nov 2024 - Present",
    description: "A music and entertainment web application focused on fast content browsing and smooth user interaction.",
    image: "/taki.jpeg",
    tags: ["React Js", "Tailwind CSS", "Framer Motion"],
    category: "web app",
  },
  {
    id: 8,
    title: "AI Chatbot",
    date: "Dec 2024 - Jan 2025",
    description:
      "An AI chatbot project with a ChatGPT-style conversational interface, prompt submission, response display, responsive chat layout, and message history.",
    image: projectCover("AI Chatbot", "OpenAI conversational UI", "#10b981", "code"),
    tags: ["React Js", "Node JS", "OpenAI API"],
    category: "machine learning",
    github: "https://github.com/unenbat623/",
  },
  {
    id: 9,
    title: "PDF Generator",
    date: "Aug 2026",
    description: "A file and PDF generation backend service deployed on Railway, focused on generating documents from user data.",
    image: "/img/projects/pdf-generate.png",
    tags: ["JavaScript", "Node JS", "Railway"],
    category: "web app",
    github: "https://github.com/unenbat623/pdf-generate",
    webapp: "https://pdf-generate-production.up.railway.app",
  },
  {
    id: 10,
    title: "Zity Chef",
    date: "Jul 2026",
    description: "A chef and food-themed responsive web app built with TypeScript, focusing on UI structure, routing, and deployment workflow.",
    image: "/img/projects/zity-chef.png",
    tags: ["TypeScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/zity-chef",
    webapp: "https://zity-chef.vercel.app",
  },
  {
    id: 11,
    title: "Zurhai.mn",
    date: "Apr 2026 - May 2026",
    description: "A Mongolian astrology platform that combines daily horoscope content, lunar calendar information, and traditional zodiac features with a modern web UI.",
    image: projectCover("Zurhai.mn", "Mongolian astrology app", "#f59e0b", "code"),
    tags: ["TypeScript", "React Js", "UI/UX"],
    category: "web app",
    github: "https://github.com/unenbat623/zurhai.mn",
  },
  {
    id: 12,
    title: "Todo List",
    date: "May 2026",
    description: "A TypeScript todo application for creating, editing, deleting, and organizing tasks.",
    image: projectCover("Todo List", "Task manager", "#3b82f6", "code"),
    tags: ["TypeScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/todo_list",
    webapp: "https://todo-list-6d98.vercel.app",
  },
  {
    id: 13,
    title: "Demo LLC",
    date: "Apr 2026 - May 2026",
    description: "A demo company website for presenting business information, service sections, and responsive marketing pages.",
    image: projectCover("Demo LLC", "Company website", "#64748b", "code"),
    tags: ["TypeScript", "React Js", "Responsive UI"],
    category: "web app",
    github: "https://github.com/unenbat623/demo-llc",
  },
  {
    id: 14,
    title: "Enola Shop",
    date: "Apr 2026",
    description: "An e-commerce web app with product browsing, shop layouts, and deployment workflow practice.",
    image: projectCover("Enola Shop", "E-commerce storefront", "#f97316", "shop"),
    tags: ["TypeScript", "React Js", "Render"],
    category: "web app",
    github: "https://github.com/unenbat623/enola-shop",
    webapp: "https://enola-shop-1.onrender.com/",
  },
  {
    id: 15,
    title: "My Portfolio",
    date: "May 2024 - Apr 2026",
    description: "A responsive personal portfolio website for presenting my profile, experience, skills, and projects.",
    image: projectCover("My Portfolio", "Personal portfolio", "#818cf8", "code"),
    tags: ["JavaScript", "React Js", "Three.js"],
    category: "web app",
    github: "https://github.com/unenbat623/my-portfolio",
    webapp: "https://my-portfolio-delta-three-17.vercel.app",
  },
  {
    id: 16,
    title: "Little Lemon Web",
    date: "Mar 2026 - Apr 2026",
    description: "A restaurant web project exploring landing page design, food presentation, and booking-style UI patterns.",
    image: "/img/projects/little-lemon-web.png",
    tags: ["TypeScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/little-lemon-web",
    webapp: "https://little-lemon-web-liart.vercel.app",
  },
  {
    id: 17,
    title: "Valentine",
    date: "Feb 2026",
    description: "An interactive Valentine-themed web experience focused on animation, visual layout, and responsive design.",
    image: projectCover("Valentine", "Interactive web experience", "#ec4899", "code"),
    tags: ["TypeScript", "React Js", "Animation"],
    category: "web app",
    github: "https://github.com/unenbat623/Valentine-",
    webapp: "https://valentine-liart-ten.vercel.app",
  },
  {
    id: 18,
    title: "JobPortal.mn",
    date: "Nov 2025 - Dec 2025",
    description: "A Mongolian job portal with job seeker, employer, and admin flows, including CV creation, job posting, applications, and ATS-style review workflows.",
    image: "/img/projects/jobportal.png",
    tags: ["TypeScript", "React Js", "ATS"],
    category: "web app",
    github: "https://github.com/unenbat623/JobPortal.mn",
    webapp: "https://job-portal-mn.vercel.app",
  },
  {
    id: 19,
    title: "Food Delivery",
    date: "Jan 2024 - Dec 2025",
    description: "A food delivery web app with product browsing, ordering flows, and responsive customer-facing screens.",
    image: projectCover("Food Delivery", "Food ordering app", "#ef4444", "food"),
    tags: ["TypeScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/food_delivery",
    webapp: "https://food-delivery-gold.vercel.app",
  },
  {
    id: 20,
    title: "E-commerce",
    date: "Sep 2024",
    description: "An e-commerce practice project with product listing UI, shop structure, and TypeScript-based frontend organization.",
    image: projectCover("E-commerce", "Online store UI", "#f97316", "shop"),
    tags: ["TypeScript", "React Js", "E-commerce"],
    category: "web app",
    github: "https://github.com/unenbat623/e-commerce",
  },
  {
    id: 21,
    title: "Team Blog",
    date: "Dec 2023 - May 2024",
    description: "A team-built blog web app for browsing posts, practicing frontend collaboration, and deploying a shared project.",
    image: projectCover("Team Blog", "Collaborative blog app", "#06b6d4", "code"),
    tags: ["JavaScript", "React Js", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/teamBlog",
    webapp: "https://team-blog-nine.vercel.app",
  },
  {
    id: 22,
    title: "Todo",
    date: "Jan 2024",
    description: "A small React and TypeScript todo app for practicing state management, CRUD actions, and component structure.",
    image: projectCover("Todo", "CRUD task app", "#3b82f6", "code"),
    tags: ["TypeScript", "React Js", "CRUD"],
    category: "web app",
    github: "https://github.com/unenbat623/todo",
    webapp: "https://todo-pearl-chi.vercel.app",
  },
  {
    id: 23,
    title: "Vue App",
    date: "Apr 2024",
    description: "A small Vue project for learning component structure, templates, and basic frontend app setup.",
    image: projectCover("Vue App", "Vue frontend practice", "#42b883", "code"),
    tags: ["Vue", "JavaScript", "Frontend"],
    category: "web app",
    github: "https://github.com/unenbat623/vue-app",
  },
  {
    id: 24,
    title: "Shopping Project",
    date: "Nov 2023",
    description: "An early shopping and e-commerce practice repository started while learning project setup and GitHub workflows.",
    image: projectCover("Shopping", "E-commerce practice", "#f97316", "shop"),
    tags: ["GitHub", "E-commerce", "Practice"],
    category: "web app",
    github: "https://github.com/unenbat623/shopping.project",
  },
  {
    id: 25,
    title: "Geld Project",
    date: "Nov 2023 - Jan 2024",
    description: "A finance tracker style web app for practicing income, expense, and money management UI flows.",
    image: projectCover("Geld Project", "Finance tracker", "#22c55e", "finance"),
    tags: ["JavaScript", "React Js", "Finance"],
    category: "web app",
    github: "https://github.com/unenbat623/Geld.project",
    webapp: "https://geld-project.vercel.app",
  },
  {
    id: 26,
    title: "Next.js Lesson",
    date: "Sep 2023 - Jan 2024",
    description: "A Next.js learning project for practicing routing, page structure, and Vercel deployment.",
    image: projectCover("Next.js Lesson", "Routing and deployment", "#111827", "code"),
    tags: ["Next Js", "JavaScript", "Vercel"],
    category: "web app",
    github: "https://github.com/unenbat623/lessson_next_js",
    webapp: "https://lessson-next-js.vercel.app",
  }
];
