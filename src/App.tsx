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

const home: React.FunctionComponent = () => {
  window.scrollTo({top: 0, behavior: "instant"})

  return (
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
        <h1><span className='spot'>舞鶴赤レンガパーク5号棟</span><br />2024.6.16(Sun)<br/><span className='underDay'>開催！</span></h1>
      </div>
      <div className='concept'>
        <div className='firstArea'>
          <span className='headerFont'>
          <h1>みんなの好きが集まる場所</h1>
          </span>
          <h3>高校生が自分の得意を発表できるイベント！<br/>歌、ダンス、写真、イラスト、キッチンカー、フリマなどなど。<br/>自分達の好きなことややってみたいことを<br/>舞鶴の高校生で作り上げる<br/>なんでもありのイベントで表現します！</h3><br />
          <a target="_blank" href="https://docs.google.com/viewer?url=https%3A%2F%2Fraw.githubusercontent.com%2Fs-hirata0831%2Fkarayab2024%2Fmain%2Fsrc%2Ftmp%2FKARAYAB%E3%83%81%E3%83%A9%E3%82%B7PDF.pdf&embedded=true">チラシ</a>
          {/*<h3>特技・好きなことはあるけど人前に出せるほどでもない...<br/>みんなに見てもらいたいけどそんな機会ないしなぁ...<br/>そんなあなたに人前で披露し褒められ応援される経験を！<br/>KARAYABは自信を持って堂々と活動する第一歩を提供します。</h3>*/}
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
                数十組の出演高校生情報も随時更新予定です。
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
    </div>
  )
}

export default home
