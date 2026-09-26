import React from 'react'

type ButtonVariant = 'primary' | 'sky'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode
    /** Fixed width override (exact on all screens). Omit for fluid mobile sizing. */
    width?: number | string
    /** Fixed height override (exact on all screens). Omit for fluid mobile sizing. */
    height?: number | string
    variant?: ButtonVariant
    ringColorClass?: string
    glow?: boolean
    /** Renders a navigation anchor instead of a button. */
    href?: string
}

/** Contrasting keyboard-focus ring. Higher specificity than the decorative
    outline utilities so it always wins when focused. */
const FOCUS_RING =
    'focus-visible:outline-[3px] focus-visible:outline-solid focus-visible:outline-[#1948BD] focus-visible:outline-offset-[10px]'

const Button = ({
    children,
    width,
    height,
    variant = 'primary',
    ringColorClass = 'outline-[#00000014]',
    glow = true,
    href,
    className = '',
    type = 'button',
    ...rest
}: ButtonProps) => {
    const isPrimary = variant === 'primary'

    // Best practice: fluid on mobile (full-width, 52px touch target),
    // fixed Figma sizes from sm+ via className. width/height props are
    // exact-size overrides for special cases only.
    const sizeStyle: React.CSSProperties = {
        ...(width !== undefined
            ? { width: typeof width === 'number' ? `${width}px` : width }
            : {}),
        ...(height !== undefined
            ? { height: typeof height === 'number' ? `${height}px` : height }
            : {}),
    }
    const fluidSize = `${width === undefined ? 'w-full max-w-[300px]' : ''} ${
        height === undefined ? 'min-h-[52px]' : ''
    }`
    const anchorRest = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>

    if (!isPrimary) {
        const skyClassName = `${fluidSize} flex flex-col justify-center rounded-[18px] border border-[#00000014] bg-white font-sans text-[15px] font-semibold text-[#6D6D6D] shadow-[0px_80px_140px_0px_#1F2A4A1A] outline-3 outline-solid ${ringColorClass} outline-offset-2 transition hover:opacity-95 active:scale-[0.98] sm:outline-4 sm:outline-offset-4 md:text-[16px] ${FOCUS_RING} ${className}`
        const skyInner = (
            <span className="flex w-full flex-1 items-center justify-center gap-1.5">
                {children}
            </span>
        )

        if (href !== undefined) {
            return (
                <a href={href} style={sizeStyle} className={skyClassName} {...anchorRest}>
                    {skyInner}
                </a>
            )
        }

        return (
            <button
                type={type}
                style={sizeStyle}
                className={skyClassName}
                {...rest}
            >
                {skyInner}
            </button>
        )
    }

    const primaryClassName = `relative flex flex-col justify-center ${fluidSize} rounded-[18px] outline-3 outline-solid ${ringColorClass} outline-offset-2 transition hover:opacity-95 active:scale-[0.98] sm:outline-4 sm:outline-offset-[4px] ${FOCUS_RING} ${className}`
    const primaryInner = (
        <span className="flex w-full flex-1 flex-col justify-center rounded-[18px] bg-btn-border p-[4px]">
            <span className="flex w-full flex-1 items-center justify-center gap-2 rounded-[14px] bg-btn-primary font-sans text-[15px] font-semibold text-white md:text-[18px]">
                {children}
            </span>
        </span>
    )
    const primaryElement =
        href !== undefined ? (
            <a href={href} style={sizeStyle} className={primaryClassName} {...anchorRest}>
                {primaryInner}
            </a>
        ) : (
            <button
                type={type}
                style={sizeStyle}
                className={primaryClassName}
                {...rest}
            >
                {primaryInner}
            </button>
        )

    return (
        <span
            className={`relative inline-flex items-center justify-center ${
                width === undefined ? 'w-full max-w-[300px] sm:w-auto sm:max-w-none' : ''
            }`}
        >
            {glow && (
                <span
                    aria-hidden="true"
                    className="absolute top-[calc(100%-6px)] left-1/2 h-[72px] w-[340px] -translate-x-1/2 blur-[24px] [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] backdrop-blur-[52px] sm:top-[calc(100%-10px)] sm:h-[113px] sm:w-[311px]"
                >
                    <span className="bg-btn-glow block h-full w-full [clip-path:polygon(12%_0,88%_0,100%_100%,0_100%)]" />
                </span>
            )}
            {primaryElement}
        </span>
    )
}

export default Button
