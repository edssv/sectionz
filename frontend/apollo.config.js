module.exports = {
  client: {
    service: {
      name: 'strapi',
      url: 'http://127.0.0.1:1337/graphql',
      // optional headers
      headers: {
        authorization:
          'Bearer c11a281390d4c1d7b12225617c0cd16f45b1bfa8241d7e6e9b8e008ca067df7f77ff3721147fbea4a0f2cdb542f13441394f0e01fc41c8fd6b3b9904a571849a0fbaa983ca072547f7bc87ebc211c7e13e5f35f1c8b2262efd0c5ad93a9e692ab6972973379d107feaf19984918c61a19763d7d6d441f85571b722efbd5b4746'
      },
      // optional disable SSL validation check
      skipSSLValidation: true,
      connectToDevTools: true
    }
  }
};
