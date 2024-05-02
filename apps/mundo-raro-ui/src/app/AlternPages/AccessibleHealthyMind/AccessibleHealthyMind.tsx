"use client";
import React, { useState, useEffect, FC } from "react";
import AccesibleMindHealthyMobile from "../../../components/AccesibleMindHealthyMobile";
import AccessibleMindHealthyDesktop from "../../../components/AccessibleMindHealthyDesktop";

const AccessibleMindHealthy: FC = () => {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1228);
      setIsDesktop(window.innerWidth > 1228);
    };

    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 1228);
      setIsDesktop(window.innerWidth > 1228);
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      {isMobile && <AccesibleMindHealthyMobile />}
      {isDesktop && <AccessibleMindHealthyDesktop />}
    </>
  );
};

export default AccessibleMindHealthy;
