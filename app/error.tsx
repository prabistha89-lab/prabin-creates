"use client";
export default function ErrorPage({ reset }: { reset: () => void }) { return <section className="not-found"><div><span>LAYOUT ERROR</span><h1>Something slipped off the grid.</h1><p>Please try loading this section again.</p><button className="button" onClick={reset}>Try again</button></div></section>; }
