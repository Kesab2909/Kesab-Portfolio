"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const nav = [
    ["Work", "/work"],
    ["About", "/about"],
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-brand-bg/90 backdrop-blur-md border-b border-brand-black/10">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 h-[76px] flex items-center justify-between">
          <Link href="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="font-sans font-black text-[20px] tracking-[-.06em]">KESAB</span>
            <span className="h-2 w-2 rounded-full bg-brand-orange group-hover:scale-125 transition-transform" />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[.12em]">
            {nav.map(([label, href]) => <Link key={href} href={href} className="relative hover:text-brand-orange transition-colors">{label}<span className="absolute -bottom-2 left-0 w-full h-[2px] bg-brand-orange scale-x-0 origin-left hover:scale-x-100 transition-transform" /></Link>)}
          </nav>
          <Link href="/contact" className="hidden md:flex items-center gap-2 pill bg-brand-black text-brand-bg px-5 py-3 text-[10px] font-bold uppercase tracking-[.13em] hover:bg-brand-orange transition-colors">
            Let&apos;s talk <ArrowUpRight size={13} />
          </Link>
          <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
        </div>
      </header>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="fixed inset-0 z-30 bg-brand-bg pt-28 px-6 md:hidden">
          <nav className="flex flex-col gap-7">{nav.map(([label, href], i) => <Link key={href} href={href} onClick={() => setOpen(false)} className="font-serif text-5xl">0{i + 1} <span className="text-brand-orange">{label}</span></Link>)}</nav>
          <Link href="/contact" onClick={() => setOpen(false)} className="inline-flex pill bg-brand-black text-brand-bg px-6 py-4 mt-12 font-bold uppercase tracking-widest text-xs">Let&apos;s talk <ArrowUpRight className="ml-2" size={15}/></Link>
        </motion.div>}
      </AnimatePresence>
    </>
  );
}
