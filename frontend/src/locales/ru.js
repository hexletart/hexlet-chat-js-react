export default {
  translation: {
    appFrame: {
      navbar: {
        appName: 'Моё первое приложение на Реакт',
        buttons: {
          output: 'Выход',
        },
      },
    },
    registrationPage: {
      card: {
        body: {
          header: 'Регистрация',
          userName: {
            yup: {
              min: 'Ник не может быть короче 3 символов',
              max: 'Ник не может быть длиннее 20 символов',
              required: 'Обязательно поле для заполнения',
            },
            placeholder: 'Ваш ник',
          },
          password: {
            yup: {
              min: 'Пароль не может быть короче 6 символов',
              max: 'Пароль не может быть длиннее 30 символов',
              required: 'Обязательно поле для заполнения',
              confirmation: 'Пароли должны совпадать',
            },
            placeholder: 'Пароль',
            placeholderWithConfirmation: 'Подтвердите пароль',
          },
          warnings: {
            authFailed: 'Такой пользователь уже существует',
          },
          submit: 'Создать',
        },
        footer: {
          description: 'Уже зарегестрированы? ',
          link: 'Авторизоваться',
        },
      },
    },
    authorizationPage: {
      card: {
        body: {
          header: 'Войти',
          userName: {
            yup: {
              min: 'Ник не может быть короче 3 символов',
              max: 'Ник не может быть длиннее 20 символов',
              required: 'Обязательно поле для заполнения',
            },
            placeholder: 'Ваш ник',
          },
          password: {
            yup: {
              min: 'Пароль не может быть короче 3 символов',
              max: 'Пароль не может быть длиннее 30 символов',
              required: 'Обязательно поле для заполнения',
            },
            placeholder: 'Пароль',
          },
          warnings: {
            authFailed: 'Неверные имя пользователя или пароль',
          },
          submit: 'Войти',
        },
        footer: {
          description: 'Нет аккаунта? ',
          link: 'Зарегистрироваться',
        },
      },
    },
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
                  notOneOf: 'Имя канала должно быть уникальным',
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
              buttonSubmit: 'Переименовать',
            },
            removing: {
              buttonCancel: 'Отменить',
              buttonSubmit: 'Удалить',
            },
          },
        },
      },
    },
    toasts: {
      creating: {
        successed: 'Канал создан',
        rejected: 'Возникла ошибка при создании канала',
      },
      renaming: {
        successed: 'Канал переименован',
        rejected: 'Возникла ошибка при переименовании канала',
      },
      removing: {
        successed: 'Канал удален',
        rejected: 'Возникала ошибка при удаление канала',
      },
    },
  },
};
