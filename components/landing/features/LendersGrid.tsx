import AgentFocusedCard from '@/components/landing/features/AgentFocusedCard'
import HighlyCustomizableCard from '@/components/landing/features/HighlyCustomizableCard'
import DataDrivenCard from '@/components/landing/features/DataDrivenCard'
import AgencyPartnersCard from '@/components/landing/features/AgencyPartnersCard'

const LendersGrid = () => {
    return (
        <div className="mx-auto mt-12 w-full max-w-[1640px] border-t border-black/[0.08] md:mt-16">
            <div className="relative grid grid-cols-1 justify-items-center gap-y-12 divide-y divide-black/[0.08] pt-10 lg:grid-cols-2 lg:gap-x-[120px] lg:gap-y-0 lg:divide-y-0 lg:pt-[60px]">
                <span
                    aria-hidden="true"
                    className="absolute inset-y-0 left-1/2 hidden w-px bg-black/[0.08] lg:block"
                />
                <AgentFocusedCard />
                <HighlyCustomizableCard />
                <span
                    aria-hidden="true"
                    className="my-10 hidden h-px w-full bg-black/[0.08] lg:col-span-2 lg:block"
                />
                <DataDrivenCard />
                <AgencyPartnersCard />
            </div>
        </div>
    )
}

export default LendersGrid
