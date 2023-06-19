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
          buttons: {
            channelMenu: {
              renaming: 'Rename',
              removing: 'Delete',
            },
          },
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
          toasts: {
            creating: {
              fulfilled: 'Channel created',
              rejected: 'An error occurred while creating the channel',
            },
            renaming: {
              fulfilled: 'Channel renamed',
              rejected: 'An error occurred while renaming the channel',
            },
            removing: {
              fulfilled: 'Channel removed',
              rejected: 'An error occurred while removing the channel',
            },
          },
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
      },
    },
  },
};
// chatPage.authedCj
// chatPage.authedChat.messages.counter.count

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
