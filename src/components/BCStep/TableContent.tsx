import { Grid, Checkbox, Table } from "@mui/joy";
import { ChangeEventHandler } from "react";
import { BCOptionGroup } from "../../types";

export function TableContent(props: {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  selections: any[];
  optionGroups: BCOptionGroup[];
  rows: any[];
}) {
  const { handleChange, selections, optionGroups, rows } = props;
  return (
    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
      {optionGroups.map((group) => (
        <Grid md={12 / optionGroups.length} key={group.value}>
          <Table>
            <thead>
              <tr>
                <th>BCE</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.value}>
                  <td>{row.label}</td>
                  <td>
                    {group.options.map((option) => (
                      <Checkbox
                        label={option.label}
                        onChange={handleChange}
                        value={`${row.value}-${option.value}`}
                        checked={selections.includes(
                          `${row.value}-${option.value}`
                        )}
                        sx={{ mb: 0.75 }}
                      />
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Grid>
      ))}
    </Grid>
  );
}
