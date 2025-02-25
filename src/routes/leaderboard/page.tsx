import { Avatar } from "@/components/Avatar"
import { leaderboardData } from "@/data"

const LeaderboardPage = () => {
    return (
        <div className="p-5 w-full flex-1 flex flex-col items-center">
            <div className="space-y-5">
                <div className="w-2/4 mb-5 space-y-2 lg:my-9">
                    <h1 className="text-sm">Hello Stella,</h1>
                    <p className="text-xs">Welcome to the Leaderboard! Here's where champions are recognized. Check out the top performers, see who's dominating the trivia game, and strive to claim the throne. Can you climb to the highest ranks and become a trivia legend? Compete, conquer, and make your mark on the leaderboard today!</p>
                </div>

                <div className="flex flex-col gap-5">
                    <div className="flex gap-5 justify-around bg-[#81A8E3] h-[13rem] w-full rounded-md">
                        <div className="flex flex-col gap-1 items-center justify-center">
                            <Avatar
                                src="avatar-one.svg"
                                alt="female avatar"
                                width={50}
                                height={50}
                            />
                            <Avatar
                                src="second-place.svg"
                                alt="second place avatar"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="flex flex-col gap-2 items-center justify-center">
                            <Avatar
                                src="avatar-two.svg"
                                alt="male avatar"
                                width={100}
                                height={100}
                            />
                            <Avatar
                                src="first-place.svg"
                                alt="first place avatar"
                                width={50}
                                height={50}
                            />
                        </div>
                        <div className="flex flex-col gap-1 items-center justify-center">
                            <Avatar
                                src="avatar-one.svg"
                                alt="female avatar"
                                width={50}
                                height={50}
                            />
                            <Avatar
                                src="third-place.svg"
                                alt="third place avatar"
                                width={50}
                                height={50}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-10">
                        {leaderboardData.map((item) => (

                            <div className="bg-[#FF1975] flex justify-between items-center px-5 py-3 rounded-lg">
                                <div className="flex gap-3 justify-center items-center">
                                    <span>{`0${item.id}`}</span>
                                    <Avatar
                                        src="avatar-one.svg"
                                        alt="female avatar"
                                        width={35}
                                        height={35}
                                    />
                                    <span>{item.name}</span>
                                </div>
                                <span>{item.points}</span>
                                <Avatar
                                    src={item.coin}
                                    alt="gold avatar"
                                    width={20}
                                    height={20}
                                    className="md:mr- lg:mr-20"
                                />
                            </div>
                        ))}
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LeaderboardPage
