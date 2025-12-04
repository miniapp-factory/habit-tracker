'use client';

import { Button } from "@/components/ui/button";

export interface HabitButtonProps {
  habit: string;
  reward: string;
  selected: boolean;
  onClick: () => void;
}

export function HabitButton({ habit, reward, selected, onClick }: HabitButtonProps) {
  return (
    <Button
      variant={selected ? "secondary" : "outline"}
      className="flex flex-col items-center justify-center w-full h-48 rounded-3xl p-4 text-center"
      onClick={onClick}
    >
      <span className="text-2xl">{habit}</span>
      <span className="text-sm text-muted-foreground mt-2">{reward}</span>
    </Button>
  );
}
