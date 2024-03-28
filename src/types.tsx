export interface BCButton {
  label: string;
  value: string;
  goto: number | string;
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
}

export interface StateData {
  id: number;
  value: any[];
}
