module.exports = {
  siteName: 'challenge-every-mouth',
  siteUrl: 'https://challenge-every-month.netlify.com/',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
      ]
    }
  },

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'goal/*.md',
        typeName: 'BlogPost',
        route: '/goal/:year/:month/:day',
        remark: {
          plugins: [
          ]
        }
      }
    }
  ]
}