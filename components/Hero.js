"use client";

import { useEffect, useRef } from "react";
import { heroContent } from "@/data/portfolioContent";
import {
  Accent,
  Button,
  ConnectorSvg,
  Diagram,
  DiagramLabel,
  Eyebrow,
  Headline,
  HeroActions,
  HeroSection,
  NodeBox,
  NodeTitle,
  NodeValue,
  Nodes,
  PrimaryButton,
  Subtext,
  Wrap,
} from "@/components/styled";

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
      const firstNode = nodeEls[0].getBoundingClientRect();
      const lastNode = nodeEls[nodeEls.length - 1].getBoundingClientRect();
      const centerY = firstNode.top + firstNode.height / 2 - cRect.top - 34;
      const startX = firstNode.left + firstNode.width / 2 - cRect.left - 20;
      const endX = lastNode.left + lastNode.width / 2 - cRect.left - 20;
      const svgWidth = cRect.width - 40;
      const svgHeight = cRect.height - 60;

      svg.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
      svg.setAttribute("width", `${svgWidth}`);
      svg.setAttribute("height", `${svgHeight}`);
      svg.innerHTML = `<path d="M ${startX} ${centerY} H ${endX}" />`;
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
    <HeroSection id="top">
      <Wrap>
        <Eyebrow>{heroContent.eyebrow}</Eyebrow>
        <Headline>
          {heroContent.headline} <Accent>{heroContent.accentText}</Accent>
        </Headline>
        <Subtext>{heroContent.description}</Subtext>
        <HeroActions>
          <PrimaryButton href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</PrimaryButton>
          <Button href={`${basePath}${heroContent.secondaryCta.href}`}>{heroContent.secondaryCta.label}</Button>
        </HeroActions>

        <Diagram ref={diagramRef}>
          <DiagramLabel>// current stack — telecom platform</DiagramLabel>
          <ConnectorSvg ref={svgRef} viewBox="0 0 1000 100" preserveAspectRatio="none"></ConnectorSvg>
          <Nodes>
            {heroContent.nodes.map((node, i) => (
              <NodeBox
                key={node.v}
                className={node.customer ? "customer" : ""}
                style={{ animationDelay: `${0.05 + i * 0.1}s` }}
              >
                <NodeTitle>{node.k}</NodeTitle>
                <NodeValue>{node.v}</NodeValue>
              </NodeBox>
            ))}
          </Nodes>
        </Diagram>
         <Diagram ref={diagramRef}>
          <DiagramLabel>// Appian Plugin Development</DiagramLabel>
          <ConnectorSvg ref={svgRef} viewBox="0 0 1000 100" preserveAspectRatio="none"></ConnectorSvg>
          <Nodes>
            {heroContent.appianNodes.map((node, i) => (
              <NodeBox
                key={node.v}
                className={node.customer ? "customer" : ""}
                style={{ animationDelay: `${0.05 + i * 0.1}s` }}
              >
                <NodeTitle>{node.k}</NodeTitle>
                <NodeValue>{node.v}</NodeValue>
              </NodeBox>
            ))}
          </Nodes>
        </Diagram>
      </Wrap>
    </HeroSection>
  );
}
