export default {
  translation: {
    appFrame: {
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
              required: 'Required field to fill',
            },
            placeholder: 'Your nickname',
          },
          password: {
            yup: {
              min: 'Password cannot be shorter than 2 characters',
              max: 'Password cannot be longer than 20 characters',
              required: 'Required field to fill',
            },
            placeholder: 'Password',
          },
          submit: 'Sign in',
          warnings: {
            authFailed: 'Invalid username or password',
          },
        },
        footer: {
          description: 'No account? ',
          link: 'Register',
        },
      },
    },
    registrationPage: {},
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
          menu: {},
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
                buttonSubmit: 'Add',
              },
              removing: {
                buttonCancel: 'Cancel',
                buttonSubmit: 'Delete',
              },
            },
          },
          buttons: {
            channelMenu: {
              renaming: 'Rename',
              removing: 'Delete',
            },
          },
        },
        messages: {},
      },
    },
  },
};

// {
//   translation: {
//     frame: {
//       navbar: {
//         appName: 'My first React App',
//       },
//     },
//     loginPage: {
//       card: {
//         body: {
//           header: 'Login',
//           username: {
//             yup: {
//               min: 'Nickname cannot be shorter than 2 characters',
//               max: 'Nickname cannot be longer than 30 characters',
//               required: 'Required field to fill',
//             },
//             placeholder: 'Your nickname',
//           },
//           password: {
//             yup: {
//               min: 'Password cannot be shorter than 2 characters',
//               max: 'Password cannot be longer than 20 characters',
//               required: 'Required field to fill',
//             },
//             placeholder: 'Password',
//           },
//           submit: 'Sign in',
//           warnings: {
//             authFailed: 'Invalid username or password',
//           },
//         },
//         footer: {
//           description: 'No account? ',
//           link: 'Register',
//         },
//       },
//     },
//     notFoundPage: {
//       header: 'Page not found',
//       description: 'But you can switch',
//       link: 'to the main page',
//     },
//     chatPage: {
//       authedChat: {
//         addChannelButton: {
//           test: 'hello!!!!',
//           addChannelModal: {
//             channelname: {

//             },
//             header: 'Add channel',
//             buttonCancel: 'Cancel',
//             buttonSubmit: 'Add',
//           },
//         },
//       },
//     },
//   },
// };
