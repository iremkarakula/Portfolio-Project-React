import { Code, GraduationCap } from "lucide-react"

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Java",
    "Spring",
    "Redux",
    "RESTApi",
    "Hibernate",
    "MongoDB",
    "PostgreSQL",
    "C#",
    ".NET",
    "Git",
]

export const projectsData = [
    {
        id: 1,
        category: "Frontend",
        year: "2024",
        title: "Pizza Order Project",
        shortDescription: "",
        longDesciption: "This is a pizza shop order form application built with React that allows users to customize their pizza by selecting various ingredients. The app features a user-friendly interface, which is fully responsive and styled using CSS.",
        features: ["React Hooks: Utilized React hooks to manage component state and handle dynamic changes as the user selects different pizza ingredients.",
            "Global State Management: Implemented global state management using props to ensure consistent data flow across components.",
            "Responsive Design: Styled the app with CSS Flexbox and Bootstrap to create a visually appealing, mobile-friendly layout that adapts to various screen sizes.",
            "Form Management: Managed the entire form using React state, with no external form libraries like React Hook Form, providing full control over form inputs.",
            "React Router DOM and Cypress: Integrated React Router DOM for smooth navigation between pages and implemented Cypress for end-to-end testing to ensure functionality and a seamless user experience."
        ],
        tags: ["React", "Javascript", "CSS", "HTML"],
        images: [],
    },
    {
        id: 2,
        category: "Backend",
        year: "2025",
        title: "Book Review Project",
        shortDescription: "",
        longDesciption: "",
        features: [],
        tags: ["Java", "Spring", "Hibernate", "Lombok", "JWT", "SQL", "PostgreSQL"],
        images: [],
    },
    {
        id: 3,
        category: "Frontend",
        year: "2024",
        title: "Pizza Order Project",
        shortDescription: "",
        longDesciption: "",
        features: [],
        tags: ["React", "Javascript", "CSS", "HTML"],
        images: [],
    },
    {
        id: 4,
        category: "Backend",
        year: "2025",
        title: "Book Review Project",
        shortDescription: "",
        longDesciption: "",
        features: [],
        tags: ["Java", "Spring", "Hibernate", "Lombok", "JWT", "SQL", "PostgreSQL"],
        images: [],
    },
]

export const experiencesData = [
    {
        title: "Full-stack Developer",
        company: "Workintech",
        description:
            "I completed a 6-month intensive Full-Stack Developer bootcamp.",
        icon: Code,
        date: "2024-present",
    },

    {
        title: "Student",
        company: "Middle East Technical University",
        description:
            "Mathematics education",
        icon: GraduationCap,
        date: "2022",
    },

]