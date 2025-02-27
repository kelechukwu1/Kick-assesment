import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Avatar } from "@/components/Avatar"
import { settingsLinks } from "@/data"

export default function SettingsLayout() {
    const location = useLocation()
    return (
        <div className="flex min-h-screen flex-col p-8">
            <header className="flex justify-between items-center w-full mb-5 lg:mt-7">
                <div className="w-full lg:w-2/4">
                    <h1 className="text-md font-semibold">Settings</h1>
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
                        src="/avatar-one.svg"
                        alt="female avatar"
                        width={30}
                        height={30}
                        className="cursor-pointer"
                    />
                </div>
            </header>
            <section className="lg:flex">
                <div className="w-full space-y-4 lg:w-1/3 mr-5 mb-10 lg:mb-0">
                    {settingsLinks.map((link) => {
                        const isActive = location.pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                to={link.href}
                                className={cn(
                                    "block rounded-[15px] relative bg-[#74737366] border border-[#FF197533] h-[110px] p-4 transition-colors hover:bg-[#FF197526]",
                                    isActive && "bg-[#FF197526]",
                                )}
                            >
                                <div className={cn("flex items-center justify-between", isActive && "before:absolute before:right-0 before:top-1/2 before:h-[40px] before:w-[4px] before:bg-[#FF1975] before:rounded-lg before:-translate-y-1/2",
                                )}>
                                    <div className="space-y-1">
                                        <h2 className="text-md text-white">{link.title}</h2>
                                        <p className="text-sm text-white">{link.description}</p>
                                    </div>
                                    <ChevronRight className="size-5 mt-5 text-gray-400" />
                                </div>
                            </Link>
                        )
                    }
                    )}
                </div>
                <Outlet />
            </section>
        </div>
    )
}

