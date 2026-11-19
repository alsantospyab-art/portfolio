"use client";
import { useState } from "react";
import { liveProjects } from "@/data/skills";

export default function ProjectCarousel() {
  const [i, setI] = useState(0);
  const n = liveProjects.length;
  const go = (k: number) => setI((k + n) % n);
  const p = liveProjects[i];

  return (
    <div
      className="car"
      role="region"
      aria-roledescription="carousel"
      aria-label="Live projects"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
    >
      <div className="slide" key={p.url} aria-live="polite">
        <div>
          <p className="muted small">Project {i + 1} of {n}</p>
          <h3>{p.name}</h3>
          <p>{p.text}</p>
          <div className="chips">{p.tags.map((t) => <span className="chip" key={t}>{t}</span>)}</div>
          <div className="row">
            <a className="btn primary" href={p.url} target="_blank" rel="noopener noreferrer">Open live site</a>
            <a className="btn" href={p.repo} target="_blank" rel="noopener noreferrer">Source code</a>
          </div>
        </div>
        <div className="frame">
          <iframe src={p.url} title={`${p.name} preview`} loading="lazy" tabIndex={-1} sandbox="allow-scripts allow-same-origin" />
          <a href={p.url} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name}`} />
        </div>
      </div>
      <div className="carbar">
        <button className="btn" onClick={() => go(i - 1)} aria-label="Previous project">Previous</button>
        <div className="dots">
          {liveProjects.map((x, k) => (
            <button key={x.url} className="dot" aria-label={`Show ${x.name}`} aria-current={k === i} aria-selected={k === i} onClick={() => setI(k)} />
          ))}
        </div>
        <button className="btn" onClick={() => go(i + 1)} aria-label="Next project">Next</button>
      </div>
    </div>
  );
}
