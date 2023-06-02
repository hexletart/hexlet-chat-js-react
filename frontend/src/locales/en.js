export default {
  translation: {
    frame: {
      navbar: {
        appName: 'My first React App',
      },
    },
    loginPage: {
      card: {
        body: {
          header: 'Login',
          username: {
            yup: {
              min: 'Nickname cannot be shorter than 2 characters',
              max: 'Nickname cannot be longer than 30 characters',
            },
            placeholder: 'Your nickname',
          },
          password: {
            yup: {
              min: 'Password cannot be shorter than 2 characters',
              max: 'Password cannot be longer than 20 characters',
            },
            placeholder: 'Password',
          },
          submit: 'Sign in',
          warnings: {
            required: 'Required field to fill',
            authFailed: 'Invalid username or password',
          },
        },
        footer: {
          description: 'No account? ',
          link: 'Register',
        },
      },
    },
    notFoundPage: {
      header: 'Page not found',
      description: 'But you can switch',
      link: 'to the main page',
    },
  },
};
