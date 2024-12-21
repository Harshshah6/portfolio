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
        title: "SaavnMp3",
        description:"A simple music player inspired by spotify and developed using the unofficial JioSaavn API. Has an lot of features like Search for an Artist, Song, Playlist, Albums. Not just search this app also provides you functionality to play the songs and view the artist info and much more.",
        longDescription:"A simple music player inspired by spotify and developed using the unofficial JioSaavn API. Has a lot of features like Search for an Artist, Song, Playlist, Albums. Not just search this app also provides you functionality to play the songs and view the artist info and much more.\n\nFeatures:-\n\nNo Ads\nPlay tracks in background\nLatest tracks available\nSearch for Artists\nSearch for Tracks\nSearch for Albums\nSearch for Playlists\nDoesn\'t collect any user data\nUI inspired by spotify\nmuch more...",
        tags: ["Java 17", "Saavn-API", "Android Studio", "Glide", "Picasso", "Gson", "OkHttp", "SwipeRefreshLayout", "Shimmer", "OverscrollDecor", "SSP & SDP"],
        imageUrl: nextImg,
        screenShots: [
            "https://github.com/Harshshah6/SaavnMp3-Android/raw/master/docs/home.png",
            "https://github.com/Harshshah6/SaavnMp3-Android/raw/master/docs/artists.png",
            "https://github.com/Harshshah6/SaavnMp3-Android/raw/master/docs/playlist.png",
            "https://github.com/Harshshah6/SaavnMp3-Android/raw/master/docs/search.png",
            "https://github.com/Harshshah6/SaavnMp3-Android/raw/master/docs/track.png",
            "https://github.com/Harshshah6/SaavnMp3-Android/raw/master/docs/notification.png",
        ],
        liveUrl:"https://github.com/Harshshah6/SaavnMp3-Android/raw/refs/heads/master/app/release/app-release.apk",
        url: "https://github.com/Harshshah6/Threads-Clone-Android.git",
    },
    {
        title: "Social Media App",
        description:
            "A Social Media Application inspired by Meta Threads for android using Firebase for Database and supabase for storage. Clean and minimal design.",
        longDescription:
            "A Social Media Application inspired by Meta Threads for android using Firebase for Database and supabase for storage. Clean and minimal design.",
        tags: ["Java", "Firebase", "Supabase", "Android Studio", "Secure"],
        imageUrl: nextImg,
        screenShots: [],
        liveUrl:"",
        url: "https://github.com/Harshshah6/Threads-Clone-Android.git",
    },
    {
        title: "Local FTP",
        description:
            "An Android Application that provides you the local FTP (File Transfer Protocol) service to share files between multiple devices on the same network.",
        tags: ["Java", "Kotlin", "Minimal", "Android Studio", "Secure", "No Internet Required"],
        imageUrl: nextImg,
        screenShots: [],
        liveUrl:"",
        longDescription:"",
        url: "/local-ftp-demo",
    },
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
        screenShots: [],
        liveUrl:"",
        longDescription:"",
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
        screenShots: [],
        liveUrl:"",
        longDescription:"",
        imageUrl: nextImg,
        url: "https://github.com/Harshshah6/KotlinMultiplatform-HelloWorld.git",
    },
] as const;