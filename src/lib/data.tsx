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
        title: "Social Media App",
        description:
            "A Social Media Application inspired by Meta Threads for android using Firebase for Database and supabase for storage. Clean and minimal design.",
        tags: ["Java", "Firebase", "Supabase", "Android Studio", "Secure"],
        imageUrl: nextImg,
        url: "https://github.com/Harshshah6/Threads-Clone-Android.git",
    },
    {
        title: "Local FTP",
        description:
            "An Android Application that provides you the local FTP (File Transfer Protocol) service to share files between multiple devices on the same network.",
        tags: ["Java", "Kotlin", "Minimal", "Android Studio", "Secure", "No Internet Required"],
        imageUrl: nextImg,
        url: "/local-ftp-demo",
    },
    // {
    //     title: "AnswerLLM",
    //     description:
    //         "A Question and Answer System that can answer queries based on already learnt Question-Answers.",
    //     tags: ["Google Gemini", "Langchain", "FAISS", "MongoDB", "Streamlit"],
    //     imageUrl: nextImg,
    //     url: "https://github.com/shaharsh624/AnswerLLM",
    // },
    // {
    //     title: "WattWatch",
    //     description:
    //         "An innovative app that helps to monitor and manage water & electricity consumption. Developed in Smart India Hackathon.",
    //     tags: ["Flutter", "Flask", "MongoDB", "Firebase", "Google Maps API"],
    //     imageUrl: nextImg,
    //     url: "https://github.com/shaharsh624/WattWatch",
    // },
    // {
    //     title: "StockX",
    //     description:
    //         "A Web App that provides real-time Stock Market Data and Predictions using Machine Learning powered by News and Historical data.",
    //     tags: ["HTML", "CSS", "JavaScript", "Flask", "Machine Learning"],
    //     imageUrl: nextImg,
    //     url: "https://github.com/shaharsh624/StockX",
    // },
    {
        title: "ChatApp",
        description:
            "A real-time messaging app with end-to-end encryption and intrusion detection for secure, private communication.",
        tags: [
            "Java",
            "Firebase",
            "Privacy",
            "Secure",
            "Intrusion Detection",
        ],
        imageUrl: nextImg,
        url: "/chat-app-demo",
    },
    {
        title: "Multiplatform App",
        description:
            "A multiplatform Application, platform supporting like Android, IOS, Windows, MacOS, Linux. made using Kotlin Multiplatform On Android Studio.",
        tags: [
            "Kotlin",
            "Firebase",
            "Jetpack",
            "Compose",
            "Multiplatform",
        ],
        imageUrl: nextImg,
        url: "/chat-app-demo",
    },
] as const;