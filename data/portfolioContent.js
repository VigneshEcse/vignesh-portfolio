export const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#problem-product", label: "Problem to Product" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
];

export const heroContent = {
    eyebrow: "Senior Associate Consultant · Appian Certified Associate Developer",
    headline: "I connect systems so the interface never has to explain the",
    accentText: "plumbing.",
    description:
        "Vignesh E — frontend and low-code developer building React.js / Next.js interfaces and custom Appian plugins that hold up in production, not just in a demo.",
    primaryCta: { label: "Read the billing page story →", href: "#problem-product" },
    secondaryCta: { label: "Download resume", href: "/resume.pdf" },
    nodes: [
        { k: "UI Layer", v: "React.js / Next.js" },
        { k: "Reusable components", v: "Pattern Library" },
        { k: "Wired via", v: "REST APIs" },
        { k: "Code Storage/Review", v: "Github" },
        { k: "Deployment", v: "Azure Devops" },
        { k: "Reaches", v: "The Customer", customer: true },
    ],
    appianNodes: [
        { k: "Components", v: "React.js / JS" },
        { k: "Smart Service ", v: "Java SDKs" },
        { k: "Connected Systems", v: "Java HTTPs api" },
        { k: "Code Storage/Review", v: "Github" },
        { k: "Posted", v: "Appian App market" },
        { k: "Reaches", v: "The Customer", customer: true },
    ],
};

export const aboutFacts = [
    { id: "experience", n: "4+ yrs", d: "React.js, Next.js & Appian development" },
    { id: "companies", n: "2", d: "Companies — Infosys, WNS-Vuram" },
    { id: "roles", n: "2", d: "Roles - Frontend Developer, Appian Certified Associate Developer" },
    { id: "launch", n: "0→1", d: "Shipped a feature with no reference test data — see the story" },
];

export const experienceRoles = [
    {
        when: "Jan 2025 — Present",
        title: "Senior Associate Consultant",
        company: "Infosys · Telecom client project",
        bullets: [
            "Build customer-facing frontend features in React.js and Next.js, integrating REST APIs from backend service teams and dynamic content delivered via Adobe Experience Manager (AEM).",
            "Maintain NUI, a shared design-system pattern library used across multiple repositories on the platform.",
            "Use feature flags to ship new features behind safe, staged rollouts with reliable fallback behavior.",
            "Write unit tests for React components to guard against regressions.",
        ],
        tags: ["React.js", "Next.js", "Pattern Library", "Feature Flags"],
    },
    {
        when: "Jun 2022 — Jan 2025",
        title: "Associate Programmer",
        company: "WNS-Vuram",
        bullets: [
            "Integrated Appian solutions with external systems via REST APIs and web services — Connected Systems, Functions, and Smart Services — using Core Java, plus custom UI component plugins in JavaScript/React.js.",
            "Researched feasibility and produced time estimates for new plugin development and testing.",
            "Optimized existing plugins for performance and mentored junior developers.",
        ],
        tags: ["Appian", "JS", "Core Java", "REST API"],
    },
    {
        when: "Jul 2021 — Jun 2022",
        title: "Intern",
        company: "WNS-Vuram",
        bullets: [
            "Trained in Appian development and best practices; assisted senior developers on plugin development, testing, and debugging.",
        ],
        tags: ["Appian Fundamentals"],
    },
];

export const problemToProductContent = {
    title: "The billing page nobody had data for",
    intro:
        "A new account billing page needed to ship — a fresh design, no precedent to copy. There was no sample data and no test data to build against. Even the test team didn’t have scenarios to validate it with.",
    steps: [
        {
            k: "01 · The gap",
            v: "No sample or test data existed for a fully new feature — nothing to build or validate against.",
        },
        {
            k: "02 · The build",
            v: "Worked directly from the design team's variants and schema to build the UI end-to-end, on schedule.",
        },
        {
            k: "03 · The safeguard",
            v: "Shipped behind a feature flag, then validated live in production against the real scenarios the test team did have.",
        },
        {
            k: "04 · The result",
            v: "Two months post-launch, a customer wrote in — unprompted — about the new page.",
        },
    ],
    quote: '"Hey, love the new format of our account on the line — awesome, easy reading, and well done."',
    quoteSource: "— End customer, via client support channel",
    note:
        "The client's account team noted that direct positive customer feedback like this is rare — most quality signals in enterprise software are indirect.",
};

export const skillGroups = [
    { title: "Frontend", items: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML / CSS"] },
    {
        title: "Low-Code / Appian",
        items: ["Appian Plugin Development", "Appian Low-Code Platform", "Connected Systems", "Smart Services"],
    },
    { title: "Integration", items: ["REST APIs", "Adobe Experience Manager", "Core Java", "HTTP Methods"] },
    { title: "Practice", items: ["Feature Flags & Rollouts", "Design Systems", "Unit Testing", "Git"] },
];

export const credentialsContent = {
    certifications: [
        { t: "Appian Certified Associate Developer", d: "Appian" },
        { t: "React JS — The Complete Guide 2024", d: "Udemy" },
    ],
    education: {
        t: "B.E., Computer Science and Engineering",
        d: "M. Kumarasamy College of Engineering, Karur · 2018–2022",
    },
};

export const footerContent = {
    heading: "Open to React/Next.js, full-stack, and Appian roles.",
    description:
        "The fastest way to reach me is by phone or LinkedIn — happy to walk through any of the work above in more detail.",
    email: "mailto:vigneshecse2020@gmail.com",
    phone: "tel:+919629677046",
    linkedin: "https://www.linkedin.com/in/vigneshe-3014501b0/",
    footerNote: "Vignesh E · Built with React.js instincts, shipped as a Next.js project.",
};
