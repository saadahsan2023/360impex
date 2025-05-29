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
      className="hover:bg-[#6cc44a] transition-all duration-300 shadow-md hover:shadow-xl fixed bottom-6 right-6 px-3.5 py-1.5 text-white bg-[#7ED957]  transition rounded-lg shadow-lg z-50 cursor-pointer"
    >
      Book a Call
    </button>
  );
};

export default CalButton;
