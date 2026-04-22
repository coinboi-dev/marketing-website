// @ts-nocheck

'use client';
import { useEffect } from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { 
  SiShopify, SiStripe, SiOpenai, SiAnthropic, SiGithub, 
  SiGoogleads, SiGooglemaps, SiTwilio, SiMeta, SiSlack, 
  SiSquare, SiAtlassian 
} from 'react-icons/si';

const vendorsList = [
  { n: 'Shopify',    Icon: SiShopify,    c: '#95BF47', note: 'Changelog, Action Required, scheduled cutovers' },
  { n: 'Stripe',     Icon: SiStripe,     c: '#635BFF', note: 'Changelog, breaking changes, API versions' },
  { n: 'OpenAI',     Icon: SiOpenai,     c: '#10a37f', note: 'Changelog, deprecations, model sunset dates' },
  { n: 'Anthropic',  Icon: SiAnthropic,  c: '#D97757', note: 'Release notes, model deprecations' },
  { n: 'GitHub',     Icon: SiGithub,     c: '#ffffff', note: 'GraphQL breaking changes, REST changelog' },
  { n: 'Google Ads', Icon: SiGoogleads,  c: '#4285F4', note: 'Release notes, API version retirement' },
  { n: 'Google Maps',Icon: SiGooglemaps, c: '#34A853', note: 'Places & Maps API release notes' },
  { n: 'Twilio',     Icon: SiTwilio,     c: '#F22F46', note: 'Changelog & EOL announcements' },
  { n: 'Meta',       Icon: SiMeta,       c: '#0866ff', note: 'Graph API changelog & versioning' },
  { n: 'Slack',      Icon: SiSlack,      c: '#E01E5A', note: 'API changelog, deprecation notices' },
  { n: 'Square',     Icon: SiSquare,     c: '#ededf0', note: 'Release notes, sandbox breaking changes' },
  { n: 'Atlassian',  Icon: SiAtlassian,  c: '#2684FF', note: 'Jira & Confluence API changes' },
];

export default function HomePage() {
  useEffect(() => {
    
  // Reveal on intersect
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // ---------- Hero pulse dots ----------
  const pulseEvents = [
    { t: 3,  s: 'info',  v: 'Meta' },
    { t: 10, s: 'watch', v: 'Stripe' },
    { t: 17, s: 'act',   v: 'OpenAI', match: true },
    { t: 22, s: 'info',  v: 'OpenAI' },
    { t: 29, s: 'watch', v: 'Anthropic' },
    { t: 36, s: 'info',  v: 'Shopify' },
    { t: 44, s: 'watch', v: 'Stripe' },
    { t: 55, s: 'high',  v: 'Shopify', match: true, pulse: true },
    { t: 63, s: 'info',  v: 'Stripe' },
    { t: 74, s: 'act',   v: 'Stripe', match: true },
    { t: 82, s: 'watch', v: 'Anthropic' },
    { t: 93, s: 'info',  v: 'GitHub' },
  ];
  const sizeMap = { high: 14, act: 11, watch: 8, info: 6 };
  const colorMap = { high: 'var(--high)', act: 'var(--act)', watch: 'var(--watch)', info: 'var(--info)' };
  const softMap = { high: 'var(--high-soft)', act: 'var(--act-soft)', watch: 'var(--watch-soft)', info: 'transparent' };
  const heroPulse = document.getElementById('heroPulse');
  if (heroPulse) {
    heroPulse.innerHTML = ''; // clear static placeholders
    pulseEvents.forEach(e => {
      const d = document.createElement('div');
      const size = sizeMap[e.s];
      d.className = 'ev';
      d.style.cssText = `
        left: calc(20px + ${e.t}% - ${(e.t / 100) * 40}px);
        width: ${size}px; height: ${size}px;
        background: ${colorMap[e.s]};
        ${e.match ? `box-shadow: 0 0 0 4px ${softMap[e.s]};` : ''}
      `;
      if (e.pulse) {
        d.style.animation = 'livePulse 1.8s infinite';
      }
      heroPulse.appendChild(d);
    });
  }

  // ---------- Breaking marquee ----------
  const breaking = [
    { d: 'JUN 30 2026', v: 'Shopify',   w: 'All Shopify Scripts cease execution' },
    { d: 'APR 30 2026', v: 'OpenAI',    w: 'gpt-4-turbo deprecated' },
    { d: 'MAY 12 2026', v: 'Stripe',    w: 'Checkout Sessions v1 sunset window' },
    { d: 'JUL 01 2026', v: 'GitHub',    w: 'GraphQL: projectV2.items(first=) max lowered' },
    { d: 'JUN 15 2026', v: 'Google Ads', w: 'API v17 retired' },
    { d: 'AUG 03 2026', v: 'Meta',      w: 'Graph API v19 cutover' },
    { d: 'MAY 01 2026', v: 'Twilio',    w: 'Messaging classic API end-of-life' },
    { d: 'SEP 22 2026', v: 'Anthropic', w: 'Legacy tool_use schema removed' },
    { d: 'APR 15 2026', v: 'Shopify',   w: 'Script editing blocked (already live)' },
    { d: 'MAR 20 2026', v: 'OpenAI',    w: 'Completions endpoint retired' },
  ];
  const track = document.getElementById('marqueeTrack');
  if (track) {
    const build = (arr) => arr.map(b => `
      <div class="brk">
        <span class="date">${b.d}</span>
        <span class="sep"></span>
        <span class="vendor">${b.v}</span>
        <span class="what">${b.w}</span>
      </div>
    `).join('');
    // duplicate twice for seamless loop
    track.innerHTML = build(breaking) + build(breaking);
  }

  // ---------- Sticky flow visual (how-it-works) ----------
  const flowSteps = document.querySelectorAll('.step');
  const visStep = document.getElementById('visStep');
  const visBadge = document.getElementById('visBadge');
  const visContent = document.getElementById('visContent');

  const stepBadges = ['ingest', 'match', 'classify', 'ticket'];
  const stepPanels = [
    // 1. Ingest
    `<div style="display:flex; flex-direction:column; gap: 10px;">
      <div class="chg"><span class="dot high"></span><div class="body"><div class="vendor">Shopify · Action Required</div><div class="title">Scripts retire Jun 30, 2026</div></div><span class="time">:02s</span></div>
      <div class="chg"><span class="dot act"></span><div class="body"><div class="vendor">OpenAI · Deprecation</div><div class="title">gpt-4-turbo → gpt-4.5</div></div><span class="time">:04s</span></div>
      <div class="chg"><span class="dot watch"></span><div class="body"><div class="vendor">Stripe · Changelog</div><div class="title">Checkout Sessions v2 beta</div></div><span class="time">:07s</span></div>
      <div class="chg"><span class="dot info"></span><div class="body"><div class="vendor">GitHub · GraphQL</div><div class="title">projectV2 field added</div></div><span class="time">:11s</span></div>
      <div style="display:flex; gap: 12px; margin-top: 8px; font-family: var(--mono); font-size: 11px; color: var(--mute); padding-top: 10px; border-top: 1px dashed var(--hair);">
        <span>source → rss / html / api</span>
        <span style="margin-left:auto; color: var(--ok)">✓ deduped &amp; normalised</span>
      </div>
    </div>`,
    // 2. Match
    `<div class="evidence" style="flex:1; font-size: 12px;">
      <div><span class="k">event</span> shopify.scripts_retirement</div>
      <div><span class="k">scanning</span> 3 repos · 842 files</div>
      <br>
      <div style="color: var(--ok)">matches found:</div>
      <div>&nbsp;&nbsp;<span class="path">apps/checkout/scripts/shipping_discount.rb</span></div>
      <div>&nbsp;&nbsp;<span class="path">apps/checkout/scripts/loyalty_tier.rb</span></div>
      <div>&nbsp;&nbsp;<span class="path">package.json</span> → <span class="ok">@shopify/shopify-api 11.4.0</span></div>
      <div>&nbsp;&nbsp;<span class="path">CODEOWNERS</span> → @commerce-platform</div>
      <div>&nbsp;&nbsp;<span class="path">docs/runbooks/scripts.md</span></div>
      <br>
      <div><span class="k">not found:</span> Shopify Functions impl</div>
      <div><span class="k">evidence:</span> <span class="num">5</span> items · confidence <span class="num">0.94</span></div>
    </div>`,
    // 3. Classify
    `<div style="flex:1; display:flex; flex-direction:column; gap: 12px;">
      <div style="padding: 14px 16px; background: var(--bg-2); border: 1px solid var(--hair); border-radius: 8px;">
        <div style="font-size: 10.5px; color: var(--mute); letter-spacing: 1px; margin-bottom: 6px;">SEVERITY RUBRIC</div>
        <div style="display:flex; flex-direction:column; gap: 7px; font-family: var(--mono); font-size: 11.5px;">
          <div style="display:flex; justify-content:space-between; padding: 4px 10px; background: var(--high-soft); border-radius: 4px; color: var(--high);"><span>breaking_high</span><span>✓ selected · 0.94</span></div>
          <div style="display:flex; justify-content:space-between; padding: 4px 10px; color: var(--mute);"><span>action_likely</span><span>0.62</span></div>
          <div style="display:flex; justify-content:space-between; padding: 4px 10px; color: var(--mute);"><span>watch</span><span>0.18</span></div>
          <div style="display:flex; justify-content:space-between; padding: 4px 10px; color: var(--faint);"><span>informational</span><span>0.04</span></div>
        </div>
      </div>
      <div style="padding: 14px 16px; background: var(--bg-2); border: 1px solid var(--hair); border-radius: 8px; font-size: 12px; color: var(--dim); line-height: 1.6;">
        <span style="color: var(--mute); font-family: var(--mono); font-size: 10.5px;">RATIONALE</span><br>
        Concrete repo usage (2 active scripts) + vendor notice with hard deadline + no migration evidence → breaking_high.
      </div>
    </div>`,
    // 4. Ticket
    `<div class="ticket" style="flex:1;">
      <div class="ticket-head">
        <span class="ticket-tag">[ACTION REQUIRED]</span>
        <span>Posting to Jira · billing board</span>
      </div>
      <h5 style="font-size: 15px;">Migrate Shopify Scripts to Functions before Jun 30, 2026</h5>
      <p>Editing is already blocked (Apr 15); execution halts at deadline. Evidence: 2 scripts in <code style="font-family:var(--mono); color:var(--text)">apps/checkout/</code>, SDK 11.4.0, owner @commerce-platform.</p>
      <div style="font-family: var(--mono); font-size: 11px; color: var(--dim); line-height: 1.7; padding: 10px 12px; background: var(--bg-2); border-radius: 6px; border: 1px solid var(--hair);">
        <div style="color: var(--mute)">remediation:</div>
        <div>1. scaffold <span style="color:var(--lime)">shopify/functions/discount</span></div>
        <div>2. port <span style="color:var(--watch)">shipping_discount.rb</span> → TS</div>
        <div>3. port <span style="color:var(--watch)">loyalty_tier.rb</span> → TS</div>
        <div>4. parity tests against staging</div>
        <div>5. rm scripts/ &amp; deploy</div>
      </div>
      <div class="row">
        <span class="chip" style="color: var(--accent-2); background: var(--accent-soft); border-color: transparent;">@commerce-platform</span>
        <span class="chip">due Jun 15</span>
        <span class="chip" style="color: var(--high); background: var(--high-soft); border-color: transparent;">P0</span>
      </div>
    </div>`
  ];

  function setStep(n) {
    if (!visStep || !visBadge || !visContent) return;
    visStep.textContent = `Step ${n} of 4`;
    visBadge.textContent = stepBadges[n - 1];
    visContent.style.opacity = 0;
    setTimeout(() => {
      visContent.innerHTML = stepPanels[n - 1];
      visContent.style.opacity = 1;
    }, 150);
  }
  setStep(1);

  const stepIO = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const n = +e.target.dataset.step;
        setStep(n);
        flowSteps.forEach(s => {
          s.style.borderColor = (+s.dataset.step === n) ? 'var(--accent)' : '';
          s.style.background = (+s.dataset.step === n) ? 'linear-gradient(160deg, rgba(139,92,246,.06), var(--panel) 60%)' : '';
        });
      }
    });
  }, { rootMargin: '-40% 0px -40% 0px', threshold: 0 });
  flowSteps.forEach(s => stepIO.observe(s));

  }, []);

  return (
    <>
    <Nav />

{/*  =============== HERO ===============  */}
<section className="hero" id="top">
  <div className="hero-aurora"></div>
  <div className="hero-grid"></div>
  <div className="wrap">
    <div className="hero-eyebrow">
      <span className="tag">NEW</span>
      <span>Now watching Shopify Scripts retirement</span>
      <span className="sep"></span>
      <span style={{"color":"var(--mute)"}}>Jun 30, 2026</span>
    </div>

    <h1 className="hero-title">
      Catch vendor API changes <span className="strike">before</span><br />
      <span className="serif">before</span> your customers do.
    </h1>

    <p className="hero-sub">
      Vendor Pulse watches the changelogs you can&rsquo;t &mdash; Shopify, Stripe, OpenAI,
      GitHub GraphQL, Google Ads &mdash; maps every change to the exact files in your
      repos, and drafts a code-aware ticket with evidence, owner, and a remediation
      plan. No more dashboards. No more 3am incident calls.
    </p>

    <div className="hero-cta">
      <a href="#final" className="btn btn-primary btn-lg">
        Start watching free
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M12 6l4 4-4 4"/></svg>
      </a>
      <a href="#how" className="btn btn-lg">See how it works</a>
      <div className="microcopy"><strong>No credit card.</strong> &nbsp;2 vendors free forever.</div>
    </div>

    {/*  Hero live stage  */}
    <div className="hero-stage">
      <div className="stage-chrome">
        <div className="stage-dots"><span></span><span></span><span></span></div>
        <div className="stage-title">vendorpulse.app / workspace / acme-corp<span className="live">LIVE</span></div>
      </div>
      <div className="stage-body">
        <div className="flow">
          {/*  Col 1: incoming  */}
          <div className="flow-col">
            <div>
              <h4>1&nbsp;&middot;&nbsp;INGEST</h4>
              <div className="sub">Upstream changelogs, normalised</div>
            </div>
            <div className="chg">
              <span className="dot high"></span>
              <div className="body"><div className="vendor">Shopify</div><div className="title">Scripts fully retire Jun 30</div></div>
              <span className="time">2m</span>
            </div>
            <div className="chg">
              <span className="dot act"></span>
              <div className="body"><div className="vendor">OpenAI</div><div className="title">gpt-4-turbo deprecation</div></div>
              <span className="time">14m</span>
            </div>
            <div className="chg">
              <span className="dot watch"></span>
              <div className="body"><div className="vendor">Stripe</div><div className="title">Checkout Sessions v2 beta</div></div>
              <span className="time">1h</span>
            </div>
            <div className="chg">
              <span className="dot info"></span>
              <div className="body"><div className="vendor">GitHub</div><div className="title">GraphQL field added</div></div>
              <span className="time">3h</span>
            </div>
          </div>

          <div className="flow-arrow">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 14h16M17 9l5 5-5 5"/></svg>
          </div>

          {/*  Col 2: matcher  */}
          <div className="flow-col">
            <div>
              <h4>2&nbsp;&middot;&nbsp;MATCH</h4>
              <div className="sub">Code evidence from your repos</div>
            </div>
            <div className="evidence">
              <div><span className="k">vendor</span> Shopify</div>
              <div><span className="k">notice</span> Scripts retirement</div>
              <div><span className="k">matches</span> <span className="num">5</span></div>
              <br />
              <div><span className="path">apps/checkout/scripts/shipping_discount.rb</span></div>
              <div><span className="path">apps/checkout/scripts/loyalty_tier.rb</span></div>
              <div><span className="path">package.json</span> &mdash; <span className="ok">@shopify/shopify-api 11.4.0</span></div>
              <div><span className="path">CODEOWNERS</span> &rarr; @commerce-platform</div>
              <br />
              <div><span className="k">severity</span> <span style={{"color":"var(--high)"}}>breaking_high</span></div>
              <div><span className="k">confidence</span> <span className="num">0.94</span></div>
            </div>
          </div>

          <div className="flow-arrow">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M6 14h16M17 9l5 5-5 5"/></svg>
          </div>

          {/*  Col 3: ticket  */}
          <div className="flow-col">
            <div>
              <h4>3&nbsp;&middot;&nbsp;TICKET</h4>
              <div className="sub">Drafted in Jira or GitHub Issues</div>
            </div>
            <div className="ticket">
              <div className="ticket-head">
                <span className="ticket-tag">[ACTION REQUIRED]</span>
                <span>CHK-1482 &middot; drafted just now</span>
              </div>
              <h5 style={{"textWrap":"balance"}}>Migrate Shopify Scripts to Functions before Jun 30</h5>
              <p>2 active scripts match. Editing is already blocked (Apr 15); execution halts at deadline. Remediation plan and test cases attached.</p>
              <div className="row">
                <span className="chip" style={{"color":"var(--accent-2)","background":"var(--accent-soft)","borderColor":"transparent"}}>@commerce-platform</span>
                <span className="chip">due Jun 15</span>
                <span className="chip">P0</span>
                <span className="chip" style={{"color":"var(--lime)","borderColor":"var(--lime-soft)","background":"var(--lime-soft)"}}>5 evidence items</span>
              </div>
            </div>
          </div>
        </div>

        {/*  Pulse timeline under the flow  */}
        <div className="hero-pulse" id="heroPulse">
          <div className="rail"></div>
          <span className="tick" style={{"left":"20px"}}>24h ago</span>
          <span className="tick" style={{"left":"25%"}}>18h</span>
          <span className="tick" style={{"left":"50%"}}>12h</span>
          <span className="tick" style={{"left":"75%"}}>6h</span>
          <span className="tick" style={{"right":"20px"}}>now</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  =============== PROOF STRIP ===============  */}
<section>
  <div className="wrap">
    <div className="proof-row reveal">
      <span>Watching changelogs from</span>
    </div>
    <div className="proof-logos reveal" style={{"marginTop":"20px", "display":"flex", "gap":"40px", "alignItems":"center", "justifyContent":"center", "flexWrap":"wrap"}}>
      <SiShopify size={32} color="#95BF47" />
      <SiStripe size={32} color="#635BFF" />
      <SiOpenai size={32} color="#10a37f" />
      <SiAnthropic size={32} color="#D97757" />
      <SiGithub size={32} color="#ffffff" />
      <SiGoogleads size={32} color="#4285F4" />
      <SiTwilio size={32} color="#F22F46" />
      <SiMeta size={32} color="#0866ff" />
    </div>
  </div>
</section>

{/*  =============== BREAKING MARQUEE ===============  */}
<section className="breaking" style={{"marginTop":"80px"}}>
  <div id="marqueeTrack" className="marquee"></div>
</section>

{/*  =============== THE PROBLEM ===============  */}
<section className="row" id="problem">
  <div className="wrap">
    <div style={{"display":"grid","gridTemplateColumns":"5fr 7fr","gap":"80px","alignItems":"end"}}>
      <div className="reveal">
        <div className="eyebrow">The problem</div>
        <h2 className="sec">Vendors ship breaking changes <em>every week.</em></h2>
      </div>
      <div className="reveal">
        <p className="sec-sub">
          You find out in one of three ways: a customer complaint, a production error, or a tab you
          forgot to read. The upstream signal exists &mdash; RSS, release notes, deprecation pages,
          scheduled cutovers &mdash; but the jump from &ldquo;a change happened&rdquo;
          to &ldquo;this repo is affected and here&rsquo;s the ticket&rdquo; is still a manual slog
          nobody owns.
        </p>
      </div>
    </div>

    <div style={{"display":"grid","gridTemplateColumns":"repeat(3, 1fr)","gap":"16px","marginTop":"72px"}}>
      <div className="feat reveal">
        <div className="ico" style={{"background":"var(--high-soft)","color":"var(--high)"}}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M10 2L2 17h16L10 2z"/><path d="M10 8v4M10 14.5v.5" strokeLinecap="round"/></svg>
        </div>
        <h4>Silent deprecations</h4>
        <p>OpenAI quietly sunsets <span style={{"fontFamily":"var(--mono)","color":"var(--text)"}}>gpt-4-turbo</span>. Your eval job explodes Tuesday morning.</p>
      </div>
      <div className="feat reveal">
        <div className="ico" style={{"background":"var(--act-soft)","color":"var(--act)"}}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M10 5v5l3 2" strokeLinecap="round"/><circle cx="10" cy="10" r="7"/></svg>
        </div>
        <h4>Scheduled cutovers</h4>
        <p>Shopify Scripts retire Jun 30, 2026. Your agency has 14 clients running two scripts each.</p>
      </div>
      <div className="feat reveal">
        <div className="ico" style={{"background":"var(--watch-soft)","color":"var(--watch)"}}>
          <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 10h12M12 6l4 4-4 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        <h4>Contract drift</h4>
        <p>Stripe adds a nullable field to a response. Your parser silently drops an event. Six weeks later, reconciliation calls.</p>
      </div>
    </div>
  </div>
</section>

{/*  =============== HOW IT WORKS (sticky) ===============  */}
<section className="row" id="how" style={{"paddingTop":"60px"}}>
  <div className="wrap">
    <div className="reveal" style={{"maxWidth":"720px","marginBottom":"64px"}}>
      <div className="eyebrow">How it works</div>
      <h2 className="sec">From <em>upstream change</em> to <span className="lime-word">assignable ticket</span> &mdash; in under a minute.</h2>
    </div>

    <div className="flow-scroll">
      <div className="flow-left">
        <div className="flow-visual" id="flowVisual">
          <div className="vis-head">
            <h4 id="visStep">Step 1 of 4</h4>
            <span id="visBadge" className="chip" style={{"fontFamily":"var(--mono)"}}>ingest</span>
          </div>
          <div id="visContent" style={{"flex":"1","display":"flex","flexDirection":"column","gap":"12px","transition":"opacity .3s"}}></div>
        </div>
      </div>

      <div className="flow-steps" id="flowSteps">
        <div className="step" data-step="1">
          <div className="step-num"><span className="n">01</span> Ingest</div>
          <h3>Watch every changelog, normalize into one schema.</h3>
          <p>RSS, HTML, release-note pages, deprecation notices &mdash; polled on a schedule with dedupe.
          We turn heterogeneous posts into a single event stream with vendor, product, dates, change type,
          severity hints, and the original source URL.</p>
        </div>
        <div className="step" data-step="2">
          <div className="step-num"><span className="n">02</span> Match</div>
          <h3>Find the exact files affected &mdash; or say nothing.</h3>
          <p>A GitHub App with read-only repo access indexes your integration surface: SDK versions,
          endpoint strings, env vars, GraphQL fields, config files. Each vendor notice is matched
          to concrete evidence. No evidence, no ticket.</p>
        </div>
        <div className="step" data-step="3">
          <div className="step-num"><span className="n">03</span> Classify</div>
          <h3>Severity with receipts, not vibes.</h3>
          <p>A closed-world classifier scores each change
          <span style={{"fontFamily":"var(--mono)","color":"var(--high)"}}>breaking_high</span>,
          <span style={{"fontFamily":"var(--mono)","color":"var(--act)"}}>action_likely</span>,
          <span style={{"fontFamily":"var(--mono)","color":"var(--watch)"}}>watch</span>, or
          <span style={{"fontFamily":"var(--mono)","color":"var(--info)"}}>informational</span> &mdash;
          using your evidence pack only. If confidence is low, we abstain and queue for review.</p>
        </div>
        <div className="step" data-step="4">
          <div className="step-num"><span className="n">04</span> Ticket</div>
          <h3>Drafted in Jira or GitHub, assigned by CODEOWNERS.</h3>
          <p>Title, impact summary, evidence with direct file links, a 3&ndash;5 step remediation plan,
          suggested owner, and a due date anchored to the vendor deadline. Auto-create above your
          confidence threshold, or keep every draft in a triage inbox.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  =============== FEATURES ===============  */}
<section className="row" id="features">
  <div className="wrap">
    <div className="reveal" style={{"maxWidth":"720px"}}>
      <div className="eyebrow">The product</div>
      <h2 className="sec">Not another dashboard. An <em>autonomous teammate</em> for vendor risk.</h2>
    </div>

    <div className="feat-grid">
      <div className="feat wide reveal" style={{"padding":"32px"}}>
        <div className="ico"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"><path d="M3 12h4l1 2h4l1-2h4M3 12v5a1 1 0 001 1h12a1 1 0 001-1v-5M3 12l2-7h10l2 7"/></svg></div>
        <h4>Triage inbox, not a feed</h4>
        <p style={{"maxWidth":"56ch"}}>The default screen isn&rsquo;t a river of updates &mdash; it&rsquo;s a review queue of matched changes with confidence scores and draft tickets. Approve, merge duplicates, suppress, or snooze. Every decision trains the policy engine.</p>
        <div style={{"marginTop":"20px","display":"flex","gap":"8px","flexWrap":"wrap"}}>
          <span className="chip" style={{"color":"var(--high)","background":"var(--high-soft)","borderColor":"transparent"}}>3 breaking</span>
          <span className="chip" style={{"color":"var(--act)","background":"var(--act-soft)","borderColor":"transparent"}}>5 action likely</span>
          <span className="chip" style={{"color":"var(--watch)","background":"var(--watch-soft)","borderColor":"transparent"}}>12 watch</span>
          <span className="chip">28 suppressed by policy</span>
        </div>
      </div>

      <div className="feat tall reveal">
        <div className="ico"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M10 2l7 3v5c0 5-3 8-7 9-4-1-7-4-7-9V5l7-3z"/></svg></div>
        <h4>Least-privilege by default</h4>
        <p>GitHub App with read-only contents, encrypted secrets, tenant isolation, redaction before prompts, audit trail on every ticket action.</p>
        <div style={{"marginTop":"20px","padding":"14px","background":"var(--bg-2)","border":"1px solid var(--hair)","borderRadius":"8px","fontFamily":"var(--mono)","fontSize":"11px","color":"var(--dim)","lineHeight":"1.7"}}>
          <div><span style={{"color":"var(--mute)"}}>permissions:</span></div>
          <div style={{"paddingLeft":"12px"}}><span style={{"color":"var(--ok)"}}>contents: read</span></div>
          <div style={{"paddingLeft":"12px"}}><span style={{"color":"var(--ok)"}}>metadata: read</span></div>
          <div style={{"paddingLeft":"12px"}}><span style={{"color":"var(--ok)"}}>issues: write</span></div>
          <div style={{"paddingLeft":"12px"}}><span style={{"color":"var(--faint)"}}>— nothing else —</span></div>
          <br />
          <div><span style={{"color":"var(--mute)"}}>residency:</span> <span style={{"color":"var(--lime)"}}>ap-southeast-2</span></div>
          <div><span style={{"color":"var(--mute)"}}>retention:</span> 30d evidence</div>
        </div>
      </div>

      <div className="feat reveal">
        <div className="ico"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2L4 11h5l-1 7 7-9h-5l1-7z"/></svg></div>
        <h4>Historical replay</h4>
        <p>Onboard and we&rsquo;ll replay the last 90 days of every vendor you connect. First-run value, before you wait for a single new change.</p>
      </div>

      <div className="feat reveal">
        <div className="ico"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v10M6 17v-2M14 7a2 2 0 100-4 2 2 0 000 4zM6 17a2 2 0 100-4 2 2 0 000 4zM6 3a2 2 0 100-4 2 2 0 000 4zM14 7v3a2 2 0 01-2 2H6"/></svg></div>
        <h4>CODEOWNERS-aware</h4>
        <p>Tickets route to the squad that actually owns the affected files. No more <em>unassigned</em> bucket, no more Slack paging roulette.</p>
      </div>

      <div className="feat wide reveal">
        <div className="ico"><svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5h14M5 10h10M8 15h4"/></svg></div>
        <h4>Policy engine</h4>
        <p style={{"maxWidth":"56ch"}}>Auto-create above 0.85 confidence for breaking changes. Require human review for everything touching billing. Suppress info-level notices for vendors you don&rsquo;t care about. Policies are declarative, versioned, and auditable.</p>
        <div style={{"marginTop":"20px","fontFamily":"var(--mono)","fontSize":"11.5px","color":"var(--dim)","lineHeight":"1.8","background":"var(--bg-2)","padding":"14px 16px","borderRadius":"8px","border":"1px solid var(--hair)"}}>
          <div><span style={{"color":"var(--accent-2)"}}>when</span> severity = <span style={{"color":"var(--lime)"}}>breaking_high</span> <span style={{"color":"var(--accent-2)"}}>and</span> confidence &gt; <span style={{"color":"var(--lime)"}}>0.85</span></div>
          <div style={{"paddingLeft":"18px"}}><span style={{"color":"var(--accent-2)"}}>auto_create</span> in <span style={{"color":"var(--watch)"}}>jira://billing</span> <span style={{"color":"var(--accent-2)"}}>as</span> <span style={{"color":"var(--high)"}}>P0</span></div>
          <div><span style={{"color":"var(--accent-2)"}}>when</span> vendor = <span style={{"color":"var(--lime)"}}>"Meta"</span> <span style={{"color":"var(--accent-2)"}}>and</span> severity = <span style={{"color":"var(--lime)"}}>informational</span></div>
          <div style={{"paddingLeft":"18px"}}><span style={{"color":"var(--accent-2)"}}>suppress</span></div>
        </div>
      </div>
    </div>
  </div>
</section>

{/*  =============== VENDORS ===============  */}
<section className="row" id="vendors" style={{"padding":"80px 0"}}>
  <div className="wrap">
    <div className="reveal" style={{"textAlign":"center","maxWidth":"680px","margin":"0 auto 56px"}}>
      <div className="eyebrow" style={{"justifyContent":"center"}}>Connectors</div>
      <h2 className="sec" style={{"margin":"0 auto"}}>Every vendor that <em>breaks your weekends.</em></h2>
    </div>

    <div style={{"display":"grid","gridTemplateColumns":"repeat(4, 1fr)","gap":"12px"}} id="vendorGrid">
      {vendorsList.map((v) => (
        <div className="feat reveal" style={{"padding":"18px 20px"}} key={v.n}>
          <div style={{"display":"flex","alignItems":"center","gap":"12px","marginBottom":"10px"}}>
            <div style={{
              width: '28px', height: '28px', borderRadius: '6px', 
              background: `${v.c}22`, color: v.c, 
              display: 'grid', placeItems: 'center', 
              border: `1px solid ${v.c}33`
            }}>
              <v.Icon size={16} />
            </div>
            <div style={{"fontSize":"14px","fontWeight":"500"}}>{v.n}</div>
            <div style={{"marginLeft":"auto","width":"6px","height":"6px","borderRadius":"50%","background":"var(--ok)","boxShadow":"0 0 8px var(--ok)"}}></div>
          </div>
          <div style={{"fontSize":"12px","color":"var(--mute)","lineHeight":"1.5"}}>{v.note}</div>
        </div>
      ))}
    </div>

    <p style={{"textAlign":"center","color":"var(--mute)","fontSize":"13px","marginTop":"28px"}}>
      Plus custom connectors for internal platform teams. <a href="#" style={{"color":"var(--accent-2)","borderBottom":"1px dashed var(--accent-soft)"}}>Request a vendor &rarr;</a>
    </p>
  </div>
</section>

{/*  =============== METRICS ===============  */}
<section className="row" style={{"padding":"40px 0 80px"}}>
  <div className="wrap">
    <div className="metrics reveal">
      <div className="metric"><span className="v">82%</span><span className="l">Ticket acceptance rate without heavy edits</span></div>
      <div className="metric"><span className="v">&lt;15%</span><span className="l">False positive rate at default thresholds</span></div>
      <div className="metric"><span className="v">30m</span><span className="l">95th-percentile freshness on monitored feeds</span></div>
      <div className="metric"><span className="v">3&nbsp;min</span><span className="l">From connect-repo to first drafted ticket</span></div>
    </div>
  </div>
</section>

{/*  =============== QUOTE ===============  */}
<section className="row" style={{"padding":"40px 0 120px"}}>
  <div className="wrap-narrow">
    <div className="quote-card reveal">
      <blockquote>
        We used to find out about Shopify changes when a client emailed us at 11pm. Vendor Pulse turns
        every changelog post into a ticket with the exact file paths. Friday panic, gone.
      </blockquote>
      <div className="quote-attr">
        <div className="ava"></div>
        <div>
          <strong>Priya Shah</strong>
          Head of Engineering &middot; Coral Commerce (Shopify Plus agency)
        </div>
      </div>
    </div>
  </div>
</section>

{/*  =============== PRICING ===============  */}
<section className="row" id="pricing" style={{"paddingTop":"0"}}>
  <div className="wrap">
    <div className="reveal" style={{"textAlign":"center","maxWidth":"640px","margin":"0 auto"}}>
      <div className="eyebrow" style={{"justifyContent":"center"}}>Pricing</div>
      <h2 className="sec" style={{"margin":"0 auto 16px"}}>Priced on <em>repos &amp; vendors</em>, not seats.</h2>
      <p className="sec-sub" style={{"margin":"0 auto"}}>The value scales with your integration surface &mdash; not how many engineers open the app.</p>
    </div>

    <div className="price-grid">
      <div className="price reveal">
        <div className="tier">Free</div>
        <div className="amt">A$0 <small>/ forever</small></div>
        <div className="desc">See the value before you pay. Dry-run only.</div>
        <ul>
          <li>1 repo, 2 vendors</li>
          <li>Draft tickets, no auto-create</li>
          <li>90-day historical replay</li>
          <li>Community support</li>
        </ul>
        <a href="#" className="btn">Start free</a>
      </div>

      <div className="price reveal">
        <div className="tier">Starter</div>
        <div className="amt">A$49 <small>/ repo / mo</small></div>
        <div className="desc">Small team with a handful of critical integrations.</div>
        <ul>
          <li>3&ndash;5 vendors</li>
          <li>Jira or GitHub Issues</li>
          <li>Auto-create above threshold</li>
          <li>Slack alerts</li>
        </ul>
        <a href="#" className="btn">Start Starter</a>
      </div>

      <div className="price popular reveal">
        <div className="tier">Team</div>
        <div className="amt">A$149 <small>/ month</small></div>
        <div className="desc">The pragmatic default for product teams.</div>
        <ul>
          <li>3 repos, 10 vendors</li>
          <li>Jira + GitHub Issues</li>
          <li>Approval policies &amp; merging</li>
          <li>CODEOWNERS routing</li>
          <li>Priority support</li>
        </ul>
        <a href="#" className="btn btn-primary">Choose Team</a>
      </div>

      <div className="price reveal">
        <div className="tier">Agency</div>
        <div className="amt">A$399 <small>/ month</small></div>
        <div className="desc">Shared inbox with client-level segregation.</div>
        <ul>
          <li>Unlimited client repos</li>
          <li>Per-client policies</li>
          <li>Australian residency option</li>
          <li>SSO &amp; audit log</li>
        </ul>
        <a href="#" className="btn">Talk to us</a>
      </div>
    </div>

    <div style={{"textAlign":"center","marginTop":"32px","fontSize":"13px","color":"var(--mute)"}}>
      One-off <strong style={{"color":"var(--text)","fontWeight":"500"}}>Deprecation Impact Reports</strong> from A$299. Great for migration planning before committing to monitoring.
    </div>
  </div>
</section>

{/*  =============== FAQ ===============  */}
<section className="row" id="faq" style={{"paddingTop":"40px"}}>
  <div className="wrap-narrow">
    <div className="reveal" style={{"maxWidth":"640px"}}>
      <div className="eyebrow">Questions, answered</div>
      <h2 className="sec">The <em>boring</em> things<br />that matter.</h2>
    </div>

    <div className="faq">
      <details className="q" open>
        <summary>What permissions does the GitHub App actually request?<span className="plus">+</span></summary>
        <div className="a">Read-only <code style={{"fontFamily":"var(--mono)","color":"var(--text)"}}>contents</code> and <code style={{"fontFamily":"var(--mono)","color":"var(--text)"}}>metadata</code>, plus <code style={{"fontFamily":"var(--mono)","color":"var(--text)"}}>issues: write</code> if you pick GitHub Issues as your ticket destination. Nothing else &mdash; no write access to code, no PR creation, no workflow permissions. Scope installation to a subset of repos on install.</div>
      </details>
      <details className="q">
        <summary>Do you train on my code?<span className="plus">+</span></summary>
        <div className="a">No. Source code is never sent to model providers for training and is never used to improve any shared model. We send minimal file-path and structural evidence to the classifier and ticket writer, redact secrets and large code blocks before assembly, and retain that evidence for 30 days by default (configurable per plan).</div>
      </details>
      <details className="q">
        <summary>What happens when a model is unsure?<span className="plus">+</span></summary>
        <div className="a">It abstains. If confidence is below your threshold or the evidence pack is thin, the change is queued for human review with a note on what&rsquo;s missing. We&rsquo;d rather tell you &ldquo;this needs a person&rdquo; than invent a ticket.</div>
      </details>
      <details className="q">
        <summary>Which ticket systems do you support?<span className="plus">+</span></summary>
        <div className="a">Jira Cloud and GitHub Issues at launch. Linear and GitLab are on the expansion roadmap; tell us which you need at signup and we&rsquo;ll prioritise.</div>
      </details>
      <details className="q">
        <summary>Can I host in Australia?<span className="plus">+</span></summary>
        <div className="a">Yes &mdash; the Agency plan ships with Sydney residency (AWS ap-southeast-2) and a documented subprocessor map. Lower tiers run globally with project-level data controls. We&rsquo;ll walk your security team through the trust doc.</div>
      </details>
      <details className="q">
        <summary>How is this different from Dependabot or a changelog reader?<span className="plus">+</span></summary>
        <div className="a">Dependabot watches package manifests &mdash; great for versioned SDKs, blind to vendor-side policy changes like Shopify Scripts retirement or a GraphQL field removal. Changelog readers aggregate the firehose. Vendor Pulse sits in the middle: upstream-aware like a reader, repo-aware like Dependabot, ticket-first like neither.</div>
      </details>
      <details className="q">
        <summary>Can I self-host?<span className="plus">+</span></summary>
        <div className="a">Not today. Enterprise self-hosting is on the roadmap; talk to us if that&rsquo;s a dealbreaker and we&rsquo;ll share timelines.</div>
      </details>
    </div>
  </div>
</section>

{/*  =============== FINAL CTA ===============  */}
<section className="wrap" id="final">
  <div className="final reveal">
    <h2>Stop reading changelogs.<br />Start <em>shipping</em> against them.</h2>
    <p>Connect a repo, pick two vendors, and Vendor Pulse will have its first draft ticket ready in under three minutes. Free forever on one repo &mdash; no credit card, no demo call.</p>
    <div className="hero-cta">
      <a href="#" className="btn btn-primary btn-lg">Start watching free
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 10h12M12 6l4 4-4 4"/></svg>
      </a>
      <a href="#" className="btn btn-lg">Book a 20-min demo</a>
      <div className="microcopy">Or <a href="#" style={{"color":"var(--accent-2)","borderBottom":"1px dashed var(--accent-soft)"}}>buy a Deprecation Impact Report</a> to see the output first.</div>
    </div>
  </div>
</section>

<Footer />

    </>
  );
}
