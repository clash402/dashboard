"use client";
import * as React from "react";
import { addDays, format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import type { DateRange } from "react-day-picker";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";

export type DateRangeValue = { from: Date; to: Date };

export function DateRangePicker({ value, onChange }: { value: DateRangeValue; onChange: (v: DateRangeValue) => void }) {
  const [open, setOpen] = React.useState(false);
  const label = `${format(value.from, "LLL d, yyyy")} - ${format(value.to, "LLL d, yyyy")}`;
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <CalendarIcon className="h-4 w-4" />
          <span>{label}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <div className="flex flex-col gap-2 p-3">
          <div className="flex items-center gap-2">
            <PresetButton label="7D" onClick={() => onChange({ from: addDays(new Date(), -7), to: new Date() })} />
            <PresetButton label="30D" onClick={() => onChange({ from: addDays(new Date(), -30), to: new Date() })} />
            <PresetButton label="90D" onClick={() => onChange({ from: addDays(new Date(), -90), to: new Date() })} />
            <PresetButton label="YTD" onClick={() => onChange({ from: new Date(new Date().getFullYear(), 0, 1), to: new Date() })} />
          </div>
          <Calendar
            mode="range"
            numberOfMonths={2}
            selected={value as DateRange}
            onSelect={(range: DateRange | undefined) => {
              if (range?.from && range?.to) onChange({ from: range.from, to: range.to });
            }}
          />
        </div>
      </PopoverContent>
    </Popover>
  );
}

function PresetButton({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      className="rounded-full border border-white/10 bg-background/60 px-2.5 py-1 text-xs text-foreground/80 hover:text-white hover:border-white/20"
      onClick={onClick}
    >
      {label}
    </button>
  );
}


