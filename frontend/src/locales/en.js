export default {
  translation: {
    appFrame: {
      navbar: {
        appName: 'My first React App',
        buttons: {
          output: 'Output',
          switchLanguage: 'En/Ru',
        },
      },
    },
    registrationPage: {
      card: {
        body: {
          header: 'Registration',
          userName: {
            yup: {
              min: 'Nickname cannot be shorter than 3 characters',
              max: 'Nickname cannot be longer than 20 characters',
              required: 'Required field to fill',
            },
            placeholder: 'Your nickname',
          },
          password: {
            yup: {
              min: 'Password cannot be shorter than 6 characters',
              max: 'Password cannot be longer than 30 characters',
              required: 'Required field to fill',
              confirmation: 'Passwords must match',
            },
            placeholder: 'Password',
            placeholderWithConfirmation: 'Confirm password',
          },
          warnings: {
            authFailed: 'This user already exists',
          },
          submit: 'Create',
        },
        footer: {
          description: 'Already registered? ',
          link: 'Log in',
        },
      },
    },
    authorizationPage: {
      card: {
        body: {
          header: 'Login',
          userName: {
            yup: {
              min: 'Nickname cannot be shorter than 3 characters',
              max: 'Nickname cannot be longer than 20 characters',
              required: 'Required field to fill',
            },
            placeholder: 'Your nickname',
          },
          password: {
            yup: {
              min: 'Password cannot be shorter than 3 characters',
              max: 'Password cannot be longer than 30 characters',
              required: 'Required field to fill',
            },
            placeholder: 'Password',
          },
          warnings: {
            authFailed: 'Invalid username or password',
          },
          submit: 'Sign in',
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
    chatPage: {
      loadingChat: {},
      failedChat: {},
      authedChat: {
        channels: {
          blockName: 'Channels',
          buttons: {
            channelMenu: {
              renaming: 'Rename',
              removing: 'Delete',
            },
          },
          menu: {},
        },
        messages: {
          counter: {
            count_one: '{{count}} message',
            count_other: '{{count}} messages',
          },
          form: {
            input: {
              placeholder: 'Input your message ...',
              ariaLabel: 'New message',
            },
            button: {
              srcreenReaderValue: 'Send',
            },
          },

        },
        modals: {
          headers: {
            adding: 'Add channel',
            renaming: 'Rename channel',
            removing: 'Delete channel',
          },
          content: {
            form: {
              addingAndRenaming: {
                yup: {
                  min: 'Channel name cannot be shorter than 3 characters',
                  max: 'Channel name cannot be longer than 20 characters',
                  notOneOf: 'Channel name must be unique',
                  required: 'Required field',
                },
                placeholder: 'Enter channel name',
              },
            },
            text: {
              removing: 'Are you shure?',
            },
          },
          buttons: {
            adding: {
              buttonCancel: 'Cancel',
              buttonSubmit: 'Add',
            },
            renaming: {
              buttonCancel: 'Cancel',
              buttonSubmit: 'Rename',
            },
            removing: {
              buttonCancel: 'Cancel',
              buttonSubmit: 'Delete',
            },
          },
        },
      },
    },
    toasts: {
      channels: {
        creating: {
          successed: 'Channel created',
          rejected: 'An error occurred while creating the channel',
        },
        renaming: {
          successed: 'Channel renamed',
          rejected: 'An error occurred while renaming the channel',
        },
        removing: {
          successed: 'Channel removed',
          rejected: 'An error occurred while removing the channel',
        },
      },
      data: {
        errors: {
          informationalError: 'An informational error has occurred. Please try again a little later or contact support. Error code is',
          redirectionalError: 'A redirection error has occurred. Please try again a little later or contact support. Error code is',
          clientError: 'An error has occurred in the application. Please try again later or contact support. Error code is',
          serverError: 'An error was received on the server side. Please try again a little later or contact support. Error code is',
          default: 'An unrecognized error has occurred. Please try again a little later or contact support.',
        },
      },
    },
  },
};
