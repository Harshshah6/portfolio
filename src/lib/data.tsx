import nextImg from "../../public/personcoding.jpg"

export const skills = [
    "Java",
    "Kotlin",
    "php",
    "C++",
    "Python",
    "Javascript",
    "Typescript",
    "C",
    "Tailwind",
    "Bootstrap",
    "Node JS",
    "React JS",
    "Next JS",
    "Express JS",
    "MongoDB",
    "Firebase",
    "Appwrite",
] as const;

export const projectsData = [
    {
        title: "ShareClip",
        description:
            "A tool for securely sharing files and text over the internet, ensuring privacy with temporary storage and automatic deletion after a set validity period.",
        tags: ["ReactJS", "ChakraUI", "Appwrite", "Vercel", "JavaScript"],
        imageUrl: nextImg,
        url: "https://shareclip.harshshah.me",
    },
    {
        title: "AgrEvolve",
        description:
            "A Dashboard to provide one stop solution for all agriculture related information for farmers and integrating an API",
        tags: ["NextJS", "NodeJS", "ShadcnUI", "REST API", "Postman"],
        imageUrl: nextImg,
        url: "https://github.com/shaharsh624/agrevolve",
    },
    {
        title: "AnswerLLM",
        description:
            "A Question and Answer System that can answer queries based on already learnt Question-Answers.",
        tags: ["Google Gemini", "Langchain", "FAISS", "MongoDB", "Streamlit"],
        imageUrl: nextImg,
        url: "https://github.com/shaharsh624/AnswerLLM",
    },
    {
        title: "WattWatch",
        description:
            "An innovative app that helps to monitor and manage water & electricity consumption. Developed in Smart India Hackathon.",
        tags: ["Flutter", "Flask", "MongoDB", "Firebase", "Google Maps API"],
        imageUrl: nextImg,
        url: "https://github.com/shaharsh624/WattWatch",
    },
    {
        title: "StockX",
        description:
            "A Web App that provides real-time Stock Market Data and Predictions using Machine Learning powered by News and Historical data.",
        tags: ["HTML", "CSS", "JavaScript", "Flask", "Machine Learning"],
        imageUrl: nextImg,
        url: "https://github.com/shaharsh624/StockX",
    },
    {
        title: "ChatApp",
        description:
            "A real-time messaging app with end-to-end encryption and intrusion detection for secure, private communication.",
        tags: [
            "ReactJS",
            "Firebase",
            "Privacy",
            "Secure",
            "Intrusion Detection",
        ],
        imageUrl: nextImg,
        url: "https://chatapp.harshshah.me",
    },
] as const;