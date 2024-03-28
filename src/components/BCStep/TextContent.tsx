import { Grid, Typography, List, ListItem } from "@mui/joy";
import { BCOption, BCOptionGroup } from "../../types";

export function TextContent(props: {
  selections?: any[];
  optionGroups: BCOptionGroup[];
}) {
  const { optionGroups } = props;
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {optionGroups.map((group) => (
        <Grid md={12 / optionGroups.length} key={group.value}>
          <TextOptionColumn options={group.options} heading={group.label} />
        </Grid>
      ))}
    </Grid>
  );
}
function TextOptionColumn(props: {
  selections?: string[];
  heading?: string;
  options: BCOption[];
}) {
  const { options, heading } = props;
  return (
    <div>
      <Typography level="title-md">{heading ?? ""}</Typography>
      {options.length === 1 ? (
        options.map((option) => (
          <Typography key={`txt-${option.value}`} level="body-lg">
            {option.label}
          </Typography>
        ))
      ) : (
        <List>
          {options.map((option) => (
            <ListItem key={`txt-${option.value}`}>
              <Typography level="body-lg">{option.label}</Typography>
            </ListItem>
          ))}
        </List>
      )}
    </div>
  );
}
