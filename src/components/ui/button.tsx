export function ButtonBG({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <button
      className={`bg-primary cursor-pointer text-black px-4 py-2 rounded-2xl text-[16px] ${className}`}
    >
      {children}
    </button>
  );
}
