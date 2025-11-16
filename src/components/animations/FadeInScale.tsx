import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

type FadeInScaleProps = {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  once?: boolean;
  delay?: number;
  scaleFrom?: number;
};

const FadeInScale: React.FC<FadeInScaleProps> = ({
  children,
  className = "",
  duration = 1,
  once = true,
  delay = 0,
  scaleFrom = 0.9,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scale: scaleFrom, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInScale;
