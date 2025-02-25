import { Avatar } from "@/components/Avatar"

const GamingStatsPage = () => {
    return (
        <div className="h-full w-full">
            <div className="bg-[#75757526] p-5 m-10 mt-40 rounded-md w-96 h-40 space-y-4">
                <h1 className="font-light text-xs">Game Rank</h1>
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
