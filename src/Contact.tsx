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
import timeTable from'./tmp/timeTable.jpg';
import layout from './tmp/layout.jpg';
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
                <h3 className={"studentArea"}>高校生が殻を破ります！<br />イベント当日は、ステージ発表・作品展示・商品販売を実施します。</h3>
                <Grid container spacing={2} columnSpacing={{xs:1, sm:2, md: 3}} alignItems={'flex-start'} justifyContent={'space-evenly'} direction={'row'} style={{marginTop: '10px', marginBottom: '10px'}} className={'scheduleArea'}>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <h2>ステージ発表タイムテーブル</h2>
                        <CardMedia component="img" width="600" image={timeTable} alt="timeTable" sx={{ maxHeight: 345, objectFit: 'contain' }} style={{marginBottom: '10px'}} />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <h2>会場配置図</h2>
                        <CardMedia component="img" width="600" image={layout} alt="layout" sx={{ maxHeight: 345, objectFit: 'contain' }} />
                    </Grid>
                    <Grid item xs={12} md={2} />
                </Grid>
                <div className={'scheduleArea'}>
                    <h2>参加高校生からのコメント</h2>
                </div>
                <Grid container spacing={1} alignItems={'flex-start'} justifyContent={'space-evenly'} direction={'row'} style={{marginTop: '10px', marginBottom: '10px'}}>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>よさこい聖<br />(ダンス)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    舞鶴を拠点に日本各地で活動。<br />
                                    いい世の中になって欲しいをモットーに今年で21年。<br />
                                    こころ惹かれること間違いなし！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>前世はギタリスト<br />(バンド)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    メンバー全員が元ギタリストの仲良し4人組バンド。<br />
                                    各々がギターで鍛えたスキルを最大限発揮します！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>hinano<br />(ダンス)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    青山テルマのバックダンサーの経験を持ち、コンテストでの入賞経験も持つ彼女がついにソロデビュー。<br />
                                    圧巻のパフォーマンスにご注目！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>lucky clover<br />(ダンス)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    独特な世界観を全体で表現。<br />
                                    今まで自分たちの得意をなかなか見せられなかった彼女たちが今日、殻を破る。
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>小松睦<br />(歌)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    中学生の頃にステージで踊った時の胸の高鳴りが忘れられない。<br />
                                    聞いた人にも自信を持ってもらえるようなステージにしたいという想いを胸に。
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>丹羽結芽<br />(歌)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    普段はコスプレや絵描きが大好き。<br />
                                    でも今日は新しい殻を破るべく歌を披露！<br />
                                    知る人ぞ知る新たな一面をご覧あれ！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>佐々木隆志<br />(モノマネ)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    特徴を捉えたモノマネで周囲を沸かすムードメーカー。<br />
                                    唯一無二のジャンルで挑戦するエンターテイナー。
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>舞鶴キンボール<br />(スポーツ)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    キンボールって何だ？<br />
                                    マイナースポーツと侮るなかれ。<br />
                                    舞鶴キンボールは名だたる大会を制覇する超強豪チーム！<br />
                                    キンボールの魅力をご覧あれ！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>原田翔平<br />(歌)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    まさかの入試被りでステージ出演はできないものの、その熱量で映像での出演を実現！<br />
                                    みんなの心が最高の笑顔で満たされますように。
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>JOKER<br />(ダンス)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    KARAYABの話を聞き、急遽結成したダンスグループ。<br />
                                    クールな強さを感じさせる彼女たちの初ステージをご覧あれ！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>江幡沙羅<br />(歌)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    演劇部譲りの歌声と唯一無二の音楽性が聴くものを惹きつける！<br />
                                    バックバンドにロータスを加えた最高のステージを！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>よろずや<br />(バンド)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    圧倒的なカリスマ性に率られ集まった若きバンド。<br />
                                    ロックに特化した熱狂的なパフォーマンスが観客を魅了する！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>キノウエ<br />(バンド)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    このイベントを機に結成されたNEWバンド。<br />
                                    まさに殻を破った彼女たちの初ステージはロータスのバックバンドでお楽しみあれ！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>文殊<br />(バンド)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    聴衆を虜にするギター、繊細なタッチと熱い情熱のベース、爆発的なエネルギーの持ち主ドラムスの個性光る学年の垣根を超えた日星高校3人組！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>ストロベリーズ<br />(バンド)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    ラストを飾る5人組バンド。<br />
                                    熱気に溢れる音楽でKARAYABのラストにふさわしい、忘れられない音楽体験を！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>ロータス<br />(バンド)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    学校の垣根をこえて有志により結成された5人組バンド！<br />
                                    積極的なアプローチを武器に活動の幅を拡大中！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>なんでも切り隊<br />(切り絵)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                こんにちは！「なんでも切り隊」です！<br />
                                舞鶴高専HANDMADE部の切り絵部門から4人のメンバーが集まり、作品制作を行いました！<br />
                                ジブリのワンシーンから舞鶴にゆかりのあるものまで色んなものをテーマにしています。<br />
                                白と黒だけで表現される切り絵の世界をお楽しみください。<br />
                                そしてみんなも切り絵をやろう！！楽しいぞ！！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>水嶋彩心<br />(絵)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                人魚の涙は真珠。その逸話からインスピレーションを得て描いたイラストです。<br />
                                涙や真珠、表情などにご注目してご覧下さい。<br />
                                人魚がどのような気持ちで涙を流しているのか、ご覧になった方それぞれの解釈を楽しみにしております。
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>奥野悠<br />(絵))</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                絵を描くのが昔から好きで、絵のおかげでさまざまな出会いがありました！<br />
                                そんな中で新しい事にチャレンジしようということでウッドバーニングという手法を使い、木を焼いて絵を描いてみました！<br />
                                見事殻を破った作品が完成しました！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>堀智貴<br />(写真)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    中学校の頃から写真と撮るのが趣味だった僕は 高校に入り一眼レフのカメラ持ってアメリカはサンデイエゴに留学しました。<br />
                                    今日はその時の写真を中心にこれまでに僕が撮った写真を 展示します、ぜひご覧ください！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>丹羽結芽<br />(イラスト)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    ｺﾞｺﾞｺﾞｺﾞｺﾞ……<br />
                                    いろんな趣味を極めまくっているオタクがいるらしい……<br />
                                    そいつ名は丹羽結芽ッ！！！<br />
                                    今回のイベントでたくさんの分野に出演する彼女！<br />
                                    その中の「作品展示」での二次創作…<br />
                                    一体どのようにしてお客さんを楽しませるのかッ！？<br />
                                    To Be Continued
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>江幡沙羅<br />(絵)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    えばた、と申します。私の事を知らないあなたに向けて、「うちがわ」をテーマにして絵を描きました。<br />
                                    久しぶりだったので思い通りには描けませんでしたが、たくさんの思いを込めて描いたので細かい所までみてもらえると嬉しいです。
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>森本夢菜<br />(書道)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    KARAYABという素敵なイベントを設けてくださった方々にとても感謝しています。<br />
                                    普段なかなか表に出せない好きなものを展示でき、とても嬉しいです。<br />
                                    文字の躍動感をいかに出せるかを意識して書いたのでそれぞれの文字を楽しんで見て頂けると幸いです。
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>華道部<br />(生花)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    部員全員が初心者ながらも切磋琢磨し磨き上げてきた華道の技術。<br />
                                    これまで作り上げてきた作品を胸に刻みながら初めての学外の舞台で、我々は舞鶴高専で培った華道の技術を用いて多種多様の花で会場を飾ります。
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={2} />
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>舞鶴工房I<br />(自販機)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    段ボールで作る自動販売機！<br />
                                    中からは、チロルチョコが...！どんな味が出るかはお楽しみ！<br />
                                    手作りでも、本物の自販機に負けない！<br />
                                    細部までこだわった最高傑作をお楽しみください。<br />
                                    チロルチョコは、先着順です！自販機へ急げ！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="コメント"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'} style={{fontWeight: 'bold'}}>舞鶴工房II<br />(Pythonで遊ぼう)</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography fontFamily={'"BIZ UDPGothic"'}>
                                    プログラミング言語Python。<br />
                                    来たことはあるけど何に使うの？<br />
                                    そんなあなたにPythonをつかった技術を紹介します！<br />
                                    きっとPythonで遊びたくなるはず！<br />
                                    きっと身近に感じてもらえるはず！
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid item xs={12} md={2} />
                </Grid>
                <Grid container direction="column" justifyContent="center" alignItems="center" style={{marginTop: '50px'}}>
                <Alert severity='warning'>
                    <Typography fontFamily={'"BIZ UDPGothic"'}>出演高校生の募集は終了しました。<br />募集要項をご覧になれます。</Typography>
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
                            <Chip label="質問期間終了" style={{marginTop: "10px"}} />
                            <Accordion style={{marginTop: "10px"}}>
                            <AccordionSummary
                                expandIcon={<ArrowDownwardIcon />}
                                aria-controls="よくある質問"
                                id="question"
                            >
                                <Typography fontFamily={'"Zen Kurenaido"'}>よくある質問(5/26更新)</Typography>
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