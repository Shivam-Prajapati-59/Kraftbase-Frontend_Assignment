import Image from 'next/image'
import { Plus } from 'lucide-react'
import DataIcon from '@/components/ui/DataIcon'
import CardBackdrop from '@/components/ui/CardBackdrop'

const DataDrivenCard = () => {
    return (
        <article className="flex w-full max-w-[760px] flex-col gap-10">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <DataIcon width={38} height={38} />
                    <h3 className="bg-card-title bg-clip-text font-sans text-[clamp(1.5rem,1.1rem+2vw,2.5rem)] font-semibold leading-[1] tracking-[-0.05em] text-transparent pb-[0.25em] -mb-[0.25em]">
                        Driven by Data
                    </h3>
                </div>
                <p className="font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-normal leading-[1.5] tracking-[0] text-muted">
                    Our data-driven approach equips collection managers with insights
                    to make informed &amp; actionable decisions
                </p>
            </div>
            <div className="bg-data-panel relative mr-auto aspect-[720/455] w-full max-w-[720px] overflow-hidden rounded-[40px] border-2 border-[#0000000A] backdrop-blur-[84px]">
                <CardBackdrop />
                <span
                    aria-hidden="true"
                    className="bg-data-visual absolute top-[8%] right-[4%] bottom-[8%] left-[54%] rounded-[380px] blur-[75px]"
                />
                <div className="absolute top-[8.8%] left-[3.5%] z-10 aspect-[873/833] w-[59%]">
                    <Image
                        src="/assets/card21.png"
                        alt="Bar chart of interactions and amount collected per day"
                        width={1445}
                        height={1396}
                        priority
                        className="absolute top-[-34.1%] left-[-32.5%] h-auto w-[165.5%] max-w-none"
                    />
                </div>
                <div className="absolute top-[13.4%] left-[62.08%] z-10 aspect-[212/221] w-[29.44%] overflow-hidden rounded-[20px] shadow-[0px_40px_140px_0px_#1F354A14]">
                    <Image
                        src="/assets/card22.png"
                        alt="Operational Health donut showing an 80 percent score"
                        width={986}
                        height={1002}
                        className="absolute top-[-45.8%] left-[-66.7%] h-auto w-[234.8%] max-w-none"
                    />
                </div>
                <div className="bg-tile-fill absolute top-[67%] left-[62.08%] z-10 flex aspect-[166/80] w-[23.06%] items-center justify-center rounded-[16px] border-2 border-dashed border-[#2B5CE6]/70">
                    <Plus size={26} aria-hidden="true" className="text-[#1948BD]" />
                </div>
            </div>
        </article>
    )
}

export default DataDrivenCard
