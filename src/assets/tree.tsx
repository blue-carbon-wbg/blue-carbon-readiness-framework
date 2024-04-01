import { BlueCarbonTree } from "../types";
import { ReactComponent as HaveBcesIcon } from "../assets/static/p1a_assets/have_bces2.svg";
import { ReactComponent as EstBcesIcon } from "../assets/static/p1a_assets/established_bce.svg";
import { ReactComponent as GhgInventory } from "../assets/static/p1b_assets/ghg_inventory.svg";
import { ReactComponent as WetlandsSupplement } from "../assets/static/p1b_assets/wetlands_supplement.svg";
import { ReactComponent as ReddPlus } from "../assets/static/p1b_assets/redd_reference.svg";
import { ReactComponent as FREL } from "../assets/static/p1b_assets/frl_frel.svg";

export const dataStructureAlt: BlueCarbonTree[] = [
  {
    pillar: "1A",
    title: "Data and Analytics",
    subtitle: "Evaluate Blue Carbon Actions",
    subicon: "A",
    data: [
      {
        id: 1,
        value: "have_ecosystems",
        title: (
          <span>
            Does your country <u>currently</u> have any of the following Blue
            Carbon ecosystems (BCEs)?
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
          {
            label: "Continue",
            value: "continue",
            goto: "p/1a/done",
            type: "root",
          },
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
    ],
  },
  {
    pillar: "1B",
    title: "Data and Analytics",
    subtitle: "Assess GHG Inventories",
    subicon: "B",
    data: [
      {
        id: 1,
        value: "bce_inventory",
        contentType: "boolean",
        title: "Are BCEs included in your country’s GHG inventory?",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: 2, type: "next" },
          { label: "No", value: false, goto: 2, type: "next" },
        ],
        icon: <GhgInventory />,
      },
      {
        id: 2,
        prev: 1,
        value: "wetlands_supplement",
        contentType: "boolean",
        title:
          "Does your country apply the 2013 Wetlands Supplement (WS13)/2019 Refinement (R19)?",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: 3, type: "next" },
          { label: "No", value: false, goto: 3, type: "next" },
        ],
        icon: <WetlandsSupplement />,
      },
      {
        id: 3,
        prev: 2,
        value: "redd_plus",
        title: "Is your country engaging in REDD+?",
        contentType: "boolean",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: 4, type: "next" },
          { label: "No", value: false, goto: "p/1b/done", type: "root" },
        ],
        icon: <ReddPlus />,
      },
      {
        id: 4,
        prev: 3,
        value: "frl_frel",
        title:
          "Has your country submitted a Forest Reference Level (FRL)/ Forest Reference Emission Levels (FREL)?",
        contentType: "boolean",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: "p/1b/done", type: "root" },
          { label: "No", value: false, goto: "p/1b/done", type: "root" },
        ],
        icon: <FREL />,
      },
    ],
  },
  {
    pillar: "2",
    title: "Policy & Institutions",
    subtitle: "NDC Commitments & Implementation",
    data: [
      {
        id: 1,
        value: "emissions_removals",
        title:
          "Are emissions and removals from BCE(s) included in your country’s NDC?",
        contentType: "boolean",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: 2, type: "next" },
          { label: "No", value: false, goto: 2, type: "next" },
        ],
      },
      {
        id: 2,
        value: "ndc_plan",
        title: "Do you have an NDC Implementation Plan?",
        contentType: "boolean",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: 3, type: "next" },
          { label: "No", value: false, goto: 3, type: "next" },
        ],
        prev: 1,
      },
      {
        id: 3,
        value: "plan_governance",
        title:
          "Does your plan incorporate appropriate institutional/governance frameworks?",
        contentType: "boolean",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: "p/2/done", type: "root" },
          { label: "No", value: false, goto: "p/2/done", type: "root" },
        ],
        prev: 2,
      },
    ],
  },
  {
    pillar: "3",
    title: "Finance",
    subtitle: "Leverage Blue Carbon Finance",
    data: [
      {
        id: 1,
        value: "blue_carbon_finance",
        title:
          "Does your country have a blue carbon finance and investment framework in place?",
        contentType: "boolean",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: 2, type: "next" },
          { label: "No", value: false, goto: 2, type: "next" },
        ],
      },
      {
        id: 2,
        value: "specific_tools",
        title: "Have you operationalized specific funding tools?",
        contentType: "boolean",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: 3, type: "next" },
          { label: "No", value: false, goto: 3, type: "next" },
        ],
        prev: 1,
      },
      {
        id: 3,
        value: "carbon_markets",
        title:
          "Does your country intend to use carbon markets as a means of investment?",
        contentType: "boolean",
        options: [],
        buttons: [
          { label: "Yes", value: true, goto: "p/3/done", type: "root" },
          { label: "No", value: false, goto: "p/3/done", type: "root" },
        ],
        prev: 2,
      },
    ],
  },
];
