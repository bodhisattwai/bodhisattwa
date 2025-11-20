/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bodhisattwa Malik's Portfolio",
  description:
    "MBA | Business Analytics & Data Science | Azure Certified (AZ-900 & DP-900) | AI & Workflow Automation professional specializing in analytics and data-driven insights.",
  og: {
    title: "Bodhisattwa Malik Portfolio",
    type: "website",
    url: "http://bodhisattwai.github.io/personal_portfolio/",
  },
};

//Home Page
const greeting = {
  title: "Bodhisattwa Malik",
  logo_name: "BodhisattwaMalik",
  nickname: "Bodhi",
  subTitle:
    "MBA | Business Analytics & Data Science | Azure Certified (AZ-900 & DP-900) | AI & Workflow Automation",
  description:
    "I am a data-focused professional specializing in analytics, combining hands-on skills in Python, SQL, and Tableau with a strong foundation in statistics and business logic. I excel at decoding complex data to uncover consumer behavior and business performance trends, translating insights into actionable strategies that drive smart decisions. My approach is defined by a disciplined mindset, clear thinking, and a results-oriented focus. Outside of work, I enjoy swimming and gardening to unwind and reconnect with nature.",
  resumeLink: "",
  portfolio_repository: "https://github.com/bodhisattwai/personal_portfolio",
  githubProfile: "https://github.com/bodhisattwai",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/bodhisattwai",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://linkedin.com/in/bodhimalik20",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:bodhi.jobmail@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

const skills = {
  data: [
    {
      title: "Business Analytics & Data Science",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Specializing in analytics, combining hands-on skills in Python, SQL, and Tableau with strong foundation in statistics and business logic",
        "⚡ Excel at decoding complex data to uncover consumer behavior and business performance trends",
        "⚡ Translating insights into actionable strategies that drive smart decisions with disciplined mindset and clear thinking",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#E97627",
          },
        },
        {
          skillName: "Statistics",
          fontAwesomeClassname: "fa-chart-bar",
          style: {
            color: "#FF6384",
          },
        },
        {
          skillName: "Machine Learning",
          fontAwesomeClassname: "fa-brain",
          style: {
            color: "#FF9F40",
          },
        },
        {
          skillName: "Business Intelligence",
          fontAwesomeClassname: "fa-chart-line",
          style: {
            color: "#1E88E5",
          },
        },
      ],
    },
    {
      title: "AI & Workflow Automation",
      fileName: "FullStackImg",
      skills: [
        "⚡ Developing Full-Stack AI applications with HTML/JS frontend and FastAPI backend",
        "⚡ Experience with fine-tuned AI models including Llama 3 for business applications",
        "⚡ Designing serverless AI pipelines using Hugging Face Endpoints and Netlify Serverless Functions",
      ],
      softwareSkills: [
        {
          skillName: "AI/ML",
          fontAwesomeClassname: "fa-robot",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "FastAPI",
          fontAwesomeClassname: "simple-icons:fastapi",
          style: {
            color: "#009688",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Workflow Automation",
          fontAwesomeClassname: "fa-cogs",
          style: {
            color: "#4CAF50",
          },
        },
      ],
    },
    {
      title: "Cloud & Technical Skills",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Microsoft Azure Certified (AZ-900 & DP-900) with experience in cloud computing",
        "⚡ Configuring and monitoring network devices with SNMP and performance dashboards",
        "⚡ Experience with Zabbix and PRTG for system monitoring and incident response",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Cloud Computing",
          fontAwesomeClassname: "fa-cloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Network Monitoring",
          fontAwesomeClassname: "fa-server",
          style: {
            color: "#34A853",
          },
        },
        {
          skillName: "Cybersecurity",
          fontAwesomeClassname: "fa-shield-alt",
          style: {
            color: "#FF5722",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Praxis Business School",
      subtitle: "Master of Business Administration (MBA)",
      logo_path: "custom_logos/praxis.png",
      alt_name: "Praxis Business School",
      duration: "Jul 2024 – Jul 2026",
      descriptions: [
        "⚡ Specializing in Business Analytics & Data Science",
        "⚡ Developing expertise in data-driven decision making and business strategy",
        "⚡ Focus on analytics, marketing insights, and business intelligence applications",
      ],
      website_link: "https://www.praxis.ac.in/",
    },
    {
      title: "Jalpaiguri Government Engineering College",
      subtitle: "Bachelor of Technology (BTech), Computer Science",
      logo_path: "custom_logos/jgec.png",
      alt_name: "JGEC",
      duration: "2020 – 2023",
      descriptions: [
        "⚡ Studied core computer science subjects including data structures, algorithms, databases, and software engineering",
        "⚡ Developed strong foundation in programming, systems analysis, and technical problem-solving",
        "⚡ Gained practical experience through internships and projects in network systems and data security",
      ],
      website_link: "https://www.jgec.ac.in/",
    },
    {
      title: "South Point High School, Kolkata",
      subtitle: "Secondary Education",
      logo_path: "custom_logos/sphs.png",
      alt_name: "South Point High School",
      duration: "Mar 2003 – May 2016",
      descriptions: [
        "⚡ Completed primary and secondary education with strong academic foundation",
        "⚡ Developed critical thinking and analytical skills from early education",
        "⚡ Participated in various extracurricular activities and academic competitions",
      ],
      website_link: "https://www.southpoint.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Career Essentials in Generative AI",
      subtitle: "- Microsoft & LinkedIn",
      logo_path: "custom_logos/microsoft+linkedin.jpg",
      certificate_link: "",
      alt_name: "Microsoft & LinkedIn",
      color_code: "#D83B0199",
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      subtitle: "- Microsoft",
      logo_path: "custom_logos/microsoft_logo.jpg",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Azure Fundamentals (AZ-900)",
      subtitle: "- Microsoft",
      logo_path: "custom_logos/microsoft_logo.jpg",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Data Fundamentals (DP-900)",
      subtitle: "- Microsoft",
      logo_path: "custom_logos/microsoft_logo.jpg",
      certificate_link: "",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    {
      title: "Machine Learning for Business",
      subtitle: "- DataCamp Certification",
      logo_path: "custom_logos/datacamp.png",
      certificate_link: "",
      alt_name: "DataCamp",
      color_code: "#1F70C199",
    },
    {
      title: "Ethics in the Age of Generative AI",
      subtitle: "- Professional Certification",
      logo_path: "custom_logos/microsoft_logo.jpg",
      certificate_link: "",
      alt_name: "AI Ethics",
      color_code: "#00000099",
    },
    {
      title: "Certified Star Mentee - Level 2",
      subtitle: "- India Skill Bridge Certification",
      logo_path: "custom_logos/indiaskillbridge.jpg",
      certificate_link: "",
      alt_name: "India Skill Bridge",
      color_code: "#FFBB0099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internships",
  description:
    "I have gained valuable experience through various internships, developing skills in AI, network engineering, and cybersecurity. These experiences have provided me with hands-on technical expertise and practical business understanding.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      experiences: [
        {
          title: "Management Intern",
          company: "Apeejay Surrendra Group",
          company_url: "https://www.apeejay.com/",
          logo_path: "custom_logos/apeejay.jpg",
          duration: "Apr 2025 – Jun 2025 (3 months)",
          location: "Kolkata, West Bengal, India",
          description:
            "Engineered a Full-Stack AI Insurance Advisor using HTML/JS, FastAPI, and a fine-tuned Llama 3 model. Reduced persona-classification errors by 20% through model optimization. Deployed serverless AI pipeline via Hugging Face Endpoints and Netlify Serverless Functions. Translated AI insights into sales strategies to improve targeting and policy conversions.",
          color: "#000000",
        },
        {
          title: "Network Intern",
          company: "Bokaro Steel Limited, SAIL",
          company_url: "https://sail.co.in/",
          logo_path: "custom_logos/sail.png",
          duration: "Jul 2022 – Aug 2022 (2 months)",
          location: "Bokaro, Jharkhand, India",
          description:
            "Configured SNMP traps across 50+ network devices, boosting voice network efficiency by 20%. Developed Zabbix and PRTG performance dashboards to reduce incident response time. Analyzed network logs and fault data to enhance system reliability and minimize downtime.",
          color: "#00549F",
        },
        {
          title: "Data Security Intern",
          company: "Haryana Police",
          company_url: "https://haryanapolice.gov.in/",
          logo_path: "custom_logos/haryana_police.png",
          duration: "Jun 2021 – Jul 2021 (2 months)",
          location: "India",
          description:
            "Analyzed and documented 100+ cybercrime cases with the GPCSSI Cybersecurity Division. Studied cybercrime investigations, GDPR compliance, and dark web threat analysis. Gained exposure to ethical hacking techniques (OSINT, network scanning, OWASP Top 10).",
          color: "#FF0000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects showcase expertise in AI, machine learning, and data analytics. I specialize in developing innovative solutions that combine cutting-edge technology with business intelligence to deliver actionable insights and automated systems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "sustainable-economic-growth-study",
      name:
        "An Empirical Study on U-shaped relationship between Sustainable Economic Growth and Human Capital Development",
      createdAt: "2025-03-03T00:00:00Z",
      description:
        "This study examines the World Bank's Human Capital Index and six-year GDP growth data across global economies, revealing a U-shaped relationship between human capital and growth. Advanced economies (0–3% growth): Human capital supports stability, not rapid expansion. Emerging economies (>5% growth): Human capital fuels productivity and growth. Transitional economies (3–5% growth): Growth often comes from resources or industry, not human capital. The takeaway: Human capital is a strategic lever, not a one-size-fits-all solution. Economic policies should match each country's development stage to unlock sustainable growth.",
      journal:
        "International Journal of All Research Education and Scientific Methods (IJARESM)",
      publishedDate: "March 3, 2025",
      url:
        "https://www.ijaresm.com/uploaded_files/document_file/Dr_Sayantani_Roy_Choudhury19uFe.pdf",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "custom_logos/ai_photo.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
    display: true, // Set to true to avoid JSX parsing errors
  },
  addressSection: {
    title: "Contact Information",
    subtitle: "Kolkata, West Bengal, India",
    locality: "Kolkata",
    country: "India",
    region: "West Bengal",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "",
  },
  phoneSection: {
    title: "Contact Details",
    subtitle: "Phone: 9748917666 | Email: bodhi.jobmail@gmail.com",
  },
};

// Contact Information for Contact Page
const contactInfo = {
  title: "Contact Me",
  subtitle: "Get in touch with me",
  number: "+91 9748917666",
  email_address: "bodhi.jobmail@gmail.com",
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  contactInfo,
};
