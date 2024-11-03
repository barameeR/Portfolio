"use client";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import IconButton from "./ui/IconButton";
import useWindowSize from "./hooks/UseWindowSize";
import { FaGithub, FaLinkedin } from "react-icons/fa";
type CopyValue = "email" | "phone";
const email = "baramee.rujipatapong@gmail.com";
const Contact = () => {
  const { width } = useWindowSize();
  const [isCopied, setIsCopied] = useState(false);
  const [copiedValueType, setCopiedValueType] = useState<CopyValue | null>(
    null,
  );

  const handleCopyClick = async (text: string, type: CopyValue) => {
    try {
      await copyTextToClipboard(text);
      setIsCopied(true);
      setCopiedValueType(type);
      const timeoutId: ReturnType<typeof setTimeout> = setTimeout(() => {
        setIsCopied(false);
        setCopiedValueType(null);
        clearTimeout(timeoutId);
      }, 1500);
    } catch {
      setIsCopied(false);
      setCopiedValueType(null);
      alert("Unable to copy!");
    }
  };
  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };
  return (
    <div
      className="min-h-screen flex flex-col items-center relative my-20 z-10 pt-20"
      id="contact"
    >
      <h2 className="uppercase text-4xl md:text-4xl text-white font-bold max-w-4xl mb-10">
        Let&apos;s Get In Touch
      </h2>
      <div className="w-full min-h-[30vw] lg:min-h-[18vw] max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center bg-neutral-700/50 rounded-lg py-10">
        <p className="text-center md:tracking-wider mb-0 text-lg md:text-lg lg:text-lg text-white-200 w-10/12">
          Please feel free to contact me if you are seeking a developer, have
          any questions, or would like to establish a connection.
        </p>

        <br />
        <div className="flex flex-row items-center justify-between">
          <IconButton
            size={width && width < 768 ? "md" : "lg"}
            onClick={() => window.open("https://github.com/barameeR", "_blank")}
          >
            <FaGithub className="text-white text-2xl" />
          </IconButton>
          <IconButton
            size={width && width < 768 ? "md" : "lg"}
            onClick={() =>
              window.open("https://www.linkedin.com/in/barameer/", "_blank")
            }
          >
            <FaLinkedin className="text-white text-2xl" />
          </IconButton>
        </div>
        <br />

        <div className="flex flex-row items-center justify-between">
          <p className="text-center md:tracking-wider mb-0 text-lg md:text-lg lg:text-lg text-white-200">
            Baramee.Ruiipatanapong@gmail.com
          </p>

          <IconButton
            size={width && width < 768 ? "md" : "lg"}
            onClick={() => handleCopyClick(email, "email")}
            showTooltip={isCopied && copiedValueType === "email"}
            tooltipText="Copied!"
          >
            <FontAwesomeIcon
              icon={faClipboard}
              className="text-white text-2xl"
            />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Contact;
