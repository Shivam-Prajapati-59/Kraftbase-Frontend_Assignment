/**
 * Hero backdrop — four blurred ellipse layers composed on a 1920px canvas.
 * Decorative only. Original gradients/positions untouched — only the
 * "boxy edge" causes were fixed so it spans full width and blends:
 * - `rounded-full` (capsule → flat straight edges) changed to
 *   `rounded-[50%]` so each layer is a true ellipse.
 * - `scale-[0.55..1]` transforms removed. Scaling shrank the painted area,
 *   leaving uncovered gutters (not full-width). The canvas now stays full
 *   size: `w-[max(1920px,100%)]`, centered.
 * - Mask previously cut to transparent at 58% of the canvas, drawing a hard
 *   horizontal box line mid-hero. It now holds opaque through the content
 *   (`black_70%`) and only feathers out at the very bottom (`98%`), with a
 *   soft fade-in at the top.
 * - Wrapper gets `overflow-hidden` so blurred halos never slice against the
 *   viewport edge.
 */
const HeroBackground = () => {
    return (
        <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_70%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,transparent_0%,black_12%,black_70%,transparent_98%)]"
        >
            <span className="absolute top-0 left-1/2 block h-[1786px] w-[max(1920px,100%)] max-w-none origin-top -translate-x-1/2">
                <span className="absolute top-[732px] left-[-413px] block h-[1406px] w-[1902px] rounded-[50%] bg-[linear-gradient(159.61deg,#CAEBFD_23.61%,#CED5F9_40.99%)] blur-[150px]" />
                <span className="absolute top-[1201.7px] left-[-420.4px] block h-[1061.27px] w-[484.8px] rotate-[-5.86deg] rounded-[50%] bg-[#D4CEF9] blur-[150px]" />
                <span className="absolute top-[1067px] left-[1735px] block h-[1014.09px] w-[2782.3px] rotate-[-87.59deg] rounded-[50%] bg-[linear-gradient(277.47deg,#CAEBFD_33.09%,#CED5F9_57.95%)] blur-[150px]" />
                <span className="absolute top-[77px] left-[402px] block h-[1786px] w-[1902px] rounded-[50%] bg-[linear-gradient(180.05deg,#CAEBFD_0.04%,#CED5F9_10.04%)] blur-[154px]" />
            </span>
            <span
                aria-hidden="true"
                className="absolute bottom-0 left-1/2 block h-[38%] w-[86%] max-w-[1460px] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(58%_62%_at_50%_55%,rgba(206,213,249,0.55)_0%,rgba(255,255,255,0)_72%)]"
            />
            {/* Melt the lavender tail into page white — no separation line
                into the next section. Sits behind content (-z-10 parent). */}
            <span
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 block h-[30%] bg-gradient-to-b from-transparent via-white/70 to-white"
            />
        </span>
    )
}

export default HeroBackground
