const sitemap = require('nextjs-sitemap-generator')
const fs = require('fs')
const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString()
sitemap({
  baseUrl: 'https://example.com',
  pagesDirectory: __dirname + '/.next/server/static/' + BUILD_ID + '/pages',
  targetDirectory: 'public/',
  ignoredPaths: ['/produkte/[slug]', '/produkte2/[slug]'],
})
