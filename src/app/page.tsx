import Link from "next/link";
import {
  Zap,
  BarChart2,
  RefreshCw,
  Layers,
  ArrowRight,
  Github,
  Brain,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Smart Flashcards",
    desc: "Flip cards to reveal answers. Built to make remembering effortless.",
  },
  {
    icon: RefreshCw,
    title: "Fresh Every Session",
    desc: "Pulls live questions from an API so you never study the same set twice.",
  },
  {
    icon: BarChart2,
    title: "Progress Tracking",
    desc: "A visual progress bar keeps you focused and shows how far you've come.",
  },
  {
    icon: Layers,
    title: "10+ JS Topics",
    desc: "Closures, hoisting, Promises, the virtual DOM — the topics that matter.",
  },
];

const stats = [
  { value: "10+", label: "Cards per session" },
  { value: "100%", label: "Free forever" },
  { value: "0", label: "Sign-ups needed" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900 font-sans">

      {/* Navbar */}
      <nav className="w-full border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 bg-white/80 backdrop-blur-md z-50">
        <div className="flex items-center gap-2 font-bold text-lg tracking-tight">
          <Zap className="w-5 h-5 text-blue-600" />
          FlashCards
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/Dhavalkurkutiya/flashcard"
            target="_blank"
            className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </Link>
          <Link
            href="/flashcards"
            className="text-sm font-semibold bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            Start Learning →
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 bg-gradient-to-b from-blue-50/60 to-white">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-6">
          <Zap className="w-3 h-3" /> Free · No login · Open source
        </span>
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight tracking-tight max-w-2xl">
          Master JavaScript,{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            one card at a time
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
          A minimal flashcard app that drills you on real JS interview topics — closures,
          hoisting, Promises, and more. Flip, repeat, master.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/flashcards"
            className="flex items-center gap-2 bg-blue-600 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
          >
            Start Studying <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="https://github.com/Dhavalkurkutiya/flashcard"
            target="_blank"
            className="flex items-center gap-2 text-gray-600 font-medium px-7 py-3.5 rounded-full border border-gray-200 hover:border-gray-400 transition-all"
          >
            <Github className="w-4 h-4" /> View on GitHub
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="w-full max-w-3xl mx-auto px-6 py-12 grid grid-cols-3 gap-6 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-extrabold text-blue-600">{s.value}</p>
            <p className="text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      {/* Card Preview */}
      <section className="flex justify-center px-6 py-8">
        <div className="relative w-full max-w-sm h-52 rounded-2xl bg-white border border-gray-200 shadow-xl flex flex-col items-center justify-center text-center p-8 overflow-hidden">
          <div className="absolute top-3 left-4 text-xs font-semibold uppercase tracking-widest text-blue-500">
            Question
          </div>
          <p className="text-base font-semibold text-gray-800">
            What is a closure in JavaScript?
          </p>
          <p className="text-xs text-gray-400 mt-5">Click card to flip →</p>
          {/* decorative blobs */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-100 rounded-full opacity-60" />
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-cyan-100 rounded-full opacity-60" />
        </div>
      </section>

      {/* Features */}
      <section className="w-full max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need to prep
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-6 mb-20 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-14 text-center text-white max-w-5xl lg:mx-auto">
        <h2 className="text-3xl font-extrabold mb-3">Ready to level up?</h2>
        <p className="text-blue-100 mb-8 text-base">
          No account. No cost. Just open and start studying.
        </p>
        <Link
          href="/flashcards"
          className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-8 py-3.5 rounded-full hover:bg-blue-50 transition-all shadow-lg"
        >
          Launch Flash Cards <ArrowRight className="w-4 h-4" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-100 px-6 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-gray-400 gap-2">
        <div className="flex items-center gap-1.5 font-semibold text-gray-700">
          <Zap className="w-4 h-4 text-blue-600" /> FlashCards
        </div>
        <p>Built with Next.js · Tailwind CSS · Open Trivia DB</p>
        <Link
          href="https://roadmap.sh/projects/flash-cards"
          target="_blank"
          className="hover:text-gray-700 transition-colors"
        >
          roadmap.sh project ↗
        </Link>
      </footer>

    </div>
  );
}

