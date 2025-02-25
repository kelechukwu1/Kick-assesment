import { BiHomeAlt2, BiCategory, BiHelpCircle } from "react-icons/bi";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { MdOutlineLeaderboard } from "react-icons/md";
import { IoIosPeople, IoMdLogOut } from "react-icons/io";
import { ImStatsBars } from "react-icons/im";
import { IoSettingsOutline } from "react-icons/io5";
import { SiReadthedocs } from "react-icons/si";

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
        Icon: "/single.png"
    },
    {
        id: 2,
        mode: "MULTIPLAYER PLAYER MODE",
        Icon: "/multi.png"
    },
    {
        id: 3,
        mode: "CHALLENGE MODE",
        Icon: "/challenge.png"
    }
]

export const sidebarData = {
    navMain: [
        {
            title: "Home",
            url: "/",
            icon: BiHomeAlt2,
        },
        {
            title: "Play Mode",
            url: "play-mode",
            icon: AiOutlinePlayCircle,
        },
        {
            title: "Leaderboard",
            url: "leaderboard",
            icon: MdOutlineLeaderboard,
        },
        {
            title: "Categories",
            url: "categories",
            icon: BiCategory,
        },
        {
            title: "Multiplayer",
            url: "multiplayer",
            icon: IoIosPeople,
        },
        {
            title: "Gaming stats",
            url: "gaming-stats",
            icon: ImStatsBars,
        },
    ],
    NavMinor: [
        {
            name: "How to play",
            url: "how-to-play",
            icon: SiReadthedocs,
        },
        {
            name: "Settings",
            url: "settings",
            icon: IoSettingsOutline,
        },
        {
            name: "Help",
            url: "help",
            icon: BiHelpCircle,
        },
        {
            name: "Logout",
            url: "logout",
            icon: IoMdLogOut,
        },
    ],
}