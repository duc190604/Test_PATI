interface TruckIconProps {
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
}

export function TruckIcon({
    width = 20,
    height = 20,
    className = '',
    fill = '#000000'
}: TruckIconProps) {
    return (
        <svg
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 33 18"
            className={className}
        >
            <path
                fill={fill}
                d="m32.7 9-3.84-3.81a.8.8 0 0 0-.53-.23h-2.49V.73a.8.8 0 0 0-.22-.54.8.8 0 0 0-.54-.22H11.35a1 1 0 0 0-.42.13.8.8 0 0 0-.34.63v13.73a1 1 0 0 0 .13.42 1 1 0 0 0 .34.29 1 1 0 0 0 .3.05h1.8a3.2 3.2 0 0 0 1.5 2.35 3.2 3.2 0 0 0 4.82-2.35h4.58a3.2 3.2 0 0 0 1.51 2.35 3.17 3.17 0 0 0 4.33-1 3 3 0 0 0 .49-1.35h1.77a1 1 0 0 0 .42-.12.8.8 0 0 0 .34-.64V9.47a.7.7 0 0 0-.21-.47"
            />
        </svg>
    );
}
