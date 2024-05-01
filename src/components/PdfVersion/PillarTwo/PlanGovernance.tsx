import { MainContentCard } from "../components/MainContentCardPdf";
import { FocusIcon } from "../icons/FocusIcon";
import { Typography } from "../components/Typography";
import { View } from "@react-pdf/renderer";
import { OrderedListItem } from "../components/OrderedListItem";
import { StandardListItem } from "../components/StandardListItem";

export function PlanGovernance({ reddPlus }: { reddPlus: boolean }) {
  return (
    <MainContentCard
      cardHeader={
        "Because your plan doesn't incorporate the appropriate institutional/governance frameworks:"
      }
      content={
        <>
          <Typography level="title-lg">
            Focus on the design of a bespoke governance framework.
          </Typography>
          <Typography level="body-lg">Review Checklist 8.</Typography>
          {reddPlus && (
            <View
              style={{
                border: "2px dashed #A5A24A",
                borderRadius: "8px",
                padding: 8,
                marginTop: 8,
              }}
            >
              <Typography level="body-lg">
                Because you engage in REDD+, you should also check to see
                whether your REDD+ framework provides key structures that can be
                adjusted as needed
              </Typography>
            </View>
          )}
          <View>
            <OrderedListItem index={0}>
              Identifying and using or synchronizing with parallel governance
              frameworks on adaptation/resilience, private sector initiatives,
              technology transfer, and more.
            </OrderedListItem>
            <OrderedListItem index={1}>
              Developing an institutional / governance framework:
            </OrderedListItem>
          </View>
          <View>
            <StandardListItem>
              Technical governance (task force / technical unit) for FRL
              calculation, MRV, and others
            </StandardListItem>
            <StandardListItem>
              Institutions & policy governance
            </StandardListItem>
            <StandardListItem>
              Financial governance (receiving and distributing funding in line
              with benefit sharing arrangements)
            </StandardListItem>
            <StandardListItem>
              Community governance models to drive implementation
            </StandardListItem>
          </View>
        </>
      }
      icon={<FocusIcon />}
    />
  );
}
