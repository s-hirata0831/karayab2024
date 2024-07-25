import React from 'react';
import './App.css'
import { NavLink } from 'react-router-dom'
import { CssBaseline, Grid } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import loadingLogo from './tmp/lodadingView.png';
import maizuru from './tmp/after.jpeg';
import student from './tmp/student.jpg';
import event from './tmp/event.jpg';
import leaders from './tmp/leaders.jpeg';
import poster from './tmp/poster.jpeg';
import { StyledEngineProvider } from '@mui/material';
import Iframe from "react-iframe";
import sponcer from './tmp/sponcer.jpg';
import specialThanks from './tmp/specialThanks.jpg';
import radio from './tmp/radio.jpg';

const home: React.FunctionComponent = () => {
  window.scrollTo({top: 0, behavior: "instant"})

  return (
    <StyledEngineProvider injectFirst>
    <div className='App'>
      <CssBaseline />
      <div className='loading'>
        <img className='loadingLogo' src={loadingLogo} alt="KARAYAB" />
      </div>
      <div className='headerArea' id='home'>
        <div className='title'>
          <span className='word'>舞鶴の学生よ</span>
          <span className='word'>高校生よ</span>
          <span className='word'>高専生よ</span>
          <br/>
          <span className='word2'>殻を破れ！</span>
        </div>
        <div className='videoArea'>
          <img src={maizuru} alt="Maizuru" className='video' />
        </div>
      </div>
      <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'space-evenly'} direction={'row'} style={{marginTop: '10px', marginBottom: '10px'}}>
      <Grid item xs={12} md={4} />
      <Grid item xs={12} md={4}>
      <div className='day'>
        <h1><span className='spot'>舞鶴赤レンガパーク5号棟</span><br /><span className="mainDay">2024.6.16(Sun)</span><br/><span className='underDay'>1500名超の皆様<br />ご来場ありがとうございました！</span></h1>
      </div>
      </Grid>
      <Grid item xs={12} md={4} />
      </Grid>
      <div className='poster'>
        <CardMedia component="img" width="600" image={poster} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
      </div>
      <div className='concept'>
        <div className='firstArea'>
          <span className='headerFont'>
          <h1>みんなの好きが集まる場所</h1>
          </span>
          <h3>高校生が自分の得意を発表できるイベント！<br/>歌、ダンス、写真、イラスト、キッチンカー、フリマなどなど。<br/>自分達の好きなことややってみたいことを<br/>舞鶴の高校生で作り上げる<br/>なんでもありのイベントで表現します！</h3><br />
        </div>
      </div>
      <Grid container spacing={3} alignItems={'flex-start'} justifyContent={'space-evenly'} direction={'row'} style={{marginTop: '10px', marginBottom: '10px'}}>
      <Grid item xs={12} md={2} />
          <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }} style={{margin: '0 auto'}}>
            <CardMedia component="img" height="180" image={maizuru} alt="report the event" />
              <CardContent>
                <Typography component="div" variant="h5" fontFamily={'"Zen Kurenaido"'}>
                  KARAYABイベントレポート
                </Typography>
                <Typography component="div" variant="subtitle1" color="text.secondary" fontFamily={'"BIZ UDPGothic"'} >
                  イベント開催の様子をレポート！
                </Typography>
              </CardContent>
          </Card>
          </Grid>
          <Grid item xs={12} md={4}>
          <Card sx={{ maxWidth: 345 }} style={{margin: '0 auto'}} >
            <NavLink to="/radio">
            <CardMedia component="img" height="180" image={radio} alt="report the event" />
            </NavLink>
              <CardContent>
                <Typography component="div" variant="h5" fontFamily={'"Zen Kurenaido"'}>
                  ラジオ出演
                </Typography>
                <Typography component="div" variant="subtitle1" color="text.secondary" fontFamily={'"BIZ UDPGothic"'} >
                  FMまいづるに参加高校生が登場！
                </Typography>
              </CardContent>
              <CardActions>
              <NavLink to="/radio">
                <Button size="small">詳細を見る</Button>
              </NavLink>
              </CardActions>
          </Card>
          </Grid>
          <Grid item xs={12} md={2} />
        <Grid item xs={12} md={4} display={'inline-flex'}>
          <Card sx={{ maxWidth: 345 }} style={{margin: '0 auto'}} >
            <NavLink to="/contact">
            <CardMedia
              component="img"
              alt="student"
              height="180"
              image={student}
            />
            </NavLink>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily={'"Zen Kurenaido"'}>
                高校生
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily={'"BIZ UDPGothic"'}>
                参加高校生の募集は終了しました。<br />
                募集要項をご覧になれます。<br />
                殻を破る数十組の出演高校生情報もご覧になれます！
              </Typography>
            </CardContent>
            <CardActions>
              <Chip icon={<EventAvailableIcon />} label="募集終了" />
              <NavLink to="/contact">
                <Button size="small">詳細を見る</Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} display={'inline-flex'}>
          <Card sx={{ maxWidth: 345 }} style={{margin: '0 auto'}} >
            <NavLink to="/volunteer">
            <CardMedia
              component="img"
              alt="event"
              height="180"
              image={event}
            />
            </NavLink>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily={'"Zen Kurenaido"'}>
                ボランティア募集(高校生)
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily={'"BIZ UDPGothic"'}>
                KARAYABイベント当日に運営を一緒にしてくれる高校生を募集します！<br />
                一緒にKARAYABを盛り上げませんか？<br />
                (募集は終了しました。)
              </Typography>
            </CardContent>
            <Tooltip disableFocusListener title="高校生ボランティア募集中！" placement="left-start">
            <CardActions>
              <Chip icon={<EventAvailableIcon />} label="募集終了" />
              <NavLink to="/volunteer">
                <Button size="small">詳細を見る</Button>
              </NavLink>
            </CardActions>
            </Tooltip>
          </Card>
        </Grid>
        <Grid item xs={12} md={4} display={'inline-flex'}>
          <Card sx={{ maxWidth: 345 }} style={{margin: '0 auto'}} >
            <NavLink to="/performer">
            <CardMedia
              component="img"
              alt="leaders"
              height="180"
              image={leaders}
            />
            </NavLink>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily={'"Zen Kurenaido"'}>
                運営情報
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily={'"BIZ UDPGothic"'}>
                イベント運営の裏側やお知らせを掲載します。<br />
                運営も舞鶴の高校生が主体となって盛り上げていきます！<br />
                運営：舞鶴高校生リーダーズサミット
              </Typography>
            </CardContent>
            <CardActions>
              <NavLink to="/performer">
              <Button size="small">詳細を見る</Button>
              </NavLink>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <div className='concept'>
        <div className='firstArea'>
          <span className='headerFont'>
          <h1>スポンサー様</h1>
          </span>
          <h3>ご協賛いただきありがとうございました！</h3>
          <Grid container direction="column" justifyContent="flex-end" alignItems="center">
            <h3 className='sp'>特別協力(音響協力)</h3>
            <CardMedia component="img" image={specialThanks} alt="layout" sx={{objectFit: 'contain' }} style={{width: '40vw', margin: 0}} />
            <h3 className='sp'>協賛</h3>
            <CardMedia component="img" image={sponcer} alt="layout" sx={{objectFit: 'contain' }} style={{width: '70vw'}} />
          </Grid>
        </div>
      </div>
      <Grid container direction="column" justifyContent="flex-end" alignItems="center" style={{marginTop: "10vw"}} >
      <Iframe
        url={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d400.3715954509702!2d135.3845934069497!3d35.47434504750834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fff8853c20fffff%3A0x3b901c196550c110!2z6LWk44KM44KT44GM44Kk44OZ44Oz44OI44Ob44O844OrICjotaTjgozjgpPjgYwgNeWPt-ajnyko5pen6Iie6ba05rW36LuN6LuN6ZyA6YOo56ys5LiJ5rC06Zu35bqrKQ!5e0!3m2!1sja!2sjp!4v1718383640400!5m2!1sja!2sjp"}
        width="70%"
        height='70px'
        className="mapArea"
      />
      </Grid>
    </div>
    </StyledEngineProvider>
  )
}

export default home
