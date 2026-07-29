"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef } from "react";

type StatementWord = {
  text: string;
  emphasis?: boolean;
  accent?: boolean;
};

const statement: StatementWord[] = [
  { text: "Designer Prabin" },
  { text: "is" },
  { text: "a" },
  { text: "creative" },
  { text: "practice" },
  { text: "with" },
  { text: "a" },
  { text: "focused" },
  { text: "blend" },
  { text: "of" },
  { text: "strategic" },
  { text: "thinking," },
  { text: "visual" },
  { text: "craft" },
  { text: "and" },
  { text: "production" },
  { text: "expertise." },
  { text: "We" },
  { text: "help" },
  { text: "brands" },
  { text: "imagine", emphasis: true },
  { text: "clearer" },
  { text: "possibilities," },
  { text: "build", emphasis: true },
  { text: "distinctive" },
  { text: "design" },
  { text: "systems" },
  { text: "and" },
  { text: "tell", emphasis: true },
  { text: "meaningful" },
  { text: "stories" },
  { text: "through" },
  { text: "print," },
  { text: "digital" },
  { text: "experiences" },
  { text: "and" },
  { text: "AI-powered" , accent: true },
  { text: "digital", accent: true },
  { text: "marketing.", accent: true },
];

function AnimatedWord({
  word,
  index,
  progress,
  reducedMotion,
}: {
  word: StatementWord;
  index: number;
  progress: MotionValue<number>;
  reducedMotion: boolean | null;
}) {
  const start = (index / statement.length) * 0.73;
  const end = Math.min(start + 0.18, 0.97);
  const opacity = useTransform(progress, [start, end], [0.1, 1]);
  const y = useTransform(progress, [start, end], [28, 0]);
  const blur = useTransform(progress, [start, end], [8, 0]);
  const filter = useTransform(blur, (value) => `blur(${value}px)`);

  const className = [
    "about-scroll-word",
    word.emphasis ? "is-emphasis" : "",
    word.accent ? "is-accent" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <motion.span
      className={className}
      style={reducedMotion ? undefined : { opacity, y, filter }}
    >
      {word.text}
    </motion.span>
  );
}

export function AboutScrollStatement() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const progressScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="about-scroll-section"
      aria-labelledby="about-scroll-heading"
    >
      <div className="about-scroll-stage">
        <div className="about-scroll-meta" aria-hidden="true">
          <span>About / 01</span>
          <span>Scroll to reveal</span>
        </div>
        <h2 id="about-scroll-heading" className="about-scroll-statement">
          {statement.map((word, index) => (
            <AnimatedWord
              key={`${word.text}-${index}`}
              word={word}
              index={index}
              progress={scrollYProgress}
              reducedMotion={reducedMotion}
            />
          ))}
        </h2>
        <div className="about-scroll-progress" aria-hidden="true">
          <motion.span
            style={reducedMotion ? { scaleY: 1 } : { scaleY: progressScale }}
          />
        </div>
      </div>
    </section>
  );
}
