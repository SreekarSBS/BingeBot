
'use client';

import appStore from "@/app/lib/utils/appStore";
import { ReactNode } from "react";
import { Provider } from "react-redux";
// or Redux Provider, etc.

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <Provider store={appStore}>
      {children}
    </Provider>
  );
}
