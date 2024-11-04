"use client";
import React, { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    (function () {
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = process.env.NEXT_PUBLIC_TAWK_TO_ID ?? "";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode?.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div className="container mx-auto 2xl pt-[50px] pb-8 relative z-10">
      <div className="text-center text-sm text-white-100 mb-4">
        <p className="pb-3">Created with ❤️ using Next.js</p>
        <p>&copy; 2024 Baramee Rujipatanapong. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
