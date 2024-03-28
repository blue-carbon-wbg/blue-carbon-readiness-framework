import { Grid, Typography, List, ListItem, Checkbox } from "@mui/joy";
import { ChangeEventHandler } from "react";
import { BCOption, BCOptionGroup } from "../../types";

export function CheckboxContent(props: {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  selections: any[];
  optionGroups: BCOptionGroup[];
}) {
  const { handleChange, selections, optionGroups } = props;
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {optionGroups.map((group) => (
        <Grid md={12 / optionGroups.length} key={group.value}>
          <CheckboxOptionColumn
            selections={selections}
            options={group.options}
            handleChange={handleChange}
            heading={group.label}
          />
        </Grid>
      ))}
    </Grid>
  );
}
function CheckboxOptionColumn(props: {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  selections: string[];
  heading?: string;
  options: BCOption[];
}) {
  const { handleChange, selections, options, heading } = props;
  return (
    <div>
      <Typography level="title-md">{heading ?? ""}</Typography>
      <List>
        {options.map((option) => (
          <CheckboxItem
            label={option.label}
            value={option.value}
            handleChange={handleChange}
            data={selections}
            key={`chk-${option.value}`}
          />
        ))}
      </List>
    </div>
  );
}
function CheckboxItem(props: {
  label: string;
  value: string | number;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  data: any[];
}) {
  const { label, value, handleChange, data } = props;
  return (
    <ListItem>
      <Checkbox
        label={label}
        onChange={handleChange}
        value={value}
        checked={data.includes(value)}
      />
    </ListItem>
  );
}
