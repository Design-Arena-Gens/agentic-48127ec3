const features = [
  {
    title: "Unified workflows",
    description:
      "Coordinate every team ritual—from standups to postmortems—in one artifact with living context that never goes stale.",
  },
  {
    title: "AI copilots that adapt",
    description:
      "Craft reusable automations with natural language. Combine scripted steps, approvals, and human-in-the-loop checkpoints.",
  },
  {
    title: "Realtime visibility",
    description:
      "Project health, throughput, and blockers stay transparent with scorecards powered by your own metrics and SLAs.",
  },
];

const blueprints = [
  {
    label: "Kickoff",
    title: "Frame the mission",
    body: "Clarify scope, constraints, and measurable outcomes. Bring key stakeholders into a shared source of truth in under ten minutes.",
  },
  {
    label: "Execute",
    title: "Run on rails",
    body: "Trigger the right rituals at the right cadence automatically. Assign accountable owners and surface unknowns early.",
  },
  {
    label: "Learn",
    title: "Feedback loops",
    body: "Capture learnings automatically as initiatives move through each stage, building a playbook of what works for your org.",
  },
];

const testimonials = [
  {
    quote:
      "We consolidated six tools into one. Our launch velocity improved by 43% without adding headcount.",
    name: "Harlan Quinn",
    role: "VP Engineering, Cinder Labs",
  },
  {
    quote:
      "Agentic made our operating cadence transparent. Leadership reviews went from two hours to twenty minutes.",
    name: "Irene Park",
    role: "COO, Sylph Network",
  },
];

const faqs = [
  {
    question: "How does Agentic integrate with our existing stack?",
    answer:
      "Connect Slack, Jira, Linear, Notion, and dozens of other sources out of the box. Our GraphQL API lets you push and pull data securely.",
  },
  {
    question: "Is Agentic customizable for regulated industries?",
    answer:
      "Yes. SOC 2 Type II, HIPAA, and ISO 27001 controls are built in. Fine-tuned access policies ensure sensitive data stays compartmentalized.",
  },
  {
    question: "Can we pilot before a full rollout?",
    answer:
      "Launch a tailored workspace for a single program in under a day. Our team pairs with yours to co-create the first set of playbooks.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_rgba(15,23,42,0))]" />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-32 px-6 pb-24 pt-24 sm:px-10 lg:px-16">
        <header className="relative isolate flex flex-col gap-12 rounded-3xl border border-white/10 bg-slate-900/60 p-10 shadow-2xl shadow-cyan-500/5 backdrop-blur">
          <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-cyan-500/20 via-slate-900/70 to-indigo-500/20" />
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300/80">
            <span className="h-3 w-3 rounded-full bg-cyan-300" />
            Agentic Operating Platform
          </div>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl space-y-6">
              <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Orchestrate ambitious programs with confidence and calm.
              </h1>
              <p className="text-lg text-slate-300">
                Agentic pairs human leadership with AI-native guardrails so your
                product, operations, and GTM teams stay aligned, accountable,
                and execution-focused—all without the management busywork.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#launch"
                  className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Launch a workspace
                </a>
                <a
                  href="#blueprints"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-200"
                >
                  Explore playbooks
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-6 rounded-2xl border border-white/10 bg-slate-950/70 p-6 text-sm text-slate-300 shadow-lg shadow-cyan-500/10 lg:w-80">
              <div className="flex items-center justify-between text-xs uppercase tracking-widest text-slate-500">
                <span>Programs live</span>
                <span>Quarter</span>
              </div>
              <div className="flex items-baseline justify-between">
                <div className="text-4xl font-semibold text-cyan-300">128</div>
                <div className="text-xs text-cyan-200/80">+21% vs last quarter</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Launch confidence</span>
                  <span className="font-medium text-cyan-200">98%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-800">
                  <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-cyan-400 to-sky-500" />
                </div>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Blocked tracks</span>
                  <span className="font-medium text-rose-300">3</span>
                </div>
                <div className="h-2 w-full rounded-full bg-slate-800">
                  <div className="h-full w-[25%] rounded-full bg-gradient-to-r from-rose-400 to-orange-400" />
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Calm dashboards synthesize execution signals so you can sense and
                respond faster.
              </p>
            </div>
          </div>
        </header>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_1fr]" id="launch">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
              Operating cadence
            </p>
            <h2 className="text-balance text-3xl font-semibold text-white sm:text-4xl">
              Bring strategy, rituals, and execution into a single heartbeat.
            </h2>
            <p className="text-lg text-slate-300">
              Design your own operating system with modular playbooks that scale.
              Agentic syncs agendas, decisions, and artifacts across every team
              so nothing slips through the cracks.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {["Program brief", "Decision log", "Runway tracker"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 text-sm text-slate-300 shadow-lg shadow-cyan-500/10"
                >
                  <div className="text-xs uppercase tracking-widest text-cyan-200/80">
                    Template
                  </div>
                  <div className="mt-3 text-lg font-semibold text-white">
                    {item}
                  </div>
                  <p className="mt-2 text-slate-400">
                    Ship-ready blueprint with AI-assisted summaries.
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-8 rounded-3xl border border-slate-800 bg-slate-950/80 p-8 shadow-xl shadow-cyan-500/10">
            {features.map((feature) => (
              <div key={feature.title} className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400/90 to-sky-500/80 text-slate-950 font-semibold">
                    {feature.title[0]}
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1fr_1.15fr]" id="blueprints">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
              Blueprint library
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Operational muscle encoded as reusable playbooks.
            </h2>
            <p className="text-lg text-slate-300">
              Combine human best practices with AI-powered copilots. Instant
              retrospectives, asynchronous standups, stakeholder updates, and
              more—ready for your next mission.
            </p>
          </div>
          <div className="space-y-6">
            {blueprints.map((blueprint, index) => (
              <div
                key={blueprint.title}
                className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-lg shadow-indigo-500/10"
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-400 to-indigo-500" />
                <div className="ml-6 space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300/80">
                    {String(index + 1).padStart(2, "0")} · {blueprint.label}
                  </div>
                  <h3 className="text-2xl font-semibold text-white">
                    {blueprint.title}
                  </h3>
                  <p className="text-sm text-slate-300">{blueprint.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
              Why teams switch
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Deliver clarity at scale, no matter how complex the initiative.
            </h2>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                Adaptive cadences react to changes in scope, risks, and staffing
                in real time.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                Rich audit trails capture decisions, assumptions, and owners so
                context never goes missing.
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 flex-none rounded-full bg-cyan-300" />
                Enterprise-grade security, SSO, and granular permissions keep
                sensitive workstreams safe.
              </li>
            </ul>
          </div>
          <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/70 p-8 shadow-xl shadow-cyan-500/10">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.name} className="space-y-4">
                <blockquote className="text-lg text-slate-200">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="text-sm text-slate-400">
                  <span className="font-semibold text-slate-100">
                    {testimonial.name}
                  </span>{" "}
                  · {testimonial.role}
                </figcaption>
                <div className="h-px w-full bg-gradient-to-r from-cyan-400/60 via-transparent to-transparent" />
              </figure>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-950/80 p-10 shadow-2xl shadow-cyan-500/10">
          <div className="grid gap-12 lg:grid-cols-[1fr_1fr]">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
                Pricing built for scale
              </p>
              <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                Start with a focused launch, expand at your own pace.
              </h2>
              <p className="text-lg text-slate-300">
                Every plan includes enterprise security, AI automation credits,
                and white-glove onboarding. Switch between monthly or annual
                billing anytime.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                    Pilot
                  </div>
                  <div className="mt-2 text-3xl font-semibold text-white">
                    $980<span className="text-base font-normal text-slate-400">/mo</span>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li>Up to 3 workstreams</li>
                  <li>AI workflow credits included</li>
                  <li>Dedicated success partner</li>
                </ul>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center justify-center rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
                >
                  Start pilot
                </a>
              </div>
              <div className="flex flex-col gap-4 rounded-2xl border border-cyan-500/50 bg-slate-900/80 p-6 shadow-lg shadow-cyan-500/20">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-200">
                    Scale
                  </div>
                  <div className="mt-2 text-3xl font-semibold text-white">
                    Custom
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-slate-200">
                  <li>Unlimited programs &amp; automations</li>
                  <li>Private data residency options</li>
                  <li>Quarterly strategy reviews</li>
                </ul>
                <a
                  href="#"
                  className="mt-auto inline-flex items-center justify-center rounded-full border border-cyan-400/70 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:border-cyan-200 hover:text-white"
                >
                  Talk to sales
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-10 lg:grid-cols-[1fr_1.25fr]">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300/80">
              Frequently asked
            </p>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              Answers before you jump in.
            </h2>
          </div>
          <dl className="space-y-6">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-800 bg-slate-950/70 p-6 shadow-lg shadow-cyan-500/10"
              >
                <dt className="text-lg font-semibold text-white">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-sm text-slate-300">{faq.answer}</dd>
              </div>
            ))}
          </dl>
        </section>
      </main>
      <footer className="border-t border-white/10 bg-slate-950/80 py-10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-16">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
              Agentic
            </span>
            <p className="mt-2 text-sm text-slate-400">
              Operating calm for ambitious teams.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <a href="#" className="transition hover:text-cyan-200">
              Security
            </a>
            <a href="#" className="transition hover:text-cyan-200">
              Product updates
            </a>
            <a href="#" className="transition hover:text-cyan-200">
              Careers
            </a>
            <a href="#" className="transition hover:text-cyan-200">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
