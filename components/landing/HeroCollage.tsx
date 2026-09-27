'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import {
    BoltBadgeIcon,
    DollarBadgeIcon,
    GlobeBadgeIcon,
    PhoneBadgeIcon,
} from '@/components/ui/HeroBadgeIcons'

/**
 * Floating hero collage (desktop only). All geometry resolves against the
 * page: horizontal values are % of page width (1920px Figma canvas),
 * vertical values are px from the page top. Each card is scaled so its
 * measured content box matches the Figma layout box exactly.
 *
 * Entrance: direction-based — cards glide in from the side they live on
 * (left cards from the left, right cards from the right, with a touch of
 * vertical drift), badges pop in with a stagger. Tilt comes from the CSS
 * `rotate` property so motion's `transform` never overrides it.
 */
const EASE = [0.22, 1, 0.36, 1] as const

const HeroCollage = () => {
    const reduce = useReducedMotion()

    // Direction-based entrance: (x, y) offset follows which side the card
    // sits on; honour prefers-reduced-motion by fading only.
    const enter = (x: number, y: number, delay: number) => ({
        initial: { opacity: 0, x: reduce ? 0 : x, y: reduce ? 0 : y },
        animate: { opacity: 1, x: 0, y: 0 },
        transition: { duration: 1, delay, ease: EASE },
    })
    const pop = (delay: number) => ({
        initial: { opacity: 0, scale: reduce ? 1 : 0.4 },
        animate: { opacity: 1, scale: 1 },
        transition: { duration: 0.7, delay, ease: EASE },
    })

    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 hidden min-[1500px]:block"
        >
            <motion.div {...enter(-100, 20, 0.15)} className="absolute top-[116px] left-[-1.3%] aspect-[406/374] w-[21.15%] rotate-[-179.56deg] rounded-3xl bg-[#FFFFFFB2] mix-blend-lighten" />
            <motion.div {...enter(-130, -60, 0)} className="absolute top-[-67px] left-[-1.77%] aspect-[1197/1604] w-[29.6%] rotate-[9.38deg]">
                <Image
                    src="/assets/herocard1.png"
                    alt=""
                    width={1197}
                    height={1604}
                    priority
                    className="h-auto w-full"
                />
            </motion.div>
            <motion.div {...enter(-100, 40, 0.3)} className="absolute top-[450px] left-[-1.04%] aspect-[334/308] w-[17.4%] rotate-[-167.97deg] rounded-3xl bg-[#FFFFFFCC] mix-blend-lighten" />
            <motion.div {...enter(-110, 50, 0.2)} className="absolute top-[343px] left-[-0.2%] aspect-[1118/1181] w-[27.7%] rotate-[-5.27deg]">
                <Image
                    src="/assets/herocard2.png"
                    alt=""
                    width={1118}
                    height={1181}
                    className="h-auto w-full"
                />
            </motion.div>
            <motion.div {...enter(100, 20, 0.2)} className="absolute top-[118px] left-[78.75%] aspect-[412/422] w-[21.46%] rotate-[-8.61deg] rounded-3xl bg-[#FFFFFF91] mix-blend-lighten" />
            <motion.div {...enter(130, -60, 0.05)} className="absolute top-[-37px] left-[65.9%] aspect-[1140/1500] w-[33.9%] rotate-[6.76deg]">
                <Image
                    src="/assets/herocard3.png"
                    alt=""
                    width={1140}
                    height={1500}
                    priority
                    className="h-auto w-full"
                />
            </motion.div>
            <motion.div {...enter(110, 50, 0.25)} className="absolute top-[396px] left-[69.2%] aspect-[443/133] w-[32%] rotate-[-5.53deg]">
                <span aria-hidden="true" className="absolute -inset-2 rounded-[24px]" />
                <Image
                    src="/assets/herocard4.png"
                    alt=""
                    width={443}
                    height={133}
                    priority
                    className="relative h-auto w-full"
                />
            </motion.div>
            <motion.div {...enter(110, 70, 0.35)} className="absolute top-[550px] left-[79.2%] aspect-[786/735] w-[22%]">
                <span aria-hidden="true" className="absolute -inset-2 rounded-[24px]" />
                <Image
                    src="/assets/herocard5.png"
                    alt=""
                    width={786}
                    height={735}
                    className="relative h-auto w-full"
                />
            </motion.div>
            <motion.span {...pop(0.5)} aria-hidden="true" className="bg-satellite absolute top-[20%] left-[17%] flex h-[78px] w-[78px] items-center justify-center rounded-[57px] shadow-[0px_-8px_100px_0px_#1F2A4A2E]">
                <GlobeBadgeIcon />
            </motion.span>
            <motion.span {...pop(0.6)} aria-hidden="true" className="bg-satellite absolute top-[5%] left-[88%] flex h-[78px] w-[78px] items-center justify-center rounded-[57px] shadow-[0px_-8px_100px_0px_#1F2A4A2E]">
                <DollarBadgeIcon />
            </motion.span>
            <motion.span {...pop(0.7)} aria-hidden="true" className="bg-satellite absolute top-[56%] left-[85%] flex h-[78px] w-[78px] items-center justify-center rounded-[57px] shadow-[0px_-8px_100px_0px_#1F2A4A2E]">
                <PhoneBadgeIcon className="h-auto w-[80%]" />
            </motion.span>
            <motion.span {...pop(0.8)} aria-hidden="true" className="bg-satellite absolute top-[74%] left-[5%] flex h-[78px] w-[78px] items-center justify-center rounded-[57px] shadow-[0px_-8px_100px_0px_#1F2A4A2E]">
                <BoltBadgeIcon className="h-auto w-[65%]" />
            </motion.span>
        </div>
    )
}

export default HeroCollage
