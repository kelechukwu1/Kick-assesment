import { useSidebar } from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

/**
 * Logo Component
 * 
 * Displays the application logo and handles its visibility based on the sidebar state.
 * The logo is hidden when the sidebar is collapsed and shown when the sidebar is expanded.
 * 
 * @returns {JSX.Element} - A clickable logo that navigates to the home page.
 */
const Logo = () => {
    // Access the sidebar state to determine if it's collapsed or expanded
    const { state } = useSidebar();

    return (
        <Link to="/">
            <img
                src="/logo.svg"
                alt="Kick logo"
                height={70}
                width={70}
                className={`ml-5 cursor-pointer ${state === "collapsed" ? "hidden" : "block"}`}
            />
        </Link>
    );
}
export default Logo