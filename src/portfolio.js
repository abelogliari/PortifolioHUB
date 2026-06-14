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
  title: "Olá, eu sou o Abel 👋",
  subTitle: emoji(
    "Secretário Executivo Bilíngue atuando com dados em economia da saúde e estudante na CEUB. 🚀 Desenvolvo soluções em Python, automações e web, com foco em dados, eficiência e experiência do usuário. Em busca de evoluir como desenvolvedor."
  ),
  // Link do currículo (PDF). Coloque o PDF em src/containers/greeting/resume.pdf
  // (ou aponte para um PDF hospedado). Botão aparece quando este campo não está vazio.
  resumeLink: "/resume.pdf",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/abelogliari",
  linkedin: "https://www.linkedin.com/in/abelogliari/",
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
      "⚡ Tratamento, integração e análise de dados para economia da saúde, com APIs, PostgreSQL e Excel/Sheets"
    ),
    emoji(
      "⚡ Construção de páginas web com HTML5, CSS3 e JavaScript, versionando tudo com Git e GitHub (Pages, branches e pull requests)"
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
      skillName: "PostgreSQL / Bancos de Dados",
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
      subHeader: "Graduação — Ensino a Distância (EAD)",
      duration: "2026 — Atual",
      desc: "Cursando o Bootcamp I, com foco em Git, GitHub, versionamento de código e construção de portfólio profissional por meio de projetos.",
      descBullets: [
        "Portfólio digital publicado em domínio próprio (abelogliari.com.br) via GitHub Pages",
        "Fluxo profissional de Git: commits semânticos, branches e pull requests"
      ]
    },
    {
      schoolName: "INEDI",
      subHeader: "Curso Técnico em Secretariado",
      duration: "2020 — 2021",
      desc: "Formação técnica em secretariado executivo, gestão de processos administrativos e organização institucional."
    },
    {
      schoolName: "Microlins",
      subHeader: "Curso Técnico em Informática",
      duration: "2014 — 2016",
      desc: "Fundamentos de informática, lógica e ferramentas de produtividade."
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
      Stack: "Git / Versionamento",
      progressPercentage: "75%"
    },
    {
      Stack: "Dados (APIs / SQL / Sheets)",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend (HTML / CSS / JS)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Apoio Técnico — Economia da Saúde",
      company: "CGES — Coordenação-Geral de Informações em Economia da Saúde",
      companylogo: require("./assets/images/cgesLogo.png"),
      date: "2023 — Atual",
      desc: "Apoio técnico em projetos de pesquisa e gestão de dados em economia da saúde (SIOPS, PNGC, ApuraSUS e Banco de Preços em Saúde).",
      descBullets: [
        "Desenvolvimento de software em Python para extração, avaliação e compilação de dados públicos (API Compras.gov.br), subsidiando análises econômicas",
        "Integração de sistemas e bancos de dados internos para monitoramento de preços e materiais de saúde (CATMAT e PDMs)",
        "Atualização, revisão e controle de acessos a bases de dados estratégicas"
      ]
    },
    {
      role: "Apoio à Gestão de Processos e Dados",
      company: "Ministério da Saúde — DATHI/SVSA e DEGERTS/SGTES",
      companylogo: require("./assets/images/msLogo.png"),
      date: "2022",
      desc: "Coleta e organização de dados de processos institucionais, apoiando a sistematização de informações para gestão de eventos e viagens técnicas.",
      descBullets: [
        "Relatórios de gestão de processos diários utilizando metodologia Kanban para administração de prazos"
      ]
    },
    {
      role: "Apoio Técnico Legislativo",
      company: "Assessoria Parlamentar — Ministério da Saúde",
      companylogo: require("./assets/images/asparlLogo.png"),
      date: "2021",
      desc: "Organização e análise documental (PLs, PLCs, decretos) com foco em impactos na política pública de saúde.",
      descBullets: [
        "Apoio técnico à produção de relatórios estratégicos e acompanhamento de projetos legislativos",
        "Atuação em respostas oficiais à CPI da COVID-19, com precisão e agilidade na tramitação de informações"
      ]
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
  subtitle: "APLICAÇÕES E SOLUÇÕES QUE DESENVOLVI",
  projects: [
    {
      image: require("./assets/images/catmatCover.png"),
      projectName: "Extrator CATMAT — Dados Abertos",
      projectDesc:
        "Aplicação em Python para extração de códigos do Catálogo de Materiais via API do portal Dados Abertos (Compras.gov.br). Em fase experimental, com atualizações incrementais constantes.",
      footerLink: [
        {
          name: "Ver repositório",
          url: "https://github.com/abelogliari-code/Extrator-BPS-DA"
        }
      ]
    },
    {
      image: require("./assets/images/siteCover.png"),
      projectName: "PortifolioHUB — Portfólio Profissional",
      projectDesc:
        "Portfólio profissional em ReactJS, responsivo e otimizado para SEO, publicado em domínio próprio via GitHub Pages. Evoluiu de um site estático em HTML/CSS/JS para a stack atual.",
      footerLink: [
        {
          name: "Ver site",
          url: "https://abelogliari.com.br"
        },
        {
          name: "Ver repositório",
          url: "https://github.com/abelogliari/PortifolioHUB"
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
      subtitle:
        "Técnico em Informática (Microlins, 2014–2016) e Técnico em Secretariado (INEDI, 2020–2021).",
      image: require("./assets/images/certTecnico.png"),
      imageAlt: "Cursos Técnicos",
      footerLink: [
        {
          name: "Ver no LinkedIn",
          url: "https://www.linkedin.com/in/abelogliari/"
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
