export interface BCButton {
  label: string;
  value: string | boolean;
  goto: number | string;
  type: "yes" | "no" | "next" | "back" | "root" | "confirm";
}

export interface BCOptionGroup {
  value: string;
  label: string;
  options: BCOption[];
}

export interface BCOption {
  label: string;
  value: string | number;
}

export interface BlueCarbonTreeItem {
  id: number;
  contentType: string;
  value: string;
  title: React.ReactNode;
  buttons: BCButton[];
  options: BCOptionGroup[];
  icon?: React.ReactNode;
  prev?: number;
}

export interface StateData {
  value: string;
  data: any[];
}

export interface BlueCarbonTree {
  pillar: string;
  title?: string;
  subtitle?: string;
  subicon?: React.ReactNode;
  data: BlueCarbonTreeItem[];
}
