export interface Item {
  id: number;
  type:
    | "pathway"
    | "action"
    | "complement"
    | "complete"
    | "redd"
    | "private"
    | "none";
  options: Option[];
}

export interface Option {
  name: string;
  goto: number;
}
