import React from "react";

type AvatarProps = React.ImgHTMLAttributes<HTMLImageElement>;

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