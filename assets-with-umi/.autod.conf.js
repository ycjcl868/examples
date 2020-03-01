'ues strict';

module.exports = {
  write: true,
  plugin: 'autod-egg',
  prefix: '^',
  devprefix: '^',
  exclude: [
    'test/fixtures',
    'examples',
    'docs',
    'run',
    'app/web/pages/.umi',
    'app/web/pages/.umi-production',
  ],
  devdep: [
    'egg-bin',
    'eslint',
    'eslint-config-egg',
    'antd-mobile'
  ],
  dep: [
    'egg',
    'egg-scripts',
  ],
  semver: [
  ],
  test: 'scripts',
};
