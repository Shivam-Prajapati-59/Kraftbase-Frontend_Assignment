import FolderCheckIcon from '@/components/ui/FolderCheckIcon'
import NetworkIcon from '@/components/ui/NetworkIcon'
import SearchBadgeIcon from '@/components/ui/SearchBadgeIcon'
import CardBackdrop from '@/components/ui/CardBackdrop'
import GaugeDial from '@/components/ui/GaugeDial'

const BULLETS = [
    {
        icon: FolderCheckIcon,
        text: 'Get more volume in your serviceable pincodes',
    },
    {
        icon: NetworkIcon,
        text: 'Manage all allocations on a single tool allowing you to maximize resource utilization.',
    },
    {
        icon: SearchBadgeIcon,
        text: 'Discover pincodes with high potential to expand your serviceability',
    },
]

const AgenciesSection = () => {
    return (
        <section className="px-5 py-16 md:py-24">
            <div className="mx-auto flex w-full max-w-[1188px] flex-col items-center gap-3 text-center">
                <p className="bg-btn-primary bg-clip-text font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-bold capitalize leading-[1] tracking-[0] text-transparent">
                    For Agencies
                </p>
                <h2 className="mx-auto max-w-[1188px] text-balance font-sans text-[clamp(1.875rem,1.25rem+3.2vw,3.375rem)] font-semibold leading-[1.37] tracking-[-0.05em]">
                    <span className="bg-section-headline bg-clip-text text-transparent">
                        We fuel demand and empower agencies to execute with unmatched
                        efficiency and reliability.
                    </span>
                </h2>
            </div>

            <div className="mx-auto mt-10 flex w-full max-w-[1196px] flex-col gap-4 sm:flex-row sm:gap-10 md:mt-12">
                <div className="flex-1" aria-current="true">
                    <p className="bg-card-title bg-clip-text text-center font-sans text-[clamp(1.25rem,0.9rem+1.75vw,2.25rem)] font-semibold leading-[1.444] tracking-[-0.05em] text-transparent">
                        Accelerate Business Growth
                    </p>
                    <span
                        aria-hidden="true"
                        className="bg-btn-primary mt-3 block h-[3px] w-full rounded-full"
                    />
                </div>
                <div className="flex-1" aria-disabled="true">
                    <p className="bg-card-title bg-clip-text text-center font-sans text-[clamp(1.25rem,0.9rem+1.75vw,2.25rem)] font-normal leading-[1.444] tracking-[-0.05em] text-transparent">
                        Technology &amp; Data driven operations
                    </p>
                    <span
                        aria-hidden="true"
                        className="mt-3 block h-[3px] w-full rounded-full bg-slate-200/70"
                    />
                </div>
            </div>

            <div className="mx-auto mt-10 grid w-full max-w-[1640px] grid-cols-1 items-stretch gap-6 md:mt-12 lg:grid-cols-[775fr_826fr] lg:gap-[39px]">
                <div className="bg-data-panel relative order-1 mx-auto aspect-[775/470] w-full max-w-[775px] overflow-hidden rounded-[32px] border-2 border-[#0000000A] backdrop-blur-[84px]">
                    <CardBackdrop />
                    <div className="bg-glass-fade absolute top-[12.8%] left-[8%] aspect-[651/410] w-[84%] rounded-t-[40px] shadow-[0px_-20px_140px_0px_#1F354A1F]">
                        <div className="bg-panel-sheen absolute top-[2.9%] left-[2%] aspect-[627/384] w-[96.3%] rounded-t-[32px] border-x border-t border-[#0000001A]">
                            <p className="bg-card-title absolute top-[5.2%] left-[3.8%] w-[75.8%] bg-clip-text font-sans text-[clamp(1.0625rem,0.9rem+0.85vw,1.625rem)] font-medium leading-[1.385] tracking-[-0.05em] text-transparent">
                                Unlock more business without increasing operational overhead
                            </p>
                            <div className="absolute top-[30%] left-1/2 w-[72%] -translate-x-1/2 text-center sm:w-[55%] lg:w-[44.6%]">
                                <GaugeDial />
                                <p className="-mt-[6%] text-center font-sans text-[clamp(2rem,1.4rem+3vw,3.3125rem)] font-semibold leading-[1.09] tracking-[-0.04em] text-[#242424]">70%</p>
                                <p className="mt-3 font-sans text-[clamp(0.7rem,0.6rem+1.2vw,0.8125rem)] font-semibold text-ink">
                                    Your DPD Resolution Rate is Good
                                </p>
                                <p className="mt-1 font-sans text-[clamp(0.65rem,0.55rem+1vw,0.75rem)] text-muted">
                                    Last Check on 21 Apr
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="order-2 flex flex-col justify-center gap-4 rounded-[32px] sm:gap-5">
                    {BULLETS.map((item) => (
                        <div
                            key={item.text}
                            className="mx-auto flex min-h-[122px] w-full max-w-[746px] items-center gap-5 rounded-[22px] border border-[#0000001A] bg-[#FFFFFF87] p-5 sm:p-6 lg:mx-0"
                        >
                            <span className="flex h-[60px] w-[60px] shrink-0 items-center justify-center overflow-hidden rounded-2xl border-4 border-white">
                                <item.icon />
                            </span>
                            <p className="max-w-[580px] font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-medium leading-[1.5] tracking-[0] text-ink">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AgenciesSection
