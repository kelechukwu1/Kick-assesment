import { Button } from "@/components/ui/button"
import { Avatar } from "./Avatar"
import Modal from "./Modal"
import { FootballTriviaModalProps } from "@/types"

const GeneralFootballTriviaModal = ({ isOpen, onClose, setIsSecondModalOpen, setSelectedMode }: FootballTriviaModalProps) => {
    const handleOpenSecondModal = (mode: "solo" | "friends") => {
        onClose()
        setIsSecondModalOpen(true);
        setSelectedMode(mode)
    }
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            {/* Header */}
            <div className="flex flex-col gap-5 items-center">
                <Avatar
                    src={"/football.svg"}
                    alt={"Football avatar"}
                    width={70}
                    height={50}
                    className="filter invert"
                />
                <h2 className="text-md">General Football Trivia</h2>
            </div>

            {/* Game Stats */}
            <div className="flex justify-center">
                <div className="flex justify-center gap-8 rounded-[20px] bg-[#F7F2FF] py-4 w-full md:px-6 max-w-[25rem] text-sm">
                    <div className="flex items-center gap-2">
                        <Avatar
                            src={"/question-mark.svg"}
                            alt={"Question mark avatar"}
                            width={20}
                            height={20}
                        />
                        <span>10 questions</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Avatar
                            src={"/star.svg"}
                            alt={"star avatar"}
                            width={20}
                            height={20}
                        />
                        <span>+100 points</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Avatar
                            src={"/star.svg"}
                            alt={"star avatar"}
                            width={20}
                            height={20}
                        />
                        <span>3 minutes</span>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="px-6 flex flex-col items-center justify-center">
                <h3 className="text-sm font-bold text-center tracking-wider text-[#333333] uppercase">Description</h3>
                <p className="mt-2 text-sm text-center text-[#616161] max-w-[20rem]">
                    Any time is a good time for a quiz and even better if that happens to be a football themed quiz
                </p>
            </div>

            {/* Creator Info */}
            <div className="md:px-6 flex items-center justify-between text-[#616161] mb-10">
                <div className="flex items-center gap-2">
                    <Avatar
                        src="/avatar-one.svg"
                        alt="Avatar"
                        width={45}
                        height={45}
                    />
                    <div>
                        <h4 className="text-sm">Curtis Halo</h4>
                        <p className="text-sm text-gray-500">Creator</p>
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">{"★".repeat(5)}</div>
                    <span className="text-sm">4.8</span>
                </div>
                <div>
                    <a href="#" className="text-sm text-gray-500 hover:underline">
                        See 1K+ reviews
                    </a>
                </div>
            </div>
            {/* Action Buttons */}
            <div className="flex justify-center gap-4">
                <Button
                    variant="outline"
                    className="bg-white hover:bg-gray-200 transition-all duration-300 w-[154px] h-[44px] rounded-[15px] cursor-pointer"
                    onClick={() => handleOpenSecondModal("solo")}
                >
                    Play Solo
                </Button>
                <Button
                    className="bg-[#FF1975] hover:bg-pink-600 transition-all duration-300 w-[154px] h-[44px] text-white rounded-[15px] cursor-pointer"
                    onClick={() => handleOpenSecondModal("friends")}
                >
                    Play with Friends
                </Button>
            </div>
        </Modal>
    )
}

export default GeneralFootballTriviaModal 