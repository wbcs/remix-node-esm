import type { V2_MetaFunction } from "@remix-run/react";
import { topLevelAwait } from "shared";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      {topLevelAwait}
    </div>
  );
}
