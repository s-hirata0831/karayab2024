import { CssBaseline } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LaunchIcon from '@mui/icons-material/Launch';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import student from './tmp/student.jpg';
import ChatIcon from '@mui/icons-material/Chat';
import CardMedia from '@mui/material/CardMedia';
import Alert from '@mui/material/Alert';
import './App.css'

const Contact: React.FunctionComponent = () =>{
    window.scrollTo({top: 0, behavior: "instant"})

    return(
        <>
            <CssBaseline />
            <div className="student">
                <div className="subject">
                    <CardMedia component="img" width="600" image={student} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    <h3 className="h3Student"><span className="subjectUnder">高校生</span></h3>
                </div>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                <Alert severity='warning'>
                    <Typography fontFamily={'"BIZ UDPGothic"'}>出演高校生の募集は終了しました。<br />出演情報はこちらで掲載予定です。<br />イベント1週間前を目処に掲載予定です。</Typography>
                </Alert>
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
                            赤レンガパークであなたの好きなことを表現しませんか？<br />
                            ↓例えばこんなことができます！↓<br />
                            ・ステージ発表(歌，ダンス，漫才など)<br />
                            ・作品展示(写真・イラスト・ハンドメイドなど)<br />
                            ・フリーマーケット<br />
                            ・キッチンカー(実際に商品を作って販売！)<br />
                            もっと何ができるか知りたい！...と思ったら質問してみましょう。<br />
                        </Typography>
                    </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: "#33bfff"}}>
                                <QuestionMarkIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px',px: 2}}>
                            <Typography variant="h6" component="span" fontFamily={'"Zen Kurenaido"'}>
                                質問してみたい
                            </Typography>
                            <Typography fontFamily={'"BIZ UDPGothic"'}>
                                下のボタンをクリックして質問してみてください！<br />
                                KARAYABを企画している高校生から回答させていただきます。<br />
                                (GoogleFormへアクセスします。)<br />
                            </Typography>
                            <a target="_blank" href="https://forms.gle/PVNHSAf8DXFDZdYEA">
                            <Chip label="質問する！" icon={<LaunchIcon />} style={{marginTop: "10px"}} />
                            </a>
                            <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="よくある質問"
                                id="question"
                            >
                                <Typography>よくある質問(5/26更新)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    Q<br />
                                    二次創作品を展示しても良いか。<br />
                                    A<br />
                                    可能です！<br />
                                    <br />
                                    Q<br />
                                    初心者でも発表できますか？<br />
                                    A<br />
                                    基本的に大丈夫です。<br />
                                    ステージ発表については、<br />
                                    どのグループにもどのような発表をするか動画で送っていただいています。<br />
                                    心配なことがあれば、個別に対応可能なのでご連絡ください。
                                </Typography>
                            </AccordionDetails>
                            </Accordion>
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
                                参加応募する！(募集終了)
                            </Typography>
                            <Typography fontFamily={'"BIZ UDPGothic"'}>
                                KARAYAB2024<br />
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
                                オープンチャットに参加
                            </Typography>
                            <Typography fontFamily={'"BIZ UDPGothic"'}>
                                参加申込後は、参加者限定のLINEオープンチャットに入っていただきます。<br />
                                そこから当日に向けた準備を進めていきます。<br />
                                わからないことなど周りの高校生や大人がサポートしていくので安心です。<br />
                                LINEオープンチャットへの参加がわからなかった人向け<br />
                                <a target="_blank" href="https://line.me/ti/g2/jA_bed6zqVJv1ybTEY-vspjdIUEqdQeg4AU--w?utm_source=invitation&utm_medium=link_copy&utm_campaign=default">コチラ</a><br />
                                パスワードはGoogleForm回答後の一番最後に表示されています。
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
                                本番！
                            </Typography>
                            <Typography fontFamily={'"BIZ UDPGothic"'}>
                                殻を破ろう！
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                </Grid>
            </div>
        </>
    )
}

export default Contact;