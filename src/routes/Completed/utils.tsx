import { StateData } from "../../types";
import { StructuredData } from "./types";
import { EstablishedBCEs } from ".";

export const processPillarData = (data: StateData[], pillar: string) => {
  const out: StructuredData = {
    established: [],
    emerging: [],
    missing: { mangroves: [], saltmarshes: [], seagrasses: [] },
    reddPlus: null,
    bceInventory: null,
    wetlandsSupplement: null,
    frel: null,
    emissionsRemovals: null,
    ndcPlan: null,
    planGovernance: null,
    blueCarbonFinance: null,
    specificTools: null,
    carbonMarkets: null,
  };

  switch (pillar) {
    case "1a": {
      data
        .find(
          (i) => i.value === "have_ecosystems" || i.value === "previous_bce"
        )
        ?.data.forEach((d) => {
          ["macroalgae", "sediments", "mudflats"].includes(d)
            ? out.emerging.push(d)
            : out.established.push(d);
        });
      out.established
        .flatMap((i) => [`${i}-human`, `${i}-spatial`])
        .filter(
          (i) =>
            !(data.find((d) => d.value === "have_data")?.data ?? []).includes(i)
        )
        .forEach((i) => {
          const eco = i.split("-")[0] as EstablishedBCEs;
          out.missing[eco].push(i.split("-")[1]);
        });
      const okContinue =
        out.missing.mangroves.length === 0 &&
        out.missing.saltmarshes.length === 0 &&
        out.missing.seagrasses.length === 0 &&
        out.established.length !== 0;
      return { processedData: out, okContinue };
    }
    case "1b": {
      out.bceInventory = processBooleanData(data, "bce_inventory");
      out.reddPlus = processBooleanData(data, "redd_plus");
      out.wetlandsSupplement = processBooleanData(data, "wetlands_supplement");
      out.frel = processBooleanData(data, "frl_frel");
      const okContinue = out.bceInventory && out.wetlandsSupplement;
      return { processedData: out, okContinue };
    }
    case "2": {
      out.emissionsRemovals = processBooleanData(data, "emissions_removals");
      out.ndcPlan = processBooleanData(data, "ndc_plan");
      out.planGovernance = processBooleanData(data, "plan_governance");
      const okContinue =
        out.emissionsRemovals && out.ndcPlan && out.planGovernance;
      return { processedData: out, okContinue };
    }
    case "3": {
      out.blueCarbonFinance = processBooleanData(data, "blue_carbon_finance");
      out.specificTools = processBooleanData(data, "specific_tools");
      out.carbonMarkets = processBooleanData(data, "carbon_markets");
      const okContinue =
        out.blueCarbonFinance && out.specificTools && out.carbonMarkets;
      return { processedData: out, okContinue };
    }
    default:
      return { processedData: out, okContinue: false };
  }
};
export const getNextPillar = (pillar: string) => {
  switch (pillar) {
    case "1a":
      return "1b";
    case "1b":
      return "2";
    case "2":
      return "3";
    case "3":
      return "final";
    default:
      return "1a";
  }
};
const processBooleanData = (data: StateData[], value: string) => {
  return !!data.find((d) => d.value === value)?.data[0];
};
