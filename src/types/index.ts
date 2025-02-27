//This file contains all the interfaces and types I used across the application

export type DifficultyLevel = "easy" | "intermediate" | "advanced" | "expert";

/**
 * Represents a trivia question with its options and correct answer.
 */
export interface Question {
    id: number
    question: string
    options: { id: string; text: string }[]
    correctAnswer: string
}
/**
 * Props for modal Layout.
 */
export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
export interface FootballTriviaModalProps {
    isOpen: boolean;
    onClose: () => void;
    setIsSecondModalOpen: (open: boolean) => void;
    setSelectedMode: (mode: "solo" | "friends") => void;
}
export interface DifficultyModalProps {
    isOpen: boolean;
    onClose: () => void;
    difficulty: string | null;
    setDifficulty: (difficulty: "easy" | "intermediate" | "advanced" | "expert") => void;
}
export interface DifficultyOption {
    title: DifficultyLevel
    description: string
}
export type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement>;