import React, { useId, useState, useRef, useEffect } from "react";

export type AccordionItem = {
  id: string;
  title: React.ReactNode;
  content: React.ReactNode;
};

export type AccordionProps = {
  items: AccordionItem[];
  /** allow multiple panels to be open at once */
  allowMultiple?: boolean;
  /** controlled open ids */
  openIds?: string[];
  /** default open ids for uncontrolled mode */
  defaultOpenIds?: string[];
  onChange?: (openIds: string[]) => void;
  className?: string;
};

export default function Accordion({
  items,
  allowMultiple = false,
  openIds,
  defaultOpenIds = [],
  onChange,
  className = "",
}: AccordionProps) {
  const isControlled = Array.isArray(openIds);
  const [internalOpen, setInternalOpen] = useState<string[]>(defaultOpenIds);
  const currentOpen = isControlled ? openIds! : internalOpen;

  useEffect(() => {
    if (!isControlled) return;
    // no-op: controlled mode expects parent to manage state
  }, [isControlled]);

  const toggle = (id: string) => {
    const isOpen = currentOpen.includes(id);
    let next: string[];
    if (allowMultiple) {
      next = isOpen ? currentOpen.filter((x) => x !== id) : [...currentOpen, id];
    } else {
      next = isOpen ? [] : [id];
    }

    if (!isControlled) setInternalOpen(next);
    onChange?.(next);
  };

  // keyboard focus management
  const headersRef = useRef<HTMLButtonElement[]>([]);

  const setHeaderRef = (el: HTMLButtonElement | null, index: number) => {
    if (el) {
      headersRef.current[index] = el;
    }
  };

  const focusHeader = (index: number) => {
    const btn = headersRef.current[index];
    if (btn) btn.focus();
  };

  const idRoot = useId();

  return (
    <div className={`w-full ${className}`}>
      {items.map((item, idx) => {
        const panelId = `${idRoot}-panel-${item.id}`;
        const headerId = `${idRoot}-header-${item.id}`;
        const isOpen = currentOpen.includes(item.id);

        return (
          <div className="border-b-2 border-gray-400 last:border-b-0 text-base scrn-1000:text-lg scrn-1700:text-xl" key={item.id}>
            <h3>
              <button
                id={headerId}
                ref={(el) => setHeaderRef(el, idx)}
                aria-controls={panelId}
                aria-expanded={isOpen}
                onClick={() => toggle(item.id)}
                onKeyDown={(e) => {
                  const key = e.key;
                  if (key === "ArrowDown") {
                    e.preventDefault();
                    focusHeader((idx + 1) % items.length);
                  } else if (key === "ArrowUp") {
                    e.preventDefault();
                    focusHeader((idx - 1 + items.length) % items.length);
                  } else if (key === "Home") {
                    e.preventDefault();
                    focusHeader(0);
                  } else if (key === "End") {
                    e.preventDefault();
                    focusHeader(items.length - 1);
                  } else if (key === "Enter" || key === " ") {
                    e.preventDefault();
                    toggle(item.id);
                  }
                }}
                className="w-full text-left py-4 px-3 flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 transition-colors"
              >
                <span className="font-medium text-lg scrn-1000:text-xl scrn-1700:2xl apec-red">{item.title}</span>
                <span
                  className={`ml-3 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"
                    }`}
                  aria-hidden="true"
                >
                  {/* simple chevron */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-red-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </h3>

            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className={`overflow-hidden transition-all duration-200 px-3`}
              style={{
                maxHeight: isOpen ? undefined : 0,
              }}
            >
              <div className="px-6 py-4 tracking-wide">{item.content}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

