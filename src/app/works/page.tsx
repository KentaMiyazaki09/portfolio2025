'use client'

import React from 'react'
import { motion } from 'motion/react'

const WorksPage: React.FC = ()=> {
  return (
    <motion.div
      key="works"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <h1>WROKS</h1>
        <ul>
          <li>project01</li>
          <li>project02</li>
          <li>project03</li>
          <li>project04</li>
        </ul>
      </main>
    </motion.div>
  )
}

export default WorksPage;