import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: {
    text: 'Updated at',
    formatOptions: {
      dateStyle: 'full',
      timeStyle: 'medium'
    }
  },
  base: '/docs/', // Set your base URL here
  head: [
    ['link', { rel: 'shortcut icon', href: '/docs/favicon.ico' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/docs/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css' }],

  ],
  title: "abap2UI5",
  description: "Developing Purely in ABAP",
  themeConfig: {
    logo: '/logo.png',
    footer: {
      message: 'Released under the MIT License',
      copyright: '2023-present abap2UI5'
    },
    editLink: {
      pattern: 'https://github.com/abap2UI5/abap2UI5-documentation/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: 'Guide', items: [
          { text: 'Getting Started', link: '/get_started/get_started' },
          { text: 'Development', link: '/development/development' },
          { text: 'Configuration', link: '/configuration/configuration' },
          { text: 'Advanced Topics', link: '/advanced/advanced' },
          { text: 'Technical Insights', link: '/insights/insights' },
          { text: 'Resources', link: '/resources/resources' },
        ]
      },
      {
        text: 'Links', items: [
          {
            text: 'Project', items: [
              { text: 'abap2UI5', link: 'https://github.com/abap2UI5/abap2UI5' },
              { text: 'samples', link: 'https://github.com/abap2UI5/samples' },
              { text: 'docs', link: 'https://github.com/abap2UI5/docs' },
              { text: 'frontend', link: 'https://github.com/abap2UI5/frontend' },
              { text: 'issues', link: 'https://github.com/abap2UI5/abap2UI5/issues' },
            ]
          },
          {
            text: 'More', items: [
              { text: 'addons', link: 'https://github.com/abap2UI5-addons' },
              { text: 'apps', link: 'https://github.com/abap2UI5-apps' },
              { text: 'downported', link: 'https://github.com/abap2UI5-downported' },
              { text: 'renamed', link: 'https://github.com/abap2UI5-renamed' },
            ]
          },
        ]
      },
      {
        text: '1.134.0', items: [
          { text: 'Changelog', link: '/resources/changelog' },
          { text: 'Contribution', link: '/resources/contribution' },
          { text: 'Support', link: '/resources/support' },
        ]
      },
    ],
    sidebar: [
      {
        text: 'Getting Started',
        link: '/get_started/get_started',
        collapsed: true,
        items: [
          { text: 'Introduction', link: '/get_started/introduction' },
          { text: 'Quickstart', link: '/get_started/quickstart' },
          { text: 'Hello World', link: '/get_started/hello_world' },
          { text: 'Sample Apps', link: '/get_started/sample_apps' },
          { text: 'Use Cases', link: '/get_started/architecture' },
          { text: `What's next?`, link: '/get_started/next' }
        ]
      },
      {
        text: 'Development',
        link: '/development/development',
        collapsed: true,
        items: [
          { text: 'General', link: '/development/general' },
          { text: 'View, UI', link: '/features/' },
          { text: 'Model, Data Binding', link: '/features/' },
          { text: 'Translation, i18n', link: '/development/translation' },
          { text: 'Messages', link: '/development/messages' },
          { text: 'Errors', link: '/development/errors' },
          { text: 'Popups, Popover', link: '/development/popups' },
          { text: 'Navigation', link: '/features/' },
          { text: 'Debugging', link: '/features/' },
        ]
      },
      {
        text: 'Configuration',
        link: '/configuration/configuration',
        collapsed: true,
        items: [
          { text: 'Setup', link: '/configuration/general' },
          {
            text: 'Installation',
            link: '/configuration/installation',
          },
          { text: 'Launchpad', link: '/configuration/installation', },
          { text: 'Use in Production', link: '/configuration/productive_usage' },
          { text: 'Security', link: '/configuration/security' },
          { text: 'Performance', link: '/configuration/performance' },
          { text: 'Clean Core', link: '/configuration/clean_core' },
          { text: 'Architecture', link: '/advanced/renaming' },
        ]
      },
      {
        text: 'Advanced Topics',
        link: '/advanced/advanced',
        collapsed: true,
        items: [
          { text: 'BTP Workzone', link: '/advanced/btp' },
          { text: 'Stateful Sessions', link: '/advanced/stateful' },
          { text: 'Downporting', link: '/advanced/downporting' },
          { text: 'Renaming', link: '/advanced/renaming' },
          { text: 'UI5, ABAP Versions', link: '/features/faq' },
          { text: 'SE80, ADT', link: '/advanced/se80' },
          { text: 'Extensibility', link: '/features/faq' },
        ]
      },

      {
        text: 'Addons', link: '/addons/addons', collapsed: true, items: [
          { text: 'Runtime Typed Data', link: '/addons/srtti' },
          { text: 'Layouts, Variants', link: '/addons/layout' },
          { text: 'Popups', link: '/addons/popup' },
          { text: 'Launchpad KPIs', link: '/addons/kpi' },
          { text: 'Remote App Calls', link: '/addons/rfc' },
          { text: 'JS Libraries', link: '/addons/ext_js' },
          { text: 'Apps, Community', link: '/addons/apps' },
        ]
      },
      {
        text: 'Under The Hood',
        link: '/insights/insights',
        collapsed: true,
        items: [
          { text: 'General', link: '/insights/general' },
          { text: 'CI/CD', link: '/insights/ci' },
          { text: 'open-abap', link: '/advanced/open_abap' },
        ]
      },
      {
        text: 'Resources',
        link: '/resources/resources',
        collapsed: true,
        items: [
          { text: 'Changelog', link: '/resources/changelog' },
          { text: 'Blogs', link: '/resources/blogs' },
          { text: 'References', link: '/resources/references' },
          { text: 'Contribution', link: '/resources/contribution' },
          { text: 'Support', link: '/resources/support' },
          { text: 'Sponsor', link: '/resources/sponsor' },
          { text: 'License', link: '/resources/license' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/abap2ui5/' },
      { icon: 'github', link: 'https://www.github.com/abap2UI5/abap2UI5' },

    ]
  },
  
    // Aktiviert den "On This Page"-Bereich
    outline: { 
      level: [2,6]
    }
})
