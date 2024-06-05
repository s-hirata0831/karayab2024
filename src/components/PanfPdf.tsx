import { StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const PanfPdf: React.FunctionComponent = () => {
    const encodeUrl = '..%2Ftmp%2FKARAYAB%E3%83%81%E3%83%A9%E3%82%B7PDF.pdf';
    const url = `https://docs.google.com/viewer?url=${encodeUrl}&embedded=true`;
    return(
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <iframe width="100%" height="100%" src={url} />
        </StyledEngineProvider>
    )
}

export default PanfPdf