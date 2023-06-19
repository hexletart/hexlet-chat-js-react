export default {
  translation: {
    appFrame: {
      navbar: {
        appName: 'Моё первое приложение на Реакт',
      },
    },
    loginPage: {
      card: {
        body: {
          header: 'Войти',
          username: {
            yup: {
              min: 'Ник не может быть короче 2 символов',
              max: 'Ник не может быть длиннее 30 символов',
              required: 'Обязательно поле для заполнения',
            },
            placeholder: 'Ваш ник',
          },
          password: {
            yup: {
              min: 'Пароль не может быть короче 4 символов',
              max: 'Пароль не может быть длиннее 20 символов',
              required: 'Обязательно поле для заполнения',
            },
            placeholder: 'Пароль',
          },
          submit: 'Войти',
          warnings: {
            authFailed: 'Неверные имя пользователя или пароль',
          },
        },
        footer: {
          description: 'Нет аккаунта? ',
          link: 'Зарегестрироваться',
        },
      },
    },
    registrationPage: {},
    notFoundPage: {
      header: 'Страница не найдена',
      description: 'Но вы можете перейти',
      link: 'на главную страницу',
    },
    chatPage: {
      loadingChat: {},
      failedChat: {},
      authedChat: {
        channels: {
          blockName: 'Каналы',
          buttons: {
            channelMenu: {
              renaming: 'Переименовать',
              removing: 'Удалить',
            },
          },
          menu: {},
          modals: {
            headers: {
              adding: 'Добавить канал',
              renaming: 'Переименовать канал',
              removing: 'Удалить канал',
            },
            content: {
              form: {
                addingAndRenaming: {
                  yup: {
                    min: 'Название канала не может быть короче 3 символов',
                    max: 'Название канала не может быть длиннее 20 символов',
                    required: 'Обязательное поле',
                  },
                  placeholder: 'Введите название канала',
                },
              },
              text: {
                removing: 'Уверены?',
              },
            },
            buttons: {
              adding: {
                buttonCancel: 'Отменить',
                buttonSubmit: 'Добавить',
              },
              renaming: {
                buttonCancel: 'Отменить',
                buttonSubmit: 'Добавить',
              },
              removing: {
                buttonCancel: 'Отменить',
                buttonSubmit: 'Удалить',
              },
            },
          },
          toasts: {
            creating: {
              fulfilled: 'Канал создан',
              rejected: 'Возникла ошибка при создании канала',
            },
            renaming: {
              fulfilled: 'Канал переименован',
              rejected: 'Возникла ошибка при переименовании канала',
            },
            removing: {
              fulfilled: 'Канал удален',
              rejected: 'Возникала ошибка при удаление канала',
            },
          },
        },
        messages: {
          counter: {
            count_one: '{{count}} сообщение',
            count_few: '{{count}} сообщения',
            count_many: '{{count}} сообщений',
          },
          form: {
            input: {
              placeholder: 'Введите сообщение ...',
              ariaLabel: 'Новое сообщение',
            },
            button: {
              srcreenReaderValue: 'Отправить',
            },
          },
        },
      },
    },
  },
};

// {
//   translation: {
//     frame: {
//       navbar: {
//         appName: 'Моё первое приложение на Реакт',
//       },
//     },
//     loginPage: {
//       card: {
//         body: {
//           header: 'Войти',
//           username: {
//             yup: {
//               min: 'Ник не может быть короче 2 символов',
//               max: 'Ник не может быть длиннее 30 символов',
//               required: 'Обязательно поле для заполнения',
//             },
//             placeholder: 'Ваш ник',
//           },
//           password: {
//             yup: {
//               min: 'Пароль не может быть короче 4 символов',
//               max: 'Пароль не может быть длиннее 20 символов',
//               required: 'Обязательно поле для заполнения',
//             },
//             placeholder: 'Пароль',
//           },
//           submit: 'Войти',
//           warnings: {
//             authFailed: 'Неверные имя пользователя или пароль',
//           },
//         },
//         footer: {
//           description: 'Нет аккаунта? ',
//           link: 'Зарегестрироваться',
//         },
//       },
//     },
//     notFoundPage: {
//       header: 'Страница не найдена',
//       description: 'Но вы можете перейти',
//       link: 'на главную страницу',
//     },
//     chatPage: {
//       authedChat: {
//         addChannelButton: {
//           addChannelModal: {
//             channelname: {
//               yup: {
//                 min: 'Название канала не может быть короче 3 символов',
//                 max: 'Название канала не может быть длиннее 20 символов',
//                 required: 'Обязательное поле',
//               },
//               placeholder: 'Введите название канала',
//             },
//             header: 'Добавить канал',
//             buttonCancel: 'Отменить',
//             buttonSubmit: 'Отправить',
//           },
//         },
//       },
//     },
//   },
// };
