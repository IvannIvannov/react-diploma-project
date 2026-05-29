import { useState, useEffect } from "react";
import { CoursesContext } from "./CoursesContext";
import type { Course } from "./CoursesContext";

export const CoursesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [courses, setCourses] = useState<Course[]>(() => {
    try {
      const stored = localStorage.getItem("courses");

      if (stored) {
        const parsed: Course[] = JSON.parse(stored);

        return parsed.map((course) => ({
          ...course,
          quizzes: course.quizzes || [],
        }));
      }

      return [
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
            "В този модул ще разбереш какво представлява React, защо се използва и как помага за изграждането на динамични уеб приложения.",
          quizzes: [
            {
              id: "1-1",
              question: "Какво представлява React?",
              options: [
                "База данни",
                "JavaScript библиотека за изграждане на потребителски интерфейси",
                "CSS framework",
                "Backend framework",
              ],
              correctAnswer: 1,
            },
            {
              id: "1-2",
              question: "Какво е компонент в React?",
              options: [
                "Преизползваема част от потребителския интерфейс",
                "Само CSS файл",
                "Тип база данни",
                "HTML страница без логика",
              ],
              correctAnswer: 0,
            },
            {
              id: "1-3",
              question: "Какво е JSX?",
              options: [
                "Разширение на JavaScript, което позволява писане на UI структура",
                "Нова база данни",
                "CSS библиотека",
                "Метод за криптиране",
              ],
              correctAnswer: 0,
            },
            {
              id: "1-4",
              question: "Кое е вярно за React приложенията?",
              options: [
                "Изграждат се чрез компоненти",
                "Не използват JavaScript",
                "Работят само без браузър",
                "Не могат да имат state",
              ],
              correctAnswer: 0,
            },
            {
              id: "1-5",
              question: "Каква е основната цел на React?",
              options: [
                "Да създава потребителски интерфейси",
                "Да управлява операционна система",
                "Да замени HTML напълно",
                "Да създава само бази данни",
              ],
              correctAnswer: 0,
            },
          ],
        },
        {
          id: "2",
          title: "JSX и компоненти",
          description:
            "Научи как работи JSX синтаксисът и как да създаваш преизползваеми React компоненти.",
          level: "Начинаещ",
          duration: "45 мин",
          videoUrl: "https://www.youtube.com/embed/SqcY0GlETPk",
          documentationUrl: "https://react.dev/learn/your-first-component",
          topics: ["JSX", "Компоненти", "Props"],
          content:
            "Този модул разглежда JSX, структурата на компонентите и начина, по който можеш да разделяш интерфейса на малки и преизползваеми части.",
          quizzes: [],
        },
        {
          id: "3",
          title: "Props и State",
          description:
            "Разбери как компонентите получават данни чрез props и как управляват вътрешно състояние чрез state.",
          level: "Начинаещ",
          duration: "50 мин",
          videoUrl: "https://www.youtube.com/embed/4UZrsTqkcW4",
          documentationUrl: "https://react.dev/learn/state-a-components-memory",
          topics: ["Props", "State", "Data flow"],
          content:
            "Ще научиш разликата между props и state, как се предават данни между компоненти и как React обновява интерфейса при промяна на състоянието.",
          quizzes: [],
        },
        {
          id: "4",
          title: "React Hooks",
          description:
            "Научи как useState, useEffect и custom hooks помагат за управление на логика във функционални компоненти.",
          level: "Средно ниво",
          duration: "55 мин",
          videoUrl: "https://www.youtube.com/embed/TNhaISOUy6Q",
          documentationUrl: "https://react.dev/reference/react",
          topics: ["useState", "useEffect", "Custom Hooks"],
          content:
            "Този модул обяснява как hooks позволяват на функционалните компоненти да управляват state, side effects и преизползваема логика.",
          quizzes: [],
        },
        {
          id: "5",
          title: "Работа с форми",
          description:
            "Научи как се създават, управляват и валидират форми в React приложения.",
          level: "Средно ниво",
          duration: "45 мин",
          videoUrl: "https://www.youtube.com/embed/IkMND33x0qQ",
          documentationUrl:
            "https://react.dev/reference/react-dom/components/input",
          topics: ["Forms", "Inputs", "Validation"],
          content:
            "В този модул ще работиш с input полета, controlled components, submit събития и основна валидация на потребителски данни.",
          quizzes: [],
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
          quizzes: [],
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
            "Този модул показва как Context API помага за избягване на prop drilling и за управление на общи данни като потребител, курсове или настройки.",
          quizzes: [],
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
          quizzes: [],
        },
        {
          id: "9",
          title: "Автентикация",
          description:
            "Разбери как работят регистрация, вход, изход и запазване на потребителска сесия.",
          level: "Средно ниво",
          duration: "60 мин",
          videoUrl: "https://www.youtube.com/embed/PKwu15ldZ7k",
          documentationUrl: "https://jwt.io/introduction",
          topics: ["Login", "Register", "JWT", "Session"],
          content:
            "Този модул обяснява основите на authentication flow, работа с token-и и съхраняване на потребителска информация.",
          quizzes: [],
        },
        {
          id: "10",
          title: "Protected Routes",
          description:
            "Научи как да ограничаваш достъпа до определени страници според ролята или статуса на потребителя.",
          level: "Напреднал",
          duration: "45 мин",
          videoUrl: "https://www.youtube.com/embed/X8eAbu1RWZ4",
          documentationUrl: "https://reactrouter.com/en/main/start/overview",
          topics: ["Protected routes", "Roles", "Authorization"],
          content:
            "Ще разбереш как да изграждаш защитени routes за logged users и admin потребители, така че приложението да бъде по-сигурно и структурирано.",
          quizzes: [],
        },
        {
          id: "11",
          title: "Loading и Error States",
          description:
            "Подобри потребителското изживяване чрез loading индикатори, съобщения за грешки и празни състояния.",
          level: "Средно ниво",
          duration: "35 мин",
          videoUrl: "https://www.youtube.com/embed/4UZrsTqkcW4",
          documentationUrl: "https://react.dev/learn/conditional-rendering",
          topics: ["Loading", "Errors", "Conditional rendering"],
          content:
            "Този модул показва как да направиш приложението по-професионално чрез правилно показване на зареждане, грешки и fallback съдържание.",
          quizzes: [],
        },
        {
          id: "12",
          title: "Финален React проект",
          description:
            "Приложи наученото чрез изграждане на цялостно React приложение с курсове, тестове и потребителска логика.",
          level: "Напреднал",
          duration: "90 мин",
          videoUrl: "https://www.youtube.com/embed/bMknfKXIFA8",
          documentationUrl: "https://react.dev/",
          topics: ["Project", "Architecture", "Practice"],
          content:
            "В последния модул ще комбинираш компоненти, routing, state management, authentication и работа с данни в завършен практически проект.",
          quizzes: [],
        },
      ];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);

  const addCourse = (course: { title: string; description: string }) => {
    const newCourse = {
      id: Date.now().toString(),
      ...course,
      level: "Начинаещ",
      duration: "30 мин",
      videoUrl: "",
      documentationUrl: "",
      topics: [],
      content: "",
      quizzes: [],
    };

    setCourses((prev) => [...prev, newCourse]);
  };

  const deleteCourse = (id: string) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
  };

  const updateCourse = (
    id: string,
    updatedData: { title: string; description: string },
  ) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id ? { ...course, ...updatedData } : course,
      ),
    );
  };

  const addQuiz = (
    courseId: string,
    quiz: {
      question: string;
      options: string[];
      correctAnswer: number;
    },
  ) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === courseId
          ? {
              ...course,
              quizzes: [
                ...(course.quizzes || []),
                {
                  id: Date.now().toString(),
                  ...quiz,
                },
              ],
            }
          : course,
      ),
    );
  };

  return (
    <CoursesContext.Provider
      value={{
        courses,
        addCourse,
        deleteCourse,
        updateCourse,
        addQuiz,
      }}
    >
      {children}
    </CoursesContext.Provider>
  );
};

export default CoursesProvider;
