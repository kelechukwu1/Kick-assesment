import { Avatar } from "@/components/Avatar"
import { Button } from "@/components/ui/button"
import { howToPlay, playMode } from "@/data"

const PlayModePage = () => {
    return (
        <div className="p-5 w-full flex-1 flex flex-col items-center">
            <div className="space-y-5">
                <div className="w-full mb-5 lg:my-10">
                    <h1 className="text-sm">Hey Stella.</h1>
                    <h1 className="uppercase text-md font-semibold">Choose play mode</h1>
                </div>

                <div className="flex flex-col gap-5 lg:flex-row lg:gap-10">
                    <div className="flex flex-col gap-5">
                        <div className="space-y-3 text-black">
                            {playMode.map((mode) => (
                                <div key={mode.id} className="bg-[#FCE2E2] border border-[#FA5045] flex items-center gap-5 md:gap-10 p-5 rounded-[10px] cursor-pointer lg:pr-80 hover:bg-[#e5c2c1] transition all duration 300">
                                    <img
                                        src={mode.Icon}
                                        alt={mode.mode}
                                        width={70}
                                        height={70}
                                    />
                                    <div className="text-xs uppercase text-[#333333]">{mode.mode}</div>
                                </div>
                            ))}
                        </div>
                        <div className="bg-[#F4F7FF21] backdrop-blur-xs p-5 rounded-[15px] flex flex-col items-center space-y-5 py-16 relative">
                            <Avatar
                                src="avatar-two.svg"
                                alt="male avatar"
                                width={50}
                                height={50}
                                className="absolute bottom-0 right-5"
                            />

                            <Avatar
                                src="avatar-one.svg"
                                alt="female avatar"
                                width={50}
                                height={50}
                                className="absolute top-5 left-5"
                            />

                            <h1 className="uppercase text-sm">Featured</h1>
                            <p className="text-center text-xs w-54">Take part in challenges with friends or other players</p>
                            <Button size={"sm"} className="bg-[#FF1975] hover:bg-[#d7306b] transition all duration-300 cursor-pointer font-semibold text-xs">Find Friends</Button>
                        </div>
                    </div>
                    <div className="bg-[#FCE2E2] border border-[#FA5045] rounded-[10px] text-black p-8 lg:max-h-[38.5rem] max-w-[30.1rem] overflow-y-auto">
                        <div className="flex flex-col items-center mb-5 gap-5">
                            <h4 className="uppercase text-center font-semibold text-sm text-[#333333]">How to play</h4>
                            <img src="/soccer.svg" alt="Football field" height={50} width={50} />
                        </div>
                        <ul className="flex flex-col space-y-5 overflow-auto">
                            {howToPlay.map((item) => (
                                <li key={item.id} className="relative pl-5">
                                    <span className="absolute left-0 top-2.5 transform -translate-y-1/2 size-1.5 bg-[#e83873] rounded-sm"></span>
                                    <h4 className="text-sm font-semibold text-[#333333]">{item.title}</h4>
                                    <p className="text-xs font-normal text-[#616161] mb-3">{item?.paragraphOne}</p>
                                    <p className="text-xs font-normal text-[#616161] mb-3">{item?.paragraphTwo}</p>
                                    {
                                        item?.paragraphThree && (
                                            <p className="text-xs font-normal text-[#616161]">{item?.paragraphThree}</p>
                                        )
                                    }
                                </li>
                            ))}
                        </ul>
                        <div className="space-y-3 mt-5">
                            <h4 className="text-sm font-semibold text-[#333333]">Remember:</h4>
                            <ul className="list-disc pl-5 text-xs text-[#616161]">
                                <li>The more you play, the more you'll learn about football.</li>
                                <li>
                                    Keep an eye on the timer, as some questions can be challenging.
                                </li>
                                <li>Test your knowledge across various football topics and difficulty levels</li>
                            </ul>
                        </div>
                        <p className="mt-5 text-[#616161] text-xs">Get ready to dive into the world of football trivia and become the ultimate soccer expert! Have fun and enjoy the game. Good luck!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlayModePage
