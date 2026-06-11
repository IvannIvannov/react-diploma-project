import type { Course } from "../context/CoursesContext";

export const defaultCourses: Course[] = [
  {
    id: "1",
    title: "Основи на React",
    description:
      "Запознай се с React, компонентния подход и начина, по който се изграждат модерни потребителски интерфейси.",
    level: "Начинаещ",
    duration: "40 мин",
    videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
    documentationUrl: "https://react.dev/learn",
    topics: ["React", "Компоненти", "UI", "SPA"],
    content:
      "В този модул ще разбереш какво представлява React и защо е една от най-популярните библиотеки за изграждане на потребителски интерфейси.",
    theory:
      "React е JavaScript библиотека с отворен код, разработена от Meta, която се използва за изграждане на модерни потребителски интерфейси. Основната идея на React е приложението да бъде разделено на малки и независими компоненти, които могат да се разработват и поддържат по-лесно. Всеки компонент отговаря за конкретна част от интерфейса и може да бъде многократно използван в различни части на приложението. React използва Virtual DOM, който позволява по-ефективно обновяване на съдържанието и подобрява производителността на приложението. Благодарение на декларативния подход разработчикът описва как трябва да изглежда интерфейсът, а React автоматично се грижи за актуализацията му при промяна на данните. Библиотеката се използва широко за разработка на едностранични приложения и големи уеб системи. Нейната популярност се дължи на добрата производителност, богатата екосистема и активната общност. Усвояването на основните концепции на React е важна стъпка към разработването на съвременни уеб приложения.",

    exampleTitle: "Прост React компонент",

    exampleCode: `function Welcome() {
  return <h1>Здравей, React!</h1>;
}

export default Welcome;`,

    exampleExplanation:
      "В примера е създаден прост React компонент, който връща JSX елемент. Този компонент може да бъде използван в други части на приложението.",
    quizzes: [
      {
        id: "1-1",
        question: "Какво представлява React?",
        options: [
          "База данни",
          "JavaScript библиотека за UI",
          "CSS framework",
          "Backend framework",
        ],
        correctAnswer: 1,
      },
      {
        id: "1-2",
        question: "Кой създава React?",
        options: ["Google", "Microsoft", "Meta", "Netflix"],
        correctAnswer: 2,
      },
      {
        id: "1-3",
        question: "React се използва основно за?",
        options: [
          "Бази данни",
          "UI интерфейси",
          "Сървъри",
          "Операционни системи",
        ],
        correctAnswer: 1,
      },
      {
        id: "1-4",
        question: "React приложенията са изградени от?",
        options: ["Компоненти", "Таблици", "Сървъри", "Бази данни"],
        correctAnswer: 0,
      },
      {
        id: "1-5",
        question: "React е?",
        options: ["Framework", "Библиотека", "База данни", "Език"],
        correctAnswer: 1,
      },
    ],
  },

  {
    id: "2",
    title: "JSX и компоненти",
    description:
      "Научи как работи JSX синтаксисът и как да създаваш React компоненти.",
    level: "Начинаещ",
    duration: "45 мин",
    videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
    documentationUrl: "https://react.dev/learn/your-first-component",
    topics: ["JSX", "Компоненти", "Props"],
    content: "Този модул разглежда JSX и създаването на компоненти.",
    theory:
      "JSX е синтактично разширение на JavaScript, което позволява писането на структура, подобна на HTML, директно в React компонентите. Чрез JSX разработчикът може по-лесно да описва как трябва да изглежда потребителският интерфейс. Въпреки че прилича на HTML, JSX всъщност се преобразува до JavaScript код, който React използва за създаване на елементи в приложението. Компонентите са основна част от React архитектурата и представляват самостоятелни части от интерфейса. Всеки компонент може да съдържа собствена логика, визуална структура и данни. Това позволява изграждането на приложения чрез комбиниране на малки и преизползваеми елементи. Имената на React компонентите обикновено започват с главна буква, за да може React да ги разграничава от стандартните HTML елементи. Компонентите могат да бъдат използвани многократно в различни части на приложението, което намалява повторението на код. JSX прави разработката по-интуитивна, защото позволява логиката и визуалната структура да бъдат близо една до друга. Усвояването на JSX и компонентите е основна стъпка към създаването на по-сложни React приложения.",

    exampleTitle: "React компонент с JSX",

    exampleCode: `function CourseCard() {
  return (
    <div>
      <h2>JSX и компоненти</h2>
      <p>Това е примерен React компонент.</p>
    </div>
  );
}

export default CourseCard;`,

    exampleExplanation:
      "В примера е създаден компонент CourseCard, който връща JSX структура. Компонентът съдържа заглавие и кратък текст и може да бъде използван многократно в различни части на приложението.",
    quizzes: [
      {
        id: "2-1",
        question: "Какво е JSX?",
        options: [
          "Разширение на JavaScript",
          "База данни",
          "CSS framework",
          "Node пакет",
        ],
        correctAnswer: 0,
      },
      {
        id: "2-2",
        question: "Компонентът трябва да връща?",
        options: ["JSX", "JSON", "CSS", "SQL"],
        correctAnswer: 0,
      },
      {
        id: "2-3",
        question: "Името на React компонент започва с?",
        options: ["Главна буква", "Малка буква", "Цифра", "Символ"],
        correctAnswer: 0,
      },
      {
        id: "2-4",
        question: "JSX се преобразува в?",
        options: ["React.createElement", "HTML", "CSS", "MongoDB"],
        correctAnswer: 0,
      },
      {
        id: "2-5",
        question: "Компонентите са?",
        options: ["Преизползваеми", "Еднократни", "Само CSS", "Само HTML"],
        correctAnswer: 0,
      },
    ],
  },

  {
    id: "3",
    title: "Props и State",
    description: "Разбери как компонентите обменят данни.",
    level: "Начинаещ",
    duration: "50 мин",
    videoUrl: "https://www.youtube.com/embed/4UZrsTqkcW4",
    documentationUrl: "https://react.dev/learn/state-a-components-memory",
    topics: ["Props", "State"],
    content: "Ще научиш разликите между props и state.",
    theory:
      "Props и State са две от най-важните концепции в React и се използват за управление на данните в приложението. Props представляват свойства, чрез които родителски компонент предава информация към дъщерен компонент. Те са само за четене и не могат да бъдат променяни от компонента, който ги получава. Това позволява по-добра организация на данните и ясно разделение на отговорностите между компонентите. State от своя страна представлява вътрешно състояние на компонента, което може да се променя по време на изпълнение на приложението. Когато стойността на State бъде променена, React автоматично обновява потребителския интерфейс. Това позволява създаването на динамични и интерактивни приложения. State често се използва за съхраняване на данни от форми, броячи, резултати от заявки към сървъра и други променливи стойности. Props и State често работят съвместно, като State се управлява в един компонент, а стойностите се предават към други компоненти чрез Props. Разбирането на тези две концепции е основополагащо за разработката на React приложения и за ефективното управление на данните в интерфейса.",

    exampleTitle: "Използване на Props и State",

    exampleCode: `import { useState } from "react";

function Counter({ title }) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{title}</h2>
      <p>Брой: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Увеличи
      </button>
    </div>
  );
}

export default Counter;`,

    exampleExplanation:
      "В примера свойството title се подава към компонента чрез Props, а променливата count се съхранява в State. При натискане на бутона стойността на count се увеличава и интерфейсът се обновява автоматично.",
    quizzes: [
      {
        id: "3-1",
        question: "Props се използват за?",
        options: ["Предаване на данни", "CSS", "Маршрутизация", "Бази данни"],
        correctAnswer: 0,
      },
      {
        id: "3-2",
        question: "State се управлява от?",
        options: ["Компонента", "CSS", "Браузъра", "HTML"],
        correctAnswer: 0,
      },
      {
        id: "3-3",
        question: "Props могат ли да се променят директно?",
        options: ["Да", "Не", "Само с CSS", "Само с API"],
        correctAnswer: 1,
      },
      {
        id: "3-4",
        question: "Кое съхранява локално състояние?",
        options: ["State", "Props", "HTML", "Router"],
        correctAnswer: 0,
      },
      {
        id: "3-5",
        question: "При промяна на state React?",
        options: [
          "Прерисува UI",
          "Изтрива компонента",
          "Рестартира приложението",
          "Нищо",
        ],
        correctAnswer: 0,
      },
    ],
  },

  {
    id: "4",
    title: "React Hooks",
    description: "Научи как работят useState и useEffect.",
    level: "Средно ниво",
    duration: "55 мин",
    videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
    documentationUrl: "https://react.dev/reference/react",
    topics: ["useState", "useEffect"],
    content: "Hooks добавят state и логика във функционални компоненти.",
    theory:
      "React Hooks са функционалност, въведена в React 16.8, която позволява използването на състояние и други React възможности във функционални компоненти. Преди появата на Hooks тези функционалности бяха достъпни основно чрез класови компоненти. Hooks значително опростяват разработката и правят кода по-четим и лесен за поддръжка. Един от най-често използваните Hooks е useState, който позволява създаване и управление на локално състояние в компонента. Друг важен Hook е useEffect, който се използва за изпълнение на странични ефекти като зареждане на данни от сървър, работа със събития или актуализиране на документа. React предоставя и други Hooks като useContext, useMemo и useCallback, които помагат за оптимизацията и организацията на приложението. Разработчиците могат също да създават собствени Custom Hooks за преизползване на логика между различни компоненти. Hooks насърчават по-добро разделяне на отговорностите и улесняват структурирането на кода. Благодарение на тях React приложенията стават по-гъвкави, по-лесни за разширяване и по-удобни за поддръжка. Познаването на Hooks е задължително за всеки съвременен React разработчик.",

    exampleTitle: "Използване на useState",

    exampleCode: `import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Брой: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Увеличи
      </button>
    </div>
  );
}

export default Counter;`,

    exampleExplanation:
      "В примера useState създава променлива count и функция setCount за нейното обновяване. При натискане на бутона стойността се увеличава и React автоматично обновява потребителския интерфейс.",
    quizzes: [
      {
        id: "4-1",
        question: "Кой hook управлява state?",
        options: ["useState", "useEffect", "useRouter", "useNode"],
        correctAnswer: 0,
      },
      {
        id: "4-2",
        question: "Кой hook управлява side effects?",
        options: ["useEffect", "useState", "useCSS", "useDOM"],
        correctAnswer: 0,
      },
      {
        id: "4-3",
        question: "Hooks могат да се използват в?",
        options: ["Функционални компоненти", "HTML", "CSS", "JSON"],
        correctAnswer: 0,
      },
      {
        id: "4-4",
        question: "useState връща?",
        options: [
          "Стойност и функция",
          "Само стойност",
          "Само функция",
          "Обект",
        ],
        correctAnswer: 0,
      },
      {
        id: "4-5",
        question: "Custom hooks се използват за?",
        options: ["Преизползваема логика", "Стилизация", "HTML", "Бази данни"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "5",
    title: "Работа с форми",
    description:
      "Научи как се създават, управляват и валидират форми в React приложения.",
    level: "Средно ниво",
    duration: "45 мин",
    videoUrl: "https://www.youtube.com/embed/IkMND33x0qQ",
    documentationUrl: "https://react.dev/reference/react-dom/components/input",
    topics: ["Forms", "Inputs", "Validation"],
    content:
      "В този модул ще работиш с input полета, controlled components и обработка на submit събития.",
    quizzes: [
      {
        id: "5-1",
        question: "Какво е controlled input?",
        options: [
          "Input, чиято стойност се управлява от React state",
          "Input без стойност",
          "CSS input",
          "HTML файл",
        ],
        correctAnswer: 0,
      },
      {
        id: "5-2",
        question: "Кое събитие се използва при изпращане на форма?",
        options: ["onSubmit", "onClick", "onHover", "onLoad"],
        correctAnswer: 0,
      },
      {
        id: "5-3",
        question: "Какво прави preventDefault()?",
        options: [
          "Спира стандартното поведение на формата",
          "Изтрива state",
          "Създава компонент",
          "Стартира router",
        ],
        correctAnswer: 0,
      },
      {
        id: "5-4",
        question: "Къде най-често се пази стойността на input поле?",
        options: ["В state", "В CSS", "В package.json", "В route"],
        correctAnswer: 0,
      },
      {
        id: "5-5",
        question: "Защо е нужна валидация на формите?",
        options: [
          "За проверка на въведените данни",
          "За промяна на цвета",
          "За стартиране на server",
          "За импорт на компоненти",
        ],
        correctAnswer: 0,
      },
    ],
  },

  {
    id: "6",
    title: "React Router",
    description:
      "Изгради навигация между страници, динамични routes и детайлни страници в React приложение.",
    level: "Средно ниво",
    duration: "50 мин",
    videoUrl: "https://www.youtube.com/embed/Ul3y1LXxzdU",
    documentationUrl: "https://reactrouter.com/en/main",
    topics: ["Routing", "Navigation", "Dynamic routes"],
    content:
      "Ще научиш как да използваш React Router за създаване на многостранично усещане в single-page приложения.",
    quizzes: [
      {
        id: "6-1",
        question: "За какво се използва React Router?",
        options: [
          "За навигация между страници",
          "За стилизиране",
          "За база данни",
          "За криптиране",
        ],
        correctAnswer: 0,
      },
      {
        id: "6-2",
        question: "Кой компонент описва отделен route?",
        options: ["Route", "Link", "Button", "Input"],
        correctAnswer: 0,
      },
      {
        id: "6-3",
        question: "Кой компонент се използва за navigation link?",
        options: ["Link", "Route", "Form", "State"],
        correctAnswer: 0,
      },
      {
        id: "6-4",
        question: "Какво представлява dynamic route?",
        options: [
          "Route с променлив параметър",
          "CSS клас",
          "Файл с изображения",
          "Static HTML",
        ],
        correctAnswer: 0,
      },
      {
        id: "6-5",
        question: "Кой hook може да чете route параметри?",
        options: ["useParams", "useState", "useEffect", "useContext"],
        correctAnswer: 0,
      },
    ],
  },

  {
    id: "7",
    title: "Context API",
    description:
      "Научи как да управляваш глобално състояние и да споделяш данни между различни компоненти.",
    level: "Средно ниво",
    duration: "50 мин",
    videoUrl: "https://www.youtube.com/embed/5LrDIWkK_Bc",
    documentationUrl:
      "https://react.dev/learn/passing-data-deeply-with-context",
    topics: ["Context", "Provider", "Global state"],
    content:
      "Този модул показва как Context API помага за избягване на prop drilling и за управление на общи данни.",
    quizzes: [
      {
        id: "7-1",
        question: "За какво се използва Context API?",
        options: [
          "За споделяне на данни между компоненти",
          "За писане на CSS",
          "За routing",
          "За създаване на база данни",
        ],
        correctAnswer: 0,
      },
      {
        id: "7-2",
        question: "Какво е Provider?",
        options: [
          "Компонент, който подава стойност към context",
          "CSS селектор",
          "HTML tag",
          "Router метод",
        ],
        correctAnswer: 0,
      },
      {
        id: "7-3",
        question: "Какво е prop drilling?",
        options: [
          "Предаване на props през много нива компоненти",
          "Изтриване на props",
          "Създаване на form",
          "Използване на CSS",
        ],
        correctAnswer: 0,
      },
      {
        id: "7-4",
        question: "Кой hook чете context стойност?",
        options: ["useContext", "useState", "useEffect", "useParams"],
        correctAnswer: 0,
      },
      {
        id: "7-5",
        question: "Context API е полезен за?",
        options: [
          "Глобални данни като user или theme",
          "Само изображения",
          "Само CSS",
          "Само backend",
        ],
        correctAnswer: 0,
      },
    ],
  },

  {
    id: "8",
    title: "Работа с API",
    description:
      "Научи как React приложенията комуникират с backend чрез HTTP заявки.",
    level: "Средно ниво",
    duration: "55 мин",
    videoUrl: "https://www.youtube.com/embed/cuEtnrL9-H0",
    documentationUrl:
      "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
    topics: ["Fetch", "Axios", "HTTP"],
    content:
      "Ще разгледаш как се извличат, изпращат и обработват данни от външни услуги и backend API.",
    quizzes: [
      {
        id: "8-1",
        question: "За какво се използва API?",
        options: [
          "За комуникация между приложения",
          "За CSS стилове",
          "За HTML структура",
          "За създаване на компоненти",
        ],
        correctAnswer: 0,
      },
      {
        id: "8-2",
        question: "Кой метод се използва често за HTTP заявки в JavaScript?",
        options: ["fetch", "map", "filter", "reduce"],
        correctAnswer: 0,
      },
      {
        id: "8-3",
        question: "Какво означава GET заявка?",
        options: [
          "Извличане на данни",
          "Изтриване на данни",
          "Създаване на CSS",
          "Стартиране на React",
        ],
        correctAnswer: 0,
      },
      {
        id: "8-4",
        question: "Какво означава POST заявка?",
        options: [
          "Изпращане/създаване на данни",
          "Изтриване на компонент",
          "Промяна на route",
          "Създаване на HTML",
        ],
        correctAnswer: 0,
      },
      {
        id: "8-5",
        question: "Защо се използва loading state при API заявки?",
        options: [
          "За да покажем, че данните се зареждат",
          "За да сменим цвета на страницата",
          "За да изтрием state",
          "За да спрем routing",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "9",
    title: "Автентикация",
    description:
      "Разбери как работят регистрация, вход, изход и потребителски сесии.",
    level: "Средно ниво",
    duration: "60 мин",
    videoUrl: "https://www.youtube.com/embed/PKwu15ldZ7k",
    documentationUrl: "https://jwt.io/introduction",
    topics: ["Login", "Register", "JWT"],
    content:
      "Този модул обяснява основите на authentication flow и работа с токени.",
    quizzes: [
      {
        id: "9-1",
        question: "Какво е JWT?",
        options: [
          "Token за автентикация",
          "CSS библиотека",
          "База данни",
          "React Hook",
        ],
        correctAnswer: 0,
      },
      {
        id: "9-2",
        question: "Къде обикновено се пази token?",
        options: ["localStorage", "CSS файл", "HTML", "package.json"],
        correctAnswer: 0,
      },
      {
        id: "9-3",
        question: "Какво прави login процесът?",
        options: [
          "Идентифицира потребителя",
          "Създава CSS",
          "Стартира React",
          "Изтрива база данни",
        ],
        correctAnswer: 0,
      },
      {
        id: "9-4",
        question: "Logout премахва?",
        options: ["Потребителската сесия", "CSS", "Компоненти", "Маршрути"],
        correctAnswer: 0,
      },
      {
        id: "9-5",
        question: "Автентикацията служи за?",
        options: [
          "Проверка на самоличността",
          "Стилизиране",
          "Маршрутизация",
          "Форми",
        ],
        correctAnswer: 0,
      },
    ],
  },

  {
    id: "10",
    title: "Protected Routes",
    description:
      "Научи как да защитаваш страници според ролята на потребителя.",
    level: "Напреднал",
    duration: "45 мин",
    videoUrl: "https://www.youtube.com/embed/X8eAbu1RWZ4",
    documentationUrl: "https://reactrouter.com/en/main/start/overview",
    topics: ["Authorization", "Roles"],
    content:
      "Този модул показва как се ограничават страници само за логнати потребители.",
    quizzes: [
      {
        id: "10-1",
        question: "Protected Route се използва за?",
        options: [
          "Ограничаване на достъпа",
          "Стилизиране",
          "API заявки",
          "Форми",
        ],
        correctAnswer: 0,
      },
      {
        id: "10-2",
        question: "Кой потребител има достъп до admin панел?",
        options: ["Admin", "Guest", "Всички", "Никой"],
        correctAnswer: 0,
      },
      {
        id: "10-3",
        question: "Какво се проверява най-често?",
        options: ["Token", "CSS", "HTML", "MongoDB"],
        correctAnswer: 0,
      },
      {
        id: "10-4",
        question: "Protected Routes подобряват?",
        options: ["Сигурността", "Цветовете", "Шрифтовете", "Снимките"],
        correctAnswer: 0,
      },
      {
        id: "10-5",
        question: "Authorization означава?",
        options: ["Разрешение за достъп", "Регистрация", "Изход", "Валидация"],
        correctAnswer: 0,
      },
    ],
  },

  {
    id: "11",
    title: "Loading и Error States",
    description:
      "Подобри потребителското изживяване чрез loading индикатори и обработка на грешки.",
    level: "Средно ниво",
    duration: "35 мин",
    videoUrl: "https://www.youtube.com/embed/4UZrsTqkcW4",
    documentationUrl: "https://react.dev/learn/conditional-rendering",
    topics: ["Loading", "Errors"],
    content:
      "Ще научиш как да показваш loading състояния и съобщения за грешки.",
    quizzes: [
      {
        id: "11-1",
        question: "Loading state показва?",
        options: ["Че данните се зареждат", "Грешка", "Изход", "Форма"],
        correctAnswer: 0,
      },
      {
        id: "11-2",
        question: "Error state се показва при?",
        options: [
          "Възникнала грешка",
          "Успешен login",
          "CSS проблем",
          "Смяна на страница",
        ],
        correctAnswer: 0,
      },
      {
        id: "11-3",
        question: "Loading spinner подобрява?",
        options: ["UX", "Backend", "Database", "JWT"],
        correctAnswer: 0,
      },
      {
        id: "11-4",
        question: "Conditional rendering се използва за?",
        options: [
          "Показване на различно съдържание",
          "Създаване на база данни",
          "Routing",
          "JWT",
        ],
        correctAnswer: 0,
      },
      {
        id: "11-5",
        question: "Добрата обработка на грешки прави приложението?",
        options: [
          "По-професионално",
          "По-бавно",
          "По-малко сигурно",
          "По-малко удобно",
        ],
        correctAnswer: 0,
      },
    ],
  },

  {
    id: "12",
    title: "Финален React проект",
    description:
      "Приложи наученото чрез изграждане на цялостно React приложение.",
    level: "Напреднал",
    duration: "90 мин",
    videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
    documentationUrl: "https://react.dev/",
    topics: ["Project", "Practice"],
    content: "В последния модул ще комбинираш всички знания в реален проект.",
    quizzes: [
      {
        id: "12-1",
        question: "Финалният проект има за цел?",
        options: [
          "Да приложиш наученото",
          "Да създадеш CSS",
          "Да изтриеш данни",
          "Да инсталираш React",
        ],
        correctAnswer: 0,
      },
      {
        id: "12-2",
        question: "Добрата архитектура прави проекта?",
        options: ["По-поддържаем", "По-бавен", "По-труден", "По-малък"],
        correctAnswer: 0,
      },
      {
        id: "12-3",
        question: "Кои знания се комбинират тук?",
        options: [
          "Всички предишни модули",
          "Само JSX",
          "Само CSS",
          "Само Router",
        ],
        correctAnswer: 0,
      },
      {
        id: "12-4",
        question: "Практиката помага за?",
        options: [
          "По-добро усвояване",
          "По-малко знания",
          "По-малко код",
          "По-малко UI",
        ],
        correctAnswer: 0,
      },
      {
        id: "12-5",
        question: "Финалният проект е?",
        options: ["Практическо приложение", "CSS файл", "JWT token", "Route"],
        correctAnswer: 0,
      },
    ],
  },
];
