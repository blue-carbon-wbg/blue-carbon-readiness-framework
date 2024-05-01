import { MainContentCard } from "../components/MainContentCardPdf";
import { NextStepsIcon } from "../icons/NextStepsIcon";
import { PrivateSectorIcon } from "../icons/PrivateSectorIcon";
import { View } from "@react-pdf/renderer";
import { OrderedListItem } from "../components/OrderedListItem";
import { Typography } from "../components/Typography";

export function NoPlan({ reddPlus }: { reddPlus: boolean }) {
  const textArray = [
    "Where feasible, prepare a cost-benefit analysis for conservation and restoration options (use CWON and other datasets for valuation)",
    "Develop a bespoke Blue Carbon Strategy",
    "Work through MSP and ICZM",
    "Focus on land tenure and community involvement",
    "Tackle bottlenecks to implementation",
    "Design the plan with Section 4 (Financing) in mind",
    "Create benefit-sharing arrangements",
    "Consider policy reforms for BCE conservation, restoration, or sustainable management through NBS",
    "Refer to Checklist 7 for a detailed list of next steps.",
  ];

  return (
    <>
      <MainContentCard
        cardHeader="Address the private sector:"
        content={
          <View>
            <Typography level="body-lg">
              Set out investment parameters and clear guidance for the private
              sector (cf. Section 4: Financing; see below).
            </Typography>
            <Typography level="body-lg">
              Promote private sector initiatives and create institutional
              structures for private sector and community involvement (planning,
              decision-making, and implementation).
            </Typography>
          </View>
        }
        icon={<PrivateSectorIcon />}
        variant="privateSector"
      />
      <MainContentCard
        cardHeader="Because your country does not have an NDC implementation plan:"
        content={
          <>
            <View>
              {textArray.map((text, index) => (
                <OrderedListItem key={index} index={index}>
                  {text}
                </OrderedListItem>
              ))}
            </View>
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
                  Because you engage in REDD+, you should also review
                  integration of BCE(s) in your REDD+ policy framework
                </Typography>
              </View>
            )}
          </>
        }
        icon={<NextStepsIcon />}
      />
    </>
  );
}
