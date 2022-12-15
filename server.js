import Nullstack from 'nullstack'

import Application from './src/Application'

const context = Nullstack.start(Application)

context.start = function () {
  const { project } = context;
  project.name = 'General Game';
  project.shortName = 'General';
  project.domain = 'nullstack.app';
  project.color = '#d22365';
  project.backgroundColor = '#d22365';
  project.type = 'website';
  project.display = 'standalone';
  project.orientation = 'portrait';
  project.scope = '/';
  project.root = '/';
  project.icons = {
    '72': '/icon-72x72.png',
    '128': '/icon-128x128.png',
    '512': '/icon-512x512.png'
  };
  project.favicon = '/favicon.png';
  project.disallow = ['/admin'];
  project.sitemap = true;
  project.cdn = 'cdn.nullstack.app';
  project.protocol = 'https';
}


export default context
