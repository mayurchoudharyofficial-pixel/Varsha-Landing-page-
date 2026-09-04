export function RecipeOverlay({
  title,
  protein,
}: {
  title: string;
  protein: string;
}) {
  return (
    <div className="pointer-events-none absolute inset-0 z-10">
      <div
        className="absolute inset-x-0 bottom-0 h-[40%] lg:h-[163px]"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.95) 100%)",
        }}
      />
      <div className="absolute right-4 bottom-4 left-4 flex flex-col items-start gap-1 overflow-hidden lg:right-5 lg:bottom-5 lg:left-5 lg:items-center lg:text-center">
        <p className="w-full truncate text-[20px] leading-[1.2] font-bold tracking-[-0.2px] text-white lg:text-[22px] lg:font-extrabold lg:tracking-[-0.3px]">
          {title}
        </p>
        <p className="w-full truncate text-[14px] leading-[1.3] font-medium text-[#b2b1b1] lg:text-[16px]">
          {protein}
        </p>
      </div>
    </div>
  );
}
