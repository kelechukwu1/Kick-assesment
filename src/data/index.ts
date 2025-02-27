//This file contains dummy data I used across the application
import { DifficultyOption, Question } from "@/types"

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
    },
    {
        id: 5,
        title: "Game Over",
        paragraphOne: "The game ends when you answer a question incorrectly, run out of time, or finish all the questions.",
        paragraphTwo: "Your total points will be displayed along with your rank",
        paragraphThree: "Share your score on social media and challenge your friends to beat your high score."
    }
]

export const playMode = [
    {
        id: 1,
        mode: "SINGLE PLAYER MODE",
        Icon: "/single.svg"
    },
    {
        id: 2,
        mode: "MULTI PLAYER MODE",
        Icon: "/multi.svg"
    },
    {
        id: 3,
        mode: "CHALLENGE MODE",
        Icon: "/challenge.svg"
    }
]

export const sidebarData = {
    navMain: [
        {
            title: "Home",
            url: "/",
            icon: "/home.svg",
        },
        {
            title: "Play Mode",
            url: "play-mode",
            icon: "/play.svg",
        },
        {
            title: "Leaderboard",
            url: "leaderboard",
            icon: "/leaderboard.svg",
        },
        {
            title: "Categories",
            url: "categories",
            icon: "/categories.svg",
        },
        {
            title: "Multiplayer",
            url: "multiplayer",
            icon: "/multiplayer.svg",
        },
        {
            title: "Gaming stats",
            url: "gaming-stats",
            icon: "/stats.svg",
        },
    ],
    NavMinor: [
        {
            name: "How to play",
            url: "how-to-play",
            icon: "/how-to-play.svg",
        },
        {
            name: "Settings",
            url: "settings/withdrawal",
            icon: "/settings.svg",
        },
        {
            name: "Help",
            url: "help",
            icon: "/help.svg",
        },
        {
            name: "Logout",
            url: "logout",
            icon: "/logout.svg",
        },
    ],
}

export const leaderboardData = [
    {
        id: 1,
        points: "1720pts",
        icon: "",
        name: "Francis",
        coin: "/gold.svg"
    },
    {
        id: 2,
        points: "1720pts",
        icon: "",
        name: "Francis",
        coin: "/gold.svg"
    },
    {
        id: 3,
        points: "1720pts",
        icon: "",
        name: "Francis",
        coin: "/gold.svg"
    },
    {
        id: 4,
        points: "1720pts",
        icon: "",
        name: "Francis",
        coin: "/gold.svg"
    },
    {
        id: 5,
        points: "1720pts",
        icon: "",
        name: "Francis",
        coin: "/gold.svg"
    },
    {
        id: 6,
        points: "1720pts",
        icon: "",
        name: "Francis",
        coin: "/gold.svg"
    },
    {
        id: 7,
        points: "1720pts",
        icon: "",
        name: "Francis",
        coin: "/gold.svg"
    },
    {
        id: 8,
        points: "1720pts",
        icon: "",
        name: "Francis",
        coin: "/gold.svg"
    }
]

export const categoriesData = [
    {
        id: 1,
        title: "General Football Trivia",
        icon: "/football.svg",
        color: "#8743ED"
    },
    {
        id: 2,
        title: "Championships and Tournaments",
        icon: "/championship.svg",
        color: "#C85B54"
    },
    {
        id: 3,
        title: "League Specific Trivia",
        icon: "/league.svg",
        color: "#6C7E92"
    },
    {
        id: 4,
        title: "World Cup Trivia",
        icon: "/world.svg",
        color: "#FEFCAF"
    }, {
        id: 5,
        title: "Historical Moments",
        icon: "/historical-moment.svg",
        color: "#FC0106"
    },
    {
        id: 6,
        title: "Team Specific Trivia",
        icon: "/team.svg",
        color: "#E3E7F1"
    }
    ,
    {
        id: 7,
        title: "Championships and Tournaments",
        icon: "/championship.svg",
        color: "#C85B54"
    },
    {
        id: 8,
        title: "League Specific Trivia",
        icon: "/league.svg",
        color: "#6C7E92"
    }
    , {
        id: 9,
        title: "World Cup Trivia",
        icon: "/world.svg",
        color: "#FEFCAF"
    }
    , {
        id: 10,
        title: "Historical Moments",
        icon: "/historical-moment.svg",
        color: "#FC0106"
    }
]

export const challenges = [
    {
        title: "League Specific Trivia",
        description: "Select your favorite team and access trivia questions specific to the team.",
        icon: "/league.svg",
    },
    {
        title: "World Cup Trivia",
        description: "A section dedicated to World Cup trivia questions during tournament seasons.",
        icon: "/world.svg",
    },
    {
        title: "General Football Trivia",
        description: "Test your knowledge on various aspects of football, history, and memorable moments.",
        icon: "/football.svg",
    },
    {
        title: "League Specific Trivia",
        description: "Select your favorite team and access trivia questions specific to the team.",
        icon: "/league.svg",
    },
]

export const settingsLinks = [
    {
        title: "General settings",
        description: "Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac consectetur sit volutpat.",
        href: "/settings/general",
    },
    {
        title: "Game settings",
        description: "Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac consectetur sit volutpat.",
        href: "/settings/game",
    },
    {
        title: "Profile settings",
        description: "Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac consectetur sit volutpat.",
        href: "/settings/profile",
    },
    {
        title: "Withdrawal settings",
        description: "Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac consectetur sit volutpat.",
        href: "/settings/withdrawal",
    },
    {
        title: "Feedback & Support",
        description: "Lorem ipsum dolor sit amet consectetur. Quam nulla nunc ac consectetur sit volutpat.",
        href: "/settings/support",
    },
]

export const recommendedGames = [
    {
        title: "Spin the Wheel",
        image: "/spin.svg",
    },
    {
        title: "Word Scramble",
        image: "/word.svg",
    },
    {
        title: "Card Match",
        image: "/hearts.svg",
    },
    {
        title: "Memory Game",
        image: "/pitch.svg",
    },
]

export const players = Array(22)
    .fill(null)
    .map((_, i) => ({
        id: i,
        name: `Player ${i + 1}`,
        avatar:
            "avatar-two.svg",
    }))

export const questions: Question[] = [
    {
        id: 1,
        question: "Which player has scored the most goals in the history of the English Premier League?",
        options: [
            { id: "a", text: "Alan Shearer" },
            { id: "b", text: "Ronaldo" },
            { id: "c", text: "Messi" },
            { id: "d", text: "Sadio Mane" },
        ],
        correctAnswer: "a",
    },
    {
        id: 2,
        question: "Who won the 2018 FIFA World Cup?",
        options: [
            { id: "a", text: "Brazil" },
            { id: "b", text: "France" },
            { id: "c", text: "Germany" },
            { id: "d", text: "Argentina" },
        ],
        correctAnswer: "b",
    },
    {
        id: 3,
        question: "Which club has won the most Champions League titles?",
        options: [
            { id: "a", text: "Barcelona" },
            { id: "b", text: "Real Madrid" },
            { id: "c", text: "Liverpool" },
            { id: "d", text: "Bayern Munich" },
        ],
        correctAnswer: "b",
    },
    {
        id: 4,
        question: "Who holds the record for the most assists in Premier League history?",
        options: [
            { id: "a", text: "Kevin De Bruyne" },
            { id: "b", text: "Wayne Rooney" },
            { id: "c", text: "Ryan Giggs" },
            { id: "d", text: "Steven Gerrard" },
        ],
        correctAnswer: "c",
    },
]

export const question: Question[] = [
    {
        id: 1,
        question: "Which player has scored the most goals in the history of the English Premier League?",
        options: [
            { id: "a", text: "Alan Shearer" },
            { id: "b", text: "Ronaldo" },
            { id: "c", text: "Messi" },
            { id: "d", text: "Sadio Mane" },
        ],
        correctAnswer: "a",
    },
]
export const difficultyLevels: DifficultyOption[] = [
    {
        title: "easy",
        description: "Suitable for beginners or casual football fans",
    },
    {
        title: "intermediate",
        description: "Requires a bit more in-depth football knowledge",
    },
    {
        title: "advanced",
        description: "Obscure facts, statistics, and in-depth knowledge of the sport.",
    },
    {
        title: "expert",
        description: "Extremely difficult questions for hardcore football fans or trivia experts",
    },
]