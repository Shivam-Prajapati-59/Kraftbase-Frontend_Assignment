interface XIconProps {
    width?: number
    height?: number
    className?: string
}

const XIcon = ({ width = 41, height = 41, className = '' }: XIconProps) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
        >
            <path d="M13.4252 6.69062C6.01092 10.3856 2.99562 19.3922 6.69062 26.8064C10.3856 34.2207 19.3922 37.236 26.8064 33.541C34.2207 29.846 37.236 20.8395 33.541 13.4252C29.846 6.01092 20.8395 2.99562 13.4252 6.69062Z" fill="black" />
            <path d="M20.979 18.1691L23.3968 8.62428L22.0349 9.30299L19.9355 17.5906L13.059 13.7763L8.46191 16.0673L18.8605 21.8352L16.3247 31.8446L17.6867 31.1658L19.9037 22.4138L27.1657 26.4418L31.7628 24.1508L20.9787 18.1692L20.979 18.1691ZM10.8256 16.1692L12.9175 15.1267L29.4106 24.1013L27.3187 25.1439L10.8256 16.1692Z" fill="white" />
        </svg>
    )
}

export default XIcon
