import { CssBaseline } from '@mui/material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import CardMedia from '@mui/material/CardMedia';
import topImg from './tmp/after.jpeg'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import leaders from './tmp/leaders.jpeg';
import repo1_1 from './tmp/repo1-1.jpg';    
import repo1_2 from './tmp/repo1-2.jpg';
import repo2_1 from './tmp/repo2-1.jpg';
import repo3_1 from './tmp/repo3-1.jpeg';
import repo4_1 from './tmp/repo4-1.jpg';
import repo4_2 from './tmp/repo4-2.jpg';
import repo4_3 from './tmp/repo4-3.jpg';
import repo5_1 from './tmp/repo5-1.jpg';
import repo5_2 from './tmp/repo5-2.jpg';
import repo5_3 from './tmp/repo5-3.jpg';
import repo5_4 from './tmp/repo5-4.jpg';
import repo5_5 from './tmp/repo5-5.jpg';
import repo5_6 from './tmp/repo5-6.jpeg';
import repo5_7 from './tmp/repo5-7.jpg';
import repo5_8 from './tmp/repo5-8.jpg';
import repo6_1 from './tmp/repo6-1.jpg';
import repo6_2 from './tmp/repo6-2.jpg';
import repo6_3 from './tmp/repo6-3.jpg';
import repo7_1 from './tmp/repo7-1.jpg';
import repo7_2 from './tmp/repo7-2.jpg';
import repo7_3 from './tmp/repo7-3.jpg';
import repo8_1 from './tmp/repo8-1.jpg';
import repo8_2 from './tmp/repo8-2.jpg';
import repo8_3 from './tmp/repo8-3.jpg';
import repo8_4 from './tmp/repo8-4.jpg';
import repo8_5 from './tmp/repo8-5.jpg';
import repo8_6 from './tmp/repo8-6.jpg';
import repo8_7 from './tmp/repo8-7.jpg';
import repo8_8 from './tmp/repo8-8.jpg';
import repo8_9 from './tmp/repo8-9.jpg';
import repo8_10 from './tmp/repo8-10.jpg';
import repo8_11 from './tmp/repo8-11.jpg';
import repo8_12 from './tmp/repo8-12.jpeg';
import repo9_1 from './tmp/repo9-1.jpeg';
import repo9_2 from './tmp/repo9-2.jpeg';
import repo10_1 from './tmp/repo10-1.jpg';
import repo10_2 from './tmp/repo10-2.jpg';
import repo11_1 from './tmp/repo11-1.jpg';
import repo11_2 from './tmp/repo11-2.jpg';
import repo12_1 from './tmp/repo12-1.jpg';
import repo12_2 from './tmp/repo12-2.jpg';
import repo13_1 from './tmp/repo13-1.jpg';
import repo13_2 from './tmp/repo13-2.jpg';
import repo14_1 from './tmp/repo14-1.jpg';
import repo14_2 from './tmp/repo14-2.jpg';
import repo15_1 from './tmp/repo15-1.jpg';
import repo16_1 from './tmp/repo16-1.jpg';
import './Report.css';

const Report: React.FunctionComponent = () =>{
    window.scrollTo({top: 0, behavior: "instant"})
    let theme = createTheme();
    theme = responsiveFontSizes(theme);

    return(
        <>
            <CssBaseline />
            <div className='student'>
                <div className="top">
                    <CardMedia component="img" width="600" image={topImg} alt="イベント開催の様子" sx={{ maxHeight: 345, objectFit: 'contain'}} />
                    <h3 className="subject">当日レポート</h3>
                </div>
                <p className="date">2024/07/27 公開</p>
                <Box sx={{ width: '100%', marginTop: '0' }}>
                    <Grid container spacing={2} alignItems={'flex-start'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '5%'}}>
                    <Grid item xs={2.5} />
                        <Grid item xs={12} md={7}>
                            <h2>開催報告(藤田/東舞鶴高校3年)</h2>
                            <Divider />
                            <p>2024年6月16日、舞鶴高校生リーダーズサミットが主催するイベントKARAYABが舞鶴赤れんがパーク5号棟で行われました。</p>
                            <p>KARAYABとは舞鶴の高校生の<span className="bold">「舞鶴には凄い趣味や特技を持っている高校生がたくさんいる！そんな学生が集まるイベントをしてみたい！」</span>という思いから作られたイベントです。<br />
                                当日はバンドやダンス、モノマネなどのステージ発表、絵や書道、生花などの作品展示、高校生によるパンやケーキ販売する商品開発の4つの媒体で高校生が殻を破りました！
                            </p>
                            <h2>企画〜イベント開催に向けて</h2>
                            <p>
                                発端としては2月の初め東舞鶴高校、西舞鶴高校、日星高校、舞鶴高専から集まった5人のリーダーをもとに舞鶴リーダーズサミットを作り、週に2回赤レンガ(CVM)やzoomで会議を進めて行きました。<br />
                                それぞれに得意な分野があり、それぞれのリーダーに<span className="bold">ステージ担当</span>、<span className="bold">作品展時担当</span>、<span className="bold">商品開発担当</span>などの役割を決めました。
                            </p>
                            <Grid container spacing={2} alignContent={'flex-start'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item xs={2} />
                                <Grid item xs={12} md={8}>
                                    <CardMedia component="img" image={leaders} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">高校生のリーダー達</span>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                            <p>
                                高校生で行ったこととしては、大きく分けて<span className="bold">4つ</span>あります。<br />
                                1つ目は<span className="bold">高校生出演者募集</span>です。絵を描くのが得意だったリーダーを中心に出演者募集のチラシを作り舞鶴市の高校に通う全ての高校生に配りました。
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo1_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">高校生募集のチラシ</span>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo1_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">チラシ配布の様子</span>
                                </Grid>
                            </Grid>
                            <p>
                                2つ目に<span className="bold">それぞれの担当の作業</span>です。作品展示では出演者の作品に合わせた展示パネルや額縁の用意、ステージ発表では楽器や照明を貸してくださる会社の方との打ち合わせ、
                                商品開発では今回開発に関わってくださったmogmogさんとの打ち合わせを行いました。
                            </p>
                            <Grid container spacing={2} alignContent={'flex-start'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item xs={2} />
                                <Grid item xs={12} md={8}>
                                    <CardMedia component="img" image={repo2_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">商品開発打ち合わせの様子</span>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                            <p>
                                3つ目に<span className="bold">広報活動</span>です。高専生を中心にホームページの作成、インスタグラムの活用を初めたりイベント広報チラシを作りイベント情報を発信しました。
                            </p>
                            <p>
                                そして4つ目に<span className="bold">協賛金集め</span>です。チラシと企画書を持って舞鶴市内の企業やお店に出向き協賛のお願いに行きました。
                            </p>
                            <p>
                                お金の管理をはじめとする高校生が行えない事などは大人にお世話になりましたが、ほとんどの事は高校生が主体となり企画しました。
                            </p>
                            <p>
                                最終的にステージ発表では6組のバンド、4組のダンスグループ、4組の歌の歌唱、モノマネやマイナースポーツを紹介する16組が集まり、商品開発では2つの商品を開発しました。<br />
                                そして作品展示では絵や切り絵、書道に生花、プログラミングの技術を使った自動販売機などを展示する10組が集まり、入り口での受付や会場準備をする高校生ボランティア28名<span className="bold">総勢90人</span>もの舞鶴の高校生が集まりKARAYAB当日を迎えることができました！
                            </p>
                            <Grid container spacing={2} alignContent={'flex-start'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item xs={2} />
                                <Grid item xs={12} md={8}>
                                    <CardMedia component="img" image={repo3_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">KARAYABを象徴するステージセット</span>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                            <h2>イベント当日</h2>
                            <p>
                                11時に始まった開会式では運営メンバーが思いを語り、よさこいにっぽん聖の迫力のあるパフォーマンスを皮切りにKARAYABはスタート！！
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo4_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">リーダーの高校生達</span>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo4_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">藤田くんの挨拶</span>
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={12} md={8}>
                                    <CardMedia component="img" image={repo4_3} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">よさこいパフォーマンス！</span>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                            <p>
                                会場に入ってまず目に入るのは作品展示のブース、そこで展示されているのは...!<br />
                                <span className="bold">「なんでも切り絵隊」</span><br />
                                ジブリのワンシーンから舞鶴のあの場所まで白と黒だけの切り絵で表現する！<br />
                                <span className="bold">「水嶋彩心」</span><br />
                                人魚の涙は真珠という逸話をベースにした絵を展示！人魚の表情に注目！<br />
                                <span className="bold">「奥野悠」</span><br />
                                アニメのキャラクターをウッドバーニングという手法で表現する！<br />
                                <span className="bold">「堀智貴」</span><br />
                                写真の魅力に取り憑かれアメリカに留学したときの写真を展示！<br />
                                <span className="bold">「丹羽結芽」</span><br />
                                多くの趣味を持ちこの日ステージでも出演する彼女が描くイラスト！<br />
                                <span className="bold">「江幡紗羅」</span><br />
                                内側、をテーマにした絵たくさんの想いが詰まり細部にこだわっている！<br />
                                <span className="bold">「森本夢菜」</span><br />
                                全国高等学校総合文化祭に出展するほどの実力のある彼女が書く書道！<br />
                                <span className="bold">「高専華道部」</span><br />
                                高専の華道部の皆さんが生ける3つもの生花が展示！<br />
                                <span className="bold">「舞鶴工房」</span><br />
                                高専のプログラミングの技術を使ったチロルチョコの自販機を展示！
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo5_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo5_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo5_3} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo5_4} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo5_5} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo5_6} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo5_7} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo5_8} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                            </Grid>
                            <p>
                                このように絵から生花まで！個性を持った高校生達の作品が展示されました！<br />
                                入り口入ってすぐに展示されていたこともあり、来場者の全員が作品前で足を止め1つ1つの作品を熱心に見られていた姿が印象的でした。<br />
                                絵や書道などはもちろん特にウッドバーニングや切り絵、生花は中々普段目にする機会がないのでこのKARAYABでこそ見られる作品だな、と感動しました！
                            </p>
                            <p>
                                そして作品展示を通り過ぎるとあるのは、商品開発をした商品を売るブース！<br />
                                ここで買えるのは舞鶴の4人の高校生がmogmogの小松さんの協力の元開発した2つの商品です。<br />
                                1つ目は<span className="bold">舞鶴の特産品で作られたブロックケーキ</span>です。大浦地区で育ったレモンや舞鶴茶を練り込んだ1口サイズのケーキがたくさん入っています、<br />
                                2つ目は<span className="bold">万願寺あまとうを1本丸々使ったカレーパン</span>です！
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo6_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo6_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={2} />
                                <Grid item xs={12} md={8}>
                                    <CardMedia component="img" image={repo6_3} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                            <p>
                                なんとこの商品は大人気でKARAYABの開場から<span className="bold">30分</span>を待たずして用意していた80個の全てが売り切れました！！<br />
                                これには本当に驚きました！食品販売ブースを見ていると幾つも買っていく人、何度も買いに来る人がたくさんいました。<br />
                                私ももちろん食べたですが、1口で人気の訳がわかりました、ケーキはとってもしっとりとしていて、レモンの爽やかさ、舞鶴茶の香りがすっと抜けていく感覚がありました。<br />
                                カレーパンも万願寺はもちろんスパイスからこだわったカレーがとっても美味しく歩きながらでも食べやすい美味しいカレーパンでした。<br />
                                (食レポ上手っ！！ by HPの中の人)
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={4} md={4}>
                                    <CardMedia component="img" image={repo7_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <CardMedia component="img" image={repo7_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={4} md={4}>
                                    <CardMedia component="img" image={repo7_3} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                            </Grid>
                            <p>
                                お腹を満たして赤れんがを進むと正面にあるのは横幅6メートルもある大きなステージ、いくつもの照明焚かれKARAYABをイメージした裏幕が降りています！<br />
                                そこで1日音楽を聞かせてくれたのは...!
                            </p>
                            <p>
                                <span className="bold">「前世はギタリスト」</span><br />
                                メンバー全員が以前のバンドでギター担当だったという4人で構成されています！<br />
                                <span className="bold">「hinano」</span><br />
                                青山テルマのバックダンサー経験を持つ彼女がKARAYABでソロデビュー！<br />
                                <span className="bold">「Lucky clover」</span><br />
                                独特な世界観をダンスで表現する彼女らがここで殻を破る！<br />
                                <span className="bold">「小松睦」</span><br />
                                中学生時代にステージで踊った胸の高鳴りが忘れられず今日は歌唱を披露！<br />
                                <span className="bold">「丹羽結芽」</span><br />
                                この日絵の展示もしている彼女の知る人ぞ知る歌を披露！<br />
                                <span className="bold">「佐々木隆志」</span><br />
                                特徴を捉えた彼のモノマネ、会場を最高の雰囲気に！<br />
                                <span className="bold">「舞鶴キンボール」</span><br />
                                マイナースポーツを広めるためにやってきた高校生達！<br />
                                <span className="bold">「原田翔平」</span><br />
                                まさかの入試被りで映像での参加、MV風に編集された映像を披露！<br />
                                <span className="bold">「JOKER」</span><br />
                                KARAYABのために結成されたダンスグループ、クールなダンスを披露！<br />
                                <span className="bold">「江幡紗羅」</span><br />
                                演劇譲りの歌声を披露、聞いた人を惹きつける歌唱力！<br />
                                <span className="bold">「よろずや」</span><br />
                                ロックに特化したバンド、会場のボルテージは最高潮に！<br />
                                <span className="bold">「キノウエ」</span><br />
                                KARAYABを機に結成されたバンド、彼女達の初ステージ！<br />
                                <span className="bold">「文殊」</span><br />
                                様々な学年から集まったバンド、各楽器の個性が光る力強いステージ！<br />
                                <span className="bold">「ロータス」</span><br />
                                学校の垣根を超えたバンド、既に沢山の場で活動し活動の場を広げている！<br />
                                <span className="bold">「ストロベリーズ」</span><br />
                                ラストを飾るにふさわしい5人バンド熱気溢れたバンド！
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_3} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_4} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_5} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_6} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_7} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_8} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_9} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_10} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_11} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo8_12} alt="leaders" sx={{objectFit: 'contain'}} />
                                </Grid>
                            </Grid>
                            <p>
                                開場の11時から17時まで赤れんがで鳴り続けた彼ら、彼女らの音楽。<br />
                                音楽の力の見せつけ、最後にはアンコールが止まないほど盛り上がりました！<br />
                                今回唯一のモノマネで出てくれた佐々木くんのステージでは、クオリティの高さに来場者もボランティアもみんなで笑いました！<br />
                                そして最後の怒涛の5バンドはカバー曲が多かったことから皆で盛り上がれ、最後には多くの高校生がステージ前まで駆け寄り、全員で肩を組んでの大合唱！<br />
                                舞鶴の高校生たちが音楽で1つになっている姿に感動し僕もいつの間にかその中で歌っていました！<br />
                                早いものであっという間に17時になりKARAYABは終演しました
                            </p>
                            <h2>イベントを通して</h2>
                            <p>
                                ここから藤田がKARAYABを通して感じたことをお話しします。<br />
                                <span className="bold">「こんなイベントをしたい！」</span>とチラシ1枚作って作間さんに相談した1月、そこらの高校生が言い出したことに対して本気で「やろう！」と言ってくださったことで何人もの大人が関わってくださいました。<br />
                                大人が関わってくださらなかったらこんなに大きく、いやイベント自体開催すらできなかったと本気で感じます。<br />
                                心の底から感謝します。そして各校から集まっでくれたリ―ダー達、プログラミングが得意な人、絵が上手な人、音楽をしていて機材に詳しい人、本当にそんな人が集まった<span className="bold">奇跡のチーム</span>だと思います。<br />
                                そんな奇跡のチームで始めた企画は当たり前に上手くいくわけもなく、お忙しい大人と学校がある高校生達が十分に集まれず、KARAYAB開催の2ヶ月前高校生メンバー5人のうち4人が6月16日には間に合わない、、、なんて言ったこともありました笑<br />
                                でもこのチームは、そんな時開催日時の遅らせるのではなく作業スピードを上げることができるチームです！
                            </p>
                            <p>
                                そしてなんとか開催前日を迎えました。
                            </p>
                            <p>
                                開催前日に赤れんがに集まった沢山の高校生のテキパキとした仕事ぶりでどんどんできていくステージや作品展示を見て<span className="bold">「本当にKARAYABができていく、、、」</span>と涙しそうになったことをよく覚えています。
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo9_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">会場が出来上がっていく...</span>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo9_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">準備も大人の力を貸していただきました！</span>
                                </Grid>
                            </Grid>
                            <p>
                                遂に迎えた6月16日<br />
                                長かったような短かったようなこの半年間にあった事が全身を凄いスピードで駆け巡り、座っても落ち着かないまま開場入り、出演者への挨拶も開会式での挨拶もこの時の事は全然覚えていません。<br />
                                ただ覚えている事は<span className="bold">僕たちで作ったイベントに沢山の人が来ていたあの景色</span>だけ。
                            </p>
                            <p>
                                1日を通して沢山の人の目に触れた作品達、1つ1つが細部にまでこだわられていて、いくら見ても見足りないその作品はKARAYABだけで見られるのは本当にもったいない、もっと沢山の人に見てもらうべきと感じました。
                            </p>
                            <p>
                                1日止まなかった全てのステージの発表は想い、魂がこもっていてステージ出演者の真っ直ぐなま目が今でも鮮明に覚えています。
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo10_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">雨が降る一面も...</span>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo10_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">ボランティアも高校生が...!</span>
                                </Grid>
                            </Grid>
                            <br />
                            <p>
                                あっという間に終わったKARAYAB2024来場者<span className="bold">1458人</span>、自信を持って<span className="bold">大成功</span>と言える結果で幕を閉じました
                            </p>
                            <p>
                                伝えたいのに僕の語彙力では言葉にできない想いはたっっっくさんあります。ですが確実に言えることは<br />
                                <span className="bold">「KARAYABは僕の人生を変えた事です」</span><br />
                                1つ舞鶴の知らなかったを知れました。<br />
                                作品展示者、ステージ発表者のほとんどは舞鶴に住んでいても知らなかった人ばかりでこんなに凄かったり面白い高校生がいたんだ！ととても驚き地元舞鶴の見方を大きく変えられました。<br />
                                1つこれまでの舞鶴はただ住んでいる街、それ以上でも以下でもありませんでしたが、関わってくださった大人、スポンサーとしてご協力いただいた舞鶴の方々に出会い舞鶴の温かさに触れ舞鶴のことが大好きになりました。<br />
                                大学で舞鶴を離れる前にそう思えて本当によかったです。
                            </p>
                            <p>
                                そして最後に高校生でもここまでできるのだと思えました。<br />
                                確かにまだ未成年で経験も浅く力もない子供かも知れませんが大人に負けないほど自分の好きに対する想い、情熱、楽しいことをしたい！という子供心があります。<br />
                                開催までに大人を何度何度も頼りました、ですが高校生の想いがなければこのイベントが開催できなかったことは濁りのない事実です。<br />
                                高校生でもここまでできたという自信を胸に頑張っていきます！
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo11_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">最高のフィナーレ</span>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo11_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">赤レンガを背景に集合写真</span>
                                </Grid>
                            </Grid>
                            <br />
                            <h2>運営リーダーから</h2>
                            <p>ここからは運営を中心的に担った高校生からのコメントです。</p>
                            <h2>商品開発・佐藤/日星高校2年</h2>
                            <Divider />
                            <p>
                                6月16日日曜日に、かねてより準備を進めてきたイベント「KARAYAB2024」を舞鶴赤れんがパークで開催しました。<br />
                                このイベントで<span className="bold">高校生が開発した商品</span>を販売しました。
                            </p>
                            <p>
                                万願寺甘とうの中にキーマカレーを詰めてパンで巻いた<span className="bold">「美味んがんじパン」</span>とケーキをレモンクリームにディップする<span className="bold">「ふるさとキューブ」</span>を高校生が考案しました。<br />
                                舞鶴市の特産物である万願寺甘とうや大浦レモンを使用しており、<span className="bold">「舞鶴の味」</span>を感じてほしいという思いがこもっています。<br />
                                ラジオ、新聞、Instagram等で宣伝していただいたことで反響も大きく、開場から<span className="bold">30分</span>で完売することができました。
                            </p>
                            <p>
                                舞鶴市の高校生が自ら考えて行動に移し、目標であった<span className="bold">完売</span>を達成できました。<br />
                                食品開発をした高校生の1人は将来製菓の学校に進みたいと話し、このイベントが高校生の将来につながっていくと確信しています。<br />
                                KARAYABを通して高校生が自分の殻を破り、<span className="bold">新たな一歩を踏み出すきっかけ</span>となりました。
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo12_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">食品開発のみんなで</span>
                                </Grid>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo12_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">たくさんの方にお買い求めいただきました</span>
                                </Grid>
                            </Grid>
                            <br />
                            <h2>ステージ発表・神/西舞鶴高校2年</h2>
                            <Divider />
                            <p>
                                2023年6月16日、赤レンガパークで開催されたKARAYABに参加しました。<br />
                                私は「高校生リーダーズサミット」の一員として、そして出演者としてこのイベントに臨みました。<br />
                                初めて運営側に立つという経験に不安を抱えつつも、自分なりに準備を進めてきましたので、期待もありました。
                            </p>
                            <h2>当日の様子</h2>
                            <p>
                                当日は、朝から昨日に間に合わなかった準備を進めているうちにあっという間にお客さんが入り始め、気づけばオープニングイベントがスタートしていました。<br />
                                オープニングイベントでは、運営メンバーがそれぞれの想いを伝えることができ、「よさこい日本聖」の皆さんが会場の雰囲気を盛り上げてくれたおかげで、本当に素晴らしいスタートを切ることができました。
                            </p>
                            <h2>ステージ発表の感動</h2>
                            <p>
                                ステージ発表では、多くの高校生が自分の殻を破り、新たな挑戦を見せてくれました。<br />
                                初めてステージに立つ子や、既に経験がある子、それぞれが自分の目標に向かって努力する姿は本当にかっこよかったです。<br />
                                この成功は、音響照明やステージづくりで協力してくださった企業、多くのスポンサーの方々のおかげです。本当にありがとうございました。
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo13_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">ステージ発表の様子</span>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo13_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">✨</span>
                                </Grid>
                            </Grid>
                            <h2>ボランティアの力</h2>
                            <p>
                                また、今回のイベントが成功したのは、表で頑張っている人たちだけでなく、ボランティアの協力があってこそだと感じています。<br />
                                前日から準備を手伝ってくれた人や、ステージを盛り上げてくれた人、形は様々ですが、このイベントは高校生リーダーズサミットだけでなく、観客やスポンサーを含めた多くのメンバーがいたからこそ成り立っているのだと思います。 
                            </p>
                            <Grid container spacing={2} alignContent={'flex-end'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item alignContent={'center'} xs={12} md={6}>
                                    <CardMedia component="img" image={repo14_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">インスタライブ</span>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <CardMedia component="img" image={repo14_2} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">ステージの準備</span>
                                </Grid>
                            </Grid>
                            <h2>フィナーレと来年への抱負</h2>
                            <p>
                                最後にストロベリーズのアンコールが終わり、藤田くんが閉会の言葉を述べたとき、私も心に深い感動を覚えました。<br />
                                藤田くんは「来年もこのイベントを開催する」と言っていました。今年見えてきた課題や伸ばせる部分を活かし、さらに良いイベントにしていきたいと思っています。<br />
                                今回のイベントは本当に楽しかったです。皆さんの協力と支えに感謝します。ありがとうございました。
                            </p>
                            <h2>吉田/東舞鶴高校1年</h2>
                            <Divider />
                            <p>
                                KARAYABに来てくださった皆様、出演・ボランティアをしてくださった高校生、協賛をしてくださったスポンサーの皆様本当にありがとうございました。<br />
                                運営をして今まで自分たちの足でスポンサーさんのところへ協賛のお願いをしに行ったり、イベントを宣伝したりする経験をしたことがありませんでした。<br />
                                イベントをするまでの準備は難しいし、大変で何からすればいいかわからないことがたくさんあったけど準備をしている時は来場者の方が<span className="bold">どうしたら楽しんでもらえるのか</span>とか会場の配置とかを考える時間がすごく楽しかったです。<br />
                                また私はステージ発表でダンスをさせて頂きました。<br />
                                たくさんの人の前で<span className="bold">自分の好きなことをする経験</span>が中学一年生以来できていなかったので発表する機会をいただけて光栄でした。<br />
                                発表をするまでは緊張と不安で頭がいっぱいだったけれどステージに立ちたくさんの方からの拍手や歓声に包まれながら発表していると緊張もほぐれて不安もどこかにいっていました。<br />
                                <span className="bold">人の前に立って何かするって楽しいことなんだな</span>って感じることができました!<br />
                                こんな気持ちになれたのはKARAYABに参加したり・来てくださった皆さんがいたからだと思っています。<br />
                                KARAYABに参加してくださった皆様ほんとうにありがとうございました。
                            </p>
                            <Grid container spacing={2} alignContent={'flex-start'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item xs={2} />
                                <Grid item xs={12} md={8}>
                                    <CardMedia component="img" image={repo15_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">殻を破りました！</span>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                            <h2>作品展示/HP・平田/舞鶴高専4年</h2>
                            <Divider />
                            <p>
                                KARAYABを振り返り、まずは協力していただいた多くの大人の方・高校生・スポンサー様、当日ご来場いただいた皆様に深く感謝申し上げます。<br />
                                藤田くんからInstagramのDMでイベント運営のお誘いを頂いたのが2月、そこからあっという間に時間が過ぎていきました。<br />
                                初めてのイベント運営として、作品展示をまとめたりHPを作成したり様々なことを経験させていただきました。<br />
                            </p>
                            <p>
                                作品展示では、参加者募集から開催までの短い期間の中でそれぞれが持つ多種多様の才能を作品に反映させ、それを多くの来場者の方々に披露することがあで来たと感じております。<br />
                                来年は、展示の幅をより一層広げて高校生が持つ個性や才能をもっと来場者の方々に感じてもらえるようになるといいなと考えております。<br />
                            </p>
                            <p>
                                HP制作では、KARAYABの魅力をより多くの人に見てもらい、来場してもらうきっかけとするために、見やすい配置・構成を心がけました。
                                使用技術やソースコードはライセンス"THE SUSHI-WARE LICENSE"とともにGitHubに公開しています。<br />
                                来年以降のHPでは今年のサイト設計をもとに、よりUXの高いサイト運営を行えるようにしてまいります。
                            </p>
                            <p>
                                全体を振り返ると、高校生が本当に<span className="bold">殻を破って</span>キラキラしていて、そういう意味で大成功となったと感じています。<br />
                                運営側では、中心となった藤田くんの開会でのコメントが非常に強く記憶に残っています。彼に心動かされ、協力していただいた方が数えきれないほどいると思います。<br />
                                今、このレポート記事のページを作成しながらイベントの余韻に浸っていますが、高校生を中心に舞鶴でイベントができたという事実は舞鶴の未来に明るい光を与えると言っても過言ではありません。<br />
                                それくらいすごいことを成し遂げたということを誇りに思いますし、この流れを来年以降に繋げていかなくてはと感じている次第です。
                            </p>
                            <Grid container spacing={2} alignContent={'flex-start'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item xs={2} />
                                <Grid item xs={12} md={8}>
                                    <CardMedia component="img" image={repo16_1} alt="leaders" sx={{objectFit: 'contain'}} />
                                    <span className="caption">ラジオの公開収録も行いました</span>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                            <p>
                                来年に向けてこれから準備が進んでいきますが、第1回となった今年の反省点を活かし、より多くの高校生が殻を破れる、梅雨の舞鶴の名物イベントとなるよう尽力してまいります。
                            </p>
                            <br />
                            <Grid container spacing={2} alignContent={'flex-start'} justifyContent={'center'} direction={'row'} style={{paddingRight: '5%', paddingLeft: '5%', paddingBottom: '0', marginBottom: '0', marginTop: '0', textAlign: 'center'}}>
                                <Grid item xs={2} />
                                <Grid item xs={12} md={8}>
                                    <span className="caption">レポート記事おわり</span><br />
                                    <Link href="https://www.icloud.com/sharedalbum/ja-jp/#B0y5n8hH48secNF">KARAYABの写真はこちらから！</Link>
                                </Grid>
                                <Grid item xs={2} />
                            </Grid>
                        </Grid>
                        <Grid item xs={2.5} />
                    </Grid> 
                </Box>
            </div>
        </>
    )
}

export default Report;