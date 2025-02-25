import { SidebarTrigger, useSidebar } from '../ui/sidebar';

const SidebarTriggerButton = () => {
    const { state } = useSidebar();
    return (
        <SidebarTrigger className={`cursor-pointer z-50 flex h-16 shrink-0 items-center transition-[width,height] ease-linear absolute ${state === "collapsed" ? "right-[5rem] md:left-[-0.9rem]" : "left-[-0.3rem] md:left-[-1rem]"
            }`} />
    );

}

export default SidebarTriggerButton
