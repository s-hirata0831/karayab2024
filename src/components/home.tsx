import './App.css'
import DrawerAppBar from "../Header.tsx" 
import Chip from '@mui/material/Chip';
import { CssBaseline } from '@mui/material';

function home() {
  return (
    <div className='App'>
      <CssBaseline />
      <div className='loading'>
        <img className='loadingLogo' src='./src/assets/lodadingView.png' alt="KARAYAB" />
      </div>
      <DrawerAppBar />
      <div className='headerArea' id='home'>
        <h1 className='title'>舞鶴の学生よ<br/>殻を破れ！</h1>
        <div className='videoArea'>
          <video className='video' poster="./src/assets/poster.png" playsInline muted autoPlay loop>
            <source src="./src/assets/topView.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
      <div className='container'>
        <div className='firstArea'>
          <h1 className='headerFont'>みんなの好きが集まる場所</h1>
          <h3>特技・好きなことはあるけど人前に出せるほどでもない...<br/>みんなに見てもらいたいけどそんな機会ないしなぁ...<br/>そんなあなたに人前で披露し褒められ応援される経験を！<br/>KARAYABは自信を持って堂々と活動する第一歩を提供します。</h3>
        </div>
        <div className='secondArea'>
          <Chip label=" " className='semiTitle' style={{margin:'0 auto', alignItems: 'center'}} />
        </div>
      </div>
    </div>
  )
}

export default home
