"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { no: "01", name: "Aeris", category: "AI / Video Intelligence", image: "/projects/aeris.png", href: "https://aeris.vercel.app", copy: "Multimodal video intelligence for turning long recordings into structured, searchable knowledge." },
  { no: "02", name: "Kylro", category: "Full-Stack / Real-time", image: "/projects/kylro.png", href: "https://kylro.vercel.app", copy: "A collaborative workspace built around persistent documents, shared state, permissions, and live synchronization." },
  { no: "03", name: "EvoScore", category: "Research / Evaluation", image: "/projects/evoscore.png", href: "#", copy: "A research-style interface for exploring generations, candidates, robustness, lineage, and model evaluation." },
];

export default function WorkPage() {
  return <main className="bg-brand-bg min-h-screen pt-32 pb-28 px-5 md:px-10">
    <div className="mx-auto max-w-[1440px]">
      <div className="grid md:grid-cols-12 gap-8 mb-24 md:mb-32 items-end">
        <div className="md:col-span-9"><p className="text-brand-orange text-[10px] font-black uppercase tracking-[.2em] mb-6">02 / Selected work</p><motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="font-sans font-black uppercase display-tight text-[18vw] md:text-[11vw] leading-[.76]">Selected<br /><span className="text-brand-orange">work.</span></motion.h1></div>
        <p className="md:col-span-3 text-brand-muted leading-7 text-sm">A small archive of products and systems I&apos;ve designed and engineered across AI, real-time collaboration, and software experimentation.</p>
      </div>

      <div className="space-y-24 md:space-y-36">
        {projects.map((p, i) => <motion.article key={p.name} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .8 }}>
          <div className="flex items-baseline justify-between border-t border-brand-black/15 pt-5 mb-7"><div className="flex gap-4 text-[10px] uppercase tracking-[.18em] font-black"><span className="text-brand-orange">{p.no}</span><span>{p.category}</span></div><span className="text-[10px] uppercase tracking-widest text-brand-muted">2026</span></div>
          <div className="grid md:grid-cols-12 gap-7 items-end">
            <div className={`md:col-span-9 ${i % 2 ? "md:ml-auto" : ""}`}><a href={p.href} target={p.href === "#" ? undefined : "_blank"} rel={p.href === "#" ? undefined : "noreferrer"} className="group block relative aspect-[16/9] overflow-hidden bg-brand-black border border-brand-black/10"><Image src={p.image} alt={`${p.name} screenshot`} fill className="object-cover transition-transform duration-1000 group-hover:scale-[1.025]" sizes="(max-width: 768px) 100vw, 75vw" /><div className="absolute inset-0 bg-brand-orange/0 group-hover:bg-brand-orange/5 transition-colors" /><div className="absolute right-5 top-5 pill bg-brand-bg text-brand-black p-3 opacity-0 group-hover:opacity-100 transition-opacity"><ArrowUpRight size={18}/></div></a></div>
            <div className="md:col-span-3"><h2 className="font-serif text-5xl md:text-6xl mb-5">{p.name}</h2><p className="text-brand-muted leading-7 text-sm mb-6">{p.copy}</p>{p.href !== "#" && <a href={p.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.16em] border-b-2 border-brand-primary pb-2 hover:text-brand-orange hover:border-brand-orange transition-colors">Visit live ↗</a>}</div>
          </div>
        </motion.article>)}
      </div>
    </div>
  </main>;
}
