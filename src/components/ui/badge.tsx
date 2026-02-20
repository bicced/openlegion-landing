interface BadgeProps {
  value: string;
  label: string;
}

export function Badge({ value, label }: BadgeProps) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-2 text-sm backdrop-blur-sm">
      <span className="font-mono font-bold text-accent-light">{value}</span>
      <span className="text-muted">{label}</span>
    </div>
  );
}
