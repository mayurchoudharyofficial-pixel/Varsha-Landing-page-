import { PlanCard } from "@/components/plan-card";
import { content } from "@/data/content";

export function PlanCatalog({
  plans,
  layout = "grid",
}: {
  plans: typeof content.pricing.plans;
  layout?: "grid" | "row";
}) {
  if (layout === "row") {
    return (
      <div className="-mx-5 flex gap-10 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0 min-[1920px]:gap-2 [&::-webkit-scrollbar]:hidden">
        {plans.map((plan) => (
          <PlanCard key={plan.name} plan={plan} />
        ))}
      </div>
    );
  }

  return (
    <div className="mx-auto grid w-full max-w-[1178px] grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 xl:grid-cols-3">
      {plans.map((plan) => (
        <PlanCard key={plan.name} plan={plan} />
      ))}
    </div>
  );
}
