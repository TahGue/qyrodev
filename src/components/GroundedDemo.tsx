"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { CircleCheck, CircleSlash } from "lucide-react";

type Exchange = {
  q: string;
  a: string;
  status: "verified" | "refused";
  source: string;
};

// Generic illustration of the grounded-answer pattern (not real customer data).
const EXCHANGES: Exchange[] = [
  {
    q: "How much did we invoice in Q3?",
    a: "Q3 invoiced total: 1 284 600 SEK",
    status: "verified",
    source: "ledger · 412 invoices summed by code",
  },
  {
    q: "What's the notice period in the service contract?",
    a: "“Three (3) months from written notice.”",
    status: "verified",
    source: "contract.pdf · §11.2 · verbatim",
  },
  {
    q: "What's our customer churn rate?",
    a: "Churn isn't in the data you've connected.",
    status: "refused",
    source: "no evidence → typed refusal",
  },
];

const MOTION_QUERY = "(prefers-reduced-motion: reduce)";
function subscribeMotion(cb: () => void) {
  const mql = window.matchMedia(MOTION_QUERY);
  mql.addEventListener("change", cb);
  return () => mql.removeEventListener("change", cb);
}
const getReduced = () => window.matchMedia(MOTION_QUERY).matches;
const getReducedServer = () => false;

export default function GroundedDemo() {
  const [i, setI] = useState(0);
  const [typed, setTyped] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const reduced = useSyncExternalStore(subscribeMotion, getReduced, getReducedServer);

  useEffect(() => {
    const q = EXCHANGES[i].q;
    if (reduced) {
      const t = setTimeout(() => setI((n) => (n + 1) % EXCHANGES.length), 5000);
      return () => clearTimeout(t);
    }
    if (typed.length < q.length) {
      const t = setTimeout(() => setTyped(q.slice(0, typed.length + 1)), 38);
      return () => clearTimeout(t);
    }
    if (!showAnswer) {
      const t = setTimeout(() => setShowAnswer(true), 450);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setShowAnswer(false);
      setTyped("");
      setI((n) => (n + 1) % EXCHANGES.length);
    }, 3800);
    return () => clearTimeout(t);
  }, [i, typed, showAnswer, reduced]);

  const ex = EXCHANGES[i];
  const question = reduced ? ex.q : typed;
  const answerVisible = reduced || showAnswer;
  const verified = ex.status === "verified";

  return (
    <figure className="card relative overflow-hidden p-0 shadow-2xl shadow-primary/10">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" aria-hidden />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" aria-hidden />
        <span className="ml-2 font-mono text-xs text-subtle">grounded-chat · illustration</span>
      </div>

      <div className="space-y-4 p-5 font-mono text-sm sm:p-6">
        <div>
          <p className="text-xs text-subtle">you</p>
          <p className={`mt-1 min-h-[1.5em] text-foreground ${answerVisible ? "" : "caret"}`}>{question}</p>
        </div>

        <div className="min-h-[124px]" aria-live="polite">
          {answerVisible && (
            <div key={i} className="animate-fade-in-up">
              <p className="text-xs text-subtle">assistant</p>
              <p className="mt-1 text-base text-foreground">{ex.a}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
                    verified ? "bg-success/10 text-success" : "bg-warning/10 text-warning"
                  }`}
                >
                  {verified ? <CircleCheck size={14} aria-hidden /> : <CircleSlash size={14} aria-hidden />}
                  {verified ? "VERIFIED" : "REFUSED"}
                </span>
                <span className="text-xs text-subtle">{ex.source}</span>
              </div>
            </div>
          )}
        </div>
      </div>

      <figcaption className="border-t border-border bg-surface/60 px-5 py-3 text-xs text-muted sm:px-6">
        <span className="text-foreground">Code owns facts.</span> The model only explains evidence that has been
        validated.
      </figcaption>
    </figure>
  );
}
