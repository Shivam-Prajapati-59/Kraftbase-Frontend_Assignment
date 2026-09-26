import Image from 'next/image'
import SearchIcon from '@/components/ui/SearchIcon'
import CardBackdrop from '@/components/ui/CardBackdrop'

const AgencyPartnersCard = () => {
    return (
        <article className="flex w-full max-w-[760px] flex-col gap-10">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <SearchIcon width={38} height={38} />
                    <h3 className="bg-card-title bg-clip-text font-sans text-[clamp(1.5rem,1.1rem+2vw,2.5rem)] font-semibold leading-[1] tracking-[-0.05em] text-transparent pb-[0.25em] -mb-[0.25em]">
                        Discover Agency partners
                    </h3>
                </div>
                <p className="font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-normal leading-[1.5] tracking-[0] text-muted">
                    Discover top-performing, tech-driven agencies designed to
                    deliver results with minimal overhead.
                </p>
            </div>
            <div className="bg-data-panel relative mr-auto aspect-[720/455] w-full max-w-[720px] overflow-hidden rounded-[40px] border-2 border-[#0000000A] backdrop-blur-[84px]">
                <CardBackdrop />
                <div className="absolute top-[10.1%] left-[15%] aspect-[404/318] w-[56.12%] rotate-[3.47deg] overflow-hidden rounded-[20px] shadow-[0px_40px_140px_0px_#1F354A26]">
                    <Image
                        src="/assets/card41.png"
                        alt="AFL Services agency profile with agent counts and ratings"
                        width={1406}
                        height={1244}
                        className="absolute top-[-30.4%] left-[-32.35%] h-auto w-[164.8%] max-w-none"
                    />
                </div>
                <div className="absolute top-[33%] left-[57.75%] z-10 w-[32.5%] rotate-[-10.42deg]">
                    <Image
                        src="/assets/card42.png"
                        alt="Lightning badge"
                        width={424}
                        height={424}
                        className="h-auto w-full"
                    />
                </div>
                <div className="absolute top-[61.3%] left-[47.9%] w-[40.64%] rotate-[-8.34deg]">
                    <Image
                        src="/assets/card43.png"
                        alt="Send enquiry card for AFL Services"
                        width={609}
                        height={287}
                        className="h-auto w-full"
                    />
                </div>
            </div>
        </article>
    )
}

export default AgencyPartnersCard
