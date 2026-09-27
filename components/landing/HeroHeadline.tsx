'use client'

import { motion, useReducedMotion } from 'motion/react'

const EASE = [0.22, 1, 0.36, 1] as const

/**
 * "DPD Resolution." with the on-load micro-interactions from the Figma spec,
 * synced to the collage entrance (cards land ~1.35s, badges ~1.5s):
 * - 0.3s: 5px gradient line sweeps across it right-to-left (0.9s)
 * - 1.15s: caret stops at the "D" and stays permanently — no blink
 * - 0.75s: scribble underline grows left-to-right underneath (0.9s)
 * Everything lands together ~1.6s.
 *
 * Paint structure matters: the gradient text lives in its own isolated span.
 * Caret / sweep / scribble are SIBLINGS, never descendants, of the
 * `bg-clip-text` element — browsers clip descendant paint under
 * background-clipped text, which made the decorations vanish.
 */
const DpdSegment = ({ reduce, delay }: { reduce: boolean; delay: number }) => (
    <span className="relative inline-block whitespace-nowrap">
        {!reduce && (
            <motion.span
                aria-hidden="true"
                className="mr-[0.08em] inline-block h-[0.82em] w-[5px] translate-y-[0.1em] rounded-full bg-[#2B5CE6]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.25, delay: delay + 0.85 }}
            />
        )}
        <span className="bg-hero-headline bg-clip-text text-transparent">
            DPD Resolution.
        </span>
        {!reduce && (
            <motion.span
                aria-hidden="true"
                className="bg-btn-primary absolute top-[6%] bottom-[6%] w-[5px] rounded-full"
                initial={{ left: '100%', opacity: 0 }}
                animate={{ left: ['100%', '0%', '0%'], opacity: [0, 1, 1, 0] }}
                transition={{ duration: 0.9, delay, ease: EASE, times: [0, 0.65, 0.8, 1] }}
            />
        )}
        <motion.span
            aria-hidden="true"
            className="absolute top-[98%] left-[70%] block w-[26%]"
            initial={reduce ? false : { clipPath: 'inset(-20% 100% -30% 0%)', opacity: 0 }}
            animate={{ clipPath: 'inset(-20% -10% -30% 0%)', opacity: 1 }}
            transition={{ duration: 0.9, delay: delay + 0.45, ease: EASE }}
        >
            {/* Plain img on purpose: zero Next.js processing between the
                Figma SVG asset and the screen. */}
            <img
                src="/assets/scribble.svg"
                alt=""
                width={194}
                height={31}
                className="h-auto w-full"
                draggable={false}
            />
        </motion.span>
    </span>
)

/**
 * Hero H1 — same copy, type scale and gradient as before, plus the on-load
 * choreography: lines rise in, then the DPD segment plays its line sweep,
 * permanent caret and scribble draw. Static text + scribble when the user
 * prefers reduced motion.
 */
const HeroHeadline = () => {
    const reduce = useReducedMotion() ?? false

    return (
        <h1 className="mx-auto max-w-[1057px] text-center text-balance font-sans font-semibold tracking-[-0.05em] leading-[1.12] md:leading-[1.135] text-[2.7rem] md:text-[clamp(2.5rem,1.5rem+5vw,6rem)]">
            <motion.span
                className="block md:hidden"
                initial={reduce ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
            >
                <span className="bg-hero-headline bg-clip-text text-transparent">
                    Unified Platform<br />for Late-Stage<br />
                </span>
                <DpdSegment reduce={reduce} delay={0.3} />
            </motion.span>
            <motion.span
                className="hidden md:block"
                initial={reduce ? false : { opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
            >
                <span className="bg-hero-headline bg-clip-text text-transparent">
                    Unified Platform for Late-<br />Stage{' '}
                </span>
                <DpdSegment reduce={reduce} delay={0.3} />
            </motion.span>
        </h1>
    )
}

export default HeroHeadline
