process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

module.exports = {
  platform: 'github',
  onboarding: true,
  token: process.env.GITHUB_TOKEN,
  repositories: [
    'Rishabh-Dby/SBSampleProj',
  ],
};
