import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function FloatingImage({ children }) {
  const range = 0.5;
  const { scrollY } = useScroll();
  const offsetTop = 0;
  const springConfig = {
    damping: 100,
    stiffness: 100,
    mass: (1, 3),
  };

  const y = useSpring(
    useTransform(
      scrollY,
      [offsetTop - 500, offsetTop + 500],
      ['0%', `${range * 100}%`]
    ),
    springConfig
  );

  return (
    <motion.div initial={{ y: 0 }} style={{ y }}>
      {children}
    </motion.div>
  );
}

export default FloatingImage;
