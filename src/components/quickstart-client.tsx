"use client";

import { useState, useSyncExternalStore } from "react";
import { AnimateIn } from "@/components/ui/animate-in";
import { CodeBlock } from "@/components/ui/code-block";

interface Tab {
  id: string;
  label: string;
  code: string;
  highlightedHtml: string;
}

interface QuickstartClientProps {
  tabs: Tab[];
}

const subscribe = () => () => {};
function useIsWindows() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.userAgent.toLowerCase().includes("win"),
    () => false
  );
}

export function QuickstartClient({ tabs }: QuickstartClientProps) {
  const isWindows = useIsWindows();
  const [active, setActive] = useState(() => (isWindows ? 1 : 0));

  return (
    <AnimateIn>
      {/* Tab switcher */}
      <div
        role="tablist"
        aria-label="Operating system"
        className="mb-4 flex gap-1 rounded-lg border border-border/40 bg-card/30 p-1"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={active === i}
            aria-controls={`panel-${tab.id}`}
            id={`tab-${tab.id}`}
            onClick={() => setActive(i)}
            className={`flex-1 rounded-md px-4 py-2.5 text-sm font-medium transition-all ${
              active === i
                ? "bg-accent/10 text-accent-light shadow-sm"
                : "text-muted hover:text-foreground"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code block for active tab */}
      <div
        role="tabpanel"
        id={`panel-${tabs[active].id}`}
        aria-labelledby={`tab-${tabs[active].id}`}
      >
        <CodeBlock
          code={tabs[active].code}
          highlightedHtml={tabs[active].highlightedHtml}
        />
      </div>
    </AnimateIn>
  );
}
