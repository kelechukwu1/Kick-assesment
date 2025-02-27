import { Button } from "@/components/ui/button"
import Modal from "./Modal"
import { Avatar } from "./Avatar";
import { useNavigate } from "react-router-dom";
import { DifficultyLevel, DifficultyModalProps } from "@/types";
import { difficultyLevels } from "@/data";


const DifficultyLevelModal = ({ isOpen, onClose, difficulty, setDifficulty }: DifficultyModalProps) => {
    const navigate = useNavigate()
    const handleSetDifficultyLevel = (difficulty: DifficultyLevel) => {
        setDifficulty(difficulty)
    }

    const handleSubmit = () => {
        if (difficulty === null) return
        onClose();
        navigate("/categories/questions")
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <h1 className="text-center text-md mt-5 text-[#333333] font-semibold mb-3 uppercase">choose difficulty level</h1>

            <div className="space-y-2">
                {difficultyLevels.map((level) => (
                    <button
                        key={level.title}
                        className={`
                            w-full bg-[#FBF8FF] cursor-pointer hover:bg-slate-100 rounded-[20px] p-3 text-left flex items-center gap-4 transition-colors group ${difficulty === level.title ? "border border-[#FF1975]" : ""}
                            `}
                        onClick={() => handleSetDifficultyLevel(level.title)}
                    >
                        <Avatar
                            src="/star.svg"
                            alt="Star avatar"
                            width={25}
                            height={25}
                        />
                        <div className="text-[#616161] text-sm space-y-2">
                            <h2 className="uppercase">{level.title}</h2>
                            <p>{level.description}</p>
                        </div>
                    </button>
                ))}
            </div>

            <div className="mt-8 flex justify-center">
                <Button
                    size="lg"
                    className="bg-[#FF1F8E] hover:bg-pink-600 cursor-pointer uppercase transition duration-300 text-white rounded-[15px] px-16 py-4 text-sm"
                    onClick={handleSubmit}
                    disabled={!difficulty}
                >
                    Start
                </Button>
            </div>
        </Modal>
    )
}

export default DifficultyLevelModal