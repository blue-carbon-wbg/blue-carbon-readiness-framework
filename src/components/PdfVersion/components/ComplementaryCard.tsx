import { ComplementaryIcon } from "../icons/ComplemenetaryIcon";
import { MainContentCard } from "./MainContentCardPdf";
import { ReactNode } from "react";

export function ComplementaryCard({ children }: { children: ReactNode }) {
  return (
    <MainContentCard
      cardHeader={"Use results from completed action/steps to:"}
      content={children}
      CardProps={{
        color: "complementary",
        variant: "outlined",
        sx: { borderWidth: "2px", mb: 3 },
      }}
      icon={<ComplementaryIcon />}
      variant="complementary"
    />
  );
}
