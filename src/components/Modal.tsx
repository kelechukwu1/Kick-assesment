import { X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { ModalProps } from "@/types";

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="p-0 max-w-lg w-[95%] md:w-full border-[#FF1975] backdrop-blur-md bg-white/90">
                <VisuallyHidden>
                    <DialogTitle>Hidden Title</DialogTitle>
                </VisuallyHidden>
                <div className="relative w-full z-50">
                    <div className="absolute -right-2 -top-2 -bottom-1 bg-[#FF1975] w-full rounded-xl" />
                    <div className="relative bg-white text-black rounded-lg p-5">
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="cursor-pointer absolute right-4 top-4 rounded-full opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-1 focus:ring-[#FF1975] focus:ring-offset-2"
                        >
                            <X className="h-4 w-4 text-pink-500" />
                            <span className="sr-only">Close</span>
                        </button>
                        {/* Content */}
                        <div className="space-y-4">{children}</div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
export default Modal