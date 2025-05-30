import Head from 'next/head';
import Layout from '../../components/Layout';
import { useRouter } from 'next/router';

export default function Article() {
    const router = useRouter();
    let pageData = null;
    try {
        pageData = router.query.pageData ? JSON.parse(router.query.pageData) : null;
    } catch (e) {
        console.error('JSON parse error:', e);
    }
    return (
        <Layout meta={{ title: `${pageData?.title}|Celestium Analytics-AI `, ogTitle: `${pageData?.tittle}`, description: `${pageData?.decription}`, ogDescription: `${pageData?.description}`, ogTwDescription: `${pageData?.description}`, }}>
            <Head>
            </Head>
            <div className={`articleContainer ${pageData?.extraData || ''}`} >
                <h1 className="articleTtl">{pageData?.title}</h1>
                <p className="dateText">最終更新日:{pageData?.Update}</p>
                <div className="imageArea">
                    <img src={pageData?.imgSrc} className="imageBlock" style={{ objectFit: 'cover' }} alt={pageData?.tittle} />
                </div>

                <p>こんにちは、未来の主役となる中学生のみなさん。<br />このレポートは、これから25年後の2050年に向けて、みなさんがどのような仕事の世界に出会い、どのようなスキルを身につけると良いのかをお伝えするものです。</p>

                <p>世界は今、大きな変化の真っただ中にあります。スマートフォンやインターネットが当たり前になったように、これからも技術の進歩によって私たちの生活や仕事は大きく変わっていきますが、心配する必要はありません。<br/>変化を理解して準備をすれば、未来は大きなチャンスに満ちています。</p>

                <h2 id="chapter1">第1章：今起きている大きな変化</h2>
                <img src="./img/pageImg/2-1.png" className="imageBlock" style={{ objectFit: 'cover' }} alt="第1章：今起きている大きな変化" />

                <h3 id="section1-1">1-1. デジタル革命の加速</h3>
                <p>みなさんが生まれた頃から、世界はすでにデジタル技術によって大きく変わり始めて、今はさらに次のような変化が起きています。</p>

                <p><strong>人工知能（AI）の発展</strong>：ChatGPTのような対話型AIが登場し、文章を書いたり、情報を整理したりする能力が急速に向上し、AIは医療診断、法律文書の分析、デザイン作成など、これまで人間にしかできないと思われていた仕事の一部を担えるようになっています。</p>

                <p><strong>ロボティクスの進化</strong>：工場だけでなく、介護施設やレストラン、家庭にもロボットが入り始め、ロボットは単純作業だけでなく、人とのコミュニケーションも少しずつできるようになってきました。</p>

                <p><strong>メタバースとデジタル空間</strong>：現実の世界とは別に、デジタルの世界で働いたり、学んだり、遊んだりする時間が増加し、仮想空間での経済活動も活発になってきました。</p>

                <h3 id="section1-2">1-2. 社会構造の変化</h3>
                <p><strong>少子高齢化</strong>：日本をはじめ、多くの先進国では人口が減少し、高齢者の割合が増え、2050年には日本の人口の約40%が65歳以上になるとされています。</p>

                <p><strong>働き方の多様化</strong>：会社に通って決まった時間に働くだけでなく、リモートワークやフリーランス、副業など、様々な働き方が広がっています。</p>

                <p><strong>グローバル化とローカル化</strong>：世界中の人とつながることができる一方で、地域の価値や独自性を大切にする動きも強まっています。</p>

                <h3 id="section1-3">1-3. 環境・エネルギー問題</h3>
                <p><strong>気候変動への対応</strong>：地球温暖化への対策として、再生可能エネルギーへの転換や、環境に配慮した製品・サービスの需要が高まっています。</p>

                <p><strong>資源の制約</strong>：石油や天然ガスなどの化石燃料だけでなく、水や食料などの資源も世界的に不足の懸念があり、限られた資源を有効に使う技術やシステムが求められています。</p>

                <h2 id="chapter2">第2章：2050年に向けての予測</h2>
                <img src="./img/pageImg/2-2.png" className="imageBlock" style={{ objectFit: 'cover' }} alt="第2章：2050年に向けての予測" />
                <p>これらの変化を踏まえて、2050年の世界はどうなっているでしょうか。</p>

                <h3 id="section2-1">2-1. 技術の発展</h3>
                <p><strong>AIとの共存社会</strong>：AIは2050年までにさらに進化し、ほとんどの定型業務を自動化できるようになっているでしょう。<br/>しかし、人間の創造性や共感能力、倫理的判断は引き続き重要で、人間とAIが協力し合う社会になっていくでしょう。</p>

                <p><strong>バイオテクノロジーの進展</strong>：遺伝子工学や再生医療などの技術が進み、医療や食料生産、環境修復などの分野で革命が起きているでしょう。<br/>人の寿命が延び、100歳を超えて健康に活動する人も珍しくない時代になるかもしれません。</p>

                <p><strong>宇宙開発の日常化</strong>：月や火星への旅行や居住が始まり、宇宙関連のビジネスが一般的になっているかもしれません。<br/>宇宙からのエネルギー獲得や資源開発も進んでいるでしょう。</p>

                <h3 id="section2-2">2-2. 社会システムの変化</h3>
                <p><strong>教育システムの変革</strong>：学校で一斉に同じことを学ぶスタイルから、個人の興味や能力に合わせた学習へと変わっていき、生涯を通じて学び続ける社会になり、60歳で大学に入り直したり、70歳で新しい職業に就く人も増えているかもしれません。</p>

                <p><strong>経済のデジタル化</strong>：お金の概念も変わり、仮想通貨や独自の経済圏が拡大しているでしょう。<br/>働いた時間ではなく、生み出した価値に対して報酬が支払われる仕組みが一般的になっているかもしれません。</p>

                <p><strong>新しい社会保障</strong>：AIやロボットによる自動化で多くの仕事が減少する一方、全ての人に最低限の生活を保障するベーシックインカム（最低所得保障）のような制度が導入されている可能性があります。</p>

                <h2 id="chapter3">第3章：減る仕事と増える仕事</h2>
                <img src="./img/pageImg/2-3.png" className="imageBlock" style={{ objectFit: 'cover' }} alt="第3章：減る仕事と増える仕事" />
                <h3 id="section3-1">3-1. 減っていく可能性が高い仕事</h3>
                <p><strong>定型的なデータ処理</strong>：経理、データ入力、書類作成など、決まったルールに従って処理する仕事はAIに置き換わるでしょう。</p>

                <p><strong>単純な製造・運搬作業</strong>：工場での組み立てや物流センターでの荷物の仕分けなど、繰り返し行う作業はロボットが担うようになります。</p>

                <p><strong>中間管理職の一部</strong>：報告書の作成やスケジュール管理、単純な意思決定などを行う管理職の役割はAIが代替するかもしれません。</p>

                <p><strong>単純な接客・販売</strong>：レジ打ちや商品の陳列、基本的な接客対応など、マニュアル化できる部分は自動化されるでしょう。</p>

                <h3 id="section3-2">3-2. 増えていく可能性が高い仕事</h3>
                <p><strong>AIとロボットの設計・管理</strong>：AIシステムを開発したり、ロボットを設計・管理する専門家の需要が高まるでしょう。</p>

                <p><strong>データサイエンティスト</strong>：膨大なデータから価値ある情報を見つけ出し、意思決定に役立てる専門家が必要とされます。</p>

                <p><strong>ケアワーカー</strong>：高齢化が進み、介護や医療、心理的サポートなど、人間の温かみが必要な仕事の需要は増加するでしょう。</p>

                <p><strong>クリエイティブワーク</strong>：芸術、デザイン、物語作成など、人間ならではの創造性を活かした仕事は引き続き重要です。</p>

                <p><strong>環境・エネルギー関連</strong>：再生可能エネルギーの開発や環境保全、持続可能な食料生産などの分野で新しい仕事が生まれるでしょう。</p>

                <p><strong>体験デザイナー</strong>：デジタルとリアルを組み合わせた新しい体験を設計する専門家の需要が高まるでしょう。</p>

                <p><strong>倫理的問題の専門家</strong>：AIや遺伝子工学などの新技術がもたらす倫理的問題を考え、解決策を提案する専門家が必要になります。</p>

                <h2 id="chapter4">第4章：変わる働き方</h2>
                <img src="./img/pageImg/2-4.png" className="imageBlock" style={{ objectFit: 'cover' }} alt="第4章：変わる働き方" />

                <h3 id="section4-1">4-1. 場所と時間の自由化</h3>
                <p><strong>どこでも働ける</strong>：オフィスに通わなくても、自宅やカフェ、旅先、さらには別の国からでも仕事ができるようになります。田舎に住みながら都市の会社で働くことも普通になるでしょう。</p>

                <p><strong>時間の柔軟化</strong>：朝9時から夕方5時までという固定の勤務時間ではなく、自分の生活リズムや状況に合わせて働く時間を選べるようになります。</p>

                <h3 id="section4-2">4-2. 雇用形態の多様化</h3>
                <p><strong>複数の仕事を持つ</strong>：一つの会社に所属するのではなく、複数の仕事やプロジェクトを掛け持ちする働き方が一般的になるでしょう。<br/>月曜日はA社、火曜日はB社、水曜日は自分のビジネス、というような働き方です。</p>

                <p><strong>ギグエコノミーの進化</strong>：短期の仕事やプロジェクトをインターネット上で見つけて働く「ギグワーク」がさらに進化し、専門的なスキルを持つ人が世界中のプロジェクトに参加できるようになります。</p>

                <p><strong>所有から共有へ</strong>：会社を「所有」するのではなく、プロジェクトごとに必要な人材が集まり、目的を達成したら解散するような流動的な組織形態が増えるでしょう。</p>

                <h3 id="section4-3">4-3. 人生の再設計</h3>
                <p><strong>マルチステージの人生</strong>：「学校→仕事→引退」という直線的なライフコースではなく、学び、働き、休息、再学習を繰り返す循環型の人生設計が標準になるでしょう。<br/>80歳で新しいキャリアを始める人も珍しくなくなります。</p>

                <p><strong>パーパス（目的）重視</strong>：お金や地位のためだけではなく、自分の人生の目的や社会への貢献を重視した働き方を選ぶ人が増えるでしょう。</p>

                <h2 id="chapter5">第5章：未来を生き抜くための必要なスキル</h2>
                <img src="./img/pageImg/2-5.png" className="imageBlock" style={{ objectFit: 'cover' }} alt="第5章：未来を生き抜くための必要なスキル" />
                <p>では、このような未来を生き抜くために、どのようなスキルが必要になるでしょうか。</p>

                <h3 id="section5-1">5-1. 技術的スキル</h3>
                <p><strong>デジタルリテラシー</strong>：AIやプログラミングの基本的な知識は、ほぼ全ての職業で必要になるでしょう。<br/>AIに指示を出したり、結果を解釈したりする能力は最低限必要です。</p>

                <p><strong>データ分析力</strong>：膨大な情報から重要なパターンを見つけ出し、意味を読み取る能力が重要になります。</p>

                <p><strong>テクノロジーと人間の融合</strong>：技術を理解した上で、人間らしさを活かした価値を生み出す能力が求められます。</p>
                <h3 id="section5-2">5-2. 人間的スキル</h3>
                <p><strong>創造性と想像力</strong>：既存の枠にとらわれず、新しいアイデアを生み出す力はAIでは代替できない人間の強みです。</p>

                <p><strong>批判的思考</strong>：情報の真偽を見極め、多角的に考え、自分の頭で判断する力が重要です。</p>

                <p><strong>共感力とコミュニケーション能力</strong>：様々な背景を持つ人々の気持ちを理解し、効果的に意思疎通する能力は、どんな時代でも価値があります。</p>

                <p><strong>レジリエンス（回復力）</strong>：失敗や困難から学び、立ち直る力が速い変化の時代には不可欠です。</p>

                <h3 id="section5-3">5-3. 学び続ける力</h3>
                <p><strong>自己学習能力</strong>：誰かに教えてもらうのを待つのではなく、自ら必要な知識やスキルを見つけて学ぶ力が必要です。</p>

                <p><strong>学び方を学ぶ</strong>：新しい分野を効率的に学ぶためのメタ学習スキルが重要になります。</p>

                <p><strong>アンラーニング（学びほぐし）</strong>：古い知識や前提を手放し、新しい考え方を受け入れる柔軟性も大切です。</p>

                <h3 id="section5-4">5-4. 複合的なスキル</h3>
                <p><strong>学際的思考</strong>：異なる分野の知識を組み合わせて新しい解決策を生み出す能力が評価されます。</p>

                <p><strong>システム思考</strong>：複雑な問題の全体像を捉え、要素間のつながりを理解する能力が重要です。</p>

                <p><strong>未来予測力</strong>：変化の兆しを読み取り、先を見据えて行動する力が成功の鍵になります。</p>

                <h2 id="chapter6">第6章：中学生のみなさんへのアドバイス</h2>
                <img src="./img/pageImg/2-6.png" className="imageBlock" style={{ objectFit: 'cover' }} alt="第6章：中学生のみなさんへのアドバイス" />
                <p>最後に、未来の社会を担う中学生のみなさんへ、具体的なアドバイスをお伝えします。</p>

                <h3 id="section6-1">6-1. 今からできる準備</h3>
                <p><strong>デジタルツールに親しむ</strong>：スマートフォンやパソコンを単なる娯楽の道具ではなく、創造や学習のための道具として使う習慣をつけましょう。<br/>簡単なプログラミングや動画編集など、デジタル創作の経験を積むことが大切です。</p>

                <p><strong>英語を含む言語スキル</strong>：世界中の人々と協力することが当たり前になる未来では、英語などの国際言語でのコミュニケーション能力が重要です。<br/>言語を学ぶことで、異なる文化や考え方に触れる機会も増えます。</p>

                <p><strong>読書の習慣</strong>：本を読むことは、知識を得るだけでなく、想像力や共感力、批判的思考力を養うのに役立ちます。<br/>小説、歴史、科学など幅広いジャンルに挑戦してみましょう。</p>

                <h3 id="section6-2">6-2. 人間関係とコミュニケーション</h3>
                <p><strong>多様な人々との交流</strong>：年齢、文化、考え方の異なる人々と積極的に関わることで、視野が広がり、コミュニケーション能力も高まります。<br/>部活動、地域活動、オンラインコミュニティなど、さまざまな場で人との関わりを持ちましょう。</p>

                <p><strong>チームでの協力</strong>：一人でできることには限りがありますが、チームで協力すれば大きな成果を出せます。<br/>グループプロジェクトやチーム活動に参加して、協力の仕方を学びましょう。</p>

                <p><strong>自分の考えを表現する</strong>：自分の意見や感情を適切に表現する練習をしましょう。<br/>発表の機会、ディベート、ブログ執筆など、アウトプットの機会を積極的に活用してください。</p>

                <h3 id="section6-3">6-3. 失敗を恐れない姿勢</h3>
                <p><strong>挑戦する勇気</strong>：新しいことに挑戦するとき、失敗することもあります。<br/>しかし、失敗は学びの最大のチャンスです。「やってみたい」と思ったことには、積極的に挑戦してみましょう。</p>

                <p><strong>振り返りの習慣</strong>：何かに取り組んだ後、成功でも失敗でも、「何がうまくいったか」「次はどうすればもっと良くなるか」を考える時間を持ちましょう。<br/>この習慣が成長を加速させます。</p>

                <p><strong>小さな一歩から始める</strong>：大きな目標があるときは、小さなステップに分けて少しずつ進めましょう。<br/>完璧を目指すあまり行動できないよりも、とりあえず動き出すことが大切です。</p>

                <h3 id="section6-4">6-4. 自分の強みを見つける</h3>
                <p><strong>様々な活動を試す</strong>：音楽、スポーツ、プログラミング、料理、工作など、できるだけ多くの活動を体験してみましょう。<br/>その中から、楽しいと感じることや得意なことが見つかります。</p>

                <p><strong>フィードバックを求める</strong>：友達や先生、家族に「自分のどんなところが良いと思うか」聞いてみましょう。<br/>自分では気づかない強みに気づくことがあります。</p>

                <p><strong>得意なことを伸ばす</strong>：誰にでも、特に得意なことや好きなことがあります。そこに時間と努力を投じることで、あなただけの強みになります。<br/>すべてにおいて優れている必要はありません。</p>

                <h3 id="section6-5">6-5. 柔軟性と適応力を育てる</h3>
                <p><strong>異なる視点を尊重する</strong>：自分と意見が違う人の話にも耳を傾け、なぜそう考えるのかを理解しようとする姿勢が大切です。<br/>多様な視点を知ることで、思考の幅が広がります。</p>

                <p><strong>変化を受け入れる</strong>：計画通りに行かないとき、状況が変わったとき、柔軟に対応する練習をしましょう。<br/>「これまでと違うやり方」を試してみる勇気も必要です。</p>

                <p><strong>自然や社会の変化に関心を持つ</strong>：気候変動、技術の進歩、社会の動きなど、大きな変化の流れを知ることで、未来に備える意識が育ちます。<br/>ニュースや科学の話題に触れる習慣をつけましょう。</p>

                <h2 id="chapter7">第7章：希望に満ちた未来のために</h2>
                            <img src="./img/pageImg/2-7.png" className="imageBlock" style={{ objectFit: 'cover' }} alt="第7章：希望に満ちた未来のために" />
                <h3 id="section7-1">7-1. 技術と人間性のバランス</h3>
                <p>未来の社会では、テクノロジーがさらに発達し、私たちの生活や仕事を大きく変えていくでしょう。<br/>しかし、テクノロジーはあくまでも道具であり、それをどう使うかは私たち人間次第です。</p>

                <p>AIやロボットができることが増えるほど、逆説的ですが、人間らしさの価値は高まります。<br/>思いやり、創造性、倫理的判断、美的感覚など、機械では簡単に真似できない人間の特性が、これからの時代にはより重要になるのです。</p>

                <p>未来を生き抜くには、テクノロジーを理解し活用する能力と、人間らしい感性や判断力のバランスが鍵になります。</p>

                <h3 id="section7-2">7-2. 持続可能な社会への貢献</h3>
                <p>2050年に向けて、地球環境や資源の問題はさらに重要になっていくでしょう。<br/>これからの時代に求められるのは、「より多く」ではなく「より良く」を目指す価値観です。</p>

                <p>経済成長だけでなく、地球環境の保全、格差の是正、多様性の尊重など、バランスの取れた社会を作るための取り組みが必要です。<br/>みなさんが大人になるころには、このような持続可能性への貢献が、仕事選びの重要な基準になっているかもしれません。</p>

                <p>自分の行動や仕事が社会や環境にどのような影響を与えるのかを考え、良い影響を最大化するような選択をすることが、未来の世代にとって当たり前の考え方になるでしょう。</p>

                <h3 id="section7-3">7-3. 個人の幸福と社会の幸福</h3>
                <p>最終的に大切なのは、自分自身の幸福と社会全体の幸福のバランスが大事で、自分だけが豊かで幸せになっても、社会が不安定では本当の幸福は得られません。<br/>逆に、自分の幸せを犠牲にしてばかりでは長続きしません。</p>

                <p>2050年の社会では、「仕事」と「生活」の区別があいまいになり、自分の情熱や目的に沿った活動が、同時に社会に貢献し、収入にもつながるような形が増えているかもしれません。</p>

                <p>大切なのは、自分が本当に大切にしたい価値観や目的を見つけ、それに向かって歩むことです。<br/>そしてその過程で、他の人々と協力し、支え合うことができれば、個人も社会も幸福に近づくことができるでしょう。</p>

                <h2 id="chapter8">まとめ</h2>
                            <img src="./img/pageImg/2-8.png" className="imageBlock" style={{ objectFit: 'cover' }} alt="まとめ" />
                <p>2050年の世界がどうなるかは、誰にも正確に予測できません。テクノロジーの発展、環境の変化、社会システムの転換など、大きな変化が予想される一方で、予期せぬ出来事も起こるでしょう。</p>

                <p>しかし、確かなことが一つあります。それは、未来を形作るのは、ほかでもないみなさん自身だということです。<br/>歴史上のどの世代よりも、今の若い世代は未来を創造する力を持っています。</p>

                <p>今学んでいる知識やスキルの中には、未来では不要になるものもあるかもしれません。<br/>しかし、学ぶことの本質は、特定の情報を覚えることではなく、考え方や学び方を身につけることです。<br/>好奇心を持ち、変化に適応し、他者と協力する力があれば、どんな未来が来ても乗り越えていけるでしょう。</p>

                <p>未来は不確実ですが、それは不安ではなく、可能性に満ちているということでもあります。<br/>みなさんが自分の強みを活かし、情熱を持って取り組める分野を見つけ、変化を恐れず、他者と協力しながら未来を切り開いていってください。</p>

                <p>2050年の世界がどんな姿になるのか、それはみなさん次第です。その未来が、一人一人が輝き、社会全体が調和する素晴らしいものになることを願っています。</p>
            </div>
        </Layout>
    );
}