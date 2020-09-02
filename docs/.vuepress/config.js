module.exports = {
  title: "Portland Devs",
  description:
    "We are a Portland, OR based software engineer community focused on helping each other find jobs, solve problems, make friends, and so much more.",
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  serviceWorker: false,
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-42131022-4",
      },
    ],
  ],
  themeConfig: {
    search: false,
    repo: "pdxdevs/pdxdevs.org",
    repoLabel: "Github",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Rules & Resources",
        items: [
          {
            text: "Rules & Guidelines",
            items: [
              { text: "Code of Conduct", link: "/resources/code-of-conduct/" },
              { text: "Rules", link: "/resources/rules/" },
            ],
          },
          {
            text: "Resources",
            items: [
              { text: "Contributing Guide", link: "/resources/contributing/" },
            ],
          },
        ],
      },
    ],
    sidebar: {
      "/resources/": [
        {
          title: "Rules & Guidelines",
          collapsable: true,
          children: ["code-of-conduct/", "rules/"],
        },
        {
          title: "Resources",
          collapsable: true,
          children: ["contributing/"],
        },
      ],
    },
  },
};
