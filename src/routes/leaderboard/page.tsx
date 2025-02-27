import { Avatar } from "@/components/Avatar"
import { leaderboardData } from "@/data"

const LeaderboardPage = () => {
    return (
        <div className="p-8 w-full flex-1 flex-col justify-center items-center">
            <div className="w-full mb-5 lg:mt-[1.9rem]">
                <h1 className="text-md">Hello Stella,</h1>
            </div>

            <div className="flex flex-col gap-4">
                <p className="text-sm lg:w-2/4">Welcome to the Leaderboard! Here's where champions are recognized. Check out the top performers, see who's dominating the trivia game, and strive to claim the throne. Can you climb to the highest ranks and become a trivia legend? Compete, conquer, and make your mark on the leaderboard today!</p>
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
                <div className="grid grid-cols-2 gap-7">
                    {leaderboardData.map((item) => (
                        <div key={item.id} className="bg-[#FF1975] flex flex-col gap-2 md:flex-row justify-between items-center px-3 md:px-5 py-4 rounded-lg">
                            <div className="flex gap-3 justify-center items-center">
                                <span>{`0${item.id}`}</span>
                                <Avatar
                                    src="avatar-one.svg"
                                    alt="female avatar"
                                    width={35}
                                    height={35}
                                />
                                <span className="">
                                    {item.name}
                                </span>
                            </div>
                            <div className="flex flex-col md:flex-row lg:mr-20">
                                <span className="flex lg:gap-32">
                                    <span>{item.points}</span>
                                    <Avatar
                                        src={item.coin}
                                        alt="gold avatar"
                                        width={20}
                                        height={20}
                                        className=""
                                    />
                                </span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LeaderboardPage
