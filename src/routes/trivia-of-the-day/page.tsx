import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Avatar } from "@/components/Avatar"

interface TriviaOption {
    id: string
    text: string
}

const TriviaOfTheDayPage = () => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null)

    const handleSubmit = () => {
        if (selectedOption) {
            // Handle submission logic here
            console.log("Submitted answer:", selectedOption)
        }
    }
    const options: TriviaOption[] = [
        { id: "a", text: "Alan Shearer" },
        { id: "b", text: "Ronaldo" },
        { id: "c", text: "Messi" },
        { id: "d", text: "Sadio Mane" },
    ]
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Card className="w-full max-w-lg border-none text-white">
                <CardHeader className="text-center space-y-6">
                    <CardTitle className="text-md font-medium tracking-tight uppercase">Trivia of the day</CardTitle>
                    <div className="flex justify-center">
                        <Avatar
                            src="/trivia.svg"
                            alt="Trivia avatar"
                            className="w-24 h-24 rounded-full"
                        />
                    </div>
                    <p className="text-[#7A7A7A] text-sm">
                        Earn extra KICK points by engaging exciting questions
                        <br />
                        on the trivia of the day!
                    </p>
                </CardHeader>
                <CardContent className="space-y-5 flex flex-col items-center">
                    <div className="text-center text-md px-6 md:px-12">
                        Which player has scored the most goals in the history of the English Premier League?
                    </div>
                    <div className="space-y-4">
                        {options.map((option) => (
                            <Button
                                key={option.id}
                                variant="outline"
                                className={cn(
                                    "w-full h-14 text-white rounded-xl cursor-pointer border-[#FF1975] bg-transparent hover:bg-pink-600/10",
                                    selectedOption === option.id && "bg-pink-600/10 border-[#FF1975]",
                                    "justify-start w-full"
                                )}
                                onClick={() => setSelectedOption(option.id)}
                            >
                                <span className="text-start opacity-60">{option.id}.</span>
                                <span className="flex-1 text-center">
                                    {option.text}
                                </span>
                            </Button>
                        ))}
                    </div>
                    <Button className="bg-pink-600 cursor-pointer hover:bg-[#FF1975] text-white w-full max-w-[316px] h-12 mt:6 md:mt-8" onClick={handleSubmit}>
                        Submit
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default TriviaOfTheDayPage
