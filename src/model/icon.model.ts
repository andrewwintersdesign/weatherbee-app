import { FunctionComponent } from "react";

export type IconTypes = { [key in Icon]: FunctionComponent };

export type Icon =
  | "clearSkies"
  | "mostlyClear"
  | "partlyCloudy"
  | "overcast"
  | "lightDrizzle"
  | "moderateDrizzle"
  | "heavyDrizzle"
  |"fog"
  | "";
