import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/util'

interface ShakingComponentProps {
  children: React.ReactNode
  className?: string
}

const ShakingComponent: React.FC<ShakingComponentProps> = ({ children, className }) => {
  const shakeAnimation = {
    rotate: [0, 2, -2, 2, -1, 0],
  }

  return (
    <motion.div
      animate={shakeAnimation}
      transition={{
        repeatDelay: 1.5,
        duration: 1.5,
        times: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
        repeat: Infinity,
        repeatType: 'mirror' as const,
        ease: 'easeInOut',
      }}
      className={cn('inline-block', className)}
    >
      {children}
    </motion.div>
  )
}

export default ShakingComponent
