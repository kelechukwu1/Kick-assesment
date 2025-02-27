import { Avatar } from "@/components/Avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { recommendedGames } from "@/data"
import { Eye } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router-dom"

/**
 * DashboardPage Component
 * 
 * Displays the main dashboard content, including the user's wallet balance, top players,
 * and recommended games. The wallet balance can be toggled between visible and hidden states.
 * 
 * @returns {JSX.Element} - A dashboard page with interactive elements and dynamic content.
 */

const DashboardPage = () => {
    const [isBalanceVisible, setIsBalanceVisible] = useState(true);
    return (
        <div className="p-8 w-full flex flex-1 flex-col items-start">
            <div className="w-full">
                <header className="flex flex-1 justify-between w-full items-center mb-5 lg:mt-7">
                    <h1 className="text-md">Hi Stella,</h1>
                    <div className="flex items-center gap-x-4">
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
            </div>

            <div className="space-y-3 w-full md:max-w-[80%]">
                <p className="text-sm text-[#757575]">Kick start your day with high points</p>
                <div className="lg:grid lg:grid-cols-3 md:gap-5 space-y-5 lg:space-y-0">
                    <Card className="bg-white lg:col-span-2 border-[#FF1975] h-full lg:max-h-[190px]">
                        <CardContent className="lg:flex lg:gap-4 p-5">
                            <div className="lg:grid-cols-2 space-y-2 lg:space-y-3">
                                <div className="flex items-center gap-2 max-w-fit">
                                    <h2 className="text-sm w-full font-medium text-gray-500">Your Wallet Balance</h2>
                                    <Eye className="size-4 text-gray-500 cursor-pointer"
                                        onClick={() => setIsBalanceVisible(!isBalanceVisible)}
                                    />
                                </div>
                                <p className="text-md text-black font-medium">{isBalanceVisible ? "$4500.99" : "****"} </p>
                                <div className="flex gap-2">
                                    <Button className="px-3 py-2 bg-[#FF1975] text-white rounded-[10px] text-sm cursor-pointer hover:bg-pink-600 transition-all duration-300">Earn more</Button>
                                    <Button variant="outline" className="px-3 py-2 bg-[#C8C8C8] rounded-[10px] text-sm transition-all duration-300 cursor-pointer hover:bg-gray-400">Deposit</Button>
                                    <Button variant="outline" className="px-3 py-2 bg-[#C8C8C8] rounded-[10px] text-sm transition-all duration-300 hover:bg-gray-400 cursor-pointer">Withdraw</Button>
                                </div>
                            </div>
                            <div className="hidden lg:flex flex-1 h-full">
                                <div className="h-full w-full rounded-lg bg-gradient-to-br from-pink-200 to-transparent" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="lg:col-span-1 h-[100px] md:h-[150px] lg:h-full w-full border-[#FF1975] bg-white"></Card>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm text-white">Top players this week</h2>
                        <Link to="#" className="text-sm text-gray-400">
                            View leaderboard
                        </Link>
                    </div>

                    <img src='/top-players.svg' width={800} height={800} className="w-auto h-auto max-w-[100%] object-cover" />
                </div>

                <div className="space-y-2">
                    <h2 className="text-sm text-white">Recommended for you</h2>
                    <ScrollArea className="overflow-x-auto">
                        <div className="flex gap-4 overflow-x-auto lg:w-[70rem snap-x">
                            {recommendedGames.map((game) => (
                                <div key={game.title} className="rounded-md cursor-grab snap-center flex-shrink-0">
                                    <img
                                        src={game?.image}
                                        alt={game?.title}
                                        className="w-[180px] md:w-[260px] h-[120px] md:h-[200px] rounded-lg object-cover"
                                    />
                                </div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
