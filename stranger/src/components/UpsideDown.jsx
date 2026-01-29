import { motion } from "framer-motion"
import "./UpsideDown.css"

export default function UpsideDown() {
  return (
    <motion.div
      className="upside-world"
      initial={{ opacity: 0, rotateX: 180 }}
      animate={{ opacity: 1, rotateX: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h1>WELCOME TO THE UPSIDE DOWN</h1>
    </motion.div>
  )
}
