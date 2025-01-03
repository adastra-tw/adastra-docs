"use client";
import { RootProvider } from "fumadocs-ui/provider";
import dynamic from "next/dynamic";
import { ReactNode } from "react";

const SearchDialog = dynamic(() => import("@/components/search"));

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      search={{
        links: [
          ["活動規劃", "/docs/planning"],
          ["活動推廣", "/docs/promotion"],
          ["活動當天", "/docs/event-day"],
          ["活動後續", "/docs/follow-up"],
        ],
        SearchDialog: SearchDialog,
        options: {
          tags: [
            {
              name: "活動規劃",
              value: "planning",
            },
            {
              name: "活動推廣",
              value: "promotion",
            },
            {
              name: "活動當天",
              value: "event-day",
            },
            {
              name: "活動後續",
              value: "follow-up",
            },
          ],
        },
      }}
    >
      {children}
    </RootProvider>
  );
}
