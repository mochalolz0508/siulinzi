/* ============================================================
   小練字 · 題庫 (獨立資料檔)
   ------------------------------------------------------------
   加題只需改呢個檔,唔使掂 index.html。
   結構: QUESTION_BANK[年級][科目] = [ 題目, ... ]
   題目格式: { t:類型, q:[題幹] 或 [前,後]作填空, o:[選項], a:正確索引, g:答啱解釋, b:答錯提示 }
   數學(mat)由程式自動生成,唔放喺呢度。
   中文題目參考:教育局《香港小學學習字詞表》第一學習階段(小一至小三)字詞。
   ============================================================ */
window.QUESTION_BANK = {
  P1: {
    chi: [
      // —— 看圖識字 (象形/基本字) —— 只給圖,唔可以喺題目寫出答案個字
      {t:"看圖識字",q:['☀️ 這是甚麼？寫成哪個字？'],o:["月","日","目","白"],a:1,g:"☀️ 就是「日」（太陽）",b:"太陽寫成「日」。"},
      {t:"看圖識字",q:['🌙 這是甚麼？寫成哪個字？'],o:["日","月","用","門"],a:1,g:"🌙 就是「月」（月亮）",b:"月亮寫成「月」。"},
      {t:"看圖識字",q:['⛰️ 這是甚麼？寫成哪個字？'],o:["山","出","土","上"],a:0,g:"⛰️ 就是「山」，有三個尖",b:"高山寫成「山」。"},
      {t:"看圖識字",q:['💧 這是甚麼？寫成哪個字？'],o:["木","水","永","冰"],a:1,g:"💧 就是「水」",b:"這是「水」。"},
      {t:"看圖識字",q:['🔥 這是甚麼？寫成哪個字？'],o:["大","火","太","犬"],a:1,g:"🔥 就是「火」",b:"這是「火」。"},
      {t:"看圖識字",q:['🌳 這是甚麼？寫成哪個字？'],o:["禾","本","木","未"],a:2,g:"🌳 就是「木」（樹）",b:"樹寫成「木」。"},
      {t:"看圖識字",q:['👀 身體哪個部位？寫成哪個字？'],o:["日","目","自","白"],a:1,g:"👀 就是「目」（眼睛）",b:"眼睛是「目」。"},
      {t:"看圖識字",q:['✋ 身體哪個部位？寫成哪個字？'],o:["手","毛","木","牛"],a:0,g:"✋ 就是「手」",b:"這是「手」。"},
      {t:"看圖識字",q:['👄 身體哪個部位？寫成哪個字？'],o:["回","日","口","中"],a:2,g:"👄 就是「口」（嘴巴）",b:"嘴巴是「口」。"},
      {t:"看圖識字",q:['🐟 這是甚麼動物？寫成哪個字？'],o:["魚","羊","燕","鳥"],a:0,g:"🐟 就是「魚」",b:"這是「魚」。"},

      // —— 量詞 ——
      {t:"量詞",q:['一','貓'],o:["隻","本","張","朵"],a:0,g:"一隻貓 🐱",b:"動物用「隻」。"},
      {t:"量詞",q:['一','書'],o:["隻","本","架","條"],a:1,g:"一本書 📖",b:"書用「本」。"},
      {t:"量詞",q:['一','花'],o:["隻","本","朵","架"],a:2,g:"一朵花 🌸",b:"花用「朵」。"},
      {t:"量詞",q:['一','魚'],o:["條","隻","個","本"],a:0,g:"一條魚 🐟",b:"魚用「條」。"},
      {t:"量詞",q:['兩','蘋果'],o:["個","隻","本","張"],a:0,g:"兩個蘋果 🍎🍎",b:"蘋果用「個」。"},
      {t:"量詞",q:['一','紙'],o:["張","本","條","朵"],a:0,g:"一張紙 📄",b:"紙用「張」。"},

      // —— 反義詞 ——
      {t:"反義詞",q:['「大」的相反是……'],o:["高","小","圓","長"],a:1,g:"大 ↔ 小",b:"「大」的相反是「小」。"},
      {t:"反義詞",q:['「上」的相反是……'],o:["左","下","前","中"],a:1,g:"上 ↔ 下",b:"「上」的相反是「下」。"},
      {t:"反義詞",q:['「開」的相反是……'],o:["關","走","坐","站"],a:0,g:"開 ↔ 關",b:"開門、關門。"},
      {t:"反義詞",q:['「多」的相反是……'],o:["少","大","高","滿"],a:0,g:"多 ↔ 少",b:"「多」的相反是「少」。"},
      {t:"反義詞",q:['「高」的相反是……'],o:["矮","低","短","瘦"],a:0,g:"高 ↔ 矮",b:"人高矮：「高」的相反是「矮」。"},
      {t:"反義詞",q:['「前」的相反是……'],o:["後","左","右","中"],a:0,g:"前 ↔ 後",b:"「前」的相反是「後」。"},
      {t:"反義詞",q:['「冷」的相反是……'],o:["涼","熱","暖","凍"],a:1,g:"冷 ↔ 熱",b:"「冷」的相反是「熱」。"},

      // —— 詞語填充 ——
      {t:"詞語",q:['小','友（小孩子）'],o:["朋","明","名","門"],a:0,g:"小朋友 🧒",b:"是「小朋友」。"},
      {t:"詞語",q:['老','，教我們讀書的人。'],o:["生","師","校","書"],a:1,g:"老師 👩‍🏫",b:"教書的是「老師」。"},
      {t:"詞語",q:['今','，即是今日。'],o:["天","年","大","日"],a:0,g:"今天 = 今日 📅",b:"今天。"},
      {t:"詞語",q:['','學，去學校讀書。'],o:["放","上","開","回"],a:1,g:"上學 🎒",b:"去讀書是「上學」。"},
      {t:"詞語",q:['我愛我的家','。'],o:["門","人","裡","庭"],a:1,g:"家人 👨‍👩‍👧",b:"一家人是「家人」。"},

      // —— 顏色 ——
      {t:"顏色",q:['🍎 蘋果，多數是','色。'],o:["綠","紅","黑","藍"],a:1,g:"蘋果多數是紅色 🍎",b:"蘋果多數是紅色。"},
      {t:"顏色",q:['🌿 草，是','色。'],o:["紅","綠","黃","黑"],a:1,g:"草是綠色 🌿",b:"草是綠色。"},
      {t:"顏色",q:['☁️ 天上的雲，多數是','色。'],o:["白","黑","藍","紅"],a:0,g:"雲多數是白色 ☁️",b:"雲多數是白色。"},

      // —— 標點 ——
      {t:"標點",q:['「你好嗎」句尾用……'],o:["。句號","？問號","！感嘆號","，逗號"],a:1,g:"問問題用問號 ？",b:"問人用問號。"},
      {t:"標點",q:['「太好了」句尾用……'],o:["。句號","？問號","！感嘆號","，逗號"],a:2,g:"很高興用感嘆號 ！",b:"開心、興奮用感嘆號。"},
      {t:"標點",q:['一句話講完了，句尾用……'],o:["。句號","，逗號","？問號","！感嘆號"],a:0,g:"講完一句用句號 。",b:"句子結束用句號。"},

      // —— 筆畫 · 筆順 ——
      {t:"筆畫",q:['「一」字有多少畫？'],o:["一畫","兩畫","三畫","四畫"],a:0,g:"「一」只有一畫 ✏️",b:"「一」是一畫。"},
      {t:"筆畫",q:['「十」字有多少畫？'],o:["一畫","兩畫","三畫","四畫"],a:1,g:"「十」有兩畫（橫、直）",b:"「十」是兩畫。"},
      {t:"筆畫",q:['「三」字有多少畫？'],o:["兩畫","三畫","四畫","五畫"],a:1,g:"「三」有三畫 ✏️",b:"「三」是三畫。"},
      {t:"筆順",q:['寫「十」字，先寫……'],o:["直","橫","點","撇"],a:1,g:"先橫後直 ✏️",b:"「十」先寫橫。"},

      // —— 部首 ——
      {t:"部首",q:['「花」字上面是甚麼部首？'],o:["草花頭","水","火","木"],a:0,g:"「艹」草花頭，和植物有關 🌸",b:"花有草花頭。"},
      {t:"部首",q:['「河」字左邊是甚麼部首？'],o:["氵(水)","可","口","木"],a:0,g:"「氵」水部，和水有關 💧",b:"河和水有關，用水部。"},

      // —— 字形辨識 ——
      {t:"字形",q:['「大」字加一點，變成……'],o:["太","犬","天","夫"],a:0,g:"大 + 一點 = 太 ✅",b:"「大」加一點是「太」。"},
      {t:"數字",q:['「3」用中文寫，是……'],o:["二","三","四","五"],a:1,g:"3 = 三",b:"3 寫成「三」。"},
    ],

    eng: [
      {t:"Match",q:['🐱 = ?'],o:["dog","cat","pig","cow"],a:1,g:"🐱 is a cat!",b:"🐱 = cat"},
      {t:"Match",q:['🐶 = ?'],o:["cat","fish","dog","bird"],a:2,g:"🐶 is a dog!",b:"🐶 = dog"},
      {t:"Match",q:['🍎 = ?'],o:["apple","banana","orange","egg"],a:0,g:"🍎 is an apple!",b:"🍎 = apple"},
      {t:"Match",q:['🐟 = ?'],o:["fish","frog","fox","fly"],a:0,g:"🐟 is a fish!",b:"🐟 = fish"},
      {t:"Match",q:['🐰 = ?'],o:["rat","rabbit","rain","red"],a:1,g:"🐰 is a rabbit!",b:"🐰 = rabbit"},
      {t:"Match",q:['🐦 = ?'],o:["bird","bee","bear","bat"],a:0,g:"🐦 is a bird!",b:"🐦 = bird"},
      {t:"Match",q:['📖 = ?'],o:["book","pen","bag","desk"],a:0,g:"📖 is a book!",b:"📖 = book"},
      {t:"Match",q:['💧 = ?'],o:["milk","water","juice","tea"],a:1,g:"💧 is water!",b:"💧 = water"},
      {t:"Match",q:['🥛 = ?'],o:["milk","water","egg","rice"],a:0,g:"🥛 is milk!",b:"🥛 = milk"},
      {t:"Match",q:['✋ = ?'],o:["foot","hand","head","ear"],a:1,g:"✋ is a hand!",b:"✋ = hand"},
      {t:"Match",q:['🏠 = ?'],o:["house","horse","hat","hand"],a:0,g:"🏠 is a house!",b:"🏠 = house"},
      {t:"Match",q:['🌸 = ?'],o:["flower","flag","fish","frog"],a:0,g:"🌸 is a flower!",b:"🌸 = flower"},
      {t:"Colour",q:['🔴 = ?'],o:["blue","red","green","black"],a:1,g:"🔴 is red!",b:"🔴 = red"},
      {t:"Colour",q:['🔵 = ?'],o:["blue","red","yellow","pink"],a:0,g:"🔵 is blue!",b:"🔵 = blue"},
      {t:"Colour",q:['🟡 = ?'],o:["green","yellow","white","brown"],a:1,g:"🟡 is yellow!",b:"🟡 = yellow"},
      {t:"Colour",q:['🟢 = ?'],o:["green","grey","gold","blue"],a:0,g:"🟢 is green!",b:"🟢 = green"},
      {t:"Number",q:['1 = ?'],o:["one","on","in","an"],a:0,g:"1 = one",b:"1 = one"},
      {t:"Number",q:['3 = ?'],o:["two","three","four","five"],a:1,g:"3 = three ✌️",b:"3 = three"},
      {t:"Number",q:['5 = ?'],o:["four","six","five","ten"],a:2,g:"5 = five 🖐️",b:"5 = five"},
      {t:"Number",q:['10 = ?'],o:["ten","nine","eight","seven"],a:0,g:"10 = ten 🔟",b:"10 = ten"},
      {t:"Spelling",q:['🐱  c _ t'],o:["a","e","i","o"],a:0,g:"c-a-t = cat",b:"cat"},
      {t:"Spelling",q:['🐶  d _ g'],o:["a","o","u","e"],a:1,g:"d-o-g = dog",b:"dog"},
      {t:"Spelling",q:['☀️  s _ n'],o:["a","i","u","e"],a:2,g:"s-u-n = sun",b:"sun"},
      {t:"Spelling",q:['🎒  b _ g'],o:["a","e","i","o"],a:0,g:"b-a-g = bag",b:"bag"},
      {t:"Spelling",q:['🖊️  p _ n'],o:["a","e","i","u"],a:1,g:"p-e-n = pen",b:"pen"},
      {t:"Spelling",q:['🧢  h _ t'],o:["a","e","o","u"],a:0,g:"h-a-t = hat",b:"hat"},
      {t:"Spelling",q:['🛏️  b _ d'],o:["a","e","i","o"],a:1,g:"b-e-d = bed",b:"bed"},
      {t:"Opposite",q:['big ↔ ?'],o:["tall","small","long","fat"],a:1,g:"big ↔ small",b:"big ↔ small"},
      {t:"Opposite",q:['hot ↔ ?'],o:["warm","cold","dry","wet"],a:1,g:"hot ↔ cold ❄️",b:"hot ↔ cold"},
      {t:"Opposite",q:['up ↔ ?'],o:["down","top","in","out"],a:0,g:"up ↔ down",b:"up ↔ down"},
      {t:"Opposite",q:['day ↔ ?'],o:["sun","night","noon","week"],a:1,g:"day ↔ night 🌙",b:"day ↔ night"},
      {t:"Letter",q:['a  b  c  _'],o:["d","e","f","g"],a:0,g:"a b c d",b:"after c is d"},
      {t:"Letter",q:['🍎 apple starts with…'],o:["a","p","e","b"],a:0,g:"apple → a",b:"apple starts with a"},
      {t:"Letter",q:['🐶 dog starts with…'],o:["b","d","g","o"],a:1,g:"dog → d",b:"dog starts with d"},
      {t:"Greeting",q:['🌅  In the morning, we say…'],o:["Good night","Good morning","Bye","Sorry"],a:1,g:"🌅 Good morning!",b:"morning → Good morning"},
    ],
  },

  // —— 小三示範批(明顯難過小一,證明中英文都可以分級)——
  P3: {
    chi: [
      {t:"成語",q:['三心兩','（不專心）'],o:["意","義","益","異"],a:0,g:"三心兩意 = 不專心 🎯",b:"三心兩意。"},
      {t:"成語",q:['十全十','（非常完美）'],o:["分","美","足","全"],a:1,g:"十全十美 ✨",b:"十全十美。"},
      {t:"成語",q:['井底之','（見識少）'],o:["魚","龜","蛙","蝦"],a:2,g:"井底之蛙 🐸",b:"井底之蛙，比喻見識少。"},
      {t:"近義詞",q:['「高興」意思最接近……'],o:["快樂","傷心","生氣","害怕"],a:0,g:"高興 ≈ 快樂 😊",b:"高興和快樂意思相近。"},
      {t:"近義詞",q:['「美麗」意思最接近……'],o:["醜陋","漂亮","普通","高大"],a:1,g:"美麗 ≈ 漂亮 🌸",b:"美麗和漂亮相近。"},
      {t:"反義詞",q:['「勤力」的相反是……'],o:["努力","懶惰","認真","用功"],a:1,g:"勤力 ↔ 懶惰",b:"勤力的相反是懶惰。"},
      {t:"反義詞",q:['「聰明」的相反是……'],o:["機靈","愚笨","伶俐","醒目"],a:1,g:"聰明 ↔ 愚笨",b:"聰明的相反是愚笨。"},
      {t:"量詞",q:['一','老師（有禮貌的說法）'],o:["個","位","隻","條"],a:1,g:"一位老師（尊敬的說法）🧑‍🏫",b:"對人有禮貌用「位」。"},
      {t:"部首",q:['「想」「念」「思」都有甚麼部首？'],o:["心","目","木","口"],a:0,g:"都有「心」部，和心情有關 ❤️",b:"這些字都和心有關，用心部。"},
      {t:"修辭",q:['彎彎的月亮，像一隻……'],o:["船","貓","花","鞋"],a:0,g:"彎月像小船 🌙⛵（比喻）",b:"彎月常比喻做小船。"},
      {t:"標點",q:['引用別人說的話，用哪個標點？'],o:["「」引號","（）括號","……省略號","、頓號"],a:0,g:"引用說話用引號「」",b:"別人的說話用引號。"},
      {t:"詞語搭配",q:['','風徐徐吹來（輕輕的風）'],o:["大","微","狂","暴"],a:1,g:"微風 = 輕輕的風 🍃",b:"輕輕的風是「微風」。"},
    ],
    eng: [
      {t:"Plural",q:['one cat, two ___'],o:["cat","cats","cates","cats'"],a:1,g:"cat → cats",b:"Add -s: cats"},
      {t:"Plural",q:['one baby, two ___'],o:["babys","babies","baby","babyes"],a:1,g:"baby → babies",b:"baby → babies (y→ies)"},
      {t:"Verb",q:['She ___ to school every day.'],o:["go","goes","going","went"],a:1,g:"She goes …",b:"He/She + goes"},
      {t:"Past tense",q:['Yesterday I ___ football.'],o:["play","plays","played","playing"],a:2,g:"Yesterday → played",b:"Past tense: played"},
      {t:"Preposition",q:['The book is ___ the table. 📖⬆️'],o:["in","on","under","behind"],a:1,g:"on the table",b:"On top → on"},
      {t:"Opposite",q:['happy ↔ ?'],o:["glad","sad","kind","tall"],a:1,g:"happy ↔ sad",b:"happy ↔ sad"},
      {t:"Vocabulary",q:['A place with many books is a ___'],o:["kitchen","library","garden","station"],a:1,g:"library 📚",b:"Many books → library"},
      {t:"Vocabulary",q:['A doctor works in a ___'],o:["school","hospital","shop","farm"],a:1,g:"hospital 🏥",b:"Doctor → hospital"},
      {t:"Pronoun",q:['___ is my father.'],o:["He","She","It","They"],a:0,g:"He is my father.",b:"father → He"},
      {t:"Question word",q:['___ is your name?'],o:["What","When","Where","Who"],a:0,g:"What is your name?",b:"name → What"},
      {t:"Article",q:['I see ___ elephant. 🐘'],o:["a","an","the","--"],a:1,g:"an elephant (vowel sound)",b:"Before a/e/i/o/u sound → an"},
      {t:"Days",q:['The day after Monday is ___'],o:["Sunday","Tuesday","Friday","Monday"],a:1,g:"Monday → Tuesday",b:"After Monday is Tuesday"},
    ],
  },

  // ===== 幼稚園 K1 (最淺:認顏色、數 1-3、認動物)=====
  K1: {
    chi: [
      {t:"顏色",q:['🔴 是甚麼顏色？'],o:["紅色","藍色","黃色","綠色"],a:0,g:"🔴 是紅色",b:"🔴 = 紅色"},
      {t:"顏色",q:['🟡 是甚麼顏色？'],o:["綠色","黃色","紅色","黑色"],a:1,g:"🟡 是黃色",b:"🟡 = 黃色"},
      {t:"數數",q:['🍎 有多少個？'],o:["一","二","三","四"],a:0,g:"一個 🍎",b:"數一數：一個。"},
      {t:"數數",q:['🍎🍎 有多少個？'],o:["一","二","三","四"],a:1,g:"兩個 🍎🍎",b:"數一數：兩個。"},
      {t:"認動物",q:['🐱 是甚麼動物？'],o:["貓","狗","魚","鳥"],a:0,g:"🐱 是貓",b:"🐱 = 貓"},
      {t:"認動物",q:['🐶 是甚麼動物？'],o:["狗","貓","豬","牛"],a:0,g:"🐶 是狗",b:"🐶 = 狗"},
      {t:"比較",q:['哪一隻較大？'],o:["🐘 大象","🐜 螞蟻","🐭 老鼠","🐤 小雞"],a:0,g:"🐘 大象最大",b:"大象最大。"},
      {t:"形狀",q:['⭐ 是甚麼形狀？'],o:["星形","圓形","方形","三角形"],a:0,g:"⭐ 是星形",b:"⭐ = 星形"},
    ],
    eng: [
      {t:"Colour",q:['🔴 = ?'],o:["red","blue","yellow","green"],a:0,g:"🔴 red",b:"🔴 = red"},
      {t:"Colour",q:['🟡 = ?'],o:["green","yellow","red","black"],a:1,g:"🟡 yellow",b:"🟡 = yellow"},
      {t:"Count",q:['🍎 = ?'],o:["one","two","three","four"],a:0,g:"one 🍎",b:"1 = one"},
      {t:"Count",q:['🍎🍎 = ?'],o:["one","two","three","four"],a:1,g:"two 🍎🍎",b:"2 = two"},
      {t:"Animal",q:['🐱 = ?'],o:["cat","dog","fish","bird"],a:0,g:"🐱 cat",b:"🐱 = cat"},
      {t:"Animal",q:['🐶 = ?'],o:["dog","cat","pig","cow"],a:0,g:"🐶 dog",b:"🐶 = dog"},
      {t:"Big/Small",q:['Which is big?'],o:["🐘","🐜","🐭","🐤"],a:0,g:"🐘 is big!",b:"🐘 elephant is big"},
      {t:"Shape",q:['⭐ = ?'],o:["star","circle","box","heart"],a:0,g:"⭐ star",b:"⭐ = star"},
    ],
  },

  // ===== 幼稚園 K2 (數 1-5、認字、簡單反義)=====
  K2: {
    chi: [
      {t:"數數",q:['🍎🍎🍎 有多少個？'],o:["二","三","四","五"],a:1,g:"三個 🍎🍎🍎",b:"數一數：三個。"},
      {t:"認字",q:['「三」是多少？'],o:["1","2","3","4"],a:2,g:"三 = 3",b:"「三」是 3。"},
      {t:"反義詞",q:['「大」的相反是……'],o:["小","多","高","長"],a:0,g:"大 ↔ 小",b:"大的相反是小。"},
      {t:"反義詞",q:['「上」的相反是……'],o:["下","左","前","中"],a:0,g:"上 ↔ 下",b:"上的相反是下。"},
      {t:"看圖識字",q:['☀️ 這是甚麼？寫成哪個字？'],o:["日","月","目","白"],a:0,g:"☀️ 就是「日」",b:"太陽 = 日"},
      {t:"顏色",q:['🟢 是甚麼顏色？'],o:["綠色","藍色","紅色","黃色"],a:0,g:"🟢 綠色",b:"🟢 = 綠色"},
      {t:"量詞",q:['一','貓'],o:["隻","本","個","朵"],a:0,g:"一隻貓 🐱",b:"動物用「隻」。"},
      {t:"數數",q:['✋ 一隻手有多少隻手指？'],o:["三","四","五","六"],a:2,g:"五隻手指 ✋",b:"一隻手五隻手指。"},
    ],
    eng: [
      {t:"Count",q:['🍎🍎🍎 = ?'],o:["two","three","four","five"],a:1,g:"three",b:"3 = three"},
      {t:"Count",q:['🖐️ fingers = ?'],o:["three","four","five","six"],a:2,g:"five 🖐️",b:"5 = five"},
      {t:"Letter",q:['A  B  _'],o:["C","D","E","F"],a:0,g:"A B C",b:"after B is C"},
      {t:"Letter",q:['🍎 apple starts with…'],o:["a","b","c","o"],a:0,g:"apple → a",b:"apple starts with a"},
      {t:"Animal",q:['🐟 = ?'],o:["fish","frog","fox","fly"],a:0,g:"🐟 fish",b:"🐟 = fish"},
      {t:"Colour",q:['🟢 = ?'],o:["green","grey","gold","blue"],a:0,g:"🟢 green",b:"🟢 = green"},
      {t:"Opposite",q:['big ↔ ?'],o:["small","tall","long","fat"],a:0,g:"big ↔ small",b:"big ↔ small"},
      {t:"Number",q:['4 = ?'],o:["three","four","five","six"],a:1,g:"4 = four",b:"4 = four"},
    ],
  },

  // ===== 幼稚園 K3 (數到 10、簡單加法、認多些字)=====
  K3: {
    chi: [
      {t:"簡單加法",q:['🍎🍎 加 🍎 = ?'],o:["二","三","四","五"],a:1,g:"2 + 1 = 3 🍎🍎🍎",b:"合起來數：三個。"},
      {t:"數數",q:['🌟🌟🌟🌟 有多少顆？'],o:["三","四","五","六"],a:1,g:"四顆 🌟",b:"數一數：四顆。"},
      {t:"看圖識字",q:['⛰️ 這是甚麼？寫成哪個字？'],o:["山","出","土","上"],a:0,g:"⛰️ 就是「山」",b:"高山 = 山"},
      {t:"看圖識字",q:['💧 這是甚麼？寫成哪個字？'],o:["木","水","火","永"],a:1,g:"💧 就是「水」",b:"這是「水」。"},
      {t:"反義詞",q:['「多」的相反是……'],o:["少","大","高","滿"],a:0,g:"多 ↔ 少",b:"多的相反是少。"},
      {t:"反義詞",q:['「開」的相反是……'],o:["關","走","坐","站"],a:0,g:"開 ↔ 關",b:"開門、關門。"},
      {t:"量詞",q:['一','書'],o:["隻","本","架","條"],a:1,g:"一本書 📖",b:"書用「本」。"},
      {t:"數字",q:['「5」用中文寫是……'],o:["三","四","五","六"],a:2,g:"5 = 五",b:"5 寫成「五」。"},
    ],
    eng: [
      {t:"Add",q:['🍎🍎 + 🍎 = ?'],o:["two","three","four","five"],a:1,g:"2 + 1 = 3",b:"three"},
      {t:"Count",q:['⭐⭐⭐⭐ = ?'],o:["three","four","five","six"],a:1,g:"four ⭐",b:"4 = four"},
      {t:"Spelling",q:['🐱  c _ t'],o:["a","e","i","o"],a:0,g:"c-a-t = cat",b:"cat"},
      {t:"Spelling",q:['🐶  d _ g'],o:["a","o","u","e"],a:1,g:"d-o-g = dog",b:"dog"},
      {t:"Number",q:['7 = ?'],o:["six","seven","eight","nine"],a:1,g:"7 = seven",b:"7 = seven"},
      {t:"Opposite",q:['up ↔ ?'],o:["down","top","in","out"],a:0,g:"up ↔ down",b:"up ↔ down"},
      {t:"Match",q:['📖 = ?'],o:["book","pen","bag","desk"],a:0,g:"📖 book",b:"📖 = book"},
      {t:"Letter",q:['🐟 fish starts with…'],o:["f","s","h","i"],a:0,g:"fish → f",b:"fish starts with f"},
    ],
  },

  // ===== 小二 P2 (詞語、部首、簡單成語、標點)=====
  P2: {
    chi: [
      {t:"成語",q:['一心一','（很專心）'],o:["意","義","用","心"],a:0,g:"一心一意 = 很專心 🎯",b:"一心一意。"},
      {t:"近義詞",q:['「開心」意思最接近……'],o:["快樂","傷心","生氣","肚餓"],a:0,g:"開心 ≈ 快樂 😊",b:"開心和快樂相近。"},
      {t:"部首",q:['「花」字上面是甚麼部首？'],o:["草花頭","水","木","火"],a:0,g:"艹 草花頭，和植物有關 🌸",b:"花有草花頭。"},
      {t:"詞語",q:['圖書','（借書看書的地方）'],o:["館","店","場","室"],a:0,g:"圖書館 📚",b:"借書的地方是圖書館。"},
      {t:"反義詞",q:['「買」的相反是……'],o:["賣","送","借","還"],a:0,g:"買 ↔ 賣",b:"買東西、賣東西。"},
      {t:"量詞",q:['一','褲'],o:["條","件","隻","對"],a:0,g:"一條褲 👖",b:"褲用「條」。"},
      {t:"標點",q:['句子中間停一停，用哪個標點？'],o:["，逗號","。句號","？問號","！感嘆號"],a:0,g:"中間停頓用逗號 ，",b:"句中停頓用逗號。"},
      {t:"筆畫",q:['「木」字有多少畫？'],o:["三畫","四畫","五畫","六畫"],a:1,g:"「木」有四畫",b:"「木」是四畫。"},
    ],
    eng: [
      {t:"Plural",q:['one dog, two ___'],o:["dog","dogs","doges","dog's"],a:1,g:"dog → dogs",b:"Add -s: dogs"},
      {t:"Verb be",q:['I ___ a boy.'],o:["am","is","are","be"],a:0,g:"I am …",b:"I + am"},
      {t:"Preposition",q:['The cat is ___ the box. 🐱📦'],o:["in","on","of","to"],a:0,g:"in the box",b:"inside → in"},
      {t:"Sight word",q:['___ sun is hot. ☀️'],o:["The","A","An","Is"],a:0,g:"The sun",b:"The sun"},
      {t:"Opposite",q:['day ↔ ?'],o:["night","sun","week","noon"],a:0,g:"day ↔ night 🌙",b:"day ↔ night"},
      {t:"Days",q:['After Monday is ___'],o:["Sunday","Tuesday","Friday","Monday"],a:1,g:"→ Tuesday",b:"after Monday is Tuesday"},
      {t:"Number",q:['12 = ?'],o:["twenty","twelve","twenty-one","two"],a:1,g:"12 = twelve",b:"12 = twelve"},
      {t:"Verb",q:['Birds can ___ 🐦'],o:["swim","fly","read","cook"],a:1,g:"Birds fly 🐦",b:"Birds → fly"},
    ],
  },

  // ===== 小四 P4 (較深成語、修辭、量詞、過去式)=====
  P4: {
    chi: [
      {t:"成語",q:['畫蛇添','（多此一舉）'],o:["足","手","口","尾"],a:0,g:"畫蛇添足 = 多此一舉 🐍",b:"畫蛇添足。"},
      {t:"成語",q:['對牛彈','（說了也沒用）'],o:["琴","歌","話","曲"],a:0,g:"對牛彈琴 🎵🐮",b:"對牛彈琴。"},
      {t:"近義詞",q:['「立刻」意思最接近……'],o:["馬上","慢慢","偶然","從前"],a:0,g:"立刻 ≈ 馬上 ⏱️",b:"立刻和馬上相近。"},
      {t:"反義詞",q:['「增加」的相反是……'],o:["減少","加多","上升","擴大"],a:0,g:"增加 ↔ 減少",b:"增加的相反是減少。"},
      {t:"修辭",q:['「太陽公公起床了」用了甚麼手法？'],o:["擬人","比喻","誇張","排比"],a:0,g:"把太陽當人 = 擬人法 ☀️",b:"當作人來寫 = 擬人。"},
      {t:"量詞",q:['一','馬'],o:["匹","隻","條","頭"],a:0,g:"一匹馬 🐴",b:"馬用「匹」。"},
      {t:"部首",q:['「江」「河」「海」都有甚麼部首？'],o:["氵(水)","工","口","每"],a:0,g:"都有水部氵，和水有關 💧",b:"和水有關，用水部。"},
      {t:"詞語辨析",q:['天氣很熱，我','大汗。'],o:["流","留","流","漏"],a:0,g:"流汗（流 = 水流出）💦",b:"是「流汗」。"},
    ],
    eng: [
      {t:"Past tense",q:['Yesterday I ___ to school.'],o:["go","goes","went","going"],a:2,g:"go → went (past)",b:"Past of go is went"},
      {t:"Past tense",q:['She ___ an apple just now.'],o:["eat","ate","eaten","eats"],a:1,g:"eat → ate 🍎",b:"Past of eat is ate"},
      {t:"Comparative",q:['An elephant is ___ than a cat.'],o:["big","bigger","biggest","more big"],a:1,g:"bigger than 🐘>🐱",b:"than → bigger"},
      {t:"Adverb",q:['The rabbit runs ___ 🐰💨'],o:["quick","quickly","quicker","quickest"],a:1,g:"runs quickly",b:"verb + -ly → quickly"},
      {t:"Preposition",q:['Sit ___ me. (side by side)'],o:["beside","between","behind","below"],a:0,g:"beside = next to",b:"next to → beside"},
      {t:"Vocabulary",q:['Rainy and windy is the ___'],o:["weather","water","winter","window"],a:0,g:"weather 🌧️",b:"rain/wind → weather"},
      {t:"Question",q:['___ do you go to school? — By bus.'],o:["How","What","Who","Why"],a:0,g:"How → by bus 🚌",b:"asking way → How"},
      {t:"Plural",q:['one child, two ___'],o:["childs","children","childes","child"],a:1,g:"child → children",b:"child → children (irregular)"},
    ],
  },

  // ===== 小五 P5 (成語、關聯詞、詞語辨析、時態)=====
  P5: {
    chi: [
      {t:"成語",q:['亡羊補','（出事後補救）'],o:["牢","羊","門","窗"],a:0,g:"亡羊補牢，未為晚也 🐑",b:"亡羊補牢。"},
      {t:"詞語辨析",q:['愛迪生','了電燈。'],o:["發明","發現","發生","發出"],a:0,g:"從無到有 = 發明 💡",b:"創造新東西是「發明」。"},
      {t:"關聯詞",q:['','天氣冷，所以要多穿衣。'],o:["因為","雖然","如果","不但"],a:0,g:"因為…所以…（因果）",b:"表示原因用「因為」。"},
      {t:"修辭",q:['「彎月像小船」用了甚麼手法？'],o:["比喻","擬人","誇張","反問"],a:0,g:"用「像」把月比作船 = 比喻 🌙⛵",b:"用「像」= 比喻。"},
      {t:"反義詞",q:['「節儉」的相反是……'],o:["浪費","省錢","勤力","富有"],a:0,g:"節儉 ↔ 浪費",b:"節儉的相反是浪費。"},
      {t:"近義詞",q:['「著名」意思最接近……'],o:["有名","陌生","普通","神秘"],a:0,g:"著名 ≈ 有名 ⭐",b:"著名和有名相近。"},
      {t:"標點",q:['說明下面有幾點，用哪個標點？'],o:["：冒號","、頓號","；分號","…省略號"],a:0,g:"提起下文用冒號 ：",b:"引出說明用冒號。"},
      {t:"詞語辨析",q:['他','了功課才去玩。'],o:["完成","完全","完美","完畢"],a:0,g:"完成功課 ✍️",b:"做好功課是「完成」。"},
    ],
    eng: [
      {t:"Present perfect",q:['I ___ finished my homework.'],o:["have","has","had","having"],a:0,g:"I have finished",b:"I/you/we + have"},
      {t:"Present perfect",q:['She ___ eaten lunch.'],o:["have","has","had","having"],a:1,g:"She has eaten",b:"He/She + has"},
      {t:"Conjunction",q:['I like tea ___ I don’t like coffee.'],o:["but","because","so","or"],a:0,g:"like… but don’t like… (對比)",b:"contrast → but"},
      {t:"Superlative",q:['This is the ___ mountain in the world. 🏔️'],o:["high","higher","highest","most high"],a:2,g:"the highest",b:"the + -est → highest"},
      {t:"Irregular past",q:['He ___ a song yesterday. 🎤'],o:["sing","sang","sung","sings"],a:1,g:"sing → sang",b:"past of sing is sang"},
      {t:"Vocabulary",q:['A person who teaches is a ___'],o:["teacher","doctor","farmer","driver"],a:0,g:"teacher 🧑‍🏫",b:"teaches → teacher"},
      {t:"Adverb",q:['She sings very ___ 🎶'],o:["beautiful","beautifully","beauty","more beautiful"],a:1,g:"sings beautifully",b:"verb + -ly"},
      {t:"Preposition",q:['The ball is ___ the two boxes.'],o:["between","beside","behind","below"],a:0,g:"between (在兩者之間)",b:"in the middle of two → between"},
    ],
  },

  // ===== 小六 P6 (成語典故、文言、修辭辨識、病句、條件句)=====
  P6: {
    chi: [
      {t:"成語",q:['守株待','（不肯努力，只想等運到）'],o:["兔","羊","鹿","牛"],a:0,g:"守株待兔 🐇（比喻不勞而獲）",b:"守株待兔。"},
      {t:"文言字詞",q:['「三人行，必有我師焉」的「師」指……'],o:["軍隊","可學習的人","老師的姓","獅子"],a:1,g:"師 = 值得學習的人 📖",b:"這裏「師」指可學習的對象。"},
      {t:"修辭",q:['「他跑得比風還快」用了甚麼手法？'],o:["誇張","擬人","比喻","反問"],a:0,g:"故意說得過分 = 誇張 💨",b:"言過其實 = 誇張。"},
      {t:"關聯詞",q:['','下雨，運動會也照常舉行。'],o:["即使","因為","所以","於是"],a:0,g:"即使…也…（讓步）",b:"表示退一步用「即使」。"},
      {t:"病句",q:['哪一句沒有毛病？'],o:["我把功課做完了。","我做完把功課了。","把我功課做完了。","做完我把功課了。"],a:0,g:"「我把功課做完了。」語序正確 ✅",b:"「把」字句：主語 + 把 + 賓語 + 動作。"},
      {t:"近義辨析",q:['「果斷」意思最接近……'],o:["乾脆決定","猶豫不決","粗心大意","小心翼翼"],a:0,g:"果斷 = 乾脆、不猶豫",b:"果斷是決定得快而堅定。"},
      {t:"成語",q:['熟能生','（多練習就會純熟）'],o:["巧","手","工","力"],a:0,g:"熟能生巧 💪",b:"熟能生巧。"},
      {t:"修辭",q:['「藍藍的天，白白的雲，綠綠的草」用了……'],o:["排比","設問","對偶","誇張"],a:0,g:"句式相似連用 = 排比",b:"三句結構相似 = 排比。"},
    ],
    eng: [
      {t:"Conditional",q:['If it rains, I ___ stay home.'],o:["will","am","did","was"],a:0,g:"If… , I will…",b:"If + present, will + verb"},
      {t:"Passive",q:['The cake ___ eaten by the dog. 🍰🐶'],o:["was","did","have","is being were"],a:0,g:"was eaten (passive past)",b:"was + past participle"},
      {t:"Idiom",q:['“It’s raining cats and dogs” means…'],o:["raining very heavily","animals falling","a sunny day","a light drizzle"],a:0,g:"= raining very heavily 🌧️",b:"idiom: very heavy rain"},
      {t:"Reported speech",q:['He said he ___ tired.'],o:["was","is","are","be"],a:0,g:"said he was (past)",b:"reported past → was"},
      {t:"Vocabulary",q:['Very happy = ___'],o:["delighted","angry","bored","afraid"],a:0,g:"delighted 😄",b:"very happy → delighted"},
      {t:"Conjunction",q:['___ he was tired, he finished the work.'],o:["Although","Because","So","And"],a:0,g:"Although… (讓步)",b:"contrast/concession → Although"},
      {t:"Comparative",q:['The more you practise, the ___ you get.'],o:["good","better","best","well"],a:1,g:"the more… the better",b:"comparative → better"},
      {t:"Tense",q:['Look! The baby ___ now. 👶😴'],o:["sleeps","is sleeping","slept","sleep"],a:1,g:"is sleeping (now = present continuous)",b:"now → is + -ing"},
    ],
  },

  /* 各級可繼續加題:改呢個檔即可,唔使掂 index.html。 */
};
