import { useSidebar } from "@/components/ui/sidebar";

export function Logo() {
    const { state } = useSidebar();

    return (
        <img
            src="/logo.svg"
            alt="Kick logo"
            height={70}
            width={70}
            className={`ml-5 cursor-pointer ${state === "collapsed" ? "hidden" : "block"}`}
        />
    );
}