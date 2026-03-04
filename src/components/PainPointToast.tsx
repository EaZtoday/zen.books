import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';

interface PainPointToastProps {
  painPoints: string[];
  /** Delay in ms before first toast appears */
  initialDelay?: number;
  /** How long each toast stays visible in ms */
  displayDuration?: number;
}

export function PainPointToast({
  painPoints,
  initialDelay = 4000,
  displayDuration = 7000,
}: PainPointToastProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const showNext = useCallback(() => {
    setVisible(false);
    // Wait for exit animation, then show next
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % painPoints.length);
      setVisible(true);
    }, 500);
  }, [painPoints.length]);

  // Initial delay before first toast
  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay, dismissed]);

  // Cycle to next pain point after displayDuration
  useEffect(() => {
    if (!visible || dismissed) return;
    const timer = setTimeout(showNext, displayDuration);
    return () => clearTimeout(timer);
  }, [visible, dismissed, displayDuration, showNext, currentIndex]);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 max-w-sm w-full pointer-events-none">
      <AnimatePresence mode="wait">
        {visible && (
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 80, scale: 0.95 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="pointer-events-auto bg-white rounded-2xl shadow-2xl shadow-warm-900/10 border border-cream-200 overflow-hidden"
          >
            {/* Header bar */}
            <div className="bg-forest px-5 py-2.5 flex items-center justify-between">
              <span className="text-xs font-medium tracking-widest uppercase text-fern-light">
                Sound familiar?
              </span>
              <button
                onClick={() => setDismissed(true)}
                className="text-forest-400 hover:text-white transition-colors p-0.5"
                aria-label="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Pain point content */}
            <div className="px-5 py-4">
              <p className="text-base font-serif italic text-warm-700 leading-relaxed">
                "{painPoints[currentIndex]}"
              </p>
              <a
                href="#book"
                className="inline-flex items-center gap-1.5 text-fern text-sm font-medium mt-3 hover:gap-2.5 transition-all"
              >
                We fix this <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Progress bar */}
            <div className="h-0.5 bg-cream-200">
              <motion.div
                key={`progress-${currentIndex}`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: displayDuration / 1000, ease: 'linear' }}
                className="h-full bg-fern"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
