import React from 'react'
import Button from '@/components/ui/Button'
import LogoMarquee from '@/components/landing/LogoMarquee'
import { MoveDownRight, MoveUpRight } from 'lucide-react'


const HeroSection = () => {
    return (
        <section className="min-h-screen px-5 pt-16 sm:pt-20">
            <h1 className="mx-auto max-w-[1057px] text-center text-balance font-sans font-semibold tracking-[-0.05em] leading-[1.12] md:leading-[1.135] text-[2.7rem] md:text-[clamp(2.5rem,1.5rem+5vw,6rem)]">
                <span className="block bg-hero-headline bg-clip-text text-transparent md:hidden">
                    Unified Platform<br />for Late-Stage<br />DPD Resolution.
                </span>
                <span className="hidden bg-hero-headline bg-clip-text text-transparent md:block">
                    Unified Platform for Late-<br />Stage DPD Resolution.
                </span>
            </h1>

            <p className="mx-auto mt-5 max-w-[815px] text-center text-balance font-sans font-medium tracking-[0] leading-[1.5] text-muted text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] md:mt-6">
                Our tool is designed with agencies & collection managers in mind, ensuring user-friendly experience tailored to their needs
            </p>

            <div className="mt-7 flex flex-col items-center justify-center gap-8 sm:flex-row sm:gap-10 md:mt-10">
                <Button variant="primary" ringColorClass="outline-[#00000014]" className="sm:h-[64px] sm:w-[218px] sm:max-w-none">
                    Get Started <MoveUpRight size={16} aria-hidden="true" />
                </Button>
                <Button variant="sky" ringColorClass="outline-[#00000014]" className="relative z-10 sm:h-[64px] sm:w-[218px] sm:max-w-none">
                    How we work <MoveDownRight size={16} aria-hidden="true" />
                </Button>
            </div>

            <div className="relative z-10 mx-auto mt-8 flex w-full max-w-[1434px] items-center justify-center gap-4 sm:gap-8 md:mt-25">
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
        </section>
    )
}

export default HeroSection