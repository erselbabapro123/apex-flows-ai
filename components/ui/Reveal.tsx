"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { ease, fadeUp, stagger } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & { delay?: number; y?: number };

/** Görünüme girince yumuşak blur + yukarı kayma ile beliren blok */
export function Reveal({ delay = 0, y = 28, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/** Çocukları sırayla beliren grup (RevealItem ile birlikte kullanılır) */
export function RevealGroup({
  children,
  gap = 0.08,
  delay = 0,
  ...rest
}: HTMLMotionProps<"div"> & { gap?: number; delay?: number }) {
  return (
    <motion.div
      variants={stagger(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={fadeUp} {...rest}>
      {children}
    </motion.div>
  );
}
