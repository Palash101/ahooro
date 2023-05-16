import { Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress"

export default function PageLoader() {
    return (
        <Box
            sx={{
                position: "fixed",
                top: "0",
                right: "0",
                left: "0",
                bottom: "0",
                zIndex: "9999",
                textAlign: "center",
            }}
        >
            <CircularProgress sx={{ position: "absolute", top: "50%" }} />
        </Box>
    )
}