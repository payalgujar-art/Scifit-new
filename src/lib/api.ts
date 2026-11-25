import { siteConfig } from "@/config/site";
import { sampleSchedule, type ClassSlot } from "@/data/schedule";

/**
 * API boundary. Today everything is local; swap these implementations for real
 * backend calls (booking, membership, admin) without touching components.
 */

export async function getSchedule(): Promise<ClassSlot[]> {
  // FUTURE: return (await fetch(`${API_URL}/schedule`)).json()
  return sampleSchedule;
}

export type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
};

export type ContactResult = { ok: true; delivered: boolean } | { ok: false; error: string };

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const endpoint = siteConfig.contactEndpoint;
  if (!endpoint) {
    // No backend configured: simulate so the UI flow can be reviewed. Nothing is sent.
    await new Promise((r) => setTimeout(r, 700));
    return { ok: true, delivered: false };
  }
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { ok: false, error: "The server could not accept your message. Please try again." };
    return { ok: true, delivered: true };
  } catch {
    return { ok: false, error: "Network error. Please check your connection and try again." };
  }
}
