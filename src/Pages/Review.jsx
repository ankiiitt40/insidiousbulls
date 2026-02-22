import React from "react";
import RotatingText from "../ui/RotatingText";

const Review = () => {
  return (
    <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
      Transforming Beginners Into{" "}

      <RotatingText
        texts={["Disciplined", "Strategy-Driven"]}
        mainClassName="ml-2 text-cyan-400 font-semibold"
        staggerFrom="last"
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "-120%" }}
        staggerDuration={0.025}
        splitLevelClassName="overflow-hidden"
        transition={{ type: "spring", damping: 30, stiffness: 400 }}
        rotationInterval={2500}
      />

      {" "}Traders.
    </h1>
  );
};

export default Review;
