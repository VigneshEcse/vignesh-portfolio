"use client";

import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --bg: #0b1220;
    --bg-panel: #101a2e;
    --bg-panel-2: #0e1626;
    --line: rgba(255, 255, 255, 0.08);
    --line-strong: rgba(255, 255, 255, 0.16);
    --text: #e7ecf3;
    --text-muted: #8b98ac;
    --text-dim: #5c6b82;
    --teal: #37d6c4;
    --teal-dim: rgba(55, 214, 196, 0.35);
    --amber: #f5a623;
    --amber-dim: rgba(245, 166, 35, 0.35);
    --maxw: 1080px;
  }

  * {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    background: radial-gradient(1200px 600px at 15% -10%, rgba(55, 214, 196, 0.06), transparent 60%),
      radial-gradient(1000px 500px at 85% 0%, rgba(245, 166, 35, 0.05), transparent 55%), var(--bg);
    color: var(--text);
    font-family: var(--font-body), -apple-system, BlinkMacSystemFont, sans-serif;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3 {
    font-family: var(--font-display), sans-serif;
    letter-spacing: -0.01em;
    margin: 0;
  }

  a {
    color: inherit;
  }

  a:focus-visible,
  button:focus-visible {
    outline: 2px solid var(--teal);
    outline-offset: 3px;
    border-radius: 4px;
  }
`;

export const PageShell = styled.div`
  min-height: 100vh;
`;

export const Wrap = styled.div`
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 28px;
`;

export const Section = styled.section`
  padding: 100px 0;
  border-bottom: 1px solid var(--line);

  &:last-of-type {
    border-bottom: none;
  }
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  background: rgba(11, 18, 32, 0.78);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--line);
`;

export const NavWrap = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 64px;
  max-width: var(--maxw);
  margin: 0 auto;
  padding: 0 28px;

  @media (max-width: 720px) {
    .navlinks {
      display: none;
    }
  }
`;

export const Brand = styled.a`
  font-family: var(--font-display), sans-serif;
  font-weight: 600;
  font-size: 17px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
`;

export const BrandDot = styled.span`
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--teal);
  box-shadow: 0 0 10px var(--teal);
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;

  a {
    text-decoration: none;
    color: var(--text-muted);
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s ease;
  }

  a:hover {
    color: var(--text);
  }

  @media (max-width: 720px) {
    display: none;
  }
`;

export const Kicker = styled.span`
  font-family: var(--font-mono), monospace;
  font-size: 12.5px;
  color: var(--teal);
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 14px;
  display: block;
`;

export const Button = styled.a`
  font-family: var(--font-mono), monospace;
  font-size: 13px;
  border: 1px solid var(--line-strong);
  padding: 9px 16px;
  border-radius: 7px;
  text-decoration: none;
  color: var(--text);
  background: transparent;
  cursor: pointer;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.15s ease;
  display: inline-flex;
  align-items: center;
  gap: 8px;

  &:hover {
    border-color: var(--teal);
    background: rgba(55, 214, 196, 0.08);
  }
`;

export const PrimaryButton = styled(Button)`
  background: var(--teal);
  color: #04211d;
  border-color: var(--teal);
  font-weight: 500;

  &:hover {
    background: #4ee6d2;
    transform: translateY(-1px);
  }
`;

export const HeroSection = styled(Section)`
  padding-top: 170px;
  padding-bottom: 80px;
  position: relative;
  overflow: hidden;
`;

export const Eyebrow = styled.div`
  font-family: var(--font-mono), monospace;
  font-size: 12.5px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 18px;
  display: flex;
  align-items: center;
  gap: 10px;

  &::before {
    content: "";
    width: 22px;
    height: 1px;
    background: var(--teal);
  }
`;

export const Headline = styled.h1`
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 600;
  max-width: 820px;
  line-height: 1.12;
`;

export const Accent = styled.span`
  color: var(--teal);
`;

export const Subtext = styled.p`
  margin-top: 22px;
  font-size: 17px;
  color: var(--text-muted);
  max-width: 560px;
`;

export const HeroActions = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 36px;
  flex-wrap: wrap;
`;

export const Diagram = styled.div`
  margin-top: 76px;
  position: relative;
  padding: 34px 20px 26px;
  border: 1px solid var(--line);
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent);
`;

export const DiagramLabel = styled.span`
  position: absolute;
  top: -11px;
  left: 20px;
  background: var(--bg);
  padding: 0 8px;
  font-family: var(--font-mono), monospace;
  font-size: 11.5px;
  color: var(--text-dim);
  letter-spacing: 0.06em;
`;

export const Nodes = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 14px;
  position: relative;
  z-index: 2;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

export const NodeBox = styled.div`
  background: var(--bg-panel);
  border: 1px solid var(--line-strong);
  border-radius: 9px;
  padding: 16px 14px;
  text-align: center;
  opacity: 0;
  transform: translateY(10px);
  animation: nodeIn 0.6s ease forwards;

  &.customer {
    border-color: var(--amber-dim);
  }

  @keyframes nodeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: none;
  }
`;

export const NodeTitle = styled.div`
  font-family: var(--font-mono), monospace;
  font-size: 10.5px;
  color: var(--text-dim);
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const NodeValue = styled.div`
  margin-top: 6px;
  font-size: 14px;
  font-weight: 500;
`;

export const ConnectorSvg = styled.svg`
  position: absolute;
  inset: 34px 20px 26px 20px;
  z-index: 1;
  pointer-events: none;
  width: calc(100% - 40px);
  height: calc(100% - 60px);
  overflow: visible;

  path {
    fill: none;
    stroke: var(--teal-dim);
    stroke-width: 1.5;
    stroke-dasharray: 5 5;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;
