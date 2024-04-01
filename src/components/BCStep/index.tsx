import { MainContentCard } from "../MainContentCard";
import { useAppContext } from "../../context";
import { ChangeEventHandler, useCallback } from "react";
import { useParams } from "react-router-dom";
import { RouterButton } from "../RouterButton";
import { CheckboxContent } from "./CheckboxContent";
import { BlueCarbonTreeItem } from "../../types";
import { TextContent } from "./TextContent";
import { TableContent } from "./TableContent";
import { ArrowBackIosNew } from "@mui/icons-material";

export function BCStep() {
  const {
    state: [data, setData],
    structure,
  } = useAppContext();
  const { pillar, step } = useParams<Record<string, string | undefined>>();

  const currentItem = structure
    .find((p) => p.pillar === pillar?.toUpperCase())
    ?.data.find((i: BlueCarbonTreeItem) => i.id === parseInt(step ?? "1"));

  const selections =
    data.find((i) => i.value === currentItem?.value)?.data ?? [];

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const { value, checked } = event.target;
      setData((prev) => {
        return prev.find((item) => item.value === currentItem?.value)
          ? prev.map((item) => {
              if (item.value === currentItem?.value) {
                return {
                  ...item,
                  data: checked
                    ? [...item.data, value]
                    : item.data.filter((v) => v !== value),
                };
              }
              return item;
            })
          : [
              ...prev,
              { value: currentItem?.value ?? "unknown", data: [value] },
            ];
      });
    },
    [currentItem?.value, setData]
  );

  const handleBoolChange = useCallback(
    (value: Boolean) => {
      setData((prev) => {
        return prev.find((item) => item.value === currentItem?.value)
          ? prev.map((item) => {
              if (item.value === currentItem?.value) {
                return {
                  ...item,
                  data: [value],
                };
              }
              return item;
            })
          : [
              ...prev,
              { value: currentItem?.value ?? "unknown", data: [value] },
            ];
      });
    },
    [currentItem?.value, setData]
  );

  return (
    <>
      {currentItem!.prev && (
        <RouterButton
          startDecorator={<ArrowBackIosNew />}
          sx={{ flex: 0, mx: 2, alignSelf: "flex-start" }}
          variant="plain"
          to={`/p/${pillar}/s/${currentItem!.prev}`}
        >
          Go back
        </RouterButton>
      )}
      <MainContentCard
        cardHeader={currentItem!.title}
        content={renderContent(currentItem!, {
          handleChange,
          selections,
          rows: structure
            .find((p) => p.pillar === pillar?.toUpperCase())
            ?.data.find((i) => i.id === 1)?.options[1]?.options,
        })}
        actions={currentItem!.buttons
          .sort((a, b) => (a.value ? 0 : -1))
          .map((button) => (
            <RouterButton
              to={
                button.type === "root"
                  ? `/${button.goto}`
                  : `../s/${button.goto}`
              }
              disabled={button.value === "confirm" && selections.length === 0}
              variant={button.value ? "solid" : "soft"}
              onClick={
                currentItem?.contentType === "boolean"
                  ? () => handleBoolChange(Boolean(button.value))
                  : button.value === "restart"
                  ? () => setData([])
                  : undefined
              }
              key={`${pillar}-${button.label}`}
            >
              {button.label}
            </RouterButton>
          ))}
        icon={currentItem!.icon}
      />
    </>
  );
}

const renderContent = (currentItem: BlueCarbonTreeItem, props: any) => {
  switch (currentItem.contentType) {
    case "checkbox":
      return (
        <CheckboxContent
          handleChange={props.handleChange}
          selections={props.selections}
          optionGroups={currentItem.options}
        />
      );
    case "text":
      return (
        <TextContent
          selections={props.selections}
          optionGroups={currentItem.options}
        />
      );
    case "table":
      return (
        <TableContent
          handleChange={props.handleChange}
          selections={props.selections}
          optionGroups={currentItem.options}
          rows={props.rows}
        />
      );
    default:
      return null;
  }
};
