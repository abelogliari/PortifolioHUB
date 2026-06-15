/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Abel Ogliari",
  title: "Olá, eu sou o Abel",
  subTitle: emoji(
    "Secretário Executivo Bilíngue e Analista de Desenvolvimento de Sistemas atuando com dados em economia da saúde e estudante no Centro Universitário de Brasília - CEUB. Desenvolvo soluções em Python, automações e sites web, com foco em dados, eficiência e experiência do usuário. Em busca de evoluir como desenvolvedor."
  ),
  // Link do currículo (PDF). Arquivo em public/resume.pdf (servido em /resume.pdf).
  resumeLink: "/resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abelogliari",
  linkedin: "https://www.linkedin.com/in/abel-carlesso-ogliari/",
  gmail: "abelogliari@gmail.com",
  // gitlab: "",
  // facebook: "",
  // medium: "",
  // stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "O que eu faço",
  subTitle:
    "DESENVOLVO SOLUÇÕES COM FOCO EM DADOS, AUTOMAÇÃO E EXPERIÊNCIA DO USUÁRIO",
  skills: [
    emoji(
      "⚡ Desenvolvimento de aplicações e automações em Python (ex.: o Extrator CATMAT, que consome a API do Compras.gov.br)"
    ),
    emoji(
      "⚡ Tratamento, integração e análise de dados com APIs, SQL Developer, PostgreSQL e similares"
    ),
    emoji(
      "⚡ Construção de páginas web e mobile interativas para a sua aplicação com HTML5, CSS3 e JavaScript"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "SQL - Bancos de Dados",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Centro Universitário de Brasília (CEUB)",
      subHeader: "Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
      duration: "2025 — 2027",
      desc: ""
    },
    {
      schoolName: "UniFatecie",
      subHeader: "Superior de Tecnologia em Secretariado",
      duration: "2024 — 2026",
      desc: ""
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Dados (APIs / SQL )",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend (HTML / CSS / JS)",
      progressPercentage: "70%"
    },
    {
      Stack: "Assessoria Executiva",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Ministério da Saúde",
      company: "Economia da Saúde",
      companylogo: require("./assets/images/cgesLogo.png"),
      date: "2023 — Atual",
      desc: "Apoio técnico em pesquisa e gestão de dados em economia da saúde (SIOPS, ApuraSUS, Banco de Preços em Saúde).",
      descBullets: [
        "Software em Python para extração de dados públicos (API Compras.gov.br)"
      ]
    },
    {
      role: "Ministério da Saúde",
      company: "Coordenação HIV/Aids",
      companylogo: require("./assets/images/msLogo.png"),
      date: "2022",
      desc: "Coleta e organização de dados de processos e apoio à gestão de eventos e viagens técnicas."
    },
    {
      role: "Ministério da Saúde",
      company: "Assessoria Parlamentar",
      companylogo: require("./assets/images/asparlLogo.png"),
      date: "2021",
      desc: "Análise documental (PLs, PLCs, decretos) e apoio a relatórios estratégicos em saúde."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projetos",
  subtitle: "ALGUNS DOS PROJETOS QUE DESENVOLVI",
  projects: [
    {
      image: require("./assets/images/franciscoCover.png"),
      projectName: "Site Francisco Leal",
      projectDesc:
        "Site institucional desenvolvido para o cliente Francisco Leal, com HTML, CSS e JavaScript.",
      footerLink: [
        {
          name: "Ver repositório",
          url: "https://github.com/abelogliari/FranciscoLeal"
        }
      ]
    },
    {
      image: require("./assets/images/siteCover.png"),
      projectName: "PortifolioHUB",
      projectDesc:
        "Meu portfólio profissional em ReactJS, responsivo e otimizado para SEO, publicado em domínio próprio via GitHub Pages.",
      footerLink: [
        {
          name: "Ver site",
          url: "https://abelogliari.com.br"
        },
        {
          name: "Repositório",
          url: "https://github.com/abelogliari/PortifolioHUB"
        }
      ]
    },
    {
      image: require("./assets/images/catmatCover.png"),
      projectName: "Extrator CATMAT",
      projectDesc:
        "Aplicação em Python que extrai códigos do Catálogo de Materiais via API do Compras.gov.br (Dados Abertos).",
      footerLink: [
        {
          name: "Ver repositório",
          url: "https://github.com/abelogliari/Extrator-CATMAT-DA"
        }
      ]
    },
    {
      image: require("./assets/images/djudCover.png"),
      projectName: "Painel DJUD",
      projectDesc:
        "Painel para acompanhamento e visualização de dados (DJUD).",
      footerLink: [
        {
          name: "Ver repositório",
          url: "https://github.com/abelogliari/djud-painel"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certificações e Recomendações 🏆 "),
  subtitle:
    "Cursos, certificações e reconhecimentos profissionais que reúni ao longo da minha trajetória",

  achievementsCards: [
    {
      title: "Carta de Recomendação Profissional",
      subtitle:
        "Recomendação profissional emitida com base na minha atuação em projetos de economia da saúde.",
      image: require("./assets/images/cartaRecom.png"),
      imageAlt: "Carta de Recomendação Profissional",
      footerLink: [
        {
          name: "Ver documento",
          url: "https://github.com/abelogliari/PortifolioHUB"
        }
      ]
    },
    {
      title: "ENAP — Escola Nacional de Administração Pública",
      subtitle:
        "Introdução à Ciência de Dados e Sistema Eletrônico de Informações (SEI! USAR).",
      image: require("./assets/images/certEnap.png"),
      imageAlt: "ENAP",
      footerLink: [{name: "ENAP", url: "https://www.enap.gov.br/"}]
    },
    {
      title: "AVASUS — SIOPS",
      subtitle:
        "Sistema de Informações sobre Orçamentos Públicos em Saúde (SIOPS), pelo AVASUS.",
      image: require("./assets/images/certAvasus.png"),
      imageAlt: "AVASUS SIOPS",
      footerLink: [{name: "AVASUS", url: "https://avasus.ufrn.br/"}]
    },
    {
      title: "Udemy — Programação",
      subtitle:
        "Python (básico ao avançado), Django, JavaScript, Bancos de Dados, Git e GitHub, Android e Algoritmos.",
      image: require("./assets/images/certUdemy.png"),
      imageAlt: "Udemy",
      footerLink: [{name: "Udemy", url: "https://www.udemy.com/"}]
    },
    {
      title: "Cursos Técnicos",
      subtitle: "Informática\nSecretariado",
      image: require("./assets/images/certTecnico.png"),
      imageAlt: "Cursos Técnicos",
      footerLink: [
        {
          name: "Ver no LinkedIn",
          url: "https://www.linkedin.com/in/abel-carlesso-ogliari/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("EVENTOS E PALESTRAS"),

  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Fale comigo ☎️"),
  subtitle:
    "Quer conversar sobre um projeto ou apenas dizer um oi? Pode me chamar.",
  number: "", // <-- opcional: seu telefone
  email_address: "abelogliari@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
