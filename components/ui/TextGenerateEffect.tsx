"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      },
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, wordIdx) => {
          return (
            // Wrap each word's letters, then append space
            <span key={`word-${wordIdx}`}>
              {word.split("").map((letter, letterIdx) => {
                return (
                  <motion.span
                    key={`${letter}-${wordIdx}-${letterIdx}`}
                    className="opacity-0"
                    style={{
                      color: getBlendColor(letterIdx, word.length),
                      filter: filter ? "blur(10px)" : "none",
                    }}
                  >
                    {letter}
                  </motion.span>
                );
              })}
              <motion.span> </motion.span>
            </span>
          );
        })}
      </motion.div>
    );
  };

  const getBlendColor = (letterIdx: number, wordLength: number): string => {
    const blendFactor = Math.min(letterIdx / (wordLength - 1), 1);
    const red = Math.round(128 + (255 - 128) * blendFactor);
    const green = Math.round(0 + (255 - 0) * blendFactor);
    const blue = Math.round(128 + (255 - 128) * blendFactor);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
