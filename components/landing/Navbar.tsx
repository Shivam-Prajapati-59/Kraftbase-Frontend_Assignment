'use client'

import { useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import Button from '@/components/ui/Button'

const LINKS: { label: string; href: string | null; active: boolean }[] = [
    { label: 'Home', href: '#', active: true },
    { label: 'For Lenders', href: '#lenders', active: false },
    // No agencies section exists yet — rendered as disabled, not as working nav.
    { label: 'For Collection Agencies', href: null, active: false },
]

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <header className="sticky top-[18px] z-50 mx-auto mt-[18px] flex h-[91px] w-[min(1106px,calc(100%-2rem))] items-center justify-center px-[6px]">
            <span
                aria-hidden="true"
                className="absolute inset-0 rounded-[36px] border border-white/40 bg-[#FFFFFF2E] mix-blend-luminosity backdrop-blur-[100px] backdrop-saturate-150"
            />
            <div className="relative flex h-[80px] w-full items-center justify-between gap-4 rounded-[32px] border border-[#0000001A] bg-white py-3 pr-3 pl-5 shadow-[0px_0px_54px_0px_#124E8E24,inset_0px_0px_13px_0px_#124E8E0D] outline-3 outline-solid outline-[#00000014] outline-offset-2 backdrop-blur-[80px] lg:pr-4 lg:pl-7">
            <a href="#" className="flex shrink-0 items-center gap-2">
                <span className="flex items-center justify-center rounded-[8px] bg-[#2B5CE6] p-1.5">
                    <ArrowUpRight size={18} className="text-white" aria-hidden="true" />
                </span>
                <span className="font-sans text-[17px] font-semibold tracking-[-0.02em] text-ink lg:text-[19px]">
                    Collectedge
                </span>
            </a>

            <nav aria-label="Primary" className="hidden flex-1 items-center justify-center gap-10 lg:flex">
                {LINKS.map((link) =>
                    link.href === null ? (
                        <span
                            key={link.label}
                            aria-disabled="true"
                            className="cursor-default font-sans text-[15px] font-medium text-[#6D6D6D]"
                        >
                            {link.label}
                        </span>
                    ) : (
                        <a
                            key={link.label}
                            href={link.href}
                            aria-current={link.active ? 'page' : undefined}
                            className={`font-sans text-[15px] transition-colors hover:text-ink ${
                                link.active ? 'font-semibold text-ink' : 'font-medium text-[#6D6D6D]'
                            }`}
                        >
                            {link.label}
                        </a>
                    ),
                )}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
                <span className="hidden sm:block">
                    <Button variant="primary" width={152} height={48} glow={false} href="#contact">
                        Get in touch
                    </Button>
                </span>
                <button
                    type="button"
                    onClick={() => setOpen((v) => !v)}
                    aria-expanded={open}
                    aria-label={open ? 'Close menu' : 'Open menu'}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.06] bg-white text-ink transition-colors hover:bg-black/[0.04] lg:hidden"
                >
                    {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
                </button>
            </div>

            {open && (
                <nav
                    aria-label="Mobile"
                    className="absolute top-[calc(100%+8px)] right-0 left-0 rounded-[20px] border border-white/60 bg-white/75 p-3 shadow-[0_16px_40px_rgba(25,72,189,0.12)] backdrop-blur-2xl lg:hidden"
                >
                    {LINKS.map((link) =>
                        link.href === null ? (
                            <span
                                key={link.label}
                                aria-disabled="true"
                                className="block cursor-default rounded-xl px-4 py-3 font-sans text-[15px] font-medium text-[#6D6D6D]"
                            >
                                {link.label}
                            </span>
                        ) : (
                            <a
                                key={link.label}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                aria-current={link.active ? 'page' : undefined}
                                className={`block rounded-xl px-4 py-3 font-sans text-[15px] transition-colors hover:bg-black/[0.03] ${
                                    link.active ? 'font-semibold text-ink' : 'font-medium text-[#6D6D6D]'
                                }`}
                            >
                                {link.label}
                            </a>
                        ),
                    )}
                    <span className="mt-2 block sm:hidden">
                        <Button variant="primary" glow={false} href="#contact" className="w-full max-w-none">
                            Get in touch
                        </Button>
                    </span>
                </nav>
            )}
            </div>
        </header>
    )
}

export default Navbar
