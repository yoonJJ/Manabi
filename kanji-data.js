// JLPT N5 한자 데이터 (103자)
const KANJI_N5 = [
  { kanji: '日', meaning: '날, 하루, 태양', onyomi: ['ニチ','ジツ'], kunyomi: ['ひ','か'], words: [
    { word: '毎日', reading: 'まいにち', meaning: '매일' },
    { word: '日曜日', reading: 'にちようび', meaning: '일요일' },
    { word: '一日', reading: 'いちにち', meaning: '하루' }
  ]},
  { kanji: '一', meaning: '하나, 한', onyomi: ['イチ','イツ'], kunyomi: ['ひと(つ)'], words: [
    { word: '一人', reading: 'ひとり', meaning: '한 명' },
    { word: '一番', reading: 'いちばん', meaning: '제일, 가장' },
    { word: '一つ', reading: 'ひとつ', meaning: '하나' }
  ]},
  { kanji: '国', meaning: '나라', onyomi: ['コク'], kunyomi: ['くに'], words: [
    { word: '外国', reading: 'がいこく', meaning: '외국' },
    { word: '中国', reading: 'ちゅうごく', meaning: '중국' },
    { word: '国語', reading: 'こくご', meaning: '국어' }
  ]},
  { kanji: '会', meaning: '모이다, 만나다', onyomi: ['カイ','エ'], kunyomi: ['あ(う)'], words: [
    { word: '会社', reading: 'かいしゃ', meaning: '회사' },
    { word: '会議', reading: 'かいぎ', meaning: '회의' },
    { word: '会う', reading: 'あう', meaning: '만나다' }
  ]},
  { kanji: '人', meaning: '사람', onyomi: ['ジン','ニン'], kunyomi: ['ひと'], words: [
    { word: '日本人', reading: 'にほんじん', meaning: '일본인' },
    { word: '一人', reading: 'ひとり', meaning: '혼자' },
    { word: '大人', reading: 'おとな', meaning: '어른' }
  ]},
  { kanji: '年', meaning: '해, 년', onyomi: ['ネン'], kunyomi: ['とし'], words: [
    { word: '今年', reading: 'ことし', meaning: '올해' },
    { word: '去年', reading: 'きょねん', meaning: '작년' },
    { word: '来年', reading: 'らいねん', meaning: '내년' }
  ]},
  { kanji: '大', meaning: '큰', onyomi: ['ダイ','タイ'], kunyomi: ['おお(きい)'], words: [
    { word: '大学', reading: 'だいがく', meaning: '대학교' },
    { word: '大きい', reading: 'おおきい', meaning: '크다' },
    { word: '大好き', reading: 'だいすき', meaning: '매우 좋아함' }
  ]},
  { kanji: '十', meaning: '열, 십', onyomi: ['ジュウ','ジッ'], kunyomi: ['とお'], words: [
    { word: '十分', reading: 'じゅうぶん', meaning: '충분한' },
    { word: '十月', reading: 'じゅうがつ', meaning: '10월' },
    { word: '十日', reading: 'とおか', meaning: '10일' }
  ]},
  { kanji: '二', meaning: '둘', onyomi: ['ニ'], kunyomi: ['ふた(つ)'], words: [
    { word: '二人', reading: 'ふたり', meaning: '두 명' },
    { word: '二月', reading: 'にがつ', meaning: '2월' },
    { word: '二つ', reading: 'ふたつ', meaning: '둘' }
  ]},
  { kanji: '本', meaning: '책, 근본', onyomi: ['ホン'], kunyomi: ['もと'], words: [
    { word: '日本', reading: 'にほん', meaning: '일본' },
    { word: '本当', reading: 'ほんとう', meaning: '정말' },
    { word: '三本', reading: 'さんぼん', meaning: '세 개(길쭉한 것)' }
  ]},
  { kanji: '中', meaning: '가운데, 안', onyomi: ['チュウ'], kunyomi: ['なか'], words: [
    { word: '中学', reading: 'ちゅうがく', meaning: '중학교' },
    { word: '中国', reading: 'ちゅうごく', meaning: '중국' },
    { word: '中', reading: 'なか', meaning: '안, 속' }
  ]},
  { kanji: '長', meaning: '긴, 우두머리', onyomi: ['チョウ'], kunyomi: ['なが(い)'], words: [
    { word: '社長', reading: 'しゃちょう', meaning: '사장' },
    { word: '長い', reading: 'ながい', meaning: '길다' },
    { word: '校長', reading: 'こうちょう', meaning: '교장' }
  ]},
  { kanji: '出', meaning: '나다, 내다', onyomi: ['シュツ'], kunyomi: ['で(る)','だ(す)'], words: [
    { word: '出口', reading: 'でぐち', meaning: '출구' },
    { word: '出る', reading: 'でる', meaning: '나가다' },
    { word: '出す', reading: 'だす', meaning: '내다' }
  ]},
  { kanji: '三', meaning: '셋', onyomi: ['サン'], kunyomi: ['み(つ)','みっ(つ)'], words: [
    { word: '三人', reading: 'さんにん', meaning: '세 명' },
    { word: '三月', reading: 'さんがつ', meaning: '3월' },
    { word: '三つ', reading: 'みっつ', meaning: '셋' }
  ]},
  { kanji: '時', meaning: '때, 시간', onyomi: ['ジ'], kunyomi: ['とき'], words: [
    { word: '時間', reading: 'じかん', meaning: '시간' },
    { word: '時計', reading: 'とけい', meaning: '시계' },
    { word: '何時', reading: 'なんじ', meaning: '몇 시' }
  ]},
  { kanji: '行', meaning: '가다, 행하다', onyomi: ['コウ','ギョウ'], kunyomi: ['い(く)','おこな(う)'], words: [
    { word: '行く', reading: 'いく', meaning: '가다' },
    { word: '旅行', reading: 'りょこう', meaning: '여행' },
    { word: '銀行', reading: 'ぎんこう', meaning: '은행' }
  ]},
  { kanji: '社', meaning: '모임, 회사', onyomi: ['シャ'], kunyomi: ['やしろ'], words: [
    { word: '会社', reading: 'かいしゃ', meaning: '회사' },
    { word: '社会', reading: 'しゃかい', meaning: '사회' },
    { word: '社長', reading: 'しゃちょう', meaning: '사장' }
  ]},
  { kanji: '見', meaning: '보다', onyomi: ['ケン'], kunyomi: ['み(る)','み(える)'], words: [
    { word: '見る', reading: 'みる', meaning: '보다' },
    { word: '見える', reading: 'みえる', meaning: '보이다' },
    { word: '意見', reading: 'いけん', meaning: '의견' }
  ]},
  { kanji: '月', meaning: '달, 월', onyomi: ['ゲツ','ガツ'], kunyomi: ['つき'], words: [
    { word: '月曜日', reading: 'げつようび', meaning: '월요일' },
    { word: '一月', reading: 'いちがつ', meaning: '1월' },
    { word: '今月', reading: 'こんげつ', meaning: '이번 달' }
  ]},
  { kanji: '分', meaning: '나누다, 분', onyomi: ['ブン','フン'], kunyomi: ['わ(かる)'], words: [
    { word: '十分', reading: 'じゅっぷん', meaning: '10분' },
    { word: '分かる', reading: 'わかる', meaning: '알다, 이해하다' },
    { word: '半分', reading: 'はんぶん', meaning: '반' }
  ]},
  { kanji: '後', meaning: '뒤, 나중', onyomi: ['ゴ','コウ'], kunyomi: ['あと','うし(ろ)'], words: [
    { word: '午後', reading: 'ごご', meaning: '오후' },
    { word: '後ろ', reading: 'うしろ', meaning: '뒤' },
    { word: '後で', reading: 'あとで', meaning: '나중에' }
  ]},
  { kanji: '前', meaning: '앞, 이전', onyomi: ['ゼン'], kunyomi: ['まえ'], words: [
    { word: '名前', reading: 'なまえ', meaning: '이름' },
    { word: '午前', reading: 'ごぜん', meaning: '오전' },
    { word: '前', reading: 'まえ', meaning: '앞' }
  ]},
  { kanji: '生', meaning: '나다, 살다', onyomi: ['セイ','ショウ'], kunyomi: ['い(きる)','う(まれる)'], words: [
    { word: '先生', reading: 'せんせい', meaning: '선생님' },
    { word: '学生', reading: 'がくせい', meaning: '학생' },
    { word: '生まれる', reading: 'うまれる', meaning: '태어나다' }
  ]},
  { kanji: '五', meaning: '다섯', onyomi: ['ゴ'], kunyomi: ['いつ(つ)'], words: [
    { word: '五月', reading: 'ごがつ', meaning: '5월' },
    { word: '五つ', reading: 'いつつ', meaning: '다섯' },
    { word: '五人', reading: 'ごにん', meaning: '다섯 명' }
  ]},
  { kanji: '間', meaning: '사이, 동안', onyomi: ['カン','ケン'], kunyomi: ['あいだ','ま'], words: [
    { word: '時間', reading: 'じかん', meaning: '시간' },
    { word: '間', reading: 'あいだ', meaning: '사이' },
    { word: '人間', reading: 'にんげん', meaning: '인간' }
  ]},
  { kanji: '上', meaning: '위', onyomi: ['ジョウ'], kunyomi: ['うえ','あ(がる)','のぼ(る)'], words: [
    { word: '上', reading: 'うえ', meaning: '위' },
    { word: '上手', reading: 'じょうず', meaning: '잘하는' },
    { word: '上がる', reading: 'あがる', meaning: '올라가다' }
  ]},
  { kanji: '東', meaning: '동쪽', onyomi: ['トウ'], kunyomi: ['ひがし'], words: [
    { word: '東京', reading: 'とうきょう', meaning: '도쿄' },
    { word: '東口', reading: 'ひがしぐち', meaning: '동쪽 출구' },
    { word: '東', reading: 'ひがし', meaning: '동쪽' }
  ]},
  { kanji: '四', meaning: '넷', onyomi: ['シ'], kunyomi: ['よ(つ)','よん'], words: [
    { word: '四月', reading: 'しがつ', meaning: '4월' },
    { word: '四つ', reading: 'よっつ', meaning: '넷' },
    { word: '四人', reading: 'よにん', meaning: '네 명' }
  ]},
  { kanji: '今', meaning: '지금', onyomi: ['コン','キン'], kunyomi: ['いま'], words: [
    { word: '今日', reading: 'きょう', meaning: '오늘' },
    { word: '今', reading: 'いま', meaning: '지금' },
    { word: '今週', reading: 'こんしゅう', meaning: '이번 주' }
  ]},
  { kanji: '新', meaning: '새로운', onyomi: ['シン'], kunyomi: ['あたら(しい)','あら(た)'], words: [
    { word: '新しい', reading: 'あたらしい', meaning: '새롭다' },
    { word: '新聞', reading: 'しんぶん', meaning: '신문' },
    { word: '新年', reading: 'しんねん', meaning: '새해' }
  ]},
  { kanji: '金', meaning: '쇠, 돈, 금', onyomi: ['キン','コン'], kunyomi: ['かね'], words: [
    { word: 'お金', reading: 'おかね', meaning: '돈' },
    { word: '金曜日', reading: 'きんようび', meaning: '금요일' },
    { word: '金', reading: 'きん', meaning: '금' }
  ]},
  { kanji: '九', meaning: '아홉', onyomi: ['キュウ','ク'], kunyomi: ['ここの(つ)'], words: [
    { word: '九月', reading: 'くがつ', meaning: '9월' },
    { word: '九つ', reading: 'ここのつ', meaning: '아홉' },
    { word: '九日', reading: 'ここのか', meaning: '9일' }
  ]},
  { kanji: '入', meaning: '들다', onyomi: ['ニュウ'], kunyomi: ['い(る)','はい(る)'], words: [
    { word: '入口', reading: 'いりぐち', meaning: '입구' },
    { word: '入る', reading: 'はいる', meaning: '들어가다' },
    { word: '入れる', reading: 'いれる', meaning: '넣다' }
  ]},
  { kanji: '立', meaning: '서다', onyomi: ['リツ'], kunyomi: ['た(つ)'], words: [
    { word: '立つ', reading: 'たつ', meaning: '서다' },
    { word: '立てる', reading: 'たてる', meaning: '세우다' },
    { word: '国立', reading: 'こくりつ', meaning: '국립' }
  ]},
  { kanji: '手', meaning: '손', onyomi: ['シュ'], kunyomi: ['て'], words: [
    { word: '上手', reading: 'じょうず', meaning: '잘하는' },
    { word: '下手', reading: 'へた', meaning: '서투른' },
    { word: '手紙', reading: 'てがみ', meaning: '편지' }
  ]},
  { kanji: '学', meaning: '배우다', onyomi: ['ガク'], kunyomi: ['まな(ぶ)'], words: [
    { word: '学校', reading: 'がっこう', meaning: '학교' },
    { word: '大学', reading: 'だいがく', meaning: '대학교' },
    { word: '学生', reading: 'がくせい', meaning: '학생' }
  ]},
  { kanji: '高', meaning: '높다, 비싸다', onyomi: ['コウ'], kunyomi: ['たか(い)'], words: [
    { word: '高い', reading: 'たかい', meaning: '높다, 비싸다' },
    { word: '高校', reading: 'こうこう', meaning: '고등학교' },
    { word: '最高', reading: 'さいこう', meaning: '최고' }
  ]},
  { kanji: '円', meaning: '둥글다, 엔(화폐)', onyomi: ['エン'], kunyomi: ['まる(い)'], words: [
    { word: '百円', reading: 'ひゃくえん', meaning: '100엔' },
    { word: '千円', reading: 'せんえん', meaning: '1000엔' },
    { word: '円い', reading: 'まるい', meaning: '둥글다' }
  ]},
  { kanji: '子', meaning: '아이', onyomi: ['シ','ス'], kunyomi: ['こ'], words: [
    { word: '子供', reading: 'こども', meaning: '아이' },
    { word: '女の子', reading: 'おんなのこ', meaning: '여자아이' },
    { word: '男の子', reading: 'おとこのこ', meaning: '남자아이' }
  ]},
  { kanji: '目', meaning: '눈', onyomi: ['モク','ボク'], kunyomi: ['め'], words: [
    { word: '目', reading: 'め', meaning: '눈' },
    { word: '一つ目', reading: 'ひとつめ', meaning: '첫 번째' },
    { word: '目的', reading: 'もくてき', meaning: '목적' }
  ]},
  { kanji: '外', meaning: '바깥', onyomi: ['ガイ','ゲ'], kunyomi: ['そと','ほか'], words: [
    { word: '外国', reading: 'がいこく', meaning: '외국' },
    { word: '外', reading: 'そと', meaning: '바깥' },
    { word: '外出', reading: 'がいしゅつ', meaning: '외출' }
  ]},
  { kanji: '言', meaning: '말, 말하다', onyomi: ['ゲン','ゴン'], kunyomi: ['い(う)','こと'], words: [
    { word: '言う', reading: 'いう', meaning: '말하다' },
    { word: '言葉', reading: 'ことば', meaning: '말, 단어' },
    { word: '一言', reading: 'ひとこと', meaning: '한마디' }
  ]},
  { kanji: '八', meaning: '여덟', onyomi: ['ハチ'], kunyomi: ['や(つ)','やっ(つ)'], words: [
    { word: '八月', reading: 'はちがつ', meaning: '8월' },
    { word: '八つ', reading: 'やっつ', meaning: '여덟' },
    { word: '八日', reading: 'ようか', meaning: '8일' }
  ]},
  { kanji: '六', meaning: '여섯', onyomi: ['ロク'], kunyomi: ['む(つ)','むっ(つ)'], words: [
    { word: '六月', reading: 'ろくがつ', meaning: '6월' },
    { word: '六つ', reading: 'むっつ', meaning: '여섯' },
    { word: '六日', reading: 'むいか', meaning: '6일' }
  ]},
  { kanji: '下', meaning: '아래', onyomi: ['カ','ゲ'], kunyomi: ['した','さ(がる)','くだ(さる)'], words: [
    { word: '下', reading: 'した', meaning: '아래' },
    { word: '下手', reading: 'へた', meaning: '서투른' },
    { word: '地下鉄', reading: 'ちかてつ', meaning: '지하철' }
  ]},
  { kanji: '来', meaning: '오다', onyomi: ['ライ'], kunyomi: ['く(る)','き(たる)'], words: [
    { word: '来る', reading: 'くる', meaning: '오다' },
    { word: '来年', reading: 'らいねん', meaning: '내년' },
    { word: '来月', reading: 'らいげつ', meaning: '다음 달' }
  ]},
  { kanji: '気', meaning: '기운, 마음', onyomi: ['キ','ケ'], kunyomi: [], words: [
    { word: '天気', reading: 'てんき', meaning: '날씨' },
    { word: '元気', reading: 'げんき', meaning: '건강한, 활기찬' },
    { word: '気持ち', reading: 'きもち', meaning: '기분' }
  ]},
  { kanji: '小', meaning: '작다', onyomi: ['ショウ'], kunyomi: ['ちい(さい)','こ','お'], words: [
    { word: '小さい', reading: 'ちいさい', meaning: '작다' },
    { word: '小学校', reading: 'しょうがっこう', meaning: '초등학교' },
    { word: '小説', reading: 'しょうせつ', meaning: '소설' }
  ]},
  { kanji: '七', meaning: '일곱', onyomi: ['シチ'], kunyomi: ['なな(つ)'], words: [
    { word: '七月', reading: 'しちがつ', meaning: '7월' },
    { word: '七つ', reading: 'ななつ', meaning: '일곱' },
    { word: '七日', reading: 'なのか', meaning: '7일' }
  ]},
  { kanji: '山', meaning: '산', onyomi: ['サン'], kunyomi: ['やま'], words: [
    { word: '山', reading: 'やま', meaning: '산' },
    { word: '富士山', reading: 'ふじさん', meaning: '후지산' },
    { word: '火山', reading: 'かざん', meaning: '화산' }
  ]},
  { kanji: '話', meaning: '말하다, 이야기', onyomi: ['ワ'], kunyomi: ['はな(す)','はなし'], words: [
    { word: '話す', reading: 'はなす', meaning: '말하다' },
    { word: '電話', reading: 'でんわ', meaning: '전화' },
    { word: '会話', reading: 'かいわ', meaning: '회화' }
  ]},
  { kanji: '多', meaning: '많다', onyomi: ['タ'], kunyomi: ['おお(い)'], words: [
    { word: '多い', reading: 'おおい', meaning: '많다' },
    { word: '多分', reading: 'たぶん', meaning: '아마' },
    { word: '多数', reading: 'たすう', meaning: '다수' }
  ]},
  { kanji: '安', meaning: '편안하다, 싸다', onyomi: ['アン'], kunyomi: ['やす(い)'], words: [
    { word: '安い', reading: 'やすい', meaning: '싸다' },
    { word: '安心', reading: 'あんしん', meaning: '안심' },
    { word: '安全', reading: 'あんぜん', meaning: '안전' }
  ]},
  { kanji: '女', meaning: '여자', onyomi: ['ジョ','ニョ'], kunyomi: ['おんな'], words: [
    { word: '女の人', reading: 'おんなのひと', meaning: '여자' },
    { word: '女の子', reading: 'おんなのこ', meaning: '여자아이' },
    { word: '女性', reading: 'じょせい', meaning: '여성' }
  ]},
  { kanji: '北', meaning: '북쪽', onyomi: ['ホク'], kunyomi: ['きた'], words: [
    { word: '北', reading: 'きた', meaning: '북쪽' },
    { word: '北口', reading: 'きたぐち', meaning: '북쪽 출구' },
    { word: '東北', reading: 'とうほく', meaning: '동북' }
  ]},
  { kanji: '午', meaning: '낮', onyomi: ['ゴ'], kunyomi: [], words: [
    { word: '午前', reading: 'ごぜん', meaning: '오전' },
    { word: '午後', reading: 'ごご', meaning: '오후' },
    { word: '正午', reading: 'しょうご', meaning: '정오' }
  ]},
  { kanji: '百', meaning: '백', onyomi: ['ヒャク'], kunyomi: [], words: [
    { word: '百円', reading: 'ひゃくえん', meaning: '100엔' },
    { word: '三百', reading: 'さんびゃく', meaning: '300' },
    { word: '百万', reading: 'ひゃくまん', meaning: '백만' }
  ]},
  { kanji: '書', meaning: '쓰다', onyomi: ['ショ'], kunyomi: ['か(く)'], words: [
    { word: '書く', reading: 'かく', meaning: '쓰다' },
    { word: '辞書', reading: 'じしょ', meaning: '사전' },
    { word: '図書館', reading: 'としょかん', meaning: '도서관' }
  ]},
  { kanji: '先', meaning: '먼저, 앞', onyomi: ['セン'], kunyomi: ['さき'], words: [
    { word: '先生', reading: 'せんせい', meaning: '선생님' },
    { word: '先週', reading: 'せんしゅう', meaning: '지난주' },
    { word: '先月', reading: 'せんげつ', meaning: '지난달' }
  ]},
  { kanji: '名', meaning: '이름', onyomi: ['メイ','ミョウ'], kunyomi: ['な'], words: [
    { word: '名前', reading: 'なまえ', meaning: '이름' },
    { word: '有名', reading: 'ゆうめい', meaning: '유명한' },
    { word: '名人', reading: 'めいじん', meaning: '명인' }
  ]},
  { kanji: '川', meaning: '강, 내', onyomi: ['セン'], kunyomi: ['かわ'], words: [
    { word: '川', reading: 'かわ', meaning: '강' },
    { word: '小川', reading: 'おがわ', meaning: '시내, 개울' },
    { word: '河川', reading: 'かせん', meaning: '하천' }
  ]},
  { kanji: '千', meaning: '천', onyomi: ['セン'], kunyomi: ['ち'], words: [
    { word: '千円', reading: 'せんえん', meaning: '1000엔' },
    { word: '三千', reading: 'さんぜん', meaning: '3000' },
    { word: '千年', reading: 'せんねん', meaning: '천 년' }
  ]},
  { kanji: '道', meaning: '길', onyomi: ['ドウ'], kunyomi: ['みち'], words: [
    { word: '道', reading: 'みち', meaning: '길' },
    { word: '道路', reading: 'どうろ', meaning: '도로' },
    { word: '北海道', reading: 'ほっかいどう', meaning: '홋카이도' }
  ]},
  { kanji: '水', meaning: '물', onyomi: ['スイ'], kunyomi: ['みず'], words: [
    { word: '水', reading: 'みず', meaning: '물' },
    { word: '水曜日', reading: 'すいようび', meaning: '수요일' },
    { word: '水泳', reading: 'すいえい', meaning: '수영' }
  ]},
  { kanji: '半', meaning: '반', onyomi: ['ハン'], kunyomi: ['なか(ば)'], words: [
    { word: '半分', reading: 'はんぶん', meaning: '반' },
    { word: '半年', reading: 'はんとし', meaning: '반 년' },
    { word: '三時半', reading: 'さんじはん', meaning: '3시 반' }
  ]},
  { kanji: '男', meaning: '남자', onyomi: ['ダン','ナン'], kunyomi: ['おとこ'], words: [
    { word: '男の人', reading: 'おとこのひと', meaning: '남자' },
    { word: '男の子', reading: 'おとこのこ', meaning: '남자아이' },
    { word: '男性', reading: 'だんせい', meaning: '남성' }
  ]},
  { kanji: '西', meaning: '서쪽', onyomi: ['セイ','サイ'], kunyomi: ['にし'], words: [
    { word: '西', reading: 'にし', meaning: '서쪽' },
    { word: '西口', reading: 'にしぐち', meaning: '서쪽 출구' },
    { word: '東西', reading: 'とうざい', meaning: '동서' }
  ]},
  { kanji: '電', meaning: '번개, 전기', onyomi: ['デン'], kunyomi: [], words: [
    { word: '電話', reading: 'でんわ', meaning: '전화' },
    { word: '電車', reading: 'でんしゃ', meaning: '전철' },
    { word: '電気', reading: 'でんき', meaning: '전기' }
  ]},
  { kanji: '口', meaning: '입', onyomi: ['コウ','ク'], kunyomi: ['くち'], words: [
    { word: '入口', reading: 'いりぐち', meaning: '입구' },
    { word: '出口', reading: 'でぐち', meaning: '출구' },
    { word: '人口', reading: 'じんこう', meaning: '인구' }
  ]},
  { kanji: '少', meaning: '적다, 조금', onyomi: ['ショウ'], kunyomi: ['すく(ない)','すこ(し)'], words: [
    { word: '少し', reading: 'すこし', meaning: '조금' },
    { word: '少ない', reading: 'すくない', meaning: '적다' },
    { word: '少年', reading: 'しょうねん', meaning: '소년' }
  ]},
  { kanji: '校', meaning: '학교', onyomi: ['コウ'], kunyomi: [], words: [
    { word: '学校', reading: 'がっこう', meaning: '학교' },
    { word: '高校', reading: 'こうこう', meaning: '고등학교' },
    { word: '校長', reading: 'こうちょう', meaning: '교장' }
  ]},
  { kanji: '語', meaning: '말, 언어', onyomi: ['ゴ'], kunyomi: ['かた(る)'], words: [
    { word: '日本語', reading: 'にほんご', meaning: '일본어' },
    { word: '英語', reading: 'えいご', meaning: '영어' },
    { word: '韓国語', reading: 'かんこくご', meaning: '한국어' }
  ]},
  { kanji: '空', meaning: '하늘, 비다', onyomi: ['クウ'], kunyomi: ['そら','あ(く)','から'], words: [
    { word: '空', reading: 'そら', meaning: '하늘' },
    { word: '空気', reading: 'くうき', meaning: '공기' },
    { word: '空港', reading: 'くうこう', meaning: '공항' }
  ]},
  { kanji: '土', meaning: '흙, 땅', onyomi: ['ド','ト'], kunyomi: ['つち'], words: [
    { word: '土曜日', reading: 'どようび', meaning: '토요일' },
    { word: '土地', reading: 'とち', meaning: '토지' },
    { word: '土', reading: 'つち', meaning: '흙' }
  ]},
  { kanji: '木', meaning: '나무', onyomi: ['モク','ボク'], kunyomi: ['き','こ'], words: [
    { word: '木曜日', reading: 'もくようび', meaning: '목요일' },
    { word: '木', reading: 'き', meaning: '나무' },
    { word: '大木', reading: 'たいぼく', meaning: '큰 나무' }
  ]},
  { kanji: '聞', meaning: '듣다', onyomi: ['ブン','モン'], kunyomi: ['き(く)'], words: [
    { word: '聞く', reading: 'きく', meaning: '듣다, 묻다' },
    { word: '新聞', reading: 'しんぶん', meaning: '신문' },
    { word: '聞こえる', reading: 'きこえる', meaning: '들리다' }
  ]},
  { kanji: '食', meaning: '먹다', onyomi: ['ショク'], kunyomi: ['た(べる)'], words: [
    { word: '食べる', reading: 'たべる', meaning: '먹다' },
    { word: '食事', reading: 'しょくじ', meaning: '식사' },
    { word: '食堂', reading: 'しょくどう', meaning: '식당' }
  ]},
  { kanji: '車', meaning: '수레, 차', onyomi: ['シャ'], kunyomi: ['くるま'], words: [
    { word: '電車', reading: 'でんしゃ', meaning: '전철' },
    { word: '自動車', reading: 'じどうしゃ', meaning: '자동차' },
    { word: '車', reading: 'くるま', meaning: '차' }
  ]},
  { kanji: '何', meaning: '무엇, 어느', onyomi: ['カ'], kunyomi: ['なに','なん'], words: [
    { word: '何', reading: 'なに', meaning: '무엇' },
    { word: '何時', reading: 'なんじ', meaning: '몇 시' },
    { word: '何人', reading: 'なんにん', meaning: '몇 명' }
  ]},
  { kanji: '南', meaning: '남쪽', onyomi: ['ナン'], kunyomi: ['みなみ'], words: [
    { word: '南', reading: 'みなみ', meaning: '남쪽' },
    { word: '南口', reading: 'みなみぐち', meaning: '남쪽 출구' },
    { word: '南北', reading: 'なんぼく', meaning: '남북' }
  ]},
  { kanji: '足', meaning: '발, 충분하다', onyomi: ['ソク'], kunyomi: ['あし','た(りる)'], words: [
    { word: '足', reading: 'あし', meaning: '발, 다리' },
    { word: '足りる', reading: 'たりる', meaning: '충분하다' },
    { word: '不足', reading: 'ふそく', meaning: '부족' }
  ]},
  { kanji: '万', meaning: '만', onyomi: ['マン','バン'], kunyomi: [], words: [
    { word: '一万', reading: 'いちまん', meaning: '만' },
    { word: '万年筆', reading: 'まんねんひつ', meaning: '만년필' },
    { word: '十万', reading: 'じゅうまん', meaning: '10만' }
  ]},
  { kanji: '店', meaning: '가게', onyomi: ['テン'], kunyomi: ['みせ'], words: [
    { word: '店', reading: 'みせ', meaning: '가게' },
    { word: '喫茶店', reading: 'きっさてん', meaning: '찻집, 카페' },
    { word: '店員', reading: 'てんいん', meaning: '점원' }
  ]},
  { kanji: '毎', meaning: '매, 마다', onyomi: ['マイ'], kunyomi: [], words: [
    { word: '毎日', reading: 'まいにち', meaning: '매일' },
    { word: '毎週', reading: 'まいしゅう', meaning: '매주' },
    { word: '毎朝', reading: 'まいあさ', meaning: '매일 아침' }
  ]},
  { kanji: '白', meaning: '흰, 하얀', onyomi: ['ハク','ビャク'], kunyomi: ['しろ(い)'], words: [
    { word: '白い', reading: 'しろい', meaning: '하얗다' },
    { word: '白', reading: 'しろ', meaning: '흰색' },
    { word: '白人', reading: 'はくじん', meaning: '백인' }
  ]},
  { kanji: '古', meaning: '옛, 오래된', onyomi: ['コ'], kunyomi: ['ふる(い)'], words: [
    { word: '古い', reading: 'ふるい', meaning: '오래되다' },
    { word: '中古', reading: 'ちゅうこ', meaning: '중고' },
    { word: '古典', reading: 'こてん', meaning: '고전' }
  ]},
  { kanji: '天', meaning: '하늘', onyomi: ['テン'], kunyomi: ['あめ','あま'], words: [
    { word: '天気', reading: 'てんき', meaning: '날씨' },
    { word: '天国', reading: 'てんごく', meaning: '천국' },
    { word: '天ぷら', reading: 'てんぷら', meaning: '튀김' }
  ]},
  { kanji: '買', meaning: '사다', onyomi: ['バイ'], kunyomi: ['か(う)'], words: [
    { word: '買う', reading: 'かう', meaning: '사다' },
    { word: '買い物', reading: 'かいもの', meaning: '쇼핑' },
    { word: '売買', reading: 'ばいばい', meaning: '매매' }
  ]},
  { kanji: '週', meaning: '주', onyomi: ['シュウ'], kunyomi: [], words: [
    { word: '今週', reading: 'こんしゅう', meaning: '이번 주' },
    { word: '来週', reading: 'らいしゅう', meaning: '다음 주' },
    { word: '先週', reading: 'せんしゅう', meaning: '지난주' }
  ]},
  { kanji: '母', meaning: '어머니', onyomi: ['ボ'], kunyomi: ['はは'], words: [
    { word: 'お母さん', reading: 'おかあさん', meaning: '어머니' },
    { word: '母', reading: 'はは', meaning: '(우리) 엄마' },
    { word: '母国', reading: 'ぼこく', meaning: '모국' }
  ]},
  { kanji: '火', meaning: '불', onyomi: ['カ'], kunyomi: ['ひ'], words: [
    { word: '火曜日', reading: 'かようび', meaning: '화요일' },
    { word: '火', reading: 'ひ', meaning: '불' },
    { word: '花火', reading: 'はなび', meaning: '불꽃놀이' }
  ]},
  { kanji: '花', meaning: '꽃', onyomi: ['カ'], kunyomi: ['はな'], words: [
    { word: '花', reading: 'はな', meaning: '꽃' },
    { word: '花見', reading: 'はなみ', meaning: '꽃구경' },
    { word: '花火', reading: 'はなび', meaning: '불꽃놀이' }
  ]},
  { kanji: '右', meaning: '오른쪽', onyomi: ['ウ','ユウ'], kunyomi: ['みぎ'], words: [
    { word: '右', reading: 'みぎ', meaning: '오른쪽' },
    { word: '右手', reading: 'みぎて', meaning: '오른손' },
    { word: '左右', reading: 'さゆう', meaning: '좌우' }
  ]},
  { kanji: '読', meaning: '읽다', onyomi: ['ドク','トク'], kunyomi: ['よ(む)'], words: [
    { word: '読む', reading: 'よむ', meaning: '읽다' },
    { word: '読書', reading: 'どくしょ', meaning: '독서' },
    { word: '読者', reading: 'どくしゃ', meaning: '독자' }
  ]},
  { kanji: '友', meaning: '벗, 친구', onyomi: ['ユウ'], kunyomi: ['とも'], words: [
    { word: '友達', reading: 'ともだち', meaning: '친구' },
    { word: '友人', reading: 'ゆうじん', meaning: '친구(격식)' },
    { word: '親友', reading: 'しんゆう', meaning: '절친' }
  ]},
  { kanji: '左', meaning: '왼쪽', onyomi: ['サ'], kunyomi: ['ひだり'], words: [
    { word: '左', reading: 'ひだり', meaning: '왼쪽' },
    { word: '左手', reading: 'ひだりて', meaning: '왼손' },
    { word: '左右', reading: 'さゆう', meaning: '좌우' }
  ]},
  { kanji: '休', meaning: '쉬다', onyomi: ['キュウ'], kunyomi: ['やす(む)'], words: [
    { word: '休む', reading: 'やすむ', meaning: '쉬다' },
    { word: '休み', reading: 'やすみ', meaning: '휴일, 쉬는 날' },
    { word: '休日', reading: 'きゅうじつ', meaning: '휴일' }
  ]},
  { kanji: '父', meaning: '아버지', onyomi: ['フ'], kunyomi: ['ちち'], words: [
    { word: 'お父さん', reading: 'おとうさん', meaning: '아버지' },
    { word: '父', reading: 'ちち', meaning: '(우리) 아빠' },
    { word: '父母', reading: 'ふぼ', meaning: '부모' }
  ]},
  { kanji: '駅', meaning: '역', onyomi: ['エキ'], kunyomi: [], words: [
    { word: '駅', reading: 'えき', meaning: '역' },
    { word: '駅前', reading: 'えきまえ', meaning: '역 앞' },
    { word: '東京駅', reading: 'とうきょうえき', meaning: '도쿄역' }
  ]},
  { kanji: '雨', meaning: '비', onyomi: ['ウ'], kunyomi: ['あめ'], words: [
    { word: '雨', reading: 'あめ', meaning: '비' },
    { word: '大雨', reading: 'おおあめ', meaning: '폭우' },
    { word: '梅雨', reading: 'つゆ', meaning: '장마' }
  ]},
  { kanji: '飲', meaning: '마시다', onyomi: ['イン'], kunyomi: ['の(む)'], words: [
    { word: '飲む', reading: 'のむ', meaning: '마시다' },
    { word: '飲み物', reading: 'のみもの', meaning: '음료' },
    { word: '飲料', reading: 'いんりょう', meaning: '음료' }
  ]},
  { kanji: '魚', meaning: '물고기', onyomi: ['ギョ'], kunyomi: ['さかな','うお'], words: [
    { word: '魚', reading: 'さかな', meaning: '생선' },
    { word: '金魚', reading: 'きんぎょ', meaning: '금붕어' },
    { word: '魚屋', reading: 'さかなや', meaning: '생선 가게' }
  ]},
  { kanji: '耳', meaning: '귀', onyomi: ['ジ'], kunyomi: ['みみ'], words: [
    { word: '耳', reading: 'みみ', meaning: '귀' },
    { word: '耳鼻科', reading: 'じびか', meaning: '이비인후과' },
    { word: '早耳', reading: 'はやみみ', meaning: '빠른 귀(소식통)' }
  ]}
];

// JLPT N4 한자 데이터 (181자)
const KANJI_N4 = [
  { kanji: '不', meaning: '아닐, 않다', onyomi: ['フ','ブ'], kunyomi: [], words: [
    { word: '不便', reading: 'ふべん', meaning: '불편' },
    { word: '不安', reading: 'ふあん', meaning: '불안' },
    { word: '不足', reading: 'ふそく', meaning: '부족' }
  ]},
  { kanji: '世', meaning: '세상, 대', onyomi: ['セイ','セ'], kunyomi: ['よ'], words: [
    { word: '世界', reading: 'せかい', meaning: '세계' },
    { word: '世話', reading: 'せわ', meaning: '돌봄' },
    { word: '世の中', reading: 'よのなか', meaning: '세상' }
  ]},
  { kanji: '主', meaning: '주인', onyomi: ['シュ'], kunyomi: ['ぬし','おも'], words: [
    { word: '主人', reading: 'しゅじん', meaning: '주인, 남편' },
    { word: '主婦', reading: 'しゅふ', meaning: '주부' },
    { word: '主に', reading: 'おもに', meaning: '주로' }
  ]},
  { kanji: '以', meaning: '써, 이래', onyomi: ['イ'], kunyomi: [], words: [
    { word: '以上', reading: 'いじょう', meaning: '이상' },
    { word: '以下', reading: 'いか', meaning: '이하' },
    { word: '以前', reading: 'いぜん', meaning: '이전' }
  ]},
  { kanji: '仕', meaning: '섬기다, 일', onyomi: ['シ'], kunyomi: ['つか(える)'], words: [
    { word: '仕事', reading: 'しごと', meaning: '일' },
    { word: '仕方', reading: 'しかた', meaning: '방법' },
    { word: '仕える', reading: 'つかえる', meaning: '섬기다' }
  ]},
  { kanji: '代', meaning: '대신, 시대', onyomi: ['ダイ','タイ'], kunyomi: ['か(わる)','よ'], words: [
    { word: '時代', reading: 'じだい', meaning: '시대' },
    { word: '代わり', reading: 'かわり', meaning: '대신' },
    { word: '現代', reading: 'げんだい', meaning: '현대' }
  ]},
  { kanji: '住', meaning: '살다', onyomi: ['ジュウ'], kunyomi: ['す(む)'], words: [
    { word: '住む', reading: 'すむ', meaning: '살다' },
    { word: '住所', reading: 'じゅうしょ', meaning: '주소' },
    { word: '住民', reading: 'じゅうみん', meaning: '주민' }
  ]},
  { kanji: '体', meaning: '몸', onyomi: ['タイ','テイ'], kunyomi: ['からだ'], words: [
    { word: '体', reading: 'からだ', meaning: '몸' },
    { word: '体育', reading: 'たいいく', meaning: '체육' },
    { word: '体重', reading: 'たいじゅう', meaning: '체중' }
  ]},
  { kanji: '作', meaning: '만들다', onyomi: ['サク','サ'], kunyomi: ['つく(る)'], words: [
    { word: '作る', reading: 'つくる', meaning: '만들다' },
    { word: '作文', reading: 'さくぶん', meaning: '작문' },
    { word: '作品', reading: 'さくひん', meaning: '작품' }
  ]},
  { kanji: '使', meaning: '사용하다', onyomi: ['シ'], kunyomi: ['つか(う)'], words: [
    { word: '使う', reading: 'つかう', meaning: '사용하다' },
    { word: '大使', reading: 'たいし', meaning: '대사' },
    { word: '使い方', reading: 'つかいかた', meaning: '사용법' }
  ]},
  { kanji: '借', meaning: '빌리다', onyomi: ['シャク'], kunyomi: ['か(りる)'], words: [
    { word: '借りる', reading: 'かりる', meaning: '빌리다' },
    { word: '貸借', reading: 'たいしゃく', meaning: '대차' }
  ]},
  { kanji: '便', meaning: '편하다, 편지', onyomi: ['ベン','ビン'], kunyomi: ['たよ(り)'], words: [
    { word: '便利', reading: 'べんり', meaning: '편리' },
    { word: '郵便', reading: 'ゆうびん', meaning: '우편' },
    { word: '便', reading: 'びん', meaning: '편(비행기 등)' }
  ]},
  { kanji: '働', meaning: '일하다', onyomi: ['ドウ'], kunyomi: ['はたら(く)'], words: [
    { word: '働く', reading: 'はたらく', meaning: '일하다' },
    { word: '労働', reading: 'ろうどう', meaning: '노동' }
  ]},
  { kanji: '元', meaning: '원래, 건강', onyomi: ['ゲン','ガン'], kunyomi: ['もと'], words: [
    { word: '元気', reading: 'げんき', meaning: '건강한' },
    { word: '元', reading: 'もと', meaning: '원래' },
    { word: '元日', reading: 'がんじつ', meaning: '설날' }
  ]},
  { kanji: '兄', meaning: '형, 오빠', onyomi: ['ケイ','キョウ'], kunyomi: ['あに'], words: [
    { word: 'お兄さん', reading: 'おにいさん', meaning: '형, 오빠' },
    { word: '兄弟', reading: 'きょうだい', meaning: '형제' },
    { word: '兄', reading: 'あに', meaning: '(나의) 형' }
  ]},
  { kanji: '光', meaning: '빛', onyomi: ['コウ'], kunyomi: ['ひかり','ひか(る)'], words: [
    { word: '光', reading: 'ひかり', meaning: '빛' },
    { word: '光る', reading: 'ひかる', meaning: '빛나다' },
    { word: '日光', reading: 'にっこう', meaning: '햇빛' }
  ]},
  { kanji: '公', meaning: '공공', onyomi: ['コウ'], kunyomi: ['おおやけ'], words: [
    { word: '公園', reading: 'こうえん', meaning: '공원' },
    { word: '公共', reading: 'こうきょう', meaning: '공공' },
    { word: '公務員', reading: 'こうむいん', meaning: '공무원' }
  ]},
  { kanji: '写', meaning: '베끼다, 사진', onyomi: ['シャ'], kunyomi: ['うつ(す)'], words: [
    { word: '写真', reading: 'しゃしん', meaning: '사진' },
    { word: '写す', reading: 'うつす', meaning: '찍다, 베끼다' }
  ]},
  { kanji: '冬', meaning: '겨울', onyomi: ['トウ'], kunyomi: ['ふゆ'], words: [
    { word: '冬', reading: 'ふゆ', meaning: '겨울' },
    { word: '冬休み', reading: 'ふゆやすみ', meaning: '겨울 방학' },
    { word: '真冬', reading: 'まふゆ', meaning: '한겨울' }
  ]},
  { kanji: '切', meaning: '자르다', onyomi: ['セツ','サイ'], kunyomi: ['き(る)'], words: [
    { word: '切る', reading: 'きる', meaning: '자르다' },
    { word: '大切', reading: 'たいせつ', meaning: '소중한' },
    { word: '切手', reading: 'きって', meaning: '우표' }
  ]},
  { kanji: '別', meaning: '나누다, 다른', onyomi: ['ベツ'], kunyomi: ['わか(れる)'], words: [
    { word: '別に', reading: 'べつに', meaning: '별로' },
    { word: '特別', reading: 'とくべつ', meaning: '특별' },
    { word: '別れる', reading: 'わかれる', meaning: '헤어지다' }
  ]},
  { kanji: '力', meaning: '힘', onyomi: ['リョク','リキ'], kunyomi: ['ちから'], words: [
    { word: '力', reading: 'ちから', meaning: '힘' },
    { word: '努力', reading: 'どりょく', meaning: '노력' },
    { word: '電力', reading: 'でんりょく', meaning: '전력' }
  ]},
  { kanji: '勉', meaning: '힘쓰다', onyomi: ['ベン'], kunyomi: [], words: [
    { word: '勉強', reading: 'べんきょう', meaning: '공부' }
  ]},
  { kanji: '動', meaning: '움직이다', onyomi: ['ドウ'], kunyomi: ['うご(く)'], words: [
    { word: '動く', reading: 'うごく', meaning: '움직이다' },
    { word: '自動車', reading: 'じどうしゃ', meaning: '자동차' },
    { word: '運動', reading: 'うんどう', meaning: '운동' }
  ]},
  { kanji: '区', meaning: '구역', onyomi: ['ク'], kunyomi: [], words: [
    { word: '区', reading: 'く', meaning: '구' },
    { word: '区別', reading: 'くべつ', meaning: '구별' },
    { word: '地区', reading: 'ちく', meaning: '지구' }
  ]},
  { kanji: '医', meaning: '의사, 의학', onyomi: ['イ'], kunyomi: [], words: [
    { word: '医者', reading: 'いしゃ', meaning: '의사' },
    { word: '医学', reading: 'いがく', meaning: '의학' },
    { word: '医院', reading: 'いいん', meaning: '의원' }
  ]},
  { kanji: '去', meaning: '떠나다, 지난', onyomi: ['キョ','コ'], kunyomi: ['さ(る)'], words: [
    { word: '去年', reading: 'きょねん', meaning: '작년' },
    { word: '過去', reading: 'かこ', meaning: '과거' }
  ]},
  { kanji: '台', meaning: '대', onyomi: ['ダイ','タイ'], kunyomi: [], words: [
    { word: '台所', reading: 'だいどころ', meaning: '부엌' },
    { word: '台風', reading: 'たいふう', meaning: '태풍' },
    { word: '一台', reading: 'いちだい', meaning: '한 대' }
  ]},
  { kanji: '合', meaning: '합하다, 맞다', onyomi: ['ゴウ','ガッ'], kunyomi: ['あ(う)'], words: [
    { word: '合う', reading: 'あう', meaning: '맞다' },
    { word: '場合', reading: 'ばあい', meaning: '경우' },
    { word: '試合', reading: 'しあい', meaning: '시합' }
  ]},
  { kanji: '同', meaning: '같다', onyomi: ['ドウ'], kunyomi: ['おな(じ)'], words: [
    { word: '同じ', reading: 'おなじ', meaning: '같은' },
    { word: '同時', reading: 'どうじ', meaning: '동시' },
    { word: '同僚', reading: 'どうりょう', meaning: '동료' }
  ]},
  { kanji: '味', meaning: '맛', onyomi: ['ミ'], kunyomi: ['あじ'], words: [
    { word: '味', reading: 'あじ', meaning: '맛' },
    { word: '意味', reading: 'いみ', meaning: '의미' },
    { word: '趣味', reading: 'しゅみ', meaning: '취미' }
  ]},
  { kanji: '品', meaning: '물건, 품', onyomi: ['ヒン'], kunyomi: ['しな'], words: [
    { word: '品物', reading: 'しなもの', meaning: '물건' },
    { word: '食品', reading: 'しょくひん', meaning: '식품' },
    { word: '作品', reading: 'さくひん', meaning: '작품' }
  ]},
  { kanji: '員', meaning: '사람, 원', onyomi: ['イン'], kunyomi: [], words: [
    { word: '会員', reading: 'かいいん', meaning: '회원' },
    { word: '店員', reading: 'てんいん', meaning: '점원' },
    { word: '駅員', reading: 'えきいん', meaning: '역무원' }
  ]},
  { kanji: '問', meaning: '묻다', onyomi: ['モン'], kunyomi: ['と(う)'], words: [
    { word: '問題', reading: 'もんだい', meaning: '문제' },
    { word: '質問', reading: 'しつもん', meaning: '질문' },
    { word: '問う', reading: 'とう', meaning: '묻다' }
  ]},
  { kanji: '図', meaning: '그림, 도', onyomi: ['ズ','ト'], kunyomi: ['はか(る)'], words: [
    { word: '図書館', reading: 'としょかん', meaning: '도서관' },
    { word: '地図', reading: 'ちず', meaning: '지도' }
  ]},
  { kanji: '地', meaning: '땅', onyomi: ['チ','ジ'], kunyomi: [], words: [
    { word: '地下鉄', reading: 'ちかてつ', meaning: '지하철' },
    { word: '地図', reading: 'ちず', meaning: '지도' },
    { word: '土地', reading: 'とち', meaning: '토지' }
  ]},
  { kanji: '堂', meaning: '당, 건물', onyomi: ['ドウ'], kunyomi: [], words: [
    { word: '食堂', reading: 'しょくどう', meaning: '식당' },
    { word: '公会堂', reading: 'こうかいどう', meaning: '공회당' }
  ]},
  { kanji: '場', meaning: '곳, 장소', onyomi: ['ジョウ'], kunyomi: ['ば'], words: [
    { word: '場所', reading: 'ばしょ', meaning: '장소' },
    { word: '場合', reading: 'ばあい', meaning: '경우' },
    { word: '工場', reading: 'こうじょう', meaning: '공장' }
  ]},
  { kanji: '売', meaning: '팔다', onyomi: ['バイ'], kunyomi: ['う(る)'], words: [
    { word: '売る', reading: 'うる', meaning: '팔다' },
    { word: '売り場', reading: 'うりば', meaning: '매장' },
    { word: '売店', reading: 'ばいてん', meaning: '매점' }
  ]},
  { kanji: '夏', meaning: '여름', onyomi: ['カ'], kunyomi: ['なつ'], words: [
    { word: '夏', reading: 'なつ', meaning: '여름' },
    { word: '夏休み', reading: 'なつやすみ', meaning: '여름 방학' },
    { word: '真夏', reading: 'まなつ', meaning: '한여름' }
  ]},
  { kanji: '夕', meaning: '저녁', onyomi: ['セキ'], kunyomi: ['ゆう'], words: [
    { word: '夕方', reading: 'ゆうがた', meaning: '저녁 무렵' },
    { word: '夕飯', reading: 'ゆうはん', meaning: '저녁 식사' },
    { word: '夕日', reading: 'ゆうひ', meaning: '석양' }
  ]},
  { kanji: '夜', meaning: '밤', onyomi: ['ヤ'], kunyomi: ['よる','よ'], words: [
    { word: '夜', reading: 'よる', meaning: '밤' },
    { word: '今夜', reading: 'こんや', meaning: '오늘 밤' },
    { word: '夜中', reading: 'よなか', meaning: '한밤중' }
  ]},
  { kanji: '夫', meaning: '남편, 지아비', onyomi: ['フ','フウ'], kunyomi: ['おっと'], words: [
    { word: '夫', reading: 'おっと', meaning: '남편' },
    { word: '夫婦', reading: 'ふうふ', meaning: '부부' },
    { word: '夫人', reading: 'ふじん', meaning: '부인' }
  ]},
  { kanji: '太', meaning: '굵다, 클', onyomi: ['タイ','タ'], kunyomi: ['ふと(い)'], words: [
    { word: '太い', reading: 'ふとい', meaning: '굵다' },
    { word: '太陽', reading: 'たいよう', meaning: '태양' },
    { word: '太る', reading: 'ふとる', meaning: '살찌다' }
  ]},
  { kanji: '好', meaning: '좋아하다', onyomi: ['コウ'], kunyomi: ['す(き)','この(む)'], words: [
    { word: '好き', reading: 'すき', meaning: '좋아하는' },
    { word: '大好き', reading: 'だいすき', meaning: '아주 좋아하는' },
    { word: '好む', reading: 'このむ', meaning: '선호하다' }
  ]},
  { kanji: '妹', meaning: '여동생', onyomi: ['マイ'], kunyomi: ['いもうと'], words: [
    { word: '妹', reading: 'いもうと', meaning: '여동생' },
    { word: '姉妹', reading: 'しまい', meaning: '자매' }
  ]},
  { kanji: '姉', meaning: '언니, 누나', onyomi: ['シ'], kunyomi: ['あね'], words: [
    { word: 'お姉さん', reading: 'おねえさん', meaning: '언니, 누나' },
    { word: '姉', reading: 'あね', meaning: '(나의) 언니' },
    { word: '姉妹', reading: 'しまい', meaning: '자매' }
  ]},
  { kanji: '始', meaning: '시작하다', onyomi: ['シ'], kunyomi: ['はじ(める)','はじ(まる)'], words: [
    { word: '始める', reading: 'はじめる', meaning: '시작하다' },
    { word: '始まる', reading: 'はじまる', meaning: '시작되다' },
    { word: '開始', reading: 'かいし', meaning: '개시' }
  ]},
  { kanji: '字', meaning: '글자', onyomi: ['ジ'], kunyomi: [], words: [
    { word: '漢字', reading: 'かんじ', meaning: '한자' },
    { word: '文字', reading: 'もじ', meaning: '문자' },
    { word: '字', reading: 'じ', meaning: '글자' }
  ]},
  { kanji: '室', meaning: '방', onyomi: ['シツ'], kunyomi: ['むろ'], words: [
    { word: '教室', reading: 'きょうしつ', meaning: '교실' },
    { word: '会議室', reading: 'かいぎしつ', meaning: '회의실' },
    { word: '室内', reading: 'しつない', meaning: '실내' }
  ]},
  { kanji: '家', meaning: '집, 가문', onyomi: ['カ','ケ'], kunyomi: ['いえ','や'], words: [
    { word: '家', reading: 'いえ', meaning: '집' },
    { word: '家族', reading: 'かぞく', meaning: '가족' },
    { word: '家庭', reading: 'かてい', meaning: '가정' }
  ]},
  { kanji: '屋', meaning: '집, 가게', onyomi: ['オク'], kunyomi: ['や'], words: [
    { word: '部屋', reading: 'へや', meaning: '방' },
    { word: '肉屋', reading: 'にくや', meaning: '정육점' },
    { word: '本屋', reading: 'ほんや', meaning: '서점' }
  ]},
  { kanji: '工', meaning: '공, 장인', onyomi: ['コウ','ク'], kunyomi: [], words: [
    { word: '工場', reading: 'こうじょう', meaning: '공장' },
    { word: '工事', reading: 'こうじ', meaning: '공사' },
    { word: '工業', reading: 'こうぎょう', meaning: '공업' }
  ]},
  { kanji: '広', meaning: '넓다', onyomi: ['コウ'], kunyomi: ['ひろ(い)'], words: [
    { word: '広い', reading: 'ひろい', meaning: '넓다' },
    { word: '広場', reading: 'ひろば', meaning: '광장' },
    { word: '広告', reading: 'こうこく', meaning: '광고' }
  ]},
  { kanji: '度', meaning: '도, 번', onyomi: ['ド','タク'], kunyomi: ['たび'], words: [
    { word: '今度', reading: 'こんど', meaning: '이번' },
    { word: '温度', reading: 'おんど', meaning: '온도' },
    { word: '一度', reading: 'いちど', meaning: '한 번' }
  ]},
  { kanji: '建', meaning: '세우다', onyomi: ['ケン','コン'], kunyomi: ['た(てる)'], words: [
    { word: '建てる', reading: 'たてる', meaning: '세우다' },
    { word: '建物', reading: 'たてもの', meaning: '건물' },
    { word: '建設', reading: 'けんせつ', meaning: '건설' }
  ]},
  { kanji: '引', meaning: '끌다', onyomi: ['イン'], kunyomi: ['ひ(く)'], words: [
    { word: '引く', reading: 'ひく', meaning: '끌다' },
    { word: '引っ越す', reading: 'ひっこす', meaning: '이사하다' },
    { word: '引き出し', reading: 'ひきだし', meaning: '서랍' }
  ]},
  { kanji: '弟', meaning: '남동생', onyomi: ['テイ','ダイ'], kunyomi: ['おとうと'], words: [
    { word: '弟', reading: 'おとうと', meaning: '남동생' },
    { word: '兄弟', reading: 'きょうだい', meaning: '형제' }
  ]},
  { kanji: '弱', meaning: '약하다', onyomi: ['ジャク'], kunyomi: ['よわ(い)'], words: [
    { word: '弱い', reading: 'よわい', meaning: '약하다' },
    { word: '弱点', reading: 'じゃくてん', meaning: '약점' }
  ]},
  { kanji: '強', meaning: '강하다', onyomi: ['キョウ','ゴウ'], kunyomi: ['つよ(い)'], words: [
    { word: '強い', reading: 'つよい', meaning: '강하다' },
    { word: '勉強', reading: 'べんきょう', meaning: '공부' },
    { word: '強調', reading: 'きょうちょう', meaning: '강조' }
  ]},
  { kanji: '待', meaning: '기다리다', onyomi: ['タイ'], kunyomi: ['ま(つ)'], words: [
    { word: '待つ', reading: 'まつ', meaning: '기다리다' },
    { word: '招待', reading: 'しょうたい', meaning: '초대' },
    { word: '期待', reading: 'きたい', meaning: '기대' }
  ]},
  { kanji: '心', meaning: '마음', onyomi: ['シン'], kunyomi: ['こころ'], words: [
    { word: '心', reading: 'こころ', meaning: '마음' },
    { word: '安心', reading: 'あんしん', meaning: '안심' },
    { word: '心配', reading: 'しんぱい', meaning: '걱정' }
  ]},
  { kanji: '思', meaning: '생각하다', onyomi: ['シ'], kunyomi: ['おも(う)'], words: [
    { word: '思う', reading: 'おもう', meaning: '생각하다' },
    { word: '思い出', reading: 'おもいで', meaning: '추억' },
    { word: '不思議', reading: 'ふしぎ', meaning: '불가사의' }
  ]},
  { kanji: '急', meaning: '급하다', onyomi: ['キュウ'], kunyomi: ['いそ(ぐ)'], words: [
    { word: '急ぐ', reading: 'いそぐ', meaning: '서두르다' },
    { word: '急に', reading: 'きゅうに', meaning: '갑자기' },
    { word: '特急', reading: 'とっきゅう', meaning: '특급' }
  ]},
  { kanji: '悪', meaning: '나쁘다', onyomi: ['アク'], kunyomi: ['わる(い)'], words: [
    { word: '悪い', reading: 'わるい', meaning: '나쁘다' },
    { word: '悪天候', reading: 'あくてんこう', meaning: '악천후' }
  ]},
  { kanji: '意', meaning: '뜻', onyomi: ['イ'], kunyomi: [], words: [
    { word: '意味', reading: 'いみ', meaning: '의미' },
    { word: '意見', reading: 'いけん', meaning: '의견' },
    { word: '注意', reading: 'ちゅうい', meaning: '주의' }
  ]},
  { kanji: '持', meaning: '가지다', onyomi: ['ジ'], kunyomi: ['も(つ)'], words: [
    { word: '持つ', reading: 'もつ', meaning: '가지다' },
    { word: '気持ち', reading: 'きもち', meaning: '기분' },
    { word: '持ち物', reading: 'もちもの', meaning: '소지품' }
  ]},
  { kanji: '教', meaning: '가르치다', onyomi: ['キョウ'], kunyomi: ['おし(える)'], words: [
    { word: '教える', reading: 'おしえる', meaning: '가르치다' },
    { word: '教室', reading: 'きょうしつ', meaning: '교실' },
    { word: '教科書', reading: 'きょうかしょ', meaning: '교과서' }
  ]},
  { kanji: '文', meaning: '글, 문', onyomi: ['ブン','モン'], kunyomi: ['ふみ'], words: [
    { word: '文化', reading: 'ぶんか', meaning: '문화' },
    { word: '作文', reading: 'さくぶん', meaning: '작문' },
    { word: '文学', reading: 'ぶんがく', meaning: '문학' }
  ]},
  { kanji: '料', meaning: '재료, 요금', onyomi: ['リョウ'], kunyomi: [], words: [
    { word: '料理', reading: 'りょうり', meaning: '요리' },
    { word: '料金', reading: 'りょうきん', meaning: '요금' },
    { word: '材料', reading: 'ざいりょう', meaning: '재료' }
  ]},
  { kanji: '方', meaning: '방향, 분', onyomi: ['ホウ'], kunyomi: ['かた'], words: [
    { word: '方', reading: 'かた', meaning: '분(존칭)' },
    { word: '仕方', reading: 'しかた', meaning: '방법' },
    { word: '夕方', reading: 'ゆうがた', meaning: '저녁 무렵' }
  ]},
  { kanji: '旅', meaning: '여행', onyomi: ['リョ'], kunyomi: ['たび'], words: [
    { word: '旅行', reading: 'りょこう', meaning: '여행' },
    { word: '旅館', reading: 'りょかん', meaning: '여관' },
    { word: '旅', reading: 'たび', meaning: '여행' }
  ]},
  { kanji: '族', meaning: '겨레, 무리', onyomi: ['ゾク'], kunyomi: [], words: [
    { word: '家族', reading: 'かぞく', meaning: '가족' },
    { word: '民族', reading: 'みんぞく', meaning: '민족' }
  ]},
  { kanji: '映', meaning: '비추다', onyomi: ['エイ'], kunyomi: ['うつ(る)'], words: [
    { word: '映画', reading: 'えいが', meaning: '영화' },
    { word: '映る', reading: 'うつる', meaning: '비치다' }
  ]},
  { kanji: '春', meaning: '봄', onyomi: ['シュン'], kunyomi: ['はる'], words: [
    { word: '春', reading: 'はる', meaning: '봄' },
    { word: '春休み', reading: 'はるやすみ', meaning: '봄 방학' },
    { word: '青春', reading: 'せいしゅん', meaning: '청춘' }
  ]},
  { kanji: '昼', meaning: '낮', onyomi: ['チュウ'], kunyomi: ['ひる'], words: [
    { word: '昼', reading: 'ひる', meaning: '낮' },
    { word: '昼ご飯', reading: 'ひるごはん', meaning: '점심' },
    { word: '昼間', reading: 'ひるま', meaning: '낮 시간' }
  ]},
  { kanji: '暑', meaning: '덥다', onyomi: ['ショ'], kunyomi: ['あつ(い)'], words: [
    { word: '暑い', reading: 'あつい', meaning: '덥다' },
    { word: '暑さ', reading: 'あつさ', meaning: '더위' },
    { word: '猛暑', reading: 'もうしょ', meaning: '무더위' }
  ]},
  { kanji: '暗', meaning: '어둡다', onyomi: ['アン'], kunyomi: ['くら(い)'], words: [
    { word: '暗い', reading: 'くらい', meaning: '어둡다' },
    { word: '暗記', reading: 'あんき', meaning: '암기' }
  ]},
  { kanji: '曜', meaning: '요일', onyomi: ['ヨウ'], kunyomi: [], words: [
    { word: '曜日', reading: 'ようび', meaning: '요일' },
    { word: '月曜日', reading: 'げつようび', meaning: '월요일' }
  ]},
  { kanji: '有', meaning: '있다', onyomi: ['ユウ','ウ'], kunyomi: ['あ(る)'], words: [
    { word: '有名', reading: 'ゆうめい', meaning: '유명' },
    { word: '有る', reading: 'ある', meaning: '있다' },
    { word: '有料', reading: 'ゆうりょう', meaning: '유료' }
  ]},
  { kanji: '服', meaning: '옷', onyomi: ['フク'], kunyomi: [], words: [
    { word: '洋服', reading: 'ようふく', meaning: '양복, 서양 옷' },
    { word: '服', reading: 'ふく', meaning: '옷' },
    { word: '制服', reading: 'せいふく', meaning: '교복' }
  ]},
  { kanji: '朝', meaning: '아침', onyomi: ['チョウ'], kunyomi: ['あさ'], words: [
    { word: '朝', reading: 'あさ', meaning: '아침' },
    { word: '毎朝', reading: 'まいあさ', meaning: '매일 아침' },
    { word: '朝食', reading: 'ちょうしょく', meaning: '아침 식사' }
  ]},
  { kanji: '業', meaning: '업, 일', onyomi: ['ギョウ','ゴウ'], kunyomi: ['わざ'], words: [
    { word: '授業', reading: 'じゅぎょう', meaning: '수업' },
    { word: '卒業', reading: 'そつぎょう', meaning: '졸업' },
    { word: '産業', reading: 'さんぎょう', meaning: '산업' }
  ]},
  { kanji: '楽', meaning: '즐겁다, 음악', onyomi: ['ガク','ラク'], kunyomi: ['たの(しい)'], words: [
    { word: '楽しい', reading: 'たのしい', meaning: '즐겁다' },
    { word: '音楽', reading: 'おんがく', meaning: '음악' },
    { word: '楽器', reading: 'がっき', meaning: '악기' }
  ]},
  { kanji: '歌', meaning: '노래', onyomi: ['カ'], kunyomi: ['うた','うた(う)'], words: [
    { word: '歌', reading: 'うた', meaning: '노래' },
    { word: '歌う', reading: 'うたう', meaning: '노래하다' },
    { word: '歌手', reading: 'かしゅ', meaning: '가수' }
  ]},
  { kanji: '止', meaning: '멈추다', onyomi: ['シ'], kunyomi: ['と(まる)','と(める)'], words: [
    { word: '止まる', reading: 'とまる', meaning: '멈추다' },
    { word: '中止', reading: 'ちゅうし', meaning: '중지' },
    { word: '禁止', reading: 'きんし', meaning: '금지' }
  ]},
  { kanji: '歩', meaning: '걷다', onyomi: ['ホ','ブ'], kunyomi: ['ある(く)','あゆ(む)'], words: [
    { word: '歩く', reading: 'あるく', meaning: '걷다' },
    { word: '散歩', reading: 'さんぽ', meaning: '산책' },
    { word: '歩道', reading: 'ほどう', meaning: '보도' }
  ]},
  { kanji: '死', meaning: '죽다', onyomi: ['シ'], kunyomi: ['し(ぬ)'], words: [
    { word: '死ぬ', reading: 'しぬ', meaning: '죽다' },
    { word: '死亡', reading: 'しぼう', meaning: '사망' }
  ]},
  { kanji: '民', meaning: '백성', onyomi: ['ミン'], kunyomi: ['たみ'], words: [
    { word: '国民', reading: 'こくみん', meaning: '국민' },
    { word: '市民', reading: 'しみん', meaning: '시민' },
    { word: '民族', reading: 'みんぞく', meaning: '민족' }
  ]},
  { kanji: '注', meaning: '주의, 붓다', onyomi: ['チュウ'], kunyomi: ['そそ(ぐ)'], words: [
    { word: '注意', reading: 'ちゅうい', meaning: '주의' },
    { word: '注文', reading: 'ちゅうもん', meaning: '주문' },
    { word: '注目', reading: 'ちゅうもく', meaning: '주목' }
  ]},
  { kanji: '洋', meaning: '서양, 바다', onyomi: ['ヨウ'], kunyomi: [], words: [
    { word: '洋服', reading: 'ようふく', meaning: '양복' },
    { word: '西洋', reading: 'せいよう', meaning: '서양' },
    { word: '太平洋', reading: 'たいへいよう', meaning: '태평양' }
  ]},
  { kanji: '洗', meaning: '씻다', onyomi: ['セン'], kunyomi: ['あら(う)'], words: [
    { word: '洗う', reading: 'あらう', meaning: '씻다' },
    { word: '洗濯', reading: 'せんたく', meaning: '빨래' },
    { word: '手洗い', reading: 'てあらい', meaning: '화장실, 손씻기' }
  ]},
  { kanji: '海', meaning: '바다', onyomi: ['カイ'], kunyomi: ['うみ'], words: [
    { word: '海', reading: 'うみ', meaning: '바다' },
    { word: '海外', reading: 'かいがい', meaning: '해외' },
    { word: '北海道', reading: 'ほっかいどう', meaning: '홋카이도' }
  ]},
  { kanji: '漢', meaning: '한, 중국', onyomi: ['カン'], kunyomi: [], words: [
    { word: '漢字', reading: 'かんじ', meaning: '한자' },
    { word: '漢方', reading: 'かんぽう', meaning: '한방' }
  ]},
  { kanji: '牛', meaning: '소', onyomi: ['ギュウ'], kunyomi: ['うし'], words: [
    { word: '牛肉', reading: 'ぎゅうにく', meaning: '소고기' },
    { word: '牛乳', reading: 'ぎゅうにゅう', meaning: '우유' },
    { word: '牛', reading: 'うし', meaning: '소' }
  ]},
  { kanji: '物', meaning: '물건, 것', onyomi: ['ブツ','モツ'], kunyomi: ['もの'], words: [
    { word: '物', reading: 'もの', meaning: '것' },
    { word: '買い物', reading: 'かいもの', meaning: '쇼핑' },
    { word: '動物', reading: 'どうぶつ', meaning: '동물' }
  ]},
  { kanji: '特', meaning: '특별한', onyomi: ['トク'], kunyomi: [], words: [
    { word: '特に', reading: 'とくに', meaning: '특히' },
    { word: '特別', reading: 'とくべつ', meaning: '특별' },
    { word: '特急', reading: 'とっきゅう', meaning: '특급' }
  ]},
  { kanji: '犬', meaning: '개', onyomi: ['ケン'], kunyomi: ['いぬ'], words: [
    { word: '犬', reading: 'いぬ', meaning: '개' },
    { word: '子犬', reading: 'こいぬ', meaning: '강아지' }
  ]},
  { kanji: '理', meaning: '이치, 다스리다', onyomi: ['リ'], kunyomi: [], words: [
    { word: '料理', reading: 'りょうり', meaning: '요리' },
    { word: '理由', reading: 'りゆう', meaning: '이유' },
    { word: '地理', reading: 'ちり', meaning: '지리' }
  ]},
  { kanji: '産', meaning: '낳다, 생산', onyomi: ['サン'], kunyomi: ['う(む)'], words: [
    { word: '産む', reading: 'うむ', meaning: '낳다' },
    { word: '産業', reading: 'さんぎょう', meaning: '산업' },
    { word: '生産', reading: 'せいさん', meaning: '생산' }
  ]},
  { kanji: '用', meaning: '쓰다, 용도', onyomi: ['ヨウ'], kunyomi: ['もち(いる)'], words: [
    { word: '用事', reading: 'ようじ', meaning: '볼일' },
    { word: '使用', reading: 'しよう', meaning: '사용' },
    { word: '利用', reading: 'りよう', meaning: '이용' }
  ]},
  { kanji: '届', meaning: '닿다', onyomi: [], kunyomi: ['とど(く)','とど(ける)'], words: [
    { word: '届く', reading: 'とどく', meaning: '닿다, 도착하다' },
    { word: '届ける', reading: 'とどける', meaning: '배달하다' }
  ]},
  { kanji: '病', meaning: '병', onyomi: ['ビョウ'], kunyomi: ['やまい','や(む)'], words: [
    { word: '病気', reading: 'びょうき', meaning: '병' },
    { word: '病院', reading: 'びょういん', meaning: '병원' },
    { word: '病人', reading: 'びょうにん', meaning: '환자' }
  ]},
  { kanji: '発', meaning: '나다, 출발', onyomi: ['ハツ','ホツ'], kunyomi: [], words: [
    { word: '出発', reading: 'しゅっぱつ', meaning: '출발' },
    { word: '発見', reading: 'はっけん', meaning: '발견' },
    { word: '発音', reading: 'はつおん', meaning: '발음' }
  ]},
  { kanji: '的', meaning: '과녁, ~적', onyomi: ['テキ'], kunyomi: ['まと'], words: [
    { word: '目的', reading: 'もくてき', meaning: '목적' },
    { word: '具体的', reading: 'ぐたいてき', meaning: '구체적' },
    { word: '国際的', reading: 'こくさいてき', meaning: '국제적' }
  ]},
  { kanji: '真', meaning: '참, 진짜', onyomi: ['シン'], kunyomi: ['ま'], words: [
    { word: '写真', reading: 'しゃしん', meaning: '사진' },
    { word: '真ん中', reading: 'まんなか', meaning: '한가운데' },
    { word: '真面目', reading: 'まじめ', meaning: '성실한' }
  ]},
  { kanji: '知', meaning: '알다', onyomi: ['チ'], kunyomi: ['し(る)'], words: [
    { word: '知る', reading: 'しる', meaning: '알다' },
    { word: '知識', reading: 'ちしき', meaning: '지식' },
    { word: '知人', reading: 'ちじん', meaning: '지인' }
  ]},
  { kanji: '短', meaning: '짧다', onyomi: ['タン'], kunyomi: ['みじか(い)'], words: [
    { word: '短い', reading: 'みじかい', meaning: '짧다' },
    { word: '短所', reading: 'たんしょ', meaning: '단점' }
  ]},
  { kanji: '研', meaning: '갈다, 연구', onyomi: ['ケン'], kunyomi: ['と(ぐ)'], words: [
    { word: '研究', reading: 'けんきゅう', meaning: '연구' },
    { word: '研究所', reading: 'けんきゅうじょ', meaning: '연구소' }
  ]},
  { kanji: '私', meaning: '나, 사사로운', onyomi: ['シ'], kunyomi: ['わたし','わたくし'], words: [
    { word: '私', reading: 'わたし', meaning: '나' },
    { word: '私立', reading: 'しりつ', meaning: '사립' }
  ]},
  { kanji: '秋', meaning: '가을', onyomi: ['シュウ'], kunyomi: ['あき'], words: [
    { word: '秋', reading: 'あき', meaning: '가을' },
    { word: '秋分', reading: 'しゅうぶん', meaning: '추분' }
  ]},
  { kanji: '究', meaning: '연구', onyomi: ['キュウ'], kunyomi: ['きわ(める)'], words: [
    { word: '研究', reading: 'けんきゅう', meaning: '연구' },
    { word: '究極', reading: 'きゅうきょく', meaning: '궁극' }
  ]},
  { kanji: '答', meaning: '대답', onyomi: ['トウ'], kunyomi: ['こた(える)'], words: [
    { word: '答える', reading: 'こたえる', meaning: '대답하다' },
    { word: '答え', reading: 'こたえ', meaning: '답' },
    { word: '回答', reading: 'かいとう', meaning: '회답' }
  ]},
  { kanji: '紙', meaning: '종이', onyomi: ['シ'], kunyomi: ['かみ'], words: [
    { word: '紙', reading: 'かみ', meaning: '종이' },
    { word: '手紙', reading: 'てがみ', meaning: '편지' },
    { word: '新聞紙', reading: 'しんぶんし', meaning: '신문지' }
  ]},
  { kanji: '終', meaning: '끝나다', onyomi: ['シュウ'], kunyomi: ['お(わる)'], words: [
    { word: '終わる', reading: 'おわる', meaning: '끝나다' },
    { word: '最終', reading: 'さいしゅう', meaning: '최종' },
    { word: '終電', reading: 'しゅうでん', meaning: '막차' }
  ]},
  { kanji: '習', meaning: '배우다, 익히다', onyomi: ['シュウ'], kunyomi: ['なら(う)'], words: [
    { word: '習う', reading: 'ならう', meaning: '배우다' },
    { word: '練習', reading: 'れんしゅう', meaning: '연습' },
    { word: '学習', reading: 'がくしゅう', meaning: '학습' }
  ]},
  { kanji: '考', meaning: '생각하다', onyomi: ['コウ'], kunyomi: ['かんが(える)'], words: [
    { word: '考える', reading: 'かんがえる', meaning: '생각하다' },
    { word: '参考', reading: 'さんこう', meaning: '참고' },
    { word: '考え', reading: 'かんがえ', meaning: '생각' }
  ]},
  { kanji: '者', meaning: '사람, 자', onyomi: ['シャ'], kunyomi: ['もの'], words: [
    { word: '医者', reading: 'いしゃ', meaning: '의사' },
    { word: '若者', reading: 'わかもの', meaning: '젊은이' },
    { word: '読者', reading: 'どくしゃ', meaning: '독자' }
  ]},
  { kanji: '肉', meaning: '고기', onyomi: ['ニク'], kunyomi: [], words: [
    { word: '肉', reading: 'にく', meaning: '고기' },
    { word: '牛肉', reading: 'ぎゅうにく', meaning: '소고기' },
    { word: '鶏肉', reading: 'とりにく', meaning: '닭고기' }
  ]},
  { kanji: '自', meaning: '스스로', onyomi: ['ジ','シ'], kunyomi: ['みずか(ら)'], words: [
    { word: '自分', reading: 'じぶん', meaning: '자기 자신' },
    { word: '自転車', reading: 'じてんしゃ', meaning: '자전거' },
    { word: '自然', reading: 'しぜん', meaning: '자연' }
  ]},
  { kanji: '色', meaning: '색', onyomi: ['ショク','シキ'], kunyomi: ['いろ'], words: [
    { word: '色', reading: 'いろ', meaning: '색' },
    { word: '茶色', reading: 'ちゃいろ', meaning: '갈색' },
    { word: '景色', reading: 'けしき', meaning: '경치' }
  ]},
  { kanji: '薬', meaning: '약', onyomi: ['ヤク'], kunyomi: ['くすり'], words: [
    { word: '薬', reading: 'くすり', meaning: '약' },
    { word: '薬局', reading: 'やっきょく', meaning: '약국' }
  ]},
  { kanji: '親', meaning: '부모, 친하다', onyomi: ['シン'], kunyomi: ['おや','した(しい)'], words: [
    { word: '親', reading: 'おや', meaning: '부모' },
    { word: '両親', reading: 'りょうしん', meaning: '부모님' },
    { word: '親切', reading: 'しんせつ', meaning: '친절' }
  ]},
  { kanji: '計', meaning: '세다, 계획', onyomi: ['ケイ'], kunyomi: ['はか(る)'], words: [
    { word: '時計', reading: 'とけい', meaning: '시계' },
    { word: '計画', reading: 'けいかく', meaning: '계획' },
    { word: '合計', reading: 'ごうけい', meaning: '합계' }
  ]},
  { kanji: '試', meaning: '시험, 시도', onyomi: ['シ'], kunyomi: ['こころ(みる)','ため(す)'], words: [
    { word: '試験', reading: 'しけん', meaning: '시험' },
    { word: '試合', reading: 'しあい', meaning: '시합' },
    { word: '試す', reading: 'ためす', meaning: '시도하다' }
  ]},
  { kanji: '説', meaning: '설명', onyomi: ['セツ'], kunyomi: ['と(く)'], words: [
    { word: '説明', reading: 'せつめい', meaning: '설명' },
    { word: '小説', reading: 'しょうせつ', meaning: '소설' }
  ]},
  { kanji: '質', meaning: '질, 바탕', onyomi: ['シツ','シチ'], kunyomi: [], words: [
    { word: '質問', reading: 'しつもん', meaning: '질문' },
    { word: '品質', reading: 'ひんしつ', meaning: '품질' }
  ]},
  { kanji: '走', meaning: '달리다', onyomi: ['ソウ'], kunyomi: ['はし(る)'], words: [
    { word: '走る', reading: 'はしる', meaning: '달리다' },
    { word: '走者', reading: 'そうしゃ', meaning: '주자' }
  ]},
  { kanji: '起', meaning: '일어나다', onyomi: ['キ'], kunyomi: ['お(きる)','お(こる)'], words: [
    { word: '起きる', reading: 'おきる', meaning: '일어나다' },
    { word: '起こる', reading: 'おこる', meaning: '일어나다(사건)' }
  ]},
  { kanji: '転', meaning: '구르다, 전환', onyomi: ['テン'], kunyomi: ['ころ(がる)'], words: [
    { word: '自転車', reading: 'じてんしゃ', meaning: '자전거' },
    { word: '運転', reading: 'うんてん', meaning: '운전' },
    { word: '転ぶ', reading: 'ころぶ', meaning: '넘어지다' }
  ]},
  { kanji: '近', meaning: '가깝다', onyomi: ['キン'], kunyomi: ['ちか(い)'], words: [
    { word: '近い', reading: 'ちかい', meaning: '가깝다' },
    { word: '近く', reading: 'ちかく', meaning: '근처' },
    { word: '最近', reading: 'さいきん', meaning: '최근' }
  ]},
  { kanji: '送', meaning: '보내다', onyomi: ['ソウ'], kunyomi: ['おく(る)'], words: [
    { word: '送る', reading: 'おくる', meaning: '보내다' },
    { word: '放送', reading: 'ほうそう', meaning: '방송' }
  ]},
  { kanji: '通', meaning: '통하다, 다니다', onyomi: ['ツウ'], kunyomi: ['とお(る)','かよ(う)'], words: [
    { word: '通る', reading: 'とおる', meaning: '지나가다' },
    { word: '交通', reading: 'こうつう', meaning: '교통' },
    { word: '通う', reading: 'かよう', meaning: '다니다' }
  ]},
  { kanji: '進', meaning: '나아가다', onyomi: ['シン'], kunyomi: ['すす(む)'], words: [
    { word: '進む', reading: 'すすむ', meaning: '나아가다' },
    { word: '進学', reading: 'しんがく', meaning: '진학' }
  ]},
  { kanji: '運', meaning: '나르다, 운', onyomi: ['ウン'], kunyomi: ['はこ(ぶ)'], words: [
    { word: '運動', reading: 'うんどう', meaning: '운동' },
    { word: '運転', reading: 'うんてん', meaning: '운전' },
    { word: '運ぶ', reading: 'はこぶ', meaning: '나르다' }
  ]},
  { kanji: '遠', meaning: '멀다', onyomi: ['エン'], kunyomi: ['とお(い)'], words: [
    { word: '遠い', reading: 'とおい', meaning: '멀다' },
    { word: '遠く', reading: 'とおく', meaning: '먼 곳' },
    { word: '永遠', reading: 'えいえん', meaning: '영원' }
  ]},
  { kanji: '都', meaning: '도시, 수도', onyomi: ['ト','ツ'], kunyomi: ['みやこ'], words: [
    { word: '東京都', reading: 'とうきょうと', meaning: '도쿄도' },
    { word: '都合', reading: 'つごう', meaning: '사정, 형편' },
    { word: '都市', reading: 'とし', meaning: '도시' }
  ]},
  { kanji: '重', meaning: '무겁다, 겹치다', onyomi: ['ジュウ','チョウ'], kunyomi: ['おも(い)','かさ(ねる)'], words: [
    { word: '重い', reading: 'おもい', meaning: '무겁다' },
    { word: '体重', reading: 'たいじゅう', meaning: '체중' },
    { word: '重要', reading: 'じゅうよう', meaning: '중요' }
  ]},
  { kanji: '野', meaning: '들, 야', onyomi: ['ヤ'], kunyomi: ['の'], words: [
    { word: '野菜', reading: 'やさい', meaning: '채소' },
    { word: '野球', reading: 'やきゅう', meaning: '야구' },
    { word: '野原', reading: 'のはら', meaning: '들판' }
  ]},
  { kanji: '銀', meaning: '은', onyomi: ['ギン'], kunyomi: [], words: [
    { word: '銀行', reading: 'ぎんこう', meaning: '은행' },
    { word: '銀色', reading: 'ぎんいろ', meaning: '은색' }
  ]},
  { kanji: '開', meaning: '열다', onyomi: ['カイ'], kunyomi: ['あ(ける)','ひら(く)'], words: [
    { word: '開ける', reading: 'あける', meaning: '열다' },
    { word: '開く', reading: 'ひらく', meaning: '열리다' },
    { word: '開始', reading: 'かいし', meaning: '개시' }
  ]},
  { kanji: '院', meaning: '원, 기관', onyomi: ['イン'], kunyomi: [], words: [
    { word: '病院', reading: 'びょういん', meaning: '병원' },
    { word: '大学院', reading: 'だいがくいん', meaning: '대학원' },
    { word: '美容院', reading: 'びよういん', meaning: '미용실' }
  ]},
  { kanji: '集', meaning: '모이다', onyomi: ['シュウ'], kunyomi: ['あつ(める)','あつ(まる)'], words: [
    { word: '集める', reading: 'あつめる', meaning: '모으다' },
    { word: '集まる', reading: 'あつまる', meaning: '모이다' },
    { word: '募集', reading: 'ぼしゅう', meaning: '모집' }
  ]},
  { kanji: '青', meaning: '파란', onyomi: ['セイ'], kunyomi: ['あお','あお(い)'], words: [
    { word: '青い', reading: 'あおい', meaning: '파랗다' },
    { word: '青春', reading: 'せいしゅん', meaning: '청춘' },
    { word: '青年', reading: 'せいねん', meaning: '청년' }
  ]},
  { kanji: '静', meaning: '조용하다', onyomi: ['セイ'], kunyomi: ['しず(か)'], words: [
    { word: '静か', reading: 'しずか', meaning: '조용한' },
    { word: '静止', reading: 'せいし', meaning: '정지' }
  ]},
  { kanji: '音', meaning: '소리', onyomi: ['オン','イン'], kunyomi: ['おと','ね'], words: [
    { word: '音', reading: 'おと', meaning: '소리' },
    { word: '音楽', reading: 'おんがく', meaning: '음악' },
    { word: '発音', reading: 'はつおん', meaning: '발음' }
  ]},
  { kanji: '題', meaning: '제목', onyomi: ['ダイ'], kunyomi: [], words: [
    { word: '問題', reading: 'もんだい', meaning: '문제' },
    { word: '題名', reading: 'だいめい', meaning: '제목' },
    { word: '話題', reading: 'わだい', meaning: '화제' }
  ]},
  { kanji: '飯', meaning: '밥', onyomi: ['ハン'], kunyomi: ['めし'], words: [
    { word: 'ご飯', reading: 'ごはん', meaning: '밥' },
    { word: '夕飯', reading: 'ゆうはん', meaning: '저녁 식사' },
    { word: '朝飯', reading: 'あさめし', meaning: '아침 식사' }
  ]},
  { kanji: '館', meaning: '건물, 관', onyomi: ['カン'], kunyomi: [], words: [
    { word: '図書館', reading: 'としょかん', meaning: '도서관' },
    { word: '映画館', reading: 'えいがかん', meaning: '영화관' },
    { word: '旅館', reading: 'りょかん', meaning: '여관' }
  ]},
  { kanji: '験', meaning: '시험, 경험', onyomi: ['ケン','ゲン'], kunyomi: [], words: [
    { word: '試験', reading: 'しけん', meaning: '시험' },
    { word: '経験', reading: 'けいけん', meaning: '경험' },
    { word: '体験', reading: 'たいけん', meaning: '체험' }
  ]},
  { kanji: '鳥', meaning: '새', onyomi: ['チョウ'], kunyomi: ['とり'], words: [
    { word: '鳥', reading: 'とり', meaning: '새' },
    { word: '焼き鳥', reading: 'やきとり', meaning: '야키토리' },
    { word: '小鳥', reading: 'ことり', meaning: '작은 새' }
  ]},
  { kanji: '黒', meaning: '검다', onyomi: ['コク'], kunyomi: ['くろ(い)'], words: [
    { word: '黒い', reading: 'くろい', meaning: '검다' },
    { word: '黒', reading: 'くろ', meaning: '검은색' },
    { word: '黒板', reading: 'こくばん', meaning: '칠판' }
  ]},
  { kanji: '体', meaning: '몸', onyomi: ['タイ'], kunyomi: ['からだ'], words: [
    { word: '体', reading: 'からだ', meaning: '몸' },
    { word: '体育', reading: 'たいいく', meaning: '체육' }
  ]},
  { kanji: '京', meaning: '서울, 수도', onyomi: ['キョウ','ケイ'], kunyomi: [], words: [
    { word: '東京', reading: 'とうきょう', meaning: '도쿄' },
    { word: '京都', reading: 'きょうと', meaning: '교토' }
  ]},
  { kanji: '正', meaning: '바르다', onyomi: ['セイ','ショウ'], kunyomi: ['ただ(しい)','まさ'], words: [
    { word: '正しい', reading: 'ただしい', meaning: '올바르다' },
    { word: '正月', reading: 'しょうがつ', meaning: '정월' },
    { word: '正直', reading: 'しょうじき', meaning: '정직' }
  ]},
  { kanji: '世', meaning: '세상', onyomi: ['セイ','セ'], kunyomi: ['よ'], words: [
    { word: '世界', reading: 'せかい', meaning: '세계' },
    { word: '世話', reading: 'せわ', meaning: '돌봄' }
  ]},
  { kanji: '田', meaning: '밭, 논', onyomi: ['デン'], kunyomi: ['た'], words: [
    { word: '田んぼ', reading: 'たんぼ', meaning: '논' },
    { word: '田舎', reading: 'いなか', meaning: '시골' }
  ]},
  { kanji: '画', meaning: '그림, 획', onyomi: ['ガ','カク'], kunyomi: [], words: [
    { word: '映画', reading: 'えいが', meaning: '영화' },
    { word: '計画', reading: 'けいかく', meaning: '계획' },
    { word: '画家', reading: 'がか', meaning: '화가' }
  ]},
  { kanji: '赤', meaning: '빨간', onyomi: ['セキ'], kunyomi: ['あか','あか(い)'], words: [
    { word: '赤い', reading: 'あかい', meaning: '빨갛다' },
    { word: '赤ちゃん', reading: 'あかちゃん', meaning: '아기' },
    { word: '赤', reading: 'あか', meaning: '빨간색' }
  ]},
  { kanji: '帰', meaning: '돌아가다', onyomi: ['キ'], kunyomi: ['かえ(る)'], words: [
    { word: '帰る', reading: 'かえる', meaning: '돌아가다' },
    { word: '帰り', reading: 'かえり', meaning: '돌아오는 길' },
    { word: '帰国', reading: 'きこく', meaning: '귀국' }
  ]},
  { kanji: '早', meaning: '이르다, 빠르다', onyomi: ['ソウ','サッ'], kunyomi: ['はや(い)'], words: [
    { word: '早い', reading: 'はやい', meaning: '이르다, 빠르다' },
    { word: '早く', reading: 'はやく', meaning: '빨리' },
    { word: '早朝', reading: 'そうちょう', meaning: '이른 아침' }
  ]},
  { kanji: '着', meaning: '입다, 도착', onyomi: ['チャク'], kunyomi: ['き(る)','つ(く)'], words: [
    { word: '着る', reading: 'きる', meaning: '입다' },
    { word: '着く', reading: 'つく', meaning: '도착하다' },
    { word: '到着', reading: 'とうちゃく', meaning: '도착' }
  ]},
  { kanji: '回', meaning: '돌다, 번', onyomi: ['カイ'], kunyomi: ['まわ(る)'], words: [
    { word: '一回', reading: 'いっかい', meaning: '한 번' },
    { word: '回る', reading: 'まわる', meaning: '돌다' },
    { word: '回答', reading: 'かいとう', meaning: '회답' }
  ]},
  { kanji: '茶', meaning: '차', onyomi: ['チャ','サ'], kunyomi: [], words: [
    { word: 'お茶', reading: 'おちゃ', meaning: '차' },
    { word: '茶色', reading: 'ちゃいろ', meaning: '갈색' },
    { word: '喫茶店', reading: 'きっさてん', meaning: '찻집' }
  ]},
  { kanji: '英', meaning: '영, 뛰어난', onyomi: ['エイ'], kunyomi: [], words: [
    { word: '英語', reading: 'えいご', meaning: '영어' },
    { word: '英国', reading: 'えいこく', meaning: '영국' }
  ]},
  { kanji: '菜', meaning: '나물, 채소', onyomi: ['サイ'], kunyomi: ['な'], words: [
    { word: '野菜', reading: 'やさい', meaning: '채소' },
    { word: '菜食', reading: 'さいしょく', meaning: '채식' }
  ]},
  { kanji: '門', meaning: '문', onyomi: ['モン'], kunyomi: ['かど'], words: [
    { word: '門', reading: 'もん', meaning: '문' },
    { word: '専門', reading: 'せんもん', meaning: '전문' },
    { word: '正門', reading: 'せいもん', meaning: '정문' }
  ]},
  { kanji: '首', meaning: '목, 머리', onyomi: ['シュ'], kunyomi: ['くび'], words: [
    { word: '首', reading: 'くび', meaning: '목' },
    { word: '首都', reading: 'しゅと', meaning: '수도' }
  ]},
  { kanji: '若', meaning: '젊다', onyomi: ['ジャク'], kunyomi: ['わか(い)'], words: [
    { word: '若い', reading: 'わかい', meaning: '젊다' },
    { word: '若者', reading: 'わかもの', meaning: '젊은이' }
  ]},
  { kanji: '風', meaning: '바람', onyomi: ['フウ','フ'], kunyomi: ['かぜ'], words: [
    { word: '風', reading: 'かぜ', meaning: '바람' },
    { word: '台風', reading: 'たいふう', meaning: '태풍' },
    { word: '風邪', reading: 'かぜ', meaning: '감기' }
  ]},
  { kanji: '鉄', meaning: '쇠', onyomi: ['テツ'], kunyomi: [], words: [
    { word: '地下鉄', reading: 'ちかてつ', meaning: '지하철' },
    { word: '鉄道', reading: 'てつどう', meaning: '철도' }
  ]},
  { kanji: '頭', meaning: '머리', onyomi: ['トウ','ズ'], kunyomi: ['あたま'], words: [
    { word: '頭', reading: 'あたま', meaning: '머리' },
    { word: '頭痛', reading: 'ずつう', meaning: '두통' }
  ]},
  { kanji: '顔', meaning: '얼굴', onyomi: ['ガン'], kunyomi: ['かお'], words: [
    { word: '顔', reading: 'かお', meaning: '얼굴' },
    { word: '顔色', reading: 'かおいろ', meaning: '안색' },
    { word: '笑顔', reading: 'えがお', meaning: '웃는 얼굴' }
  ]},
  { kanji: '記', meaning: '기록하다', onyomi: ['キ'], kunyomi: ['しる(す)'], words: [
    { word: '日記', reading: 'にっき', meaning: '일기' },
    { word: '記事', reading: 'きじ', meaning: '기사' },
    { word: '暗記', reading: 'あんき', meaning: '암기' }
  ]},
  { kanji: '配', meaning: '나누다, 배달', onyomi: ['ハイ'], kunyomi: ['くば(る)'], words: [
    { word: '心配', reading: 'しんぱい', meaning: '걱정' },
    { word: '配達', reading: 'はいたつ', meaning: '배달' }
  ]},
  { kanji: '酒', meaning: '술', onyomi: ['シュ'], kunyomi: ['さけ'], words: [
    { word: 'お酒', reading: 'おさけ', meaning: '술' },
    { word: '日本酒', reading: 'にほんしゅ', meaning: '일본술' },
    { word: '酒屋', reading: 'さかや', meaning: '주류 가게' }
  ]},
  { kanji: '交', meaning: '사귀다, 교차', onyomi: ['コウ'], kunyomi: ['まじ(わる)','か(わす)'], words: [
    { word: '交通', reading: 'こうつう', meaning: '교통' },
    { word: '交番', reading: 'こうばん', meaning: '파출소' },
    { word: '交換', reading: 'こうかん', meaning: '교환' }
  ]},
  { kanji: '係', meaning: '관계, 담당', onyomi: ['ケイ'], kunyomi: ['かかり','かか(わる)'], words: [
    { word: '関係', reading: 'かんけい', meaning: '관계' },
    { word: '係', reading: 'かかり', meaning: '담당자' }
  ]},
  { kanji: '払', meaning: '지불하다', onyomi: ['フツ'], kunyomi: ['はら(う)'], words: [
    { word: '払う', reading: 'はらう', meaning: '지불하다' },
    { word: '支払い', reading: 'しはらい', meaning: '지불' }
  ]},
  { kanji: '寒', meaning: '춥다', onyomi: ['カン'], kunyomi: ['さむ(い)'], words: [
    { word: '寒い', reading: 'さむい', meaning: '춥다' },
    { word: '寒さ', reading: 'さむさ', meaning: '추위' }
  ]},
  { kanji: '暖', meaning: '따뜻하다', onyomi: ['ダン'], kunyomi: ['あたた(かい)'], words: [
    { word: '暖かい', reading: 'あたたかい', meaning: '따뜻하다' },
    { word: '暖房', reading: 'だんぼう', meaning: '난방' }
  ]},
  { kanji: '番', meaning: '번, 차례', onyomi: ['バン'], kunyomi: [], words: [
    { word: '番号', reading: 'ばんごう', meaning: '번호' },
    { word: '一番', reading: 'いちばん', meaning: '제일' },
    { word: '交番', reading: 'こうばん', meaning: '파출소' }
  ]},
  { kanji: '点', meaning: '점', onyomi: ['テン'], kunyomi: [], words: [
    { word: '点', reading: 'てん', meaning: '점' },
    { word: '弱点', reading: 'じゃくてん', meaning: '약점' },
    { word: '百点', reading: 'ひゃくてん', meaning: '백점' }
  ]},
  { kanji: '予', meaning: '미리', onyomi: ['ヨ'], kunyomi: [], words: [
    { word: '予定', reading: 'よてい', meaning: '예정' },
    { word: '予約', reading: 'よやく', meaning: '예약' },
    { word: '予習', reading: 'よしゅう', meaning: '예습' }
  ]}
];
