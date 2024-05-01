import { Box, Button, Stack, Typography } from "@mui/joy";
import { MainContentCard } from "../components/MainContentCard";
import { ReactComponent as FinishedIcon } from "../assets/static/youre_done.svg";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { DocumentBase } from "../components/PdfVersion";
import { useAppContext } from "../context";
import { Download } from "@mui/icons-material";
export function Fin() {
  const {
    state: [data, setData],
    structure,
  } = useAppContext();

  return (
    <Stack
      sx={{
        flexBasis: "1000px",
        flexGrow: 0,
        display: "flex",
        marginTop: 16,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          border: "2px solid #d1f1ed",
          borderRadius: 15,
          padding: 3,
          backgroundColor: "#f8f7f7",
        }}
        direction="row-reverse"
      >
        <Box>
          <Typography level="h3" marginBottom={1}>
            Congratulations!
          </Typography>
          <Typography level="body-lg" sx={{ fontWeight: 500 }}>
            You've reached the end of the Blue Carbon Finance Assessment Tool.
            Take a look at the{" "}
            <a href="https://www.worldbank.org/en/publication/unlocking-blue-carbon-development">
              main report
            </a>{" "}
            for more information, and don't forget to make use of the{" "}
            <a href="checklists/checklists_all.pdf">checklists</a>{" "}
          </Typography>
          <PDFDownloadLink
            document={<DocumentBase data={data} />}
            fileName="blueCarbonAssessment.pdf"
          >
            {({ blob, url, loading, error }) => (
              <Button
                loading={!!loading}
                loadingPosition="start"
                sx={{ marginTop: 1 }}
                fullWidth
                startDecorator={<Download />}
              >
                Download the customized recommendations for your country
              </Button>
            )}
          </PDFDownloadLink>
        </Box>
        <Box sx={{ mr: 2 }}>
          <FinishedIcon />
        </Box>
      </Stack>
    </Stack>
  );
}
