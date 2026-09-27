import Image from 'next/image'

interface TestimonialAvatarProps {
    name: string
    src?: string
    size?: number
    className?: string
    bgClassName?: string
}

const initials = (name: string) =>
    name
        .split(' ')
        .map((part) => part[0])
        .slice(0, 2)
        .join('')
        .toUpperCase()

const TestimonialAvatar = ({ name, src, size = 74, className = '', bgClassName = 'bg-[#E7EDF7] text-brand-primary' }: TestimonialAvatarProps) => {
    return (
        <span
            className={`relative inline-flex shrink-0 items-center justify-center overflow-hidden rounded-full font-sans font-semibold ${bgClassName} ${className}`}
            style={{ width: size, height: size, fontSize: size * 0.36 }}
        >
            <span aria-hidden="true">{initials(name)}</span>
            {src !== undefined && (
                <Image src={src} alt="" fill sizes="74px" className="object-cover" />
            )}
        </span>
    )
}

export default TestimonialAvatar
