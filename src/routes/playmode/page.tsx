import { Button } from "@/components/ui/button"
import { howToPlay, playMode } from "@/data"

const PlayModePage = () => {
    return (
        <div>
            <div className="space-y-5 mb-10">
                <h1 className="text-sm">Hey Stella.</h1>
                <h1 className="uppercase text-md font-semibold">Choose play mode</h1>
            </div>

            <div className="md:flex md:flex-row gap-10">
                <div className="flex flex-col space-y-10">
                    <div className="space-y-3 text-black">
                        {playMode.map((mode) => (
                            <div key={mode.id} className="bg-[#f6e3e2] flex gap-10 p-5 rounded-sm cursor-pointer">
                                <img
                                    src={mode.Icon}
                                    alt={mode.mode}
                                />
                                <div className="text-sm uppercase">{mode.mode}</div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-[#262b3b] p-5 rounded-sm flex flex-col items-center space-y-5 py-14">
                        <h1 className="uppercase text-sm">Featured</h1>
                        <p className="text-center text-xs w-54">Take part in challenges with friends or other players</p>
                        <Button size={"sm"} className="bg-[#e83873] cursor-pointer font-semibold text-xs">Find Friends</Button>
                    </div>
                </div>
                <div className="bg-[#f6e3e2] rounded-sm text-black p-8">
                    <h4 className="uppercase text-center font-semibold text-sm">How to play</h4>
                    <img src="" alt="" className="mb-5" />
                    <ul className="flex flex-col space-y-5">
                        {howToPlay.map((item) => (
                            <li key={item.id} className="relative pl-5">
                                <span className="absolute left-0 top-2.5 transform -translate-y-1/2 size-1.5 bg-[#e83873] rounded-sm"></span>
                                <h4 className="text-sm font-semibold">{item.title}</h4>
                                <p className="text-xs font-normal text-gray-800 mb-3">{item?.paragraphOne}</p>
                                <p className="text-xs font-normal text-gray-800">{item?.paragraphTwo}</p>
                            </li>
                        ))}
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default PlayModePage
