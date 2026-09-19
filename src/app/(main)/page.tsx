"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { useRef } from "react";
import { SketchArrow, SketchStar, SketchUnderline } from "@/components/ui/SketchAccent";

const projects = [
  { no: "01", name: "Aeris", type: "AI / Video Intelligence", image: "/projects/aeris.png", href: "https://aeris.vercel.app", accent: "#D9FF3F", description: "A multimodal video intelligence system that turns long recordings into structured, searchable knowledge." },
  { no: "02", name: "Kylro", type: "Full-Stack / Real-time", image: "/projects/kylro.png", href: "https://kylro.vercel.app", accent: "#F2B705", description: "A collaborative workspace engineered around persistent documents, real-time synchronization, and shared state." },
  { no: "03", name: "EvoScore", type: "Research / Evaluation", image: "/projects/evoscore.png", href: "#work", accent: "#65FF66", description: "An evaluation interface for exploring generations, candidates, robustness, lineage, and model performance." },
];

export default function Home() {
  const hero = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: hero, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return <div className="overflow-hidden bg-brand-bg">
    <section ref={hero} className="min-h-screen relative flex items-center border-b border-brand-black/10 pt-24">
      <div className="absolute right-[4%] top-[18%] text-brand-orange hidden lg:block"><SketchStar className="w-24 h-24 rotate-12" /></div>
      <div className="absolute left-[48%] bottom-[12%] text-brand-orange hidden md:block"><SketchArrow className="w-24" /></div>
      <div className="mx-auto max-w-[1440px] w-full px-5 md:px-10 grid lg:grid-cols-12 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: .9 }} className="lg:col-span-7 relative z-10">
          <p className="font-bold uppercase tracking-[.22em] text-[10px] mb-7 flex items-center gap-3"><span className="w-8 h-[2px] bg-brand-orange" /> Full-Stack Developer / AI Engineer</p>
          <h1 className="font-sans font-black uppercase display-tight text-[17vw] leading-[.77] md:text-[12vw] lg:text-[9.4vw] max-w-5xl">I build<br /><span className="relative inline-block">digital</span><br /><span className="text-brand-orange">systems.</span></h1>
          <SketchUnderline className="text-brand-orange w-56 md:w-80 mt-3 -ml-1" />
          <p className="mt-8 max-w-xl text-brand-muted text-base md:text-lg leading-7">I&apos;m Kesab — a computer science student building full-stack products, AI-native applications, and interfaces where engineering and visual craft meet.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#work" className="pill bg-brand-primary text-brand-black px-6 py-4 text-[10px] font-black uppercase tracking-[.14em] inline-flex items-center gap-3 hover:bg-brand-orange transition-colors">View selected work <ArrowUpRight size={15}/></Link>
            <Link href="/contact" className="pill border border-brand-black px-6 py-4 text-[10px] font-black uppercase tracking-[.14em] hover:bg-brand-black hover:text-brand-bg transition-colors">Let&apos;s talk</Link>
          </div>
        </motion.div>
        <motion.div style={{ y: imageY }} initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: .15 }} className="lg:col-span-5 relative h-[55vh] lg:h-[78vh] mt-8 lg:mt-0">
          <div className="absolute -inset-3 bg-brand-black/5 rotate-1" />
          <div className="absolute inset-0 overflow-hidden border-[5px] border-brand-primary bg-brand-bg rotate-[1.2deg] shadow-[0_18px_50px_rgba(17,17,15,.10)]">
            <img src="/profile/kesab-main.png" alt="Kesab Maharana" className="absolute inset-0 h-full w-full object-cover" loading="eager" decoding="async" />
            <div className="absolute left-4 bottom-4 bg-brand-bg/95 border border-brand-black px-4 py-3"><p className="text-[9px] uppercase tracking-[.18em] font-bold">Based in Bengaluru</p><p className="text-brand-orange text-xs mt-1 font-bold">Available for opportunities ↗</p></div>
          </div>
          <div className="absolute -right-5 top-1/2 bg-brand-orange text-brand-black px-3 py-5 writing-mode-vertical rotate-180 hidden md:block text-[9px] font-black uppercase tracking-[.2em]">Build / Ship / Learn</div>
        </motion.div>
      </div>
      <div className="absolute bottom-7 left-5 md:left-10 flex items-center gap-3 text-[9px] uppercase tracking-[.2em] font-bold"><ArrowDown size={13}/> Scroll to explore</div>
    </section>

    <section className="bg-brand-black text-brand-bg py-8 overflow-hidden border-b-4 border-brand-primary">
      <div className="flex whitespace-nowrap animate-[marquee_22s_linear_infinite] text-[11px] md:text-sm font-black uppercase tracking-[.18em]">{Array.from({length: 2}).map((_, i) => <span key={i} className="inline-flex items-center">&nbsp; FULL-STACK &nbsp; <i className="text-brand-primary not-italic">✦</i> &nbsp; AI SYSTEMS &nbsp; <i className="text-brand-orange not-italic">✦</i> &nbsp; REAL-TIME APPS &nbsp; <i className="text-brand-primary not-italic">✦</i> &nbsp; NEXT.JS &nbsp; <i className="text-brand-orange not-italic">✦</i> &nbsp; SYSTEM DESIGN &nbsp; <i className="text-brand-primary not-italic">✦</i> &nbsp;</span>)}</div>
    </section>

    <section className="py-28 md:py-40 px-5 md:px-10">
      <div className="mx-auto max-w-[1440px] grid md:grid-cols-12 gap-8">
        <div className="md:col-span-4"><p className="text-brand-orange font-black uppercase tracking-[.2em] text-[10px]">01 / About</p></div>
        <div className="md:col-span-8"><h2 className="font-serif text-5xl md:text-7xl max-w-5xl">I like difficult problems, <em className="text-brand-orange">beautiful interfaces</em>, and software that feels intentional.</h2><p className="mt-8 text-brand-muted max-w-2xl text-base md:text-lg leading-8">My work sits between product engineering and experimentation. I care about clean architecture, responsive systems, useful abstractions, and the last 10% of visual detail that makes a product feel finished.</p></div>
      </div>
    </section>

    <section id="work" className="bg-brand-black text-brand-bg py-28 md:py-40 px-5 md:px-10">
      <div className="mx-auto max-w-[1440px]">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"><div><p className="text-brand-primary text-[10px] font-black uppercase tracking-[.2em] mb-5">02 / Selected work</p><h2 className="font-serif text-6xl md:text-8xl">Things I&apos;ve<br /><em className="text-brand-primary">built.</em></h2></div><p className="text-brand-bg/50 max-w-sm text-sm leading-6">Three projects across AI, real-time collaboration, and evaluation systems.</p></div>
        <div className="space-y-20 md:space-y-28">
          {projects.map((p, i) => <motion.article key={p.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .8 }} className="grid md:grid-cols-12 gap-6 md:gap-10 items-center">
            <div className={`md:col-span-8 ${i % 2 ? "md:order-2" : ""}`}><div className="relative overflow-hidden border border-brand-bg/15 group bg-[#171914] aspect-[16/9]"><Image src={p.image} alt={`${p.name} project interface`} fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 66vw" /><div className="absolute inset-0 ring-1 ring-inset ring-white/10" /></div></div>
            <div className={`md:col-span-4 ${i % 2 ? "md:order-1" : ""}`}><div className="flex items-center gap-3 text-[9px] uppercase tracking-[.2em] font-bold mb-6"><span className="text-brand-primary">{p.no}</span><span className="h-px w-10 bg-brand-bg/20" />{p.type}</div><h3 className="font-serif text-5xl md:text-6xl mb-5">{p.name}</h3><p className="text-brand-bg/55 leading-7 text-sm mb-7">{p.description}</p>{p.href !== "#work" ? <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[.16em] font-black border-b border-brand-primary pb-2 hover:text-brand-primary transition-colors">Open project <ArrowUpRight size={14}/></a> : <span className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[.16em] font-black text-brand-primary">Research interface</span>}</div>
          </motion.article>)}
        </div>
      </div>
    </section>

    <section className="bg-brand-orange text-brand-black py-24 md:py-32 px-5 md:px-10"><div className="mx-auto max-w-[1440px] grid md:grid-cols-12 gap-8 items-end"><div className="md:col-span-8"><p className="text-[10px] uppercase tracking-[.2em] font-black mb-6">03 / Stack</p><h2 className="font-sans font-black uppercase display-tight text-6xl md:text-[8vw] leading-[.82]">Code.<br />Design.<br />Systems.</h2></div><div className="md:col-span-4 text-sm leading-7"><p className="font-bold mb-4">TypeScript · Java · React · Next.js · Node.js · PostgreSQL · Prisma · WebSockets · AI/LLMs · RAG</p><p>Built with a bias toward understanding the system underneath the interface.</p></div></div></section>

    <section className="py-28 md:py-40 px-5 md:px-10"><div className="mx-auto max-w-[1440px] grid md:grid-cols-12 gap-8"><div className="md:col-span-3"><p className="text-brand-orange font-black uppercase tracking-[.2em] text-[10px]">04 / Contact</p></div><div className="md:col-span-9"><h2 className="font-serif text-6xl md:text-[8vw]">Let&apos;s make<br /><em className="text-brand-orange">something</em> real.</h2><div className="mt-10 flex flex-wrap gap-4"><a href="mailto:kesab142909maharan@gmail.com" className="pill bg-brand-black text-brand-bg px-7 py-4 text-[10px] uppercase tracking-[.16em] font-black hover:bg-brand-primary hover:text-brand-black transition-colors">Email me ↗</a><a href="https://github.com" target="_blank" rel="noreferrer" className="pill border border-brand-black px-7 py-4 text-[10px] uppercase tracking-[.16em] font-black">GitHub ↗</a></div></div></div></section>
  </div>;
}
