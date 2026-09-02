import Image from "next/image";
import Link from "next/link";
import { content } from "@/data/content";

function cardTitle(name: string) {
  const cut = name.indexOf(" (");
  return cut === -1 ? name : name.slice(0, cut);
}

export function RecipesTeaser() {
  if (!content.recipesTeaser.visible) return null;

  const recipes = content.recipesTeaser.recipeIds
    .map((id) => content.recipes.items.find((recipe) => recipe.id === id))
    .filter((recipe): recipe is (typeof content.recipes.items)[number] => Boolean(recipe));

  return (
    <section
      id="recipes"
      className="scroll-mt-[86px] overflow-hidden bg-white px-5 py-16 text-ink sm:px-[30px] sm:py-[100px]"
    >
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[873px]">
          <h2 className="font-display text-[2.5rem] leading-none sm:text-6xl lg:text-[80px]">
            {content.recipesTeaser.heading}
          </h2>
          <p className="mt-6 max-w-[653px] font-mono text-[20px] leading-[1.3] font-normal">
            {content.recipesTeaser.subtext}
          </p>
        </div>
        <Link
          href={content.recipesTeaser.cta.href}
          className="inline-flex h-[58px] w-fit shrink-0 items-center justify-center gap-2.5 rounded-[2px] border-2 border-ink px-6 text-[20px] leading-[1.3] font-semibold"
        >
          {content.recipesTeaser.cta.label}
          <Image
            src={content.recipesTeaser.cta.icon}
            alt=""
            width={24}
            height={24}
            className="size-6"
          />
        </Link>
      </div>

      <div className="-mx-5 mt-12 flex gap-[34px] overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:px-0 [&::-webkit-scrollbar]:hidden">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            href={content.recipesTeaser.cta.href}
            className="relative size-[280px] shrink-0 overflow-hidden rounded-[12px] bg-[#e7e7e7] sm:size-[404px]"
          >
            <Image
              src={recipe.image}
              alt={recipe.name}
              fill
              sizes="404px"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-[163px] bg-gradient-to-b from-transparent to-[rgba(0,0,0,0.95)] backdrop-blur-[20.7px]">
              <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1">
                <p className="truncate font-sans text-[24px] leading-[1.1] font-semibold text-white">
                  {cardTitle(recipe.name)}
                </p>
                <p className="truncate font-sans text-[20px] leading-[1.4] tracking-[-0.2px] text-[#b2b1b1]">
                  {recipe.protein}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
