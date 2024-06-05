import { StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import './Pdf.css'

const PanfPdf: React.FunctionComponent = () => {
    window.scrollTo({top: 0, behavior: "instant"})
    const encodeUrl = 'https%3A%2F%2Fraw.githubusercontent.com%2Fs-hirata0831%2Fkarayab2024%2Fmain%2Fsrc%2Ftmp%2FKARAYAB%E3%83%81%E3%83%A9%E3%82%B7PDF.pdf';
    const url = `https://docs.google.com/viewer?url=${encodeUrl}&embedded=true`;
    return(
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <iframe height="1000" src={url} />
            <Link href='https://raw.githubusercontent.com/s-hirata0831/karayab2024/main/src/tmp/KARAYABチラシPDF.pdf'>
            <h2>KARAYABチラシ.pdf</h2>
            </Link>
            <NavLink to="/">Homeへ戻る</NavLink>
        </StyledEngineProvider>
    )
}

export default PanfPdf