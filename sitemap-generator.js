const sitemapGenerator = require('nextjs-sitemap-generator')
const fs = require('fs')

const BUILD_ID = fs.readFileSync('.next/BUILD_ID').toString()

const baseUrl = 'https://dithmarschenhanf.de'

sitemapGenerator({
  baseUrl,
  pagesDirectory: __dirname + '/.next/server/static/' + BUILD_ID + '/pages',
  targetDirectory: 'public/',
  ignoredPaths: ['[fallback]'],
})
