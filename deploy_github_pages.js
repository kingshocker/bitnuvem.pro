const gitlog = require('gitlog');
const ghpages = require('gh-pages');
const gitRemoteOriginUrl = require('git-remote-origin-url');

const options = {
  repo: __dirname,
  number: 1,
  fields: [
    'authorName',
    'authorEmail',
    'subject'
  ]
};

const commits = gitlog(options);
const lastCommit = commits[0];

(async() => {
  const remoteUrl = await gitRemoteOriginUrl();
  const remoteUrlWithToken = remoteUrl.replace(
    'https://',
    `https://${process.env.GITHUB_TOKEN}@`
  );

  ghpages.publish(
    process.env.GITHUB_PAGES_OUTPUT_DIRECTORY,
    {
      branch: 'gh-pages',
      repo: remoteUrlWithToken,
      user: {
        name: lastCommit['authorName'],
        email: lastCommit['authorEmail']
      },
      message: lastCommit['subject']
    },
    function(err) {
      if (err) {
        throw err;
      }
      console.log('Published on GitHub Pages');
    }
  );
})();
