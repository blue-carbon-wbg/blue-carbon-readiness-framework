import { Box, Button, List, ListItem, SvgIcon, Typography } from "@mui/joy";
import { MainContentCard } from "../../components/MainContentCard";
import { useAppContext } from "../../context";

import { ReactComponent as RecommendedIcon } from "../../assets/static/recommended.svg";
import { ReactComponent as ComplementaryIcon } from "../../assets/static/complementary.svg";
import { ReactComponent as CompleteIcon } from "../../assets/static/done_check.svg";
import { RouterButton } from "../../components/RouterButton";
import { useParams } from "react-router-dom";
import { Pillar1a } from "./Pillar1a";
import { Pillar1b } from "./Pillar1b";
import { Pillar2 } from "./Pillar2";
import { Pillar3 } from "./Pillar3";
import { StructuredData } from "./types";
import { processPillarData, getNextPillar } from "./utils";
export type EstablishedBCEs = "mangroves" | "saltmarshes" | "seagrasses";
export type EmergingBCEs = "macroalgae" | "sediments" | "mudflats";
export type Maybe<T> = T | null;
export interface CompletedPillarProps {
  structuredData: StructuredData;
  okContinue: boolean;
}

export function Completed() {
  const { pillar } = useParams();
  const {
    state: [data],
  } = useAppContext();

  const { processedData, okContinue } = processPillarData(data, pillar ?? "1a");

  return (
    <>
      {pillar === "1a" && processedData && (
        <Pillar1a structuredData={processedData} okContinue={okContinue} />
      )}
      {pillar === "1b" && processedData && (
        <Pillar1b structuredData={processedData} okContinue={okContinue} />
      )}
      {pillar === "2" && processedData && (
        <Pillar2 structuredData={processedData} okContinue={okContinue} />
      )}
      {pillar === "3" && processedData && (
        <Pillar3 structuredData={processedData} okContinue={okContinue} />
      )}
      <RouterButton
        to={pillar !== "3" ? `/p/${getNextPillar(pillar!)}/s/1` : "/fin"}
        size="lg"
        color="complete"
        startDecorator={
          okContinue && (
            <SvgIcon size="lg">
              <CompleteIcon />
            </SvgIcon>
          )
        }
        sx={{
          height: "4rem",
          m: 2,
          p: 3,
        }}
      >
        <Typography level="body-lg" sx={{ color: "black" }}>
          Click to continue
        </Typography>
      </RouterButton>
    </>
  );
}
