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
import maizuru from './tmp/maizuru.png';
import student from './tmp/student.jpg';
import event from './tmp/event.jpg';
import leaders from './tmp/leaders.jpeg';
import poster from './tmp/poster.jpeg';
import timeTable from './tmp/timeTable.jpg';
import layout from './tmp/layout.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';
import Alert from '@mui/material/Alert';
import { StyledEngineProvider } from '@mui/material';
import Link from '@mui/material/Link';
import Iframe from "react-iframe";
import sponcer from './tmp/sponcer.jpg';

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
      <div className='day'>
        <h1><span className='spot'>舞鶴赤レンガパーク5号棟</span><br /><span className="mainDay">2024.6.16(Sun)</span><br/><span className='underDay'>開催！</span></h1>
      </div>
      <div className='poster'>
        <CardMedia component="img" width="600" image={poster} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
      </div>
      <div className='concept'>
        <div className='firstArea'>
          <span className='headerFont'>
          <h1>みんなの好きが集まる場所</h1>
          </span>
          <h3>高校生が自分の得意を発表できるイベント！<br/>歌、ダンス、写真、イラスト、キッチンカー、フリマなどなど。<br/>自分達の好きなことややってみたいことを<br/>舞鶴の高校生で作り上げる<br/>なんでもありのイベントで表現します！</h3><br />
          <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'space-evenly'} direction={'row'} style={{marginTop: '10px', marginBottom: '10px'}}>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} md={4}>
              <h2>ステージ発表タイムテーブル</h2>
              <NavLink to="/contact">
              <CardMedia component="img" width="600" image={timeTable} alt="timeTable" sx={{ maxHeight: 345, objectFit: 'contain' }} style={{marginBottom: '10px'}} />
              </NavLink>
            </Grid>
            <Grid item xs={12} md={4}>
              <h2>会場配置図</h2>
              <NavLink to="/contact">
              <CardMedia component="img" width="600" image={layout} alt="layout" sx={{ maxHeight: 345, objectFit: 'contain' }} />
              </NavLink>
            </Grid>
            <Grid item xs={12} md={2} />
          </Grid>
          <Grid container direction="column" justifyContent="flex-end" alignItems="center">
          <Link href="https://www.instagram.com/karayab_2024">
          <Alert variant='outlined' icon={<InstagramIcon fontSize="inherit" />} severity='success' style={{marginLeft: '5px', marginRight: '5px'}}>
           Instagramで情報発信中！当日インスタライブも実施予定！
          </Alert>
          </Link>
          </Grid>
        </div>
      </div>
      <Grid container spacing={3} alignItems={'flex-start'} justifyContent={'space-evenly'} direction={'row'} style={{marginTop: '10px', marginBottom: '10px'}}>
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
                一緒にKARAYABを盛り上げませんか？
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
            <CardMedia
              component="img"
              alt="leaders"
              height="180"
              image={leaders}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontFamily={'"Zen Kurenaido"'}>
                運営情報
              </Typography>
              <Typography variant="body2" color="text.secondary" fontFamily={'"BIZ UDPGothic"'}>
                イベント運営の裏側やお知らせを掲載します。<br />
                運営も舞鶴の高校生が主体となって盛り上げていきます！
              </Typography>
            </CardContent>
            <Tooltip disableFocusListener title="現在準備中です。しばらくお待ちください。" placement="left-start">
            <CardActions>
              <Button size="small">準備中</Button>
            </CardActions>
            </Tooltip>
          </Card>
        </Grid>
      </Grid>
      <div className='concept'>
        <div className='firstArea'>
          <span className='headerFont'>
          <h1>スポンサー様</h1>
          </span>
          <h3>ご協賛いただきありがとうございます！</h3>
          <Grid container direction="column" justifyContent="flex-end" alignItems="center">
            <CardMedia component="img" width="600" image={sponcer} alt="layout" sx={{objectFit: 'contain' }} style={{width: '70vw'}} />
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
