import { EstablishedBCEs, EmergingBCEs, Maybe } from ".";

export interface StructuredData {
  established: EstablishedBCEs[];
  emerging: EmergingBCEs[];
  missing: { saltmarshes: string[]; seagrasses: string[]; mangroves: string[] };
  reddPlus: Maybe<boolean>;
  bceInventory: Maybe<boolean>;
  wetlandsSupplement: Maybe<boolean>;
  frel: Maybe<boolean>;
  emissionsRemovals: Maybe<boolean>;
  ndcPlan: Maybe<boolean>;
  planGovernance: Maybe<boolean>;
  blueCarbonFinance: Maybe<boolean>;
  specificTools: Maybe<boolean>;
  carbonMarkets: Maybe<boolean>;
}
