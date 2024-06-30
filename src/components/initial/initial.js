import React, { useState, useEffect } from "react";

import { motion } from "framer-motion";

export default function Initial() {
  const [initialize, setInitialize] = useState(false);

  useEffect(() => {
    setInitialize(true);

    setTimeout(() => {
      setInitialize(false);
    }, 2000);
  }, []);

  return (
    <div>
      {initialize ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
          exit={{ opacity: 0 }}
        >
          <h2 className="text-9xl font-cursive z-40">LK</h2>
        </motion.div>
      ) : (
        <></>
      )}
    </div>
  );
}
