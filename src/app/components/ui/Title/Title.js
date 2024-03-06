'use client'
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import '@/app/globals.css'

export const Title = ({children}) => {
    const [refTitle, inViewTitle] = useInView({ triggerOnce: true})
  return (
    <motion.h2
    ref={refTitle}
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: inViewTitle ? 1 : 0, x: inViewTitle ? 0 : -50 }}
    transition={{ duration: 0.5, delay: 0.6 }}
    className='title'>
        {children}
    </motion.h2>
  )
}

export default Title