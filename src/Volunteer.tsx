import { CssBaseline } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CelebrationIcon from '@mui/icons-material/Celebration';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import volunteer from './tmp/event.jpg';
import ChatIcon from '@mui/icons-material/Chat';
import CardMedia from '@mui/material/CardMedia';
import Alert from '@mui/material/Alert';
import './App.css'

const Volunteer: React.FunctionComponent = () =>{
    window.scrollTo({top: 0, behavior: "instant"})

    return(
        <>
            <CssBaseline />
            <div className="student">
                <div className="subject">
                    <CardMedia component="img" width="600" image={volunteer} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    <h3 className="h3Student"><span className="subjectUnder">運営ボランティア<br />(高校生限定)</span></h3>
                </div>
                <Grid container direction="column" justifyContent="center" alignItems="center" style={{marginTop: '50px'}}>
                <Alert severity='warning'>
                    <Typography fontFamily={'"BIZ UDPGothic"'}>運営ボランティアの募集は終了しました。<br />募集要項をご覧になれます。</Typography>
                </Alert>
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                <Timeline position="right" sx={{[`& .${timelineItemClasses.root}:before`]: {flex: 0, padding: 0},}}>
                    <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "#f50057"}}>
                        <FavoriteBorderIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Typography variant="h6" component="span" fontFamily={'"Zen Kurenaido"'}>
                            興味がある！
                        </Typography>
                        <Typography fontFamily={'"BIZ UDPGothic"'}>
                            まずは興味を持っていただきありがとうございます！<br />
                            KARAYABは舞鶴の高校生が自分の得意を披露できるイベントです！<br />
                            発表をする高校生を支える高校生を大募集しています。<br />
                            ↓ボランティア内容は以下のようなことを予定しています↓<br />
                            ・ステージ発表補助<br />
                            ・会場設営/撤去
                            　などなど
                        </Typography>
                    </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: "#33eb91"}}>
                                <HowToRegIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px',px: 2}}>
                            <Typography variant="h6" component="span" fontFamily={'"Zen Kurenaido"'}>
                                応募する！
                            </Typography>
                            <Typography fontFamily={'"BIZ UDPGothic"'}>
                                KARAYAB2024 ボランティア<br />
                                イベント日時：2024年6月16日(日)<br />
                                会場：舞鶴赤レンガパーク5号棟<br />
                                対象：舞鶴にゆかりのある高校生<br />
                                下のボタンをクリックして応募に進んでください。<br />
                                (GoogleFormにアクセスします。)
                            </Typography>
                            <Chip label="募集終了" style={{marginTop: "10px"}} />
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: "#00a152"}}>
                                <ChatIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px',px: 2}}>
                            <Typography variant="h6" component="span" fontFamily={'"Zen Kurenaido"'}>
                                応募者に連絡
                            </Typography>
                            <Typography fontFamily={'"BIZ UDPGothic"'}>
                                ボランティア応募者には詳細に関する連絡を差し上げる予定です。<br />
                                連絡については、行った際に当サイトでも告知させていただきます。<br />
                                質問などは、<a target='_blank' href="mailto:karayab2024@gmail.com">karayab2024@gmail.com</a>まで
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: "#b2a300"}}>
                                <CelebrationIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px',px: 2}}>
                            <Typography variant="h6" component="span" fontFamily={'"Zen Kurenaido"'}>
                                イベント当日！
                            </Typography>
                            <Typography fontFamily={'"BIZ UDPGothic"'}>
                                みんなで殻を破ろう！
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                </Grid>
            </div>
        </>
    )
}

export default Volunteer;