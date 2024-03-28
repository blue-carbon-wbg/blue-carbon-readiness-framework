import { PermIdentity, Info } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionGroup,
  AccordionSummary,
  Card,
  CardContent,
  CardProps,
  Divider,
  Link,
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from "@mui/joy";
import { useRef } from "react";

export function Checklist1() {
  return (
    <BCRFChecklist title="Checklist 1: Identifying Established Blue Carbon Ecosystems Within Your Country">
      <Typography>
        The first step in the process of evaluating blue carbon actions is
        identifying if your country currently has, or has had, any of the
        following blue carbon ecosystems (BCEs). BCEs fall into one of two
        categories: <b>Established</b> or <b>Emerging</b>.
      </Typography>
      <Divider sx={{ my: 1 }} />
      <Typography>
        <b>Established BCEs.</b> Mangroves, seagrass beds, and salt marshes are
        recognized as falling into an established inventory category of
        wetlands. These ecosystems are considered “actionable” because they are
        eligible for Blue Carbon crediting instruments.
      </Typography>
      <List>
        <ListItem>
          <ListItemDecorator>SM</ListItemDecorator>
          <Typography>
            Explore the UNEP{" "}
            <Link href="https://data.unep-wcmc.org/datasets/43">
              {" "}
              Global Distribution of Salt Marshes
            </Link>
            . You can download spatial data on the baseline inventory containing
            global seagrass distribution. Data used to develop this map covers
            studies from 1973 – 2015.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemDecorator>SG</ListItemDecorator>
          <Typography>
            Explore the UNEP{" "}
            <Link href="https://www.unep.org/resources/publication/globaldistribution-seagrasses">
              {" "}
              Global Distribution of Seagrass
            </Link>
            . You can zoom to your country to view salt marsh distribution or
            download spatial data to view distribution across a customizable
            area. Data used to develop this map covers studies from 1934 – 2015.
          </Typography>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemDecorator>MG</ListItemDecorator>
          <Typography>
            <Link href="www.GlobalMangroveWatch.org">
              Global Mangrove Watch
            </Link>{" "}
            provides a variety of data on the global distribution of mangroves
            at yearly intervals going back to 1996. Using their online mapping
            portal, you can view the distribution of mangroves within your
            country, as well as a variety of different data layers on carbon
            storage, mangrove type, and mangrove area change over time.
          </Typography>
        </ListItem>
      </List>
      <Divider sx={{ my: 1 }} />
      <Typography>
        <b>Emerging BCEs.</b> Emerging BCEs are “likely” actionable, meaning
        they meet some of the actionability criteria. In the future, these
        ecosystems may be eligible for Blue Carbon crediting instruments.
        Currently, there is limited data on the global extent of emerging BCEs,
        and as such, there are few resources available for countries looking to
        assess national extent/area of these ecosystems.
      </Typography>
    </BCRFChecklist>
  );
}

function BCRFChecklist(props: CardProps) {
  const { title, children } = props;
  return (
    <Card
      variant="solid"
      color="action"
      sx={{ my: "2rem", mx: "2rem", maxWidth: "750px" }}
      {...props}
    >
      <AccordionGroup>
        <Accordion>
          <AccordionSummary color="action">
            <Info fontSize="large" />
            <Typography fontWeight="bold">{title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <CardContent sx={{ mt: 1 }}>{children}</CardContent>
          </AccordionDetails>
        </Accordion>
      </AccordionGroup>
    </Card>
  );
}
