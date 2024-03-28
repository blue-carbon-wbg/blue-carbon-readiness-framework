import { BlueCarbonTreeItem } from "../types";

export const dataStructure: BlueCarbonTreeItem[] = [
  {
    id: 0,
    value: "no_actions",
    title: "No blue carbon actions available",
    contentType: "text",
    options: [
      {
        value: "no_actions",
        label: "",
        options: [
          {
            label:
              "Thank you for using the Blue Carbon Assessment Tool. As your country does not currently have or previously had any BCEs, there are no blue carbon actions available.",
            value: "body-lg",
          },
        ],
      },
    ],
    buttons: [{ label: "Start over", value: "root", goto: "/" }],
  },
  {
    id: 1,
    value: "have_ecosystems",
    title: (
      <span>
        Does your country <u>currently</u> have any of the following Blue Carbon
        ecosystems (BCEs)?
      </span>
    ),
    contentType: "checkbox",
    options: [
      {
        value: "emerging",
        label: "Emerging BCEs",
        options: [
          { label: "Macroalgae", value: "macroalgae" },
          { label: "Benthic sediments", value: "sediments" },
          { label: "Mudflats", value: "mudflats" },
        ],
      },
      {
        value: "established",
        label: "Established BCEs",
        options: [
          { label: "Mangroves", value: "mangroves" },
          { label: "Saltmarshes", value: "saltmarshes" },
          { label: "Seagrasses", value: "seagrasses" },
        ],
      },
    ],
    buttons: [
      { label: "Yes", value: "confirm", goto: 2 },
      { label: "No, none of these", value: "no", goto: 3 },
    ],
  },
  {
    id: 2,
    value: "have_data",
    title: "Does your country have the following data?",
    contentType: "table",
    options: [
      {
        value: "established_data",
        label: "",
        options: [
          {
            label: "Extent or area (e.g. maps, spatial data)",
            value: "spatial",
          },
          {
            label: "Human activity data",
            value: "human",
          },
        ],
      },
    ],
    buttons: [{ label: "Continue", value: "root", goto: "done" }],
  },
  {
    id: 3,
    value: "previous_bce",
    contentType: "checkbox",
    title: (
      <span>
        Has your country <u>previously</u> had any of the established BCEs?
      </span>
    ),
    options: [
      {
        value: "established",
        label: "Established BCEs",
        options: [
          { label: "Mangroves", value: "mangroves" },
          { label: "Saltmarshes", value: "saltmarshes" },
          { label: "Seagrasses", value: "seagrasses" },
        ],
      },
    ],
    buttons: [
      { label: "Yes", value: "confirm", goto: 2 },
      { label: "No, none of these", value: "no", goto: 0 },
    ],
  },
  {
    id: 4,
    value: "economic_valuation",
    contentType: "boolean",
    title: "Are BCEs included in your country’s GHG inventory?",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: 5 },
      { label: "No", value: "no", goto: 5 },
    ],
  },
  {
    id: 5,
    value: "wetlands_supplement",
    contentType: "boolean",
    title:
      "Does your country apply the 2013 Wetlands Supplement (WS13)/2019 Refinement (R19)?",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: 6 },
      { label: "No", value: "no", goto: 6 },
    ],
  },
  {
    id: 6,
    value: "redd_plus",
    title: "Is your country engaging in REDD+?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: 7 },
      { label: "No", value: "no", goto: "done" },
    ],
  },
  {
    id: 7,
    value: "frl_frel",
    title:
      "Has your country submitted a Forest Reference Level (FRL)/ Forest Reference Emission Levels (FREL)?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: "done" },
      { label: "No", value: "no", goto: "done" },
    ],
  },
  {
    id: 8,
    value: "emissions_removals",
    title:
      "Are emissions and removals from BCE(s) included in your country’s NDC?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: 6 },
      { label: "No", value: "no", goto: 6 },
    ],
  },
  {
    id: 9,
    value: "ndc_plan",
    title: "Do you have an NDC Implementation Plan?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: 6 },
      { label: "No", value: "no", goto: 6 },
    ],
  },
  {
    id: 10,
    value: "plan_governance",
    title:
      "Does your plan incorporate appropriate institutional/governance frameworks?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: 6 },
      { label: "No", value: "no", goto: 6 },
    ],
  },
  {
    id: 11,
    value: "blue_carbon_finance",
    title:
      "Does your country have a blue carbon finance and investment framework in place?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: 6 },
      { label: "No", value: "no", goto: 6 },
    ],
  },
  {
    id: 12,
    value: "specific_tools",
    title: "Have you operationalized specific funding tools?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: 6 },
      { label: "No", value: "no", goto: 6 },
    ],
  },
  {
    id: 13,
    value: "carbon_markets",
    title:
      "Does your country intend to use carbon markets as a means of investment?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: "yes", goto: 6 },
      { label: "No", value: "no", goto: 6 },
    ],
  },
];
