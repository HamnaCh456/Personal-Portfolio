import Link from "next/link";
import { GridWrapper } from "./components/GridWrapper";
import { HeroEditorial } from "./components/HeroEditorial";

const skillGroups: {
  title: string;
  icon: string;
  items: string[];
}[] = [
  {
    title: "AI & LLMs",
    icon: "🧠",
    items: ["OpenAI", "Groq", "Gemini", "Anthropic", "MCP"],
  },
  {
    title: "Frameworks",
    icon: "</>",
    items: ["CrewAI", "LangGraph", "LangChain", "LlamaIndex", "PydanticAI"],
  },
  {
    title: "Data & RAG",
    icon: "⚡",
    items: ["Pinecone", "ChromaDB", "Crawl4AI", "Hybrid Search", "Reranking"],
  },
  {
    title: "Web Development",
    icon: "🌐",
    items: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      ".NET",
      "Tailwind CSS",
      "Streamlit",
      "Chainlit",
    ],
  },
  {
    title: "Backend / Ops",
    icon: "🛠️",
    items: ["PostgreSQL", "Supabase", "Firebase", "Docker", "Linux"],
  },
  {
    title: "Voice AI",
    icon: "🎙️",
    items: [
      "Whisper STT",
      "ElevenLabs TTS",
      "Deepgram",
      "Real-time Streaming",
    ],
  },
];

const experience = [
  {
    role: "AI Engineer",
    company: "Spiral Lab",
    companyUrl:
      "https://www.linkedin.com/company/spiral-lab1/posts/?feedView=all",
    period: "Aug 2025 — Present",
    bullets: [
      "Architected and deployed production-grade agentic AI systems with domain-specific autonomous agents",
      " Built end-to-end AI infrastructure including RAG pipelines, vector databases (Pinecone, ChromaDB), deployment pipelines, and monitoring systems for production reliability",
      "Developed multi-agent orchestration systems using CrewAI and LangGraph for complex business automation; agents that take action, not just give recommendations",
    ],
  },
  {
    role: "AI Intern",
    company: "Spiral Lab",
    companyUrl:
      "https://www.linkedin.com/company/spiral-lab1/posts/?feedView=all",
    period: "Jun 2025 — Aug 2025",
    bullets: [
      "Contributed to early prototypes of agentic AI workflows and RAG-powered applications.",
      " Worked with AI technologies such as MCP, RAG, building self-improving,conversational AI Agents ,CrewAI based Multi-Agent Systems.",
      "Used different API (Twitter,Gmail, Gemini, Groq, Deepgram, FireCrawl).",
    ],
  },
];

const featuredProjects = [
  {
    title: "Historical Figure Storyteller",
    description:
      "A multi-agent AI app that turns authentic historical sources into multilingual story videos with AI-generated visuals, voiceovers and subtitles.",
    tech: "CrewAI · Gemini · Deepgram · MoviePy · Streamlit",
    href: "https://github.com/HamnaCh456/Historical_Figure_Storyteller",
    linkedinPostUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7361119095414501379/",
  },
  {
    title: "AI Inbox Assistant",
    description:
      "An AI-powered Gmail assistant that drafts grounded customer replies using RAG, keeping a human in the loop for review and approval.",
    tech: "FastAPI · React · Gemini · Gmail API",
    href: "https://github.com/HamnaCh456/AI_Inbox_Assistant",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/hamna-hameed-7431472a5_managing-customer-emails-is-time-consuming-ugcPost-7420020466867798016-AUWK/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmGk2MBqDVhttvfzmb8ktR9JiQqLCDCGNY",
  },
  {
    title: "Dastan Hub",
    description:
      "A full-stack ASP.NET MVC platform for book lovers with reviews, personalized lists and real-time SignalR notifications.",
    tech: "ASP.NET MVC · C# · SignalR · SQL Server",
    href: "https://github.com/HamnaCh456/FableClone",
    linkedinPostUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7419419785895051265/",
  },
  {
    title: "Resend MCP Server",
    description:
      "I have created my first MCP Server that lets LLMs (Large Language Models) send emails effortlessly!",
    tech: "FastMCP · Python · Resend",
    href: "https://github.com/HamnaCh456/Resend_MCP_server",
    linkedinPostUrl:
      "https://www.linkedin.com/feed/update/urn:li:activity:7358814332765265920/",
  },
  {
    title: "Data Analyst Agent",
    description:
      "A custom agent that handles multiple files and multiple natural-language queries in a single run, returning separate results per query.",
    tech: "Groq · DuckDB · Python",
    href: "https://github.com/HamnaCh456/Data_Analyst_Agent",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/hamna-hameed-7431472a5_if-you-are-looking-for-a-data-analyst-i-activity-7329787492247728128-sGSj?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmGk2MBqDVhttvfzmb8ktR9JiQqLCDCGNY",
  },
  {
    title: "AI NoteTaker",
    description:
      "A real-time AI-powered note-taking assistant that listens to speech, extracts key points, and automatically organizes them into hierarchical notes and topic trees.",
    tech: "Python · Streamlit · Deepgram · Groq · WebSockets · PyAudio",
    href: "https://github.com/HamnaCh456/audio_to_transcription_to_topic_extraction",
  },
  {
    title: "Self Learning Agent",
    description:
      "An autonomous agent with persistent memory that learns from every interaction, storing context across sessions, recalling relevant past exchanges, and adapting its behavior over time.",
    tech: "Python · LLMs · Persistent Memory · Agents",
    href: "https://github.com/HamnaCh456/Persistent_Memory_Agent",
  },
  {
    title: "Researcher Agent",
    description:
      "An AI-powered multi-agent company research system that discovers relevant sources, scrapes and analyzes web content, and generates refined, well-structured company reports.",
    tech: "CrewAI · Python · Google Gemini API · Serper API",
    href: "https://github.com/HamnaCh456/Researcher_Agent",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/hamna-hameed-7431472a5_i-developed-a-multi-agent-system-company-ugcPost-7353787379985317888-qToy/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmGk2MBqDVhttvfzmb8ktR9JiQqLCDCGNY",
  },
  {
    title: "RAG App",
    description:
      "Built a RAG-based AI application that retrieves information from web pages and generates reliable answers backed by source citations.",
    tech: "LangChain · Hugging Face · Pinecone · Groq",
    href: "https://github.com/HamnaCh456/RAG_app",
    linkedinPostUrl:
      "https://www.linkedin.com/posts/hamna-hameed-7431472a5_i-recently-developed-a-rag-retrieval-augmented-ugcPost-7353828961539272704-SLCT/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmGk2MBqDVhttvfzmb8ktR9JiQqLCDCGNY",
  },
];

export default function Home() {
  return (
    <section>
      <div className="space-y-10 md:space-y-16">
        {/* Hero */}
        <HeroEditorial />

        {/* What I Work With */}
        <section id="stack" className="relative space-y-8 md:space-y-12">
          <div className="space-y-4">
            <GridWrapper noBorder={true}>
              <div className="text-center">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-dim">
                  &mdash; The Toolbox
                </p>
                <h2 className="mx-auto max-w-lg text-balance font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
                  What I <span className="italic text-ink-muted">work</span>{" "}
                  with
                </h2>
              </div>
            </GridWrapper>
          </div>

          <GridWrapper noBorder={true}>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-2xl border border-border bg-surface p-5 transition hover:border-border-strong"
                >
                  <h3 className="mb-4 flex items-center gap-2 font-sans text-[15px] font-semibold tracking-tight text-ink">
                    <span aria-hidden="true">{group.icon}</span>
                    {group.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="inline-flex items-center rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.08em] text-ink-muted"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </GridWrapper>
        </section>

        {/* Experience */}
        <section id="experience" className="relative space-y-8 md:space-y-12">
          <div className="space-y-4">
            <GridWrapper>
              <div className="text-center">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-dim">
                  &mdash; The Story So Far
                </p>
                <h2 className="mx-auto max-w-lg text-balance font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
                  Where I&apos;ve been{" "}
                  <span className="italic text-ink-muted">working</span>
                </h2>
              </div>
            </GridWrapper>
          </div>

          <GridWrapper>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {experience.map((job) => (
                <div
                  key={`${job.role}-${job.period}`}
                  className="rounded-2xl border border-border bg-surface p-6 transition hover:border-border-strong"
                >
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="font-sans text-lg font-semibold tracking-tight text-ink">
                        {job.role}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
                        {job.companyUrl ? (
                          <Link
                            href={job.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition hover:text-ink"
                          >
                            {job.company}
                          </Link>
                        ) : (
                          job.company
                        )}
                      </p>
                    </div>
                    <span className="inline-flex items-center rounded-md border border-border bg-surface-2 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-sm leading-6 text-ink-muted"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ink-muted"
                        />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GridWrapper>
        </section>

        {/* Projects Section */}
        <section id="work" className="relative space-y-8 md:space-y-12">
          <div className="relative space-y-4 text-balance">
            <GridWrapper>
              <div className="text-center">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-dim">
                  &mdash; Selected Work
                </p>
                <h2 className="mx-auto max-w-lg font-display text-4xl leading-[1.05] tracking-tight text-ink md:text-5xl">
                  A few things I&apos;ve{" "}
                  <span className="italic text-ink-muted">built</span> recently
                </h2>
              </div>
            </GridWrapper>
          </div>

          <div className="z-10">
            <GridWrapper className="pb-10 md:pb-16">
              <ul className="z-50 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project) => (
                  <li key={project.title}>
                    <div className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-5 transition hover:border-border-strong hover:bg-surface-2">
                      <div className="mb-3 flex items-start justify-between">
                        <h3 className="flex-grow font-sans text-[15px] font-semibold tracking-tight text-ink transition-colors group-hover:text-ink">
                          {project.title}
                        </h3>
                        <div className="ml-2 flex gap-2">
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View GitHub Repository"
                            className="flex-shrink-0 text-ink-dim transition-colors hover:text-ink"
                          >
                            <svg
                              className="h-5 w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          </a>
                          {project.linkedinPostUrl && (
                            <a
                              href={project.linkedinPostUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              title="View LinkedIn Post"
                              className="flex-shrink-0 text-ink-dim transition-colors hover:text-ink"
                            >
                              <svg
                                className="h-5 w-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.721-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.61 2.920-1.61 2.134 0 3.735 1.39 3.735 4.38v5.601zM5.337 8.855c-1.144 0-1.915-.761-1.915-1.715 0-.955.77-1.715 1.969-1.715 1.199 0 1.915.76 1.927 1.715 0 .954-.728 1.715-1.981 1.715zm-1.6 11.597h3.191V9.555H3.737v10.897zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="mb-4 line-clamp-4 flex-grow whitespace-pre-line text-sm leading-6 text-ink-muted">
                        {project.description}
                      </p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-dim">
                        {project.tech}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </GridWrapper>
          </div>
        </section>
      </div>
    </section>
  );
}
