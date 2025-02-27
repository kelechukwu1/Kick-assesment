import { AvatarProps } from "@/types";

export function Avatar({ src, alt, width, height, className, ...props }: AvatarProps) {
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={className}
            {...props}
        />
    );
}