export default {
  translation: {
    frame: {
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
            },
            placeholder: 'Ваш ник',
          },
          password: {
            yup: {
              min: 'Пароль не может быть короче 4 символов',
              max: 'Пароль не может быть длиннее 20 символов',
            },
            placeholder: 'Пароль',
          },
          submit: 'Войти',
          warnings: {
            required: 'Обязательно поле для заполнения',
            authFailed: 'Неверные имя пользователя или пароль',
          },
        },
        footer: {
          description: 'Нет аккаунта? ',
          link: 'Зарегестрироваться',
        },
      },
    },
    notFoundPage: {
      header: 'Страница не найдена',
      description: 'Но вы можете перейти',
      link: 'на главную страницу',
    },
  },
};
