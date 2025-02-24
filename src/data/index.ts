import {
    BookOpen,
    Bot,
    Frame,
    Map,
    PieChart,
    Settings2,
    SquareTerminal,
} from "lucide-react"

export const howToPlay = [
    {
        id: 1,
        title: "Start a New Game",
        paragraphOne: "Tap the 'Start Game' button to begin a new game.",
        paragraphTwo: "You can also choose the difficulty level: Easy, Medium, or Hard"
    },
    {
        id: 2,
        title: "Answer Questions",
        paragraphOne: "Tap the 'Start Game' button to begin a new game.",
        paragraphTwo: "You can also choose the difficulty level: Easy, Medium, or Hard"
    },
    {
        id: 3,
        title: "Earn Points",
        paragraphOne: "Tap the 'Start Game' button to begin a new game.",
        paragraphTwo: "You can also choose the difficulty level: Easy, Medium, or Hard"
    },
    {
        id: 4,
        title: "Achievements and Leaderboards",
        paragraphOne: "Tap the 'Start Game' button to begin a new game.",
        paragraphTwo: "You can also choose the difficulty level: Easy, Medium, or Hard"
    }
]

export const playMode = [
    {
        id: 1,
        mode: "SINGLE PLAYER MODE",
        Icon: ""
    },
    {
        id: 2,
        mode: "MULTIPLAYER PLAYER MODE",
        Icon: ""
    },
    {
        id: 3,
        mode: "CHALLENGE MODE",
        Icon: ""
    }
]

export const sidebarData = {
    navMain: [
        {
            title: "Home",
            url: "/",
            icon: SquareTerminal,
        },
        {
            title: "Play Mode",
            url: "play-mode",
            icon: Bot,
        },
        {
            title: "Leaderboard",
            url: "leaderboard",
            icon: BookOpen,
        },
        {
            title: "Categories",
            url: "categories",
            icon: Settings2,
        },
        {
            title: "Multiplayer",
            url: "multiplayer",
            icon: Settings2,
        },
        {
            title: "Gaming stats",
            url: "gaming-stats",
            icon: Settings2,
        },
    ],
    NavMinor: [
        {
            name: "How to play",
            url: "how-to-play",
            icon: Frame,
        },
        {
            name: "Settings",
            url: "settings",
            icon: PieChart,
        },
        {
            name: "Help",
            url: "help",
            icon: Map,
        },
        {
            name: "Logout",
            url: "logout",
            icon: Map,
        },
    ],
}