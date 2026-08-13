# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are tech recruiters and hiring managers, evaluating Gabriel Gallo for software, electrical engineering, or hardware internship and new-grad roles. They are scanning quickly, not reading deeply — the site needs to answer "is this person worth an interview?" fast.

## Product Purpose

A personal portfolio site introducing Gabriel Gallo: his background, skills, and real project work, structured around a single goal — landing an internship or new-grad role. Success looks like a recruiter downloading his resume, clicking through to a live project, or reaching out via email/LinkedIn.

## Positioning

The rare EE + CS combination: hardware fluency (RISC-V, SystemVerilog) paired with full-stack software, AI, and robotics work. This should read as genuine breadth, not a CS-only or EE-only student portfolio — the throughline other candidates can't truthfully claim.

## Operating Context

Single-page site with anchor-linked sections (Profile/Hero, About, Experience, Projects, Contact), desktop nav plus a mobile hamburger nav. Hero includes a resume download CTA and a contact CTA. Skill icons are pulled from external CDNs (simple-icons, iconify). Resume PDF and photos are served directly from `/assets`. Deployed as static files with no backend or build step.

## Capabilities and Constraints

- Plain static HTML/CSS/JS — no framework, no build tooling, no backend.
- Resume is a static PDF in `/assets`, currently versioned by filename (`Gabriel_Gallo_Resume_2026_V1.pdf`, with older `2025` and undated versions also present in the folder).
- Deployment target not yet confirmed (likely static hosting such as GitHub Pages, unconfirmed).

## Brand Commitments

- Name: Gabriel Gallo.
- Current title line: "Electrical Engineering and Computer Science Student."
- UC Berkeley affiliation (B.S. Electrical Engineering and Computer Science, senior).

## Evidence on Hand

- **IBD Digest** — real, shipped app live on the iOS App Store and Google Play (published under the UnifIBD org). This is the strongest proof point: a real product with real users, not a class project.
- **TurtleBot Interceptor** — EECS106A robotics final project (ROS2), with a live project website linked.
- 2+ years of freelance work (stated in hero card; no case studies or client details on hand).
- Real profile and group photos in `/assets`.
- No testimonials, press, benchmarks, or case studies exist — future work must not fabricate them.

## Product Principles

1. Lead with the EE+CS hybrid — never let the site read as CS-only or EE-only; hardware and software work should both be visible above the fold of the Experience section.
2. Every claim must trace to real, verifiable evidence (live app links, real repos, real photos) — no fabricated metrics, testimonials, or client logos.
3. Optimize for a recruiter's fast scan: skills, real shipped work, and a clear path to resume/contact should all be reachable within seconds of landing.
4. Keep the resume download and contact CTAs prominent and low-friction from the first viewport onward.
