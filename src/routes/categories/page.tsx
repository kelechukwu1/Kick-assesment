import { Avatar } from "@/components/Avatar"
import { Button } from "@/components/ui/button"
import { categoriesData } from "@/data"

const CategoriesPage = () => {
    return (
        <div className="p-8 w-full flex-1 flex flex-col items-center">
            <div className="w-full">
                <header className="mb-5 flex justify-between items-center w-full lg:mt-7">
                    <h1 className="text-sm">Hi Stella,</h1>
                    <div className="flex gap-3 items-center justify-center">
                        <div className="bg-[#051337] cursor-pointer border border-[#FF197540] px-3 rounded-full flex items-center justify-center">
                            <Avatar
                                src="coin.svg"
                                alt="coin avatar"
                                width={15}
                                height={15}
                            />
                            <span className="text-[#FBA400] text-md">$4500.99</span>
                        </div>
                        <Avatar
                            src="notification.svg"
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
                <div className="w-full md:max-w-[90%] space-y-4 md:pr-20">
                    <p className="text-sm mb-3 md:mb-5">What game would you like to play today?</p>
                    <div className="flex justify-between text-md items-center">
                        <span>Most Popular</span>
                        <p className="flex items-center gap-2 justify-center bg-[#3d4250] rounded-[8px] border border-[#FF1975] px-2 py-1">
                            <span>
                                Sort by
                            </span>

                            <Avatar
                                src="/sort.svg"
                                alt="sort avatar"
                                width={15}
                                height={15}
                            />
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-5">
                        {categoriesData.map((item) => (
                            <div key={item.id}
                                style={{ backgroundColor: item.color }} className={`cursor-pointer flex flex-col items-center justify-center lg:justify-around p-5 gap-3 lg:gap-0    w-full max-w-[172px] h-full lg:h-[180px] rounded-[10px]`}>
                                <Avatar
                                    src={item.icon}
                                    alt={`${item.title} avatar`}
                                    width={30}
                                    height={30}
                                />
                                <p className={`text-xs text-center ${[4, 6, 9].includes(item.id) ? "text-[#747373]" : ""}`}>{item.title}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col space-y-3 p-7 relative">
                        <img
                            src="/categories-image.svg"
                            alt="Categories People"
                            className="absolute object-cover rounded-[10px] inset-0 w-full h-full"
                        />
                        <p className="text-sm z-50 font-medium">Gear up for game day! </p>
                        <p className="text-xs max-w-[40rem] z-50 font-medium">Dress like a champion and represent your team! Explore the ultimate football fan gear at FanZone. From iconic jerseys to stylish accessories, we have everything you need to show your team pride. Don't wait, shop now and score big savings</p>
                        <Button size={"sm"} className="z-50 bg-[#FF1975] hover:bg-[#d7306b] transition all duration-300 cursor-pointer max-w-fit text-xs">shop now</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage
