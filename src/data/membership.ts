export type Plan = {
  id: string;
  name: string;
  months: number;
  /** null = not yet provided. Replace with a number (e.g. 9999) when real pricing is known. */
  price: number | null;
  currency: string;
  featured?: boolean;
  badge?: string;
  features: string[];
};

/** PLACEHOLDER pricing and inclusions — confirm with SciFit before launch. */
export const plans: Plan[] = [
  {
    id: "3-month",
    name: "3-Month Membership",
    months: 3,
    price: null,
    currency: "₹",
    features: [
      "Access to the gym floor",
      "Orientation and starter plan",
      "Access to group sessions",
      "Progress check-in",
    ],
  },
  {
    id: "6-month",
    name: "6-Month Membership",
    months: 6,
    price: null,
    currency: "₹",
    featured: true,
    badge: "Best value",
    features: [
      "Everything in 3-Month",
      "Extended program planning",
      "Priority class booking",
      "Mid-term progress review",
    ],
  },
];

export const faqs = [
  { q: "Can I try SciFit before joining?", a: "Trial session details will be confirmed by SciFit. Use the contact form to ask." },
  { q: "Are the prices final?", a: "No — prices on this page are placeholders until SciFit provides actual rates." },
  { q: "Can I switch between plans?", a: "Plan change policy is to be confirmed by SciFit." },
];
