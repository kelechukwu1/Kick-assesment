import { Avatar } from "@/components/Avatar"

const GamingStatsPage = () => {
    return (
        <div className="h-full w-full p-8">
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
            <div className="bg-[#75757526] p-5 mt-32 rounded-md w-full max-w-96 h-40 space-y-4">
                <h1 className="font-light text-sm">Game Rank</h1>
                <div className="flex gap-5">
                    <Avatar
                        src="/award.svg"
                        alt="award avatar"
                        width={20}
                        height={20}
                    />
                    <Avatar
                        src="/award.svg"
                        alt="award avatar"
                        width={20}
                        height={20}
                    />
                    <Avatar
                        src="/award.svg"
                        alt="award avatar"
                        width={20}
                        height={20}
                    />
                    <Avatar
                        src="/award.svg"
                        alt="award avatar"
                        width={20}
                        height={20}
                    />
                    <Avatar
                        src="/award.svg"
                        alt="award avatar"
                        width={20}
                        height={20}
                    />
                </div>
            </div>
        </div>
    )
}

export default GamingStatsPage
