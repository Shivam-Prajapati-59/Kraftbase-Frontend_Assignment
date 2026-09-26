import Image from 'next/image'
import AgentsIcon from '@/components/ui/AgentsIcon'

const AgentFocusedCard = () => {
    return (
        <article className="flex w-full max-w-[760px] flex-col gap-10">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                    <AgentsIcon width={38} height={28} />
                    <h3 className="bg-card-title bg-clip-text font-sans text-[clamp(1.5rem,1.1rem+2vw,2.5rem)] font-semibold leading-[1] tracking-[-0.05em] text-transparent pb-[0.25em] -mb-[0.25em]">
                        Intuitive &amp; Agent Focused
                    </h3>
                </div>
                <p className="font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-normal leading-normal tracking-normal text-muted">
                    Our tool is designed with agencies &amp; collection managers in mind,
                    ensuring user-friendly experience tailored to their needs
                </p>
            </div>
            <div className="relative aspect-[720/473.585] w-full max-w-180 overflow-hidden">
                <Image
                    src="/assets/card1.png"
                    alt="Collection agents and their serviceable cities"
                    width={768}
                    height={552}
                    priority
                    className="mr-auto h-auto w-full"
                />
            </div>
        </article>
    )
}

export default AgentFocusedCard
