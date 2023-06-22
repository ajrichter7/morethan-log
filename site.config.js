const CONFIG = {
  // profile setting (required)
  profile: {
    name: "alex",
    image: "public/notion-avatar-1687444769782.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "developer",
    bio: "I want to share computer things that I find interesting with others and also create a repository for my own reference :) I hope you find something helpful.",
    email: "alexis.richter7@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexis-richter-9b4852145",
    github: "ajrichter7",
    instagram: "",
  },
  projects: [
    {
      name: `Cytoscape`,
      href: "https://github.com/ajrichter7/summerResearch",
    },
  ],
  // blog setting (required)
  blog: {
    title: "knowledge dump",
    description: "welcome to my personal blog for all things tech and easy tutorials",
    theme: "auto", // ['light', 'dark', 'auto']
  },

  // CONFIG configration (required)
  link: "morethan-log-ajrichter7.vercel.app",
  since: 2023, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: "morethanmin/morethan-log",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}

module.exports = { CONFIG }
