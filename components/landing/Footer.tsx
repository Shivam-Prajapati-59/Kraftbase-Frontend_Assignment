import { Mail, MapPin, MoveUpRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import CenterBadgeIcon from '@/components/ui/CenterBadgeIcon'
import FacebookIcon from '@/components/ui/FacebookIcon'
import InstaIcon from '@/components/ui/InstaIcon'
import YoutubeIcon from '@/components/ui/YoutubeIcon'
import XIcon from '@/components/ui/XIcon'

const SOCIALS = 'pointer-events-none absolute hidden lg:flex'

// Figma giant arches (x2, concentric): 1929x1929, border 10px #D9D9D966.
// Page coords (top 5419 / left -5) convert to footer-relative: left -5 on a
// 1920 canvas == centered, so `left-1/2 -translate-x-1/2`. Center height
// 1045px: low enough that the outer apex (~20px) clears the footer top edge
// with its halo (no cut-off crown), while the flanks still run through the
// side icons (12.5%/34% top pair, 5%/52% bottom pair) and the inner apex
// lands just behind the badge. These are the ONLY rings — soft blurred
// bands melted into the wash, exactly like the reference.
const GIANT_RINGS = [1929, 2049] // px diameters — spec ring + outer concentric

const Footer = () => {
    return (
        <footer id="contact" className="relative scroll-mt-28 overflow-hidden">
            {/* Full-footer wash — melts in from the white above (no flat-white
                step at the footer top), swells behind the heading, and carries
                the tint down with no cutoff line. Every stop ends transparent,
                so nothing can slice into a hard edge. */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(202,235,253,0.35)_18%,rgba(206,213,249,0.28)_32%,rgba(206,213,249,0.12)_48%,rgba(255,255,255,0)_68%)]" />
                {/* Broad glow concentric with the dome center (484px), fully
                    contained — its transparent rim melts it in every direction. */}
                <div className="absolute top-[484px] left-1/2 aspect-square w-[min(1100px,160%)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(202,235,253,0.55)_0%,rgba(206,213,249,0.3)_48%,rgba(255,255,255,0)_70%)]" />
                {/* Fade shell around the arches: opaque through the icon zone,
                    dissolving into the wash toward the bottom. Nested masks
                    multiply with each ring's band mask, so the 10px lines
                    melt into the gradient instead of sitting hard on it —
                    no mask-composite juggling needed. */}
                <div aria-hidden="true" className="absolute inset-0 [mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_90%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_55%,transparent_90%)]">
                {/* Giant Figma arches — flanks run through the side icons.
                    backdrop-blur-xl == spec blur(24px); blur-[16px] melts the
                    10px border into a soft diffused band like the reference
                    (crisp lines are what stood out against the gradient).
                    The feathered band mask is widened past the blur spread so
                    the halo is never clipped — it fades on its own. */}
                {GIANT_RINGS.map((size) => {
                    const c = (size - 10) / 2 // px — border center radius
                    const band = `radial-gradient(circle, transparent ${c - 72}px, black ${c - 28}px, black ${c + 26}px, transparent ${c + 58}px)`
                    return (
                        <span
                            key={size}
                            aria-hidden="true"
                            className="absolute top-[1045px] left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 rounded-full border-[10px] border-[#D9D9D966] blur-[16px] backdrop-blur-xl"
                            style={{ width: size, height: size, maskImage: band, WebkitMaskImage: band }}
                        />
                    )
                })}
                </div>
            </div>

            {/* Top pair sits ON the outer (2049) arch, bottom pair inside on the
                spec (1929) arch — 70px chips swallow the px tolerance. */}
            <span aria-hidden="true" className={`${SOCIALS} top-[34%] left-[12.5%] h-[70px] w-[70px] items-center justify-center rounded-full border-4 border-white bg-satellite shadow-[0px_16px_60px_0px_#1F2A4A0D]`}>
                <InstaIcon width={33} height={33} />
            </span>
            <span aria-hidden="true" className={`${SOCIALS} top-[52%] left-[5%] h-[70px] w-[70px] items-center justify-center rounded-full border-4 border-white bg-satellite shadow-[0px_16px_60px_0px_#1F2A4A0D]`}>
                <FacebookIcon width={30} height={30} className="rotate-[-39.8deg]" />
            </span>
            <span aria-hidden="true" className={`${SOCIALS} top-[34%] right-[12.5%] h-[70px] w-[70px] items-center justify-center rounded-full border-4 border-white bg-satellite shadow-[0px_16px_60px_0px_#1F2A4A0D]`}>
                <YoutubeIcon width={32} height={29} />
            </span>
            <span aria-hidden="true" className={`${SOCIALS} top-[52%] right-[5%] h-[70px] w-[70px] items-center justify-center rounded-full border-4 border-white bg-satellite shadow-[0px_16px_60px_0px_#1F2A4A0D]`}>
                <XIcon width={41} height={41} />
            </span>

            <div className="relative mx-auto flex w-full max-w-[880px] flex-col items-center px-5 pt-20 text-center md:pt-28">
                <span className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white shadow-[0_16px_40px_rgba(25,72,189,0.12)]">
                    <CenterBadgeIcon width={38} height={40} />
                </span>
                <p className="bg-btn-primary mt-6 bg-clip-text font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-bold capitalize leading-[1] tracking-[0] text-transparent">
                    Contact Us
                </p>
                <h2 className="mx-auto mt-3 max-w-[720px] text-balance font-sans text-[clamp(1.875rem,1.25rem+3.2vw,3.375rem)] font-semibold leading-[1.15] tracking-[-0.05em]">
                    <span className="bg-section-headline bg-clip-text text-transparent">
                        We also need to have contact form on the website
                    </span>
                </h2>
                <p className="mx-auto mt-5 max-w-[680px] font-sans text-[clamp(1rem,0.85rem+0.8vw,1.5rem)] font-normal leading-[1.5] tracking-[0] text-muted">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry&apos;s
                </p>
                <Button variant="primary" width={210} height={60} glow={false} href="#lenders" className="mt-8 sm:max-w-none">
                    Get Started <MoveUpRight size={16} aria-hidden="true" />
                </Button>
            </div>

            <div className="relative mx-auto mt-16 grid w-full max-w-[1200px] grid-cols-1 gap-10 px-5 pb-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-3 lg:gap-6">
                <div>
                    <p className="font-sans text-[15px] font-semibold text-ink">Navigation</p>
                    <nav aria-label="Footer" className="mt-4 flex flex-col gap-2.5">
                        <a href="#" className="w-fit font-sans text-sm text-muted transition-colors hover:text-ink">
                            Home
                        </a>
                        <a href="#lenders" className="w-fit font-sans text-sm text-muted transition-colors hover:text-ink">
                            For Lenders
                        </a>
                        <span aria-disabled="true" className="w-fit cursor-default font-sans text-sm text-muted">
                            For Collection Agencies
                        </span>
                    </nav>
                </div>
                <div className="lg:border-x lg:border-black/[0.06] lg:px-10">
                    <p className="flex items-center gap-2 font-sans text-[17px] font-semibold tracking-[-0.02em] text-ink">
                        <span className="flex items-center justify-center rounded-[8px] bg-[#2B5CE6] p-1.5">
                            <CenterBadgeIcon width={16} height={17} />
                        </span>
                        Collectedge
                    </p>
                    <p className="mt-4 max-w-[380px] font-sans text-sm leading-relaxed text-muted">
                        Our tool is designed with agencies &amp; collection managers in
                        mind, ensuring user-friendly experience tailored to their needs
                    </p>
                </div>
                <div>
                    <p className="font-sans text-[15px] font-semibold text-ink">Contact</p>
                    <div className="mt-4 flex flex-col gap-2.5">
                        <a
                            href="mailto:info@letsdial.com"
                            className="flex w-fit items-center gap-2 font-sans text-sm text-muted transition-colors hover:text-ink"
                        >
                            <Mail size={15} aria-hidden="true" className="shrink-0" />
                            info@letsdial.com
                        </a>
                        <p className="flex items-start gap-2 font-sans text-sm leading-relaxed text-muted">
                            <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
                            Lorem Ipsum is simply dummy text of the printing
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative border-t border-black/[0.06]">
                <p className="mx-auto max-w-[1200px] px-5 py-5 text-center font-sans text-[13px] text-muted">
                    © 2024, Lorem Ipsum is simply dummy
                </p>
            </div>
        </footer>
    )
}

export default Footer