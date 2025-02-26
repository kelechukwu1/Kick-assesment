import { Avatar } from "@/components/Avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { recommendedGames } from "@/data"
import { Eye } from "lucide-react"
import { Link } from "react-router-dom"

const DashboardPage = () => {
    return (
        <div className="w-full flex-1 flex-col p-8 justify-center items-center">
            <header className="flex justify-between w-full items-center mb-5 lg:mt-7">
                <div className="w-2/4">
                    <h1 className="text-md">Hi Stella,</h1>
                </div>
                <div className="flex items-center gap-4">
                    <Avatar
                        src="/notification.svg"
                        alt="notification avatar"
                        width={20}
                        height={20}
                        className="cursor-pointer"
                    />
                    <Avatar
                        src="avatar-one.svg"
                        alt="female avatar"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </div>
            </header>

            <div className="space-y-3 w-full md:max-w-[80%]">
                <p className="text-sm text-[#757575]">Kick start your day with high points</p>
                <div className="grid md:grid-cols-3 gap-5">
                    <Card className="bg-white col-span-2 border-[#FF1975] h-full lg:max-h-[190px]">
                        <CardContent className="grid lg:gap-4 p-5">
                            <div className="space-y-2 lg:space-y-3">
                                <div className="flex items-center gap-2 max-w-fit">
                                    <h2 className="text-sm w-full font-medium text-gray-500">Your Wallet Balance</h2>
                                    <Eye className="size-4 text-gray-500 cursor-pointer" />
                                </div>
                                <p className="text-md text-black font-medium">$4500.99</p>
                                <div className="flex gap-2">
                                    <Button className="bg-[#FF1975] text-white rounded-[10px] text-xs cursor-pointer hover:bg-pink-600 transition-all duration-300">Earn more</Button>
                                    <Button variant="outline" className="bg-[#C8C8C8] rounded-[10px] text-xs transition-all duration-300 cursor-pointer hover:bg-gray-400">Deposit</Button>
                                    <Button variant="outline" className="bg-[#C8C8C8] rounded-[10px] text-xs transition-all duration-300 hover:bg-gray-400 cursor-pointer">Withdraw</Button>
                                </div>
                            </div>
                            <div className="hidden lg:block">
                                <div className="h-full w-full rounded-lg bg-gradient-to-br from-pink-200 to-transparent" />
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="md:col-span-1 border-[#FF1975] bg-white"></Card>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-sm text-white">Top players this week</h2>
                        <Link to="#" className="text-sm text-gray-400">
                            View leaderboard
                        </Link>
                    </div>

                    <img src='/top-players.svg' width={800} height={800} className="w-auto max-w-[100%] object-cover" />
                </div>

                <div className="space-y-2 overflow-y-auto">
                    <h2 className="text-sm text-white">Recommended for you</h2>
                    <div className="flex gap-4 overflow-auto">
                        {recommendedGames.map((game) => (
                            <div key={game.title} className="rounded-md cursor-pointer">
                                <img
                                    src={game?.image}
                                    alt={game?.title}
                                    width={500}
                                    height={500}
                                    className="aspect-square object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardPage
