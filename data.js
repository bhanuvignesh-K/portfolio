/*
  ============================================================
  EDIT THIS FILE WITH YOUR OWN INFORMATION.
  This is the only file you need to touch to make the site yours.
  Everything else (index.html, style.css, script.js) just reads
  from the SITE object below.
  ============================================================
*/

const SITE = {
  // ---- Identity ----
  name: "K.Bhanu Vignesh",
  pronoun: "he", // "she" | "he" | "they" — used in the search-bar prompts
  possessive: "his", // "her" | "his" | "their"
  objective: "him", // "her" | "him" | "them"
  role: "Product Designer",
  location: "Vijayawada, IN",
  gradDate: "May 2026",
  email: "you@example.com",

  // ---- Hero image carousel (top-left on the home tab) ----
  // Add as many as you like. Use a real image path (e.g. "assets/photo1.jpg"),
  // or leave "src" empty to show a placeholder gradient with the caption text.
  heroImages: [
    { src: "", caption: "A photo of you" },
    { src: "", caption: "Another moment worth sharing" },
    { src: "", caption: "You, doing the work" },
  ],

  // ---- Featured "recent work" card under the carousel ----
  featured: {
    projectId: "lpg-sahai",
    kicker: "K.Bhanu Vignesh recently designed LPG Sahai",
    blurb: "A gas booking app designed for rural and low-literacy users.",
    when: "Summer 2026",
  },

  // ---- About card ----
  about: "K.Bhanu Vignesh is a designer with a growing focus on UI & UX Design.",

  // ---- Education card ----
  education: {
    blurb: "majored in Computer Science and Design @",
    linkText: "Rajiv Gandhi Institute of Petroleum Technology",
    linkUrl: "#",
  },

  // ---- Tools card (short labels; rendered as simple chips) ----
  tools: ["Figma", "Illustrator", "Notion", "Claude"],

  // ---- Currently card ----
  currently: "Looking for full-time creative / product design roles",

  // ---- "Search result" style links (LinkedIn / GitHub / etc.) ----
  links: [
    {
      type: "LinkedIn",
      title: "K.Bhanu Vignesh - Product Designer",
      url: "https://www.linkedin.com/in/bhanu-vignesh-967520366",
      meta: "Vijayawada · UI/UX Designer · Freelance",
      blurb:
        "I'm K.Bhanu Vignesh, designer who got a passion for especially in UI Design " +
        "and UX Research and study. Currently building.....",
    },
    {
      type: "GitHub",
      title: "K.Bhanu Vignesh bhanuvignesh-K",
      url: "https://github.com/bhanuvignesh-K",
      meta: "",
      blurb:
        "A repository of projects.",
    },
  ],

  // ---- Resume ----
  // Drop your PDF into this folder and point this at it.
  resumeUrl: "resume.pdf",

  // ---- Projects ----
  // Each project becomes a card on the Projects tab and its own case-study page.
  // "thumb" accepts a CSS background (gradient/color) so cards look good with
  // zero images. Swap in a real image any time via thumbImg.
  projects: [
    {
      id: "ecole-globale-ux-report",
      title: "UX Report: Ecole Globale (Website)",
      subtitle: "A usability audit of a premier all-girls residential school's admissions site",
      thumb: "linear-gradient(135deg,#1E3FE0,#1830A8)",
      thumbImg: "assets/ux-report/1.jpg",
      role: "UX Researcher",
      tools: "Figma",
      overview: {
        heading: "Overview",
        subheading: "Auditing Ecole Globale's admissions site",
        body:
          "Ecole Globale is a premier all-girls residential school in Dehradun, and " +
          "its website (ecoleglobale.com) is built to convert two kinds of visitors " +
          "— parents and prospective students — into enquiries. I audited the live " +
          "site, found three usability issues that got in the way of that goal, and " +
          "designed wireframe fixes for each. Swipe through the full report below.",
      },
      slideshow: Array.from({ length: 13 }, (_, i) => `assets/ux-report/${i + 1}.jpg`),
      sections: [
        {
          number: "01",
          heading: "The Enquire Now popup stands out too harshly",
          subheading: "A key conversion element with jarring styling",
          body:
            "The white enquiry box sat like a sore thumb over the landing page's " +
            "photography. I rounded its corners, pulled it into a corner of the " +
            "frame, and grouped the \"Call Now\" option directly beneath it — subtle " +
            "enough to blend in, but still the first thing a parent notices.",
        },
        {
          number: "02",
          heading: "The nav bar doesn't hold up under 30+ links",
          subheading: "Non-functional menu links, no search, and buried content",
          body:
            "Top-level links like \"About Us\" led nowhere on their own, there was no " +
            "search across 30+ sub-items, and reaching something like Fee Structure " +
            "took four clicks through a renamed \"Internationalism\" section. I " +
            "replaced it with a mega dropdown that surfaces every sub-item at once, " +
            "added a search bar, and added a hovering sub-nav on content pages so " +
            "switching between sections like Values & Culture and Exchange " +
            "Programmes no longer means scrolling back up to the main menu.",
          infoBox: {
            title: "WHAT CHANGED",
            rows: [
              { label: "MEGA MENU", value: "Every section's sub-items visible on hover, no more guessing" },
              { label: "SEARCH BAR", value: "Added to cut through 30+ sub-items directly" },
              { label: "STICKY SUB-NAV", value: "Lets users jump between a section's pages without scrolling up" },
            ],
          },
        },
        {
          number: "03",
          heading: "Booking a campus tour was easy to miss",
          subheading: "A unique, high-value feature buried in the fourth section",
          body:
            "Booking a campus tour is one of the site's most distinctive features, " +
            "but it only appeared in the landing page's fourth section — easy to " +
            "scroll past entirely. Moving it into the mega dropdown menu puts it " +
            "somewhere a visitor will actually see it while exploring the site.",
        },
      ],
      wireframeUrl:
        "https://www.figma.com/design/u0mfKhBCBibvwDot7LfS7w/Projects?node-id=281-2489&t=4O0ABwu8TUn9ZCJI-1",
    },
    {
      id: "todo-planner",
      title: "Day Planner",
      subtitle: "A clickable day-planner prototype, from onboarding to a finished task list",
      thumb: "linear-gradient(135deg,#6F63D6,#EA7587)",
      thumbImg: "assets/day-planner.jpg",
      role: "Product Designer",
      tools: "Figma",
      team: "Solo",
      overview: {
        heading: "Overview",
        subheading: "Designing a day planner, frame by frame",
        body:
          "A 14-frame clickable prototype covering onboarding, typing and stacking " +
          "tasks, and dragging finished ones into a done bin. Scroll through it " +
          "below to try the full flow yourself.",
      },
      prototype: {
        embedUrl:
          "https://embed.figma.com/proto/DAKpZrVC3Dc0AVicA7Vy1x/Onboarding-Screens?node-id=1-19&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A19&page-id=0%3A1&hide-ui=1&embed-host=share",
        openUrl:
          "https://www.figma.com/proto/DAKpZrVC3Dc0AVicA7Vy1x/Onboarding-Screens?node-id=1-19&p=f&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A19&page-id=0%3A1",
      },
      sections: [
        {
          number: "01",
          heading: "Onboarding",
          subheading: "Setting the tone before the first task",
          body:
            "Two onboarding screens lead into the planner: a welcome screen, then " +
            "a music prompt users can play or skip before starting their day.",
        },
        {
          number: "02",
          heading: "Typing, stacking, and finishing tasks",
          subheading: "The core loop of the planner",
          body:
            "Each task opens as its own card, typed one at a time and stacked " +
            "below the last. Dragging a finished task into the done bin moves " +
            "the remaining tasks up and renumbers them automatically.",
          infoBox: {
            title: "PROTOTYPE FLOW",
            rows: [
              { label: "START", value: "Plan Tasks → Music → Empty task" },
              { label: "ADD", value: "Type a task, then Add Task to stack the next one" },
              { label: "FINISH", value: "Drag a task into the done bin — the list renumbers itself" },
            ],
          },
        },
      ],
    },
    {
      id: "ajio-dark-pattern-audit",
      title: "AJIO Website — Dark Pattern Audit",
      subtitle: "Detecting and redesigning three deceptive design patterns on a live e-commerce checkout",
      thumb: "linear-gradient(135deg,#1F2937,#DB2777)",
      thumbImg: "assets/ajio/thumb.jpg",
      role: "UX Auditor / Designer",
      tools: "Figma · Chrome DevTools",
      team: "Solo",
      overview: {
        heading: "Overview",
        subheading: "Auditing AJIO's checkout for dark patterns",
        body:
          "I audited AJIO's live checkout flow the way a researcher would: using " +
          "the real site, screenshotting each moment a pattern appeared, and " +
          "mapping out the exact click path that led a user into it before " +
          "redesigning the screen in Figma. Three patterns stood out — a " +
          "bait-and-switch \"free gift\" banner, a visually suppressed skip button, " +
          "and a GST invoice option hidden below the fold — each documented as " +
          "its own problem → process → solution case.",
      },
      sections: [
        {
          number: "01",
          heading: "Bait and Switch: the \"Free Gifts\" banner",
          subheading: "Discounts relabeled as gifts, with redemption terms hidden behind a popup",
          body:
            "The checkout banner claimed \"Free Gifts Worth ₹1495,\" but the listed " +
            "items were just relabeled discounts, not real gifts — misleading users " +
            "into thinking they were getting extra value for free. Redemption terms " +
            "were only revealed at the bottom of a popup, after the user was already " +
            "invested. I changed the wording from \"Free Gifts\" to \"Discounts,\" and " +
            "replaced the popup step with a direct \"Know More\" link straight to the " +
            "redemption steps — accurate framing and terms in one step instead of two.",
          media: [{ src: "assets/ajio/thumb.jpg", caption: "Redesigned checkout — accurate discount framing, one-click access to redemption terms" }],
        },
        {
          number: "02",
          heading: "Aesthetic Manipulation: the buried Skip button",
          subheading: "A real exit option, styled to be overlooked",
          body:
            "During sign-up, a skip option technically existed, but it was tucked " +
            "into a corner in a faint, low-contrast style next to a large, bold " +
            "\"Send OTP\" button — easy to miss on a quick scan, pressuring users " +
            "into continuing a flow they meant to exit. I gave Skip equal visual " +
            "weight to the primary action, without touching the business's ability " +
            "to promote sign-up.",
          media: [
            { src: "assets/ajio/skip-before.jpg", caption: "Before — Skip is barely visible in the top corner" },
            { src: "assets/ajio/skip-after.jpg", caption: "After — Skip given equal visual weight to Send OTP" },
          ],
        },
        {
          number: "03",
          heading: "Sneaking: the hidden GST invoice option",
          subheading: "A real tax benefit, left unchecked and below the fold",
          body:
            "Business owners and freelancers eligible for a GST invoice were " +
            "missing that benefit because the checkbox sat unchecked, below the " +
            "fold, with nothing above it signaling it existed — so most users " +
            "completed checkout without ever scrolling down to see it. I moved it " +
            "directly below the Order Details summary, within the first screen a " +
            "user sees, and gave it more visual weight, while keeping it optional.",
          media: [{ src: "assets/ajio/gst-before-after.jpg", caption: "Before (left) vs. after (right) — GST invoice moved above the fold, right under Order Details" }],
        },
      ],
      notionUrl:
        "https://app.notion.com/p/Deceptive-Design-Audit-AJIO-3baeb7b3e8b8806cba34e4168a929545",
    },
    {
      id: "lpg-sahai",
      hidden: true,
      title: "LPG Sahai",
      subtitle: "A gas booking app designed for rural and low-literacy users",
      thumb: "linear-gradient(135deg,#BFE0DA,#E8F3F1)",
      thumbImg: "assets/lpg-sahai.jpg",
      role: "UX Designer / Researcher",
      tools: "Figma · Research Papers",
      timeline: "12 Days",
      team: "Solo",
      overview: {
        heading: "Overview",
        subheading: "A gas booking flow for rural and low-literacy users",
        body:
          "I designed and researched this LPG booking flow on my own in 12 days. " +
          "Scroll through the prototype below, and read the problems, solutions " +
          "and research behind it in the full Notion case study.",
      },
      prototype: {
        embedUrl:
          "https://embed.figma.com/proto/u0mfKhBCBibvwDot7LfS7w/Projects?node-id=6-66&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A66&page-id=0%3A1&hide-ui=1&embed-host=share",
        openUrl:
          "https://www.figma.com/proto/u0mfKhBCBibvwDot7LfS7w/Projects?node-id=6-66&p=f&scaling=scale-down&content-scaling=fixed&starting-point-node-id=6%3A66&page-id=0%3A1",
      },
      notionUrl:
        "https://app.notion.com/p/LPG-Sahai-A-gas-booking-app-designed-for-rural-and-low-literacy-users-3c2eb7b3e8b880bb9919e96ca6d100f8",
      sections: [],
    },
    {
      id: "jarurat-care-rebrand",
      hidden: true,
      title: "Jarurat Care Foundation — Brand Identity",
      subtitle: "A logo audit and redesign for a cancer-care NGO",
      thumb: "linear-gradient(135deg,#EEF2FF,#E0E7FF)",
      thumbImg: "assets/jarurat/logo.jpg",
      role: "Brand & Visual Designer",
      tools: "Figma · Illustrator",
      overview: {
        heading: "Overview",
        subheading: "Auditing and redesigning Jarurat Care Foundation's mark",
        body:
          "Jarurat Care Foundation supports adults with advanced gastrointestinal " +
          "cancers and the families beside them. The brief was to audit the " +
          "existing logo against the five values the foundation is built on — " +
          "Trust, Hope, Strength, Support, and Legacy — and redesign it so the " +
          "mark actually carries them.",
      },
      sections: [
        {
          number: "01",
          heading: "Auditing the existing mark",
          subheading: "Four problems, and a five-value scorecard",
          body:
            "The existing logo packed a medical cross, dot eyes, a smile and a " +
            "heart into small interior shapes inside a ring — at favicon size it " +
            "merged into a blue smudge. The smiley face read as a children's " +
            "hospital, not a foundation caring for adults with advanced cancer " +
            "and their exhausted families. The cross signaled generic hospital " +
            "branding rather than the caregiving community JCF actually is, and " +
            "stroke weights differed between the ring, the face outline and the " +
            "heart, cut at unrelated angles.",
          media: [{ src: "assets/jarurat/logo-before.jpg", caption: "The existing logo" }],
          infoBox: {
            title: "FIVE VALUES — BEFORE",
            rows: [
              { label: "TRUST", value: "Borrowed — blue and a plus sign rent credibility from hospitals rather than building JCF's own" },
              { label: "HOPE", value: "Present, but literal — the smile announces it without anything in the form suggesting rising or growth" },
              { label: "STRENGTH", value: "Weak — thin strokes and a broken ring read as fragile" },
              { label: "SUPPORT", value: "Present — the cupped hands under the heart are the best idea, and the first thing lost at small size" },
              { label: "LEGACY", value: "Absent — nothing in the form carries the continuity behind why the foundation exists" },
            ],
          },
        },
        {
          number: "02",
          heading: "Redesigning around one gesture",
          subheading: "A cupped form holding a single figure",
          body:
            "Every element had to justify itself or be cut. I settled on two " +
            "nested cupped arcs built from two radii and one circle, so the mark " +
            "reads as constructed rather than drawn: the wider arc is the " +
            "community, the one above it is the caregiver, and the dot is the " +
            "person being carried — an upward cup, the oldest gesture for care. " +
            "Blue stayed to hold the previous logo's identity, with a lighter " +
            "tint for hierarchy; I introduced Marigold as a warm counterpoint, a " +
            "color with its own meaning in Indian ritual and remembrance. " +
            "Typography moved to a geometric sans so it stays familiar.",
          media: [{ src: "assets/jarurat/logo-after.jpg", caption: "The redesigned logo" }],
        },
        {
          number: "03",
          heading: "How the redesign performs",
          subheading: "Checking the mark against the same five values",
          body:
            "Re-scoring the redesign against the same values it was audited on: " +
            "every element that used to be a small, easily-lost detail is now " +
            "part of the gesture itself, which is what survives at favicon size.",
          infoBox: {
            title: "FIVE VALUES — AFTER",
            rows: [
              { label: "TRUST", value: "Earned through consistent stroke weight, shared radii, and a deep blue" },
              { label: "HOPE", value: "The circles open upward and Marigold sits at the top of the mark, rising rather than smiling" },
              { label: "STRENGTH", value: "A heavy single weight and a wide base" },
              { label: "SUPPORT", value: "The whole logo is now the gesture that used to be a detail" },
              { label: "LEGACY", value: "The second, wider arc behind the first is the community that remains throughout" },
            ],
          },
        },
      ],
    },
  ],
};
