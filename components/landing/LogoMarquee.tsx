'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'

const LOGOS = [
    { src: '/assets/image3.png', alt: 'BAJAJ Allianz' },
    { src: '/assets/image6.png', alt: 'ICICI Bank' },
    { src: '/assets/image1.png', alt: 'YES BANK' },
    { src: '/assets/image4.png', alt: 'udaan' },
    { src: '/assets/image7.png', alt: 'BAJAJ Allianz' },
    { src: '/assets/imag2.png', alt: 'IndusInd Bank' },
    { src: '/assets/image5.png', alt: 'YES BANK' },
]

const LogoMarquee = () => {
    const reduceMotion = useReducedMotion()

    if (reduceMotion) {
        return (
            <div className="mx-auto mt-12 flex w-full max-w-[1460px] flex-wrap items-center justify-center gap-4 px-1 md:mt-16 lg:gap-8">
                {LOGOS.map((logo) => (
                    <span
                        key={logo.src}
                        className="flex items-center rounded-xl border border-black/[0.06] bg-white px-6 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                    >
                        <Image
                            src={logo.src}
                            alt={logo.alt}
                            width={160}
                            height={32}
                            className="h-5 w-auto object-contain md:h-6"
                        />
                    </span>
                ))}
            </div>
        )
    }

    return (
        <div className="mx-auto mt-12 w-full max-w-[1460px] overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_8%,black_92%,transparent)] md:mt-16">
            <motion.div
                className="flex w-max items-center gap-4 pr-4 lg:gap-8 lg:pr-8"
                animate={{ x: ['0%', '-50%'] }}
                transition={{ duration: 32, ease: 'linear', repeat: Infinity }}
            >
                {[...LOGOS, ...LOGOS].map((logo, index) => (
                    <span
                        key={`${logo.src}-${index}`}
                        aria-hidden={index >= LOGOS.length}
                        className="flex shrink-0 items-center rounded-xl border border-black/[0.06] bg-white px-6 py-3 shadow-[0_1px_2px_rgba(0,0,0,0.04)]"
                    >
                        <Image
                            src={logo.src}
                            alt={index < LOGOS.length ? logo.alt : ''}
                            width={160}
                            height={32}
                            className="h-5 w-auto object-contain md:h-6"
                        />
                    </span>
                ))}
            </motion.div>
        </div>
    )
}

export default LogoMarquee
