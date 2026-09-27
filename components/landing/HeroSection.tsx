import React from 'react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import LogoMarquee from '@/components/landing/LogoMarquee'
import HeroBackground from '@/components/landing/HeroBackground'
import HeroCollage from '@/components/landing/HeroCollage'
import HeroHeadline from '@/components/landing/HeroHeadline'
import { MoveDownRight, MoveUpRight } from 'lucide-react'

const EYEBROW_AVATARS = [
    { src: 'https://randomuser.me/api/portraits/men/11.jpg', alt: 'Customer' },
    { src: 'https://randomuser.me/api/portraits/women/33.jpg', alt: 'Customer' },
    { src: 'https://randomuser.me/api/portraits/men/45.jpg', alt: 'Customer' },
]


const HeroSection = () => {
    // Capped at ~content height: on very tall viewports (4K) an uncapped
    // min-h-screen left a huge void between the hero content and the
    // features section. Below the cap this is identical to min-h-screen.
    return (
        <section className="relative z-0 min-h-[min(100svh,1100px)] px-5 pt-16 sm:pt-20">
            <HeroBackground />

            <div className="mx-auto mb-6 flex w-full max-w-[580px] flex-wrap items-center justify-center gap-4">
                <span className="flex -space-x-3">
                    {EYEBROW_AVATARS.map((avatar) => (
                        <Image
                            key={avatar.src}
                            src={avatar.src}
                            alt={avatar.alt}
                            width={80}
                            height={80}
                            className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                        />
                    ))}
                    <span className="bg-btn-primary flex h-10 w-10 items-center justify-center rounded-full font-sans text-[11px] font-bold text-white ring-2 ring-white">
                        +5K
                    </span>
                </span>
                <p className="font-sans text-[clamp(0.9375rem,0.8rem+0.9vw,1.5rem)] font-medium capitalize leading-[1] tracking-[0] text-[#6D6D6D]">
                    Businesses Rely On Collectedge
                </p>
            </div>
            <HeroHeadline />

            <p className="mx-auto mt-5 max-w-[815px] text-center text-balance font-sans font-medium tracking-[0] leading-[1.5] text-muted text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] md:mt-6">
                Our tool is designed with agencies & collection managers in mind, ensuring user-friendly experience tailored to their needs
            </p>

            <div className="mt-7 lg:mt-12 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-10 md:mt-10">
                <Button variant="primary" ringColorClass="outline-[#00000014]" className="sm:h-[64px] sm:w-[218px] sm:max-w-none" href="#lenders">
                    Get Started <MoveUpRight size={16} aria-hidden="true" />
                </Button>
                <Button variant="sky" ringColorClass="outline-[#00000014]" className="relative z-10 sm:h-[64px] sm:w-[218px] sm:max-w-none" href="#lenders">
                    How we work <MoveDownRight size={16} aria-hidden="true" />
                </Button>
            </div>

            <div className="relative z-10 mx-auto mt-15  pb-5 lg:pb-13 flex w-full max-w-[1434px] items-center justify-center gap-4 sm:gap-8 md:mt-25">
                <span
                    aria-hidden="true"
                    className="bg-dash-fade h-0.5 max-w-116.25 min-w-8 flex-1 scale-x-[-1] mask-[repeating-linear-gradient(90deg,black_0_4px,transparent_4px_8px)]"
                />
                <p className="font-sans text-[clamp(0.8125rem,0.6rem+1vw,1.5rem)] font-medium capitalize leading-[1] tracking-[0] text-center whitespace-nowrap text-muted">
                    Join <span className="font-bold text-ink">4,000+</span> companies already grow
                </p>
                <span
                    aria-hidden="true"
                    className="bg-dash-fade h-0.5 max-w-116.25 min-w-8 flex-1 mask-[repeating-linear-gradient(90deg,black_0_4px,transparent_4px_8px)]"
                />
            </div>
            <LogoMarquee />
            <HeroCollage />
        </section>
    )
}

export default HeroSection