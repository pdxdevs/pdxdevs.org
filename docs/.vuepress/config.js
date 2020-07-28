module.exports = {
  title: "Denver Devs",
  description:
    "We are a Denver, Colorado based software engineer Slack community focused on helping each other find jobs, solve problems, make friends, and so much more.",
  head: [["link", { rel: "icon", href: "/icon.png" }]],
  serviceWorker: false,
  plugins: [
    [
      "@vuepress/google-analytics",
      {
        ga: "UA-30177848-7",
      },
    ],
  ],
  themeConfig: {
    search: false,
    repo: "Denver-Devs/denverdevs.org",
    repoLabel: "Github",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "Help us improve this page!",
    lastUpdated: "Last Updated",
    nav: [
      { text: "Home", link: "/" },
      { text: "About", link: "/about/" },
      {
        text: "Events",
        items: [
          { text: "Denver Devs Events", link: "/events/denverdevs-events/" },
          { text: "Meetups", link: "/events/meetups/" },
          { text: "AMAs", link: "/events/ama/" },
        ],
      },
      {
        text: "Rules & Resources",
        items: [
          {
            text: "Rules & Guidelines",
            items: [
              { text: "Code of Conduct", link: "/resources/code-of-conduct/" },
              { text: "Rules", link: "/resources/rules/" },
              {
                text: "Job Board Rules",
                link: "/resources/job-board-rules/",
              },
            ],
          },
          {
            text: "Resources",
            items: [
              {
                text: "Welcome To Denver",
                link: "/resources/welcome-to-denver/",
              },
              { text: "Interview Prep", link: "/resources/interview-prep/" },
              { text: "Contributing Guide", link: "/resources/contributing/" },
              { text: "Channel Guide", link: "/channel-guide/" },
              {
                text: "Denver Devs Emojis",
                link: "https://github.com/Denver-Devs/emojis",
              },
            ],
          },
        ],
      },
      {
        text: "Sign In",
        link: "https://denver-devs.slack.com",
      },
      {
        text: "Support Us",
        link: "https://opencollective.com/denverdevs/",
      },
    ],
    sidebar: {
      "/about/": [""],
      "/events/": [
        {
          title: "  Events",
          collapsable: true,
          sidebarDepth: 0,
          children: ["denverdevs-events/", "meetups/", "ama/"],
        },
      ],
      "/resources/": [
        {
          title: "Rules & Guidelines",
          collapsable: true,
          children: ["code-of-conduct/", "rules/", "job-board-rules/"],
        },
        {
          title: "Resources",
          collapsable: true,
          children: ["contributing/", "interview-prep/", "welcome-to-denver/"],
        },
      ],
    },
  },
};
