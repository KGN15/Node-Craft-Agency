export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tag: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    initial: string;
  };
  gradient: string;
  pattern: "dots" | "grid" | "lines" | "cross" | "waves";
  emoji: string;
  thumbnel: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "why-nextjs-is-the-future-of-web-development",
    title: "Why Next.js Is the Future of Web Development in 2026",
    excerpt:
      "Next.js has completely changed how we build for the web. From server components to the App Router — here's why every serious developer should be using it right now.",
    category: "Tech",
    tag: "Next.js",
    date: "April 12, 2025",
    readTime: "6 min read",
    author: {
      name: "Mashhudur Rahman",
      role: "CEO & Full Stack Developer",
      initial: "MR",
    },
    gradient: "from-blue-600 via-cyan-500 to-blue-800",
    pattern: "grid",
    emoji: "⚡",
    thumbnel: "https://i.pinimg.com/736x/e9/20/81/e92081263f620e23a2a243e031324301.jpg",
    content: `
## The Web Has Changed. Have You?

For years, developers had to choose between a fast developer experience and a fast user experience. React gave us great DX. Static sites gave us speed. But nobody gave us both — until Next.js.

## What Makes Next.js Different

Next.js is not just a framework. It's a full-stack architecture that lets you build the frontend and backend of your application in the same codebase, deployed to the edge.

### Server Components
With the App Router, components render on the server by default. This means:
- Zero JavaScript sent to the client for static content
- Faster initial page loads
- Better SEO out of the box

### File-Based Routing
No more complex router configurations. Just create a file, and it becomes a route. Dynamic segments, nested layouts, loading states — all handled automatically.

### Built-in Optimizations
- **Image optimization** — Automatic WebP conversion, lazy loading, blur placeholders
- **Font optimization** — Zero layout shift with next/font
- **Script optimization** — Control when third-party scripts load

## Why We Use Next.js at NodeCraft

Every project we build at NodeCraft Agency uses Next.js. Here's why:

1. **Speed** — Our clients' websites score 95+ on Google PageSpeed
2. **SEO** — Server-side rendering means search engines can index everything
3. **Scalability** — From a landing page to a full SaaS product, Next.js scales
4. **Full Stack** — We can build API routes, handle forms, and manage databases — all in one project

## Should You Switch?

If you're building anything for the web in 2025 — yes, absolutely. Whether you're a developer choosing your stack, or a business owner evaluating your tech partner, Next.js is the right choice.

At NodeCraft, we don't just recommend it — we bet our business on it.
    `,
  },
  {
    slug: "how-to-get-more-customers-with-your-website",
    title: "How to Get More Customers With Your Website (5 Proven Strategies)",
    excerpt:
      "Most business websites are just digital brochures. They look nice but do nothing. Here are 5 battle-tested strategies to turn your website into a customer-generating machine.",
    category: "Business",
    tag: "Marketing",
    date: "March 28, 2026",
    readTime: "8 min read",
    author: {
      name: "Mehraz Hossain",
      role: "CMO & Marketing Lead",
      initial: "MH",
    },
    gradient: "from-violet-600 via-purple-500 to-indigo-700",
    pattern: "dots",
    emoji: "📈",
    thumbnel: "https://i.pinimg.com/1200x/76/e6/b9/76e6b9355380c85fe9a80dddae96172c.jpg",
    content: `
## Your Website Should Work While You Sleep

Most business owners spend thousands of taka on a website and then wonder why it's not bringing in customers. The truth? A website alone doesn't bring customers. A **strategic** website does.

Here are 5 strategies we implement for every NodeCraft client.

## 1. Have One Clear Call to Action

The biggest mistake we see on business websites: too many choices. Multiple buttons, multiple offers, multiple phone numbers — it confuses visitors and they leave.

**Fix:** One primary CTA above the fold. "Book a Free Call," "Order Now," "Get a Quote" — pick one and make it impossible to miss.

## 2. Load in Under 3 Seconds

53% of mobile users abandon a site that takes longer than 3 seconds to load. Every second of delay costs you customers.

**Fix:** Use Next.js, optimize images, and host on a fast server. Our sites consistently load in under 1.5 seconds.

## 3. Add Social Proof Everywhere

People trust other people more than they trust businesses. A single genuine testimonial is worth more than a hundred marketing slogans.

**Fix:** Add real testimonials with real names and photos. Add a client logo strip. Show order counts or project numbers.

## 4. Make It Easy to Contact You

WhatsApp is king in Bangladesh. If your website doesn't have a WhatsApp button, you're losing customers every single day.

**Fix:** Fixed WhatsApp button, visible phone number in the header, and a simple contact form that doesn't ask for 10 fields.

## 5. Show Up on Google

If your business isn't on the first page of Google for your main keyword, you're invisible to most potential customers.

**Fix:** Basic on-page SEO — proper title tags, meta descriptions, fast loading, and location-based keywords. We include this in every plan.

## The Bottom Line

Your website is your best salesperson. It works 24/7, never takes a day off, and can reach thousands of people at once. But only if it's built strategically.

At NodeCraft, we don't just build websites — we build customer-generating systems.
    `,
  },
  {
    slug: "bkash-nagad-integration-nextjs-guide",
    title: "bKash & Nagad Payment Integration in Next.js — Complete Guide",
    excerpt:
      "Want to accept payments on your Bangladeshi e-commerce site? This step-by-step guide walks you through integrating bKash and Nagad payment gateways into your Next.js application.",
    category: "Tech",
    tag: "E-Commerce",
    date: "March 10, 2025",
    readTime: "10 min read",
    author: {
      name: "Mashhudur Rahman",
      role: "CEO & Full Stack Developer",
      initial: "MR",
    },
    gradient: "from-pink-600 via-rose-500 to-orange-600",
    pattern: "cross",
    emoji: "💳",
    thumbnel: "https://i.pinimg.com/1200x/17/ac/5e/17ac5e1b5945d75ce8cee4c0891b0788.jpg",
    content: `
## Accepting Payments in Bangladesh

For any e-commerce project in Bangladesh, bKash and Nagad are non-negotiable. Together they cover the vast majority of mobile financial service users in the country. Here's how we integrate them at NodeCraft.

## Prerequisites

Before you start, you'll need:
- A registered merchant account with bKash / Nagad
- Your App Key, App Secret, and Username/Password from the merchant portal
- A Next.js project with API routes enabled

## bKash Integration — Overview

bKash uses OAuth 2.0 for authentication. The flow looks like this:

1. **Grant Token** — Exchange your credentials for a bearer token
2. **Create Payment** — Initialize a payment session and get a bKash URL
3. **Redirect User** — Send the user to the bKash payment page
4. **Execute Payment** — After the user pays, execute and verify the payment

### Step 1: Create the Token API Route

\`\`\`typescript
// app/api/bkash/token/route.ts
export async function POST() {
  const res = await fetch(process.env.BKASH_GRANT_TOKEN_URL!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      username: process.env.BKASH_USERNAME!,
      password: process.env.BKASH_PASSWORD!,
    },
    body: JSON.stringify({
      app_key: process.env.BKASH_APP_KEY!,
      app_secret: process.env.BKASH_APP_SECRET!,
    }),
  })
  const data = await res.json()
  return Response.json({ token: data.id_token })
}
\`\`\`

### Step 2: Create Payment Session

\`\`\`typescript
// app/api/bkash/create/route.ts
export async function POST(req: Request) {
  const { amount, orderId } = await req.json()
  // ... get token, then create payment
  const payment = await fetch(process.env.BKASH_CREATE_PAYMENT_URL!, {
    method: 'POST',
    headers: {
      Authorization: token,
      'X-App-Key': process.env.BKASH_APP_KEY!,
    },
    body: JSON.stringify({
      mode: '0011',
      amount,
      currency: 'BDT',
      merchantInvoiceNumber: orderId,
      callbackURL: \`\${process.env.NEXT_PUBLIC_URL}/api/bkash/callback\`,
    }),
  })
  return Response.json(await payment.json())
}
\`\`\`

## Nagad Integration — Overview

Nagad follows a similar flow but uses RSA encryption for security. You'll need to:

1. Generate a sensitive data payload (encrypted with Nagad's public key)
2. Create a payment session
3. Redirect the user
4. Verify after payment

## Environment Variables

Always keep your credentials in \`.env.local\` and never expose them on the client side:

\`\`\`bash
BKASH_APP_KEY=your_key
BKASH_APP_SECRET=your_secret
BKASH_USERNAME=your_username
BKASH_PASSWORD=your_password
BKASH_GRANT_TOKEN_URL=https://...
BKASH_CREATE_PAYMENT_URL=https://...
\`\`\`

## Let Us Handle It For You

Payment integration is complex and security-sensitive. At NodeCraft, we've done this dozens of times. Our E-Commerce plan includes full bKash and Nagad integration — tested, secure, and ready to go live.
    `,
  },
];
