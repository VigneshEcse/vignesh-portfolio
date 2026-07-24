"use client";

import { useEffect, useRef } from "react";
import { heroContent } from "@/data/portfolioContent";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Hero() {
  const diagramRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    function drawConnectors() {
      const svg = svgRef.current;
      const container = diagramRef.current;
      if (!svg || !container || window.innerWidth <= 860) return;

      const nodeEls = container.querySelectorAll(".nodes .node");
      if (nodeEls.length < 2) return;

      const cRect = container.getBoundingClientRect();
      let paths = "";

      for (let i = 0; i < nodeEls.length - 1; i++) {
        const a = nodeEls[i].getBoundingClientRect();
        const b = nodeEls[i + 1].getBoundingClientRect();
        const x1 = a.right - cRect.left - 20;
        const y1 = a.top + a.height / 2 - cRect.top - 34;
        const x2 = b.left - cRect.left - 20;
        const y2 = b.top + b.height / 2 - cRect.top - 34;
        paths += `<path d="M ${x1} ${y1} H ${x2}" />`;
      }

      svg.setAttribute("viewBox", `0 0 ${cRect.width - 40} ${cRect.height - 60}`);
      svg.innerHTML = paths;
    }

    drawConnectors();
    window.addEventListener("load", drawConnectors);
    window.addEventListener("resize", drawConnectors);
    return () => {
      window.removeEventListener("load", drawConnectors);
      window.removeEventListener("resize", drawConnectors);
    };
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="eyebrow">{heroContent.eyebrow}</div>
        <h1 className="headline">
          {heroContent.headline} <span className="accent">{heroContent.accentText}</span>
        </h1>
        <p className="sub">{heroContent.description}</p>
        <div className="hero-ctas">
          <a href={heroContent.primaryCta.href} className="btn primary">
            {heroContent.primaryCta.label}
          </a>
          <a href={`${basePath}${heroContent.secondaryCta.href}`} className="btn">
            {heroContent.secondaryCta.label}
          </a>
        </div>

        <div className="diagram" ref={diagramRef}>
          <span className="diagram-label">// current stack — telecom platform</span>
          <svg
            ref={svgRef}
            className="connector-svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
          ></svg>
          <div className="nodes">
            {heroContent.nodes.map((node, i) => (
              <div
                key={node.v}
                className={`node${node.customer ? " customer" : ""}`}
                style={{ animationDelay: `${0.05 + i * 0.1}s` }}
              >
                <div className="k">{node.k}</div>
                <div className="v">{node.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
