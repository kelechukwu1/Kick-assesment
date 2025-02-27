import { Avatar } from "@/components/Avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { questions } from "@/data"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { toast } from "sonner"

const CategoriesQuestion = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [selectedOption, setSelectedOption] = useState<string | null>(null)
    const [answeredCount, setAnsweredCount] = useState(0)
    const [isAnswered, setIsAnswered] = useState(false)
    const [correctCount, setCorrectCount] = useState(0)
    const [wrongCount, setWrongCount] = useState(0)

    const currentQuestion = questions[currentIndex]
    const totalQuestions = questions.length
    const totalAnsweredQuestions = correctCount + wrongCount


    const handleSubmit = () => {
        if (!selectedOption) return

        setIsAnswered(true)

        if (selectedOption === currentQuestion.correctAnswer) {
            setCorrectCount((prev) => prev + 1)
        } else {
            setWrongCount((prev) => prev + 1)
        }
        setAnsweredCount((prev) => prev + 1)

    }

    const handleNextQuestion = () => {
        if (currentIndex < totalQuestions - 1) {
            setCurrentIndex((prev) => prev + 1)
            setSelectedOption(null)
            setIsAnswered(false)
        }
        if (totalAnsweredQuestions === totalQuestions) {
            toast("Final Score", {
                description: `📊 Final Score: ${correctCount} Correct, ${wrongCount} Wrong Answers`
            })
        }
    }
    const progressValue = (answeredCount / totalQuestions) * 100

    return (
        <div className="w-full p-8 min-h-screen flex flex-col items-center">
            <header className="flex justify-end w-full lg:mt-7">
                <div className="flex items-center gap-4">
                    <Avatar
                        src="/notification.svg"
                        alt="notification avatar"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                    />
                    <Avatar
                        src="/avatar-one.svg"
                        alt="female avatar"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </div>
            </header>
            <Card className="w-full max-w-[35rem] border-none text-white">
                <CardHeader className="text-center space-y-6">
                    {/* Progress Bar */}
                    <div className="w-full flex flex-row items-center gap-5 md:gap-10">
                        <div className="flex gap-1 items-center w-full">
                            <Avatar
                                src="/answer-indicator.svg"
                                alt="coin avatar"
                                width={17}
                                height={17}
                                className="mb-3"
                            />
                            <Progress value={progressValue} className="bg-[#D9D9D9] h-1 max-w-sm" />
                        </div>
                        <div className="bg-[#051337] gap-4 cursor-pointer border border-[#FF197540] px-5 rounded-full flex items-center justify-center">
                            <Avatar
                                src="/coin.svg"
                                alt="coin avatar"
                                width={15}
                                height={15}
                            />
                            <span className="text-[#FBA400] text-md">$130</span>
                        </div>
                        <Avatar
                            src="/network-signal.svg"
                            alt="Network signal avatar"
                            width={30}
                            height={30}
                        />
                    </div>
                    <CardTitle className="flex flex-col items-center gap-5">
                        <div className="flex gap-5">
                            <span className="text-sm text-[#616161]">Championships and Tournaments</span>
                            <Avatar
                                src="/trophy.svg"
                                alt="Trophy avatar"
                                width={10}
                                height={10}
                            />
                        </div>
                        <span className="text-sm font-light">
                            Question {currentIndex + 1} of {totalQuestions}
                        </span>
                    </CardTitle>

                </CardHeader>
                <CardContent className="space-y-5 flex flex-col items-center">
                    <div className="text-center text-md px-6 md:px-12 font-light mb-10 max-w-md">
                        {currentQuestion?.question}
                    </div>
                    <div className="space-y-4 max-w-sm">
                        {currentQuestion?.options.map((option) => {
                            const isCorrect = option.id === currentQuestion.correctAnswer
                            const isWrong = selectedOption === option.id && selectedOption !== currentQuestion.correctAnswer

                            return (
                                <Button
                                    key={option.id}
                                    variant="outline"
                                    className={cn(
                                        "w-full h-14 text-white rounded-xl cursor-pointer border-[#FF1975] bg-transparent hover:bg-pink-600/10",
                                        selectedOption === option.id && "bg-pink-600/10 border-[#FF1975]",
                                        isAnswered && isCorrect && "bg-[#689BFF] border-white text-white",
                                        isAnswered && isWrong && "bg-[#FF1975] border-white text-white"
                                    )}
                                    onClick={() => !isAnswered && setSelectedOption(option.id)}
                                    disabled={isAnswered}
                                >
                                    <span className="text-start opacity-60">{option.id}.</span>
                                    <span className="flex-1 text-center font-normal">{option.text}</span>
                                    {
                                        isAnswered && isCorrect ? (
                                            <Avatar
                                                src="/check.svg"
                                                alt="correct answer avatar"
                                                width={20}
                                                height={20}
                                            />
                                        ) : isAnswered && isWrong ? (
                                            <Avatar
                                                src="/x.svg"
                                                alt="Wrong answer avatar"
                                                width={20}
                                                height={20}
                                            />
                                        ) : null
                                    }
                                </Button>
                            )
                        })}
                    </div>
                    {isAnswered ? (
                        <Button
                            className="bg-[#FF1975] cursor-pointer hover:bg-pink-600 transition-all duration-300 text-white w-full max-w-[316px] h-12 mt:6 md:mt-8"
                            onClick={handleNextQuestion}
                        >
                            {answeredCount === totalQuestions ? "Finish" : "Next"}
                        </Button>
                    ) : (
                        <Button
                            className="bg-[#FF1975] cursor-pointer hover:bg-pink-600 transition-all duration-300 text-white w-full max-w-[316px] h-12 mt:6 md:mt-8"
                            onClick={handleSubmit}
                            disabled={!selectedOption}
                        >
                            Submit
                        </Button>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}

export default CategoriesQuestion
