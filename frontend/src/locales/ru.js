export default {
  translation: {
    appFrame: {
      navbar: {
        appName: 'Моё первое приложение на Реакт',
        buttons: {
          output: 'Выход',
          switchLanguage: 'Рус/Англ',
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
      channels: {
        successed: {
          creating: 'Канал создан.',
          renaming: 'Канал переименован.',
          removing: 'Канал удален.',
        },
        send: {
          creating: 'Создание канала происходит дольше чем обычно. Пожалуйста подождите.',
          renaming: 'Переименование канала происходит дольше чем обычно. Пожалуйста подождите.',
          removing: 'Удаление канала происходит дольше чем обычно. Пожалуйста подождите.',
        },
        default: 'Что-то не работает должным образом. Пожалуйста, сообщите в службу поддержки.',
      },
      data: {
        errors: {
          informationalError: 'Произошла информационная ошибка. Пожалуйста попробуйте ещё раз немного позже или обратитесь в службу поддержки. Код ошибки',
          redirectionalError: 'Произошла ошибка перенаправления. Пожалуйста попробуйте ещё раз немного позже или обратитесь в службу поддержки. Код ошибки',
          clientError: 'Произошла ошибка в приложении. Пожалуйста попробуйте ещё раз немного позже или обратитесь в службу поддержки. Код ошибки',
          serverError: 'Была получена ошибка на стороне сервера. Пожалуйста попробуйте ещё раз немного позже или обратитесь в службу поддержки. Код ошибки',
          default: 'Произошла неопознанная ошибка. Пожалуйста попробуйте ещё раз немного позже или обратитесь в службу поддержки.',
        },
      },
    },
  },
};
