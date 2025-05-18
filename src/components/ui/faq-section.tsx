"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {
  title: string;
  description?: string;
  items: {
    question: string | React.ReactNode;
    answer: string;
  }[];
}

const FaqSection = React.forwardRef<HTMLElement, FaqSectionProps>(
  ({ className, title, description, items, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "py-4 md:py-6 w-full bg-white",
          className
        )}
        {...props}
      >
        <div className="container">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-packshield-navy">
              {title}
            </h2>
            {description && (
              <p className="text-base text-packshield-grey">{description}</p>
            )}
          </motion.div>

          {/* FAQ Items */}
          <div className="w-full max-w-[700px] md:max-w-[900px] mx-auto space-y-3">
            {items.map((item, index) => (
              <FaqItem
                key={index}
                question={item.question}
                answer={item.answer}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
);
FaqSection.displayName = "FaqSection";

// Internal FaqItem component
const FaqItem = React.forwardRef<
  HTMLDivElement,
  {
    question: string | React.ReactNode;
    answer: string;
    index: number;
  }
>((props, ref) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { question, answer, index } = props;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, delay: index * 0.1 }}
      className={cn(
        "group rounded-2xl border-2 border-packshield-lightGrey bg-white",
        "transition-all duration-300 ease-in-out overflow-hidden",
        "w-full my-6",
        isOpen
          ? "shadow-2xl bg-packshield-lightGrey/40"
          : "hover:shadow-lg hover:bg-packshield-lightGrey/40"
      )}
    >
      <Button
        variant="ghost"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full px-8 py-6 h-auto justify-between flex items-center text-left",
          isOpen ? "bg-packshield-lightGrey/40" : "hover:bg-packshield-lightGrey/40"
        )}
      >
        <h3
          className={cn(
            "text-xl md:text-2xl font-bold transition-colors duration-300 text-left text-packshield-navy/90",
            "tracking-tight"
          )}
        >
          {question}
        </h3>
        <motion.div
          animate={{
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.3 : 1,
          }}
          transition={{ duration: 0.25 }}
          className={cn(
            "ml-3 p-1 rounded-full flex-shrink-0 transition-colors duration-300",
            isOpen ? "text-packshield-orange bg-packshield-orange/10" : "text-packshield-grey group-hover:text-packshield-orange"
          )}
        >
          <ChevronDown className="h-7 w-7" />
        </motion.div>
      </Button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: "auto",
              opacity: 1,
              transition: { duration: 0.2, ease: "easeOut" },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: { duration: 0.2, ease: "easeIn" },
            }}
          >
            <div className="px-6 pb-5 pt-2 bg-packshield-lightGrey/40">
              <motion.p
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                className="text-base text-packshield-navy leading-relaxed"
              >
                {answer}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
FaqItem.displayName = "FaqItem";

export { FaqSection };
