'use client'

import CustomizeIcon from '@/components/ui/CustomizeIcon'
import CardBackdrop from '@/components/ui/CardBackdrop'
import GearIcon from '@/components/ui/GearIcon'
import CodeIcon from '@/components/ui/CodeIcon'
import DatabaseIcon from '@/components/ui/DatabaseIcon'
import CenterBadgeIcon from '@/components/ui/CenterBadgeIcon'
import { motion, useReducedMotion } from 'motion/react'
import { Briefcase } from 'lucide-react'

const HighlyCustomizableCard = () => {
    const reduceMotion = useReducedMotion()
    const dashFlow = reduceMotion
        ? undefined
        : { strokeDashoffset: [0, -8] }
    const dashFlowOut = reduceMotion
        ? undefined
        : { strokeDashoffset: [0, 8] }
    const dashTransition = {
        duration: 0.6,
        ease: 'linear' as const,
        repeat: Infinity,
    }
    const hubPulse = reduceMotion
        ? undefined
        : { scale: [1, 1.05, 1] }
    const hubTransition = {
        duration: 2.4,
        ease: 'easeInOut' as const,
        repeat: Infinity,
    }
    return (
        <article className="flex w-full max-w-[760px] flex-col gap-10">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <CustomizeIcon width={31} height={31} />
                    <h3 className="bg-card-title bg-clip-text font-sans text-[clamp(1.5rem,1.1rem+2vw,2.5rem)] font-semibold leading-[1] tracking-[-0.05em] text-transparent pb-[0.25em] -mb-[0.25em]">
                        Highly Customizable
                    </h3>
                </div>
                <p className="font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-normal leading-[1.5] tracking-[0] text-muted">
                    Our tool is designed with agencies &amp; collection managers in mind,
                    ensuring user-friendly experience tailored to their needs
                </p>
            </div>
            <div className="bg-data-panel relative mr-auto aspect-[720/455] w-full max-w-[720px] overflow-hidden rounded-[40px] border-2 border-[#0000000A] backdrop-blur-[84px]">
                <CardBackdrop />
                <div className="relative z-10 h-full w-full">
                    {/* Connector lines: each of the 4 side icons -> hub edge, plus hub -> button.
                        Coordinates computed in the card's native 720x455 box, matching the
                        top/left/width percentages used by the icon spans below, so every
                        line begins at an icon's center and ends exactly on the hub's edge. */}
                    <svg
                        viewBox="0 0 720 455"
                        fill="none"
                        aria-hidden="true"
                        className="absolute inset-0 z-0 h-full w-full"
                    >
                        <defs>
                            <linearGradient id="line-tl" x1="160" y1="128" x2="300" y2="172" gradientUnits="userSpaceOnUse">
                                <stop offset="0.15" stopColor="black" stopOpacity="0.29" />
                                <stop offset="1" stopColor="black" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="line-bl" x1="132" y1="282" x2="300" y2="206" gradientUnits="userSpaceOnUse">
                                <stop offset="0.15" stopColor="black" stopOpacity="0.29" />
                                <stop offset="1" stopColor="black" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="line-tr" x1="560" y1="128" x2="420" y2="172" gradientUnits="userSpaceOnUse">
                                <stop offset="0.225962" stopColor="black" stopOpacity="0.29" />
                                <stop offset="1" stopColor="black" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="line-br" x1="588" y1="282" x2="420" y2="206" gradientUnits="userSpaceOnUse">
                                <stop offset="0.225962" stopColor="black" stopOpacity="0.29" />
                                <stop offset="1" stopColor="black" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="line-tu" x1="290" y1="20" x2="348" y2="128" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="black" stopOpacity="0" />
                                <stop offset="0.4" stopColor="black" stopOpacity="0.29" />
                                <stop offset="1" stopColor="black" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="line-tur" x1="430" y1="20" x2="372" y2="128" gradientUnits="userSpaceOnUse">
                                <stop offset="0" stopColor="black" stopOpacity="0" />
                                <stop offset="0.4" stopColor="black" stopOpacity="0.29" />
                                <stop offset="1" stopColor="black" stopOpacity="0" />
                            </linearGradient>
                            <linearGradient id="line-hub-pill" x1="360" y1="346" x2="360" y2="250" gradientUnits="userSpaceOnUse">
                                <stop offset="0.15" stopColor="black" stopOpacity="0.25" />
                                <stop offset="1" stopColor="black" stopOpacity="0" />
                            </linearGradient>
                        </defs>

                        {/* top-left icon (Settings) -> hub: horizontal from icon, then diagonal to hub */}
                        <motion.path d="M160 128 L225 128 L300 172" stroke="url(#line-tl)" strokeWidth="2" strokeDasharray="4 4" fill="none" animate={dashFlowOut} transition={dashTransition} />
                        {/* bottom-left icon (Code2) -> hub: horizontal from icon, then diagonal to hub */}
                        <motion.path d="M132 282 L215 282 L300 206" stroke="url(#line-bl)" strokeWidth="2" strokeDasharray="4 4" fill="none" animate={dashFlowOut} transition={dashTransition} />
                        {/* top-right icon (Database) -> hub: horizontal from icon, then diagonal to hub */}
                        <motion.path d="M560 128 L495 128 L420 172" stroke="url(#line-tr)" strokeWidth="2" strokeDasharray="4 4" fill="none" animate={dashFlowOut} transition={dashTransition} />
                        {/* bottom-right icon (Briefcase) -> hub: horizontal from icon, then diagonal to hub */}
                        <motion.path d="M588 282 L505 282 L420 206" stroke="url(#line-br)" strokeWidth="2" strokeDasharray="4 4" fill="none" animate={dashFlowOut} transition={dashTransition} />
                        {/* top edge -> hub top: same elbow type, both sides */}
                        <motion.path d="M290 20 L290 84 L348 128" stroke="url(#line-tu)" strokeWidth="2" strokeDasharray="4 4" fill="none" animate={dashFlow} transition={dashTransition} />
                        <motion.path d="M430 20 L430 84 L372 128" stroke="url(#line-tur)" strokeWidth="2" strokeDasharray="4 4" fill="none" animate={dashFlow} transition={dashTransition} />
                        {/* hub base -> API pill: straight run flowing up into the hub */}
                        <motion.line x1="360" y1="346" x2="360" y2="250" stroke="url(#line-hub-pill)" strokeWidth="2" strokeDasharray="4 4" animate={dashFlow} transition={dashTransition} />
                    </svg>

                    <span
                        aria-hidden="true"
                        className="absolute top-[22.7%] left-1/2 aspect-square w-[23.6%] -translate-x-1/2 rounded-[28%] bg-white/60 blur-xl"
                    />
                    <motion.span animate={hubPulse} transition={hubTransition} className="absolute top-[28.4%] left-1/2 flex aspect-square w-[16.5%] -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-[0px_24px_172px_0px_#1F2A4A5E]">
                        <CenterBadgeIcon className="h-auto w-[32%]" />
                    </motion.span>
                    <span className="bg-satellite absolute top-[21.1%] left-[13.3%] flex aspect-square w-[9.72%] items-center justify-center rounded-full border-4 border-white shadow-[0_10px_30px_rgba(25,72,189,0.12)]">
                        <GearIcon className="h-auto w-[45%]" />
                    </span>
                    <span className="bg-satellite absolute top-[54.1%] left-[13.3%] flex aspect-square w-[9.72%] items-center justify-center rounded-full border-4 border-white shadow-[0_10px_30px_rgba(25,72,189,0.12)]">
                        <CodeIcon className="h-auto w-[45%]" />
                    </span>
                    <span className="bg-satellite absolute top-[21.1%] left-[76.7%] flex aspect-square w-[9.72%] items-center justify-center rounded-full border-4 border-white shadow-[0_10px_30px_rgba(25,72,189,0.12)]">
                        <DatabaseIcon className="h-auto w-[45%]" />
                    </span>
                    <span className="bg-satellite absolute top-[54.1%] left-[76.7%] flex aspect-square w-[9.72%] items-center justify-center rounded-full border-4 border-white shadow-[0_10px_30px_rgba(25,72,189,0.12)]">
                        <Briefcase size={24} aria-hidden="true" className="h-auto w-[45%] text-brand-primary" />
                    </span>
                    <span className="absolute top-[76%] left-1/2 -translate-x-1/2 rounded-full bg-btn-primary px-10 py-5 font-sans text-xl font-semibold whitespace-nowrap text-white shadow-lg">
                        API integration
                    </span>
                </div>
            </div>
        </article>
    )
}

export default HighlyCustomizableCard