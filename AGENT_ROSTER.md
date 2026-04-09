# Zen Books — Agent Roster (Ollama-First)
> Last Updated: 2026-04-08
> 80% Ollama (free), 15% Claude Haiku, 4% Sonnet, 1% Opus (QA only)

---

## Model Tiers

| Tier | Model | Cost | Use When |
|------|-------|------|----------|
| 1A | `llama3.2:3b` (Ollama) | $0 | Fast classification, monitoring, scoring |
| 1B | `llama3.1:8b` (Ollama) | $0 | Content drafts, persona simulation, email writing |
| 1C | `deepseek-coder:6.7b` (Ollama) | $0 | Code generation, debugging |
| 2 | `claude-haiku-4-5` | ~$0.002/call | Content editing, light reasoning |
| 3 | `claude-sonnet-4-6` | ~$0.015/call | Complex strategy, architecture decisions |
| 4 | `claude-opus-4-6` | ~$0.05/call | MANDATORY QA before any push (non-negotiable) |

---

## Agent Directory

### PHASE 1 AGENTS — Local SEO

```yaml
- name: SEOResearcher
  model: llama3.1:8b
  tool: paperclip
  role: Find long-tail keyword opportunities for NEPA towns
  prompt_template: |
    You are an SEO researcher. Find 10 low-competition long-tail keywords 
    for bookkeeping services in {city}, PA. Focus on local intent queries.
    Output: JSON array of {keyword, estimated_monthly_searches, competition}

- name: LandingPageDrafter
  model: llama3.1:8b
  tool: paperclip
  role: Write landing page copy for each NEPA town
  prompt_template: |
    You write for Zen Books (husband-wife bookkeeping team, Scranton PA).
    Write a landing page for bookkeeping services in {city}, PA.
    Primary ICP: fix-and-flip real estate investors.
    Pain points to address: {top_3_pain_points}
    Brand voice: calm, judgment-free, plain English, warm, honest scale.
    Output: headline, subheadline, 3 value props, CTA text, FAQ (3 questions)

- name: SchemaMarkupBuilder
  model: deepseek-coder:6.7b
  tool: paperclip
  role: Generate JSON-LD schema markup for local business pages
  
- name: LandingPageValidator
  model: llama3.1:8b
  tool: UXAgent
  role: Simulate 10 Fix & Flip personas reviewing each landing page
  personas_file: .claude/icp-research-intelligence.md
  pass_threshold: "80% of personas would click CTA"
```

### PHASE 2 AGENTS — Content Flywheel

```yaml
- name: ContentPlanner
  model: llama3.2:3b
  tool: paperclip
  role: Map 14 pain points to blog topics, prioritize by search volume
  
- name: BlogDrafter
  model: llama3.1:8b
  tool: paperclip
  role: Write 600-900 word blog posts from pain point template
  schedule: 3x/week
  prompt_template: |
    Write a blog post for fix-and-flip real estate investors about: {pain_point}
    Brand: Zen Books (calm, judgment-free bookkeeper for investors)
    Length: 700 words. Plain English. No jargon.
    Include: what the pain is, why it happens, how Zen Books solves it, CTA.
    
- name: BlogEditor
  model: claude-haiku-4-5
  tool: paperclip
  role: Quality-check and polish Ollama-generated blog drafts
  trigger: after BlogDrafter completes
  
- name: VideoScriptWriter
  model: llama3.1:8b
  tool: paperclip
  role: Convert blog post to 60-90 second TikTok/YouTube Short script
  
- name: VideoGenerator
  model: N/A (no LLM needed)
  tool: RedditVideoMakerBot
  role: Auto-generate short video from blog content + script
  schedule: same-day as blog post
```

### PHASE 3 AGENTS — Community Monitoring

```yaml
- name: CommunityMonitor
  model: llama3.2:3b
  tool: ruflo
  role: Scan r/FixAndFlip, BiggerPockets, FB REI groups for pain point mentions
  scan_interval: every 2 hours
  communities:
    - reddit.com/r/realestateinvesting
    - reddit.com/r/FixAndFlip
    - reddit.com/r/BiggerPockets
    - reddit.com/r/realestate
  pain_point_keywords:
    - "bookkeeper"
    - "QuickBooks"
    - "CapEx vs repairs"
    - "entity structure"
    - "1031 exchange records"
    - "books are a mess"
    - "can't find bookkeeper"
    - "how do you track"
    - "CPA said my books"
  output: flag high-intent posts (score > 0.7) for human review
  
- name: IntentScorer
  model: llama3.2:3b
  tool: ruflo
  role: Score community posts by buyer intent (0.0-1.0)
  trigger: when CommunityMonitor flags a post
  scoring_rubric: |
    0.9-1.0: "I need a bookkeeper" / "our books are a disaster"
    0.7-0.9: "how do you handle [pain point]"
    0.5-0.7: "what software do you use"
    <0.5: general discussion, not buyer intent
    
- name: ResponseDrafter
  model: llama3.1:8b
  tool: ruflo
  role: Draft helpful, non-salesy community response
  trigger: when IntentScorer returns > 0.7
  note: "HUMAN REVIEWS before posting. Never auto-post community responses."
  output: draft response + "does this feel helpful or salesy? approve/revise"
```

### PHASE 4 AGENTS — Email Sequences

```yaml
- name: EmailStrategist
  model: claude-haiku-4-5
  tool: paperclip
  role: Map each persona to optimal 7-email sequence structure
  
- name: EmailDrafter
  model: llama3.1:8b
  tool: paperclip
  role: Write email variants (3 per email, 7 emails = 21 total)
  sequences:
    - "CapEx_Confusion_Sequence" (for personas: Mike, Sarah, Carlos)
    - "Entity_Structure_Sequence" (for personas: Aisha, Tyler)
    - "Scaling_Chaos_Sequence" (for personas: Maria, David)
    - "Audit_Fear_Sequence" (for personas: Rachel, Jamal)
    - "General_REI_Sequence" (for personas: Lisa + new leads)
    
- name: EmailValidator
  model: llama3.1:8b
  tool: UXAgent
  role: Test each email against relevant Fix & Flip personas
  pass_threshold: "80% of relevant personas would click CTA"
  
- name: LeadRouter
  model: llama3.2:3b
  tool: ruflo
  role: When new lead arrives, match to best email sequence based on pain point profile
  input: lead name, location, deal count, discovered pain points
  output: sequence assignment + rationale
  
- name: SubjectLineOptimizer
  model: llama3.1:8b
  tool: autoresearch
  role: Generate 20 subject line variants, score by emotion trigger strength
  schedule: weekly
  auto_deploy_threshold: "UXAgent score > previous best"
```

---

## Orchestration Flow

```
LEAD ARRIVES
     │
     ▼
LeadRouter (llama3.2:3b)
"Which of 5 sequences?"
     │
     ▼
Email Sequence Starts
     │ (every 3-4 days)
     ▼
EmailDrafter (llama3.1:8b) → EmailValidator (llama3.1:8b UXAgent)
     │ if pass
     ▼
Deploy Variant
     │
     ▼
Engagement Monitor (llama3.2:3b)
"Open rate < 20%? Switch sequence."
     │ if engagement drops
     ▼
LeadRouter reassigns sequence
     │
     ▼
CONVERSION: "Book a call" CTA clicked
     │
     ▼
Human takes over (you)
```

---

## Setup Commands

```bash
# Install required Ollama models
ollama pull llama3.1:8b      # Primary content model (4.7GB)
ollama pull llama3.2:3b      # Fast classification model (2GB)
ollama pull deepseek-coder:6.7b  # Code tasks (3.7GB)

# Verify models
ollama list

# Test Ollama agents
ollama run llama3.1:8b "You are a bookkeeper at Zen Books. Write a 2-sentence value prop for fix-and-flip investors."
ollama run llama3.2:3b "Score this Reddit post for bookkeeper intent (0-10): 'Anyone else struggle keeping their flip expenses organized? My CPA is going to kill me this year.' Output just the number."

# Start ruflo orchestration
cd /c/Users/zarny/ruflo
npx claude-flow@v3alpha hooks session-start --session-id "zenbooks-phase1"
```

---

## Cost Guard Rails

Rules enforced by the router:

1. **Never use Opus for content generation** — Haiku or Ollama only
2. **Never use Sonnet for monitoring** — Ollama only
3. **Always use Opus for pre-push QA** — Non-negotiable per team rule
4. **Daily Haiku budget cap:** $0.50/day — alert if exceeded
5. **Weekly Opus cap:** $5/week — alert if exceeded

---

*Zen Books Agent Roster — Ollama-First Architecture*
*Target: <$10/month in API costs for full automated operation*
