import { CssBaseline } from '@mui/material';
import leaders from './tmp/leaders.jpeg';
import CardMedia from '@mui/material/CardMedia';
import lp02 from './tmp/lp02.jpeg';
import lp03 from './tmp/lp03.jpeg';
import lp04 from './tmp/lp04.jpeg';
import lp05 from './tmp/lp05.jpeg';
import lp06 from './tmp/lp06.jpeg';
import lp07 from './tmp/lp07.jpeg';
import lp08 from './tmp/lp08.jpeg';
import lp09 from './tmp/lp09.jpeg';
import lp10 from './tmp/lp10.jpeg';
import lp11 from './tmp/lp11.jpeg';
import lp12 from './tmp/lp12.jpeg';
import lp13 from './tmp/lp13.jpeg';
import lp14 from './tmp/lp14.jpeg';
import Grid from "@mui/material/Grid";
import './App.css'

const Performer: React.FunctionComponent = () =>{
    window.scrollTo({top: 0, behavior: "instant"})

    return(
        <>
            <CssBaseline />
            <div className="student">
                <div className="subject">
                    <CardMedia component="img" width="600" image={leaders} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    <h3 className="h3Student"><span className="subjectUnder">運営情報</span></h3>
                </div>
                <h3 className={"studentArea"}>KARAYABは舞鶴高校生リーダーズサミットが運営します。<br />舞鶴市内全ての高校・高専の学生が集まって活動しています。</h3>
                <div className={"scheduleArea"}>
                  <h2>リーダーズサミットの様子</h2>
                  <h3 className={"studentArea"}>高校生が集まってKARAYABなどについて話し合う会議のことをリーダーズサミットと呼んでいます。<br />その様子を少しご紹介します。</h3>
                  <Grid container spacing={2} alignItems={'center'} justifyContent={'space-evenly'} direction={'row'} style={{marginTop: '10px', marginBottom: '10px'}} className={'scheduleArea'}>
                    <Grid item xs={12} md={1.5} />
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={leaders} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp02} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp03} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={1.5} />
                    <Grid item xs={12} md={1.5} />
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp04} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp05} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp06} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={1.5} />
                    <Grid item xs={12} md={1.5} />
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp07} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp08} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp09} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={1.5} />
                    <Grid item xs={12} md={1.5} />
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp10} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp11} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp12} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={1.5} />
                    <Grid item xs={12} md={3} />
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp13} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3}>
                      <CardMedia component="img" width="600" image={lp14} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={3} />
                  </Grid>
                </div>
            </div>
        </>
    )
}

export default Performer;