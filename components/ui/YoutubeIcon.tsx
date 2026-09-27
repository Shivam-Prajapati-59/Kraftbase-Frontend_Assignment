interface YoutubeIconProps {
    width?: number
    height?: number
    className?: string
}

const YoutubeIcon = ({ width = 32, height = 29, className = '' }: YoutubeIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 32 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path d="M26.984 10.1283L13.7479 2.65492C11.151 1.18865 7.85711 2.10521 6.39084 4.70212L2.65492 11.3188C1.18865 13.9157 2.10521 17.2096 4.70212 18.6759L17.9383 26.1493C20.5352 27.6155 23.8291 26.699 25.2953 24.1021L29.0313 17.4854C30.4975 14.8885 29.581 11.5946 26.984 10.1283ZM19.0994 16.6652L11.2412 16.1224C11.0318 16.1079 10.9092 15.8801 11.0124 15.6973L14.4509 9.60731C14.5556 9.42196 14.819 9.41225 14.937 9.58937L19.3566 16.2222C19.488 16.4194 19.3358 16.6816 19.0994 16.6652Z" fill="#F61C0D" />
        </svg>
    )
}

export default YoutubeIcon
