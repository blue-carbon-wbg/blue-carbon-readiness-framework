import { MainContentCard } from "../MainContentCard";
import { useAppContext } from "../../context";
import { ChangeEventHandler, useCallback } from "react";
import { useParams } from "react-router-dom";
import { RouterButton } from "../RouterButton";
import { CheckboxContent } from "./CheckboxContent";
import { BlueCarbonTreeItem } from "../../types";
import { TextContent } from "./TextContent";
import { TableContent } from "./TableContent";

export function BCStep(props: { pillar: string }) {
  const { pillar } = props;
  const {
    state: [data, setData],
    structure,
  } = useAppContext();
  const { step } = useParams<Record<string, string | undefined>>();

  const selections =
    data.find((i) => i.id === parseInt(step ?? "1"))?.value ?? [];
  const currentItem = structure.find((i) => i.id === parseInt(step ?? "1"));

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      const { value, checked } = event.target;
      const parsedStep = parseInt(step ?? "1");
      setData((prev) => {
        return prev.find((item) => item.id === parsedStep)
          ? prev.map((item) => {
              if (item.id === parsedStep) {
                return {
                  ...item,
                  value: checked
                    ? [...item.value, value]
                    : item.value.filter((v) => v !== value),
                };
              }
              return item;
            })
          : [...prev, { id: parsedStep, value: [value] }];
      });
    },
    [setData, step]
  );

  return (
    <MainContentCard
      cardHeader={currentItem!.title}
      content={renderContent(currentItem!, {
        handleChange,
        selections,
        rows: structure.find((i) => i.id === 1)?.options[1].options,
      })}
      actions={currentItem!.buttons
        .sort((a, b) => (a.value === "no" ? -1 : 0))
        .map((button) => (
          <RouterButton
            to={
              button.value === "root"
                ? `../${button.goto}`
                : `/${pillar}/${button.goto}`
            }
            disabled={button.value === "confirm" && selections.length === 0}
            variant={button.value === "no" ? "soft" : "solid"}
          >
            {button.label}
          </RouterButton>
        ))}
    />
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
