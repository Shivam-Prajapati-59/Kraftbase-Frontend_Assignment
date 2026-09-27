'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, MoveUpRight, Quote, Share2 } from 'lucide-react'
import Button from '@/components/ui/Button'
import Stars from '@/components/ui/Stars'
import TestimonialAvatar from '@/components/ui/TestimonialAvatar'

interface Testimonial {
    name: string
    role: string
    quote: string
    src?: string
    initialsBg: string
}

const TESTIMONIALS: Testimonial[] = [
    {
        name: 'David Koroma',
        role: 'CEO, NeoBank Africa',
        quote:
            'We used to get a lot of complaints about clarity. Since deploying Collectedge, complaints related to payment disputes dropped by over 50%. The self-service portals and clear communication flows have been game-changers.',
        src: 'https://randomuser.me/api/portraits/men/22.jpg',
        initialsBg: 'bg-[#FCEFC7] text-[#8A6D00]',
    },
    {
        name: 'Rahul Sharma',
        role: 'Head of Collections, FinServe India',
        quote:
            'Recovery rates climbed steadily within two quarters of switching to Collectedge. The agency leaderboard keeps every partner accountable without adding review overhead.',
        src: 'https://randomuser.me/api/portraits/men/32.jpg',
        initialsBg: 'bg-[#E7EDF7] text-brand-primary',
    },
    {
        name: 'Priya Nair',
        role: 'Head of Risk & Collections',
        quote:
            "Since implementing the Collectedge platform, we've seen a 40% improvement in resolving delinquent payment disputes within the first 30 days. The automation and transparency it brings have transformed how our collections team operates — reducing manual overhead and improving customer trust. It's become an essential part of our risk management toolkit.",
        src: 'https://randomuser.me/api/portraits/women/65.jpg',
        initialsBg: 'bg-[#E7EDF7] text-brand-primary',
    },
    {
        name: 'Anita Desai',
        role: 'Risk Manager, CreditEdge',
        quote:
            'Audit trails and collection insights finally live in one place. Month-end reporting that took days now takes an afternoon.',
        src: 'https://randomuser.me/api/portraits/women/44.jpg',
        initialsBg: 'bg-[#F3E8FD] text-[#6B21A8]',
    },
    {
        name: 'Vikram Mehta',
        role: 'Operations Lead, RecoverPlus',
        quote:
            'Allocating pin codes across agencies used to be spreadsheet chaos. Now it is one dashboard, and our resolution rate shows it.',
        src: 'https://randomuser.me/api/portraits/men/54.jpg',
        initialsBg: 'bg-[#E7EDF7] text-brand-primary',
    },
]

const TestimonialCard = ({ item, dimmed }: { item: Testimonial; dimmed?: boolean }) => {
    return (
        <div
            className={`flex min-h-[460px] w-full flex-col rounded-[28px] border border-black/[0.05] bg-[linear-gradient(165deg,#FFFFFF_0%,#EDF1FA_55%,#DCE5F7_100%)] p-6 shadow-[0_16px_48px_rgba(25,72,189,0.08)] transition-all duration-300 sm:h-[480px] sm:p-10 lg:h-[504px] ${dimmed === true ? 'translate-y-0 scale-[0.98] opacity-60' : '-translate-y-5 scale-100 opacity-100'
                }`}
        >
            <div className="flex items-center gap-[18px]">
                <TestimonialAvatar name={item.name} src={item.src} bgClassName={item.initialsBg} />
                <span className="min-w-0 flex-1">
                    <p className="truncate font-sans text-[22px] font-semibold leading-[1] tracking-[0] text-ink sm:text-[28px]">
                        {item.name}
                    </p>
                    <p className="mt-1 truncate font-sans text-sm text-muted sm:text-[15px]">{item.role}</p>
                </span>
                <Quote size={40} aria-hidden="true" className="hidden shrink-0 text-black/[0.08] sm:block" />
            </div>
            <p className="mt-6 max-w-[743px] flex-1 font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-medium italic leading-[1.583] tracking-[0] text-ink sm:line-clamp-[6] sm:overflow-hidden">
                {item.quote}
            </p>
            <div className="mt-4 flex items-center justify-between gap-4">
                <Stars className="h-auto w-[160px] sm:w-[228px]" />
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-black/[0.05] text-muted">
                    <Share2 size={16} aria-hidden="true" />
                </span>
            </div>
        </div>
    )
}

const TestimonialsSection = () => {
    const trackRef = useRef<HTMLDivElement>(null)
    const [active, setActive] = useState(2)
    const activeRef = useRef(2)
    const reduceMotion = useReducedMotion()

    const centerOn = useCallback(
        (index: number, smooth: boolean) => {
            const track = trackRef.current
            const card = track?.querySelectorAll<HTMLElement>('[data-card]')[index]
            if (track === null || track === undefined || card === undefined) return
            track.scrollTo({
                left: card.offsetLeft - (track.clientWidth - card.clientWidth) / 2,
                behavior: smooth ? 'smooth' : 'auto',
            })
        },
        [],
    )

    useEffect(() => {
        centerOn(2, false)
    }, [centerOn])

    useEffect(() => {
        const track = trackRef.current
        if (track === null) return
        let frame = 0
        const onScroll = () => {
            cancelAnimationFrame(frame)
            frame = requestAnimationFrame(() => {
                const cards = track.querySelectorAll<HTMLElement>('[data-card]')
                let best = 0
                let bestDist = Number.POSITIVE_INFINITY
                cards.forEach((card, i) => {
                    const dist = Math.abs(
                        card.offsetLeft + card.clientWidth / 2 - (track.scrollLeft + track.clientWidth / 2),
                    )
                    if (dist < bestDist) {
                        bestDist = dist
                        best = i
                    }
                })
                activeRef.current = best
                setActive(best)
            })
        }
        track.addEventListener('scroll', onScroll, { passive: true })
        return () => {
            track.removeEventListener('scroll', onScroll)
            cancelAnimationFrame(frame)
        }
    }, [])

    const go = useCallback(
        (dir: number) => {
            const next = (activeRef.current + dir + TESTIMONIALS.length) % TESTIMONIALS.length
            activeRef.current = next
            setActive(next)
            centerOn(next, true)
        },
        [centerOn],
    )

    return (
        <section className="px-5 py-16 md:py-24">
            <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-64px' }}
                transition={{ duration: 0.55, ease: 'easeOut' }}
                className="relative mx-auto flex w-full max-w-[585px] flex-col items-center gap-3 text-center"
            >
                <p className="bg-btn-primary bg-clip-text font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-bold capitalize leading-[1] tracking-[0] text-transparent">
                    Testimonial
                </p>
                <h2 className="mx-auto max-w-[585px] text-balance font-sans text-[clamp(1.875rem,1.25rem+3.2vw,3.375rem)] font-semibold leading-[1] tracking-[-0.05em]">
                    <span className="bg-section-headline bg-clip-text text-transparent">
                        Trusted by Professionals
                    </span>
                </h2>
            </motion.div>

            <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-64px' }}
                transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                className="relative mt-10 md:mt-12"
            >
                <div
                    ref={trackRef}
                    className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-[max(1.25rem,calc(50%-412px))] pt-6 pb-2 mask-[linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {TESTIMONIALS.map((item, i) => (
                        <div
                            key={item.name}
                            data-card
                            className="w-[min(824px,88%)] flex-none snap-center"
                        >
                            <TestimonialCard item={item} dimmed={i !== active} />
                        </div>
                    ))}
                </div>
                <motion.div
                    initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-64px' }}
                    transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                    className="mt-6 flex items-center justify-center gap-3"
                >
                    <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label="Previous testimonial"
                        className="flex h-[62px] w-[62px] items-center justify-center rounded-full border border-black/10 bg-white text-ink transition hover:bg-black/[0.03]"
                    >
                        <ChevronLeft size={20} aria-hidden="true" />
                    </button>
                    <div className="flex items-center gap-2" role="group" aria-label="Choose testimonial">
                        {TESTIMONIALS.map((item, i) => (
                            <button
                                key={item.name}
                                type="button"
                                aria-current={i === active}
                                aria-label={`Go to testimonial ${i + 1}: ${item.name}`}
                                onClick={() => {
                                    setActive(i)
                                    centerOn(i, true)
                                }}
                                className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-brand-primary' : 'w-2 bg-black/15 hover:bg-black/25'
                                    }`}
                            />
                        ))}
                    </div>
                    <span className="rounded-full bg-btn-border p-[1px]">
                        <button
                            type="button"
                            onClick={() => go(1)}
                            aria-label="Next testimonial"
                            className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-btn-primary text-white transition hover:opacity-95"
                        >
                            <ChevronRight size={20} aria-hidden="true" />
                        </button>
                    </span>
                </motion.div>
            </motion.div>

            <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-64px' }}
                transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
                className="mt-8 flex justify-center"
            >
                <Button variant="primary" width={148} height={46} glow={false}>
                    View All <MoveUpRight size={15} aria-hidden="true" />
                </Button>
            </motion.div>
        </section>
    )
}

export default TestimonialsSection
