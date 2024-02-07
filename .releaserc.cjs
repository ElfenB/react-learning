/** @type {import('semantic-release').Options}  */

module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', { changelogTitle: '# Changelog' }],
    '@semantic-release/npm',
    ['@semantic-release/git', { message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}' }],
  ],
  branches: ['main'],
};
