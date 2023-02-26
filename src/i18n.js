import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          News: 'News',
          Find_pet: 'Find pet',
          Our_friends: 'Our friends',
          Login: 'Login',
          Registration: 'Registration',
          Add_pet: 'Add pet',
          Add_notice: 'Add pet',
          Time: 'Time:',
          Address: 'Address',
          Email: 'Email',
          Phone: 'Phone',
          Friends_404: `Sorry, we don't have any information at the moment. Please try
              again later. In the meantime, here's a cute photo.`,
          Title: 'Take good care of your small pets',
          Login_with_Google: 'Login with Google',
          No_account: `Don't have an account?`,
          The_sex: 'The sex',
          Male: 'Male',
          Female: 'Female',
          Location: 'Location',
          Price: 'Price',
          Load_img: `Load the pet’s image:`,
          Comments: 'Comments',
          Done: 'Done',
          Back: 'Back',
          Notice_add_pet: `You can sell or give your pets, or inform others about lost pets`,
          lost_found: 'lost/found',
          in_good_hands: 'in good hands',
          sell: 'sell',
          Tittle_of_ad: 'Tittle of ad ',
          Name_pet: 'Name pet',
          Date_of_birth: 'Date of birth',
          Breed: 'Breed',
          Next: 'Next',
          Cancel: 'Cancel',
          Submit: 'Submit',
          Add_pet_notification: 'Add photo and some comments',
          No_breed: `Didn't find the right breed?`,
          Write_by_hand: 'Write by hand',
          No_news_notification: 'There is no news with this title',
          Place: 'Place',
          Age: 'Age',
          very_old: 'very old',
          Learn_more: 'Learn more',
          favorite_ads: 'favorite ads',
          my_ads: 'my ads',
          have_account: 'Already have an account',
          Register: 'Register',
          My_pets: 'My pets',
          Name: 'Name',
          Log_out: 'Log out',
          Edit_photo: 'Edit photo',
          City: 'City',
          My_information: 'My information',
          Account: 'Account',
          Main_title: 'Find your favorite pet',
          Location_p: 'Type location',
          Price_p: 'Type price',
          Comments_p: 'Type comments',
          Name_pet_p: "Type pet's name",
          Type_name: 'Type name',
          Breed_p: 'Type breed',
          Breed_select: 'select a breed',
          Search: 'Search',
          Confirm_Password: 'Confirm Password',
          City_region: 'City, region',
          Mobile_phone: 'Mobile phone',
        },
      },
      ua: {
        translation: {
          News: 'Новини',
          Find_pet: 'Знайти улюбленця',
          Our_friends: 'Наші друзі',
          Login: 'Логін',
          Registration: 'Реєстрація',
          Add_pet: 'Додати улюбленця',
          Add_notice: 'Додати оголошення',
          Time: 'Час',
          Address: 'Адреса',
          Email: 'Пошта',
          Phone: 'Телефон',
          Friends_404: `На жаль, на даний момент у нас немає жодної інформації. Будь ласка, спробуй
              знову пізніше. А поки що ось миле фото.`,
          Title: 'Дбайте про своїх маленьких домашніх тварин',
          Login_with_Google: 'Увійти з Google',
          No_account: `Немає облікового запису?`,
          The_sex: 'Стать',
          Male: 'Хлопчик',
          Female: 'Дівченка',
          Location: 'Місце знаходження',
          Price: 'Ціна',
          Load_img: `Додати фото тваринки:`,
          Comments: 'Коментарі',
          Done: 'Готово',
          Back: 'Назад',
          Notice_add_pet: `Ви можете продати або подарувати своїх домашніх тварин, або повідомити іншим про втрачених домашніх тварин`,
          lost_found: 'зник/знайшовся',
          in_good_hands: 'в добрі руки',
          sell: 'продаж',
          Tittle_of_ad: 'Назва оголошення ',
          Name_pet: `Ім'я вихованця`,
          Date_of_birth: 'Дата народження',
          Breed: 'Порода',
          Next: 'Далі',
          Cancel: 'Відміна',
          Submit: 'Надіслати',
          Add_pet_notification: 'Додайте фото та кілька коментарів',
          No_breed: `Не знайшла потрібної породи?`,
          Write_by_hand: 'Напишіть самі',
          No_news_notification: 'Новин з такою назвою немає',
          Place: 'Місце',
          Age: 'Вік',
          very_old: 'дуже старий',
          Learn_more: 'Вивчайте більше',
          favorite_ads: 'улюблені оголошення',
          my_ads: 'мої оголошення',
          have_account: 'Вже є акаунт',
          Register: 'Реєстрація',
          My_pets: 'Мої улюбленці',
          Name: `Ім'я`,
          Log_out: 'Виїти',
          Edit_photo: 'Додати фото',
          City: 'Місто',
          My_information: 'Інформація',
          Account: 'Акаунт',
          Main_title: 'Знайди свого улюбленого вихованця',
          Location_p: 'Введіть локацію',
          Price_p: 'Введіть ціну',
          Comments_p: 'Введіть коментар',
          Name_pet_p: `Введіть ім'я улюбленця`,
          Type_name: `Введіть ім'я`,
          Breed_p: 'Введіть породу',
          Breed_select: 'оберіть породу',
          Search: 'Пошук',
          Confirm_Password: 'Підтвердіть Пароль',
          City_region: 'Місто, Регіон',
          Mobile_phone: 'Номер телефону',
        },
      },
    },
  });

export default i18n;
