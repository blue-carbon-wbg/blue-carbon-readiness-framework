import { extendTheme } from "@mui/joy/styles";

const customTheme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        success: {
          solidBg: "#2DA44E",
          solidHoverBg: "#2C974B",
          solidActiveBg: "#298E46",
        },
        neutral: {
          outlinedBg: "#F6F8FA",
          outlinedHoverBg: "#F3F4F6",
          outlinedActiveBg: "rgba(238, 239, 242, 1)",
          outlinedBorder: "rgba(27, 31, 36, 0.15)",
        },
        pathway: {
          solidBg: "#A5E1FF",
        },
        action: {
          solidBg: "#9ABAE0",
          outlinedBg: "#CCDCEF",
          outlinedBorder: "#9ABAE0",
        } as any,
        complementary: {
          solidColor: "#000",
          solidBg: "#424016", // #43400E
          outlinedBorder: "#43400E",
          outlinedBg: "#E2E2DA",
        } as any,
        complete: {
          solidBg: "#97DFD4",
          solidHoverBg: "#66cfbf",
          solidActiveBg: "#40c4b0",
        } as any,
        focusVisible: "rgba(3, 102, 214, 0.3)",
      },
    },
  },
  focus: {
    default: {
      outlineWidth: "3px",
    },
  },
  fontFamily: {
    body: "SF Pro Text, var(--gh-fontFamily-fallback)",
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          borderRadius: "6px",
          boxShadow: "0 1px 0 0 rgba(27, 31, 35, 0.04)",
          transition: "80ms cubic-bezier(0.33, 1, 0.68, 1)",
          transitionProperty: "color,background-color,box-shadow,border-color",
          ...(ownerState.size === "md" && {
            fontWeight: 600,
            minHeight: "32px",
            fontSize: "14px",
            "--Button-paddingInline": "1rem",
          }),
          ...(ownerState.color === "success" &&
            ownerState.variant === "solid" && {
              "--gh-palette-focusVisible": "rgba(46, 164, 79, 0.4)",
              border: "1px solid rgba(27, 31, 36, 0.15)",
              "&:active": {
                boxShadow: "inset 0px 1px 0px rgba(20, 70, 32, 0.2)",
              },
            }),
          ...(ownerState.color === "neutral" &&
            ownerState.variant === "outlined" && {
              "&:active": {
                boxShadow: "none",
              },
            }),
        }),
      },
    },
  },
});

export default customTheme;
