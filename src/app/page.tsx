"use client";

import React from "react";
import AnimatedGradientBackground from "@/components/ui/animated-gradient-background";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { BentoGrid, type BentoItem } from "@/components/ui/bento-grid";
import { FileText, Mail } from "lucide-react";
import { motion } from "framer-motion";

const worksItems: BentoItem[] = [
    {
        title: "2025 Report on the Base Ecosystem",
        meta: "Published",
        description:
            "Comprehensive intelligence and analytics on Base layer growth, token emissions, and user behavior trends.",
        icon: <FileText className="w-5 h-5 text-blue-500" />,
        status: "Recent",
        tags: ["Base Ecosystem", "Analytics", "PDF"],
        colSpan: 3,
        hasPersistentHover: true,
        href: "/2025-report-on-the-base-ecosystem.pdf",
        cta: "View PDF →"
    }
];

export default function Home() {
    return (
        <main className="min-h-screen bg-[#030303] text-white">
            {/* Section 1: Hero Gradient */}
            <section className="relative w-full h-screen overflow-hidden">
                <AnimatedGradientBackground />
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">

                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-8"
                    >
                        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                            DecentraData
                        </h1>
                        <p className="mt-4 text-lg md:text-xl text-white/50 max-w-lg mx-auto font-light">
                            Blockchain Data Intelligence
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Section 2: Info via HeroGeometric */}
            <section className="relative w-full border-t border-white/5">
                <HeroGeometric 
                    badge="DecentraData"
                    title1="Defining The Frontier Of"
                    title2="Onchain Intelligence"
                />
            </section>

            {/* Section 3: Our Works via Bento Grid */}
            <section className="relative w-full py-24 md:py-32 bg-[#030303] border-t border-white/5">
                <div className="container mx-auto px-4 mb-16">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
                            <span className="text-sm text-white/60 tracking-wide uppercase">
                                Intelligence
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Our Works
                        </h2>
                        <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto font-light">
                            Explore our latest reports and actionable insights generated from raw on-chain data.
                        </p>
                    </div>
                </div>
                
                <BentoGrid items={worksItems} />
            </section>

            {/* Footer / Contact */}
            <footer className="w-full py-12 md:py-16 border-t border-white/10 bg-black/50 backdrop-blur-md">
                <div className="container mx-auto px-4 flex flex-col items-center justify-center gap-6">
                    <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                        <Mail className="w-8 h-8 text-white/80" />
                    </div>
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-white/90 mb-2">Get in touch</h3>
                        <a 
                            href="mailto:haleemadisa@gmail.com" 
                            className="text-lg text-blue-400 hover:text-blue-300 transition-colors font-medium flex items-center gap-2"
                        >
                            haleemadisa@gmail.com
                        </a>
                    </div>
                    <p className="mt-8 text-sm text-white/30">
                        © {new Date().getFullYear()} DecentraData Consulting. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    );
}
