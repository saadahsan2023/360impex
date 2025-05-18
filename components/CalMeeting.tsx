"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalButton = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#141D2D" },
          dark: { "cal-brand": "#7ED957" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <button
      data-cal-namespace="30min"
      data-cal-link="360-impex/30min"
      data-cal-config='{"layout":"month_view"}'
      className="fixed bottom-6 right-6 px-5 py-3 text-white bg-[#141D2D] hover:bg-[#7ED957] hover:text-black transition rounded-lg shadow-lg z-50 cursor-pointer"
    >
      Book a Call
    </button>
  );
};

export default CalButton;
