import { MainContentCard } from "../components/MainContentCardPdf";
import { FocusIcon } from "../icons/FocusIcon";
import { Typography } from "../components/Typography";
import { View } from "@react-pdf/renderer";
import { StandardListItem } from "../components/StandardListItem";

export function BlueCarbonFinanceFramework() {
  return (
    <MainContentCard
      cardHeader={
        "Because your country has a blue carbon finance and investment framework in place:"
      }
      content={
        <>
          <Typography level="title-lg">
            Focus on accessing grant funding
          </Typography>
          Accessing grant funding for capacity-building and related needs,
          namely:
          <View>
            <StandardListItem>
              Design and operationalize the governance framework
            </StandardListItem>
            <StandardListItem>Inventory work</StandardListItem>
            <StandardListItem>
              BCE mapping and carbon stock assessments
            </StandardListItem>
            <StandardListItem>
              Preparation of a pipeline of shovel-ready projects
            </StandardListItem>
            <StandardListItem>
              Conceptualization of blue infrastructure finance
            </StandardListItem>
          </View>
        </>
      }
      icon={<FocusIcon />}
    />
  );
}
