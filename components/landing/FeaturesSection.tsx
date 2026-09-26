import React from 'react'
import LendersGrid from '@/components/landing/features/LendersGrid'

const FeaturesSection = () => {
    return (
        <section id="lenders" className="px-5 py-16 scroll-mt-28">
            <div className="mx-auto flex w-full max-w-[1133px] flex-col items-center gap-3 text-center">
                <p className="bg-btn-primary bg-clip-text font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-bold capitalize leading-[1] tracking-[0] text-transparent">
                    For Lenders
                </p>
                <h1 className="mx-auto max-w-[861px] text-balance font-sans text-[clamp(1.875rem,1.25rem+3.2vw,3.375rem)] font-semibold leading-[1.37] tracking-[-0.05em]">
                    <span className="bg-section-headline bg-clip-text text-transparent">
                        We&apos;re changing the game with one complete agency management tool
                    </span>
                </h1>
            </div>
            <LendersGrid />
        </section>
    )
}

export default FeaturesSection