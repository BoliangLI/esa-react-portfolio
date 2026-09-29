import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Github,
  Mail,
  Code2,
  Layers,
  Sparkles,
  Globe,
  Check,
  X,
  Menu,
} from "lucide-react";

const projects = [
  {
    name: "Orbit Design System",
    type: "DESIGN ENGINEERING",
    year: "2026",
    color: "from-lime-300 to-emerald-500",
    icon: Layers,
    desc: "把设计语言变成产品的共同语言。一个关注可访问性、速度与细节的组件系统。",
    tags: ["React", "Design Tokens", "Accessibility"],
  },
  {
    name: "Neural Studio",
    type: "CREATIVE DEVELOPMENT",
    year: "2025",
    color: "from-violet-400 to-fuchsia-500",
    icon: Sparkles,
    desc: "面向创作者的 AI 工作空间。让灵感、探索与实现，发生在同一个画布。",
    tags: ["TypeScript", "AI", "Interaction"],
  },
  {
    name: "Atlas Explorer",
    type: "INTERACTIVE EXPERIENCE",
    year: "2025",
    color: "from-sky-300 to-blue-600",
    icon: Globe,
    desc: "探索数据背后的地理故事。以清晰的视觉层级呈现复杂的全球网络。",
    tags: ["Data Visualization", "Web", "Maps"],
  },
];

export default function App() {
  const [active, setActive] = useState(null);
  const [copied, setCopied] = useState(false);
  const [menu, setMenu] = useState(false);
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("hello@example.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = "mailto:hello@example.com";
    }
  }
  return (
    <div className="min-h-screen bg-[#101210] text-[#f3f4ed]">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 lg:px-12">
        <a
          href="#"
          className="flex items-center gap-3 text-xl font-semibold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-full bg-lime-300 text-[#101210]">
            o
          </span>
          orbit<span className="text-lime-300">.</span>
        </a>
        <nav
          className="hidden items-center gap-9 text-sm text-stone-400 md:flex"
          aria-label="主导航"
        >
          <a className="hover:text-lime-300" href="#work">
            精选作品
          </a>
          <a className="hover:text-lime-300" href="#about">
            关于我
          </a>
          <a
            className="flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-white hover:border-lime-300"
            href="#contact"
          >
            聊聊想法 <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="p-2 md:hidden"
          aria-label="切换导航"
          aria-expanded={menu}
          onClick={() => setMenu(!menu)}
        >
          <Menu size={22} />
        </button>
      </header>
      {menu && (
        <nav className="flex justify-center gap-6 border-y border-white/10 p-4 text-sm md:hidden">
          {[
            ["作品", "#work"],
            ["关于", "#about"],
            ["联系", "#contact"],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenu(false)}>
              {label}
            </a>
          ))}
        </nav>
      )}
      <main className="mx-auto max-w-7xl px-6 lg:px-12">
        <section className="grid items-center gap-12 py-16 md:min-h-[660px] md:grid-cols-[1.2fr_1fr] md:py-24">
          <div>
            <p className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/20 bg-lime-300/5 px-3 py-1.5 text-xs tracking-wide text-lime-200">
              <span className="size-1.5 rounded-full bg-lime-300" /> OPEN TO
              COLLABORATE · 开放合作
            </p>
            <h1 className="text-5xl font-medium leading-[1.2] tracking-tight sm:text-6xl lg:text-7xl">
              用代码构建，
              <br />
              让想法<span className="text-lime-300">发光。</span>
            </h1>
            <p className="mt-7 max-w-md text-base leading-8 text-stone-400">
              你好，我是 Alex。独立开发者与数字体验设计师。
              <br className="hidden sm:block" />
              在设计与技术的交汇处，创造简单、好用、有趣的产品。
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#work"
                className="flex items-center gap-8 rounded-full bg-lime-300 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-lime-200"
              >
                探索我的作品 <ArrowUpRight size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm text-stone-300 hover:text-lime-300"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
            <div className="mt-12 flex items-center gap-3 text-xs text-stone-500">
              <span className="h-px w-10 bg-stone-700" /> BASED ON EARTH ·
              BUILDING FOR EVERYONE
            </div>
          </div>
          <div
            className="relative isolate mx-auto flex aspect-square w-full max-w-[430px] items-center justify-center"
            aria-label="抽象轨道视觉图形"
          >
            <div className="absolute inset-10 -z-10 rounded-full bg-lime-300/10 blur-3xl" />
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="absolute h-[82%] w-[42%] rounded-[50%] border border-lime-200/30"
                style={{ transform: `rotate(${i * 60 + 25}deg)` }}
              />
            ))}
            <div className="absolute size-[65%] rounded-full border border-dashed border-white/10" />
            <div className="grid size-36 place-items-center rounded-[32px] border border-lime-100/25 bg-linear-to-br from-lime-200/20 to-[#171b15] shadow-[0_0_70px_#b9ef4f18] rotate-[-12deg]">
              <Code2 size={64} strokeWidth={1.2} className="text-lime-200" />
            </div>
            <span className="absolute top-[18%] right-[22%] size-3 rounded-full bg-lime-300 shadow-[0_0_22px_#bef264]" />
            <span className="absolute bottom-7 right-0 rounded-xl border border-white/10 bg-[#1a1e19] px-5 py-3 font-mono text-xs text-stone-400">
              <span className="text-lime-300">const</span> ideas ={" "}
              <span className="text-white">infinite</span>;
            </span>
            <span className="absolute top-8 left-0 text-[10px] tracking-[.3em] text-stone-500">
              DESIGN × TECHNOLOGY
            </span>
          </div>
        </section>
        <div className="flex flex-wrap items-center justify-between gap-5 border-y border-white/10 py-6 text-sm text-stone-500">
          <span className="text-xs tracking-[.18em]">MY EVERYDAY TOOLKIT</span>
          {["React", "TypeScript", "Tailwind CSS", "Figma", "Vite"].map((x) => (
            <span key={x} className="font-medium text-stone-300">
              {x}
            </span>
          ))}
        </div>
        <section id="work" className="scroll-mt-8 py-20">
          <div className="mb-9 flex items-end justify-between">
            <div>
              <p className="mb-3 text-xs tracking-[.2em] text-lime-300">
                01 / SELECTED WORK
              </p>
              <h2 className="text-3xl font-medium">一些认真做的事情</h2>
            </div>
            <span className="hidden text-xs text-stone-500 sm:block">
              2025 — 2026
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {projects.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(p)}
                className="group text-left"
              >
                <div className="relative grid aspect-[4/3] place-items-center overflow-hidden rounded-2xl border border-white/10 bg-[#191d18]">
                  <div
                    className={`absolute size-40 rounded-full bg-linear-to-br ${p.color} opacity-15 blur-2xl transition group-hover:opacity-30`}
                  />
                  <div
                    className={`grid size-24 place-items-center rounded-3xl bg-linear-to-br ${p.color} text-[#142018] shadow-xl transition duration-500 group-hover:-rotate-12 group-hover:scale-110`}
                  >
                    <p.icon size={44} strokeWidth={1.4} />
                  </div>
                  <span className="absolute top-5 left-5 font-mono text-xs text-white/30">
                    0{i + 1}
                  </span>
                  <ArrowUpRight
                    className="absolute right-5 bottom-5 text-white/40"
                    size={20}
                  />
                </div>
                <div className="mt-5 flex justify-between gap-3">
                  <h3 className="text-lg font-medium group-hover:text-lime-300">
                    {p.name}
                  </h3>
                  <span className="text-xs text-stone-500">{p.year}</span>
                </div>
                <p className="mt-2 text-[10px] tracking-[.15em] text-stone-500">
                  {p.type}
                </p>
              </button>
            ))}
          </div>
        </section>
        <section
          id="about"
          className="grid gap-10 border-t border-white/10 py-20 md:grid-cols-2"
        >
          <div>
            <p className="mb-4 text-xs tracking-[.2em] text-lime-300">
              02 / A LITTLE ABOUT ME
            </p>
            <h2 className="max-w-md text-3xl font-medium leading-relaxed">
              好的产品，始于好奇心，
              <br />
              成于每一个小细节。
            </h2>
          </div>
          <div>
            <p className="leading-8 text-stone-400">
              我享受把复杂问题变成直觉体验的过程。从第一个线框图，到最后一行代码，每一步都值得认真对待。工作之外，喜欢摄影、徒步，以及发现新的咖啡店。
            </p>
            <div className="mt-8 grid grid-cols-3 gap-5">
              {[
                ["06+", "年创造经验"],
                ["24", "个精选项目"],
                ["∞", "保持好奇"],
              ].map(([n, l]) => (
                <div key={l}>
                  <p className="text-3xl text-lime-200">{n}</p>
                  <p className="mt-2 text-xs text-stone-500">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="contact"
          className="mb-12 rounded-3xl border border-white/10 bg-[#1a2016] px-7 py-14 text-center sm:px-14"
        >
          <p className="mb-4 text-xs tracking-[.2em] text-lime-300">
            LET’S BUILD SOMETHING GREAT
          </p>
          <h2 className="text-3xl font-medium sm:text-4xl">
            你的下一个想法，值得被实现。
          </h2>
          <button
            onClick={copyEmail}
            className="mx-auto mt-7 flex items-center gap-3 rounded-full bg-lime-300 px-7 py-3.5 text-sm font-semibold text-black"
          >
            {copied ? <Check size={17} /> : <Mail size={17} />}
            <span aria-live="polite">
              {copied ? "邮箱已复制" : "hello@example.com"}
            </span>
            <ArrowRight size={17} />
          </button>
          <p className="mt-4 text-xs text-stone-500">
            示例联系方式 · 替换为你的邮箱，开始新的合作
          </p>
        </section>
      </main>
      <footer className="mx-auto flex max-w-7xl flex-wrap justify-between gap-4 px-6 pb-8 text-xs text-stone-500 lg:px-12">
        <p>© 2026 Orbit. Crafted with intention.</p>
        <p>React + Vite · Deployed on ESA</p>
      </footer>
      {active && (
        <Modal onClose={() => setActive(null)}>
          <section
            aria-label={active.name}
            onKeyDown={(e) => e.key === "Escape" && setActive(null)}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-3xl border border-white/15 bg-[#1a1e19] p-8"
          >
            <button
              autoFocus
              aria-label="关闭项目详情"
              onClick={() => setActive(null)}
              className="absolute right-5 top-5 p-2"
            >
              <X size={20} />
            </button>
            <active.icon className="mb-8 text-lime-300" size={40} />
            <p className="text-xs tracking-widest text-stone-500">
              {active.type}
            </p>
            <h2 className="mt-3 text-2xl">{active.name}</h2>
            <p className="mt-5 leading-8 text-stone-400">{active.desc}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {active.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs text-lime-200"
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-8 text-xs text-stone-500">
              这是演示作品，可在 src/App.jsx 中替换为你的真实项目。
            </p>
          </section>
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);
  return (
    <dialog
      ref={ref}
      aria-label="项目详情"
      onCancel={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-40px)] max-w-lg overflow-y-auto rounded-3xl border-0 bg-transparent p-0 text-inherit backdrop:bg-black/65 backdrop:backdrop-blur-sm"
    >
      {children}
    </dialog>
  );
}
