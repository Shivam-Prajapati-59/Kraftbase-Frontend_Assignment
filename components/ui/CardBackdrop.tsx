/**
 * Reusable frosted-glow backdrop for feature card visuals.
 * Renders the orb + sheen stack that sits behind card content.
 * Parent must be relative + overflow-hidden; content goes above with z-10.
 */
const CardBackdrop = () => {
    return (
        <span aria-hidden="true" className="pointer-events-none absolute inset-0">
            <span className="bg-data-orb absolute top-[12.68%] bottom-[13.61%] left-[-7.5%] right-[65.01%] rounded-[380px] blur-[80px]" />
            <span className="bg-data-visual absolute top-[28.01%] bottom-[-33.45%] left-[8.33%] right-[37.6%] rounded-[380px] blur-[75px]" />
            <span className="absolute top-[-92.8%] bottom-[50.76%] left-[-73.55%] right-[31.94%] rotate-[75.24deg] bg-white/15 blur-[100px] [mix-blend-mode:plus-lighter]" />
            <span className="absolute top-[32.86%] bottom-[-26.5%] left-[-42.5%] right-[49.15%] rotate-45 bg-white/15 blur-[100px] [mix-blend-mode:plus-lighter]" />
            <span className="absolute top-[3.6%] bottom-[44.82%] left-[47.5%] right-[25.42%] rotate-[138.28deg] bg-white/10 blur-[120px] [mix-blend-mode:plus-lighter]" />
        </span>
    )
}

export default CardBackdrop
