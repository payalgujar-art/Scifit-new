"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { days, type ClassSlot, type Day } from "@/data/schedule";
import { programs } from "@/data/programs";
import { getSchedule } from "@/lib/api";
import Icon from "@/components/ui/Icon";

const JS_DAY: Day[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function fmt(t: string) {
  const [h, m] = t.split(":").map(Number);
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
}

export default function ScheduleBoard() {
  const [slots, setSlots] = useState<ClassSlot[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [day, setDay] = useState<Day>("Mon");
  const [program, setProgram] = useState("All");

  useEffect(() => {
    let live = true;
    getSchedule()
      .then((s) => {
        if (!live) return;
        setSlots(s);
        // Default to today's weekday once loaded (client-only, avoids hydration mismatch)
        setDay(JS_DAY[new Date().getDay()]);
      })
      .catch(() => live && setFailed(true));
    return () => {
      live = false;
    };
  }, []);

  const visible = useMemo(
    () => (slots ?? []).filter((s) => s.day === day && (program === "All" || s.program === program)).sort((a, b) => a.start.localeCompare(b.start)),
    [slots, day, program],
  );

  if (failed)
    return (
      <div role="alert" className="rounded-[10px] bg-red-50 p-6 text-sm text-red-800">
        The schedule could not be loaded. Please refresh the page or contact us.
      </div>
    );

  return (
    <div>
      <div role="tablist" aria-label="Day of week" className="flex gap-2 overflow-x-auto pb-2">
        {days.map((d) => (
          <button
            key={d}
            role="tab"
            id={`tab-${d}`}
            aria-selected={day === d}
            aria-controls="schedule-panel"
            onClick={() => setDay(d)}
            className={`font-display min-w-[4.5rem] flex-1 rounded-[10px] px-4 py-3 text-xl transition-colors ${
              day === d ? "bg-ink text-olive" : "bg-white text-ink hover:bg-stone"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-2" aria-label="Filter by program">
        {["All", ...programs.map((p) => p.title)].map((p) => (
          <button
            key={p}
            aria-pressed={program === p}
            onClick={() => setProgram(p)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors ${
              program === p ? "border-ink bg-ink text-bone" : "border-ink/20 hover:border-ink"
            }`}
          >
            {p}
          </button>
        ))}
      </div>

      <div id="schedule-panel" role="tabpanel" aria-labelledby={`tab-${day}`} className="mt-8 min-h-48">
        {slots === null ? (
          <ul className="space-y-3" aria-label="Loading schedule">
            {[0, 1, 2].map((i) => (
              <li key={i} className="h-24 animate-pulse rounded-[10px] bg-stone" />
            ))}
          </ul>
        ) : visible.length === 0 ? (
          <p className="rounded-[10px] border border-dashed border-ink/20 p-8 text-center text-mute">No classes for this selection.</p>
        ) : (
          <ul className="space-y-3">
            {visible.map((s) => (
              <li key={s.id} className="group grid items-center gap-4 rounded-[10px] bg-white p-5 shadow-sm transition-shadow hover:shadow-lg sm:grid-cols-[10rem_1fr_auto]">
                <p className="font-display flex items-center gap-2 text-2xl">
                  <Icon name="clock" width={18} height={18} className="text-olive-dark" />
                  {fmt(s.start)}
                  <span className="text-sm text-mute">– {fmt(s.end)}</span>
                </p>
                <div>
                  <h3 className="font-medium">{s.title}</h3>
                  <p className="text-sm text-mute">
                    {s.program} · Coach: {s.coach}
                  </p>
                </div>
                <Link
                  href={`/contact?interest=trial#contact-form`}
                  className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider underline-offset-4 hover:underline"
                >
                  Enquire <Icon name="arrow" width={16} height={16} />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
      <p className="mt-6 inline-block rounded-[10px] border border-dashed border-mute/50 px-3 py-1.5 text-xs text-mute">
        <span className="font-semibold uppercase tracking-wider">Sample timetable · </span>
        replace src/data/schedule.ts or connect getSchedule() in src/lib/api.ts.
      </p>
    </div>
  );
}
