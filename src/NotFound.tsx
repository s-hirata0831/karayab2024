import { StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { NavLink } from 'react-router-dom';
import './NotFound.css'

const NotFound: React.FunctionComponent = () => {
    window.scrollTo({top: 0, behavior: "instant"})
    return(
        <StyledEngineProvider injectFirst>
            <CssBaseline />
            <div className="body">
            <h1>404 NotFound</h1>
            <p>お探しのページは見つかりませんでした。</p>
            <NavLink to="/">Homeへ戻る</NavLink>
            </div>
        </StyledEngineProvider>
    )
}

export default NotFound