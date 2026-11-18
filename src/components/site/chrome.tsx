import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useId, useState, type ReactNode } from "react";
import { answerJournal } from "./data";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Record" },
  { to: "/competencies", label: "Competencies" },
] as const;

function ScrollProgress() {
  const [scale, setScale] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScale(height > 0 ? window.scrollY / height : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5" aria-hidden="true">
      <div
        className="h-full w-full origin-left bg-brass"
        style={{ transform: `scaleX(${scale})` }}
      />
    </div>
  );
}

function Nav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 md:px-8">
        <Link to="/" className="leading-none">
          <span className="block text-xs font-semibold tracking-widest text-ink uppercase">
            Beyond the
          </span>
          <span className="block text-xs font-medium tracking-widest text-muted uppercase">
            White Coat
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  "px-3 py-2 text-sm tracking-wide " +
                  (active ? "text-ink" : "text-muted hover:text-ink")
                }
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <button
          type="button"
          className="grid size-11 place-items-center border border-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open ? (
        <nav id="mobile-nav" className="border-t border-line md:hidden" aria-label="Mobile">
          {links.map((link) => {
            const active = pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={
                  "flex h-12 items-center border-b border-line px-5 text-sm tracking-wide " +
                  (active ? "bg-paper text-ink" : "text-muted")
                }
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-ink text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <p className="font-serif text-2xl">Rahul Devnani</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-bone/70">
            First-year GMD student at Gulf Medical University, Ajman. This journal is the
            working record — not a finished biography.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-bone/50 uppercase">Index</p>
          <ul className="mt-4 space-y-2 text-sm">
            {links.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-bone/80 hover:text-bone">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-widest text-bone/50 uppercase">Colophon</p>
          <p className="mt-4 text-sm leading-6 text-bone/80">
            Gulf Medical University
            <br />
            Ajman, United Arab Emirates
            <br />
            Entered 2026
          </p>
        </div>
      </div>
      <div className="border-t border-bone/15">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4 text-xs text-bone/50 md:px-8">
          <p>© 2026 Rahul Devnani</p>
          <p>Beyond the White Coat · Vol. I</p>
        </div>
      </div>
    </footer>
  );
}

const suggestions = ["The record", "Competencies", "Contact"];

function JournalDesk() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<{ from: "journal" | "you"; text: string }[]>([
    {
      from: "journal",
      text: "Ask from the published record only — the year, the nine competencies, or contact.",
    },
  ]);
  const titleId = useId();

  function ask(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [
      ...prev,
      { from: "you", text: trimmed },
      { from: "journal", text: answerJournal(trimmed) },
    ]);
    setDraft("");
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-end gap-2">
      {open ? (
        <section
          role="dialog"
          aria-labelledby={titleId}
          className="flex w-[min(100vw-2rem,22rem)] flex-col glass rounded-2xl shadow-none"
        >
          <header className="flex items-center justify-between border-b border-white/20 px-4 py-3">
            <div>
              <p id={titleId} className="text-sm font-semibold tracking-wide">
                Journal desk
              </p>
              <p className="text-xs text-muted">Answers from this site only</p>
            </div>
            <button
              type="button"
              className="grid size-11 place-items-center"
              onClick={() => setOpen(false)}
              aria-label="Close journal desk"
            >
              <X className="size-4" />
            </button>
          </header>
          <div className="flex max-h-72 flex-col gap-3 overflow-y-auto px-4 py-4">
            {messages.map((message, i) => (
              <p
                key={`${message.from}-${i}`}
                className={
                  "text-sm leading-6 " +
                  (message.from === "you" ? "text-muted" : "text-ink")
                }
              >
                <span className="mr-2 text-xs tracking-widest uppercase">
                  {message.from === "you" ? "You" : "Journal"}
                </span>
                {message.text}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-white/20 px-4 py-3">
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                className="border border-white/30 px-3 py-2 text-xs tracking-wide text-muted hover:text-ink"
                onClick={() => ask(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <form
            className="flex border-t border-white/20"
            onSubmit={(event) => {
              event.preventDefault();
              ask(draft);
            }}
          >
            <label className="sr-only" htmlFor="journal-ask">
              Ask the journal
            </label>
            <input
              id="journal-ask"
              value={draft}
              onChange={(event) => setDraft(event.target.value)}
              maxLength={200}
              placeholder="Ask the journal"
              className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm outline-none"
            />
            <button type="submit" className="px-4 text-xs font-semibold tracking-widest uppercase">
              Send
            </button>
          </form>
        </section>
      ) : null}
      <button
        type="button"
        className="h-12 border border-ink bg-ink px-4 text-xs font-semibold tracking-widest text-bone uppercase"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {open ? "Close" : "Journal desk"}
      </button>
    </div>
  );
}

export function SiteFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen">
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-paper focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <ScrollProgress />
      <Nav />
      <main id="content">{children}</main>
      <Footer />
      <JournalDesk />
    </div>
  );
}

export function Kicker({ index, children }: { index: string; children: string }) {
  return (
    <p className="text-xs font-semibold tracking-widest text-muted uppercase">
      <span className="text-brass">{index}</span>
      <span className="px-2 text-line">/</span>
      {children}
    </p>
  );
}

export function Monogram() {
  return (
    <div
      className="grid size-16 place-items-center border border-brass font-serif text-xl text-ink"
      aria-hidden="true"
    >
      RD
    </div>
  );
}
