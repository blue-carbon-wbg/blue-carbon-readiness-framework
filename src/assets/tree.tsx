import { BlueCarbonTreeItem } from "../types";
import { ReactComponent as HaveBcesIcon } from "../assets/static/p1a_assets/have_bces2.svg";
import { ReactComponent as EstBcesIcon } from "../assets/static/p1a_assets/established_bce.svg";
import { ReactComponent as GhgInventory } from "../assets/static/p1b_assets/ghg_inventory.svg";
import { ReactComponent as WetlandsSupplement } from "../assets/static/p1b_assets/wetlands_supplement.svg";
import { ReactComponent as ReddPlus } from "../assets/static/p1b_assets/redd_reference.svg";
import { ReactComponent as FREL } from "../assets/static/p1b_assets/frl_frel.svg";
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
    buttons: [
      { label: "Start over", value: "restart", goto: "/", type: "root" },
    ],
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
      { label: "Yes", value: "confirm", goto: 2, type: "confirm" },
      { label: "No, none of these", value: false, goto: 3, type: "next" },
    ],
    icon: <HaveBcesIcon />,
  },
  {
    id: 2,
    prev: 1,
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
    buttons: [
      { label: "Continue", value: "continue", goto: "done", type: "root" },
    ],
    icon: <EstBcesIcon />,
  },
  {
    id: 3,
    prev: 1,
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
      { label: "Yes", value: "yes", goto: 2, type: "next" },
      { label: "No, none of these", value: false, goto: 0, type: "next" },
    ],
    icon: <EstBcesIcon />,
  },
  {
    id: 4,
    value: "economic_valuation",
    contentType: "boolean",
    title: "Are BCEs included in your country’s GHG inventory?",
    options: [],
    buttons: [
      { label: "Yes", value: true, goto: 5, type: "next" },
      { label: "No", value: false, goto: 5, type: "next" },
    ],
    icon: <GhgInventory />,
  },
  {
    id: 5,
    prev: 4,
    value: "wetlands_supplement",
    contentType: "boolean",
    title:
      "Does your country apply the 2013 Wetlands Supplement (WS13)/2019 Refinement (R19)?",
    options: [],
    buttons: [
      { label: "Yes", value: true, goto: 6, type: "next" },
      { label: "No", value: false, goto: 6, type: "next" },
    ],
    icon: <WetlandsSupplement />,
  },
  {
    id: 6,
    prev: 5,
    value: "redd_plus",
    title: "Is your country engaging in REDD+?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: true, goto: 7, type: "next" },
      { label: "No", value: false, goto: "done", type: "root" },
    ],
    icon: <ReddPlus />,
  },
  {
    id: 7,
    prev: 6,
    value: "frl_frel",
    title:
      "Has your country submitted a Forest Reference Level (FRL)/ Forest Reference Emission Levels (FREL)?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: true, goto: "done", type: "root" },
      { label: "No", value: false, goto: "done", type: "root" },
    ],
    icon: <FREL />,
  },
  {
    id: 8,
    value: "emissions_removals",
    title:
      "Are emissions and removals from BCE(s) included in your country’s NDC?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: true, goto: 6, type: "next" },
      { label: "No", value: false, goto: 6, type: "next" },
    ],
  },
  {
    id: 9,
    value: "ndc_plan",
    title: "Do you have an NDC Implementation Plan?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: true, goto: 6, type: "next" },
      { label: "No", value: false, goto: 6, type: "next" },
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
      { label: "Yes", value: true, goto: 6, type: "next" },
      { label: "No", value: false, goto: 6, type: "next" },
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
      { label: "Yes", value: true, goto: 6, type: "next" },
      { label: "No", value: false, goto: 6, type: "next" },
    ],
  },
  {
    id: 12,
    value: "specific_tools",
    title: "Have you operationalized specific funding tools?",
    contentType: "boolean",
    options: [],
    buttons: [
      { label: "Yes", value: true, goto: 6, type: "next" },
      { label: "No", value: false, goto: 6, type: "next" },
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
      { label: "Yes", value: true, goto: 6, type: "next" },
      { label: "No", value: false, goto: 6, type: "next" },
    ],
  },
];
