import { CssBaseline } from '@mui/material';
import radio from "./tmp/radio.jpg"
import CardMedia from '@mui/material/CardMedia';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, {timelineItemClasses} from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from '@mui/material/Link';
import LooksOneIcon from '@mui/icons-material/LooksOne';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

import './App.css'

const Radio: React.FunctionComponent = () =>{
    window.scrollTo({top: 0, behavior: "instant"})

    return(
        <>
            <CssBaseline />
            <div className="student">
                <div className="subject">
                    <CardMedia component="img" width="600" image={radio} alt="student" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    <h3 className="h3Student"><span className="subjectUnder">ラジオ出演</span></h3>
                </div>
                <h3 className={"studentArea"}>KARAYABに参加する高校生がFMまいづるに登場！<br />KARAYABの魅力について語り合います！</h3>
                <div className={"scheduleArea"}>
                    <h2>放送一覧</h2>
                    <h3 className={"studentArea"}>FMまいづる 10代・20代舞鶴未来対談の特別番組として全2回の開催です。<br />KARAYAB直前、KARAYAB中公開収録2回実施されました。</h3>
                </div>
                <Grid container direction="column" justifyContent="center" alignItems="center" >
                <Timeline position="right" sx={{[`& .${timelineItemClasses.root}:before`]: {flex: 0, padding: 0},}}>
                    <TimelineItem>
                    <TimelineSeparator>
                    <TimelineDot style={{backgroundColor: "#f50057"}}>
                        <LooksOneIcon />
                    </TimelineDot>
                    <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{py: '12px', px: 2}}>
                        <Typography variant="h6" component="span" fontFamily={'"Zen Kurenaido"'}>
                            KARAYAB直前スペシャル！
                        </Typography>
                        <Typography fontFamily={'"BIZ UDPGothic"'}>
                        【舞鶴未来対談2024年6月号（PODCAST版※先行公開）】<br />
                        ２０２４年６月１６日（日）舞鶴赤れんがパークで開催！！<br />
                        高校生が殻を破る！？「ＫＡＲＡＹＡＢ」とは！？<br />
                        <Link href="https://775maizuru.jp/episodes/episodes-32000/">記事はこちら</Link>
                        </Typography>
                    </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot style={{backgroundColor: "#33bfff"}}>
                                <LooksTwoIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent sx={{py: '12px',px: 2}}>
                            <Typography variant="h6" component="span" fontFamily={'"Zen Kurenaido"'}>
                                KARAYAB公開収録＆会場レポート
                            </Typography>
                            <Typography fontFamily={'"BIZ UDPGothic"'}>
                            【特別番組】10代・20代 舞鶴未来対談（特別編）<br />
                            「第１回 KARAYAB」（2024年6月16日）公開収録＆会場レポート！！<br />
                            ＜特別番組放送日時＞<br />
                            公開収録：2024年7月6日（土）7:40-8:00／10:00-10:20（再）※翌週再放送予定<br />
                            会場レポート：2024年7月6日（土）09:16 - 09:37／12:17 - 12:38（再）※翌週再放送予定<br />
                            <Link href="https://775maizuru.jp/pgtopics/pgtopics-32275/">FMまいづる記事はこちら</Link>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                </Grid>
            </div>
        </>
    )
}

export default Radio;