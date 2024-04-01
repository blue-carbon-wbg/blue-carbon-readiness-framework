import { PaletteRange } from "@mui/joy";

export * from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  interface ColorPalettePropOverrides {
    // apply to all Joy UI components that support `color` prop
    pathway: true;
    action: true;
    complementary: true;
    complete: true;
  }
  interface Palette {
    pathway: PaletteRange;
    action: PaletteRange;
    complementary: PaletteRange;
    complete: PaletteRange;
  }
}
