'use client';

import { useState } from "react";
import { HabitButton } from "./habit-button";
import { Reward } from "./reward";
import { Button } from "@/components/ui/button";

const HABITS = [
  "10 push-ups 💪",
  "5-minute walk 🚶",
  "Drink 2 glasses of water 💧",
  "Read 5 pages 📘",
  "15 squats 🦵",
  "Cook a healthy snack 🍲",
  "5-minute stretch 🧘",
  "Write one sentence ✍️",
];

const REWARDS = [
  "Reward: Reduce next push-up set by 2",
  "Reward: +1 Treat Token (just shown)",
  "Reward: 5-min break (you earned it)",
];

function getRandomIndex(exclude?: number) {
  let idx;
  do {
    idx = Math.floor(Math.random() * HABITS.length);
  } while (idx === exclude);
  return idx;
}

export function HabitPills() {
  const [indices, setIndices] = useState([0, 1]);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);
  const [reward, setReward] = useState("");

  const randomize = () => {
    const first = getRandomIndex();
    const second = getRandomIndex(first);
    setIndices([first, second]);
    setSelected(null);
    setDone(false);
    setReward("");
  };

  const handleSelect = (idx: number) => {
    setSelected(idx);
    setDone(false);
    setReward("");
  };

  const handleDone = () => {
    const rewardText = REWARDS[Math.floor(Math.random() * REWARDS.length)];
    setReward(rewardText);
    setDone(true);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md gap-4">
      <div className="flex flex-col sm:flex-row gap-4 w-full">
        <HabitButton
          habit={HABITS[indices[0]]}
          reward={REWARDS[0]}
          selected={selected === 0}
          onClick={() => handleSelect(0)}
        />
        <HabitButton
          habit={HABITS[indices[1]]}
          reward={REWARDS[1]}
          selected={selected === 1}
          onClick={() => handleSelect(1)}
        />
      </div>
      <div className="flex flex-col items-center gap-2 w-full">
        <Button onClick={randomize} variant="outline" className="w-full">
          Random
        </Button>
        {selected !== null && !done && (
          <Button onClick={handleDone} className="w-full">
            Done
          </Button>
        )}
        {done && <Reward text={reward} />}
      </div>
    </div>
  );
}
