import { MainContentCard } from "../components/MainContentCardPdf";
import { FocusIcon } from "../icons/FocusIcon";
import { Typography } from "../components/Typography";
import { View } from "@react-pdf/renderer";
import { OrderedListItem } from "../components/OrderedListItem";
export function NoBlueCarbonFinanceFramework() {
  return (
    <MainContentCard
      cardHeader={
        "Because your country doesn't have a blue carbon finance and investment framework in place:"
      }
      content={
        <>
          <Typography level="title-lg">
            Focus on developing a framework that integrates with your
            implementation plan
          </Typography>
          <View>
            <OrderedListItem index={0}>
              Scrutinizing existing funding flows to benefit/disadvantage Blue
              Carbon investments
            </OrderedListItem>
            <OrderedListItem index={1}>
              Conduct Stock-take of financing approaches (including the use of
              mechanisms such as Article 6 and jurisdictional REDD+/RBCF) and
              sources/instruments (concessional and non-concessional,
              considering innovative business models)
            </OrderedListItem>
            <OrderedListItem index={2}>
              Set out stable investment parameters for the private sector,
              including with respect to carbon finance: Define and allocate
              carbon rights, create mandates for carbon trading, and present
              models for community involvement and benefit sharing
            </OrderedListItem>
          </View>
        </>
      }
      icon={<FocusIcon />}
    />
  );
}
