import { motion } from "framer-motion"
import "./Characters.css"

const characters = [
  { name: "Martin", img: "/images/martin.webp" },
  { name: "Vecna", img: "/images/vecna.jpg" },
  { name: "Eleven", img: "/images/eleven.webp" },
  { name: "Mike", img: "/images/mike.jpg" },
  { name: "Will", img: "/images/will.jpg" },
  { name: "Dustin", img: "/images/dustin.jpg" },
  { name: "Steve", img: "/images/steve.jpg" },
  { name: "Nancy", img: "/images/nancy.webp" },
  { name: "Jonathan", img: "/images/jonathan.webp" },
  { name: "Max", img: "/images/max.webp" },
  { name: "Lucas", img: "/images/lucas.webp" },
  { name: "Erica", img: "/images/erica.webp" },
  { name: "Murray", img: "/images/murray.webp" },
  { name: "Robin", img: "/images/robin.jpg" },
  { name: "Hopper", img: "/images/JimHopper.webp" },
  { name: "Joyce", img: "/images/Joyce.webp" },
  { name: "Bob", img: "/images/bob.jpg" },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
}

export default function Characters() {
  return (
    <motion.section
      className="characters"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {characters.map((c, i) => (
        <motion.div
          key={i}
          className="char-card"
          variants={item}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="img-wrapper">
            <img src={c.img} alt={c.name} />
          </div>
          <h2>{c.name}</h2>
        </motion.div>
      ))}
    </motion.section>
  )
}
