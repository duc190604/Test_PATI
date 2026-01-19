interface RefillIconProps {
    width?: number;
    height?: number;
    className?: string;
    fill?: string;
}

export function RefillIcon({
    width = 20,
    height = 20,
    className = '',
    fill = '#000'
}: RefillIconProps) {
    return (
        <svg
            width={width}
            height={height}
            fill="none"
            viewBox="0 0 17 17"
            className={className}
        >
            <path fill={fill} d="M14.6 12.2q.5 0 .6.3l.2 2.1c0 .6-.8.7-.8.1l-.1-1.2A7.9 7.9 0 0 1 .7 7c.1-.6 1-.4.9.1a7 7 0 0 0 12 6h-.8c-.6.1-.7-.7-.1-.8zM4.4 3.5h-1a7 7 0 0 1 12 6c0 .6.8.8.9.2A7.9 7.9 0 0 0 2.7 3l-.1-1c0-.6-.9-.5-.8 0l.1 2.1q.1.4.5.4l2-.2c.6 0 .6-.9 0-.8"/>
        </svg>
    );
}
