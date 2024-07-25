import { CssBaseline } from '@mui/material';
import './Report.css';

const Report: React.FunctionComponent = () =>{
    window.scrollTo({top: 0, behavior: "instant"})

    return(
        <>
            <CssBaseline />
            <h1>こんにちは</h1>
        </>
    )
}

export default Report;