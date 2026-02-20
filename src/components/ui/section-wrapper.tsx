interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  fade?: boolean;
}

export function SectionWrapper({
  children,
  id,
  className = "",
  fade = true,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative px-6 py-24 md:px-8 md:py-32 lg:py-40 ${fade ? "section-fade" : ""} ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
