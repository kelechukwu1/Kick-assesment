import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar } from "@/components/Avatar"
import { challenges, players } from "@/data"
import { useState } from "react"

const MultiPlayerPage = () => {
    const [selectedChallenge, setSelectedChallenge] = useState("");
    return (
        <div className="h-full w-full flex flex-col p-8">
            <header className="flex justify-between w-full items-center mb-5 lg:mt-7">
                <div className="md:w-2/4">
                    <h1 className="text-md font-semibold">Multiplayer and Challenges</h1>
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

            <div className="w-full md:max-w-[95%] lg:max-w-[80%]">
                <p className="text-md text-[#757575] mb-3 md:mb-5">Choose a challenge to play</p>
                <div className="grid md:grid-cols-2 gap-5 mb-10">
                    {challenges.map((challenge, i) => (
                        <Card key={i}
                            onClick={() => setSelectedChallenge(challenge.title)}
                            className={`
                            ${selectedChallenge === challenge.title ? 'bg-[#FF197526]' : ''} p-0 border border-[#FF1975] cursor-pointer
                            `}>
                            <CardContent className="flex items-center justify-between p-3">
                                <div className="flex items-center gap-3">
                                    <Avatar
                                        src={challenge.icon}
                                        alt={challenge.title}
                                        width={30}
                                        height={30}
                                    />
                                    <div>
                                        <h3 className="text-md font-semibold mb-1">{challenge.title}</h3>
                                        <p className="max-w-72 text-sm text-[#757575]">{challenge.description}</p>
                                    </div>
                                </div>
                                <Button size="icon" variant="ghost" className="text-pink-500 hover:text-pink-400">
                                    <Avatar
                                        src="/play-pink.svg"
                                        alt="pink play button icon"
                                        width={30}
                                        height={30}
                                    />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <section className="mb-10">
                    <h2 className="text-md text-[#757575] mb-3 md:mb-6">Choose a player</h2>
                    <div className="bg-gradient-to-b from-pink-600/20 to-pink-900/20 rounded-xl p-6">
                        <div className="grid grid-cols-5 md:grid-cols-11 gap-4">
                            {players.map((player) => (
                                <Avatar
                                    key={player.id}
                                    src={player.avatar}
                                    alt={player.name}
                                    className="h-12 w-12 border-2 border-transparent rounded-full hover:border-pink-500 cursor-pointer transition-all"
                                />


                            ))}
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-md text-[#757575] mb-2">Invite a team player?</h2>
                    <p className="text-[#757575] text-sm mb-2">Send a direct link to invite someone to join your challenge</p>
                    <Button variant="link" className="cursor-pointer text-[#FF1975] hover:text-pink-400 text-xs p-0">
                        How to use invitation code?
                    </Button>
                </section>

            </div>
        </div>
    )
}

export default MultiPlayerPage
