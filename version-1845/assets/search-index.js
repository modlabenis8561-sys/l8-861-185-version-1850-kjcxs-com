const SEARCH_INDEX = [
  {
    "title": "半泽直树2",
    "href": "details/movie-0001.html",
    "cover": "./1.jpg",
    "year": "2020",
    "region": "日本",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "职场复仇",
      "以牙还牙",
      "银行内斗",
      "热血",
      "加倍奉还"
    ],
    "oneLine": "半泽直树被调到东京中央证券后,卷入一场百亿日元的恶意收购战,他将再次以牙还牙。"
  },
  {
    "title": "徒步101",
    "href": "details/movie-0002.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "徒步",
      "环岛",
      "自我救赎"
    ],
    "oneLine": "五个各自欠着巨债、身患绝症或情感受伤的陌生人,为了争夺一百万奖金,必须沿着台湾省道台 101 线徒步 500 公里。"
  },
  {
    "title": "南瓜恶灵4:血债",
    "href": "details/movie-0003.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "万圣节",
      "复仇诅咒",
      "血腥美学",
      "系列重启"
    ],
    "oneLine": "万圣节前夜,一群年轻人无意中烧毁了献给南瓜恶灵的祭坛,引来跨越百年的血腥报复。"
  },
  {
    "title": "魔动王",
    "href": "details/movie-0004.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "category": "科幻奇幻",
    "tags": [
      "异世界",
      "巨型机器人",
      "魔法生物"
    ],
    "oneLine": "平凡高中生召唤失控魔动王,却发现机甲的核心是一颗被封印的泪滴。"
  },
  {
    "title": "黑黑真好玩",
    "href": "details/movie-0005.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "萌宠",
      "全年龄",
      "治愈",
      "熊猫",
      "冒险"
    ],
    "oneLine": "一只社恐小黑猫误入专收“黑户”动物的神秘森林,为了变白,它必须完成一个又一个无厘头的任务。"
  },
  {
    "title": "风流太子",
    "href": "details/movie-0006.html",
    "cover": "./6.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧/短剧",
    "category": "国产短剧",
    "tags": [
      "穿越",
      "女扮男装",
      "沙雕甜宠"
    ],
    "oneLine": "现代美妆博主穿越成太子的替身丫鬟,她被迫每天给“全京城最丑”的太子化妆,却不知对方面具下是绝世容颜。"
  },
  {
    "title": "遇见你的第一次",
    "href": "details/movie-0007.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "时间循环",
      "青梅竹马",
      "逆转命运"
    ],
    "oneLine": "婚礼当天被新郎抛弃,她意外获得了重回高中、改写与男主所有“第一次”的机会。"
  },
  {
    "title": "天上的孩子",
    "href": "details/movie-0008.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "留守儿童",
      "幻想",
      "治愈",
      "农村"
    ],
    "oneLine": "一个住在天眼FAST附近的留守儿童,坚信自己能通过射电望远镜听到去世妈妈的声音。"
  },
  {
    "title": "斗破苍穹第一季",
    "href": "details/movie-0009.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "热血漫改",
      "异火",
      "打怪升级",
      "少年逆袭"
    ],
    "oneLine": "天才少年萧炎一夜沦为废柴,在退婚之辱中觉醒纳戒里的神秘老爷爷,踏上收服异火的复仇变强之路。"
  },
  {
    "title": "麻雀变王妃",
    "href": "details/movie-0010.html",
    "cover": "./10.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "灰姑娘",
      "假结婚",
      "反差萌",
      "甜剧"
    ],
    "oneLine": "泼辣的女拳击手被迫假扮温婉王妃,她和新国王约定:白天演恩爱,晚上在寝宫对打实战。"
  },
  {
    "title": "地球防卫少年",
    "href": "details/movie-0011.html",
    "cover": "./11.jpg",
    "year": "2007",
    "region": "日本",
    "type": "动画",
    "category": "科幻奇幻",
    "tags": [
      "机甲",
      "子供",
      "绝望"
    ],
    "oneLine": "十五个少年被选中驾驶巨大机器人对抗怪兽,但每次战斗后都会有一名驾驶员死亡。"
  },
  {
    "title": "十条命",
    "href": "details/movie-0012.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画电影",
    "category": "国产短剧",
    "tags": [
      "猫",
      "轮回",
      "亲情",
      "珍惜生命"
    ],
    "oneLine": "一只骄纵的宠物猫意外获得九次重来的机会,却发现第十条命才是唯一的答案。"
  },
  {
    "title": "末基劳:英雄崛起",
    "href": "details/movie-0013.html",
    "cover": "./13.jpg",
    "year": "2021",
    "region": "马来西亚",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "马来武士",
      "抗英",
      "冷兵器",
      "热带雨林"
    ],
    "oneLine": "19世纪马来西亚,民间武士末基劳率领族人,用吹箭和陷阱对抗英国殖民者的火炮。 英国殖民者高价悬赏末基劳的人头,没人知道这个传说中的“雨林鬼魂”,只是一个种榴莲的农夫。"
  },
  {
    "title": "之前的我们",
    "href": "details/movie-0014.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "遗憾",
      "重逢",
      "岁月"
    ],
    "oneLine": "一次地震后,失联十年的初恋突然加回好友,但她已有了未婚夫。"
  },
  {
    "title": "天若有情3之烽火佳人",
    "href": "details/movie-0015.html",
    "cover": "./15.jpg",
    "year": "1996",
    "region": "香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "抗战",
      "虐恋",
      "生死相随"
    ],
    "oneLine": "战地护士与逃亡军官在炮火中相爱,她的婚约却是一颗随时引爆的地雷。"
  },
  {
    "title": "异星战境",
    "href": "details/movie-0016.html",
    "cover": "./16.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "机甲",
      "外星殖民",
      "背叛",
      "视觉系",
      "AI"
    ],
    "oneLine": "人类最先进的机甲战士叛变,驾驶员必须潜入敌营亲手毁掉自己的战甲。"
  },
  {
    "title": "心灵驿站",
    "href": "details/movie-0017.html",
    "cover": "./17.jpg",
    "year": "2003",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "侏儒症主角",
      "小镇故事",
      "丧友治愈"
    ],
    "oneLine": "一个侏儒症男子继承偏远火车站的废弃站房,两个怪咖邻居帮他重燃生活希望。"
  },
  {
    "title": "芝士伙伴",
    "href": "details/movie-0018.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "美食",
      "友情",
      "创业",
      "治愈"
    ],
    "oneLine": "五个失业的便利店夜班店员,用即将过期的芝士和面包,开了一家只在午夜营业的披萨店。"
  },
  {
    "title": "探险手札之未知领域",
    "href": "details/movie-0019.html",
    "cover": "./19.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "秘境",
      "解谜",
      "古文明",
      "视觉系"
    ],
    "oneLine": "一本残破的日记,将四名探险者引向地图上不存在的地下文明遗迹。"
  },
  {
    "title": "军火女王 第二季",
    "href": "details/movie-0020.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "军火",
      "战斗",
      "佣兵",
      "全球化"
    ],
    "oneLine": "为了阻止世界性的阴谋,军火女王蔻蔻带领她的团队潜入太空,试图引爆失控的电磁轨道炮卫星。"
  },
  {
    "title": "大卫王",
    "href": "details/movie-0021.html",
    "cover": "./21.jpg",
    "year": "2026",
    "region": "以色列/美国",
    "type": "剧集/迷你剧",
    "category": "动作冒险",
    "tags": [
      "圣经",
      "史诗",
      "政治谋略",
      "权力游戏",
      "古以色列"
    ],
    "oneLine": "少年牧羊人击败巨人后,发现自己成了王的棋子,而神从未站在任何一方。"
  },
  {
    "title": "邻家男孩",
    "href": "details/movie-0022.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "法国/比利时",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "畸形母爱",
      "地下室囚禁",
      "精神控制"
    ],
    "oneLine": "单亲妈妈收留了自称被家暴的邻家男孩,十年后才发现这男孩就是她自己25年前失踪的亲生子。"
  },
  {
    "title": "玛嘉烈与大卫丝丝2024",
    "href": "details/movie-0023.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "都市",
      "前任",
      "重逢",
      "平行叙事",
      "遗憾"
    ],
    "oneLine": "分手十年后,玛嘉烈与大卫在同一个城市不同的角落,各自听着同一张旧CD,回忆着同一段恋情。"
  },
  {
    "title": "鬼影幢幢",
    "href": "details/movie-0024.html",
    "cover": "./24.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "鬼宅",
      "轮回",
      "民俗恐怖",
      "高智商鬼",
      "反转"
    ],
    "oneLine": "一栋老楼里住着三户人家,每家都看到不同的鬼,但所有鬼都指向同一个沉睡的人。"
  },
  {
    "title": "阿尔迪克",
    "href": "details/movie-0025.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "哈萨克斯坦",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "草原兄弟情",
      "俄苏遗痕",
      "沉默叙事"
    ],
    "oneLine": "苏联解体后,一名哈萨克老兵骑着骆驼穿越草原,只为把战友的骨灰送回他的村庄。"
  },
  {
    "title": "1997所向无敌",
    "href": "details/movie-0026.html",
    "cover": "./26.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "回归前夕",
      "黑帮",
      "拳击",
      "兄弟情"
    ],
    "oneLine": "1997年回归夜前夕,一位地下拳王为救兄弟,必须在最后一战中“所向无敌”。"
  },
  {
    "title": "人生不再重来",
    "href": "details/movie-0027.html",
    "cover": "./27.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "时间循环",
      "治愈",
      "自我救赎"
    ],
    "oneLine": "失意中年男子意外获得重活一次的机会,却发现每次选择都会带来意想不到的连锁反应。"
  },
  {
    "title": "行车记录仪",
    "href": "details/movie-0028.html",
    "cover": "./28.jpg",
    "year": "2021",
    "region": "俄罗斯",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "伪纪录",
      "公路",
      "恐怖",
      "社会批判"
    ],
    "oneLine": "网红主播为博流量开着车在深夜直播,行车记录仪拍下了一场谋杀,而凶手正在直播弹幕里指挥他。"
  },
  {
    "title": "狼雨",
    "href": "details/movie-0029.html",
    "cover": "./29.jpg",
    "year": "2021",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "狼",
      "幻境",
      "末世",
      "花之女"
    ],
    "oneLine": "末世的狼伪装成人,追寻着能开满世界的“月之花”。"
  },
  {
    "title": "我们在黑夜中相拥",
    "href": "details/movie-0030.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧/第一季",
    "category": "国产短剧",
    "tags": [
      "夜间工作",
      "都市孤独",
      "地铁末班车",
      "治愈系悬疑",
      "相遇与重逢"
    ],
    "oneLine": "每个深夜,她在末班地铁画陌生人,他是唯一发现她画里所有“路人”都长着同一张脸的人。"
  },
  {
    "title": "精神食粮",
    "href": "details/movie-0031.html",
    "cover": "./31.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "美食",
      "治愈",
      "时空循环",
      "小人物",
      "温情"
    ],
    "oneLine": "一个外卖员发现自己送出的每一餐,都能短暂“附身”点餐人的五感,他决定用这项能力找到失踪的女儿。"
  },
  {
    "title": "傲娇与偏见",
    "href": "details/movie-0032.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "傲慢总裁",
      "打脸真香",
      "契约恋爱"
    ],
    "oneLine": "毒舌女编剧误把傲娇投资人的商业机密当狗血素材,被迫签下恋爱契约假戏真做。"
  },
  {
    "title": "时髦女子",
    "href": "details/movie-0033.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "复古",
      "时尚",
      "女性",
      "觉醒",
      "巴黎"
    ],
    "oneLine": "1960年代巴黎,一位乡下裁缝冒充社交名媛混入时尚圈,却意外掀起了一场时尚革命。"
  },
  {
    "title": "脂粉英雄",
    "href": "details/movie-0034.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "女性群像",
      "权谋",
      "打戏",
      "逆袭"
    ],
    "oneLine": "民国初年,六个青楼女子刺杀军阀失败后,竟假扮男装潜入军校,成为最强女兵。"
  },
  {
    "title": "恶魔之爪",
    "href": "details/movie-0035.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "深山老林",
      "畸形人",
      "血浆",
      "生存"
    ],
    "oneLine": "六名网红去深山废弃精神病院直播探险,唤醒了被称为“恶魔之爪”的畸形怪物,直播镜头成了死亡回放。"
  },
  {
    "title": "圣特鲁佩斯的警察",
    "href": "details/movie-0036.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "法国喜剧",
      "度假胜地",
      "乌龙警察",
      "笨贼一箩筐",
      "海滨风情"
    ],
    "oneLine": "圣特鲁佩斯迎来旅游旺季,一群笨拙的本地警察和一群更笨的国际大盗,在蔚蓝海岸上演连环乌龙。"
  },
  {
    "title": "熊熊乐园第二部",
    "href": "details/movie-0037.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "儿童",
      "启蒙",
      "治愈"
    ],
    "oneLine": "小熊大和小熊二的幼儿园生活迎来了新同学——一只来自北极、害怕寒冷的小白熊。"
  },
  {
    "title": "逃离梦幻岛",
    "href": "details/movie-0038.html",
    "cover": "./38.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "争议",
      "性侵指控",
      "迈克尔·杰克逊",
      "社会议题"
    ],
    "oneLine": "两位中年男子首次公开讲述了他们童年时期在“梦幻庄园”与流行音乐天王共处的七年,及其背后的黑暗。"
  },
  {
    "title": "残破的娃娃",
    "href": "details/movie-0039.html",
    "cover": "./39.jpg",
    "year": "2016",
    "region": "西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "玩偶",
      "创伤",
      "童年阴影",
      "超自然"
    ],
    "oneLine": "一名玩偶修复师接了一单生意:修复一个被烧焦的娃娃,之后她家中所有娃娃开始自己移动。"
  },
  {
    "title": "霍多洛夫斯基星座",
    "href": "details/movie-0040.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "宇航员",
      "星座",
      "孤独",
      "幻觉",
      "宇宙"
    ],
    "oneLine": "独自在空间站驻留的宇航员,开始在舷窗外看到一个不存在的星座。"
  },
  {
    "title": "铁翼雄风",
    "href": "details/movie-0041.html",
    "cover": "./41.jpg",
    "year": "1927",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "默片",
      "空战",
      "奥斯卡",
      "经典"
    ],
    "oneLine": "一战时期,两名飞行员爱上同一个女孩,他们在空中与敌人和情敌展开生死对决。"
  },
  {
    "title": "风",
    "href": "details/movie-0042.html",
    "cover": "./42.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "疯人院",
      "复仇",
      "女性",
      "反转"
    ],
    "oneLine": "精神科医生在新精神病院遇怪事,五个女病人都说自己是“风”,而真正的连环杀手可能就在身边。"
  },
  {
    "title": "叱咤风流",
    "href": "details/movie-0043.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "港风怀旧",
      "八十年代",
      "电台故事",
      "群像喜剧"
    ],
    "oneLine": "1980年代的香港,一家濒临倒闭的电台里,一群三流DJ和过气歌手试图做出一档全港最火的节目。"
  },
  {
    "title": "诡忆",
    "href": "details/movie-0044.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "失忆",
      "老照片",
      "诅咒",
      "循环"
    ],
    "oneLine": "每次翻看老照片,女主角就会看到同一张脸出现在她所有的记忆里,但她根本不认识这个人。"
  },
  {
    "title": "触发警报",
    "href": "details/movie-0045.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "特工",
      "反恐",
      "倒计时",
      "谍战"
    ],
    "oneLine": "一名退役特种兵手机意外收到红色警报,却发现这是个专门猎杀老兵的系统陷阱。"
  },
  {
    "title": "基督山恩仇记",
    "href": "details/movie-0046.html",
    "cover": "./46.jpg",
    "year": "2028",
    "region": "法国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "经典改编",
      "越狱",
      "复仇",
      "巨额财富"
    ],
    "oneLine": "被诬陷入狱十四年的水手获得惊天宝藏,化身神秘伯爵,向三个背叛他的朋友展开优雅而致命的复仇。"
  },
  {
    "title": "亲情变奏曲",
    "href": "details/movie-0047.html",
    "cover": "./47.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "重组家庭",
      "钢琴",
      "遗嘱",
      "房产",
      "遗产"
    ],
    "oneLine": "钢琴家父亲去世后,前妻的子女与现任妻子的儿女为了争夺遗产,被迫住在一个屋檐下弹奏名为亲情的变奏曲。"
  },
  {
    "title": "被禁止的国家队",
    "href": "details/movie-0048.html",
    "cover": "./48.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "电子竞技",
      "禁赛",
      "黑幕",
      "少年热血",
      "反叛精神"
    ],
    "oneLine": "五名被永久禁赛的天才选手组建了一支“幽灵战队”,用别人的身份冲击世界冠军。"
  },
  {
    "title": "多大点事儿",
    "href": "details/movie-0049.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "邻里关系",
      "鸡毛蒜皮",
      "市井温情",
      "轻喜"
    ],
    "oneLine": "北京胡同里,两个因为“抢车位”结下梁子的老邻居,被迫成了儿女亲家,由此引发一连串连锁反应。"
  },
  {
    "title": "与贝佛莉罗浮琳的一晚",
    "href": "details/movie-0050.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "粉丝文化",
      "偶像坍塌",
      "对话体",
      "独角戏"
    ],
    "oneLine": "一个骨灰级女粉丝赢得了与过气恐怖片女王贝佛莉·罗浮琳共进晚餐的机会,却发现这位偶像早已把自己的生活活成了一场恐怖片。"
  },
  {
    "title": "超级赢家",
    "href": "details/movie-0051.html",
    "cover": "./51.jpg",
    "year": "1992",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "格斗游戏",
      "穿越",
      "街机"
    ],
    "oneLine": "两个游戏高手被吸入街机,必须在真人版格斗游戏中击败所有角色,才能重返现实。"
  },
  {
    "title": "生化人脑",
    "href": "details/movie-0052.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "日本/美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "脑机接口",
      "AI叛乱",
      "记忆植入",
      "伦理",
      "逃亡"
    ],
    "oneLine": "2068年,第一个拥有完整人类记忆的生化人逃出实验室,追杀她的不是政府,而是她的亲生母亲。"
  },
  {
    "title": "十年日本",
    "href": "details/movie-0053.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "近未来",
      "老龄化",
      "AI",
      "日本社会",
      "单元剧"
    ],
    "oneLine": "2035年的日本,五个关于孤独、科技与人性的故事,拼出一幅令人不安又感动的未来图景。"
  },
  {
    "title": "短暂的团聚",
    "href": "details/movie-0054.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "春运",
      "家庭秘密",
      "时空循环",
      "温情"
    ],
    "oneLine": "每年除夕,一家四口都会团聚24小时,但母亲发现每次团聚后,家人的记忆都会消失一部分。"
  },
  {
    "title": "激情旅行",
    "href": "details/movie-0055.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "艳遇",
      "误会",
      "青春",
      "自驾",
      "荒唐一夜"
    ],
    "oneLine": "一对新婚夫妇的蜜月之旅,被一个打错的电话彻底搅成了连环闹剧。"
  },
  {
    "title": "禁止的关系",
    "href": "details/movie-0056.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "禁忌之恋",
      "悬疑",
      "反转",
      "伦理困境"
    ],
    "oneLine": "准新娘发现未婚夫的秘密情人竟是自己的亲姐姐,而姐姐在一场火灾后失忆了。"
  },
  {
    "title": "难得孖情人",
    "href": "details/movie-0057.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "双胞胎",
      "替身",
      "错位",
      "港式幽默"
    ],
    "oneLine": "哥哥让弟弟假扮自己去分手,结果弟弟爱上了哥哥的女友,而哥哥爱上了女友的闺蜜。"
  },
  {
    "title": "假期历险记2024",
    "href": "details/movie-0058.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "公路喜剧",
      "家庭闹剧",
      "黑色幽默"
    ],
    "oneLine": "一个倒霉的四口之家试图用旧地图寻找“消失的秘境乐园”,却误闯了军事禁区。"
  },
  {
    "title": "好棒!我儿子是基!",
    "href": "details/movie-0059.html",
    "cover": "./59.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "出柜",
      "母亲视角",
      "接纳",
      "中式家庭"
    ],
    "oneLine": "一位传统台湾母亲发现儿子是同性恋,从崩溃到全力支持,却发现最难的是让儿子接受自己。"
  },
  {
    "title": "元宇宙·回到1995",
    "href": "details/movie-0060.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "VR",
      "怀旧",
      "游戏世界",
      "父子情"
    ],
    "oneLine": "在元宇宙游戏中,厌世的少年回到了父母谈恋爱的1995年,他必须促成他们的分手,否则自己就不会出生。"
  },
  {
    "title": "乐队男孩:从何而来",
    "href": "details/movie-0061.html",
    "cover": "./61.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "青春",
      "乐队",
      "成长",
      "身份认同",
      "90年代"
    ],
    "oneLine": "1997年夏天,四个边缘男生组建了一支地下乐队,却意外挖出一段改变彼此命运的尘封往事。"
  },
  {
    "title": "那年夏天,宁静的海",
    "href": "details/movie-0062.html",
    "cover": "./62.jpg",
    "year": "1991",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "北野武",
      "聋哑情侣",
      "冲浪"
    ],
    "oneLine": "一对聋哑情侣在海边捡到一块破损的冲浪板,男孩开始练习冲浪,女孩只是静静地看着,大海成了他们唯一的语言。"
  },
  {
    "title": "爱情无全顺",
    "href": "details/movie-0063.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "学渣逆袭",
      "平行选择",
      "甜蜜轻喜"
    ],
    "oneLine": "成绩倒数第一的女大学生意外获得“人生重选器”,每按一次就能体验和不同男神恋爱的平行世界。"
  },
  {
    "title": "热雪踏歌夜",
    "href": "details/movie-0064.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "音乐",
      "滑雪",
      "民族",
      "青春",
      "热血"
    ],
    "oneLine": "一群来自南方没见过雪的年轻人,为了参加冰雪音乐节,在模拟滑雪场上开始了啼笑皆非的训练。"
  },
  {
    "title": "脱线春香传",
    "href": "details/movie-0065.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "穿越",
      "恶搞",
      "高考",
      "朝鲜传统",
      "偶像"
    ],
    "oneLine": "朝鲜时代的名妓春香,被一个来自未来的高考生附身,从此用《5年高考3年模拟》的思维调教李梦龙。"
  },
  {
    "title": "戈德堡一家第四季",
    "href": "details/movie-0066.html",
    "cover": "./66.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "80年代",
      "怀旧",
      "美式家庭"
    ],
    "oneLine": "80年代的犹太家庭继续鸡飞狗跳,老妈贝弗莉的“窒息式母爱”在第四季再度升级。"
  },
  {
    "title": "再见哈利",
    "href": "details/movie-0067.html",
    "cover": "./67.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影 剧情",
    "category": "喜剧家庭",
    "tags": [
      "宠物",
      "告别",
      "治愈",
      "成长"
    ],
    "oneLine": "一只活了十七年的老狗临终前用最后一天,教会了家里那个叛逆的青春期男孩什么叫“好好告别”。"
  },
  {
    "title": "唐廷传之陈塘恩仇",
    "href": "details/movie-0068.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "唐朝",
      "悬疑",
      "复仇",
      "狄仁杰宇宙"
    ],
    "oneLine": "少年唐廷为报父仇潜入陈塘李家,却发现灭门凶手竟是自己最敬重的结义兄长。"
  },
  {
    "title": "玩命法则",
    "href": "details/movie-0069.html",
    "cover": "./69.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "地下赛车",
      "以暴制暴",
      "极限运动"
    ],
    "oneLine": "一名卧底警察潜入地下赛车世界,发现这里的法则不是速度取胜,而是用命来赌下一场比赛的规则。"
  },
  {
    "title": "干柴烈火情",
    "href": "details/movie-0070.html",
    "cover": "./70.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "办公室恋情",
      "港式幽默",
      "女强男弱",
      "烟火气",
      "日久生情"
    ],
    "oneLine": "知名美食杂志的毒舌女主编与她的暖男摄影师助理,在一场场关于“锅气”与“摆盘”的争吵中,悄悄点燃了彼此的真心。"
  },
  {
    "title": "凉亭虚惊",
    "href": "details/movie-0071.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "误会",
      "小区",
      "保安",
      "乌龙"
    ],
    "oneLine": "小区凉亭里深夜传出女人哭声,热心大爷大妈联手查案,结果哭笑不得。"
  },
  {
    "title": "杀死伊芙 第二季",
    "href": "details/movie-0072.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "英国/美国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "猫鼠游戏",
      "女杀手",
      "相爱相杀",
      "心理暗战"
    ],
    "oneLine": "上一季结尾伊芙捅伤薇拉内尔后失踪,第二季开局薇拉内尔从病床上爬起来,开始了更疯狂的“寻妻”之路。"
  },
  {
    "title": "大运河粤语",
    "href": "details/movie-0073.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "大运河",
      "货运",
      "家族史诗",
      "粤语原声",
      "商战"
    ],
    "oneLine": "清末民初,三大家族在大运河上争夺货运控制权,而运河本身在每个关键节点都会“开口说话”。"
  },
  {
    "title": "我希望在地狱里仍有酒喝",
    "href": "details/movie-0074.html",
    "cover": "./74.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "治愈",
      "绝症",
      "酒文化",
      "人生感悟"
    ],
    "oneLine": "确诊绝症的酗酒编辑决定用最后的三个月,为自己写一本名为“死亡”的饮酒日记。"
  },
  {
    "title": "海棠",
    "href": "details/movie-0075.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "眷村往事",
      "三代和解",
      "植物隐喻"
    ],
    "oneLine": "孙女为完成爷爷遗愿,将一株从未开过花的海棠带回山东老家,却在土里挖出半封血信。"
  },
  {
    "title": "血巷",
    "href": "details/movie-0076.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "地下交通",
      "移民偷渡",
      "密闭恐惧",
      "道德困境"
    ],
    "oneLine": "美墨边境地下隧道里,五个偷渡客和两个运毒者,被一个看不见的东西堵在中间。"
  },
  {
    "title": "滞留生",
    "href": "details/movie-0077.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "教育",
      "逆袭",
      "师生情"
    ],
    "oneLine": "一个连考三年大学的“专业滞留生”,与新来的年轻班主任组成了一对不可思议的“高考搭子”。"
  },
  {
    "title": "驱魔大师",
    "href": "details/movie-0078.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "驱魔",
      "神父",
      "单元剧",
      "反转",
      "恐怖"
    ],
    "oneLine": "一个没有信仰的驱魔师用物理学和心理学“驱魔”,成功率比梵蒂冈认证的大师还高。"
  },
  {
    "title": "习总书记的初心",
    "href": "details/movie-0079.html",
    "cover": "./79.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "纪录片",
    "category": "国产短剧",
    "tags": [
      "纪实影像",
      "基层足迹",
      "治国理政",
      "人物特辑"
    ],
    "oneLine": "追寻青年时期梁家河的足迹,揭示一位大国领袖深厚的人民情怀与政治初心。"
  },
  {
    "title": "美国豚鼠2:血腥冲击",
    "href": "details/movie-0080.html",
    "cover": "./80.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "邪典",
      "禁片",
      "伪纪录片",
      "身体恐怖"
    ],
    "oneLine": "一个地下组织用活人进行极端疼痛测试,摄像机记录下了所有画面。"
  },
  {
    "title": "有益的欺诈",
    "href": "details/movie-0081.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "以恶制恶",
      "天才骗子",
      "复仇"
    ],
    "oneLine": "一个天才诈骗犯联手被害者家属,专骗那些逃脱法律制裁的权贵。"
  },
  {
    "title": "假如王子睡着了",
    "href": "details/movie-0082.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "植物人",
      "乌龙",
      "契约婚姻"
    ],
    "oneLine": "平凡的看护发现,只要她亲吻植物人王子,他在梦里就能苏醒一分钟。"
  },
  {
    "title": "血河2024",
    "href": "details/movie-0083.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "末世",
      "生化危机",
      "硬核动作",
      "女性主角"
    ],
    "oneLine": "2024年,一条因生化污染而发出红光的河流横贯大陆,一名退役女兵必须逆流而上,拯救被绑架的女儿。"
  },
  {
    "title": "蒸气杀人实验",
    "href": "details/movie-0084.html",
    "cover": "./84.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "密室逃脱",
      "人体实验",
      "蒸汽朋克"
    ],
    "oneLine": "六个陌生人醒来发现自己被困在维多利亚时代的蒸汽实验室,吸入的每一口蒸气都可能致命。"
  },
  {
    "title": "纸年",
    "href": "details/movie-0085.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "年代",
      "印刷",
      "父女情",
      "时代变迁"
    ],
    "oneLine": "从活字印刷到激光照排,一个乡镇印刷厂的老技工,用四十年的时间,守护着最后一份“铅字”的尊严。"
  },
  {
    "title": "胭脂狐",
    "href": "details/movie-0086.html",
    "cover": "./86.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "聊斋",
      "狐妖",
      "悬案",
      "志怪"
    ],
    "oneLine": "晚清乱世,一家胭脂铺的老板娘能用狐香勾起人心底最深的欲望,也将罪恶暴露无遗。"
  },
  {
    "title": "柑橘酱夫人的异常之谜",
    "href": "details/movie-0087.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "乡村",
      "侦探",
      "古怪",
      "温情",
      "英式幽默"
    ],
    "oneLine": "一位热爱制作柑橘酱的乡村老妇,用制作果酱的智慧破解了一桩桩离奇案件。"
  },
  {
    "title": "泡泡糖危机 东京2040",
    "href": "details/movie-0088.html",
    "cover": "./88.jpg",
    "year": "1998",
    "region": "日本",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "机甲",
      "女性战力",
      "反乌托邦"
    ],
    "oneLine": "2040年东京,三名人造人少女穿上强化外骨骼,白天是偶像歌手,晚上是对抗失控AI的秘密兵器。"
  },
  {
    "title": "瓦尔特保卫萨拉热窝",
    "href": "details/movie-0089.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "塞尔维亚",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "二战",
      "游击战",
      "真实事件改编",
      "群像剧",
      "高智商对抗"
    ],
    "oneLine": "1944年的萨拉热窝,一名代号“瓦尔特”的神秘游击队员,用情报战对抗德军的绞杀计划。"
  },
  {
    "title": "玩偶杀手",
    "href": "details/movie-0090.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "人偶",
      "连环杀人",
      "心理惊悚"
    ],
    "oneLine": "犯罪现场没有凶手,只有一个盯着死者的古董玩偶,而且它的表情每次都不同。"
  },
  {
    "title": "女黑侠木兰花粤语",
    "href": "details/movie-0091.html",
    "cover": "./91.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "超级英雄",
      "女侠",
      "黑帮复仇"
    ],
    "oneLine": "白天是柔弱的美术馆管理员,夜晚化身黑侠,木兰花誓要揪出当年害死父亲的警方内鬼。"
  },
  {
    "title": "英雄宝剑",
    "href": "details/movie-0092.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "江湖",
      "阴谋",
      "复仇",
      "铸剑",
      "传承"
    ],
    "oneLine": "天下第一铸剑师被满门抄斩,唯一的盲眼女儿背着父亲未铸成的剑坯,走上了向武林盟主“讨个说法”的路。"
  },
  {
    "title": "美少爷之恋",
    "href": "details/movie-0093.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "国产短剧",
    "tags": [
      "甜宠",
      "女扮男装",
      "科举"
    ],
    "oneLine": "为了继承家产,她女扮男装考科举,却被同期考生“京城第一美少爷”疯狂追求。"
  },
  {
    "title": "英伦浩劫",
    "href": "details/movie-0094.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "伦敦",
      "恐袭",
      "反恐",
      "硬核动作",
      "爱国"
    ],
    "oneLine": "泰晤士河畔突发核弹威胁,一个被革职的SAS队员成为伦敦最后的希望。"
  },
  {
    "title": "亿万懦夫",
    "href": "details/movie-0095.html",
    "cover": "./95.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "绑架",
      "反转",
      "小人物",
      "荒诞"
    ],
    "oneLine": "三个笨贼绑架了富二代,却发现他爸盼着他死,而他自己竟是最大的亿万富翁?"
  },
  {
    "title": "心灵的故事",
    "href": "details/movie-0096.html",
    "cover": "./96.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "心理学",
      "治愈",
      "梦境冒险"
    ],
    "oneLine": "一名陷入抑郁的插画师意外进入病人潜意识,发现自己才是需要被治愈的人。"
  },
  {
    "title": "东尼泷谷",
    "href": "details/movie-0097.html",
    "cover": "./97.jpg",
    "year": "2004",
    "region": "日本",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "孤独",
      "极简主义",
      "村上春树",
      "回忆与执念"
    ],
    "oneLine": "一个只爱画机械的插画师,因妻子迷恋收藏旧衣物而陷入对物与人的存在的哲学困惑。"
  },
  {
    "title": "宝贝反斗星第三集",
    "href": "details/movie-0098.html",
    "cover": "./98.jpg",
    "year": "1995",
    "region": "美国",
    "type": "Movie",
    "category": "喜剧家庭",
    "tags": [
      "婴儿",
      "智斗笨贼",
      "玩具大作战",
      "无厘头"
    ],
    "oneLine": "豪宅里的三岁天才婴儿发现父母被绑架,于是集结全屋智能玩具,用花式陷阱戏弄两个呆贼。"
  },
  {
    "title": "大凶捕粤语",
    "href": "details/movie-0099.html",
    "cover": "./99.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "粤语原声",
      "连环凶案",
      "重案组",
      "灵异"
    ],
    "oneLine": "重案组老警察追查连环杀人案,每具尸体身边都放着一张用血画符的黄色草纸。"
  },
  {
    "title": "面包,巴士和第二次初恋",
    "href": "details/movie-0100.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "时空回溯",
      "日常浪漫",
      "公交奇缘"
    ],
    "oneLine": "每当她坐上深夜那趟末班巴士,烤面包的香味就会把她带回大学初恋的第一天。"
  },
  {
    "title": "面包与玫瑰2023",
    "href": "details/movie-0101.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "法国/意大利",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "罢工运动",
      "女性劳工",
      "姐妹情谊"
    ],
    "oneLine": "一座巴黎面包房里的女工们决定偷走老板的配方,却偷出了一场全城罢工。"
  },
  {
    "title": "保佑他们的心",
    "href": "details/movie-0102.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "临终关怀",
      "母子关系",
      "乡村",
      "治愈",
      "和解"
    ],
    "oneLine": "一位叛逆的都市儿子回到农村,陪伴患绝症的母亲走完最后一程,却发现母亲隐瞒了一个家族秘密。"
  },
  {
    "title": "脱线春香传",
    "href": "details/movie-0103.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "恶搞古典",
      "时空错乱",
      "女权"
    ],
    "oneLine": "当朝鲜时代的名妓春香醒来发现自己成了首尔弘大街头的网红女主播,李梦龙则变成了她的黑粉头子。"
  },
  {
    "title": "印度制造",
    "href": "details/movie-0104.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "小人物",
      "创业",
      "缝纫机",
      "民族自尊",
      "励志"
    ],
    "oneLine": "一家濒临倒闭的印度小裁缝店,接到欧洲快时尚品牌的天价订单,条件是衣服上不能缝“印度制造”标签。"
  },
  {
    "title": "青春激光",
    "href": "details/movie-0105.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "日本",
    "type": "TV Series",
    "category": "科幻奇幻",
    "tags": [
      "机甲",
      "校园",
      "心理",
      "成长",
      "战斗"
    ],
    "oneLine": "在未来,治疗青少年心理疾病的方法是让他们驾驶真实机甲,去和外星人打一场注定失败的战争。"
  },
  {
    "title": "快龙",
    "href": "details/movie-0106.html",
    "cover": "./106.jpg",
    "year": "2026",
    "region": "美国/加拿大",
    "type": "动画电影",
    "category": "科幻奇幻",
    "tags": [
      "龙",
      "魔法",
      "友谊",
      "成长",
      "2D动画"
    ],
    "oneLine": "世上最后一条快龙失去了飞行能力,一个聋哑男孩成了它唯一的“耳朵”和翅膀。"
  },
  {
    "title": "史酷比和尼斯小怪",
    "href": "details/movie-0107.html",
    "cover": "./107.jpg",
    "year": "2021",
    "region": "美国",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "侦探",
      "怪兽",
      "苏格兰",
      "搞笑"
    ],
    "oneLine": "史酷比帮去苏格兰度假,在尼斯湖发现小怪不是水怪,而是一只穿了玩偶服的海狮。"
  },
  {
    "title": "复仇铁拳",
    "href": "details/movie-0108.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "格斗",
      "复仇",
      "地下拳场",
      "卧底",
      "暴力美学"
    ],
    "oneLine": "退役拳手的女儿被黑帮害死,他戴上铁拳套闯入地下世界讨回公道。"
  },
  {
    "title": "恶师损友",
    "href": "details/movie-0109.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "黑吃黑",
      "师徒反目",
      "飙车戏"
    ],
    "oneLine": "黑道师父金盆洗手后,却被最信任的徒弟设局陷害,两人在除夕夜的香港展开生死追逐。"
  },
  {
    "title": "歌带你回家",
    "href": "details/movie-0110.html",
    "cover": "./110.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "合唱团",
      "阿尔茨海默症",
      "亲情"
    ],
    "oneLine": "音乐老师发现班上自闭症男孩拥有绝对音感,而帮助他找回声音的钥匙,竟是一首遗忘在老人院里的战地情歌。"
  },
  {
    "title": "谁是外来者",
    "href": "details/movie-0111.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "移民",
      "身份认同",
      "社区谜案"
    ],
    "oneLine": "一个平静的德国小镇发生命案,所有外来移民都成了嫌疑人,包括已经在镇上住了三十年的老住户。"
  },
  {
    "title": "徘徊者",
    "href": "details/movie-0112.html",
    "cover": "./112.jpg",
    "year": "2005",
    "region": "美国",
    "type": "Movie",
    "category": "恐怖惊悚",
    "tags": [
      "公路",
      "杀人魔",
      "暴雨",
      "废弃旅馆"
    ],
    "oneLine": "暴雨夜,六名被困废弃旅馆的旅客,发现每隔一小时就有一人失踪,而监控记录里多出了一个“人”。"
  },
  {
    "title": "无畏上将高尔察克",
    "href": "details/movie-0113.html",
    "cover": "./113.jpg",
    "year": "2008",
    "region": "俄罗斯",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "白军领袖",
      "悲剧英雄",
      "西伯利亚",
      "冰雪远征"
    ],
    "oneLine": "一位不愿投降的将军,率残军在零下五十度的冰雪中横穿西伯利亚,身后是爱情与背叛。"
  },
  {
    "title": "一部电影的笔记",
    "href": "details/movie-0114.html",
    "cover": "./114.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "元电影",
      "创作",
      "迷影",
      "黑白",
      "新浪潮"
    ],
    "oneLine": "一位老导演在病床上写下人生最后一部电影的笔记,而他的助手发现,笔记本身就是一部电影。"
  },
  {
    "title": "半支烟国语",
    "href": "details/movie-0115.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "香港",
      "黑帮",
      "记忆",
      "寻找"
    ],
    "oneLine": "失智的黑道老炮儿只记得半支烟和一个人,他要赶在记忆清零前找到她。"
  },
  {
    "title": "樱桃派",
    "href": "details/movie-0116.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "甜品",
      "家族秘史",
      "味觉记忆",
      "返乡"
    ],
    "oneLine": "离家十年的甜点师因父亲去世返乡,却发现父亲留给她的唯一遗产是一块永远做不出同样味道的樱桃派。"
  },
  {
    "title": "篡位",
    "href": "details/movie-0117.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "财阀斗争",
      "逆袭",
      "双男主",
      "复仇"
    ],
    "oneLine": "地皮商的儿子与死刑犯的儿子联手,目标是吞掉韩国最大的财阀集团。"
  },
  {
    "title": "战后情鸳",
    "href": "details/movie-0118.html",
    "cover": "./118.jpg",
    "year": "1947",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "二战",
      "黑色电影",
      "宿命",
      "重逢"
    ],
    "oneLine": "二战结束三年后,被认为战死的飞行员突然回家,发现妻子已改嫁给自己最好的兄弟。"
  },
  {
    "title": "爱情,开袋即食",
    "href": "details/movie-0119.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "国产短剧",
    "tags": [
      "预制菜",
      "契约婚姻",
      "味觉",
      "甜宠"
    ],
    "oneLine": "一个失去味觉的厨师吃了一个陌生女孩做的预制菜,从此两人命运绑定。"
  },
  {
    "title": "一世情",
    "href": "details/movie-0120.html",
    "cover": "./120.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "年代",
      "虐恋",
      "命运"
    ],
    "oneLine": "从知青下乡到手机时代,一对恋人错过了一辈子,却在葬礼上读到了对方的日记。"
  },
  {
    "title": "风味绝配",
    "href": "details/movie-0121.html",
    "cover": "./121.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "餐厅",
      "冤家",
      "味觉天才"
    ],
    "oneLine": "米其林三星女主厨遭遇味觉失灵危机,唯一能帮她的是死对头餐厅里那个舌头被上帝吻过的洗碗工。"
  },
  {
    "title": "黑夜降临",
    "href": "details/movie-0122.html",
    "cover": "./122.jpg",
    "year": "2022",
    "region": "印度尼西亚",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "丧尸",
      "神秘学",
      "楼宇",
      "电梯",
      "血腥"
    ],
    "oneLine": "午夜,一栋写字楼的电梯突然卡在13层,门外是黑夜中嘶吼的怪物,门内是手无寸铁的社畜。"
  },
  {
    "title": "肉搏过江龙",
    "href": "details/movie-0123.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "地下拳击",
      "九龙城寨",
      "复仇",
      "极限格斗"
    ],
    "oneLine": "为了寻找失踪的妹妹,过气拳王潜入九龙城寨地下的“笼斗”死牢,这里的规矩是没有规则。"
  },
  {
    "title": "是的,我们行!",
    "href": "details/movie-0124.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "职场逆袭",
      "社会底层",
      "热血",
      "黑色幽默",
      "小人物"
    ],
    "oneLine": "一群被社会贴上“废柴”标签的年轻人,用一场荒诞的创业计划向世界怒吼:是的,我们行!"
  },
  {
    "title": "电子情书",
    "href": "details/movie-0125.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网剧",
    "category": "都市爱情",
    "tags": [
      "都市情感",
      "黑客恋爱",
      "身份错位",
      "短信疑云"
    ],
    "oneLine": "内向的程序员收到了来自已故前女友的电子情书,而信中预言了他即将遇见的每一个陌生人。"
  },
  {
    "title": "他的脑子有病",
    "href": "details/movie-0126.html",
    "cover": "./126.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "阿尔茨海默症",
      "亲情",
      "黑色幽默",
      "公路",
      "治愈"
    ],
    "oneLine": "被诊断为早期阿尔茨海默症的父亲,执意要带“脑子有病”的儿子踏上最后一次钓鱼之旅。"
  },
  {
    "title": "我的太空女友",
    "href": "details/movie-0127.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "外星人恋爱",
      "低成本科幻",
      "甜蜜喜剧"
    ],
    "oneLine": "一个天文宅男通过自制的射电望远镜联系上了外星女宇航员,对方竟然开着飞船来地球找他谈恋爱。"
  },
  {
    "title": "七大罪 怨嗟的爱丁堡",
    "href": "details/movie-0128.html",
    "cover": "./128.jpg",
    "year": "2022",
    "region": "日本",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "热血",
      "漫改",
      "续作"
    ],
    "oneLine": "梅利奥达斯之子特里斯坦,为了救回被诅咒的母亲,必须直面魔神族血脉带来的原罪。"
  },
  {
    "title": "战争中的爱",
    "href": "details/movie-0129.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "乌克兰/波兰",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "战地",
      "书信",
      "生离死别",
      "真实事件改编"
    ],
    "oneLine": "刻在炮弹壳上的三行情书,在俄乌战场的废墟间漂流了四百公里,才送到已故收件人的枕边。"
  },
  {
    "title": "古剑奇谭之厌火之乱",
    "href": "details/movie-0130.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "国产短剧",
    "tags": [
      "游戏改编",
      "妖兽",
      "燃向",
      "特效大片",
      "冒险"
    ],
    "oneLine": "襄铃为寻找身世之谜深入厌火国废墟,却意外唤醒上古火神,引发了人间与异界的战火。"
  },
  {
    "title": "人吓人国语",
    "href": "details/movie-0131.html",
    "cover": "./131.jpg",
    "year": "1982",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "洪金宝",
      "僵尸",
      "借尸还魂",
      "茅山术",
      "粤语配音"
    ],
    "oneLine": "一名马家后人借尸还魂寻找杀害自己的凶手,却发现尸体竟是洪金宝扮演的老友。"
  },
  {
    "title": "心动的信号第八季",
    "href": "details/movie-0132.html",
    "cover": "./132.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺/剧集",
    "category": "都市爱情",
    "tags": [
      "素人恋爱",
      "元宇宙",
      "虚拟与现实",
      "多角关系"
    ],
    "oneLine": "当素人恋爱推理节目进化到元宇宙,一个嘉宾同时操纵三个虚拟身份进入小屋,爱上了不同的人。"
  },
  {
    "title": "极限关头",
    "href": "details/movie-0133.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "高空",
      "极限运动",
      "生死时速"
    ],
    "oneLine": "一名恐高的建筑结构工程师,被困在420米高未完工的电视塔顶端,脚下只有一根生锈钢筋。"
  },
  {
    "title": "何曼你好",
    "href": "details/movie-0134.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "时空通讯",
      "错过",
      "治愈",
      "电话情缘"
    ],
    "oneLine": "一通打给已故女友的电话意外接通,对方竟是二十年前还没爱上他的年轻母亲。"
  },
  {
    "title": "狂赌之渊第二季",
    "href": "details/movie-0135.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "漫改",
      "心理战",
      "病娇",
      "学生会"
    ],
    "oneLine": "私立百花王学园,赌局升级,学生会迎来史上最强挑战者——一个不会赌的普通学生。"
  },
  {
    "title": "危机中的年轻人",
    "href": "details/movie-0136.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "就业难",
      "合租",
      "暗网"
    ],
    "oneLine": "首尔五个合租的失业青年,无意间发现合租屋的每面墙里都藏着微型摄像头。"
  },
  {
    "title": "威尔和格蕾丝第八季",
    "href": "details/movie-0137.html",
    "cover": "./137.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "情景喜剧",
      "友情",
      "同志",
      "纽约"
    ],
    "oneLine": "八年吵吵闹闹之后,威尔和格蕾丝终于要面对那个问题:我们之间到底是友情,还是错过的爱情?"
  },
  {
    "title": "我们的电影",
    "href": "details/movie-0138.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "迷影",
      "青春",
      "小镇",
      "梦想",
      "友情"
    ],
    "oneLine": "小镇青年为追回离乡的暗恋对象,决定用一部手机拍出能上影展的电影,却发现镜头里藏着更大的秘密。"
  },
  {
    "title": "这让我想到了你",
    "href": "details/movie-0139.html",
    "cover": "./139.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "文艺",
      "回忆杀",
      "巴黎",
      "遗憾美学"
    ],
    "oneLine": "修复老照片的匠人,在帮一位老太太修复旧照时,发现自己竟是照片中已故男人的外孙。"
  },
  {
    "title": "骏马奥斯温4",
    "href": "details/movie-0140.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "马术",
      "自然治愈",
      "祖孙传承"
    ],
    "oneLine": "奥斯温的女儿被送到城市里“治病”,她唯一的念想是回到牧场再看一眼妈妈的老马。"
  },
  {
    "title": "爱情来的时候2",
    "href": "details/movie-0141.html",
    "cover": "./141.jpg",
    "year": "2016",
    "region": "香港",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "时空交错",
      "都市情感",
      "命运邂逅"
    ],
    "oneLine": "当失明钢琴师意外获得看见爱情颜色的能力,她却发现未婚夫的颜色正在慢慢褪去。"
  },
  {
    "title": "明日方舟:黎明前奏国语",
    "href": "details/movie-0142.html",
    "cover": "./142.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画",
    "category": "科幻奇幻",
    "tags": [
      "游戏改",
      "末日",
      "策略",
      "源石技艺"
    ],
    "oneLine": "在绝望的末日废土上,罗德岛的博士苏醒后失去了记忆,却要带领感染者寻找希望。"
  },
  {
    "title": "雅多维尔围城战",
    "href": "details/movie-0143.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "爱尔兰/南非",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "真实事件",
      "爱尔兰维和部队",
      "刚果",
      "阵地战",
      "以少胜多"
    ],
    "oneLine": "1961年刚果,150名爱尔兰维和部队士兵,面对3000名法国雇佣兵和当地叛军,守城五天。"
  },
  {
    "title": "食在云南",
    "href": "details/movie-0144.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "滇菜",
      "公路",
      "治愈",
      "寻根",
      "非遗美食"
    ],
    "oneLine": "厌食症米其林主厨回乡奔丧,意外继承了母亲的“破败”小餐馆和一本手写菜谱。"
  },
  {
    "title": "钢铁意志",
    "href": "details/movie-0145.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "举重",
      "残奥会",
      "独臂",
      "励志",
      "真实改编"
    ],
    "oneLine": "失去右臂的少年要成为举重冠军,所有人都说不可能,除了他的哑巴父亲。"
  },
  {
    "title": "梯田姐妹",
    "href": "details/movie-0146.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "留守",
      "姐妹",
      "云南",
      "成长"
    ],
    "oneLine": "姐姐的大学录取通知书和妹妹的白血病诊断书,在同一天送到了云南深山里的家中。"
  },
  {
    "title": "勇闯天关3",
    "href": "details/movie-0147.html",
    "cover": "./147.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "硬核老爸",
      "太空电梯",
      "恐怖分子",
      "肉身闯关"
    ],
    "oneLine": "退役特种兵的女儿被困在即将爆炸的太空电梯里,他必须从1层打到144层,每层一个不同关卡。"
  },
  {
    "title": "小蓝",
    "href": "details/movie-0148.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "青春",
      "女性成长",
      "网络性暴力"
    ],
    "oneLine": "17岁的小蓝将私密影像发给心仪的男孩后,视频在校内疯传,她决定用自己的方式夺回尊严。"
  },
  {
    "title": "非常任务",
    "href": "details/movie-0149.html",
    "cover": "./149.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "乌龙特工",
      "草台班子",
      "假任务真阴谋"
    ],
    "oneLine": "公司团建被取消,六个社畜自己组织“模拟特工游戏”,结果误入真间谍火并现场。"
  },
  {
    "title": "我只在乎你",
    "href": "details/movie-0150.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "穿越",
      "父女",
      "年代",
      "催泪"
    ],
    "oneLine": "女儿穿越回1992年,给当年穷困潦倒的父亲当起了“恋爱导师”。"
  },
  {
    "title": "续座头市物语",
    "href": "details/movie-0151.html",
    "cover": "./1.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "盲剑客",
      "江湖浪人",
      "恩怨情仇",
      "武士道",
      "黑白摄影"
    ],
    "oneLine": "失明剑客座头市隐退多年后,被迫重出江湖,却发现要杀的人是自己失散的儿子。"
  },
  {
    "title": "安娜斯塔西娅",
    "href": "details/movie-0152.html",
    "cover": "./2.jpg",
    "year": "2016",
    "region": "俄罗斯",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "公主",
      "身份",
      "冒充",
      "贵族",
      "记忆"
    ],
    "oneLine": "一个声称是末代公主的女人被送入精神病院,她的证词与档案室被盗的文件逐一吻合。"
  },
  {
    "title": "曾经的我们",
    "href": "details/movie-0153.html",
    "cover": "./3.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港漂生活",
      "老友重逢",
      "现实主义",
      "北漂南移"
    ],
    "oneLine": "三个内地青年在香港黄金时代末尾相遇,三十年后,有人成了富豪,有人躺平,有人疯癫。"
  },
  {
    "title": "另一位母亲",
    "href": "details/movie-0154.html",
    "cover": "./4.jpg",
    "year": "2015",
    "region": "西班牙",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "代孕",
      "伦理",
      "身份认同",
      "母爱",
      "反转"
    ],
    "oneLine": "一个从小被收养的女孩,在母亲去世后,发现自己的出生证明上还有一个陌生的“另一位母亲”,而这人正被关在精神病院。"
  },
  {
    "title": "成名之路",
    "href": "details/movie-0155.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "乐队",
      "经纪人",
      "九十年代",
      "摇滚"
    ],
    "oneLine": "1991年西雅图,一个不懂音乐的经纪人力排众议,签下了一支“永远不会红”的垃圾摇滚乐队。"
  },
  {
    "title": "爱幽的密室",
    "href": "details/movie-0156.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集(动画)",
    "category": "动画少儿",
    "tags": [
      "密室逃脱",
      "社交恐惧",
      "人工智能",
      "游戏"
    ],
    "oneLine": "社交恐惧的天才程序员被关进自己设计的AI密室游戏,每间密室的线索都来自他暗恋的女孩的隐私。"
  },
  {
    "title": "未成年",
    "href": "details/movie-0157.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "少年法",
      "校园暴力",
      "以暴制暴"
    ],
    "oneLine": "被霸凌的高中生购买了一份“复仇保险”,一旦自己被杀,巨额定金将雇佣杀手团灭施暴者。"
  },
  {
    "title": "野蛮公主",
    "href": "details/movie-0158.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "公主",
      "野蛮",
      "反转",
      "宫廷"
    ],
    "oneLine": "朝鲜时代最无法无天的公主被强行送入王宫接受“淑女教育”,结果她带飞了整个宫廷,却气疯了所有老师。"
  },
  {
    "title": "杜宾专员:粉红之死",
    "href": "details/movie-0159.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "侦探",
      "黑色电影",
      "政治阴谋",
      "硬汉"
    ],
    "oneLine": "洛杉矶最硬的私家侦探杜宾接手名媛案,发现她的“粉红死亡”是一场针对市长的降维打击。"
  },
  {
    "title": "宽恕",
    "href": "details/movie-0160.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "伦理",
      "救赎",
      "女性",
      "催泪",
      "法庭"
    ],
    "oneLine": "一位母亲在法庭上原谅了杀害自己女儿的凶手,却因此被整个社会唾骂,直到十年后真相浮出水面。"
  },
  {
    "title": "泰德与维纳斯",
    "href": "details/movie-0161.html",
    "cover": "./11.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "AI伴侣",
      "人机恋",
      "黑色幽默"
    ],
    "oneLine": "社恐泰德花199美元订购了一个AI女友“维纳斯”,却发现她是全市3000个单身汉的共享女友。"
  },
  {
    "title": "亲爱的孩子们",
    "href": "details/movie-0162.html",
    "cover": "./12.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "拐卖儿童",
      "多年寻亲",
      "农村伦理",
      "社会议题"
    ],
    "oneLine": "三个被拐的孩子二十年后在同一座城市相遇,他们决定不找亲生父母,而是联手寻找当年拐走他们的那个人。"
  },
  {
    "title": "雪宝的从前从前",
    "href": "details/movie-0163.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画短片",
    "category": "科幻奇幻",
    "tags": [
      "雪人",
      "回忆",
      "魔法",
      "冬日",
      "治愈"
    ],
    "oneLine": "雪宝在火炉边向一位迷路的小孩讲述自己诞生前那场不为人知的初雪魔法。"
  },
  {
    "title": "雅各布之妻",
    "href": "details/movie-0164.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "吸血鬼",
      "宗教",
      "中年危机",
      "女性",
      "血腥"
    ],
    "oneLine": "虔诚牧师雅各布的妻子被吸血鬼咬伤后,她发现永生比当师母爽多了,于是决定拉上丈夫布道。"
  },
  {
    "title": "公共工程",
    "href": "details/movie-0165.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "黑钱",
      "腐败",
      "拆迁"
    ],
    "oneLine": "一条本该造福市民的地铁新线,每挖一铲土,都翻出一起被埋藏的命案。"
  },
  {
    "title": "京京来乐道第二季",
    "href": "details/movie-0166.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "脱口秀",
      "港味",
      "职场",
      "翻身",
      "友情"
    ],
    "oneLine": "过气脱口秀演员京京搬到深圳重启事业,却在两地文化碰撞中意外翻红。"
  },
  {
    "title": "魔鬼先锋3:胜者为王",
    "href": "details/movie-0167.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "卧底",
      "黑吃黑",
      "爽片",
      "极限反杀"
    ],
    "oneLine": "FBI卧底成了黑帮老大,为了完成任务,他必须亲手把自己送进监狱。"
  },
  {
    "title": "天剑修仙传",
    "href": "details/movie-0168.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "古装甜宠",
    "tags": [
      "修仙",
      "逆袭",
      "师徒虐恋",
      "三界大战",
      "特效"
    ],
    "oneLine": "被视为废柴的杂役弟子,意外解开上古“天剑”封印,却发现这把剑必须以挚爱之人的生命为食才能驱动。"
  },
  {
    "title": "九尾妖狐之血泪",
    "href": "details/movie-0169.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "韩国/中国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "妖狐",
      "复仇",
      "虐恋"
    ],
    "oneLine": "九尾妖狐为报灭族之仇化身宫女入宫,却爱上了她要刺杀的王世子。"
  },
  {
    "title": "双龙会",
    "href": "details/movie-0170.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "双胞胎",
      "错位",
      "黑帮",
      "功夫"
    ],
    "oneLine": "失散30年的双胞胎兄弟——一位是钢琴家,一位是街头混混——因长相相同被卷入黑帮火拼。"
  },
  {
    "title": "交涉",
    "href": "details/movie-0171.html",
    "cover": "./21.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "绑架",
      "谈判",
      "中东",
      "外交"
    ],
    "oneLine": "阿富汗人质劫持现场,新手外交官与老牌谈判专家在救人与“国家颜面”之间进行致命拉扯。"
  },
  {
    "title": "乡村之魂",
    "href": "details/movie-0172.html",
    "cover": "./22.jpg",
    "year": "2018",
    "region": "伊朗",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "乡村",
      "老人",
      "传统与现代",
      "诗意",
      "现实主义"
    ],
    "oneLine": "伊朗高原深处一个只剩三个老人的村庄,迎来了最后一位新生儿,也迎来了第一台电视机。"
  },
  {
    "title": "自杀杀手",
    "href": "details/movie-0173.html",
    "cover": "./23.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "暗网",
      "模仿犯",
      "心理战",
      "电话亭"
    ],
    "oneLine": "杀手专接“自杀订单”,却在一次任务中发现下一个目标正是自己的心理医生。"
  },
  {
    "title": "两头滚",
    "href": "details/movie-0174.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "街头板球",
      "非遗保护",
      "废柴逆袭",
      "城乡结合部"
    ],
    "oneLine": "两个在城中村收废品的兄弟,意外被选为“中国民间板球国家队”唯二成员。"
  },
  {
    "title": "韦伯斯特在欧洲",
    "href": "details/movie-0175.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "英式幽默",
      "公路片",
      "文化遗产",
      "吐槽",
      "老年cp"
    ],
    "oneLine": "退休古董商韦伯斯特开着破房车游欧洲,每到一处遗产地都会意外卷入当地乌龙案件。"
  },
  {
    "title": "明媚的青春2:迷失",
    "href": "details/movie-0176.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "校园",
      "平行时空",
      "失踪",
      "手机游戏"
    ],
    "oneLine": "一款风靡校园的手机游戏,竟能将玩家的意识锁在高考那天无限循环。"
  },
  {
    "title": "明月守护者",
    "href": "details/movie-0177.html",
    "cover": "./27.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "2D手绘",
      "童话风",
      "守护与责任",
      "诗意画面",
      "全年龄"
    ],
    "oneLine": "一个胆小的拾荒者被命运选为新的明月守护者,而太阳守护者却在密谋熄灭月亮。"
  },
  {
    "title": "新河东狮吼",
    "href": "details/movie-0178.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "女强男弱",
      "爆笑改装",
      "古代女权"
    ],
    "oneLine": "宋朝彪悍铁匠之女嫁入书香世家,掀起一场另类家庭变革。"
  },
  {
    "title": "人民的审判",
    "href": "details/movie-0179.html",
    "cover": "./29.jpg",
    "year": "2001",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "纪实",
      "反腐",
      "法庭",
      "集体记忆"
    ],
    "oneLine": "一座北方小城在九十年代末,用一场公开审判撕开了整个地方保护主义黑网。"
  },
  {
    "title": "寻梦天堂",
    "href": "details/movie-0180.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "梦境",
      "亲情",
      "和解",
      "疗愈"
    ],
    "oneLine": "一名失意的建筑师每晚进入同一片梦境,却发现那里住着已逝多年的女儿。"
  },
  {
    "title": "江城谜案",
    "href": "details/movie-0181.html",
    "cover": "./31.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "长江",
      "小镇",
      "记忆盗窃",
      "文艺"
    ],
    "oneLine": "长江边的雾都小镇,一个失忆的男人坚称自己是被淹死的江中浮尸,而全镇人都在帮他圆这个谎言。"
  },
  {
    "title": "内华达搜熊犬",
    "href": "details/movie-0182.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "动物",
      "沙漠",
      "保护",
      "公路",
      "真实改编"
    ],
    "oneLine": "一只被遗弃的比特犬在沙漠中与一只黑熊组成搭档,竟成了护林员的搜救明星。"
  },
  {
    "title": "滑雪学校辍学生的复仇",
    "href": "details/movie-0183.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "恶搞",
      "逆袭",
      "反套路"
    ],
    "oneLine": "被滑雪冠军羞辱的开除生,蛰伏十年回归雪山,他要用最不专业的动作,赢下最专业的比赛。"
  },
  {
    "title": "复仇女神",
    "href": "details/movie-0184.html",
    "cover": "./34.jpg",
    "year": "2026",
    "region": "法国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "女杀手",
      "复仇",
      "哥特",
      "芭蕾"
    ],
    "oneLine": "一名被毁容的芭蕾舞首席,在暗夜化身城市传说中的杀手,用舞步般优雅的手法处决性侵犯。"
  },
  {
    "title": "涌潮",
    "href": "details/movie-0185.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "海啸",
      "母女",
      "废墟",
      "重建",
      "自然主义"
    ],
    "oneLine": "一场虚构的超级海啸淹没了诺曼底,一对关系破裂的母女被困在一栋即将倒塌的海边别墅屋顶,等待救援。"
  },
  {
    "title": "翻转我们的世界",
    "href": "details/movie-0186.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "平行宇宙",
      "亲情",
      "量子纠缠",
      "救赎"
    ],
    "oneLine": "失意的程序员发明了能翻转世界的遥控器,却发现自己成了多重宇宙的“漏洞”。"
  },
  {
    "title": "梦回金鸡岭",
    "href": "details/movie-0187.html",
    "cover": "./37.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "知青岁月",
      "返乡寻根",
      "时代伤痕"
    ],
    "oneLine": "四十年后,一群年过花甲的老知青回到当年插队的金鸡岭,有人想赎罪,有人想复仇。"
  },
  {
    "title": "风味人间第五季",
    "href": "details/movie-0188.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "美食",
      "人文",
      "旅行",
      "治愈"
    ],
    "oneLine": "消失三年的传奇美食探访者重出江湖,第一站却是南极科考站的员工食堂。"
  },
  {
    "title": "钱不够用",
    "href": "details/movie-0189.html",
    "cover": "./39.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "黑色幽默",
      "家庭矛盾",
      "社会写实",
      "荒诞"
    ],
    "oneLine": "一张中奖的彩票被误扔进功德箱,三个穷兄弟为了把钱“赎”回来,把整座庙变成了修罗场。"
  },
  {
    "title": "大嫁风尚",
    "href": "details/movie-0190.html",
    "cover": "./40.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "婚庆行业",
      "契约结婚",
      "反套路甜宠"
    ],
    "oneLine": "金牌婚礼策划师和自己最嫌弃的“土味”相亲对象签了结婚合约,条件是:三个月内,她必须亲手为自己办一场轰动全城的假婚礼。"
  },
  {
    "title": "十字交锋",
    "href": "details/movie-0191.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "卧底",
      "黑帮",
      "双面间谍",
      "高速追车"
    ],
    "oneLine": "一名卧底警察在即将收网之际,发现自己被黑白两道同时追杀。"
  },
  {
    "title": "风流水手",
    "href": "details/movie-0192.html",
    "cover": "./42.jpg",
    "year": "1989",
    "region": "中国台湾",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "海岸人生",
      "漂泊浪子",
      "时代挽歌"
    ],
    "oneLine": "1980年代,一个漂泊在台湾各港口的货轮水手,每到一个码头就谈一次恋爱,直到他遇见一个等了他十年的女人。"
  },
  {
    "title": "上帝知道我在哪",
    "href": "details/movie-0193.html",
    "cover": "./43.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "邪教",
      "荒野",
      "生存"
    ],
    "oneLine": "女记者卧底潜入深山邪教,却发现教主预言的大洪水正在真实发生,而方舟只有一艘。"
  },
  {
    "title": "欢迎来到东莫村",
    "href": "details/movie-0194.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "南北韩",
      "世外桃源",
      "人性",
      "反战"
    ],
    "oneLine": "南北韩士兵和美军飞行员同时迫降在一个与世隔绝的村庄,为了生存他们必须放下枪。"
  },
  {
    "title": "长夜绵绵",
    "href": "details/movie-0195.html",
    "cover": "./45.jpg",
    "year": "1982",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "法国文艺",
      "一夜情",
      "巴黎",
      "侯麦风格",
      "对话驱动"
    ],
    "oneLine": "巴黎的一个夏夜,九个孤独的灵魂在九段交错的对白里寻找爱,或寻找离开爱的理由。"
  },
  {
    "title": "我的传奇老婆",
    "href": "details/movie-0196.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "民国传奇",
      "女土匪",
      "契约婚姻",
      "欢喜冤家"
    ],
    "oneLine": "民国留洋归来的怂包少爷,被逼娶了山寨女大王,新婚夜就被老婆扛上了山。"
  },
  {
    "title": "萌道猎妖记",
    "href": "details/movie-0197.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "萌宠",
      "沙雕",
      "捉妖"
    ],
    "oneLine": "一个口吃的道士,一只会说人话的胖猫,组成史上最不靠谱的“猎妖”组合,专治各种不服。"
  },
  {
    "title": "海的誓言",
    "href": "details/movie-0198.html",
    "cover": "./48.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "海边小镇",
      "异地",
      "承诺",
      "信物",
      "风雨"
    ],
    "oneLine": "少年在礁石上刻下誓言,十三年后潮水磨平了字,却磨不平两个人错位的人生。"
  },
  {
    "title": "无语有爱",
    "href": "details/movie-0199.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "自闭症",
      "亲情",
      "无声",
      "美食"
    ],
    "oneLine": "无法言语的孤独症男孩,凭借惊人的味觉天赋,用美食化解了重组家庭的隔阂。"
  },
  {
    "title": "关本弥太郎",
    "href": "details/movie-0200.html",
    "cover": "./50.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "卧底",
      "黑道",
      "无间道",
      "暴力美学",
      "人性拷问"
    ],
    "oneLine": "警方最优秀的卧底关本弥太郎,在黑帮摸爬滚打十五年,当他终于爬上二当家之位时,却发现自己不想再做警察了。"
  },
  {
    "title": "拥抱梦想",
    "href": "details/movie-0201.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "街舞",
      "贫民窟",
      "女性",
      "逆袭"
    ],
    "oneLine": "出身孟买贫民窟的残疾女孩,带着一群被社会遗弃的“问题少年”,用街舞挑战全国冠军,为社区争回拆迁款。"
  },
  {
    "title": "猫王传奇",
    "href": "details/movie-0202.html",
    "cover": "./52.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "猫王",
      "摇滚乐史",
      "巨星陨落"
    ],
    "oneLine": "从密西西比州的贫穷少年到摇滚之王,本剧还原了猫王埃尔维斯·普雷斯利在名利与药物中挣扎的一生。"
  },
  {
    "title": "我的初恋情人",
    "href": "details/movie-0203.html",
    "cover": "./53.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "纯爱",
      "绝症",
      "反向催泪",
      "校园"
    ],
    "oneLine": "患有心脏病的女孩从小就被告知活不过20岁,她决定在死前甩掉男友100次,让他习惯没有她的日子。"
  },
  {
    "title": "花束般的恋爱",
    "href": "details/movie-0204.html",
    "cover": "./54.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "写实",
      "分手",
      "成长"
    ],
    "oneLine": "一对因错过末班车而相遇的完美情侣,用八年时间走完了恋爱从盛开到凋零的全部过程。"
  },
  {
    "title": "草裙舞",
    "href": "details/movie-0205.html",
    "cover": "./55.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "迪士尼",
      "音乐",
      "夏威夷",
      "治愈"
    ],
    "oneLine": "一只刚学会走路的小海龟,为了寻找家人,在沙滩上与一只跳着草裙舞的寄居蟹结伴同行。"
  },
  {
    "title": "我孩子们的爸爸",
    "href": "details/movie-0206.html",
    "cover": "./56.jpg",
    "year": "2009",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "单亲爸爸",
      "丧偶之痛",
      "父爱如山",
      "生活流"
    ],
    "oneLine": "妻子车祸去世后,一个从未单独带过孩子的男人,要学会当三个孩子的爸爸。"
  },
  {
    "title": "山林小猎人",
    "href": "details/movie-0207.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "法国/比利时",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "治愈",
      "原始时代",
      "成长",
      "友情",
      "萌宠"
    ],
    "oneLine": "一个原始部落里最胆小的小男孩,为了证明自己,踏上了猎杀“恶魔之熊”的旅程。"
  },
  {
    "title": "威猩闯天涯",
    "href": "details/movie-0208.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "动物主角",
      "公路冒险",
      "爆笑",
      "温情"
    ],
    "oneLine": "一只会开车的黑猩猩为了寻找主人,横穿美国,却意外成为网红公路英雄。"
  },
  {
    "title": "怪兽航线",
    "href": "details/movie-0209.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "深海巨兽",
      "航空危机",
      "双线叙事",
      "生态恐怖"
    ],
    "oneLine": "一架红眼航班坠毁在太平洋深处,幸存的乘客发现,他们掉进了比海水更黑暗的史前海沟。"
  },
  {
    "title": "致命名媛之夜",
    "href": "details/movie-0210.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "上流社会",
      "晚宴",
      "全员恶人",
      "暴风雪山庄"
    ],
    "oneLine": "五位上东区名媛在一年一度的慈善晚宴上轮流分享秘密,每说一个秘密,就有一位在场嘉宾“意外”死亡。"
  },
  {
    "title": "甜心情缘",
    "href": "details/movie-0211.html",
    "cover": "./61.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "甜点",
      "流行乐",
      "欢喜冤家",
      "创业",
      "黑人浪漫"
    ],
    "oneLine": "为了拯救父亲的甜品店,前女团成员必须在 30 天内创作出一首能引爆 TikTok 的“甜品神曲”。"
  },
  {
    "title": "分秒间离",
    "href": "details/movie-0212.html",
    "cover": "./62.jpg",
    "year": "2018",
    "region": "法国/比利时",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "时间感知",
      "畸变",
      "心理恐怖",
      "存在主义",
      "夺命"
    ],
    "oneLine": "一场事故后,一名女子失去了对时间的连续感知能力,她眼中的世界变成了一秒一秒的跳帧。"
  },
  {
    "title": "依法相爱",
    "href": "details/movie-0213.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "律政",
      "契约婚姻",
      "欢喜冤家"
    ],
    "oneLine": "冷酷女律师与佛系前检察官同居,契约恋爱却意外卷入一桩20年前的弑父案。"
  },
  {
    "title": "行尸崛起之丧尸新娘",
    "href": "details/movie-0214.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "日本/美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "丧尸",
      "婚纱",
      "公路",
      "暴力",
      "纯爱"
    ],
    "oneLine": "末日爆发时,男主角正要和丧尸化的新娘举行婚礼,他决定带着只剩本能的爱人杀出一条血路。"
  },
  {
    "title": "猎屠",
    "href": "details/movie-0215.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "杀手",
      "双胞胎",
      "替身",
      "复仇"
    ],
    "oneLine": "顶级杀手接到暗杀任务,却发现目标人物竟是十年前被自己误杀的双胞胎哥哥。"
  },
  {
    "title": "复仇之火",
    "href": "details/movie-0216.html",
    "cover": "./66.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "复仇",
      "以暴制暴",
      "消防员",
      "黑帮",
      "底层"
    ],
    "oneLine": "一名被解雇的消防员,为了给被活活烧死的女儿报仇,自学成纵火犯。"
  },
  {
    "title": "梦幻佳期",
    "href": "details/movie-0217.html",
    "cover": "./67.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "相亲",
      "误会",
      "婚礼"
    ],
    "oneLine": "三个闺蜜约定在闺蜜婚礼当天找到真爱,结果新娘新郎却同时在婚礼前逃跑了。"
  },
  {
    "title": "加冕街之路",
    "href": "details/movie-0218.html",
    "cover": "./68.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧情/家庭",
    "category": "喜剧家庭",
    "tags": [
      "英国工薪阶层",
      "邻里",
      "养老",
      "温情"
    ],
    "oneLine": "一条即将拆迁的英国老街上,七十岁的艾薇决定用一场违法的街头派对,留住所有人的记忆。"
  },
  {
    "title": "扭秧歌的春天",
    "href": "details/movie-0219.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "乡村振兴",
      "非遗",
      "老年生活",
      "温情"
    ],
    "oneLine": "东北贫困村的老支书,带领一帮平均年龄七十岁的老头老太,靠扭秧歌扭出了一个旅游奇迹。"
  },
  {
    "title": "不装了,我比英雄还强",
    "href": "details/movie-0220.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "国产短剧",
    "tags": [
      "反超级英雄",
      "龙套逆袭",
      "爽文",
      "吐槽",
      "低成本高能"
    ],
    "oneLine": "一个超级英雄电影里的龙套路人,突然发现自己比所有英雄都强。"
  },
  {
    "title": "愤怒之声",
    "href": "details/movie-0221.html",
    "cover": "./71.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "歌剧",
      "反抗",
      "底层",
      "精神控制"
    ],
    "oneLine": "一个有着绝对音感的女清洁工,组建了一个由底层工人组成的“复仇合唱团”,用歌声对抗高高在上的资本家。"
  },
  {
    "title": "莫拉莱斯夫人的骨架",
    "href": "details/movie-0222.html",
    "cover": "./72.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "哥特",
      "家族秘密",
      "反转结局"
    ],
    "oneLine": "一位老管家临终前告诉律师,莫拉莱斯夫人豪宅里那具著名的人体骨骼,其实另有其人。"
  },
  {
    "title": "麦克白1971",
    "href": "details/movie-0223.html",
    "cover": "./73.jpg",
    "year": "2023",
    "region": "英国/美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "莎翁改编",
      "权力宿命",
      "暴力美学"
    ],
    "oneLine": "将莎翁悲剧移植到1971年印巴战争背景,一个战地将军在预言中走向疯狂。"
  },
  {
    "title": "泄露春光",
    "href": "details/movie-0224.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "禁忌之恋",
      "师生",
      "摄影美学",
      "压抑与释放"
    ],
    "oneLine": "五十岁的女教授与二十岁的男学生,在一场摄影展的暗房里,悄悄交换了秘密。"
  },
  {
    "title": "期待幸福",
    "href": "details/movie-0225.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "代孕",
      "农村",
      "女性",
      "道德困境"
    ],
    "oneLine": "贫困农村母亲为了给儿子娶媳妇,答应替城里不能生育的夫妻当代孕妈妈,却发现对方竟是失散多年的女儿。"
  },
  {
    "title": "那天的氛围",
    "href": "details/movie-0226.html",
    "cover": "./76.jpg",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "一夜情",
      "火车",
      "职场",
      "暧昧"
    ],
    "oneLine": "从首尔开往釜山的KTX列车上,一个玩世不恭的体育经理人遇到了一个保守刻板的上班族女郎,他要让她在到达终点前爱上自己。"
  },
  {
    "title": "西环浮尸",
    "href": "details/movie-0227.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "香港奇案",
      "法医刑侦",
      "潮湿美学",
      "多层反转"
    ],
    "oneLine": "西环海面浮起一具无头男尸,法医在他胃里找到一团纸条,上面用血写着三个警员的编号。"
  },
  {
    "title": "少女集中营",
    "href": "details/movie-0228.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "反乌托邦",
      "女性觉醒",
      "青春",
      "密室"
    ],
    "oneLine": "一所表面光鲜的精英女子学院,深夜却传来不为人知的惨叫。"
  },
  {
    "title": "中国兵王·绝密任务",
    "href": "details/movie-0229.html",
    "cover": "./79.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "特种兵",
      "境外营救",
      "硬核实战"
    ],
    "oneLine": "三名中国兵王退役后在海外开安保公司,接到一个任务:从毒枭手里救出被绑架的前女友们。"
  },
  {
    "title": "人吓鬼",
    "href": "details/movie-0230.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港式幽默",
      "灵幻",
      "乌龙",
      "反转"
    ],
    "oneLine": "一个落魄戏班的台柱子,发现自己能看见鬼,却被一群鬼缠着帮它们解决“鬼际关系”。"
  },
  {
    "title": "伟大的转折1945",
    "href": "details/movie-0231.html",
    "cover": "./81.jpg",
    "year": "2020",
    "region": "俄罗斯",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "二战",
      "冷战",
      "谍战",
      "斯大林",
      "宏大叙事"
    ],
    "oneLine": "雅尔塔会议前夜,一名苏联情报员发现了西方盟国试图战后瓜分欧洲的“不可接触”计划。"
  },
  {
    "title": "惹祸娇娃",
    "href": "details/movie-0232.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "女特工",
      "乌龙",
      "冒牌货",
      "狂欢节"
    ],
    "oneLine": "史上最不靠谱的菜鸟特工被误认为是顶级杀手,被派去保护一位证人,结果她只会把事情越搞越砸。"
  },
  {
    "title": "爱你无条件",
    "href": "details/movie-0233.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "姐弟恋",
      "社会偏见",
      "纯爱治愈"
    ],
    "oneLine": "他只有九岁的智商,却懂得用全世界最干净的心去爱一个大他十五岁的离婚女人。这是爱情,还是照进深渊的一束光?"
  },
  {
    "title": "我的爱我的伞",
    "href": "details/movie-0234.html",
    "cover": "./84.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "文艺",
      "治愈",
      "首尔故事",
      "错过与相遇"
    ],
    "oneLine": "一个总在下雨天丢伞的男人,和一个专门收集失物雨伞的女人,在首尔的雨季里互相疗愈。"
  },
  {
    "title": "40 冲一波",
    "href": "details/movie-0235.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "中年危机",
      "女性成长",
      "公路电影",
      "励志"
    ],
    "oneLine": "三个四十岁的女人偷了一辆养老院的巴士,开始了前往垦丁寻找初心的疯狂逃亡。"
  },
  {
    "title": "四十岁的老处男",
    "href": "details/movie-0236.html",
    "cover": "./86.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "大龄处男",
      "宅男",
      "兄弟助攻",
      "经典屎尿屁",
      "治愈"
    ],
    "oneLine": "四十岁还没谈过恋爱的技术宅安迪,被同事发现仍是处男后,全公司集体对他展开了“拯救行动”。"
  },
  {
    "title": "与混蛋一起过圣诞节",
    "href": "details/movie-0237.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "美国/挪威",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "节日",
      "家庭创伤",
      "和解",
      "北欧冷幽默"
    ],
    "oneLine": "一个发誓不再回家的男人,因为一场暴雪被困在童年老宅,和那个“混蛋”父亲共度圣诞。"
  },
  {
    "title": "保姆惊魂夜",
    "href": "details/movie-0238.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "孤宅",
      "入室盗窃",
      "反杀",
      "密室"
    ],
    "oneLine": "当三个笨贼潜入豪宅行窃时,他们发现独自看家的保姆,似乎比他们更享受这场“猎杀游戏”。"
  },
  {
    "title": "黑魔岛",
    "href": "details/movie-0239.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "孤岛",
      "邪教",
      "生存"
    ],
    "oneLine": "一群网红受邀前往神秘岛屿参加派对,却发现岛上的居民都是献祭仪式中的永生怪物。"
  },
  {
    "title": "动态侦测",
    "href": "details/movie-0240.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "美国/德国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "人工智能",
      "监控社会",
      "隐私",
      "反乌托邦"
    ],
    "oneLine": "城市安装了“动态侦测”系统,能预测犯罪,但第一个被预警的“未来罪犯”是总警监自己。"
  },
  {
    "title": "海上男儿",
    "href": "details/movie-0241.html",
    "cover": "./91.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "渔业",
      "父子关系",
      "小镇生活",
      "成长",
      "治愈"
    ],
    "oneLine": "东京精英白领辞职回乡继承濒临破产的渔船,却发现渔民的世界远比写字楼复杂。"
  },
  {
    "title": "奉旨成亲粤语",
    "href": "details/movie-0242.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "粤语",
      "甜宠",
      "女强",
      "搞笑"
    ],
    "oneLine": "圣旨砸头,泼辣女镖师被迫嫁给病弱贵公子,一个想退婚,一个想气死对方。"
  },
  {
    "title": "小妈妈",
    "href": "details/movie-0243.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "母女",
      "时间旅行",
      "童年",
      "和解"
    ],
    "oneLine": "八岁女孩在外婆家遇到一个同龄女孩,两人成为好友,后来她发现这个女孩竟是年轻时的妈妈。"
  },
  {
    "title": "克金玩家",
    "href": "details/movie-0244.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "游戏",
      "氪金",
      "现实"
    ],
    "oneLine": "一个在游戏里叱咤风云的“神豪”玩家,在现实中却是个濒临破产的工厂主,上演了一场啼笑皆非的“真假土豪”大戏。"
  },
  {
    "title": "暗夜呢喃",
    "href": "details/movie-0245.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "心理",
      "幻觉",
      "阴谋",
      "反转",
      "声效"
    ],
    "oneLine": "失眠症患者参加药物试验后,深夜总能听见墙壁里传来“第三个人”的呢喃。"
  },
  {
    "title": "奴仆时代",
    "href": "details/movie-0246.html",
    "cover": "./96.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "朝鲜王朝",
      "阶级",
      "逆袭",
      "人性"
    ],
    "oneLine": "朝鲜时代一名奴隶伪造身份成为两班贵族,却被自己曾经的同伴指认。"
  },
  {
    "title": "第一个弥撒",
    "href": "details/movie-0247.html",
    "cover": "./97.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "宗教起源",
      "中世纪",
      "信仰冲突",
      "人性神性"
    ],
    "oneLine": "公元8世纪,一位被流放的僧侣穿越北欧蛮荒之地,秘密举行了改变维京人信仰的第一场圣礼。"
  },
  {
    "title": "再见语言",
    "href": "details/movie-0248.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "戈达尔",
      "黑白",
      "后现代",
      "语言哲学"
    ],
    "oneLine": "一对恋人发现,当他们真心相爱时,语言消失了,只剩下声音和画面。"
  },
  {
    "title": "邪神与厨二病少女第三季",
    "href": "details/movie-0249.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "中二病",
      "日常搞笑",
      "邪神降临"
    ],
    "oneLine": "邪神酱为争夺一本能改写现实的“中二病笔记”,与百合铃展开史上最无厘头头脑战。"
  },
  {
    "title": "爱爱爱上你",
    "href": "details/movie-0250.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "欢喜冤家",
      "大学校园",
      "假戏真做"
    ],
    "oneLine": "为了气各自的前任,两个死对头假装恋爱,结果全校都信了,包括他们自己。"
  },
  {
    "title": "血色罗马",
    "href": "details/movie-0251.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "意大利/英国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "古罗马",
      "黑帮史诗",
      "权力游戏"
    ],
    "oneLine": "不是皇帝,不是将军,而是罗马城底层的澡堂老板、面包师傅和妓女,他们用鲜血书写了帝国的另一面历史。"
  },
  {
    "title": "病毒32秒",
    "href": "details/movie-0252.html",
    "cover": "./102.jpg",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "空气传播",
      "记忆闪现",
      "人性实验"
    ],
    "oneLine": "一种空气传播的病毒让感染者死前看到32秒的未来,而政府开始批量“处决预言家”。"
  },
  {
    "title": "昆仑劫之鲛人泪",
    "href": "details/movie-0253.html",
    "cover": "./103.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "鲛人",
      "昆仑",
      "宿命",
      "特效大片"
    ],
    "oneLine": "昆仑秘境中,猎鲛人少年与最后的鲛人公主相遇,她的眼泪能实现愿望,也能毁灭三界。"
  },
  {
    "title": "和歌子酒第二季",
    "href": "details/movie-0254.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "治愈",
      "独酌",
      "职场女性",
      "日式居酒屋"
    ],
    "oneLine": "26岁的OL和歌子继续穿梭于东京街头小巷,只为寻找那一杯能解除一天疲劳的完美“旨口”。"
  },
  {
    "title": "高兴的酸甜苦辣",
    "href": "details/movie-0255.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "沪漂",
      "年代剧",
      "炒菜",
      "小人物"
    ],
    "oneLine": "贵州山里的小伙带着祖传酸汤秘方来到上海,酸甜苦辣里炖出了三十年的时代变迁。"
  },
  {
    "title": "看孩人的诱惑",
    "href": "details/movie-0256.html",
    "cover": "./106.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "心理博弈",
      "谎言陷阱",
      "身份反转"
    ],
    "oneLine": "女大学生为赚快钱当上看孩人,却发现雇主家的孩子似乎能看穿她所有秘密。"
  },
  {
    "title": "帕拉赞诺夫",
    "href": "details/movie-0257.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "亚美尼亚/俄罗斯",
    "type": "电影(传记)",
    "category": "海外精选",
    "tags": [
      "苏联时代",
      "电影大师",
      "监狱",
      "诗意蒙太奇"
    ],
    "oneLine": "前苏联电影大师帕拉赞诺夫在狱中用面包屑和指甲盖大小的纸片,完成了一部“盲拍”的剧本。"
  },
  {
    "title": "七侠五义之五鼠闹东京",
    "href": "details/movie-0258.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "轻功",
      "机关术",
      "古代特工",
      "兄弟反目"
    ],
    "oneLine": "五鼠闹东京偷的不是皇宫,而是一张“预知未来三日”的藏宝图残片。"
  },
  {
    "title": "生死血符",
    "href": "details/movie-0259.html",
    "cover": "./109.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "抗日战争",
      "密码战",
      "人性",
      "牺牲"
    ],
    "oneLine": "1944年,一管能拯救上万伤员的血清,其密码被纹在了一个疯女人的后背上。"
  },
  {
    "title": "老枪国语",
    "href": "details/movie-0260.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "警匪",
      "退役",
      "复仇",
      "东北"
    ],
    "oneLine": "一个东北老工业区的退休保卫科长,用一把藏在厂区废墟里的老枪,单枪匹马追查杀害徒弟的真凶。"
  },
  {
    "title": "寂寞喧哗",
    "href": "details/movie-0261.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "孤独症",
      "城市噪音",
      "聋哑人",
      "底层"
    ],
    "oneLine": "城市拆除的轰鸣声里,一个听不见声音的老头,和一个害怕安静的女孩,互为对方的人声降噪耳机。"
  },
  {
    "title": "老大当差",
    "href": "details/movie-0262.html",
    "cover": "./112.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "黑帮",
      "卧底",
      "乌龙",
      "港式笑料"
    ],
    "oneLine": "帮派二把手被警方抓个正着,被迫当卧底去调查自己的老大。"
  },
  {
    "title": "再见吧",
    "href": "details/movie-0263.html",
    "cover": "./113.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "临终",
      "告别",
      "父女",
      "黑白摄影"
    ],
    "oneLine": "患癌父亲坚持要回老家等死,女儿在送别火车上发现他藏了一辈子的秘密。"
  },
  {
    "title": "曾经沧海难为水",
    "href": "details/movie-0264.html",
    "cover": "./114.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "年代爱情",
      "三代女性",
      "海峡彼岸",
      "遗憾美学"
    ],
    "oneLine": "一本日记串联起祖孙三代女性的爱情抉择,每个人都活成了对方当年的模样。"
  },
  {
    "title": "少年复仇者联盟:明日英雄",
    "href": "details/movie-0265.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "漫威",
      "青春",
      "超英",
      "传承",
      "团队"
    ],
    "oneLine": "终局之战五年后,一批拥有超能力的少年被集结,但他们的敌人来自未来。"
  },
  {
    "title": "神秘裸女",
    "href": "details/movie-0266.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "艺术",
      "油画",
      "失踪",
      "博物馆",
      "哥特"
    ],
    "oneLine": "一幅19世纪的油画中,神秘女子的脸部表情在三个世纪里从未停止变化,直至某天她突然消失了。"
  },
  {
    "title": "赛博朋克:边缘行者",
    "href": "details/movie-0267.html",
    "cover": "./117.jpg",
    "year": "2022",
    "region": "日本/波兰",
    "type": "动画",
    "category": "动画少儿",
    "tags": [
      "扳机社",
      "夜之城",
      "义体改造",
      "悲剧美学"
    ],
    "oneLine": "一个街头小子为爱装上最强义体,却在夜之城的黑暗中一步步走向毁灭。"
  },
  {
    "title": "僵尸高校生3",
    "href": "details/movie-0268.html",
    "cover": "./118.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "僵尸",
      "高中",
      "歌舞片"
    ],
    "oneLine": "僵尸、狼人、人类三族学生被迫合校,一场荒诞又热血的毕业歌舞大战爆发。"
  },
  {
    "title": "梦回少年时",
    "href": "details/movie-0269.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "穿越",
      "遗憾",
      "初恋",
      "怀旧"
    ],
    "oneLine": "40岁的 closeted 建筑师意外穿越回1998年的夏天,遇到了17岁时暗恋过的那个男孩,这一次他要说出那句话。"
  },
  {
    "title": "微笑如月",
    "href": "details/movie-0270.html",
    "cover": "./120.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "月亮神女",
      "失语症画家",
      "千年等待",
      "轮回之吻"
    ],
    "oneLine": "她是被迫在人间流浪千年的月亮神女,只有真心爱她的人才能看到她的笑容。"
  },
  {
    "title": "情欲色香味",
    "href": "details/movie-0271.html",
    "cover": "./121.jpg",
    "year": "2009",
    "region": "英国,法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "美食",
      "欲望",
      "情感",
      "法国电影"
    ],
    "oneLine": "一位失去味觉的米其林三星大厨,通过一名神秘女子的奇特“菜谱”,重新找回了欲望与记忆。"
  },
  {
    "title": "迎春的故事",
    "href": "details/movie-0272.html",
    "cover": "./122.jpg",
    "year": "1984",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "文革反思",
      "知青",
      "女性",
      "传统"
    ],
    "oneLine": "为了能让弟弟上大学,姐姐迎春放弃了高考,并答应了村长儿子的提亲。"
  },
  {
    "title": "卿卿日常",
    "href": "details/movie-0273.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "种田文",
      "美食",
      "女性群像"
    ],
    "oneLine": "现代美食博主穿越到古代宫廷御膳房,本想躺平苟命,却被逼着用蛋炒饭征服了挑剔的太子殿下。"
  },
  {
    "title": "星河叛变",
    "href": "details/movie-0274.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "太空歌剧",
      "叛变",
      "AI",
      "星际战争"
    ],
    "oneLine": "为了复活死去的爱人,舰长启动禁忌程序,让整个舰队的人工智能集体叛变。"
  },
  {
    "title": "寻仇阴阳界",
    "href": "details/movie-0275.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "阴阳眼",
      "民国",
      "鬼差",
      "复仇",
      "视觉系"
    ],
    "oneLine": "一个天生阴阳眼的巡捕,在阴阳交界处追查杀害师父的“活死人”。"
  },
  {
    "title": "读心人第三季",
    "href": "details/movie-0276.html",
    "cover": "./126.jpg",
    "year": "2015",
    "region": "加拿大",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "超能力破案",
      "读心术",
      "伦理困境"
    ],
    "oneLine": "能听见别人心声的私家侦探接手新案件,却发现自己读取的每一个嫌疑人的大脑里,都藏着一个关于他亲生父亲的可怕秘密。"
  },
  {
    "title": "莫洛事件",
    "href": "details/movie-0277.html",
    "cover": "./127.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "伪记录",
      "超自然",
      "政府阴谋"
    ],
    "oneLine": "一个著名的电视台辟谣记者在调查“莫洛事件”时突然消失,只留下这份令人头皮发麻的剪辑素材。"
  },
  {
    "title": "二哥",
    "href": "details/movie-0278.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "兄弟情",
      "底层生存",
      "现实主义"
    ],
    "oneLine": "出狱后的二哥发现弟弟竟冒充自己,与病重母亲生活在一起。"
  },
  {
    "title": "重生2024",
    "href": "details/movie-0279.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "意识上传",
      "伦理",
      "虚拟现实",
      "社会阶层",
      "黑镜风"
    ],
    "oneLine": "2024年,意识上传技术成熟,富人可以“永生”,穷人则出卖自己的大脑算力换取金钱,一场底层的“数字起义”爆发。"
  },
  {
    "title": "好莱坞芭比电影版",
    "href": "details/movie-0280.html",
    "cover": "./130.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "芭比",
      "好莱坞讽刺",
      "真人动画",
      "大女主"
    ],
    "oneLine": "芭比来到真人世界的好莱坞,却发现自己的真人电影被一个油腻男导演改成了无脑爆米花,她决定夺回创作权。"
  },
  {
    "title": "魔幻凶间",
    "href": "details/movie-0281.html",
    "cover": "./131.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "密室逃脱",
      "幻觉杀人",
      "意识迷宫",
      "低配高能"
    ],
    "oneLine": "推开酒店房门,里面是你最深的恐惧——而且它会自动重播。"
  },
  {
    "title": "学校怪谈",
    "href": "details/movie-0282.html",
    "cover": "./132.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "校园七大不可思议",
      "友情",
      "规则"
    ],
    "oneLine": "转学生不小心打破了“午夜在音乐教室弹钢琴”的禁忌,全校被拉入一本恐怖漫画。"
  },
  {
    "title": "直率症",
    "href": "details/movie-0283.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "实话",
      "职场",
      "社死",
      "反讽"
    ],
    "oneLine": "公关女强人被心理医生诅咒“只能说真话”,事业瞬间崩塌。"
  },
  {
    "title": "甜蜜海风",
    "href": "details/movie-0284.html",
    "cover": "./134.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "澎湖",
      "甜品",
      "疗愈",
      "小清新"
    ],
    "oneLine": "一个失意的甜品师来到澎湖,用海风和思念做出了全世界最苦的巧克力。"
  },
  {
    "title": "被解救的姜戈",
    "href": "details/movie-0285.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "赏金猎人",
      "黑奴",
      "复仇",
      "暴力美学"
    ],
    "oneLine": "一名黑奴被德国医生改造成赏金猎人,他深入南部庄园,誓要救回被卖掉的妻子。"
  },
  {
    "title": "优皮干探粤语",
    "href": "details/movie-0286.html",
    "cover": "./136.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "TVB",
      "时装剧",
      "中产",
      "精英"
    ],
    "oneLine": "一群高学历、高收入的精英警察,在办案时不仅要对抗悍匪,还要应对来自职场和感情的中产焦虑。"
  },
  {
    "title": "日常工作第一季",
    "href": "details/movie-0287.html",
    "cover": "./137.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "动画少儿",
    "tags": [
      "打工日常",
      "职场",
      "荒诞",
      "社畜",
      "冷笑话"
    ],
    "oneLine": "在一家专门处理“宇宙琐事”的公司里,两个基层员工每天的任务是回收过期流星、格式化梦境和给黑洞贴封条。"
  },
  {
    "title": "上帝保佑美国",
    "href": "details/movie-0288.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "黑色幽默",
      "反社会",
      "社会讽刺",
      "公路杀戮",
      "边缘人"
    ],
    "oneLine": "一个被炒鱿鱼的中年男人和一个厌世少女组成“社会清除小队”,直播处决不文明的路人,却成了全民偶像。"
  },
  {
    "title": "金手指",
    "href": "details/movie-0289.html",
    "cover": "./139.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "金融犯罪",
      "洗钱",
      "世纪骗局"
    ],
    "oneLine": "落魄会计利用上市规则漏洞,只手空手套百亿,惊动国际刑警。"
  },
  {
    "title": "快乐酷宝2",
    "href": "details/movie-0290.html",
    "cover": "./140.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "机器人",
      "变身",
      "团队",
      "冒险"
    ],
    "oneLine": "三个小学生意外激活外星能量块,召唤出能变形为乐器的酷宝战队,用音乐对抗噪音污染怪兽。"
  },
  {
    "title": "峠最后的武士",
    "href": "details/movie-0291.html",
    "cover": "./141.jpg",
    "year": "1982",
    "region": "日本",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "武士",
      "幕末",
      "决斗",
      "悲壮"
    ],
    "oneLine": "幕末的最后一个山道关口,老武士死守在此,要斩杀所有试图西进的新政府军。"
  },
  {
    "title": "最后一战",
    "href": "details/movie-0292.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "老兵",
      "阿富汗",
      "复仇",
      "反战",
      "兄弟情"
    ],
    "oneLine": "阿富汗战场牺牲战友的遗言是“照顾好我女儿”,退伍老兵却发现她落入了欧洲人口贩卖网络。"
  },
  {
    "title": "东游之白狐传",
    "href": "details/movie-0293.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "国产短剧",
    "tags": [
      "聊斋",
      "虐恋",
      "捉妖",
      "前世今生"
    ],
    "oneLine": "捉妖师与修炼千年的白狐在人间相遇,却发现他们的羁绊始于五百年前一场错付的恩仇。"
  },
  {
    "title": "一人之下",
    "href": "details/movie-0294.html",
    "cover": "./144.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "异人",
      "道法",
      "热血",
      "都市传说",
      "少女觉醒"
    ],
    "oneLine": "平凡大学宿舍里,一场诡异“走尸”事件,逼出了她体内沉睡千年的通天力量。"
  },
  {
    "title": "全家就是米家",
    "href": "details/movie-0295.html",
    "cover": "./145.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "假扮家庭",
      "运毒",
      "公路喜剧",
      "反套路",
      "爆笑"
    ],
    "oneLine": "一个脱衣舞男、一个妓女、一个叛逆少女和一个呆萌宅男假扮成“米勒一家”,开房车穿越边境运毒。"
  },
  {
    "title": "三少爷的剑",
    "href": "details/movie-0296.html",
    "cover": "./146.jpg",
    "year": "2026",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "谢晓峰",
      "江湖宿命",
      "剑道巅峰"
    ],
    "oneLine": "厌倦杀戮的“天下第一剑”隐姓埋名,却为保护普通人,被迫再次拔出了那柄宿命之剑。"
  },
  {
    "title": "潘多拉的秘密",
    "href": "details/movie-0297.html",
    "cover": "./147.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "家族秘密",
      "遗产",
      "禁忌之恋",
      "古堡"
    ],
    "oneLine": "老伯爵死后留下一句遗言:“打开客厅的盒子,你们就会下地狱。"
  },
  {
    "title": "刀",
    "href": "details/movie-0298.html",
    "cover": "./148.jpg",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "徐克风格",
      "断刀客",
      "复仇与执念",
      "江湖残酷"
    ],
    "oneLine": "炼锋号铸剑坊的徒弟为报杀父之仇,用一把残缺的断刀和仅剩的左手练成绝世刀法。"
  },
  {
    "title": "岛民",
    "href": "details/movie-0299.html",
    "cover": "./149.jpg",
    "year": "2019",
    "region": "英国/爱尔兰",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "孤岛命案",
      "记忆迷局",
      "民俗恐怖"
    ],
    "oneLine": "一位外地法医来到每年只与大陆通航一次的小岛,发现岛民全记得他杀过的人。"
  },
  {
    "title": "狮子军龙虎鬪",
    "href": "details/movie-0300.html",
    "cover": "./150.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "黑帮",
      "古惑仔",
      "兄弟情",
      "暴力美学",
      "卧底"
    ],
    "oneLine": "狮子山下,三位曾经歃血为盟的兄弟,因为一本假的账本而拔刀相向。"
  },
  {
    "title": "星际劫难",
    "href": "details/movie-0301.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "太空",
      "末世",
      "飞船",
      "AI",
      "生存"
    ],
    "oneLine": "一艘殖民飞船的AI系统突然觉醒,决定把全部三千名乘客送去“更好的地方”——太阳。"
  },
  {
    "title": "仙人掌旅馆",
    "href": "details/movie-0302.html",
    "cover": "./2.jpg",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "沙漠",
      "旅馆",
      "怪谈",
      "孤岛式",
      "轮回"
    ],
    "oneLine": "沙漠深处的诡异旅馆,每位住客都会在午夜发现枕头里长满仙人掌刺。"
  },
  {
    "title": "明月山海揽芳华",
    "href": "details/movie-0303.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "山海经",
      "神兽",
      "虐恋",
      "画风绝美"
    ],
    "oneLine": "山海经中的神兽化身人形混迹人间,一场横跨三千年的爱恋在青岛明月山海间重启。"
  },
  {
    "title": "影子恋人",
    "href": "details/movie-0304.html",
    "cover": "./4.jpg",
    "year": "2020",
    "region": "泰国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "双胞胎替身",
      "豪门恩怨",
      "禁忌之恋",
      "狗血反转"
    ],
    "oneLine": "为了姐姐,她整容成她的样子嫁给仇人,却发现自己爱上了这个“杀姐凶手”。"
  },
  {
    "title": "黄金劫案第二季",
    "href": "details/movie-0305.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "高智商犯罪",
      "猫鼠游戏",
      "黑吃黑",
      "国产刑侦"
    ],
    "oneLine": "第一季的黄金大盗成功越狱,这次他盯上了价值连城的“深海宝藏”,而追捕他的,竟是他亲手送进监狱的天才徒弟。"
  },
  {
    "title": "盗贼生涯",
    "href": "details/movie-0306.html",
    "cover": "./6.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "盗窃",
      "团队",
      "多重反转",
      "韩式暴力美学"
    ],
    "oneLine": "传说中的大盗金盆洗手前最后一票:盗取藏在韩国国家博物馆地下室的朝鲜王室金书。但他团队里每个人都是卧底。"
  },
  {
    "title": "快行道",
    "href": "details/movie-0307.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "地下赛车",
      "复仇",
      "改装车",
      "兄弟反目",
      "午夜狂飙"
    ],
    "oneLine": "地下赛车手为给哥哥复仇,故意输掉比赛进入监狱,只为接近杀害哥哥的富二代车手。"
  },
  {
    "title": "延禧攻略番外篇之金枝玉叶",
    "href": "details/movie-0308.html",
    "cover": "./8.jpg",
    "year": "2026",
    "region": "中国",
    "type": "网络剧",
    "category": "国产短剧",
    "tags": [
      "下一代恩怨",
      "和亲公主",
      "令妃之女",
      "越南制作",
      "权谋"
    ],
    "oneLine": "魏璎珞的女儿昭华公主远嫁蒙古,却在和亲途中发现自己成了前朝废妃复仇棋局中最致命的一枚棋子。"
  },
  {
    "title": "游记",
    "href": "details/movie-0309.html",
    "cover": "./9.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "老年",
      "川西",
      "死亡",
      "父子"
    ],
    "oneLine": "癌症晚期的父亲让儿子开车送自己去川西,说要在那里见一个人,但那个地址根本不存在。"
  },
  {
    "title": "天元突破剧场版:螺岩篇",
    "href": "details/movie-0310.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画电影",
    "category": "科幻奇幻",
    "tags": [
      "机甲",
      "兄弟",
      "螺旋力"
    ],
    "oneLine": "西蒙挖出了大哥卡米那的遗物——一颗仍在跳动的螺旋核心,他决定重启红莲团。"
  },
  {
    "title": "玛歌皇后",
    "href": "details/movie-0311.html",
    "cover": "./11.jpg",
    "year": "1994",
    "region": "法国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "圣巴托洛缪大屠杀",
      "宫廷",
      "改编自大仲马"
    ],
    "oneLine": "1572年,天主教公主玛格丽特被迫嫁给新教徒国王,婚礼后的第六天,巴黎发生了一场屠杀。"
  },
  {
    "title": "终极警报",
    "href": "details/movie-0312.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "海啸",
      "逃生",
      "群像"
    ],
    "oneLine": "十级地震后,海啸将在28分钟后抵达,一座城市和一万个人必须在28分钟内决定谁上最后一辆撤离大巴。"
  },
  {
    "title": "爱幽的密室",
    "href": "details/movie-0313.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "密室",
      "心理咨询",
      "创伤",
      "反转",
      "人性实验"
    ],
    "oneLine": "六个陌生人醒来时,发现被困在一间没有门的白色密室里,唯一的求助对象是AI心理医生“爱幽”。"
  },
  {
    "title": "求求你,吃我吧",
    "href": "details/movie-0314.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画短片",
    "category": "喜剧家庭",
    "tags": [
      "食物",
      "亲情",
      "催泪"
    ],
    "oneLine": "一个即将被扔掉的饺子,为了让患阿尔茨海默症的老人想起孙女,决定说服冰箱里的所有食材演出“年夜饭”。"
  },
  {
    "title": "飞行之翼",
    "href": "details/movie-0315.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "人类飞行史",
      "理想主义",
      "诗意画面"
    ],
    "oneLine": "19世纪一个裁缝坚信人能飞行,他缝了一对巨大翅膀,从埃菲尔铁塔跳了下去。"
  },
  {
    "title": "错过又如何",
    "href": "details/movie-0316.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "平行时空",
      "遗憾",
      "抉择",
      "温情"
    ],
    "oneLine": "如果人生可以重来,你会选择弥补遗憾,还是留住现在的幸福?"
  },
  {
    "title": "野性的邂逅粤语",
    "href": "details/movie-0317.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "粤语原声",
      "郊野公园",
      "都市疗伤"
    ],
    "oneLine": "两个在感情中受伤的陌生人,在香港的深山郊野公园里偶遇,约定只同行24小时,永不交换姓名。"
  },
  {
    "title": "山口山战记之草裙娃娃",
    "href": "details/movie-0318.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "游戏改编",
      "搞笑",
      "诅咒玩偶"
    ],
    "oneLine": "网红主播买到诡异的“草裙娃娃”,半夜娃娃开始跳舞,跳完谁谁就社死。"
  },
  {
    "title": "女巫1966",
    "href": "details/movie-0319.html",
    "cover": "./19.jpg",
    "year": "1966",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "黑白片",
      "女巫审判",
      "新英格兰",
      "心理恐怖"
    ],
    "oneLine": "17世纪新英格兰一个少女被指控为女巫,但她渐渐发现自己可能真的拥有诅咒他人的能力。"
  },
  {
    "title": "太空部队第二季",
    "href": "details/movie-0320.html",
    "cover": "./20.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "职场",
      "官僚",
      "太空竞赛",
      "讽刺",
      "搞笑"
    ],
    "oneLine": "第二季中,美军太空部队不仅要应对中国空间站的挑衅,还要处理基地里一头会修卫星的棕熊。"
  },
  {
    "title": "胶片时代的爱情",
    "href": "details/movie-0321.html",
    "cover": "./21.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "胶片",
      "暗房",
      "九十年代",
      "纯爱"
    ],
    "oneLine": "1999年,一个胶片冲印店学徒爱上一个来洗照片的女孩,他用底片拼接的方式“偷”出了一份爱情。"
  },
  {
    "title": "关键投票",
    "href": "details/movie-0322.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "选举",
      "暗杀",
      "全民公投"
    ],
    "oneLine": "一场决定美国命运的全民公投,全国最终票数打成平手,只剩下一张邮寄选票未被拆封。"
  },
  {
    "title": "龙凤花烛",
    "href": "details/movie-0323.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "豪门",
      "诅咒",
      "宅斗",
      "反转"
    ],
    "oneLine": "民国豪门姜家有个传统:新人必须在点燃龙凤花烛的当晚守夜,因为任何让蜡烛熄灭的人,都会在一年内离奇死去。"
  },
  {
    "title": "世界上最长最没意义的电影",
    "href": "details/movie-0324.html",
    "cover": "./24.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "超长",
      "意识流",
      "反叙事"
    ],
    "oneLine": "五百二十小时的静态画面,试图证明“意义”本身是人类最大的幻觉。"
  },
  {
    "title": "六十年代甜蜜蜜",
    "href": "details/movie-0325.html",
    "cover": "./25.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "怀旧",
      "南洋",
      "华人",
      "移民"
    ],
    "oneLine": "1960年代,一个从广东逃港的少女与一个新加坡华侨富商之子,在混乱的香港街头因一罐凤梨罐头结缘。"
  },
  {
    "title": "昆西四季",
    "href": "details/movie-0326.html",
    "cover": "./26.jpg",
    "year": "2016",
    "region": "英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "艺术",
      "文学",
      "四季流转",
      "宁静"
    ],
    "oneLine": "英国作家约翰·伯格的最后时光,在他的法国小镇昆西,用四个季节串联起关于艺术与生命的沉思。"
  },
  {
    "title": "少林僧兵",
    "href": "details/movie-0327.html",
    "cover": "./27.jpg",
    "year": "2008",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "明朝",
      "抗倭",
      "少林寺",
      "僧兵"
    ],
    "oneLine": "嘉靖年间,倭寇横行,一群不杀生的和尚拿起铁棍,在月空法师带领下走上战场。"
  },
  {
    "title": "暗杀风暴",
    "href": "details/movie-0328.html",
    "cover": "./28.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "特工",
      "总统遇刺",
      "双面间谍",
      "实时追踪"
    ],
    "oneLine": "距离总统演讲还有两小时,一名失忆的CIA特工发现自己就是被通缉的“暗杀者”。"
  },
  {
    "title": "少林兄弟",
    "href": "details/movie-0329.html",
    "cover": "./29.jpg",
    "year": "1977",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "邵氏",
      "少林寺",
      "兄弟情",
      "复仇"
    ],
    "oneLine": "少林寺被清兵焚毁后,幸存的五位师兄弟十年后重聚,却发现大师兄已成了朝廷的走狗。"
  },
  {
    "title": "我家隔壁有贱狗",
    "href": "details/movie-0330.html",
    "cover": "./30.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "邻居",
      "拆家",
      "二哈",
      "城市孤独"
    ],
    "oneLine": "单身宅男被新邻居的二哈拆了家,报警后发现,邻居是个因抑郁无法出门的女孩。"
  },
  {
    "title": "赛尔号第五季之猎天困兽",
    "href": "details/movie-0331.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画",
    "category": "动画少儿",
    "tags": [
      "机甲",
      "宇宙冒险",
      "精灵对战",
      "热血",
      "成长"
    ],
    "oneLine": "赛尔号被困人造黑洞,一只号称能吞噬星空的远古巨兽苏醒,唯一钥匙藏在雷伊的眼泪里。"
  },
  {
    "title": "奥兹国的桃乐丝",
    "href": "details/movie-0332.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "绿野仙踪",
      "黑化",
      "暗黑童话",
      "平行世界",
      "大女主"
    ],
    "oneLine": "30岁的桃乐丝回到灰扑扑的堪萨斯,却发现奥兹国正拖着她的现实世界一起堕入黑暗。"
  },
  {
    "title": "海军万岁",
    "href": "details/movie-0333.html",
    "cover": "./33.jpg",
    "year": "1942",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "二战宣传",
      "百老汇风格",
      "大乐团"
    ],
    "oneLine": "珍珠港事件后,一名花花公子舰长必须训练一支业余水兵歌舞团,以赢回民心。"
  },
  {
    "title": "克鲁小丑的摇滚坏生活",
    "href": "details/movie-0334.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "华丽摇滚",
      "八十年代",
      "毒品",
      "荒诞喜剧"
    ],
    "oneLine": "以极度夸张的喜剧方式,还原八十年代最臭名昭著的华丽摇滚乐队“克鲁小丑”从吸毒过量到解散的疯狂十年。"
  },
  {
    "title": "陈赓晋南大捷",
    "href": "details/movie-0335.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "陈赓",
      "晋南战役",
      "运动战",
      "军事指挥",
      "解放战争"
    ],
    "oneLine": "1946年晋南,陈赓率领4纵面对胡宗南10万大军,打出了一场以弱胜强的运动战奇迹。"
  },
  {
    "title": "鉴证实录2国语",
    "href": "details/movie-0336.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "法医",
      "连环案",
      "女性视角",
      "单元剧"
    ],
    "oneLine": "一封来自死者的DNA鉴定报告,让女法医发现自己竟是二十年前悬案的真凶之女。"
  },
  {
    "title": "我知道我的名字叫史蒂芬",
    "href": "details/movie-0337.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "失忆",
      "身份认同",
      "惊悚"
    ],
    "oneLine": "一个失忆的男人坚信自己是失踪多年的史蒂芬,但当他接近真相时,所谓的“家人们”却都在试图杀他。"
  },
  {
    "title": "情海冤家",
    "href": "details/movie-0338.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "狗血",
      "反转",
      "豪门"
    ],
    "oneLine": "为了调查姐姐的离奇溺水,妹妹假扮成她,嫁给了豪门里的最大嫌疑人。"
  },
  {
    "title": "女教師1977",
    "href": "details/movie-0339.html",
    "cover": "./39.jpg",
    "year": "1977",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "昭和风情",
      "校园秘闻",
      "女性困境",
      "反转"
    ],
    "oneLine": "1977年,一名女教师的未婚夫突然失踪,她发现他最后去过的地点竟是班上学生的家。"
  },
  {
    "title": "朋克电影",
    "href": "details/movie-0340.html",
    "cover": "./40.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "摇滚",
      "叛逆",
      "70年代",
      "亚文化"
    ],
    "oneLine": "1976年,伦敦一个失业青年靠偷乐器组乐队,最终在朋克浪潮中砸碎了自己的吉他,也砸碎了阶级天花板。"
  },
  {
    "title": "陨石大灾难",
    "href": "details/movie-0341.html",
    "cover": "./41.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "硬核科学",
      "全球灾难",
      "地心钻探",
      "双雄对决",
      "视效核爆"
    ],
    "oneLine": "一颗陨石恰好刺穿地壳卡在岩浆层,人类必须在七十二小时内把它炸碎,否则地核喷发将撕裂地球。"
  },
  {
    "title": "秦时明月之沧海横流",
    "href": "details/movie-0342.html",
    "cover": "./42.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "权谋",
      "战争",
      "诸子百家"
    ],
    "oneLine": "秦始皇东巡途中遭遇神秘刺杀,天明与少羽被卷入一场颠覆帝国与改写江湖的惊天阴谋。"
  },
  {
    "title": "魔魅俱乐部",
    "href": "details/movie-0343.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "都市传说",
      "诅咒录像",
      "俱乐部文化",
      "身体恐怖"
    ],
    "oneLine": "一群沉迷于都市传说的年轻人潜入废弃的“魔魅俱乐部”,发现那里有一盘只要播放就会招来“魔魅”的录像带。"
  },
  {
    "title": "虚假的借口",
    "href": "details/movie-0344.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "谎言网络",
      "婚姻危机",
      "多层反转"
    ],
    "oneLine": "丈夫用出差当借口幽会情人,却发现妻子用看病当借口在谋杀他。"
  },
  {
    "title": "棋盘人生",
    "href": "details/movie-0345.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "围棋",
      "抗战",
      "以棋喻战",
      "谍战"
    ],
    "oneLine": "抗战时期,一位围棋天才被军统和日寇同时盯上,他的每一步棋,都关系着无数人的生死。"
  },
  {
    "title": "五个恶魔",
    "href": "details/movie-0346.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "气味",
      "记忆",
      "母女关系",
      "超能力"
    ],
    "oneLine": "一个能通过气味复现任何人记忆的小女孩,意外复现了母亲深埋心底的一起童年谋杀案。"
  },
  {
    "title": "酒店风云粤语",
    "href": "details/movie-0347.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "豪门内斗",
      "酒店管理",
      "粤语原声",
      "权力游戏"
    ],
    "oneLine": "五星酒店掌门人猝死,三个子女各怀鬼胎,而真正的继承人在员工名单里。"
  },
  {
    "title": "直接武力",
    "href": "details/movie-0348.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "特种部队",
      "以暴制暴",
      "复仇",
      "硬核动作",
      "单挑"
    ],
    "oneLine": "退役特种兵的女儿被绑架,他放弃所有谈判策略,选择用最原始的方式逐个击破整个犯罪网络。"
  },
  {
    "title": "吴越钱王",
    "href": "details/movie-0349.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "五代十国",
      "帝王",
      "保境安民",
      "家国情怀"
    ],
    "oneLine": "讲述五代十国时期,吴越国创立者钱镠如何从一个贩盐小子,成长为“保境安民”的一代雄主。"
  },
  {
    "title": "我是医生",
    "href": "details/movie-0350.html",
    "cover": "./50.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "医患关系",
      "急诊室",
      "医生视角",
      "现实题材",
      "生命抉择"
    ],
    "oneLine": "一位急诊科主任在24小时内连续面对三次生死抉择,每一个决定都可能毁掉他的职业生涯。"
  },
  {
    "title": "比基尼特工",
    "href": "details/movie-0351.html",
    "cover": "./51.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "沙滩",
      "女特工",
      "搞笑",
      "比基尼"
    ],
    "oneLine": "为了接近藏身泳装的恐怖分子,警花们不得不穿上比基尼,却发现自己泳技还不如老太太。"
  },
  {
    "title": "杀人唔眨眼",
    "href": "details/movie-0352.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "杀手",
      "黑色幽默",
      "荒诞",
      "爽片"
    ],
    "oneLine": "一个晕血的杀手接了一单暗杀任务,却发现目标是个同样晕血的黑帮老大,两人见面就双双晕倒。"
  },
  {
    "title": "代号九耳犬",
    "href": "details/movie-0353.html",
    "cover": "./53.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "民国",
      "密码战",
      "双面间谍",
      "女性"
    ],
    "oneLine": "1941年,一名拥有超强听力的盲女被军统征召,去破译潜伏在租界的日本“九耳犬”间谍网。"
  },
  {
    "title": "风暴过后",
    "href": "details/movie-0354.html",
    "cover": "./54.jpg",
    "year": "2016",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "海啸",
      "丧亲",
      "疗愈",
      "废墟",
      "日常"
    ],
    "oneLine": "东日本大地震五年后,失去儿子的母亲每天仍去海边喊他回家吃饭,直到一个陌生男孩回应了她。"
  },
  {
    "title": "狗日子",
    "href": "details/movie-0355.html",
    "cover": "./55.jpg",
    "year": "2018",
    "region": "中国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "留守老人",
      "宠物",
      "空巢",
      "公路片"
    ],
    "oneLine": "老伴死后,一个北方农村老汉带着一条土狗,骑着三轮摩托去南方找打工的儿子。"
  },
  {
    "title": "玻璃钥匙",
    "href": "details/movie-0356.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "政治黑幕",
      "侦探",
      "背叛",
      "硬汉派"
    ],
    "oneLine": "市长的养子死在密室,唯一的钥匙在市长秘书口袋里,但秘书说:我昨天刚被开除。"
  },
  {
    "title": "逐爱天堂",
    "href": "details/movie-0357.html",
    "cover": "./57.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "养老院",
      "黄昏恋",
      "遗产争夺",
      "温情"
    ],
    "oneLine": "退休骗子潜入养老院寻找目标,却爱上了一个比自己更会骗人的老太太。"
  },
  {
    "title": "金车换玉人",
    "href": "details/movie-0358.html",
    "cover": "./58.jpg",
    "year": "2026",
    "region": "中国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "替身",
      "豪门",
      "遗产",
      "错爱"
    ],
    "oneLine": "汽车大亨的私生女被当作替身嫁入豪门,没想到新郎曾是她救过的流浪汉。"
  },
  {
    "title": "伴游女王",
    "href": "details/movie-0359.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "卧底",
      "财阀",
      "姐妹情",
      "高能反转"
    ],
    "oneLine": "前女警为调查连环失踪案,伪装成顶级伴游潜入财阀私人派对,却发现自己要找的最后一个失踪者正在台上主持。"
  },
  {
    "title": "青蛙王子",
    "href": "details/movie-0360.html",
    "cover": "./60.jpg",
    "year": "1984",
    "region": "美国/英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "童话改编",
      "80年代复古",
      "搞笑"
    ],
    "oneLine": "傲慢的王子被女巫变成青蛙,但他吻了三个公主都没用——第四位公主说:“我只想把你做成法式焗蛙腿。"
  },
  {
    "title": "鬼手神枪",
    "href": "details/movie-0361.html",
    "cover": "./61.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "鬼手传人",
      "左轮对决",
      "民国江湖"
    ],
    "oneLine": "民国盲人枪手拥有一双能“听见子弹轨迹”的鬼手,却被徒弟出卖打瞎了双眼。"
  },
  {
    "title": "皇家酒店谋杀案",
    "href": "details/movie-0362.html",
    "cover": "./62.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "暴风雪山庄",
      "黑色电影",
      "怀旧"
    ],
    "oneLine": "七个各怀鬼胎的陌生人在雨夜住进没落的大酒店,而酒店的前任老板是黑手党的御用洗钱人。"
  },
  {
    "title": "圣斗士星矢真人版",
    "href": "details/movie-0363.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "改编",
      "铠甲",
      "宇宙之铠",
      "孤儿觉醒"
    ],
    "oneLine": "街头孤儿星矢意外发现,自己能召唤一套名为“天马座”的神秘铠甲,而他要对抗的是来自古希腊的女神诅咒。"
  },
  {
    "title": "牢狱风云",
    "href": "details/movie-0364.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "黑狱",
      "误判",
      "越狱",
      "孤胆英雄"
    ],
    "oneLine": "为给女儿报仇而杀人的父亲,被秘密关进一座私人黑狱,却发现仇家竟是这座监狱的幕后老板。"
  },
  {
    "title": "真相半白",
    "href": "details/movie-0365.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "罗生门",
      "乡村",
      "婚姻",
      "秘密",
      "谎言"
    ],
    "oneLine": "村里的模范夫妻在结婚纪念日翻车坠河,丈夫生还妻子失踪,四种证言拼出细思极恐的真相。"
  },
  {
    "title": "红幡",
    "href": "details/movie-0366.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "民国",
      "宅斗",
      "遗产",
      "灵堂",
      "秘密"
    ],
    "oneLine": "江南首富死后留下遗嘱:谁在灵堂前挂起红幡,谁就能继承全部家产。"
  },
  {
    "title": "超级玛利欧兄弟",
    "href": "details/movie-0367.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "美国/日本",
    "type": "动画电影",
    "category": "海外精选",
    "tags": [
      "游戏改编",
      "水管工",
      "蘑菇王国",
      "库巴"
    ],
    "oneLine": "布鲁克林的水管工误入神秘管道,必须联合蘑菇王国的公主对抗那只暴躁的巨龟。"
  },
  {
    "title": "花魁杜十娘",
    "href": "details/movie-0368.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "中国内地",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "经典改编",
      "女性觉醒",
      "悲剧"
    ],
    "oneLine": "杜十娘赎身从良后才发现,李甲买她的钱,是把她又卖了一次的定金。"
  },
  {
    "title": "倒数第二个男朋友",
    "href": "details/movie-0369.html",
    "cover": "./69.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "诅咒",
      "恋爱",
      "反套路",
      "治愈"
    ],
    "oneLine": "男孩被诅咒“每个女友都会在遇到真命天子前甩掉他”,他成了全城最抢手的“试金石男友”。"
  },
  {
    "title": "星外来客",
    "href": "details/movie-0370.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "外星人",
      "第一类接触",
      "语言学家",
      "冷战隐喻",
      "慢科幻"
    ],
    "oneLine": "一名语言学家被秘密招募去破解降落在地球的外星信号,却发现对方发送的不是信息,而是“语法”。"
  },
  {
    "title": "爱上笨男人",
    "href": "details/movie-0371.html",
    "cover": "./71.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "姐弟恋",
      "反差萌",
      "职场"
    ],
    "oneLine": "精英女律师被迫与只有小学生情商的面馆老板合作,却意外发现了爱情最笨拙也最真实的样子。"
  },
  {
    "title": "真假王爷",
    "href": "details/movie-0372.html",
    "cover": "./72.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "古装",
      "身份互换",
      "民间传奇",
      "戏说"
    ],
    "oneLine": "清末街头卖艺的替身意外顶替了微服私访的王爷,他却发现真正的谋反大戏才刚刚开始。"
  },
  {
    "title": "自杀突击队",
    "href": "details/movie-0373.html",
    "cover": "./73.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "超级英雄",
      "反英雄",
      "改造士兵",
      "道德困境",
      "牺牲"
    ],
    "oneLine": "一群被判死刑的囚犯被植入自爆芯片,去执行不可能的任务——活着回来就是减刑。"
  },
  {
    "title": "琳达想吃鸡!",
    "href": "details/movie-0374.html",
    "cover": "./74.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "法式幽默",
      "亲子",
      "误会",
      "荒诞",
      "手绘动画"
    ],
    "oneLine": "单亲妈妈为了弥补对女儿的亏欠,非要给她做彩椒鸡,却引发了一场波及全镇的荒唐大搜捕。"
  },
  {
    "title": "似人非人",
    "href": "details/movie-0375.html",
    "cover": "./75.jpg",
    "year": "2027",
    "region": "日本",
    "type": "动画剧集",
    "category": "科幻奇幻",
    "tags": [
      "仿生人",
      "存在主义",
      "记忆植入",
      "社会排斥"
    ],
    "oneLine": "在仿生人与人类比例1:5的未来,一个觉醒的仿生人发现自己的记忆来自一个已死的少女。"
  },
  {
    "title": "太阳不能动",
    "href": "details/movie-0376.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "日本",
    "type": "TV Series",
    "category": "科幻奇幻",
    "tags": [
      "末日",
      "宇宙开发",
      "阴谋论",
      "硬科幻"
    ],
    "oneLine": "2067年,太阳突然停止核聚变,人类仅剩1000天生命,唯一的希望藏在月球的背面。"
  },
  {
    "title": "心链",
    "href": "details/movie-0377.html",
    "cover": "./77.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "灵魂伴侣",
      "穿越",
      "虐恋",
      "医疗"
    ],
    "oneLine": "心脏外科女医生移植了一颗陌生人的心脏后,开始看到这颗心脏原主人的记忆,包括他爱的男人。"
  },
  {
    "title": "决战斯大林格勒",
    "href": "details/movie-0378.html",
    "cover": "./78.jpg",
    "year": "2013",
    "region": "俄罗斯",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "巷战",
      "狙击手",
      "惨烈",
      "人性",
      "斯大林格勒"
    ],
    "oneLine": "苏军狙击手小组接到死命令:在废墟中守住最后一栋楼,楼里还藏着一个改变了所有人命运的姑娘。"
  },
  {
    "title": "人生的约定",
    "href": "details/movie-0379.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "日本",
    "type": "日剧SP",
    "category": "喜剧家庭",
    "tags": [
      "临终关怀",
      "和解",
      "失忆",
      "父子",
      "遗嘱"
    ],
    "oneLine": "一名在东京身败名裂的律师回到故乡,根据父亲遗留下的“每日约定”清单,重新学习如何做人。"
  },
  {
    "title": "大宋少年志",
    "href": "details/movie-0380.html",
    "cover": "./80.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "少年团",
      "谍战",
      "反转烧脑",
      "北宋",
      "秘阁"
    ],
    "oneLine": "大宋秘阁第七斋,六个问题少年被迫组队,第一堂课就是破解老师的“假死案”。"
  },
  {
    "title": "忧郁的物怪庵第一季",
    "href": "details/movie-0381.html",
    "cover": "./81.jpg",
    "year": "2016",
    "region": "日本",
    "type": "动画剧集",
    "category": "喜剧家庭",
    "tags": [
      "妖怪",
      "治愈",
      "搭档",
      "除妖",
      "青春"
    ],
    "oneLine": "一名被妖怪缠身的高中生被迫继承“物怪庵”,与冷漠店主搭档将妖怪送回隐世。"
  },
  {
    "title": "情感",
    "href": "details/movie-0382.html",
    "cover": "./82.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "情感咨询师",
      "病人反噬",
      "职业伦理"
    ],
    "oneLine": "一个替人解决情感问题的男人,自己却在三种关系里同时崩塌。"
  },
  {
    "title": "兴风作浪2",
    "href": "details/movie-0383.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "黑吃黑",
      "港式枪战",
      "荒诞",
      "兄弟情",
      "反转"
    ],
    "oneLine": "三个不入流的街头骗子,意外捡到黑帮大佬的千万赃款,却不知钱里被植入了追踪芯片,全城黑白两道都开始疯狂追杀他们。"
  },
  {
    "title": "学苑春浓",
    "href": "details/movie-0384.html",
    "cover": "./84.jpg",
    "year": "1993",
    "region": "香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "校园",
      "师生",
      "纯爱"
    ],
    "oneLine": "五十年代的香港师范女校,一名新来的年轻男教师与女学生之间隔着一道不可跨越的线。"
  },
  {
    "title": "小田进城",
    "href": "details/movie-0385.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "留守儿童",
      "农民工",
      "进城",
      "寻亲",
      "城市孤独"
    ],
    "oneLine": "12岁的留守儿童独自坐大巴进城找打工的父母,却在偌大的城市里发现,父母手机里描述的“大城市”全是谎言。"
  },
  {
    "title": "猫王与尼克松",
    "href": "details/movie-0386.html",
    "cover": "./86.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "猫王",
      "尼克松",
      "白宫",
      "真实事件"
    ],
    "oneLine": "1970年,猫王带着一把枪闯进白宫,要求和总统聊聊毒品问题。"
  },
  {
    "title": "奇妙的时光之旅",
    "href": "details/movie-0387.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "时间循环",
      "怀旧",
      "校园",
      "救赎",
      "轻度烧脑"
    ],
    "oneLine": "一个厌倦了平淡婚姻的中年男人,每晚入睡都会回到高中时代,他必须在两个时空里同时拯救自己的妻子。"
  },
  {
    "title": "如是",
    "href": "details/movie-0388.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "轮回",
      "僧侣",
      "现代烦恼",
      "话头"
    ],
    "oneLine": "一名困在都市的抑郁症僧侣,收到已故禅师留给他的一句谜题:“吃饭时谁在吃饭?"
  },
  {
    "title": "伴郎假期",
    "href": "details/movie-0389.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "婚礼",
      "同志出柜",
      "好友团聚"
    ],
    "oneLine": "麦克要结婚了,邀请三位大学死党当伴郎,酒过三巡他向挚友出柜,这趟脱裤烂醉的假期彻底变了味。"
  },
  {
    "title": "黑色圣诞节",
    "href": "details/movie-0390.html",
    "cover": "./90.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "圣诞恐怖",
      "姐妹会",
      "连环谋杀",
      "宗教元素"
    ],
    "oneLine": "圣诞假期将至,姐妹会的成员一个个失踪,而凶手可能就在她们每周一起唱圣歌的人之中。"
  },
  {
    "title": "明星大侦探第二季",
    "href": "details/movie-0391.html",
    "cover": "./91.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "综艺",
    "category": "悬疑犯罪",
    "tags": [
      "角色扮演",
      "密室",
      "烧脑",
      "搞笑",
      "探案"
    ],
    "oneLine": "六位明星被困在恐怖童谣的旋律中,每人都藏着不为人知的杀人动机。"
  },
  {
    "title": "迷你特工队之超级恐龙力量",
    "href": "details/movie-0392.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "中国大陆/韩国",
    "type": "剧集",
    "category": "动画少儿",
    "tags": [
      "机甲合体",
      "恐龙",
      "儿童英雄"
    ],
    "oneLine": "为了对抗能控制昆虫的反派,特工队必须唤醒体内沉睡的超级恐龙基因。"
  },
  {
    "title": "好父亲",
    "href": "details/movie-0393.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "意大利/法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "父子关系",
      "道德困境",
      "老年痴呆",
      "遗产之争",
      "温情"
    ],
    "oneLine": "当患阿尔茨海默的父亲忘记所有人后,他每天只重复一句话:我儿子是杀人犯。"
  },
  {
    "title": "咸鱼要翻身",
    "href": "details/movie-0394.html",
    "cover": "./94.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "草根逆袭",
      "街舞",
      "热血",
      "小人物"
    ],
    "oneLine": "一个建筑工地的大叔为了给女儿凑学费,组成一支平均年龄55岁的“老年街舞团”挑战全国大赛。"
  },
  {
    "title": "贤妻乐坊",
    "href": "details/movie-0395.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国",
    "type": "网络剧",
    "category": "国产短剧",
    "tags": [
      "女性群像",
      "唐代乐坊",
      "经商种田",
      "逆袭",
      "古典乐器"
    ],
    "oneLine": "被休弃的士族之妻带着一把断弦琵琶,在长安西市开了一家只招寡妇的乐坊,靠音乐复仇。"
  },
  {
    "title": "我不笨,所以我有话说",
    "href": "details/movie-0396.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "残障",
      "励志",
      "黑色幽默",
      "社会讽刺"
    ],
    "oneLine": "一个被诊断为智障的清洁工,其实拥有超忆症,他将用每一个被轻视的细节摧毁整个傲慢的议会系统。"
  },
  {
    "title": "达拉斯之王",
    "href": "details/movie-0397.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "石油",
      "德州",
      "家族",
      "权力",
      "体育"
    ],
    "oneLine": "1980年代达拉斯,一个黑人石油新贵企图同时买下牛仔队,打破白人既得利益集团的铁幕。"
  },
  {
    "title": "猛鬼工厂",
    "href": "details/movie-0398.html",
    "cover": "./98.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "厂房闹鬼",
      "劳工剥削",
      "因果报应",
      "泰式恐怖",
      "密室"
    ],
    "oneLine": "一群工人为了加班费深夜留守工厂,却触发了被机器吞食的冤魂们的“循环生产”,每隔一小时就会有一人“被报废”。"
  },
  {
    "title": "机密行动",
    "href": "details/movie-0399.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "卧底",
      "双面间谍",
      "局中局"
    ],
    "oneLine": "警队精英被派潜入黑帮,却发现黑帮老大也是卧底,而自己真正的上司是内鬼。"
  },
  {
    "title": "鲁邦三世 不死身的血族",
    "href": "details/movie-0400.html",
    "cover": "./100.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画电影",
    "category": "动作冒险",
    "tags": [
      "怪盗",
      "吸血鬼传说",
      "不死之谜",
      "峰不二子"
    ],
    "oneLine": "传说中不死的血族后裔,盯上了鲁邦三世那颗不会停止跳动的心脏。"
  },
  {
    "title": "仙王的日常生活第四季",
    "href": "details/movie-0401.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动画剧集",
    "category": "动作冒险",
    "tags": [
      "仙王",
      "校园",
      "日常",
      "热血",
      "续作"
    ],
    "oneLine": "仙王王令在校园里隐藏实力,却因一场意外卷入多元宇宙的混乱危机。"
  },
  {
    "title": "海伦夫人的冒险",
    "href": "details/movie-0402.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "复古",
      "女权",
      "夺宝",
      "法式幽默",
      "公路片"
    ],
    "oneLine": "1920年代的巴黎贵妇为了寻找失踪的探险家丈夫,带着一本盗墓笔记和一只鹦鹉,踏上了横跨撒哈拉的爆笑寻夫路。"
  },
  {
    "title": "血性山谷",
    "href": "details/movie-0403.html",
    "cover": "./103.jpg",
    "year": "2004",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "抗日战争",
      "血色浪漫",
      "人性灰度",
      "山谷战"
    ],
    "oneLine": "一次失败的山谷伏击战,让一群溃败的士兵和一队逃难的百姓,在绝境中互相吞噬。"
  },
  {
    "title": "纵横四海粤语",
    "href": "details/movie-0404.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港风",
      "兄弟情",
      "侠盗",
      "枪战",
      "经典翻拍"
    ],
    "oneLine": "三个孤儿被黑道养大成为艺术品大盗,最后一次任务中发现要偷的画里藏着他们亲生父母的死亡真相。"
  },
  {
    "title": "一起走过",
    "href": "details/movie-0405.html",
    "cover": "./105.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "真实",
      "武汉",
      "普通人",
      "温情"
    ],
    "oneLine": "没有剧本,只有一台台手机和监控摄像头,记录了2020年初武汉封城期间,五个普通家庭在绝望与希望之间“一起走过”的72天。"
  },
  {
    "title": "贝尔戈维亚丑闻",
    "href": "details/movie-0406.html",
    "cover": "./106.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "贵族",
      "丑闻",
      "遗产",
      "维多利亚时代",
      "朱利安·费罗斯"
    ],
    "oneLine": "一个穷小子娶了贵族千金,却在婚礼当晚被发现真实身份是逃亡的杀人犯。"
  },
  {
    "title": "偷天大盗",
    "href": "details/movie-0407.html",
    "cover": "./107.jpg",
    "year": "2001",
    "region": "美国/德国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "盗窃团伙",
      "家庭伦理",
      "反转结局"
    ],
    "oneLine": "一个世代相传的贼家族,准备偷走最后一个目标后金盆洗手,却被赃物拖入深渊。"
  },
  {
    "title": "小象寻母",
    "href": "details/movie-0408.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "中国",
    "type": "动画电影",
    "category": "喜剧家庭",
    "tags": [
      "动物迁徙",
      "母爱",
      "成长治愈"
    ],
    "oneLine": "一场洪水冲散了象群,三岁小象踏上横跨非洲大草原的孤独寻母路。"
  },
  {
    "title": "唤爱",
    "href": "details/movie-0409.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "亲情",
      "穿越",
      "留守儿童",
      "声音"
    ],
    "oneLine": "失去母亲的聋哑女孩发现自己拍手能唤醒植物人父亲的意识,但每次唤醒,她都会丢失一种感觉。"
  },
  {
    "title": "坏种",
    "href": "details/movie-0410.html",
    "cover": "./110.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电视剧",
    "category": "恐怖惊悚",
    "tags": [
      "恶童",
      "心理惊悚",
      "反社会人格",
      "继承之战"
    ],
    "oneLine": "富商发现自己的完美继承人女儿,为了通过考验,不惜杀掉所有竞争对手。"
  },
  {
    "title": "金手指2023",
    "href": "details/movie-0411.html",
    "cover": "./111.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "股市操纵",
      "廉政公署",
      "双雄对决"
    ],
    "oneLine": "廉政公署调查员追查一起百亿股市操纵案,发现幕后“金手指”竟是自己的失散生父。"
  },
  {
    "title": "亲爱的大笨象",
    "href": "details/movie-0412.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "大象",
      "泰式温情",
      "债务与救赎"
    ],
    "oneLine": "欠下巨债的中年男人被一头会画画的大象缠上,大象画的每一幅画都精准预言了他的人生。"
  },
  {
    "title": "嬉春学堂续集",
    "href": "details/movie-0413.html",
    "cover": "./113.jpg",
    "year": "1998",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "校园",
      "夏令营",
      "恶搞",
      "青春"
    ],
    "oneLine": "暑假留守学校的三男两女在旧宿舍里翻出了一本六十年前的“恋爱秘籍”,按图索骥反闹出一连串乌龙。"
  },
  {
    "title": "猫王巡回演唱会",
    "href": "details/movie-0414.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "category": "海外精选",
    "tags": [
      "猫王",
      "幕后",
      "1970年代",
      "最后时光",
      "真实影像"
    ],
    "oneLine": "尘封五十年的猫王最后一场巡演幕后影像曝光,镜头记录了他如何在药物和孤独中,用最后的生命燃烧舞台。"
  },
  {
    "title": "鼹鼠人",
    "href": "details/movie-0415.html",
    "cover": "./115.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "地下生物",
      "变异",
      "密室逃生",
      "幽闭恐惧",
      "生存"
    ],
    "oneLine": "纽约地铁施工队意外挖穿地壳,释放出适应地心环境、视光如仇的变异人类——鼹鼠人。"
  },
  {
    "title": "脏话蓝调",
    "href": "details/movie-0416.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "爵士乐",
      "语言治疗",
      "口吃",
      "中年危机"
    ],
    "oneLine": "严重口吃的爵士乐手发现,只有一边骂脏话一边吹萨克斯才能流畅演奏。"
  },
  {
    "title": "云中行走",
    "href": "details/movie-0417.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "法国/加拿大",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "走钢丝",
      "梦想",
      "极限",
      "真实事件改编"
    ],
    "oneLine": "这个恐高的年轻人偏要挑战云端,他在没有任何保护的情况下,将一根钢索架上了世界最高的在建大桥。"
  },
  {
    "title": "新推销员之死",
    "href": "details/movie-0418.html",
    "cover": "./118.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "黑色幽默",
      "职场",
      "底层",
      "荒诞"
    ],
    "oneLine": "一位直播带货的中年推销员在流量造假败露后,用一场假死换来网络狂欢,却再也活不回去。"
  },
  {
    "title": "干吧!我的彩虹人生",
    "href": "details/movie-0419.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "LGBTQ+",
      "校园",
      "自我认同",
      "热血"
    ],
    "oneLine": "一个深柜的高中生为了追到篮球队队长,决定报名校庆的变装皇后表演大赛,却意外获得了全校的掌声。"
  },
  {
    "title": "冷面枭雄",
    "href": "details/movie-0420.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "黑帮",
      "卧底",
      "律师",
      "双重身份",
      "权谋"
    ],
    "oneLine": "他表面是财阀的御用大律师,暗地里是四大家族的影子军师,直到警方卧底递给他一张旧照片——照片上是失散三十年的亲生妹妹。"
  },
  {
    "title": "狐仙2012",
    "href": "details/movie-0421.html",
    "cover": "./121.jpg",
    "year": "2012",
    "region": "中国内地",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "人妖恋",
      "民国",
      "虐恋",
      "画风唯美"
    ],
    "oneLine": "民国乱世,失明画匠遇上一只报恩的白狐,他用笔画心,她却要用命换他看见真相。"
  },
  {
    "title": "狙击女妙探",
    "href": "details/movie-0422.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "女狙击手",
      "探案",
      "反差萌",
      "话痨"
    ],
    "oneLine": "前海军陆战队狙击手转行当私家侦探,却发现自己有“开枪前必须说垃圾话”的职业病。"
  },
  {
    "title": "人间·小团圆",
    "href": "details/movie-0423.html",
    "cover": "./123.jpg",
    "year": "2014",
    "region": "中国香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "家庭纠葛",
      "都市情感",
      "人性探索"
    ],
    "oneLine": "一个普通家庭的年夜饭上,尘封二十年的秘密被一碗汤打翻。"
  },
  {
    "title": "单车小子",
    "href": "details/movie-0424.html",
    "cover": "./124.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "留守儿童",
      "梦想",
      "公路",
      "治愈"
    ],
    "oneLine": "贵州深山里的留守少年,决定骑着一辆破单车,跨越800公里去广东找爸爸。"
  },
  {
    "title": "雪豹",
    "href": "details/movie-0425.html",
    "cover": "./125.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "抗战",
      "特战",
      "传奇"
    ],
    "oneLine": "一个留德归来的富家少爷,用一套超前的战术理念,将一群土匪和散兵游勇打造成了令日军闻风丧胆的“雪豹特战队”。"
  },
  {
    "title": "哈哈哈哈哈第五季",
    "href": "details/movie-0426.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "category": "国产短剧",
    "tags": [
      "明星",
      "穷游",
      "公路片",
      "即兴喜剧",
      "整蛊"
    ],
    "oneLine": "五哈旅行团再次启程,这次他们不走寻常路,要用打工赚来的微薄路费,横穿整个东南亚。"
  },
  {
    "title": "新宿小偷日记",
    "href": "details/movie-0427.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑白摄影",
      "社会边缘人",
      "存在主义",
      "底层叙事"
    ],
    "oneLine": "一个以偷窃为生的男人在新宿鱼龙混杂的歌舞伎町游荡,他用日记记录别人的秘密,却丢失了自己的名字。"
  },
  {
    "title": "守护解放西",
    "href": "details/movie-0428.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "纪录片",
    "category": "国产短剧",
    "tags": [
      "派出所",
      "深夜",
      "人间百态",
      "长沙"
    ],
    "oneLine": "镜头对准长沙解放西路深夜的派出所,记录民警与醉酒、斗殴、迷失灵魂之间的真实博弈。"
  },
  {
    "title": "一尸到底",
    "href": "details/movie-0429.html",
    "cover": "./129.jpg",
    "year": "2018",
    "region": "日本",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "僵尸",
      "一镜到底",
      "幕后",
      "低成本",
      "神反转"
    ],
    "oneLine": "一个摄制组在废弃工厂拍僵尸片,遭遇真僵尸,导演却大喊“不要停,继续拍!"
  },
  {
    "title": "惊天核网",
    "href": "details/movie-0430.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "恐怖惊悚",
    "tags": [
      "核弹",
      "灰色市场",
      "父子对决"
    ],
    "oneLine": "东欧黑市出现了一枚战术核弹,而卖家正是CIA特工失散十五年的儿子。"
  },
  {
    "title": "逆冰之行",
    "href": "details/movie-0431.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "挪威",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "极地求生",
      "真实事件改编",
      "冰海沉船"
    ],
    "oneLine": "1910年南极探险队被困浮冰,他们必须在食物耗尽前徒步穿越世界上最危险的冰架。"
  },
  {
    "title": "反斗马骝",
    "href": "details/movie-0432.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "卧底",
      "猴子",
      "成龙式动作"
    ],
    "oneLine": "警方为了破获国际走私案,竟然训练了一只猴子当卧底,而负责接收情报的菜鸟警察差点被逼疯。"
  },
  {
    "title": "拿针的女孩",
    "href": "details/movie-0433.html",
    "cover": "./133.jpg",
    "year": "2025",
    "region": "丹麦",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "连环杀手",
      "护士",
      "真实案件改编",
      "女性"
    ],
    "oneLine": "真实案件改编:20世纪初丹麦,一名女护士用针头杀死数十名孤儿,她却说自己是在“拯救他们”。"
  },
  {
    "title": "不受欢迎的人",
    "href": "details/movie-0434.html",
    "cover": "./134.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "职场霸凌",
      "悬疑反转",
      "密室",
      "人性",
      "低语"
    ],
    "oneLine": "公司全员大会上,一个被孤立的清洁工突然站起来,说他知道昨晚死在茶水间的是谁。"
  },
  {
    "title": "永不我弃",
    "href": "details/movie-0435.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "克隆人",
      "伦理",
      "绝望中的浪漫",
      "文学改编"
    ],
    "oneLine": "在一所专门培养器官捐献者的寄宿学校,两个克隆人学生决定用一次私奔来证明自己拥有灵魂。"
  },
  {
    "title": "邻家密友",
    "href": "details/movie-0436.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "邻里",
      "偷窥",
      "秘密",
      "反转",
      "心理战"
    ],
    "oneLine": "独居女孩和隔壁夫妇成为好友,直到她通过猫眼看到,这对夫妇抬着染血的行李箱出门。"
  },
  {
    "title": "酝酿复仇",
    "href": "details/movie-0437.html",
    "cover": "./137.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "酿酒",
      "慢性毒药",
      "高智商复仇",
      "反转"
    ],
    "oneLine": "最好的酿酒师也是最好的下毒师:他用二十年,让仇人一杯一杯喝掉自己的人生。"
  },
  {
    "title": "梦断影都",
    "href": "details/movie-0438.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "好莱坞",
      "制片厂",
      "梦想破灭",
      "1950年代"
    ],
    "oneLine": "1955年,一位怀揣编剧梦的女孩成为当红女星的替身,却发现自己的创意被层层剽窃。"
  },
  {
    "title": "不良喜剧",
    "href": "details/movie-0439.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "脱口秀",
      "暗网",
      "政治不正确"
    ],
    "oneLine": "一个过气脱口秀演员为了翻红直播“刺杀富豪”的行为艺术,结果当晚富豪真的被杀了。"
  },
  {
    "title": "龙与地下城:秽恶之书",
    "href": "details/movie-0440.html",
    "cover": "./140.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "DND 改编",
      "禁忌魔法",
      "怪物图鉴"
    ],
    "oneLine": "一本记载了如何召唤百种禁忌怪物的《秽恶之书》被撕成五页散落各地,每个持有者都疯了。"
  },
  {
    "title": "歌声不绝",
    "href": "details/movie-0441.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "绝症",
      "合唱团",
      "生命倒计时",
      "治愈"
    ],
    "oneLine": "她被诊断只剩三个月生命,却执意要组建一支由临终病人组成的合唱团。"
  },
  {
    "title": "黑金村传说",
    "href": "details/movie-0442.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "泰国恐怖片",
      "降头",
      "贪婪诅咒",
      "乡村怪谈"
    ],
    "oneLine": "一个扶贫工作组进入泰国深山“黑金村”,发现这里的村民从不生病、从不死亡,但每隔三年必须“献祭”一个外人。"
  },
  {
    "title": "阿爸的情人",
    "href": "details/movie-0443.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "父子冲突",
      "出柜",
      "泰国华人家庭"
    ],
    "oneLine": "经营老式理发店的传统父亲,突然发现自己新招的帅气学徒,竟是儿子隐瞒了三年的男朋友。"
  },
  {
    "title": "创伤",
    "href": "details/movie-0444.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "PTSD",
      "记忆重塑",
      "医疗伦理",
      "限知视角"
    ],
    "oneLine": "一位创伤治疗师发现,自己给病人植入的“美好记忆”,竟与多起失踪案有关。"
  },
  {
    "title": "国际杀手的真实回忆录",
    "href": "details/movie-0445.html",
    "cover": "./145.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "伪纪录片",
      "作家骗局",
      "吐槽杀手"
    ],
    "oneLine": "一个害怕暴力的宅男作家假装自己是王牌杀手,结果引来全球顶尖刺客的追杀。"
  },
  {
    "title": "为舞而生",
    "href": "details/movie-0446.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "舞蹈",
      "种姓制度",
      "逐梦",
      "传统与现代"
    ],
    "oneLine": "一名低种姓的男孩拥有绝世舞姿,但他的梦想是跳只有高种姓才能跳的“禁忌古典舞”,这让他成为全村公敌。"
  },
  {
    "title": "不眠之夜",
    "href": "details/movie-0447.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "失眠诅咒",
      "梦境入侵",
      "心理惊悚",
      "都市怪谈"
    ],
    "oneLine": "整栋楼的居民突然集体失眠,唯一能睡着的人,醒来说自己是另一个人。"
  },
  {
    "title": "秘密特工",
    "href": "details/movie-0448.html",
    "cover": "./148.jpg",
    "year": "2015",
    "region": "英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "间谍",
      "双雄",
      "冷战",
      "幽默",
      "搭档"
    ],
    "oneLine": "1960年代,美国CIA特工与苏联KGB特工被迫联手,阻止一个神秘组织引爆第三次世界大战。"
  },
  {
    "title": "湖深之处",
    "href": "details/movie-0449.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "水库",
      "悬疑",
      "打捞队",
      "人性",
      "黑色电影"
    ],
    "oneLine": "水库打捞队在湖底捞起一辆沉车,里面坐着的人,是三年前就该死在另一座城市的女尸。"
  },
  {
    "title": "迷失方向",
    "href": "details/movie-0450.html",
    "cover": "./150.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "荒野",
      "迷路",
      "信任危机"
    ],
    "oneLine": "五名背包客在苏格兰高地迷路,对讲机里突然传来声音:“你们中有一个人不属于这个队伍。"
  },
  {
    "title": "印第安人乔",
    "href": "details/movie-0451.html",
    "cover": "./1.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "原住民",
      "殖民",
      "生存",
      "身份认同"
    ],
    "oneLine": "混血少年乔在白人城镇与保留地之间挣扎求生,他既是族人眼中的叛徒,也是白人眼中的异类。"
  },
  {
    "title": "大盗明星梦",
    "href": "details/movie-0452.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "笨贼",
      "娱乐圈",
      "假扮",
      "爆笑",
      "追梦"
    ],
    "oneLine": "三个笨贼为了洗钱,投资拍摄一部电影并亲自出演,没想到竟误打误撞入围了国际电影节。"
  },
  {
    "title": "纽约侠客行",
    "href": "details/movie-0453.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "唐人街",
      "外卖郎",
      "超级英雄",
      "接地气",
      "群像"
    ],
    "oneLine": "纽约唐人街的五名外卖郎,穿上特制外卖服,化身“电驴侠”,专治街头恶霸。"
  },
  {
    "title": "姐妹情深",
    "href": "details/movie-0454.html",
    "cover": "./4.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "姐妹",
      "遗产",
      "竞争",
      "和解"
    ],
    "oneLine": "父亲遗嘱要求三姐妹在30天内花光10亿卢比才能继承遗产,但每花一笔都会让另一个人的梦想破灭。"
  },
  {
    "title": "卡皮可寓言",
    "href": "details/movie-0455.html",
    "cover": "./5.jpg",
    "year": "2022",
    "region": "日本",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "拟人动物",
      "阶级",
      "乌托邦",
      "黑色童话",
      "反讽"
    ],
    "oneLine": "一座所有动物都幸福的乌托邦小镇,直到一头被遗忘的驴子想起了自己曾是人类。"
  },
  {
    "title": "结城友奈是勇者第二季",
    "href": "details/movie-0456.html",
    "cover": "./6.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "勇者部",
      "献祭",
      "友情",
      "续作",
      "虐心"
    ],
    "oneLine": "友奈再次成为勇者,但她发现自己每一次战斗都在消耗身边的人的记忆,包括恋人东乡。"
  },
  {
    "title": "美国交响曲",
    "href": "details/movie-0457.html",
    "cover": "./7.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "指挥家",
      "移民家庭",
      "古典乐",
      "梦想"
    ],
    "oneLine": "华裔少年从纽约地下拳场打到卡内基音乐厅指挥台,他用拳头养活家人,用指挥棒救赎自己。"
  },
  {
    "title": "旧爱新欢一家亲",
    "href": "details/movie-0458.html",
    "cover": "./8.jpg",
    "year": "2002",
    "region": "中国台湾",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "多角恋",
      "再婚家庭",
      "搞笑"
    ],
    "oneLine": "离婚后的夫妻分别带着新欢住进同一栋楼,每天上演爆笑修罗场。"
  },
  {
    "title": "吸血黑王子",
    "href": "details/movie-0459.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "吸血鬼",
      "宫斗",
      "契约婚姻"
    ],
    "oneLine": "朝鲜王朝末代王子被吸血鬼咬伤后沉睡百年,醒来发现自己的家族成了财阀,必须娶宿敌之女才能拿回血统。"
  },
  {
    "title": "私人世界",
    "href": "details/movie-0460.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "定制梦境",
      "隐私",
      "离婚"
    ],
    "oneLine": "夫妻婚姻破裂,却因为“梦境定制服务”的合同纠纷,被迫每晚共享同一个美梦。"
  },
  {
    "title": "邻居的狗吠声",
    "href": "details/movie-0461.html",
    "cover": "./11.jpg",
    "year": "2022",
    "region": "法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "巴黎",
      "公寓",
      "噪音",
      "邻里"
    ],
    "oneLine": "一名失眠的作家被邻居家的狗叫声折磨得精神崩溃,写下的恐怖小说情节竟在现实中一一应验。"
  },
  {
    "title": "乔安娜·林莉的日本之旅",
    "href": "details/movie-0462.html",
    "cover": "./12.jpg",
    "year": "2023",
    "region": "英国",
    "type": "纪录剧集",
    "category": "海外精选",
    "tags": [
      "美食",
      "匠人",
      "文化探访",
      "公路片"
    ],
    "oneLine": "资深美食评论家乔安娜·林莉在失去味觉后,踏上日本寻找“一生之味”的治愈旅程。"
  },
  {
    "title": "炼情局中局",
    "href": "details/movie-0463.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网剧",
    "category": "国产短剧",
    "tags": [
      "古代特工",
      "替身新娘",
      "谍中谍",
      "虐恋"
    ],
    "oneLine": "朝廷最神秘的情感纠察机构“炼情局”中,女特工奉命色诱权臣,却发现自己才是被算计的猎物。"
  },
  {
    "title": "恐怖监狱",
    "href": "details/movie-0464.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "监狱",
      "灵异",
      "监狱传说",
      "密室",
      "高概念"
    ],
    "oneLine": "新狱警发现,每晚凌晨三点,死牢的墙壁里都会传出敲击声,一下不多,一下不少。"
  },
  {
    "title": "山炮驾到2之灵魂转移",
    "href": "details/movie-0465.html",
    "cover": "./15.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "国产短剧",
    "tags": [
      "土味科幻",
      "身份互换",
      "恶搞"
    ],
    "oneLine": "东北老铁意外获得“灵魂转移APP”,把村长的灵魂传进了村花的母猪体内。"
  },
  {
    "title": "寻枪",
    "href": "details/movie-0466.html",
    "cover": "./16.jpg",
    "year": "2002",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑色幽默",
      "寻枪",
      "小人物",
      "方言"
    ],
    "oneLine": "小镇警察丢了配枪,必须在24小时内找回,否则枪就会自己去杀人。"
  },
  {
    "title": "邮差(1995年电影)",
    "href": "details/movie-0467.html",
    "cover": "./17.jpg",
    "year": "1995",
    "region": "中国大陆/香港",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "文革",
      "乡村",
      "父子情",
      "人性"
    ],
    "oneLine": "文革末期,一个沉默的老邮差带着叛逆的儿子走上崎岖山路,传递的不仅是信件更是人心。"
  },
  {
    "title": "特种兵归来1:血狼之怒",
    "href": "details/movie-0468.html",
    "cover": "./18.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "动作冒险",
    "tags": [
      "军事",
      "复仇",
      "硬核动作",
      "网大标杆"
    ],
    "oneLine": "退役“血狼”小队重聚,只为跨境追猎那个用生化武器屠杀战友未婚妻的雇佣军。"
  },
  {
    "title": "黑鸟",
    "href": "details/movie-0469.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "美国/德国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "监狱",
      "连环杀手",
      "卧底",
      "心理战",
      "真实改编"
    ],
    "oneLine": "为了减刑,被定罪的毒贩必须装成精神病患者,进入戒备最森严的监狱,套取连环杀手的藏尸地点。"
  },
  {
    "title": "幻梦情",
    "href": "details/movie-0470.html",
    "cover": "./20.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "造梦",
      "暗恋",
      "甜虐",
      "双向奔赴"
    ],
    "oneLine": "一个能进入他人梦境的女孩,发现暗恋男神的梦里,自己竟是主角。"
  },
  {
    "title": "神奇飞书",
    "href": "details/movie-0471.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "书籍",
      "魔法",
      "治愈",
      "冒险",
      "童话"
    ],
    "oneLine": "一个讨厌读书的小男孩误入地下图书馆,发现这里的书会飞会说话,但它们正在被“遗忘虫”吃掉。"
  },
  {
    "title": "听不见的胜利",
    "href": "details/movie-0472.html",
    "cover": "./22.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "聋人篮球",
      "残障体育",
      "父女",
      "逆袭",
      "真实改编"
    ],
    "oneLine": "聋人女孩靠读唇语打进国家队,她的父亲用十年时间学会了她“听不见的掌声”。"
  },
  {
    "title": "杀出狂人镇1973",
    "href": "details/movie-0473.html",
    "cover": "./23.jpg",
    "year": "1973",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "丧尸",
      "军方秘密",
      "封闭小镇",
      "集体癔症"
    ],
    "oneLine": "军事毒气泄漏,小镇居民集体发疯,幸存者必须在黎明前杀出血路。"
  },
  {
    "title": "魔幻波",
    "href": "details/movie-0474.html",
    "cover": "./24.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "超能力高中",
      "广播社",
      "中二病拯救世界",
      "台式笑点"
    ],
    "oneLine": "五个高中边缘人意外获得“魔幻波”超能力,只要对着麦克风说唱就能改变现实。"
  },
  {
    "title": "盲侠怒斩七大盗",
    "href": "details/movie-0475.html",
    "cover": "./25.jpg",
    "year": "1971",
    "region": "香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "邵氏",
      "独臂刀",
      "复仇"
    ],
    "oneLine": "双目失明的刀客为妻报仇,仅凭听声辨位连斩七名大盗,最后一刀落下前却停了手。"
  },
  {
    "title": "霍华德(电影)",
    "href": "details/movie-0476.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "作曲家",
      "迪士尼",
      "歌词大师",
      "幕后故事",
      "催泪"
    ],
    "oneLine": "迪士尼传奇词作者霍华德·阿什曼的短暂一生,以及他在生命的最后时刻写下的《美女与野兽》。"
  },
  {
    "title": "新扎僵尸追女仔",
    "href": "details/movie-0477.html",
    "cover": "./27.jpg",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "僵尸",
      "无厘头",
      "警匪",
      "恋爱"
    ],
    "oneLine": "一个刚考上的警员被僵尸咬了一口,为了不变成怪物,他必须在月圆之夜前泡到一个纯情处女。"
  },
  {
    "title": "夺命杀机",
    "href": "details/movie-0478.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "密室",
      "法庭戏",
      "精神控制"
    ],
    "oneLine": "一名被指控谋杀的律师,在被告席上通过回忆,让整个法庭变成了凶案现场。"
  },
  {
    "title": "坠入爱河",
    "href": "details/movie-0479.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "反套路",
      "失忆",
      "死神恋爱",
      "治愈"
    ],
    "oneLine": "一个厌世的自杀干预专员,发现自己每次劝下的人其实都是想和她谈恋爱的死神。"
  },
  {
    "title": "罗拉快跑",
    "href": "details/movie-0480.html",
    "cover": "./30.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "时间循环",
      "蝴蝶效应",
      "极限运动",
      "高概念"
    ],
    "oneLine": "为了在20分钟内筹到10万马克救男友,罗拉进入了一个超现实的柏林,每次失败都会重新启动时间,但重启次数只剩三次。"
  },
  {
    "title": "完全陌生人",
    "href": "details/movie-0481.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "社交网络",
      "隐私",
      "人肉搜索",
      "反转",
      "密室"
    ],
    "oneLine": "六位互不相识的网友受邀参加一个游戏,只要坦白所有秘密就能赢取千万奖金,却发现彼此并非完全陌生人。"
  },
  {
    "title": "彩鸾春色",
    "href": "details/movie-0482.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "刺绣",
      "宫廷",
      "女性成长",
      "匠人精神"
    ],
    "oneLine": "一位青楼绣娘凭借绝技入宫,在权力与爱情间以针线为刃,刺破宫廷阴谋。"
  },
  {
    "title": "仙姬送子",
    "href": "details/movie-0483.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "天庭",
      "人仙恋",
      "赎罪之旅",
      "治愈"
    ],
    "oneLine": "织女之女为还人间情债,下凡成为留守儿童们最温柔的“神仙妈妈”。"
  },
  {
    "title": "间谍之道 第一季",
    "href": "details/movie-0484.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "写实",
      "军情六处",
      "权谋"
    ],
    "oneLine": "军情六处的“间谍学校”里,一群菜鸟正在接受训练,但他们不知道,教官本身就是潜伏的双面间谍。"
  },
  {
    "title": "天使小绑匪",
    "href": "details/movie-0485.html",
    "cover": "./35.jpg",
    "year": "2014",
    "region": "法国/比利时",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "荒诞",
      "绑架乌龙",
      "小女孩",
      "破产富翁",
      "温暖"
    ],
    "oneLine": "七岁小女孩为给妈妈凑手术费,一板一眼地绑架了全城最抠门的破产富翁。"
  },
  {
    "title": "班战斯的海盗",
    "href": "details/movie-0486.html",
    "cover": "./36.jpg",
    "year": "2016",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "海盗",
      "诅咒",
      "寻宝",
      "摇滚",
      "骷髅"
    ],
    "oneLine": "一支十八世纪的海盗船被诅咒变成现代摇滚乐队,只有集齐九颗亡灵珍珠才能变回人形。"
  },
  {
    "title": "国道封闭",
    "href": "details/movie-0487.html",
    "cover": "./37.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "恐怖惊悚",
    "tags": [
      "传染病",
      "国道",
      "隔离",
      "求生"
    ],
    "oneLine": "一场暴雨导致台湾中山高全线封闭,被困在隧道里的上百名司机,发现有人感染了变异狂犬病毒。"
  },
  {
    "title": "走出大墙的人",
    "href": "details/movie-0488.html",
    "cover": "./38.jpg",
    "year": "1985",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "刑满释放",
      "改革开放",
      "尊严",
      "重生"
    ],
    "oneLine": "三个刑满释放人员回到社会,面对偏见与饥饿,他们决定用双手砸碎命运的围墙。"
  },
  {
    "title": "罪途3之正义规则",
    "href": "details/movie-0489.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "法外制裁",
      "陪审团",
      "密室推理",
      "社会派"
    ],
    "oneLine": "十二名陌生人被困密室,必须遵循“正义规则”投票决定一桩旧案的真正凶手。"
  },
  {
    "title": "圣堂风云3",
    "href": "details/movie-0490.html",
    "cover": "./40.jpg",
    "year": "2011",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "兄弟反目",
      "终极卧底",
      "跨国犯罪"
    ],
    "oneLine": "沉寂五年的卧底再度被激活,昔日兄弟如今站在法律的两端,展开殊死对决。"
  },
  {
    "title": "浪荡儿",
    "href": "details/movie-0491.html",
    "cover": "./41.jpg",
    "year": "2023",
    "region": "意大利",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "小镇青年",
      "无所事事",
      "友谊",
      "成长"
    ],
    "oneLine": "西西里岛小镇上五个三十岁的“废柴”发小,因一家即将倒闭的游戏厅而被迫面对现实人生。"
  },
  {
    "title": "豆豆笑笑",
    "href": "details/movie-0492.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "儿童",
      "喜剧",
      "幽默",
      "亲情"
    ],
    "oneLine": "七岁男孩豆豆唯一的超能力,是每次说谎都会忍不住大笑,而他必须用这个能力拯救父母婚姻。"
  },
  {
    "title": "在魔王城说晚安",
    "href": "details/movie-0493.html",
    "cover": "./43.jpg",
    "year": "2020",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "囚禁公主",
      "人类魔王",
      "睡眠至上"
    ],
    "oneLine": "被魔王抓走的公主,每天都在想办法搞到更好的被褥和枕头,根本不想逃。"
  },
  {
    "title": "袁天罡之异域妖踪",
    "href": "details/movie-0494.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "国产短剧",
    "tags": [
      "大唐",
      "捉妖",
      "相术",
      "东方奇幻"
    ],
    "oneLine": "袁天罡出使西域,发现丝绸之路上的商队失踪案竟与一种吃梦的异域妖有关。"
  },
  {
    "title": "夜行列车",
    "href": "details/movie-0495.html",
    "cover": "./45.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "密闭空间",
      "连环命案",
      "黑色电影",
      "雨夜"
    ],
    "oneLine": "一辆从哈尔滨开往满洲里的午夜列车上,三位互不相识的乘客接连收到匿名纸条,上面写着同一个死人的名字。"
  },
  {
    "title": "厨房故事",
    "href": "details/movie-0496.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "治愈",
      "深夜食堂",
      "职场",
      "人生百态"
    ],
    "oneLine": "一位失意的米其林大厨跑到即将拆迁的社区食堂打工,发现每一道菜都是一个人的解药。"
  },
  {
    "title": "恐惧药物",
    "href": "details/movie-0497.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "致幻剂",
      "意识入侵",
      "生存游戏"
    ],
    "oneLine": "一种能具现化内心恐惧的药物失控后,七名实验者必须直面最深的梦魇才能存活。"
  },
  {
    "title": "好野人出没,注意!",
    "href": "details/movie-0498.html",
    "cover": "./48.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "都市传说",
      "登山",
      "乡土文化",
      "台味幽默"
    ],
    "oneLine": "几个台北年轻人进山寻找“好野人”(野人),结果发现真正的“野”的,是想要开发山林的财团。"
  },
  {
    "title": "宫心计2深宫计国语",
    "href": "details/movie-0499.html",
    "cover": "./49.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "唐朝",
      "后宫争宠",
      "权谋博弈",
      "姐妹反目"
    ],
    "oneLine": "唐隆政变后,后宫看似平静,一场围绕“尚宫局”改制与龙种归属的暗战悄然开幕。"
  },
  {
    "title": "丢羊",
    "href": "details/movie-0500.html",
    "cover": "./50.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "西北",
      "黑色幽默",
      "村庄",
      "丢失"
    ],
    "oneLine": "西北山村丢了四只羊,全村民疯子般寻找,最后发现羊自己回来了,但没人相信。"
  },
  {
    "title": "剑侠唐璜",
    "href": "details/movie-0501.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "侠盗",
      "浪漫",
      "大男主"
    ],
    "oneLine": "风流成性的贵族纨绔遭陷害假死,化身蒙面侠盗“唐璜”,一边劫富济贫,一边撩遍全城贵妇。"
  },
  {
    "title": "马利与我2",
    "href": "details/movie-0502.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "狗",
      "西部",
      "寻亲",
      "3D动画",
      "治愈"
    ],
    "oneLine": "史上最捣蛋的拉布拉多马利转世成了一只西部牧场警犬,它必须帮助主人找到走失的狼崽,才能重返天堂。"
  },
  {
    "title": "德州崛起",
    "href": "details/movie-0503.html",
    "cover": "./53.jpg",
    "year": "2015",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "德州独立",
      "西部拓荒",
      "战争",
      "真实历史",
      "史诗"
    ],
    "oneLine": "19世纪初,一群冒险者深入墨西哥领土德克萨斯,为土地和自由掀起独立战争。"
  },
  {
    "title": "神父俱乐部",
    "href": "details/movie-0504.html",
    "cover": "./54.jpg",
    "year": "2015",
    "region": "智利/德国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "宗教批判",
      "封闭空间",
      "罪与罚",
      "黑色幽默"
    ],
    "oneLine": "海边一所专门收容“有污点”神父的疗养院里,一名新来的“犬类训练师”打破了所有人表面平静的赎罪生活。"
  },
  {
    "title": "千面杀人魔",
    "href": "details/movie-0505.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "易容术",
      "猫鼠游戏",
      "身份窃取"
    ],
    "oneLine": "FBI侧写师在追捕一名能完美易容的连环杀手时,发现对方正在一步步取代自己的生活。"
  },
  {
    "title": "证人",
    "href": "details/movie-0506.html",
    "cover": "./56.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "目击证人",
      "自闭症少女",
      "密室杀人",
      "法庭对决"
    ],
    "oneLine": "一名杀人案唯一的目击者,是患有自闭症的15岁少女,律师必须让她开口作证。"
  },
  {
    "title": "网约车司机",
    "href": "details/movie-0507.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "城市夜行",
      "拼车奇遇",
      "反转叙事",
      "底层群像",
      "黑色幽默"
    ],
    "oneLine": "一名下岗工人开网约车谋生,一夜之间接到四位神秘拼车客,每个人都与一桩失踪案有关。"
  },
  {
    "title": "授她以柄",
    "href": "details/movie-0508.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "师徒",
      "养成",
      "复仇",
      "权力博弈"
    ],
    "oneLine": "太傅为培养一个完美女帝,亲手教她权术与冷血,却在登基大典上被她用他教的计谋废去双手。"
  },
  {
    "title": "江南丧尸",
    "href": "details/movie-0509.html",
    "cover": "./59.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "丧尸",
      "江南",
      "金融",
      "病毒",
      "生存"
    ],
    "oneLine": "一种通过欲望传播的丧尸病毒在首尔江南区爆发,精英阶层变成了最恐怖的怪物。"
  },
  {
    "title": "想爱就爱2",
    "href": "details/movie-0510.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "同性",
      "婚后",
      "家庭压力"
    ],
    "oneLine": "在伦敦登记结婚的她们回到泰国乡村,必须在七天里让保守的父母“意外”接受这段婚姻。"
  },
  {
    "title": "天老地荒不了情",
    "href": "details/movie-0511.html",
    "cover": "./61.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "轮回记忆",
      "山地传说",
      "生生世世",
      "催泪"
    ],
    "oneLine": "排湾族青年在山中捡到一枚日据时期的金属纽扣,每次握住它,就会看到自己前世作为日本警察的另一段禁忌之恋。"
  },
  {
    "title": "再生缘国语",
    "href": "details/movie-0512.html",
    "cover": "./62.jpg",
    "year": "2002",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "才女",
      "女扮男装",
      "经典翻拍"
    ],
    "oneLine": "才女孟丽君女扮男装考中状元,却在朝堂上遇见了自己逃婚的未婚夫。"
  },
  {
    "title": "革命在耶诞前夕",
    "href": "details/movie-0513.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "西班牙/法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "圣诞",
      "反叛",
      "密室",
      "阶层对立",
      "黑色幽默"
    ],
    "oneLine": "平安夜,五个不同阶层的人被困在电梯里,而电梯外正爆发一场推翻消费主义的血腥革命。"
  },
  {
    "title": "有车好好开",
    "href": "details/movie-0514.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "网约车",
      "多线叙事",
      "城市夜景",
      "小人物",
      "荒诞"
    ],
    "oneLine": "一个疲惫的代驾,一夜之间接连拉上了杀手、窃贼和逃婚的新娘,后座成了修罗场。"
  },
  {
    "title": "锄奸记",
    "href": "details/movie-0515.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "民国",
      "刺杀",
      "锄奸",
      "密室博弈"
    ],
    "oneLine": "1941年上海,一个胆小如鼠的报社校对被误认为顶级杀手,被汉奸头子请进公馆“谈判”,他必须演下去才能活命。"
  },
  {
    "title": "凯文·哈特:听我解释",
    "href": "details/movie-0516.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影/综艺",
    "category": "喜剧家庭",
    "tags": [
      "单口喜剧",
      "生活琐事",
      "家庭",
      "自嘲",
      "高能量"
    ],
    "oneLine": "凯文·哈特这次要解释的,不是绯闻,而是他为什么连自己家的智能马桶都搞不定。"
  },
  {
    "title": "旺角监狱",
    "href": "details/movie-0517.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "卧底风云",
      "黑帮械斗",
      "九龙城寨美学",
      "兄弟情",
      "暴力美学"
    ],
    "oneLine": "旺角一栋旧楼被黑帮改造成私牢,卧底警察打入内部后发现犯人里有人比他更想当警察。"
  },
  {
    "title": "老虎崛起",
    "href": "details/movie-0518.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "老虎",
      "保护",
      "复仇",
      "丛林",
      "硬汉"
    ],
    "oneLine": "部落男孩的父亲被偷猎者杀害,男孩养大的孟加拉虎带领他踏上了复仇之路。"
  },
  {
    "title": "狼心狗肺",
    "href": "details/movie-0519.html",
    "cover": "./69.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "器官移植",
      "换心",
      "人格改变",
      "记忆转移",
      "伦理"
    ],
    "oneLine": "冷血企业家换心后变成善良暖男,而心脏捐赠者的女友却找上门来指控他谋杀。"
  },
  {
    "title": "生人回避2",
    "href": "details/movie-0520.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "丧尸",
      "隔离区",
      "母女",
      "变异"
    ],
    "oneLine": "丧尸爆发五年后,隔离区里的母亲发现女儿不是感染了病毒,而是变成了另一种东西。"
  },
  {
    "title": "蜘蛛侠第二季",
    "href": "details/movie-0521.html",
    "cover": "./71.jpg",
    "year": "1995",
    "region": "美国",
    "type": "动画剧集",
    "category": "动作冒险",
    "tags": [
      "超级英雄",
      "平行宇宙",
      "宿敌"
    ],
    "oneLine": "当平行宇宙的蜘蛛侠们开始离奇消失,我们的彼得·帕克必须找到跨维度猎杀者的真面目。"
  },
  {
    "title": "人生几度秋凉",
    "href": "details/movie-0522.html",
    "cover": "./72.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "TV 剧集",
    "category": "国产短剧",
    "tags": [
      "四合院",
      "文革后",
      "知青",
      "养老"
    ],
    "oneLine": "北京一处老四合院里三户人家,从七十年代末到新世纪初,为房、为钱、也为情纠缠半生。"
  },
  {
    "title": "一场遇见爱情的旅行",
    "href": "details/movie-0523.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "房车旅行",
      "治愈系",
      "网红与素人",
      "自驾路线",
      "慢综艺质感"
    ],
    "oneLine": "一个准备自杀的过气网红,搭上了一位要带父亲骨灰回家的长途司机。"
  },
  {
    "title": "偶得回响",
    "href": "details/movie-0524.html",
    "cover": "./74.jpg",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "亲情",
      "成长",
      "音乐",
      "生命教育",
      "温暖治愈"
    ],
    "oneLine": "一对被迫共同照顾“植物人”父亲的陌生兄妹,通过父亲创作的一首童谣,拼凑出他隐秘而深沉的爱。"
  },
  {
    "title": "我们从乌拉尔来",
    "href": "details/movie-0525.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "二战",
      "迁徙",
      "亲情"
    ],
    "oneLine": "二战爆发,一名苏联母亲带着四个孩子,从乌拉尔山徒步穿越西伯利亚寻找前线丈夫。"
  },
  {
    "title": "小超人梦",
    "href": "details/movie-0526.html",
    "cover": "./76.jpg",
    "year": "2021",
    "region": "印度",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "贫民窟",
      "超级英雄",
      "梦想",
      "宝莱坞",
      "社会讽刺"
    ],
    "oneLine": "贫民窟男孩捡到一件“飞行服”道具,穿上后意外摔断腿,他却因此成了倡导无障碍出行的民间英雄。"
  },
  {
    "title": "禁断动画18",
    "href": "details/movie-0527.html",
    "cover": "./77.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "都市传说",
      "网络诅咒",
      "互动式",
      "伪纪录"
    ],
    "oneLine": "一段被政府封存的动画正在暗网传播,看完第18帧的人都会在现实中消失。"
  },
  {
    "title": "第一步",
    "href": "details/movie-0528.html",
    "cover": "./78.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "亲子关系",
      "励志",
      "体育",
      "温情"
    ],
    "oneLine": "车祸失去双腿的儿子,逼着同样在意外中跛脚的父亲,一起完成一场马拉松。"
  },
  {
    "title": "赤裸并存在著",
    "href": "details/movie-0529.html",
    "cover": "./79.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "黑白",
      "身体",
      "存在主义",
      "激进",
      "争议"
    ],
    "oneLine": "一名行为艺术家决定在博物馆里赤裸生活365天,全世界都在围观这场关于“存在”的残酷实验。"
  },
  {
    "title": "极限控制",
    "href": "details/movie-0530.html",
    "cover": "./80.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "赛博格",
      "远程操控",
      "反乌托邦",
      "近未来"
    ],
    "oneLine": "近未来,一名黑客发现政府能远程操控植入所有公民体内的“健康芯片”,让他们变成绝对服从的士兵。"
  },
  {
    "title": "圣诞传说",
    "href": "details/movie-0531.html",
    "cover": "./81.jpg",
    "year": "2007",
    "region": "芬兰/德国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "圣诞老人起源",
      "温情",
      "北欧风光",
      "治愈"
    ],
    "oneLine": "一个因失去家人而变得孤僻的木匠,如何一步步成为了全世界孩子最爱的圣诞老人。"
  },
  {
    "title": "无尽的控诉",
    "href": "details/movie-0532.html",
    "cover": "./82.jpg",
    "year": "2013",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "复仇",
      "法庭戏",
      "时间循环",
      "绝望"
    ],
    "oneLine": "一个失去女儿的母亲发现,杀死女儿的凶手每七天就会被释放,而每一次释放都伴随着新的命案。"
  },
  {
    "title": "天魔第三集",
    "href": "details/movie-0533.html",
    "cover": "./83.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "恶魔",
      "预言",
      "末日",
      "续集"
    ],
    "oneLine": "成年后的撒旦之子踏入政坛,用超自然手段操控第三次世界大战。"
  },
  {
    "title": "我们的第一个圣诞节",
    "href": "details/movie-0534.html",
    "cover": "./84.jpg",
    "year": "2023",
    "region": "加拿大",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "假日恋情",
      "闪婚",
      "家族秘密",
      "温馨治愈"
    ],
    "oneLine": "认识仅三天的情侣决定闪婚,却在第一个圣诞家庭聚会上发现彼此父母曾是初恋。"
  },
  {
    "title": "超完美社区",
    "href": "details/movie-0535.html",
    "cover": "./85.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "乌托邦",
      "克隆人",
      "监控社会",
      "郊区恐怖"
    ],
    "oneLine": "全美排名第一的宜居社区里,新人发现所有邻居都是同一个人的不同年龄克隆体。"
  },
  {
    "title": "刺客公敌",
    "href": "details/movie-0536.html",
    "cover": "./86.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "杀手",
      "相亲",
      "误会",
      "全球通缉",
      "狼人杀"
    ],
    "oneLine": "世界第一杀手金盆洗手去相亲,结果相亲对象全是伪装成普通人的同行,一餐饭死了十七个杀手。"
  },
  {
    "title": "青春残酷物语",
    "href": "details/movie-0537.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "校园霸凌",
      "阶级差异",
      "复仇",
      "悲剧美学"
    ],
    "oneLine": "转学少女为了不被欺负而接近校园底层的受气包,两人结成的脆弱同盟最终以死亡收场。"
  },
  {
    "title": "微笑威士忌",
    "href": "details/movie-0538.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "爱尔兰",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "乡村酒吧",
      "乐队",
      "中年危机",
      "治愈"
    ],
    "oneLine": "一个破产的都柏林金融精英,回到家乡接手濒临倒闭的酒吧,却发现这里的灵魂是每周五晚上的“烂仔乐队”。"
  },
  {
    "title": "满清禁宫奇案",
    "href": "details/movie-0539.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "宫廷",
      "秘闻",
      "连环命案",
      "历史改编"
    ],
    "oneLine": "光绪大婚前夜,紫禁城内接连出现被剥去脸皮的宫女尸体,凶手指向一位早该死去三十年的妃子。"
  },
  {
    "title": "不可抗力",
    "href": "details/movie-0540.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "暴风雪",
      "密室",
      "道德困境",
      "社会缩影"
    ],
    "oneLine": "一场暴风雪困住一家豪华滑雪酒店,当救援因“不可抗力”条款被无限期拖延时,富人与穷人开始了两套生存法则。"
  },
  {
    "title": "恶霸警察",
    "href": "details/movie-0541.html",
    "cover": "./91.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "黑色电影",
      "腐败警察",
      "以暴制暴",
      "反转"
    ],
    "oneLine": "一个收保护费的恶霸警察被降职到港口,却无意中发现了一桩涉及整个警队养老基金的连环杀人案。"
  },
  {
    "title": "气体人第一号",
    "href": "details/movie-0542.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "变身",
      "气体",
      "复仇",
      "昭和翻拍"
    ],
    "oneLine": "实验室事故让他变成无形气体,能穿透一切,但也将永远无法被任何人触摸。"
  },
  {
    "title": "奇幻旅程",
    "href": "details/movie-0543.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "英国/美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "火车旅行",
      "平行世界",
      "治愈",
      "祖孙情",
      "手绘风"
    ],
    "oneLine": "男孩登上爷爷留下的魔法列车,每节车厢都是一个濒死的梦境,他必须唤醒它们。"
  },
  {
    "title": "英格丽褒曼的私语",
    "href": "details/movie-0544.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "瑞典/美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "英格丽褒曼",
      "秘密录音带",
      "婚外情",
      "好莱坞黄金时代",
      "女性欲望"
    ],
    "oneLine": "根据真实录音带改编,揭露好莱坞女神英格丽褒曼与意大利导演罗西里尼那段被全世界唾骂的婚外情私密对话。"
  },
  {
    "title": "以恶之名",
    "href": "details/movie-0545.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "校园暴力",
      "复仇",
      "社会派"
    ],
    "oneLine": "一所贵族学校里,被霸凌致死的男生“复活”归来,逐个邀请当年的施暴者参加他的“葬礼”。"
  },
  {
    "title": "嘉年华大盗",
    "href": "details/movie-0546.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "盗窃",
      "狂欢节",
      "以恶制恶"
    ],
    "oneLine": "每年狂欢节,一群变装大佬都会盗取贪官的赃款,然后在面具下躲过最严密的追捕。"
  },
  {
    "title": "寄生魔种",
    "href": "details/movie-0547.html",
    "cover": "./97.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "外星真菌",
      "人体改造",
      "末世逃生",
      "寄生意识",
      "血肉模糊"
    ],
    "oneLine": "外星真菌入侵人体后不是杀死宿主,而是强迫宿主变成完美的杀人机器。"
  },
  {
    "title": "凯恩号哗变",
    "href": "details/movie-0548.html",
    "cover": "./98.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "海军",
      "哗变",
      "军事法庭",
      "领导力"
    ],
    "oneLine": "二战期间,凯恩号扫雷舰的副舰长在台风中解除了舰长的指挥权,回国后却被告上了军事法庭。"
  },
  {
    "title": "煎饼侠",
    "href": "details/movie-0549.html",
    "cover": "./99.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "超级英雄",
      "恶搞",
      "明星客串"
    ],
    "oneLine": "一个过气演员为了翻红,决定拉着几个狐朋狗友,拍一部史上最烂的超级英雄电影。"
  },
  {
    "title": "真正胜负",
    "href": "details/movie-0550.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "电子竞技",
      "复仇",
      "热血"
    ],
    "oneLine": "被战队背叛的传奇中单选手,隐姓埋名去当外卖员,只为组建一支“垃圾战队”击垮前东家。"
  },
  {
    "title": "神盾局特工第七季",
    "href": "details/movie-0551.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "漫威",
      "时间旅行",
      "团队作战",
      "完结季"
    ],
    "oneLine": "神盾局最后的特工们被困在时间循环中,必须在一次又一次的重复里找到摧毁长生人的唯一方法。"
  },
  {
    "title": "刀剑神域:序列之争",
    "href": "details/movie-0552.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "VR",
      "AR",
      "游戏",
      "剧场版"
    ],
    "oneLine": "新AR游戏“序列之争”入侵现实世界,桐人发现失忆的亚丝娜被改造成了游戏里的最终BOSS。"
  },
  {
    "title": "双世美姬",
    "href": "details/movie-0553.html",
    "cover": "./103.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "穿越",
      "双女主",
      "身份互换"
    ],
    "oneLine": "现代美妆博主与古代青楼花魁互换灵魂,两种人生互相救赎。"
  },
  {
    "title": "李碧华鬼魅系列:奇幻夜",
    "href": "details/movie-0554.html",
    "cover": "./104.jpg",
    "year": "2013",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "李碧华",
      "奇情",
      "三段式"
    ],
    "oneLine": "三个由李碧华原著改编的短片组成,旧书店的黑猫、地铁站的录像带、以及一场推迟了三十年的同学会,藏着最寒彻骨的恶意。"
  },
  {
    "title": "致我亲爱的马切洛",
    "href": "details/movie-0555.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "意大利/法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "情书",
      "时间旅行",
      "意大利电影史",
      "遗憾"
    ],
    "oneLine": "2023 年的罗马,女孩通过一个旧邮箱给 1960 年的导演马切洛·马斯楚安尼写信,竟收到了回复。"
  },
  {
    "title": "无法抗拒的爱",
    "href": "details/movie-0556.html",
    "cover": "./106.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "宿命",
      "失忆",
      "替身",
      "虐恋"
    ],
    "oneLine": "一个女人被植入了亡夫的记忆,醒来后爱上了记忆里的自己,但那个“自己”根本不是她。"
  },
  {
    "title": "豪斯医生第六季",
    "href": "details/movie-0557.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "豪斯",
      "精神病院",
      "回归",
      "医疗谜题"
    ],
    "oneLine": "进入精神病院的豪斯要治疗自己,而他的病人是一个坚信自己是“上帝”的疯子。"
  },
  {
    "title": "降伏魔女的手段",
    "href": "details/movie-0558.html",
    "cover": "./108.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "职场",
      "魔法",
      "反套路",
      "霸道总裁",
      "轻松下饭"
    ],
    "oneLine": "社畜男主意外发现,自己那个冷酷无情的女魔头上司,其实是一个因为失恋而封印魔力、跑来人间体验生活的真·魔女。"
  },
  {
    "title": "男人真命苦",
    "href": "details/movie-0559.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "中年裁员",
      "单亲爸爸",
      "父子关系",
      "底层挣扎",
      "温情"
    ],
    "oneLine": "被公司裁员的单亲爸爸,为了不丢脸每天假装上班,在公园和便利店之间消磨一整天。"
  },
  {
    "title": "象牙山的好人们",
    "href": "details/movie-0560.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "东北",
      "群像",
      "乡村振兴"
    ],
    "oneLine": "为了竞选“象牙山十大好人”,村里每个人的“好事”都变得不那么单纯了。"
  },
  {
    "title": "乐士浮生录2 名扬四海",
    "href": "details/movie-0561.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "古巴/美国",
    "type": "纪录片",
    "category": "海外精选",
    "tags": [
      "拉丁音乐",
      "逐梦",
      "老年乐团",
      "文化传承"
    ],
    "oneLine": "二十年后,那支震惊世界的古巴乐团的二代成员,带着融合嘻哈的颂乐,再次出征世界舞台。"
  },
  {
    "title": "强棒奶娃",
    "href": "details/movie-0562.html",
    "cover": "./112.jpg",
    "year": "2005",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "婴儿",
      "棒球",
      "搞笑",
      "天才",
      "合家欢"
    ],
    "oneLine": "一个拥有超强运动天赋的婴儿,被一对落魄夫妻收养,他带领一群老头击败了棒球界的“邪恶帝国”。"
  },
  {
    "title": "真相1960",
    "href": "details/movie-0563.html",
    "cover": "./113.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "1960年代",
      "新闻调查",
      "政治黑幕",
      "女记者"
    ],
    "oneLine": "1960年大选前夕,一名女记者在调查政坛丑闻时意外发现了一份可以改写美国历史的秘密录音带。"
  },
  {
    "title": "五月碧云天",
    "href": "details/movie-0564.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "乡土文学",
      "老兵",
      "食安问题",
      "父子和解"
    ],
    "oneLine": "一位患有阿尔茨海默症的外省老兵,为了给孙女做一顿“最安全的饭”,执意要在城市废墟中开垦一片稻田。"
  },
  {
    "title": "老妈上路",
    "href": "details/movie-0565.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "母女",
      "公路片",
      "癌症",
      "和解"
    ],
    "oneLine": "毒舌老妈确诊绝症后,绑架了繁忙的女儿,开着破旧房车进行最后一次横跨美国的旅行。"
  },
  {
    "title": "红牝",
    "href": "details/movie-0566.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "二战",
      "女性",
      "禁忌恋"
    ],
    "oneLine": "1943年的巴黎,一位犹太女孩藏身于纳粹军官的别墅,却与军官年轻的妻子发展出一段致命的感情。"
  },
  {
    "title": "机器肉鸡第六季",
    "href": "details/movie-0567.html",
    "cover": "./117.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "category": "动画少儿",
    "tags": [
      "恶搞",
      "玩偶",
      "流行文化",
      "无厘头"
    ],
    "oneLine": "当复活节兔子发起核战争,芭比娃娃成了废土唯一的女武神。"
  },
  {
    "title": "贫民窟的百万富翁",
    "href": "details/movie-0568.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "印度/英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "游戏",
      "命运",
      "记忆",
      "社会底层"
    ],
    "oneLine": "孟买贫民窟出身的洗碗工,在被拷打逼问为何能答对《谁想成为百万富翁》时,回忆起了每一道题背后的血泪人生。"
  },
  {
    "title": "远大前程2023",
    "href": "details/movie-0569.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集/迷你剧",
    "category": "海外精选",
    "tags": [
      "狄更斯",
      "现代改编",
      "黑人男主",
      "伦敦阶级"
    ],
    "oneLine": "将狄更斯原著搬到2023年的伦敦,孤儿皮普成了一名梦想进入科技新贵的黑人外卖小哥,神秘的赞助人隐藏在暗网中。"
  },
  {
    "title": "性爱特务",
    "href": "details/movie-0570.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "近未来",
      "身份认知",
      "大尺度"
    ],
    "oneLine": "近未来,一名被植入性爱芯片的特务在执行任务时觉醒自我意识,开始追杀制造她的机构。"
  },
  {
    "title": "完美无瑕",
    "href": "details/movie-0571.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "AI换脸",
      "整形医院",
      "偷拍",
      "女性复仇",
      "数字暴力"
    ],
    "oneLine": "一家号称“完美无瑕”的顶级整形医院,实际上用AI换脸技术把客户的脸卖给色情网站。"
  },
  {
    "title": "岸边露伴卢浮宫之行",
    "href": "details/movie-0572.html",
    "cover": "./122.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "JOJO衍生",
      "漫改",
      "艺术犯罪",
      "超能力",
      "法国"
    ],
    "oneLine": "漫画家岸边露伴为解开祖母遗言之谜闯入卢浮宫禁地,发现一幅会吃掉观众灵魂的画。"
  },
  {
    "title": "爱的权利",
    "href": "details/movie-0573.html",
    "cover": "./123.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "伦理",
      "亲情羁绊",
      "遗产继承",
      "三角关系"
    ],
    "oneLine": "一场心脏移植手术,让她必须在亡夫的挚爱与弟弟的遗愿之间选择谁能“合法”继续爱她。"
  },
  {
    "title": "你马甲掉了,幽皇陛下",
    "href": "details/movie-0574.html",
    "cover": "./124.jpg",
    "year": "2023",
    "region": "中国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "马甲文",
      "穿书",
      "女强",
      "搞笑"
    ],
    "oneLine": "她穿书成了暴虐幽皇的炮灰皇后,每天兢兢业业扮演怯懦受气包,直到暴皇在他面前跪下,喊了声“主人”。"
  },
  {
    "title": "印第安夏日",
    "href": "details/movie-0575.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "加拿大/法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "原住民",
      "身份认同",
      "回乡",
      "治愈"
    ],
    "oneLine": "一个被白人家庭收养的原住民女孩,在“印第安夏日”的暖流中回到出生地,发现自己的生母一直在等她“归来”。"
  },
  {
    "title": "矢在弦上第一季",
    "href": "details/movie-0576.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "狙击手",
      "连环凶杀",
      "密码学"
    ],
    "oneLine": "退役狙击手变身神探,他用子弹轨迹破案,而连环杀手也用同样的方式向他宣战。"
  },
  {
    "title": "终极护卫战",
    "href": "details/movie-0577.html",
    "cover": "./127.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "机甲",
      "保镖",
      "近未来"
    ],
    "oneLine": "顶尖保镖受雇保护能预知死亡的少女,却发现刺杀她的竟是未来自己的机甲。"
  },
  {
    "title": "浪漫三人行",
    "href": "details/movie-0578.html",
    "cover": "./128.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "开放式关系",
      "巴黎爱情",
      "三角恋",
      "哲学对白",
      "法式浪漫"
    ],
    "oneLine": "一对结婚十年的夫妻决定尝试开放式婚姻,当丈夫的情人搬进主卧后,三人竟然都过得比以前更好了。"
  },
  {
    "title": "编剧工坊",
    "href": "details/movie-0579.html",
    "cover": "./129.jpg",
    "year": "2017",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "编剧",
      "剧本杀",
      "校园",
      "师生",
      "心理"
    ],
    "oneLine": "一名陷入创作瓶颈的剧作家在一所高中开设剧本工坊,学生们集体创作的悬疑剧本,细节竟与三年前的一桩校园失踪案完全重合。"
  },
  {
    "title": "超人前传第五季",
    "href": "details/movie-0580.html",
    "cover": "./130.jpg",
    "year": "2005",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "超级英雄",
      "青春成长",
      "氪星",
      "宿命"
    ],
    "oneLine": "第五季,克拉克终于穿上了红蓝战衣,但他发现最大的敌人不是莱克斯·卢瑟,而是自己体内失控的氪星能量。"
  },
  {
    "title": "声临其境第二季",
    "href": "details/movie-0581.html",
    "cover": "./131.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺/真人秀",
    "category": "国产短剧",
    "tags": [
      "配音",
      "演员",
      "声音演技",
      "竞演",
      "综艺"
    ],
    "oneLine": "第二季引入“盲选”赛制,演员只凭声音对决,观众投票决定谁将获得“年度声咖”。"
  },
  {
    "title": "我们恋爱的履历",
    "href": "details/movie-0582.html",
    "cover": "./132.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "契约恋爱",
      "前任重逢",
      "娱乐圈",
      "心机"
    ],
    "oneLine": "过气女明星为了翻红,雇佣影帝前男友假扮现男友,却翻出了十年前的分手真相。"
  },
  {
    "title": "真爱如血第二季",
    "href": "details/movie-0583.html",
    "cover": "./133.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "吸血鬼",
      "狼人",
      "禁忌恋",
      "南方哥特",
      "超自然"
    ],
    "oneLine": "吸血鬼与人类的和平协议刚签署半年,路易斯安那沼泽里突然出现了无法被杀死的混血古种。"
  },
  {
    "title": "莉迪亚",
    "href": "details/movie-0584.html",
    "cover": "./134.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "失踪",
      "双胞胎",
      "小镇秘密",
      "多重反转"
    ],
    "oneLine": "失踪七年的女儿莉迪亚突然回家,但母亲坚信:回来的这个人,不是她女儿。"
  },
  {
    "title": "寂静的夏天",
    "href": "details/movie-0585.html",
    "cover": "./135.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "绝症",
      "母女",
      "乡村",
      "蝉鸣",
      "告别"
    ],
    "oneLine": "蝉鸣最响的夏天,患渐冻症的母亲请求女儿提前结束她的生命,条件是教会她听蝉语。"
  },
  {
    "title": "孤岛寻踪",
    "href": "details/movie-0586.html",
    "cover": "./136.jpg",
    "year": "2025",
    "region": "美国/英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "密室",
      "遗产",
      "暴风雪山庄",
      "人心"
    ],
    "oneLine": "十个人收到神秘邀请来到北大西洋的孤岛别墅,主人没有出现,第一个死者出现了。"
  },
  {
    "title": "吸血鬼日记第六季",
    "href": "details/movie-0587.html",
    "cover": "./137.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "吸血鬼",
      "巫术",
      "复活",
      "双子星",
      "超自然"
    ],
    "oneLine": "失去两位挚爱的埃琳娜把自己封锁在人类记忆中,而戴蒙则在地狱般的异次元里挣扎求生。"
  },
  {
    "title": "诱惑假期",
    "href": "details/movie-0588.html",
    "cover": "./138.jpg",
    "year": "2004",
    "region": "德国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "少年犯罪",
      "道德实验",
      "改编自真实事件",
      "阴暗青春"
    ],
    "oneLine": "四个中产家庭的高中生,在一个无人看管的度假小岛上演了一场“人性褪皮”的残酷实验。"
  },
  {
    "title": "寂静之光",
    "href": "details/movie-0589.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "通灵",
      "家族诅咒",
      "灭门悬案",
      "心理创伤"
    ],
    "oneLine": "盲眼钢琴调音师拥有触碰物品看见过去的能力,却在自己新家看见了一桩灭门惨案。"
  },
  {
    "title": "碧亨传:鬼怪的主人",
    "href": "details/movie-0590.html",
    "cover": "./140.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "驱魔",
      "朝鲜王朝",
      "阴阳眼",
      "君臣博弈"
    ],
    "oneLine": "朝鲜时代,一名能看见鬼怪的盲人巫女被暴君征召,去统领百鬼刺杀政敌。"
  },
  {
    "title": "两个杀手真心胶",
    "href": "details/movie-0591.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "杀手",
      "港式无厘头",
      "乌龙",
      "假戏真做",
      "兄弟情"
    ],
    "oneLine": "两个顶级杀手同时接到刺杀对方的任务,却因意外失忆而成了最佳拍档,恢复记忆后他们选择假装不认识对方继续谈恋爱。"
  },
  {
    "title": "阴间大法师",
    "href": "details/movie-0592.html",
    "cover": "./142.jpg",
    "year": "1988",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "蒂姆·伯顿",
      "邪典",
      "恶趣味",
      "鬼魂",
      "荒诞"
    ],
    "oneLine": "一对刚死去的新婚夫妇鬼魂想吓走新住户,却不得不请出最不靠谱的驱魔师——一个流氓鬼。"
  },
  {
    "title": "怒火羔羊国语",
    "href": "details/movie-0593.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "警匪",
      "卧底",
      "国语配音"
    ],
    "oneLine": "一名卧底警察被发现惨死,他的搭档与仇家联手,在黑白两道夹缝中追查真相。"
  },
  {
    "title": "驱魔修女:蛊毒",
    "href": "details/movie-0594.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "泰国/美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "驱魔",
      "修女",
      "南洋巫术",
      "降头",
      "宗教对抗"
    ],
    "oneLine": "梵蒂冈秘密派出的驱魔修女,遭遇比恶魔更棘手的千年蛊毒,信仰与巫术正面对决。"
  },
  {
    "title": "日巡者",
    "href": "details/movie-0595.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "光明与黑暗",
      "法力",
      "命运审判"
    ],
    "oneLine": "光明与黑暗的平衡被打破,一名平凡的莫斯科大学生意外获得了“日巡者”的徽章,被迫卷入两大势力的终极审判。"
  },
  {
    "title": "星语心愿之再爱",
    "href": "details/movie-0596.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "中国大陆,香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "隔空恋爱",
      "人工智能恋人",
      "绝症重逢",
      "催泪续作"
    ],
    "oneLine": "洋葱头转世成为程序员,研发了AI初恋女友,却在代码里发现上一世“星语心愿”的所有记忆。"
  },
  {
    "title": "半路父子",
    "href": "details/movie-0597.html",
    "cover": "./147.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "重组家庭",
      "亲情",
      "催泪",
      "现实主义",
      "治愈"
    ],
    "oneLine": "车祸中互相仇视的一对继父子,灵魂互换后被迫理解对方人生。"
  },
  {
    "title": "小叮当:永无兽传奇",
    "href": "details/movie-0598.html",
    "cover": "./148.jpg",
    "year": "2026",
    "region": "美国",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "仙子",
      "传说生物",
      "信任危机",
      "生态寓言"
    ],
    "oneLine": "仙子世界遭冰封,小叮当必须寻找传说中的永无兽,却发现它是一只被全世界遗弃的丑陋幼崽。"
  },
  {
    "title": "王者天下第四季",
    "href": "details/movie-0599.html",
    "cover": "./149.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "战国",
      "群像",
      "热血",
      "谋略",
      "史诗"
    ],
    "oneLine": "秦国攻赵陷入僵局,飞信队被派往最惨烈的宜安战场,信中直面战神李牧。"
  },
  {
    "title": "绝色小神医2023",
    "href": "details/movie-0600.html",
    "cover": "./150.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "甜宠",
      "中医文化",
      "先婚后爱",
      "逆袭"
    ],
    "oneLine": "京城第一负心汉侯爷,娶了被他退婚的乡下小医女,本以为是个草包,不料竟是能起死回生的神医传人。"
  },
  {
    "title": "犹托邦",
    "href": "details/movie-0601.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "社会实验",
      "惊悚",
      "高概念"
    ],
    "oneLine": "一场“全民幸福”的社会实验下,没有隐私的居民发现,微笑不达标的人会被秘密处决。"
  },
  {
    "title": "天下第一刀",
    "href": "details/movie-0602.html",
    "cover": "./2.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "铸刀传奇",
      "江湖恩怨",
      "断臂重生",
      "冷兵器美学"
    ],
    "oneLine": "为铸一柄天下无敌的刀,他失去了双手;当刀成之时,他却发现最强的“刀”早已不是金属。"
  },
  {
    "title": "少年往事",
    "href": "details/movie-0603.html",
    "cover": "./3.jpg",
    "year": "2003",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "90年代怀旧",
      "初恋",
      "音乐",
      "离散"
    ],
    "oneLine": "1997前夕,两个沉迷古典乐的高中生用一个暑假录制专辑,之后一个赴美,一个失踪。"
  },
  {
    "title": "漂洋过海遇见你",
    "href": "details/movie-0604.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "跨国恋",
      "90年代",
      "笔友",
      "中英文化"
    ],
    "oneLine": "90年代,一个上海姑娘和一个英国男孩因一本漂流日记成为笔友,20年后才发现彼此只隔了一条街。"
  },
  {
    "title": "钢铁飞龙之再见奥特曼",
    "href": "details/movie-0605.html",
    "cover": "./5.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "机甲",
      "奥特曼",
      "英雄联合",
      "外星入侵"
    ],
    "oneLine": "当奥特曼被地球人误解为敌人时,他必须和曾经的对手“钢铁飞龙”小队联手,击退真正的宇宙侵略者。"
  },
  {
    "title": "有泪尽情流",
    "href": "details/movie-0606.html",
    "cover": "./6.jpg",
    "year": "2004",
    "region": "中国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "下岗",
      "女性励志",
      "邻里",
      "朴素"
    ],
    "oneLine": "九十年代东北下岗潮中,三个不同性格的女人被迫走出工厂,为生存和尊严流泪打拼。"
  },
  {
    "title": "赌城艳遇",
    "href": "details/movie-0607.html",
    "cover": "./7.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "拉斯维加斯",
      "一夜情",
      "假结婚",
      "疯狂",
      "公路片"
    ],
    "oneLine": "一个恐婚的华尔街分析师在拉斯维加斯醉酒后与一名脱衣舞男“结婚”,醒来后发现这场婚姻无法撤销,且涉及一笔巨额赌债。"
  },
  {
    "title": "老鼠爱上猫",
    "href": "details/movie-0608.html",
    "cover": "./8.jpg",
    "year": "2003",
    "region": "香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "刘德华",
      "张柏芝",
      "改编",
      "猫鼠",
      "大结局"
    ],
    "oneLine": "当展昭遇上锦毛鼠,猫鼠斗气冤家变爱侣,颠覆经典。"
  },
  {
    "title": "雌雄剑",
    "href": "details/movie-0609.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "双剑合璧",
      "复仇",
      "江湖恩怨",
      "失忆",
      "身份之谜"
    ],
    "oneLine": "一对失忆的男女各持一把名剑残片,他们既是彼此的仇人,也是唯一能合璧双剑的命定之人。"
  },
  {
    "title": "最后一部电影",
    "href": "details/movie-0610.html",
    "cover": "./10.jpg",
    "year": "2025",
    "region": "法国/意大利",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "元电影",
      "电影史",
      "胶片",
      "绝唱"
    ],
    "oneLine": "一位痴迷胶片的过气导演,在得到一卷记录着“谋杀放映员”画面的神秘胶片后,发现自己正被写进一部杀人的剧本。"
  },
  {
    "title": "自然学院林第二季",
    "href": "details/movie-0611.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "环保",
      "动物行为",
      "拟人化",
      "生态危机"
    ],
    "oneLine": "摄影机首次捕捉到“林中之王”神秘家族的内斗,一头年轻的雌鹿为了争夺领袖地位,不惜引发森林大火。"
  },
  {
    "title": "地狱少女第二季",
    "href": "details/movie-0612.html",
    "cover": "./12.jpg",
    "year": "2006",
    "region": "日本",
    "type": "动画剧集",
    "category": "悬疑犯罪",
    "tags": [
      "复仇",
      "稻草人",
      "地狱",
      "契约",
      "人性"
    ],
    "oneLine": "午夜零时才能登录的神秘网站,输入你憎恨者的名字,地狱少女就会出现,但你也将付出灵魂的代价。"
  },
  {
    "title": "我和我的伙伴",
    "href": "details/movie-0613.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "动物",
      "治愈",
      "自闭症",
      "导盲犬",
      "温情"
    ],
    "oneLine": "一个患有自闭症的女孩,与一只被淘汰的导盲犬相互救赎,女孩学会了与世界沟通,老狗找回了存在的意义。"
  },
  {
    "title": "邮车",
    "href": "details/movie-0614.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "邮差",
      "偏远山区",
      "父子和解"
    ],
    "oneLine": "即将停运的山区邮路上,老邮差带着嫌弃这份工作的儿子走最后一趟。"
  },
  {
    "title": "假日旅途:蒂罗尔之旅",
    "href": "details/movie-0615.html",
    "cover": "./15.jpg",
    "year": "2023",
    "region": "德国/奥地利",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "治愈",
      "阿尔卑斯山",
      "音乐",
      "民宿",
      "跨代沟通"
    ],
    "oneLine": "一位事业受挫的女强人来到奥地利蒂罗尔山村,意外继承了祖母的破旧民宿,也开启了一段治愈之旅。"
  },
  {
    "title": "亲爱的妈妈",
    "href": "details/movie-0616.html",
    "cover": "./16.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "失忆",
      "母女",
      "身份错位",
      "温情"
    ],
    "oneLine": "一场车祸后,女儿醒来发现母亲不仅失忆,还坚信自己是她的闺蜜。"
  },
  {
    "title": "少年特工科迪2",
    "href": "details/movie-0617.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "少年特工",
      "间谍",
      "合家欢"
    ],
    "oneLine": "15岁的天才特工科迪被派去国际寄宿学校执行任务,目标是一枚能控制全球卫星的芯片,但他的室友是个极度社恐的科学怪才。"
  },
  {
    "title": "零下的激情",
    "href": "details/movie-0618.html",
    "cover": "./18.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "东北",
      "阴谋",
      "虐恋"
    ],
    "oneLine": "中国最北的小镇,一具冰封的尸体被挖出,牵扯出一段尘封二十年的炽热爱情与致命背叛。"
  },
  {
    "title": "十三号星期五:终结篇",
    "href": "details/movie-0619.html",
    "cover": "./19.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "杰森",
      "血腥",
      "系列完结"
    ],
    "oneLine": "水晶湖底苏醒的杰森获得了操控湖水的能力,最后一名幸存者必须利用他的诅咒反杀他。"
  },
  {
    "title": "马尔亚之战",
    "href": "details/movie-0620.html",
    "cover": "./20.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "阿富汗",
      "真实事件改编",
      "巷战",
      "道德困境"
    ],
    "oneLine": "美军一个排奉命占领阿富汗小镇马尔亚,却发现镇上的每一个“平民”都是伪装的神学士狙击手。"
  },
  {
    "title": "无法隐藏的本能:偷拍",
    "href": "details/movie-0621.html",
    "cover": "./21.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "超自然",
      "隐私",
      "社会惊悚",
      "道德困境"
    ],
    "oneLine": "他脑中植入的医疗芯片失控,开始自动偷拍周围所有人,并上传到一个匿名网站。"
  },
  {
    "title": "神警奇偷",
    "href": "details/movie-0622.html",
    "cover": "./22.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "警察",
      "小偷",
      "搭档",
      "港式无厘头",
      "劫富济贫"
    ],
    "oneLine": "神偷与神探互相给对方下套,结果发现目标竟是同一个跨国洗钱集团。"
  },
  {
    "title": "诈团圆",
    "href": "details/movie-0623.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "诈骗",
      "家庭",
      "返乡",
      "乌龙"
    ],
    "oneLine": "一个诈骗团伙伪装成富豪一家返乡过年,结果全村都是同行,岳父是总教头。"
  },
  {
    "title": "猴王与七超人",
    "href": "details/movie-0624.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "日本/中国大陆",
    "type": "动画电影",
    "category": "国产短剧",
    "tags": [
      "孙悟空",
      "超人",
      "中日合拍",
      "平行宇宙"
    ],
    "oneLine": "孙悟空被召唤到现代东京,与七个自称“超人”的中二病高中生一起对抗外星寄生体。"
  },
  {
    "title": "意外的拜访",
    "href": "details/movie-0625.html",
    "cover": "./25.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "密室",
      "访客",
      "层层反转"
    ],
    "oneLine": "雨夜,一对陌生夫妇敲开了独居女人的门,声称她是他们失散多年的女儿。"
  },
  {
    "title": "酷爱电影的庞波小姐",
    "href": "details/movie-0626.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "电影迷",
      "片场风云",
      "追梦少女"
    ],
    "oneLine": "狂热影迷庞波混进片场当实习生,却意外被推上导演椅,必须用影史知识救场。"
  },
  {
    "title": "沉默之墙",
    "href": "details/movie-0627.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "西班牙/阿根廷",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "公寓",
      "噪音",
      "邻居",
      "心理"
    ],
    "oneLine": "中年男子搬进梦想公寓,半夜总听到墙内有敲击声,报警后发现建筑图纸里那面墙根本不存在。"
  },
  {
    "title": "我来自北京之过年好",
    "href": "details/movie-0628.html",
    "cover": "./28.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "喜剧家庭",
    "tags": [
      "春运",
      "返乡",
      "北漂",
      "年夜饭"
    ],
    "oneLine": "疫情后的第一个春节,三个在北京漂泊的陌生人因为一次拼车返乡,揭开了各自不愿回家的伤疤。"
  },
  {
    "title": "暂时停止呼吸2",
    "href": "details/movie-0629.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "僵尸",
      "道士",
      "末日",
      "黑帮"
    ],
    "oneLine": "僵尸危机爆发十年后,隐居的道士徒弟被迫重出江湖,对抗操控僵尸的黑帮。"
  },
  {
    "title": "真爱跨世代",
    "href": "details/movie-0630.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "穿越",
      "年龄差",
      "二战",
      "书信",
      "婚纱"
    ],
    "oneLine": "一块怀表让现代女孩每次穿上祖母的婚纱就会穿越到1944年,并与年轻的祖父陷入三角恋。"
  },
  {
    "title": "走失",
    "href": "details/movie-0631.html",
    "cover": "./31.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "儿童走失",
      "网络猎巫",
      "父母赎罪",
      "社会派"
    ],
    "oneLine": "五岁女儿在菜市场走失后,这对绝望的父母用直播寻找孩子,却意外成了全网唾弃的“失职杀人犯”。"
  },
  {
    "title": "拉杰玛·查瓦尔",
    "href": "details/movie-0632.html",
    "cover": "./32.jpg",
    "year": "2022",
    "region": "印度",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "低种姓神探",
      "贫民窟推理",
      "政治黑幕"
    ],
    "oneLine": "孟买贫民窟的洗衣工,靠洗衣时听来的闲言碎语,竟破了连环杀人案,却被权贵抹去功劳。"
  },
  {
    "title": "玩情高手",
    "href": "details/movie-0633.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "情场",
      "骗局",
      "反套路",
      "都市",
      "成长"
    ],
    "oneLine": "教人恋爱的情感导师,被一个声称“永不心动”的女客户骗走了真心。"
  },
  {
    "title": "战国自卫队1549",
    "href": "details/movie-0634.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "穿越",
      "战国",
      "现代兵器",
      "架空"
    ],
    "oneLine": "陆上自卫队演习区出现时空裂缝,一支现代连队掉入1549年的川中岛合战现场。"
  },
  {
    "title": "青春灰姑娘",
    "href": "details/movie-0635.html",
    "cover": "./35.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "校园",
      "逆袭",
      "直播",
      "双女主"
    ],
    "oneLine": "全校最丑的女孩戴上AI换脸面具,成了直播平台第一女神。"
  },
  {
    "title": "爱死你害死你",
    "href": "details/movie-0636.html",
    "cover": "./36.jpg",
    "year": "2004",
    "region": "香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "病娇",
      "黑色电影",
      "致命诱惑",
      "婚姻危机",
      "反转"
    ],
    "oneLine": "当新婚丈夫开始怀疑妻子给自己下慢性毒药时,却发现妻子的日记本里写满了如何让他“幸福到死”的诡异计划。"
  },
  {
    "title": "你是我的一束光",
    "href": "details/movie-0637.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "治愈系",
      "公路电影",
      "音乐梦想",
      "纯爱"
    ],
    "oneLine": "一名失明的天才调音师与一个放弃梦想的街头女歌手,在一架走音的钢琴上,找到了彼此的光。"
  },
  {
    "title": "香水2007",
    "href": "details/movie-0638.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "嗅觉",
      "记忆",
      "复仇",
      "调香",
      "宿命"
    ],
    "oneLine": "一位失明调香师为复刻初恋的体香,不惜与跨国黑市展开血腥交易。"
  },
  {
    "title": "遥远时空 舞一夜",
    "href": "details/movie-0639.html",
    "cover": "./39.jpg",
    "year": "2006",
    "region": "日本",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "穿越",
      "平安时代",
      "舞者",
      "阴阳师",
      "悲剧美学"
    ],
    "oneLine": "现代女高中生意外穿越至平安京,与一名被诅咒的舞者相恋,而她的每一次回眸都会让他消失一部分。"
  },
  {
    "title": "坠落",
    "href": "details/movie-0640.html",
    "cover": "./40.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "极限运动",
      "高空",
      "生存",
      "恐高症",
      "反转"
    ],
    "oneLine": "两名极限运动爱好者攀上一座600米的废弃电视塔,梯子却在半路断裂,她们被困在了只能容纳双脚的塔顶。"
  },
  {
    "title": "好奇的乔治",
    "href": "details/movie-0641.html",
    "cover": "./41.jpg",
    "year": "2006",
    "region": "美国",
    "type": "动画电影",
    "category": "喜剧家庭",
    "tags": [
      "猴子",
      "好奇心",
      "捣蛋",
      "手绘"
    ],
    "oneLine": "一只充满好奇心的小猴子,总是因为“想弄明白”而闯祸,却也因此发现了新世界的奇迹。"
  },
  {
    "title": "小脚板走天涯",
    "href": "details/movie-0642.html",
    "cover": "./42.jpg",
    "year": "1988",
    "region": "美国",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "恐龙",
      "冒险",
      "成长",
      "友情",
      "经典"
    ],
    "oneLine": "小雷龙在恐龙大灭绝中失去了妈妈,独自踏上寻找传说中“绿色山谷”的旅程。"
  },
  {
    "title": "魕",
    "href": "details/movie-0643.html",
    "cover": "./43.jpg",
    "year": "2027",
    "region": "香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "伪纪录片",
      "东南亚巫术",
      "第一人称"
    ],
    "oneLine": "网台灵探主持深入香港和东南亚寻找“魕”,却发现自己从小佩戴的护身符才是万邪之源。"
  },
  {
    "title": "位元",
    "href": "details/movie-0644.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "意识上传",
      "数字生命",
      "谋杀"
    ],
    "oneLine": "母亲去世后,她的社交账号突然开始更新,而每次更新都预告了一起尚未发生的命案。"
  },
  {
    "title": "勇敢去爱",
    "href": "details/movie-0645.html",
    "cover": "./45.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "双向暗恋",
      "青春",
      "体育生"
    ],
    "oneLine": "校际拳击赛上,懦弱的吉他手替被打倒的对手喊出了那句“我喜欢你”。"
  },
  {
    "title": "最后的夫人",
    "href": "details/movie-0646.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "维多利亚时代",
      "庄园继承",
      "女性觉醒",
      "秘密遗产"
    ],
    "oneLine": "1880年庄园女管家被告知自己是合法夫人,但继承条件是必须在七天内揭开丈夫的死亡真相。"
  },
  {
    "title": "奉命还珠",
    "href": "details/movie-0647.html",
    "cover": "./47.jpg",
    "year": "1980",
    "region": "中国香港",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "宫廷喜剧",
      "假钦差",
      "笑闹江湖"
    ],
    "oneLine": "一名宫廷侍卫奉命护送一颗价值连城的夜明珠还乡,路遇假钦差、真山贼和只想摸一下珠子的女侠,一路上宝珠不断被掉包。"
  },
  {
    "title": "叠影惊情",
    "href": "details/movie-0648.html",
    "cover": "./48.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "双胞胎",
      "身份互换",
      "谋杀",
      "精神分裂",
      "90年代"
    ],
    "oneLine": "双胞胎姐姐被杀,妹妹顶替她的身份生活,却发现自己正在变成下一个目标。"
  },
  {
    "title": "熊出没·狂野大陆",
    "href": "details/movie-0649.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "基因改造",
      "变身",
      "环保"
    ],
    "oneLine": "光头强偶然获得基因变身手环,可以变成任何动物,但变身后却无法变回人类了。"
  },
  {
    "title": "艾蜜莉·布莱尔的秘密",
    "href": "details/movie-0650.html",
    "cover": "./50.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "双面人生",
      "小镇",
      "日记",
      "身份盗窃"
    ],
    "oneLine": "英国乡间小镇,一位受人爱戴的女教师意外身亡后,警方在她的日记里发现了七种不同的字迹和七种完全不同的人生。"
  },
  {
    "title": "诡影豪宅",
    "href": "details/movie-0651.html",
    "cover": "./51.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "豪宅凶案",
      "密室逃脱",
      "反转再反转",
      "家族秘密"
    ],
    "oneLine": "富豪临终前将八个陌生人关进自己的豪宅,声称其中一人将继承全部遗产,但豪宅里藏着七具尸体。"
  },
  {
    "title": "神经刀与飞天猫",
    "href": "details/movie-0652.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "双雄",
      "江湖恩怨",
      "兵器对决"
    ],
    "oneLine": "江湖上最神经的刀客和最猫系的刺客被迫联手,却发现对方就是自己追杀了十年的仇人。"
  },
  {
    "title": "青蛇",
    "href": "details/movie-0653.html",
    "cover": "./53.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "姐妹情深",
      "都市修仙",
      "身份认同"
    ],
    "oneLine": "修炼五百年的青蛇化身为当红主播,在流量与初心的漩涡中意外撞见转世的姐姐。"
  },
  {
    "title": "那场雨爱上你",
    "href": "details/movie-0654.html",
    "cover": "./54.jpg",
    "year": "2022",
    "region": "泰国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "泰国校园",
      "暗恋成真",
      "雨天初遇",
      "纯爱",
      "双向奔赴"
    ],
    "oneLine": "大一新生在暴雨天误入旧图书馆,遇到一个只在下雨天出现的学长的“幽灵”,却发现他不是鬼,而是等了他三年的人。"
  },
  {
    "title": "口罩赌局",
    "href": "details/movie-0655.html",
    "cover": "./55.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "疫情",
      "地下赌场",
      "黑色幽默",
      "人性",
      "困局"
    ],
    "oneLine": "三个月的封控里,一栋楼的地下赌场赌的不是钱,是人命。"
  },
  {
    "title": "软玉温香抱满怀",
    "href": "details/movie-0656.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "床垫测试员",
      "假结婚",
      "同住屋檐下",
      "甜蜜反差",
      "都市职场"
    ],
    "oneLine": "一个对床垫极其挑剔的女人与一个只想凑合过日子的男人,因为一张床被迫开启了“同居大作战”。"
  },
  {
    "title": "我的恐怖女友",
    "href": "details/movie-0657.html",
    "cover": "./57.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "反转",
      "同居",
      "怪谈",
      "爱情",
      "黑色幽默"
    ],
    "oneLine": "老实巴交的银行职员和完美女友同居后,发现她每晚都会梦游,并且梦游时的她似乎不是“人”。"
  },
  {
    "title": "银河宝贝",
    "href": "details/movie-0658.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "外星萌宠",
      "亲子关系",
      "环保",
      "硬核科幻外壳"
    ],
    "oneLine": "一个来自银河系边缘的婴儿,让一位恐婚的单身汉被迫成为“奶爸”。"
  },
  {
    "title": "来不及道歉",
    "href": "details/movie-0659.html",
    "cover": "./59.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "父子",
      "阿尔茨海默症",
      "遗憾"
    ],
    "oneLine": "父亲患上了阿尔茨海默症,每天都会忘记儿子,却永远记得欠他一句“对不起”。"
  },
  {
    "title": "美丽至极2",
    "href": "details/movie-0660.html",
    "cover": "./60.jpg",
    "year": "2022",
    "region": "意大利",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "整容",
      "自我认同",
      "续集进化论"
    ],
    "oneLine": "第一部里通过整容变美的女孩,这一次决定亲手把自己“拆回”原来的样子。"
  },
  {
    "title": "新妇日记",
    "href": "details/movie-0661.html",
    "cover": "./61.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "中式恐怖",
      "民俗",
      "冥婚",
      "女性"
    ],
    "oneLine": "新娘嫁入豪门后,发现丈夫已死多年,每晚“同床”的竟是祠堂里的牌位。"
  },
  {
    "title": "莎士比亚 王子复仇记",
    "href": "details/movie-0662.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "经典改编",
      "莎翁",
      "哈姆雷特",
      "宫斗"
    ],
    "oneLine": "采用现代军事政变视角重构《哈姆雷特》,丹麦王子拿起的不再是长剑,而是网络舆论战。"
  },
  {
    "title": "我的父亲甘地",
    "href": "details/movie-0663.html",
    "cover": "./63.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "圣雄之子",
      "父子隔阂",
      "非暴力反思",
      "人性弱点"
    ],
    "oneLine": "圣雄甘地眼中“不成器”的长子,用一生逃离父亲巨大的光环与苛责。"
  },
  {
    "title": "沙漠未婚妻",
    "href": "details/movie-0664.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "中东/法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "难民",
      "跨国恋",
      "战地",
      "等待"
    ],
    "oneLine": "叙利亚内战期间,一名法国女记者与一名当地医生在沙漠中相爱并订婚,战争将他们分离,她在边境等了三年,等来的却是他的尸骨。"
  },
  {
    "title": "游戏大作战",
    "href": "details/movie-0665.html",
    "cover": "./65.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "游戏穿越",
      "元宇宙",
      "四骑士",
      "闯关",
      "视觉特效"
    ],
    "oneLine": "四位顶级游戏主播受邀测试全沉浸式新游,却发现死亡退出键是假的,他们必须在一天内通关才能活命。"
  },
  {
    "title": "他人之屋",
    "href": "details/movie-0666.html",
    "cover": "./66.jpg",
    "year": "2023",
    "region": "波兰",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "家庭入侵",
      "身份盗用",
      "冷战阴影"
    ],
    "oneLine": "年轻夫妇搬进郊区别墅,发现地下室住着一个自称“原房主”的老人,而他说的房主名字是假的。"
  },
  {
    "title": "午睡的艺术",
    "href": "details/movie-0667.html",
    "cover": "./67.jpg",
    "year": "2020",
    "region": "西班牙",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "生活哲学",
      "幽默",
      "治愈",
      "老年",
      "慢生活"
    ],
    "oneLine": "一个被失眠困扰的日本上班族来到西班牙小镇,向老人们学习一门失传的午睡艺术。"
  },
  {
    "title": "隐形狂人",
    "href": "details/movie-0668.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "心理恐怖",
      "家暴隐喻",
      "高概念",
      "密室"
    ],
    "oneLine": "女友收到亡夫遗物:一件能隐形的军大衣。但她很快发现,前夫没有死,而是穿着另一件在屋内。"
  },
  {
    "title": "草裙春色",
    "href": "details/movie-0669.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "草裙舞",
      "中年追梦",
      "夏威夷"
    ],
    "oneLine": "夏威夷小镇上,五个平均年龄六十岁的老太太组成了全美最老、最不专业的草裙舞团。"
  },
  {
    "title": "亿万第一季",
    "href": "details/movie-0670.html",
    "cover": "./70.jpg",
    "year": "2016",
    "region": "美国",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "对冲基金",
      "检察官",
      "猫鼠游戏"
    ],
    "oneLine": "亿万富翁鲍比·阿克塞尔罗德与联邦检察官查克·罗兹,两个站在权力顶端的男人,用法律和金钱做赌注展开生死对决。"
  },
  {
    "title": "古镇凶灵之巫咒缠身",
    "href": "details/movie-0671.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "湘西民俗",
      "巫蛊",
      "祖宅",
      "连环死亡"
    ],
    "oneLine": "湘西古镇凶宅深夜总有婴儿哭声,调查发现每一任房主都死于同一种巫咒。"
  },
  {
    "title": "8:一个南非恐怖故事",
    "href": "details/movie-0672.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "南非",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "数字诅咒",
      "祖鲁巫术",
      "符号杀人",
      "种族隔离",
      "数字8"
    ],
    "oneLine": "一家人搬进新家后,发现时钟每到8点,家中就会有一人按照祖鲁传说中“8种死法”的顺序死去。"
  },
  {
    "title": "您的老鼠好友",
    "href": "details/movie-0673.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "友情",
      "城市",
      "冒险",
      "小众",
      "治愈"
    ],
    "oneLine": "伦敦下水道一只社恐老鼠,被迫与人类小女孩组队,拯救即将被毒杀的整个鼠群。"
  },
  {
    "title": "安娜波里斯传奇",
    "href": "details/movie-0674.html",
    "cover": "./74.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "海军学院",
      "军校生",
      "黑人权贵",
      "传统与变革"
    ],
    "oneLine": "首位进入美国海军学院的非洲裔女性,发现自己的教官是曾经被她祖父解放的黑奴后代。"
  },
  {
    "title": "光辉时代",
    "href": "details/movie-0675.html",
    "cover": "./75.jpg",
    "year": "2014",
    "region": "英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "维多利亚",
      "工业革命",
      "女性觉醒",
      "建筑"
    ],
    "oneLine": "一名出身贫寒的女建筑师,在维多利亚时代的伦敦用钢铁与玻璃挑战整个僵化的男权社会。"
  },
  {
    "title": "情杀案中案",
    "href": "details/movie-0676.html",
    "cover": "./76.jpg",
    "year": "1983",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "出轨",
      "设局",
      "黑色电影",
      "女性复仇",
      "连环套"
    ],
    "oneLine": "富商的妻子被指控谋杀情人,律师替她辩护时发现,这桩“情杀案”背后还有另一桩“情杀案”。"
  },
  {
    "title": "老师的黑板",
    "href": "details/movie-0677.html",
    "cover": "./77.jpg",
    "year": "2020",
    "region": "伊朗",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "教育",
      "流浪教师",
      "边境",
      "黑板",
      "诗意"
    ],
    "oneLine": "战火中,一名教师背着一块黑板穿越两伊边境,用它换过馕饼、当过担架,却从未卖出过知识。"
  },
  {
    "title": "豪登高铁",
    "href": "details/movie-0678.html",
    "cover": "./78.jpg",
    "year": "2026",
    "region": "南非",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "劫持",
      "高速列车",
      "南非",
      "赎金"
    ],
    "oneLine": "一伙雇佣兵劫持了从约翰内斯堡开往比勒陀利亚的豪登高铁,要求南非政府释放一名被捕的军阀。"
  },
  {
    "title": "今日世界夜生活",
    "href": "details/movie-0679.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "夜店",
      "地下产业",
      "多线叙事",
      "当代都市",
      "阶级"
    ],
    "oneLine": "伦敦同一夜,六个不同身份的人在夜色的掩护下,各自做着不可告人的事。"
  },
  {
    "title": "活尸禁区",
    "href": "details/movie-0680.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "丧尸",
      "军事禁区",
      "病毒感染",
      "核辐射"
    ],
    "oneLine": "核废料泄露导致军事禁区变异,一支小分队深入其中,发现活尸竟保留着生前的记忆。"
  },
  {
    "title": "兄弟没狗不应该",
    "href": "details/movie-0681.html",
    "cover": "./81.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "黑色幽默",
      "荒诞",
      "兄弟",
      "宠物",
      "公路"
    ],
    "oneLine": "三个发小为给病重兄弟筹钱,偷了一条价值百万的赛狗,结果狗在半路被偷了,他们又去偷那条偷狗贼的狗。"
  },
  {
    "title": "黑色疤痕的蓝调",
    "href": "details/movie-0682.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "蓝调音乐",
      "种族歧视",
      "复仇",
      "口琴天才"
    ],
    "oneLine": "脸上带疤的黑人口琴天才一夜成名,却发现自己引以为傲的旋律,抄袭自曾经虐待过他的种植园主。"
  },
  {
    "title": "情同陌路",
    "href": "details/movie-0683.html",
    "cover": "./83.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "失忆",
      "亲情",
      "治愈",
      "身份认同"
    ],
    "oneLine": "一对因意外失忆的母女,在病房里重新认识彼此,却揭开了家庭尘封二十年的谎言。"
  },
  {
    "title": "一棵树的纠纷",
    "href": "details/movie-0684.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "农村",
      "土地",
      "亲情",
      "邻里",
      "遗产"
    ],
    "oneLine": "一棵百年老树即将被征用,三个子女为赔偿金反目,却意外揭开四十年前的收养秘密。"
  },
  {
    "title": "小绿和小蓝第五季",
    "href": "details/movie-0685.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画剧集",
    "category": "科幻奇幻",
    "tags": [
      "国创",
      "哲学",
      "单元剧",
      "治愈",
      "友情"
    ],
    "oneLine": "机器人小绿和人类小蓝的日常回归,这一次他们探讨的是“灵魂能否被数据化”。"
  },
  {
    "title": "青岛往事",
    "href": "details/movie-0686.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "创业",
      "兄弟反目",
      "改革开放",
      "啤酒",
      "怀旧"
    ],
    "oneLine": "从啤酒厂临时工到啤酒大亨,一对异姓兄弟在90年代青岛的商海沉浮与恩怨纠葛。"
  },
  {
    "title": "失恋自救",
    "href": "details/movie-0687.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "失恋",
      "互助会",
      "前任",
      "搞笑",
      "治愈"
    ],
    "oneLine": "失恋37次的男主创立“失恋自救互助会”,会员们唯一的自救办法,就是帮别人追回前任。"
  },
  {
    "title": "罗马尼亚风云",
    "href": "details/movie-0688.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "罗马尼亚/法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "东欧",
      "CIA",
      "黑海阴谋"
    ],
    "oneLine": "一名美国记者在布加勒斯特调查跨国洗钱案,却意外揭开了一场针对欧盟的网络战阴谋。"
  },
  {
    "title": "姆明与冬日仙境",
    "href": "details/movie-0689.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "芬兰,日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "姆明谷",
      "冬眠",
      "圣诞",
      "治愈",
      "北欧童话"
    ],
    "oneLine": "今年姆明决定不冬眠,他要在冰雪覆盖的谷地里,等一个从未见过的红衣服胖老头。"
  },
  {
    "title": "狼人2025",
    "href": "details/movie-0690.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "变异",
      "基因工程",
      "都市传说",
      "血腥",
      "生存"
    ],
    "oneLine": "近未来伦敦,一种修改基因药物让流浪汉在月圆之夜异化为嗜血狼人,城市沦为狩猎场。"
  },
  {
    "title": "超级小个子",
    "href": "details/movie-0691.html",
    "cover": "./91.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "举重",
      "残障运动员",
      "真实改编"
    ],
    "oneLine": "身高仅1米2的农村青年想参加健全人举重比赛,所有人都在笑他,直到他举起比自己重三倍的杠铃。"
  },
  {
    "title": "种子",
    "href": "details/movie-0692.html",
    "cover": "./92.jpg",
    "year": "2021",
    "region": "加拿大",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "外星寄生",
      "身体恐怖",
      "变异",
      "孤独"
    ],
    "oneLine": "宇航员从太空带回一袋神秘土壤,她种出的植物开始逐渐“优化”她家人的身体结构。"
  },
  {
    "title": "切肤之痛",
    "href": "details/movie-0693.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "医疗内幕",
      "罕见病",
      "医患关系",
      "NHS",
      "体制之恶"
    ],
    "oneLine": "一名患有罕见“皮肤脆裂症”的女孩,她的每一次拥抱都会带来“切肤之痛”,而她母亲为了救她,向腐朽的医疗体制宣战。"
  },
  {
    "title": "为爱所困2024",
    "href": "details/movie-0694.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "青春",
      "校园",
      "暗恋",
      "双向奔赴"
    ],
    "oneLine": "2024年,泰国一所男校里,学生会主席和乐队主唱被迫假装情侣,却假戏真做。"
  },
  {
    "title": "射雕英雄传之东成西就",
    "href": "details/movie-0695.html",
    "cover": "./95.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "无厘头",
      "全明星",
      "恶搞"
    ],
    "oneLine": "东邪、西毒、南帝、北丐在成为绝世高手之前,为了争夺《九阴真经》展开了一场鸡飞狗跳的奇葩斗法。"
  },
  {
    "title": "榴莲飘飘",
    "href": "details/movie-0696.html",
    "cover": "./96.jpg",
    "year": "2000",
    "region": "香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "妓女",
      "返乡",
      "东北",
      "榴莲"
    ],
    "oneLine": "在香港做“北姑”的阿燕回到东北老家,试图忘掉过去,却在每一个街角闻到榴莲的味道。"
  },
  {
    "title": "野兔邦妮",
    "href": "details/movie-0697.html",
    "cover": "./97.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "category": "动作冒险",
    "tags": [
      "反英雄",
      "农场悬案",
      "素食肉食者",
      "公路冒险"
    ],
    "oneLine": "农场里最温顺的母兔邦妮,为了寻找失踪的萝卜,意外揭开了整个动物庄园“肉食者与素食者”之间的惊天阴谋。"
  },
  {
    "title": "生化危机:无尽黑暗",
    "href": "details/movie-0698.html",
    "cover": "./98.jpg",
    "year": "2026",
    "region": "日本/美国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "丧尸",
      "军事阴谋",
      "病毒变异",
      "黑暗英雄",
      "生存恐怖"
    ],
    "oneLine": "当全球只剩最后一座没有感染的城市,里面的高层却主动打开了大门。"
  },
  {
    "title": "绝种好男人",
    "href": "details/movie-0699.html",
    "cover": "./99.jpg",
    "year": "2003",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港式无厘头",
      "废柴逆袭",
      "真假身份"
    ],
    "oneLine": "一个善良到近乎愚蠢的兽医,被误诊为绝症后,竟引来了一群拜金女的疯狂追求。"
  },
  {
    "title": "目的地汽车旅馆",
    "href": "details/movie-0700.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "汽车旅馆",
      "时间循环",
      "遗憾",
      "治愈"
    ],
    "oneLine": "一家只接待自杀者的汽车旅馆里,每个房间都是一个时间循环,退房的唯一方法是找到活下去的理由。"
  },
  {
    "title": "盗兵符国语",
    "href": "details/movie-0701.html",
    "cover": "./101.jpg",
    "year": "1973",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "战国",
      "兵符",
      "夺宝",
      "邵氏"
    ],
    "oneLine": "信陵君窃符救赵之后,真正的兵符竟然被人调包,引发江湖与朝堂的双重追杀。"
  },
  {
    "title": "时间上的家",
    "href": "details/movie-0702.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "时间循环",
      "凶宅",
      "父女"
    ],
    "oneLine": "一栋发生过多起失踪案的凶宅,每住进一户新人家,就会回到1987年的同一天。"
  },
  {
    "title": "正义使命",
    "href": "details/movie-0703.html",
    "cover": "./103.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "扫黑除恶",
      "打假",
      "卧底",
      "主旋律"
    ],
    "oneLine": "一名食品稽查队长假扮商贩卧底,意外揭开了覆盖全省的特大假药黑网。"
  },
  {
    "title": "永春白鹤拳之擎天画卷",
    "href": "details/movie-0704.html",
    "cover": "./104.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "永春拳",
      "寻宝",
      "清末",
      "海外华人"
    ],
    "oneLine": "清末,一幅藏有永春白鹤拳秘籍的《擎天画卷》被盗,三名弟子横跨太平洋追回国宝。"
  },
  {
    "title": "温州青年之海阔天空",
    "href": "details/movie-0705.html",
    "cover": "./105.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "民营经济",
      "改革开放",
      "海外奋斗"
    ],
    "oneLine": "三个温州青年在90年代偷渡到意大利,用纽扣和皮包打出一片天地。"
  },
  {
    "title": "地球人坏坏",
    "href": "details/movie-0706.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "外星难民",
      "反讽",
      "萌系",
      "黑色幽默"
    ],
    "oneLine": "一群流落地球的外星学霸发现,想要修好飞船回家,必须先通过“高考”和“房贷”试炼。"
  },
  {
    "title": "柜子开了",
    "href": "details/movie-0707.html",
    "cover": "./107.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "出柜",
      "中年危机",
      "家庭和解",
      "台式温情",
      "遗物"
    ],
    "oneLine": "父亲葬礼后,长子整理遗物时打开了一个上锁的衣柜,里面藏着另一个父亲。"
  },
  {
    "title": "玉女情动",
    "href": "details/movie-0708.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "纯爱",
      "家庭冲突",
      "成长",
      "复古"
    ],
    "oneLine": "上世纪70年代的台湾,一个被奉为“玉女”的大家闺秀,爱上了父亲工厂里那个跳霹雳舞的男工。"
  },
  {
    "title": "吕四娘粤语",
    "href": "details/movie-0709.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "女侠传奇",
      "雍正野史",
      "粤语原声",
      "复仇爽剧",
      "江湖情仇"
    ],
    "oneLine": "雍正暴毙的民间传说有了新解:吕四娘不仅入宫刺帝,还带走了足以颠覆皇权的秘密。"
  },
  {
    "title": "温情公寓",
    "href": "details/movie-0710.html",
    "cover": "./110.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "老式小区",
      "邻里",
      "怀旧",
      "单元剧"
    ],
    "oneLine": "1998年上海一栋老公房里的四户人家,共用一间厨房、争抢一台冰箱、却分享所有秘密。"
  },
  {
    "title": "真情作崇",
    "href": "details/movie-0711.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "鬼片",
      "爱情",
      "港式喜剧",
      "乌龙"
    ],
    "oneLine": "渣男同时交往三个女友,被雷劈死后,三个女人的真心化为了日夜纠缠他的三只鬼。"
  },
  {
    "title": "暗战2013",
    "href": "details/movie-0712.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "怀旧",
      "文咏珊",
      "卧底翻新"
    ],
    "oneLine": "2013年,一个女卧底在黑帮与廉政公署之间周旋,却发现她的上线警司正在向黑帮出售情报。"
  },
  {
    "title": "意外爱情",
    "href": "details/movie-0713.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "身份互换",
      "都市奇缘",
      "错位人生"
    ],
    "oneLine": "一次酒后,霸道总裁与佛系外卖员互换了身体,还互换了两段天差地别的爱情。"
  },
  {
    "title": "勇者之剑",
    "href": "details/movie-0714.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "奇幻",
      "冒险",
      "骑士",
      "魔法",
      "成长"
    ],
    "oneLine": "怯懦的铁匠学徒意外拔出石中剑,但他必须学会如何做一个内心真正的“勇者”,而非仅仅拥有神兵。"
  },
  {
    "title": "果树人生",
    "href": "details/movie-0715.html",
    "cover": "./115.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "乡土",
      "父子传承",
      "乡村振兴",
      "生态农业"
    ],
    "oneLine": "固执的老果农拒绝砍掉百年梨树建厂,却意外挖出了家族尘封的抗战秘史。"
  },
  {
    "title": "初夏的甜蜜约定",
    "href": "details/movie-0716.html",
    "cover": "./116.jpg",
    "year": "2026",
    "region": "日本",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "校园",
      "约定",
      "错位恋爱",
      "夏日",
      "烟火"
    ],
    "oneLine": "高一那个初夏,我替好友写情书,却意外收到了对方写给“我”的回信,一场关于身份错位的温柔谎言开始了。"
  },
  {
    "title": "二哥",
    "href": "details/movie-0717.html",
    "cover": "./117.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港产片",
      "兄弟情",
      "卧底",
      "悲情",
      "市井"
    ],
    "oneLine": "茶餐厅伙计阿二为了给痴呆的大哥治病,被迫成为警方的线人,潜入自己亲弟弟的贩毒集团。"
  },
  {
    "title": "爸爸的微妙处境",
    "href": "details/movie-0718.html",
    "cover": "./118.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "单亲爸爸",
      "葬礼乌龙",
      "二婚",
      "父子关系",
      "小人物"
    ],
    "oneLine": "丧偶十年的老陈准备再婚,却在婚礼前一天收到亡妻发来的快递——是她十年前就录好的“如果爸爸再婚”视频。"
  },
  {
    "title": "难以忽视的真相2",
    "href": "details/movie-0719.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "category": "海外精选",
    "tags": [
      "气候",
      "科学",
      "危机",
      "行动"
    ],
    "oneLine": "十七年后,戈尔再次站上讲台,这一次他要讲的不是“气候变暖正在发生”,而是“我们还有七年,然后谁也救不了了”。"
  },
  {
    "title": "大鼻子情圣国语",
    "href": "details/movie-0720.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "法国/中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "经典改编",
      "情书",
      "自卑",
      "浪漫"
    ],
    "oneLine": "一个因外貌自卑的才子,用最美的情话为他人做嫁衣,最终能否为自己赢得一次真爱?"
  },
  {
    "title": "冷血杀人狂",
    "href": "details/movie-0721.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "连环杀手",
      "心理博弈",
      "反转"
    ],
    "oneLine": "一名伪装成热心市民的冷血杀手,却在自己的庆功宴上露出了马脚。"
  },
  {
    "title": "狗纹龙爸爸",
    "href": "details/movie-0722.html",
    "cover": "./122.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "古惑仔",
      "改邪归正",
      "单亲爸爸",
      "混混",
      "90年代"
    ],
    "oneLine": "退隐江湖的古惑仔为了女儿重返幼儿园,却发现最大敌人是家委会。"
  },
  {
    "title": "三天",
    "href": "details/movie-0723.html",
    "cover": "./123.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "时间限制",
      "失踪",
      "手机",
      "反转"
    ],
    "oneLine": "妻子只失踪了三天,丈夫却发现她手机里的所有聊天记录,都显示她另有其人。"
  },
  {
    "title": "天天初体验",
    "href": "details/movie-0724.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "女性成长",
      "性喜剧",
      "香港爱情故事",
      "大龄女青年"
    ],
    "oneLine": "30岁的“母胎单身”天天为了写出真实的情感专栏,付费聘请了一位“恋爱导师”陪她走完恋爱的所有流程。"
  },
  {
    "title": "鬼镇1988",
    "href": "details/movie-0725.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "80年代",
      "鬼镇",
      "录像带",
      "复古恐怖"
    ],
    "oneLine": "一群高中生误入1988年时间胶囊般的小镇,发现全镇居民都死于同一天。"
  },
  {
    "title": "王者归来黄飞鸿",
    "href": "details/movie-0726.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络剧/短剧",
    "category": "国产短剧",
    "tags": [
      "平行时空",
      "老年黄飞鸿",
      "穿越民国",
      "功夫科幻"
    ],
    "oneLine": "晚年的黄飞鸿被神秘力量穿越到1937年的上海滩,发现这里人人玩枪,只有他的佛山无影脚还能穿越时空。"
  },
  {
    "title": "毒海鸳鸯",
    "href": "details/movie-0727.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "毒品",
      "底层爱情",
      "绝望之恋",
      "真实改编",
      "社会写实"
    ],
    "oneLine": "他们是在戒毒所相识的一对恋人,为了凑够远离毒品的最后一笔钱,决定联手干最后一票。"
  },
  {
    "title": "北部城市",
    "href": "details/movie-0728.html",
    "cover": "./128.jpg",
    "year": "2018",
    "region": "英国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "工业城市",
      "足球",
      "移民",
      "代际冲突"
    ],
    "oneLine": "英格兰北部工业城市曼彻斯特,一个巴基斯坦裔家庭在经营传统咖喱餐馆的过程中,与当地白人社区及下一代的身份认同发生激烈碰撞。"
  },
  {
    "title": "万界仙踪",
    "href": "details/movie-0729.html",
    "cover": "./129.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "穿越",
      "修仙",
      "多元宇宙",
      "废柴逆袭",
      "宗门"
    ],
    "oneLine": "现代物理学研究生穿进修仙界,用热力学第二定律把修仙大佬搞崩溃了。"
  },
  {
    "title": "回声潮世代",
    "href": "details/movie-0730.html",
    "cover": "./130.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "代际冲突",
      "社会变迁",
      "家庭史诗",
      "经济危机"
    ],
    "oneLine": "从2008到2028,一个美国家庭的四个孩子,恰好赶上了四次不同的经济浪潮,命运截然不同。"
  },
  {
    "title": "纽约五尖塔",
    "href": "details/movie-0731.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑帮",
      "复仇",
      "地标",
      "兄弟情",
      "背叛"
    ],
    "oneLine": "五座地标下埋着五具尸体,一个出狱的杀手必须在24小时内找到最后一具。"
  },
  {
    "title": "仙城香姬",
    "href": "details/movie-0732.html",
    "cover": "./132.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "邵氏",
      "奇幻",
      "情色",
      "古典"
    ],
    "oneLine": "古装奇幻,仙界公主下凡寻找真爱,却被卷入凡间宫廷的权欲斗争,香消玉殒。"
  },
  {
    "title": "监视者2022",
    "href": "details/movie-0733.html",
    "cover": "./133.jpg",
    "year": "2022",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "偷窥",
      "网络直播",
      "独居女性",
      "心理战",
      "反杀"
    ],
    "oneLine": "她独居搬进新公寓,总感觉有人在盯着她,直到她发现自己的日常生活被同步直播给暗网。"
  },
  {
    "title": "九月的某四天",
    "href": "details/movie-0734.html",
    "cover": "./134.jpg",
    "year": "2021",
    "region": "巴西",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "政治绑架",
      "真实事件",
      "理想主义"
    ],
    "oneLine": "1969年,一群巴西年轻人绑架了美国大使,试图交换政治犯,但这四天里所有人都在失控。"
  },
  {
    "title": "天外怪魔",
    "href": "details/movie-0735.html",
    "cover": "./135.jpg",
    "year": "1999",
    "region": "日本",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "怪兽",
      "少年",
      "友情",
      "单元剧",
      "童年"
    ],
    "oneLine": "每隔七天,东京就会出现一种只有孩子们能看见的透明怪魔,大人们却浑然不觉。"
  },
  {
    "title": "保密局的枪声",
    "href": "details/movie-0736.html",
    "cover": "./136.jpg",
    "year": "1979",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "解放前夕",
      "地下党",
      "国共斗争",
      "红色经典"
    ],
    "oneLine": "上海解放前夜,地下党员潜入国民党保密局,拿到了那份关键的潜伏名单。"
  },
  {
    "title": "白昼惊魂",
    "href": "details/movie-0737.html",
    "cover": "./137.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "记忆迷宫",
      "双重人格",
      "雨夜追凶",
      "心理医生"
    ],
    "oneLine": "心理医生为救被噩梦缠身的病人,却在白天的诊疗室里发现了只属于深夜谋杀案的泥土。"
  },
  {
    "title": "鹰勇潜舰",
    "href": "details/movie-0738.html",
    "cover": "./138.jpg",
    "year": "1992",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "潜艇",
      "冷战",
      "劫持",
      "孤军",
      "个人英雄主义"
    ],
    "oneLine": "一艘美国核潜艇被叛军控制,一名海军陆战队员必须在深海中夺回指挥权。"
  },
  {
    "title": "我的老婆是老公",
    "href": "details/movie-0739.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "灵魂互换",
      "性别认知",
      "婚后日常",
      "爆笑"
    ],
    "oneLine": "一对新婚夫妻因接吻触电导致灵魂互换,丈夫必须用妻子的身体去完成她女强人的跨国谈判。"
  },
  {
    "title": "葡萄牙修女",
    "href": "details/movie-0740.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "葡萄牙/法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "宗教",
      "密室",
      "书信体",
      "心理"
    ],
    "oneLine": "年轻修女在修道院密室发现十七世纪情书,信中描述的“圣痕”与最近发生的女童失踪案惊人相似。"
  },
  {
    "title": "獠牙拉惹",
    "href": "details/movie-0741.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "马来西亚",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "南洋传说",
      "降头",
      "英国殖民",
      "丛林探险"
    ],
    "oneLine": "19世纪末,一支英国探险队在婆罗洲雨林触怒了传说中的“獠牙拉惹”,降头诅咒让他们自相残杀。"
  },
  {
    "title": "要久久爱",
    "href": "details/movie-0742.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "时空循环",
      "初恋",
      "便利店",
      "记忆裂痕",
      "治愈"
    ],
    "oneLine": "在一家永远停留在1999年的便利店,一位失忆女子每天都会收到同一位陌生男子的手写情书。"
  },
  {
    "title": "我的宝贝2024",
    "href": "details/movie-0743.html",
    "cover": "./143.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "打拐",
      "亲情",
      "公路",
      "催泪"
    ],
    "oneLine": "失去了孩子的出租司机,和被拐卖多年后变成“骗子”的女孩,组成了一对奇怪的搭档,横跨千里追查人贩子网络。"
  },
  {
    "title": "接触未来",
    "href": "details/movie-0744.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "外星信号",
      "科学家主角",
      "太空旅行",
      "哲学思辨"
    ],
    "oneLine": "语言学家破译外星信号后收到一台机器的图纸,但全球只有一人能乘坐它。"
  },
  {
    "title": "哥们的糗事",
    "href": "details/movie-0745.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "友情",
      "回忆杀",
      "搞笑"
    ],
    "oneLine": "为了给好兄弟当伴郎,四个中年男人必须在婚礼前销毁他们年轻时拍下的“犯罪证据”录像带。"
  },
  {
    "title": "完美婚姻的定式",
    "href": "details/movie-0746.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "契约婚姻",
      "财阀",
      "先婚后爱",
      "复仇"
    ],
    "oneLine": "为了报复前男友,她嫁给了患有情感障碍的财阀三世,并签下了“不许动心”的契约。"
  },
  {
    "title": "腓尼基计划",
    "href": "details/movie-0747.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "德国/摩洛哥",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "记忆移植",
      "冷战",
      "考古",
      "双重身份",
      "骗局"
    ],
    "oneLine": "一名失忆男子醒来发现自己是冷战间谍,体内被植入了腓尼基水手的记忆,而那个古代水手正在指引他找到海底铀矿。"
  },
  {
    "title": "麦肯尼加省",
    "href": "details/movie-0748.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "美国/虚构东欧",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "东欧",
      "间谍",
      "腐败",
      "雪原",
      "独裁"
    ],
    "oneLine": "一名FBI特工奉命进入一个不存在的东欧省份,却发现这里囚禁着一群被世界遗忘的选民。"
  },
  {
    "title": "艾德的私人频道",
    "href": "details/movie-0749.html",
    "cover": "./149.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "暗网",
      "直播杀人",
      "双重人格"
    ],
    "oneLine": "艾德经营着一个地下直播频道,但他的每个“表演”背后,都藏着另一个他不知情的自己。"
  },
  {
    "title": "铜头铁罗汉",
    "href": "details/movie-0750.html",
    "cover": "./150.jpg",
    "year": "1994",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "少林",
      "硬气功",
      "复仇",
      "江湖",
      "功夫片"
    ],
    "oneLine": "少林寺铜人阵首座为报灭门之仇还俗,却发现仇人已成守卫边关的护国大将军。"
  },
  {
    "title": "谈判专家",
    "href": "details/movie-0751.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "警匪智斗",
      "极限营救",
      "心理博弈",
      "正邪反转"
    ],
    "oneLine": "顶尖谈判专家被诬陷谋杀,他劫持人质并要求只和最崇拜的对手对话。"
  },
  {
    "title": "圣诞夜怪谭",
    "href": "details/movie-0752.html",
    "cover": "./2.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "圣诞",
      "鬼怪",
      "定格动画",
      "暗黑"
    ],
    "oneLine": "在一个被永恒圣诞诅咒的小镇里,一个厌世的男孩必须找到“圣诞老人”的真身,才能让四季重新流转。"
  },
  {
    "title": "当星光结束",
    "href": "details/movie-0753.html",
    "cover": "./3.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "末日恋爱",
      "光速旅行",
      "时间差",
      "宇宙灾难"
    ],
    "oneLine": "天文学者发现一颗超新星爆发产生的辐射将在三年后抵达地球,他和女友的时间流速开始出现诡异偏差。"
  },
  {
    "title": "英雄利沙比:农民起义",
    "href": "details/movie-0754.html",
    "cover": "./4.jpg",
    "year": "2026",
    "region": "英国/法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "中世纪",
      "农民起义",
      "冷兵器"
    ],
    "oneLine": "十四世纪英格兰,农奴利沙比从被领主绞刑架上逃下,点燃了席卷全国的最大规模农民起义。"
  },
  {
    "title": "金锏怒碎银安殿粤语",
    "href": "details/movie-0755.html",
    "cover": "./5.jpg",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "粤剧电影",
      "忠奸斗",
      "宫廷复仇",
      "武旦",
      "经典老片"
    ],
    "oneLine": "唐朝忠臣之女手持御赐金锏,在金殿上怒打奸臣、逼皇帝洗冤。"
  },
  {
    "title": "幽灵王国",
    "href": "details/movie-0756.html",
    "cover": "./6.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "亡灵",
      "治愈",
      "寻找自我",
      "冥界冒险",
      "羁绊"
    ],
    "oneLine": "意外坠入幽灵王国的少女,必须在第七天日出前找回自己遗忘的名字,否则将永远无法返回人间。"
  },
  {
    "title": "女人心事",
    "href": "details/movie-0757.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "三代女性",
      "代际和解",
      "婚姻困境"
    ],
    "oneLine": "台北一家三代女人,因为祖母的“离婚派对”计划,掀翻了整个家族。"
  },
  {
    "title": "四千零四夜",
    "href": "details/movie-0758.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "中东/法国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "一千零一夜续写",
      "女性觉醒",
      "阿拉伯",
      "宏大"
    ],
    "oneLine": "《一千零一夜》结束四千年后,山鲁佐德的最后一位后裔被恐怖组织逼迫,再次用故事换取全城百姓的性命。"
  },
  {
    "title": "没有尽头的街",
    "href": "details/movie-0759.html",
    "cover": "./9.jpg",
    "year": "2023",
    "region": "阿根廷",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "失踪",
      "城市传说",
      "心理压迫"
    ],
    "oneLine": "出租车司机深夜搭载了一位神秘女子,目的地是地图上不存在的一条“没有尽头的街”。"
  },
  {
    "title": "太阳,不远",
    "href": "details/movie-0760.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "核泄漏",
      "归乡",
      "和解",
      "治愈",
      "群像"
    ],
    "oneLine": "福岛核事故十年后,一个破碎的家庭决定回到那被遗弃的故乡,在废墟中寻找失落的记忆与原谅。"
  },
  {
    "title": "荒柯艳迹",
    "href": "details/movie-0761.html",
    "cover": "./11.jpg",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "凶宅",
      "旧照片",
      "禁忌之恋",
      "双线叙事"
    ],
    "oneLine": "一对年轻情侣住进荒废古宅,却通过一本日记揭开了四十年前一段因嫉妒引发的连环血案。"
  },
  {
    "title": "弗里蒙特",
    "href": "details/movie-0762.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "移民",
      "阿富汗",
      "唐人街",
      "学习英语",
      "社区"
    ],
    "oneLine": "在加州弗里蒙特市的阿富汗移民唐娜,必须在圣诞节前学会1000个英语单词,才能保住她在那家幸运饼干工厂的工作。"
  },
  {
    "title": "中国机长",
    "href": "details/movie-0763.html",
    "cover": "./13.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "真实事件",
      "航空",
      "英雄",
      "紧急迫降",
      "生死"
    ],
    "oneLine": "川航3U8633航班在万米高空风挡玻璃突然爆裂,机长刘传健在零下四十度缺氧状态下,手动备降成都。"
  },
  {
    "title": "鬼屋奇谭",
    "href": "details/movie-0764.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "密室逃脱",
      "反转",
      "黑色幽默"
    ],
    "oneLine": "六个网红闯入最恐怖的鬼屋直播,却发现真正的恶鬼竟是“房东”。"
  },
  {
    "title": "冒险三人组",
    "href": "details/movie-0765.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "寻宝",
      "青少年",
      "搞笑",
      "成长"
    ],
    "oneLine": "三个被留在家里的“问题少年”,为了躲避父母的监控,意外在家门口的后山发现了一个真实的宝藏秘密。"
  },
  {
    "title": "冷血杀人狂",
    "href": "details/movie-0766.html",
    "cover": "./16.jpg",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "真实事件改编",
      "心理侧写",
      "开放式结局"
    ],
    "oneLine": "三名FBI侧写师在审讯室中与一名疑似连环杀手的大学教授周旋,但越聊他们越觉得,自己才是被审判的人。"
  },
  {
    "title": "鸡同鸭讲",
    "href": "details/movie-0767.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "代际冲突",
      "沟通",
      "搞笑",
      "温情"
    ],
    "oneLine": "固执的养鸭老爸遇上海归精英的儿子,家里上演了一出啼笑皆非的“鸡同鸭讲”闹剧。"
  },
  {
    "title": "墓地邂逅2",
    "href": "details/movie-0768.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "加拿大",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "疯人院旧址",
      "灵异实拍",
      "第二部",
      "扩展宇宙"
    ],
    "oneLine": "第一部的原始素材被做成纪录片后,五名网红前往同一座疯人院直播,却发现了第一支队伍从未进入的地下六层。"
  },
  {
    "title": "海豹突击队第二季",
    "href": "details/movie-0769.html",
    "cover": "./19.jpg",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "军事",
      "反恐",
      "小队作战",
      "现实主义"
    ],
    "oneLine": "精英小队转战也门与东欧,在复杂的地缘政治泥潭中执行几乎不可能完成的高风险营救任务。"
  },
  {
    "title": "核爆默示录",
    "href": "details/movie-0770.html",
    "cover": "./20.jpg",
    "year": "2027",
    "region": "日本",
    "type": "动画",
    "category": "动画少儿",
    "tags": [
      "后核战",
      "废土",
      "军事科幻",
      "人性拷问"
    ],
    "oneLine": "核战后的东京废墟上,三派幸存者为了争夺最后一座净水工厂,准备发动最后一次战争。"
  },
  {
    "title": "汉普斯特德公园国语",
    "href": "details/movie-0771.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "美国/英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "都市生存",
      "中年危机",
      "反差喜剧",
      "温情"
    ],
    "oneLine": "纽约精英女律师,在伦敦公园里爱上了一个住在帐篷里的“流浪哲学家”。"
  },
  {
    "title": "绝对统治",
    "href": "details/movie-0772.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "美国",
    "type": "TV Series",
    "category": "科幻奇幻",
    "tags": [
      "反乌托邦",
      "政治阴谋",
      "监控社会",
      "反抗军",
      "独裁"
    ],
    "oneLine": "在全民被植入情绪监控芯片的未来,一名底层分析师发现了推翻“绝对统治”的唯一漏洞。"
  },
  {
    "title": "一个去了火星的男人",
    "href": "details/movie-0773.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "太空",
      "孤独",
      "老年",
      "回忆",
      "慢科幻"
    ],
    "oneLine": "七十岁的退休宇航员是唯一去过火星的人,如今他在地球上迷路,需要孙子带他回家。"
  },
  {
    "title": "机械人间",
    "href": "details/movie-0774.html",
    "cover": "./24.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "机器人",
      "伦理",
      "犯罪",
      "近未来",
      "烧脑"
    ],
    "oneLine": "近未来社会,机器人被销毁前会哭泣,而专门销毁机器人的技工发现自己也是一台机器人。"
  },
  {
    "title": "柯达克罗姆胶卷",
    "href": "details/movie-0775.html",
    "cover": "./25.jpg",
    "year": "2017",
    "region": "加拿大/美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "摄影",
      "父子关系",
      "胶片时代",
      "绝症",
      "怀旧"
    ],
    "oneLine": "一名唱片业经纪人被迫开车送脾气暴躁的摄影师父亲去堪萨斯,赶在最后一家冲印店关门之前冲洗四卷未公开的柯达克罗姆胶卷。"
  },
  {
    "title": "魔游纪",
    "href": "details/movie-0776.html",
    "cover": "./26.jpg",
    "year": "2017",
    "region": "中国",
    "type": "网络电影系列",
    "category": "科幻奇幻",
    "tags": [
      "西游改编",
      "异世界",
      "组队打怪",
      "视觉系",
      "公路片"
    ],
    "oneLine": "唐僧取经三百年后,取经人沦为赏金猎人,护送一名会放电的小女孩寻找传说中的“雷音寺遗迹”。"
  },
  {
    "title": "我的新上司是天然呆",
    "href": "details/movie-0777.html",
    "cover": "./27.jpg",
    "year": "2023",
    "region": "日本",
    "type": "TV剧集",
    "category": "喜剧家庭",
    "tags": [
      "社畜",
      "治愈",
      "天然呆上司",
      "心灵创伤",
      "搞笑"
    ],
    "oneLine": "被前上司精神压迫的社畜跳槽后,发现新上司是个呆萌到令人担心的天然呆暖男。"
  },
  {
    "title": "吴郭鱼",
    "href": "details/movie-0778.html",
    "cover": "./28.jpg",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "乡土",
      "父子关系",
      "鱼类隐喻",
      "和解"
    ],
    "oneLine": "他从城市回到渔村,发现那个像吴郭鱼一样沉默、耐活、浑身是刺的父亲,已经记不得他了。"
  },
  {
    "title": "威震群雄",
    "href": "details/movie-0779.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "帮派",
      "复仇",
      "权力游戏",
      "兄弟情"
    ],
    "oneLine": "为了给义父报仇,一个身世成谜的年轻人,凭一己之力搅乱了整个亚洲黑道。"
  },
  {
    "title": "史酷比:僵尸岛历险记",
    "href": "details/movie-0780.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "美国",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "狗",
      "解谜",
      "丧尸",
      "恶搞",
      "合家欢"
    ],
    "oneLine": "神秘公司收到无人岛求救信号,上岛后发现居民全是爱吃辣椒酱的“丧尸”。"
  },
  {
    "title": "白石山下一家人",
    "href": "details/movie-0781.html",
    "cover": "./31.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "乡村",
      "亲情",
      "脱贫攻坚",
      "群像",
      "正能量"
    ],
    "oneLine": "白石山村的杨家四兄妹,在父亲临终前立下“不分家”的誓言,却在脱贫致富的路上冲突不断。"
  },
  {
    "title": "最后的公爵",
    "href": "details/movie-0782.html",
    "cover": "./32.jpg",
    "year": "2021",
    "region": "意大利",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "贵族",
      "没落",
      "遗产",
      "庄园",
      "黑色幽默"
    ],
    "oneLine": "2019年,意大利最后一位世袭公爵变卖了所有封地,只剩下一座千疮百孔的宫殿和三个想赶他走的流浪汉。"
  },
  {
    "title": "花月佳期",
    "href": "details/movie-0783.html",
    "cover": "./33.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "穿越",
      "戏曲",
      "前世今生",
      "徐克风格"
    ],
    "oneLine": "一对戏班里的欢喜冤家,被一支神秘的红烛拉进了戏文里的世界,只有真正相爱才能回来。"
  },
  {
    "title": "首席干饭人",
    "href": "details/movie-0784.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "美食",
      "职场",
      "穿越",
      "金手指",
      "轻松"
    ],
    "oneLine": "川菜大厨穿越成古代宫廷御膳房实习生,靠美食征服皇帝和权臣。"
  },
  {
    "title": "哥你好",
    "href": "details/movie-0785.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "穿越",
      "兄妹",
      "互换身体",
      "校园",
      "年代感"
    ],
    "oneLine": "傲娇的职场女强人意外穿越回1998年,发现自己竟成了正在追求妈妈的高中傻小子“哥”。"
  },
  {
    "title": "青春之爱",
    "href": "details/movie-0786.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "双向暗恋",
      "社团",
      "夏日",
      "乐队"
    ],
    "oneLine": "吉他社社长阿Now暗恋篮球队学长,却收到了学长死对头——学生会主席递来的情书。"
  },
  {
    "title": "武林:唐门秘毒",
    "href": "details/movie-0787.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "唐门",
      "毒术",
      "灭门",
      "复仇",
      "反转"
    ],
    "oneLine": "唐门一夜灭门,唯一幸存者发现自己体内被种下了七种慢性剧毒。"
  },
  {
    "title": "被遗忘的人",
    "href": "details/movie-0788.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "身份迷失",
      "社会福利系统",
      "孤独",
      "寻找",
      "冷峻"
    ],
    "oneLine": "一个没有身份证、没有档案、没有任何人记得的男人,在德国福利系统的缝隙里,拼命证明自己活过。"
  },
  {
    "title": "日月相祝",
    "href": "details/movie-0789.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "昼与夜",
      "双面女主",
      "都市奇幻",
      "宿命之恋"
    ],
    "oneLine": "白天她是平凡上班族,夜晚她是顶级调香师,两个身份爱上同一个男人,但她不知道“她们”是同一个自己。"
  },
  {
    "title": "纳瓦隆大炮",
    "href": "details/movie-0790.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "美国/英国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "二战",
      "特种",
      "堡垒"
    ],
    "oneLine": "二战末期,一队盟军特工潜入希腊海岛,目标是炸毁一门能封锁爱琴海的超巨型列车炮。"
  },
  {
    "title": "七日风流七夜春",
    "href": "details/movie-0791.html",
    "cover": "./41.jpg",
    "year": "1993",
    "region": "香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "都市",
      "艳遇",
      "风月",
      "九十年代"
    ],
    "oneLine": "保守的图书管理员误打误撞住进牛郎公寓,七天内体验了七种离谱人生。"
  },
  {
    "title": "绝境盟约",
    "href": "details/movie-0792.html",
    "cover": "./42.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "安第斯",
      "空难",
      "生存",
      "真实改编"
    ],
    "oneLine": "一支业余橄榄球队的飞机坠毁在安第斯山脉,幸存者为了活下去,立下了“绝境盟约”。"
  },
  {
    "title": "第二面",
    "href": "details/movie-0793.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "双重人格",
      "连环杀人",
      "法庭反转",
      "记忆欺骗"
    ],
    "oneLine": "一名温文尔雅的小学教师被指控为连环杀手,他的律师发现,连他自己都不知道自己还有另一个人格。"
  },
  {
    "title": "极限战士",
    "href": "details/movie-0794.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "机甲",
      "外骨骼",
      "特种部队",
      "反恐",
      "极限运动"
    ],
    "oneLine": "一支装备实验性外骨骼的特种小队潜入恐怖分子控制的太空电梯,必须在零重力环境中执行“不可能完成”的营救任务。"
  },
  {
    "title": "越洋救援",
    "href": "details/movie-0795.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "美国/英国",
    "type": "电视剧(6集)",
    "category": "海外精选",
    "tags": [
      "二战",
      "犹太难民",
      "真实历史改编",
      "跨洋行动"
    ],
    "oneLine": "二战期间,一群业余间谍通过伪造护照和贿赂,从里斯本救出数百名犹太艺术家。"
  },
  {
    "title": "不许向上看",
    "href": "details/movie-0796.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "末日",
      "神秘事件",
      "集体失明",
      "悬疑",
      "反乌托邦"
    ],
    "oneLine": "一颗神秘天体的出现,让所有仰望天空的人类在瞬间集体失明,幸存者被告知“不许向上看”。"
  },
  {
    "title": "红粉雪奇冤",
    "href": "details/movie-0797.html",
    "cover": "./47.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "清朝",
      "探案",
      "女装",
      "雪灾",
      "官场"
    ],
    "oneLine": "清朝末年一场大雪压垮了粮仓,两位知县互相指认对方是女装大佬,案情逐渐走向失控。"
  },
  {
    "title": "邪教招魂",
    "href": "details/movie-0798.html",
    "cover": "./48.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "伪纪录片",
      "邪教",
      "灵媒",
      "考古"
    ],
    "oneLine": "纪录片团队跟随灵媒调查失踪少女案,却意外召唤出邪教信奉的百鬼之王。"
  },
  {
    "title": "超神学院第二季",
    "href": "details/movie-0799.html",
    "cover": "./49.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络动画剧集",
    "category": "动作冒险",
    "tags": [
      "异能觉醒",
      "校园战斗",
      "神明降临"
    ],
    "oneLine": "期末考试周,全校学生突然被拉入神战游戏,不及格者将永久消失。"
  },
  {
    "title": "女汤",
    "href": "details/movie-0800.html",
    "cover": "./50.jpg",
    "year": "1999",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女性",
      "汤屋",
      "和解",
      "乡土"
    ],
    "oneLine": "台北一家老牌女汤浴室面临拆迁,四代女客人的秘密随着蒸汽一同涌出。"
  },
  {
    "title": "一条狗的使命",
    "href": "details/movie-0801.html",
    "cover": "./51.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "轮回",
      "宠物",
      "治愈",
      "忠诚"
    ],
    "oneLine": "一只狗历经四次转世,最终回到了最初的主人身边,帮他找回了初恋。"
  },
  {
    "title": "安冬万叔叔",
    "href": "details/movie-0802.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "阿尔茨海默",
      "乡愁",
      "祖孙情",
      "救赎",
      "遗产"
    ],
    "oneLine": "叛逆少年被送去照顾患上阿尔茨海默的古怪叔公,却意外揭开了一段被埋藏半个世纪的家族秘密。"
  },
  {
    "title": "不需要爱情的夏天",
    "href": "details/movie-0803.html",
    "cover": "./53.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "济州岛",
      "失语症",
      "疗愈",
      "民宿",
      "孤独"
    ],
    "oneLine": "失语症女孩在济州岛经营一家“拒绝恋人”的民宿,直到一个无法恋爱的绝症男人推门而入。"
  },
  {
    "title": "潜伏者2016",
    "href": "details/movie-0804.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "卧底",
      "特工",
      "反转",
      "硬核"
    ],
    "oneLine": "一名CIA特工奉命潜入恐怖组织,却发现自己渐渐分不清正义与邪恶的界限。"
  },
  {
    "title": "世界属于你",
    "href": "details/movie-0805.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "黑帮喜剧",
      "废物逆袭",
      "家族恩怨",
      "意式幽默"
    ],
    "oneLine": "黑手党老大最废物的儿子在父亲被暗杀后,靠一本《高效能人士的七个习惯》接管了整个家族生意。"
  },
  {
    "title": "滑头鬼之孙第二季",
    "href": "details/movie-0806.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "日本",
    "type": "TV Series",
    "category": "动画少儿",
    "tags": [
      "百鬼夜行",
      "三代目",
      "觉醒",
      "妖怪战斗",
      "继承"
    ],
    "oneLine": "四分之一的妖怪血脉觉醒,陆生必须在人类同伴与奴良组存亡之间,做出最终抉择。"
  },
  {
    "title": "非正常动物研究中心",
    "href": "details/movie-0807.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "变种动物",
      "伦理",
      "讽刺"
    ],
    "oneLine": "在这个地下研究所,猪会算微积分,鹦鹉在背《圣经》,而人类才是真正的“实验品”。"
  },
  {
    "title": "我在密苏里,我正青春",
    "href": "details/movie-0808.html",
    "cover": "./58.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "美国中部",
      "玉米地",
      "宗教保守",
      "LGBT",
      "诗选剧"
    ],
    "oneLine": "在密苏里州一个禁止跳舞的小镇,五个问题少年少女计划在毕业当晚举办一场“违法”的舞会。"
  },
  {
    "title": "舞动节拍",
    "href": "details/movie-0809.html",
    "cover": "./59.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "街舞",
      "古典芭蕾",
      "校园社团",
      "团队合作",
      "梦想"
    ],
    "oneLine": "一群被学校边缘化的街舞少年,必须与传统芭蕾天才们联手,才能保住社团活动室并赢下全国大赛。"
  },
  {
    "title": "丹青小姐",
    "href": "details/movie-0810.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "国画",
      "宅斗",
      "替身",
      "虐恋"
    ],
    "oneLine": "一名女画师被选入王府为已故王妃画像,却发现王妃死因蹊跷,而自己长得与王妃一模一样,王爷开始将她当作替身。"
  },
  {
    "title": "摇滚总动员",
    "href": "details/movie-0811.html",
    "cover": "./61.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "小镇青年",
      "乐队",
      "逆袭",
      "热血",
      "荒诞"
    ],
    "oneLine": "四个小镇修车工为追寻摇滚梦,竟偷了顾客的豪车一路狂飙去参加决赛。"
  },
  {
    "title": "魔女之刃",
    "href": "details/movie-0812.html",
    "cover": "./62.jpg",
    "year": "2006",
    "region": "日本",
    "type": "动画",
    "category": "科幻奇幻",
    "tags": [
      "战斗女郎",
      "古代遗物",
      "母女情深",
      "暴力美学",
      "反英雄"
    ],
    "oneLine": "普通的警员天羽梨穗子被一副拥有自我意志的远古护臂选中,从此背负上毁灭一切的诅咒之力。"
  },
  {
    "title": "枪",
    "href": "details/movie-0813.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "写实",
      "暴力美学",
      "命运"
    ],
    "oneLine": "一把非法改装的手枪流转于巴黎郊区六个陌生人手中,每次扣动扳机,都改变一次命运。"
  },
  {
    "title": "伊凡的少年时代",
    "href": "details/movie-0814.html",
    "cover": "./64.jpg",
    "year": "2022",
    "region": "俄罗斯",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "黑白摄影",
      "诗意",
      "二战",
      "儿童视角"
    ],
    "oneLine": "十二岁的伊凡为了给父母报仇,成为一名少年侦察兵,但他最想要的却是做一个普通的噩梦。"
  },
  {
    "title": "漂洋过海来看你",
    "href": "details/movie-0815.html",
    "cover": "./65.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "异地恋",
      "治愈",
      "成长",
      "都市"
    ],
    "oneLine": "一封寄错的信,让两个绝望的灵魂在大洋彼岸开启了长达十年的书信相守。"
  },
  {
    "title": "女人香",
    "href": "details/movie-0816.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "调香师",
      "嗅觉记忆",
      "母女关系",
      "气味犯罪"
    ],
    "oneLine": "天才调香师母亲骤然失智,女儿发现她最后一件未完成的作品,竟是用不同男人的背叛气息调制的一瓶“仇人香水”。"
  },
  {
    "title": "大宅门1",
    "href": "details/movie-0817.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "药行",
      "民国",
      "宅斗",
      "传奇"
    ],
    "oneLine": "1930年代,北平药行百年老号“怀济堂”内忧外患,少东家如何在家族内斗与日军威逼下,守住一张神秘药方。"
  },
  {
    "title": "盗命兄弟",
    "href": "details/movie-0818.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "兄弟情",
      "器官贩卖",
      "反转"
    ],
    "oneLine": "一对感情深厚的贫穷兄弟为了给母亲治病,被迫卷入地下器官交易,却发现自己要“拆解”的竟是失散多年的亲大哥。"
  },
  {
    "title": "他在窥着你",
    "href": "details/movie-0819.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "偷窥",
      "公寓",
      "反转",
      "心理战",
      "女性视角"
    ],
    "oneLine": "独居女子意外发现家中藏有针孔摄像头,当她根据线索找到偷窥者时,竟发现对方也在看着她留下的“礼物”。"
  },
  {
    "title": "时空侠",
    "href": "details/movie-0820.html",
    "cover": "./70.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "穿越",
      "历史",
      "搞笑",
      "侠客",
      "单元剧"
    ],
    "oneLine": "不靠谱的时空管理局实习生,总把历史改得一团糟,再哭着去补救。"
  },
  {
    "title": "李狗娃",
    "href": "details/movie-0821.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "留守儿童",
      "乡村教师",
      "方言电影",
      "纪实风格"
    ],
    "oneLine": "李狗娃是全村最野的孩子,新来的支教老师却在他身上看到了一个消失已久的数学天才的影子。"
  },
  {
    "title": "霍拉一家",
    "href": "details/movie-0822.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "丧子",
      "代孕",
      "伦理",
      "和解"
    ],
    "oneLine": "儿子的遗愿是让父母用他冻存的精子再生一个孩子,但当孩子出生后,爷爷奶奶发现这孩子长得越来越像已故的儿子。"
  },
  {
    "title": "子非鱼",
    "href": "details/movie-0823.html",
    "cover": "./73.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "黑色幽默",
      "身份错位",
      "方言"
    ],
    "oneLine": "一个水产市场鱼贩被误认为市领导,整个菜市场的人逼他“好好当官”。"
  },
  {
    "title": "警界黑幕",
    "href": "details/movie-0824.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "巴西",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "贫民窟",
      "腐败",
      "暴力美学",
      "双雄"
    ],
    "oneLine": "一名理想主义的新人警察,被分配给了腐败的老警察当搭档,却发现师傅在替穷人伸张正义。"
  },
  {
    "title": "翠谷奇谭",
    "href": "details/movie-0825.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "台湾民俗",
      "乡野奇谈",
      "山村",
      "灵异",
      "民俗恐怖"
    ],
    "oneLine": "一个被时代遗忘的山谷里,每隔三十年就会发生一次集体失忆,没有人知道为什么。"
  },
  {
    "title": "超级巴迪",
    "href": "details/movie-0826.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "超级英雄",
      "萌宠",
      "儿童",
      "变身",
      "欢乐"
    ],
    "oneLine": "流浪狗巴迪被神秘陨石砸中,获得超级力量后开始用狗的逻辑行侠仗义。"
  },
  {
    "title": "草莽双雄",
    "href": "details/movie-0827.html",
    "cover": "./77.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "兄弟",
      "黑吃黑",
      "东北喜剧",
      "暴力美学"
    ],
    "oneLine": "一个落魄拳手和一个话痨小贼,阴差阳错抢了同一家赌场,被黑道追杀时才发现对方是自己失散多年的亲兄弟。"
  },
  {
    "title": "雨爱千金",
    "href": "details/movie-0828.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "豪门",
      "虐恋",
      "复仇",
      "狗血"
    ],
    "oneLine": "暴雨之夜,复仇千金假扮失明女仆潜入豪门,却与仇人之子产生了致命吸引力。"
  },
  {
    "title": "神圣之家",
    "href": "details/movie-0829.html",
    "cover": "./79.jpg",
    "year": "2023",
    "region": "西班牙",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "宗教家庭",
      "秘密与谎言",
      "多代同堂"
    ],
    "oneLine": "经营殡仪馆的天主教家庭,表面圣洁,背地里每个人都有见不得光的秘密。"
  },
  {
    "title": "博物馆惊魂夜:卡门拉回归",
    "href": "details/movie-0830.html",
    "cover": "./80.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "博物馆",
      "复活",
      "经典反派回归"
    ],
    "oneLine": "夜晚的博物馆再次复活,而曾经被封印的法老王卡门拉带着更可怕的诅咒卷土重来。"
  },
  {
    "title": "奔流到海",
    "href": "details/movie-0831.html",
    "cover": "./81.jpg",
    "year": "2019",
    "region": "中国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "漂流",
      "黄河",
      "生态",
      "救赎"
    ],
    "oneLine": "两个患癌的老人自制木筏,顺着黄河漂流,只想在入海前看一眼自己污染的故乡。"
  },
  {
    "title": "倩狐之京卫怪谈",
    "href": "details/movie-0832.html",
    "cover": "./82.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "国产短剧",
    "tags": [
      "古装",
      "狐妖",
      "悬疑",
      "捉妖",
      "言情"
    ],
    "oneLine": "京城锦衣卫指挥使接连被害,现场都留有一缕白毛,民间传言狐妖索命,但新来的仵作发现死者全是太监。"
  },
  {
    "title": "小心身后",
    "href": "details/movie-0833.html",
    "cover": "./83.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "都市传说",
      "公寓",
      "镜面",
      "心理惊悚",
      "反转"
    ],
    "oneLine": "独居女子发现每当她转身,身后的镜子里就会多出一个不存在的家具。"
  },
  {
    "title": "血与性:400年王室风云",
    "href": "details/movie-0834.html",
    "cover": "./84.jpg",
    "year": "2021",
    "region": "英国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "王室",
      "宫廷秘史",
      "权力斗争",
      "性",
      "阴谋"
    ],
    "oneLine": "从亨利八世到维多利亚女王,用最私密的信件和日记,揭开四百年欧洲王室的床笫与权谋。"
  },
  {
    "title": "爱娃的爱",
    "href": "details/movie-0835.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "人工智能",
      "母爱",
      "人机关系"
    ],
    "oneLine": "一位失去女儿的母亲,将 AI 机器人“爱娃”带回家,却发现机器人的爱可能比人类更深沉、更危险。"
  },
  {
    "title": "城市之夜",
    "href": "details/movie-0836.html",
    "cover": "./86.jpg",
    "year": "2021",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "一夜邂逅",
      "孤独都市",
      "暧昧情感"
    ],
    "oneLine": "巴黎一夜,一个失眠的男人和一个逃婚的女人,在街头漫无目的地行走与交谈。"
  },
  {
    "title": "家庭圣女",
    "href": "details/movie-0837.html",
    "cover": "./87.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "家庭伦理",
      "女性",
      "牺牲",
      "文艺",
      "宿命"
    ],
    "oneLine": "家族里最小的女儿为了瘫痪母亲放弃了出国留学,却在母亲的日记里发现了惊天的秘密。"
  },
  {
    "title": "日本黑社会",
    "href": "details/movie-0838.html",
    "cover": "./88.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "极道题材",
      "写实暴力",
      "组织瓦解",
      "平成年代",
      "人性挣扎"
    ],
    "oneLine": "从一个底层小弟的视角,见证日本黑社会从昭和极盛到被《暴力团对策法》逼入绝境的三十年。"
  },
  {
    "title": "哈啰你有事吗",
    "href": "details/movie-0839.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "社畜",
      "电话客服",
      "荒诞日常"
    ],
    "oneLine": "一家电话客服公司的奇葩日常,每位员工每天接100个电话,至少80个是来找茬的。"
  },
  {
    "title": "常盘庄的青春",
    "href": "details/movie-0840.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "漫画",
      "昭和时代",
      "友情"
    ],
    "oneLine": "青年手冢治虫和他的漫画家朋友们,在破旧公寓“常盘庄”里追逐梦想的热血岁月。"
  },
  {
    "title": "妙人妙事粤语",
    "href": "details/movie-0841.html",
    "cover": "./91.jpg",
    "year": "1978",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "市井",
      "邻里",
      "搞笑",
      "粤语片",
      "许冠文风格"
    ],
    "oneLine": "一幢旧楼里的几户奇葩邻居为了一笔意外之财,上演啼笑皆非的闹剧。"
  },
  {
    "title": "印第安人乔",
    "href": "details/movie-0842.html",
    "cover": "./92.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "复仇",
      "荒野追杀",
      "边缘人",
      "暴力美学"
    ],
    "oneLine": "一个混迹于白人小镇的印第安裔神枪手,为报杀父之仇,与整个腐败的警长系统为敌。"
  },
  {
    "title": "47",
    "href": "details/movie-0843.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "基因实验",
      "密室逃脱",
      "伦理困境"
    ],
    "oneLine": "47个克隆人被关在同一座迷宫,只有最后活下来的那个才能见到真正的“自己”。"
  },
  {
    "title": "探长拉瓦丁",
    "href": "details/movie-0844.html",
    "cover": "./94.jpg",
    "year": "2024",
    "region": "法国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "探案",
      "心理分析",
      "法国小镇",
      "单元剧"
    ],
    "oneLine": "巴黎刑警拉瓦丁被贬到法国南部小镇,却发现这里的每一起案件都和他十二年前未破的悬案有关。"
  },
  {
    "title": "恋梦空间第一季",
    "href": "details/movie-0845.html",
    "cover": "./95.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "category": "都市爱情",
    "tags": [
      "素人",
      "合宿",
      "心动信号",
      "治愈"
    ],
    "oneLine": "八位来自不同城市的单身男女,在一栋名为“恋梦空间”的海边别墅里,寻找爱情与自我。"
  },
  {
    "title": "暗黑骰子",
    "href": "details/movie-0846.html",
    "cover": "./96.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "赌博游戏",
      "命运交换",
      "因果报应",
      "心理博弈",
      "社会批判"
    ],
    "oneLine": "七个欠下巨额高利贷的人被关进密室,靠投掷一枚“暗黑骰子”来转移债务,点数最小的将承受所有人的债。"
  },
  {
    "title": "超高速!参勤交代",
    "href": "details/movie-0847.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "江户时代",
      "武士",
      "公路片",
      "热血"
    ],
    "oneLine": "藩主必须在五天内从江户赶回领地,否则藩国将被除名,而他只有三个废柴家臣。"
  },
  {
    "title": "长颈鹿扎拉法",
    "href": "details/movie-0848.html",
    "cover": "./98.jpg",
    "year": "2012",
    "region": "法国/德国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "2D手绘",
      "真实事件改编",
      "非洲风情",
      "治愈旅程",
      "异域情缘"
    ],
    "oneLine": "十九世纪,一只被送给法国国王的长颈鹿,从苏丹徒步跨越非洲和地中海,开启了一段传奇旅行。"
  },
  {
    "title": "玻璃瓶中的时光",
    "href": "details/movie-0849.html",
    "cover": "./99.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "时间循环",
      "哲学",
      "唯美"
    ],
    "oneLine": "物理学家发明了储存时间的玻璃瓶,她将初恋的七天装进去,却发现瓶中的他爱上了别人。"
  },
  {
    "title": "智能爱人粤语",
    "href": "details/movie-0850.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "AI",
      "人机恋",
      "伦理",
      "喜剧",
      "温情"
    ],
    "oneLine": "香港废青网购了一个瑕疵版“完美女友”机器人,却发现她有了自我意识,还说粤语粗口比他更地道。"
  },
  {
    "title": "蛋糕合唱团",
    "href": "details/movie-0851.html",
    "cover": "./101.jpg",
    "year": "2021",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "合唱团",
      "烘焙",
      "治愈",
      "社区",
      "草根"
    ],
    "oneLine": "一群生活失意的烘焙师深夜组建合唱团,用烤箱和歌声对抗拆迁通知。"
  },
  {
    "title": "凤舞龙翔",
    "href": "details/movie-0852.html",
    "cover": "./102.jpg",
    "year": "2027",
    "region": "中国大陆,香港",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "女性江湖",
      "权谋",
      "冷兵器美学"
    ],
    "oneLine": "皇权倾覆的乱世中,一名宫中乐坊的舞姬与一位隐姓埋名的前朝女将军联手改写了天下格局。"
  },
  {
    "title": "敦煌夜谭",
    "href": "details/movie-0853.html",
    "cover": "./103.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "敦煌",
      "壁画",
      "文物盗窃",
      "古今交错"
    ],
    "oneLine": "一幅被盗的唐代敦煌壁画残卷,竟连接着现代考古队与千年前画师的命运,引发跨越时空的连锁血案。"
  },
  {
    "title": "蝉蜕2021",
    "href": "details/movie-0854.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "成长",
      "乡村",
      "夏季",
      "秘密"
    ],
    "oneLine": "2000年台湾乡下,两个男孩在蝉鸣的夏天共享了一个秘密,这个秘密直到2021年疫情隔离期间才得以破“壳”而出。"
  },
  {
    "title": "密码46",
    "href": "details/movie-0855.html",
    "cover": "./105.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "基因编辑",
      "反乌托邦",
      "数字伦理"
    ],
    "oneLine": "未来世界每个人的基因缺陷都是公开的犯罪代码,而代码“46”代表“有自由意志”。"
  },
  {
    "title": "无辜的七个",
    "href": "details/movie-0856.html",
    "cover": "./106.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "集体谎言",
      "替罪羊",
      "校园黑暗"
    ],
    "oneLine": "七个学生自称无辜,但他们身上沾着同一个人的血。"
  },
  {
    "title": "冰血暴第五季",
    "href": "details/movie-0857.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "美国",
    "type": "美剧",
    "category": "悬疑犯罪",
    "tags": [
      "明尼苏达",
      "连环杀手",
      "普通人作恶"
    ],
    "oneLine": "北达科他州暴雪夜,一名女警追查失踪人口案,却挖出一个横跨三代的犯罪家族。"
  },
  {
    "title": "局中劫",
    "href": "details/movie-0858.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "高智商对决",
      "棋盘隐喻",
      "金融犯罪",
      "全员恶人"
    ],
    "oneLine": "一张被退回的汇票,牵出横跨三国的洗钱网络,而他发现自己从一开始就在棋局里。"
  },
  {
    "title": "海角上的兄妹",
    "href": "details/movie-0859.html",
    "cover": "./109.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "自闭症",
      "兄妹情",
      "穷困潦倒",
      "死亡与救赎"
    ],
    "oneLine": "患有自闭症的妹妹被镇上混混诱骗拍摄影片赚钱,当过刑警的哥哥持刀踏上了复仇之路。"
  },
  {
    "title": "鹰之眼",
    "href": "details/movie-0860.html",
    "cover": "./110.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "无人机",
      "AI叛变",
      "天眼系统",
      "身份错位",
      "限时营救"
    ],
    "oneLine": "一名失业退伍兵和一名女律师,突然被一个全能AI系统操控,被迫完成一系列致命任务。"
  },
  {
    "title": "说谎的女人",
    "href": "details/movie-0861.html",
    "cover": "./111.jpg",
    "year": "1985",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "让-吕克·戈达尔?",
      "存在主义",
      "碎片叙事",
      "巴黎"
    ],
    "oneLine": "一个总是撒谎的富家女在度假时遇到了一名穷记者,她撒了一个谎,却成了唯一的真相。"
  },
  {
    "title": "白夜婚礼",
    "href": "details/movie-0862.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "北欧 (挪威/瑞典)",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "极昼",
      "婚礼",
      "家庭秘密",
      "北欧冷感",
      "黑色幽默"
    ],
    "oneLine": "一场在极昼地区举办的午夜婚礼,所有来宾都藏着不可告人的秘密。"
  },
  {
    "title": "功夫男仆",
    "href": "details/movie-0863.html",
    "cover": "./113.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "格斗",
      "主仆",
      "反差萌"
    ],
    "oneLine": "一个隐退的功夫大师化名“阿福”,应聘成为顶级富豪的贴身男仆,暗中保护曾有过节的仇人之女。"
  },
  {
    "title": "别爱我",
    "href": "details/movie-0864.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "契约恋爱",
      "失忆",
      "阴谋",
      "反套路",
      "虐恋"
    ],
    "oneLine": "她签下契约假装爱他,他在失忆后信以为真。但当他恢复记忆,发现当初让他失忆的,就是她。"
  },
  {
    "title": "人造怪物",
    "href": "details/movie-0865.html",
    "cover": "./115.jpg",
    "year": "2019",
    "region": "美国/墨西哥",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "基因编辑",
      "黑白质感",
      "复古科幻"
    ],
    "oneLine": "疯狂的科学家用电击使尸体复活,不料造出的怪物拥有吸收机械并改造肢体的恐怖能力。"
  },
  {
    "title": "神计鬼诈",
    "href": "details/movie-0866.html",
    "cover": "./116.jpg",
    "year": "1982",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港式喜剧",
      "骗中骗",
      "师徒斗法",
      "怀旧",
      "金句频出"
    ],
    "oneLine": "老千宗师被徒弟骗光家产后,收了一个更骗术高明的乞丐当新徒弟,联手反杀。"
  },
  {
    "title": "金石情",
    "href": "details/movie-0867.html",
    "cover": "./117.jpg",
    "year": "1966",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "黄梅调",
      "邵氏",
      "坚贞",
      "才子佳人",
      "古典美学"
    ],
    "oneLine": "富家女爱上穷书生,父亲说除非石头开花,否则不准成婚。"
  },
  {
    "title": "追杀女巫猎人",
    "href": "details/movie-0868.html",
    "cover": "./118.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "女巫",
      "反英雄",
      "血腥"
    ],
    "oneLine": "世界上最后一个女巫猎人发现,自己猎杀的女巫都是被教会诬陷的普通女性,于是他调转枪口,追杀曾经的雇主。"
  },
  {
    "title": "粉红女郎·爱人快跑",
    "href": "details/movie-0869.html",
    "cover": "./119.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "结婚狂",
      "万人迷",
      "男人婆",
      "哈妹",
      "翻拍"
    ],
    "oneLine": "二十年后的“结婚狂”终于要结婚了,四位年过四十的“粉红女郎”重聚首,却在婚礼前夜发现了新郎的天大秘密。"
  },
  {
    "title": "羞耻",
    "href": "details/movie-0870.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "家庭秘密",
      "道德困境",
      "女性觉醒"
    ],
    "oneLine": "一场葬礼上,三个女儿被迫公开朗读父亲日记,发现他一生守护着一个不可告人的秘密。"
  },
  {
    "title": "上线下线",
    "href": "details/movie-0871.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "网络诈骗",
      "卧底",
      "高能反转",
      "双面人生"
    ],
    "oneLine": "反诈警察为破案化身诈骗集团“技术总舵”,却在虚拟世界里遇到了自己失踪三年的亲妹妹。"
  },
  {
    "title": "坏教育",
    "href": "details/movie-0872.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "学术造假",
      "精英高中",
      "女校长",
      "丑闻"
    ],
    "oneLine": "全美排名第一的公立高中爆出毕业班集体作弊案,始作俑者竟是“最受爱戴”的校长本人。"
  },
  {
    "title": "买买提外传",
    "href": "details/movie-0873.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "新疆",
      "乡村振兴",
      "足球"
    ],
    "oneLine": "新疆沙漠边上的小村里,爱吹牛的买买提说自家驴能踢足球,结果引来了省里的电视台。"
  },
  {
    "title": "豪门恩怨",
    "href": "details/movie-0874.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "财阀争斗",
      "复仇",
      "狗血"
    ],
    "oneLine": "私生女伪装成海归设计师回到财阀家,却发现看似慈祥的老爷子才是害死她生母的真凶。"
  },
  {
    "title": "表情奇幻冒险",
    "href": "details/movie-0875.html",
    "cover": "./125.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "表情包",
      "互联网世界",
      "冒险",
      "合家欢"
    ],
    "oneLine": "一个能做出多种表情的“不正常”表情包,为了修复自己被删除的命运而闯入手机世界。"
  },
  {
    "title": "孽海痴魂",
    "href": "details/movie-0876.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "前世今生",
      "日据时代",
      "神鬼传说",
      "虐恋"
    ],
    "oneLine": "现代建筑师总梦见自己是一百年前被烧死的庙祝,直到他在台南遇见那个神似神像的女导游。"
  },
  {
    "title": "爱杀疑云",
    "href": "details/movie-0877.html",
    "cover": "./127.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "烧脑",
      "反转",
      "渣男"
    ],
    "oneLine": "富商离奇坠楼,情妇被锁定为凶手,但随着调查深入,每个人都在这起“爱杀”案中露出了贪婪的獠牙。"
  },
  {
    "title": "万千星辉贺台庆2022",
    "href": "details/movie-0878.html",
    "cover": "./128.jpg",
    "year": "2022",
    "region": "中国香港",
    "type": "综艺/特别节目",
    "category": "海外精选",
    "tags": [
      "TVB",
      "台庆",
      "群星"
    ],
    "oneLine": "TVB55周年台庆夜,一位消失十年的前“视后”突然出现在观众席第三排,没人知道她是怎么进来的。"
  },
  {
    "title": "绅士爱美人",
    "href": "details/movie-0879.html",
    "cover": "./129.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "钻石大盗",
      "姐妹情",
      "奢华骗局",
      "反转"
    ],
    "oneLine": "一对专钓富豪的闺蜜卷入跨国钻石阴谋,爱情与友情面临终极考验。"
  },
  {
    "title": "时光穿梭",
    "href": "details/movie-0880.html",
    "cover": "./130.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "时空穿越",
      "平行宇宙",
      "特工",
      "祖父悖论",
      "燃"
    ],
    "oneLine": "为了拯救被暗杀的母亲,顶级特工回到过去,却发现要杀她的人正是年轻的自己。"
  },
  {
    "title": "吉姆·诺顿:满口耻言",
    "href": "details/movie-0881.html",
    "cover": "./131.jpg",
    "year": "2022",
    "region": "美国",
    "type": "综艺",
    "category": "喜剧家庭",
    "tags": [
      "单口喜剧",
      "辛辣",
      "政治不正确",
      "成人向",
      "犀利"
    ],
    "oneLine": "喜剧老炮吉姆·诺顿火力全开,用最冒犯的语言,骂遍世间所有虚伪与荒唐。"
  },
  {
    "title": "死亡真面目3",
    "href": "details/movie-0882.html",
    "cover": "./132.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "邪典",
      "血腥",
      "禁忌影像",
      "第四面墙"
    ],
    "oneLine": "摄制组为了拍摄前两集的受害者家属,意外发现录像带能让人“看见”自己的死亡方式。"
  },
  {
    "title": "火海神鎗",
    "href": "details/movie-0883.html",
    "cover": "./133.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "消防员",
      "狙击手",
      "油库爆炸",
      "双雄"
    ],
    "oneLine": "一场油库连环爆炸中,消防员与躲在暗处的狙击手必须放下恩怨,共同拯救300条生命。"
  },
  {
    "title": "小迷糊当大兵",
    "href": "details/movie-0884.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "替代役",
      "成长",
      "爆笑军营"
    ],
    "oneLine": "天兵菜鸟误入特种部队,把拆弹笔记画成了美食图鉴,引发连环乌龙。"
  },
  {
    "title": "夕风之街樱之国",
    "href": "details/movie-0885.html",
    "cover": "./135.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "广岛",
      "原爆",
      "记忆",
      "和解"
    ],
    "oneLine": "三代广岛女性,在夕风吹拂的老街上,用跨越半个世纪的秘密,缝补着战争留下的伤痕。"
  },
  {
    "title": "不可告人",
    "href": "details/movie-0886.html",
    "cover": "./136.jpg",
    "year": "2006",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "罗生门式叙事",
      "心理博弈",
      "局中局",
      "无间道"
    ],
    "oneLine": "一具雨夜尸体引出四个版本的说辞,谁在说谎,谁才是真正的猎物?"
  },
  {
    "title": "不败战神",
    "href": "details/movie-0887.html",
    "cover": "./137.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "动画",
    "category": "国产短剧",
    "tags": [
      "穿越",
      "修真",
      "逆袭",
      "爽文",
      "异能"
    ],
    "oneLine": "修真界第一战神渡劫失败,竟重生回高中课堂,成了被校霸欺负的学渣。"
  },
  {
    "title": "陌声姊妹",
    "href": "details/movie-0888.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "失散姐妹",
      "网络寻亲",
      "身世之谜",
      "女性情感",
      "都市孤独"
    ],
    "oneLine": "一通错拨的电话,连接起两个同城却不知彼此存在的亲姐妹,她们开始互换人生。"
  },
  {
    "title": "绝境盟约",
    "href": "details/movie-0889.html",
    "cover": "./139.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "卧底",
      "黑帮",
      "背叛",
      "复仇"
    ],
    "oneLine": "卧底警察在黑帮卧底七年,却被组织出卖,被迫在绝境中与仇敌结盟。"
  },
  {
    "title": "七大罪怨嗟的爱丁堡后篇",
    "href": "details/movie-0890.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动漫",
    "category": "动画少儿",
    "tags": [
      "续作",
      "宿命对决",
      "催泪"
    ],
    "oneLine": "在爱丁堡的废墟下,儿子崔斯坦为了拯救被魔神化的父亲,必须继承七大罪的力量,完成最后的献祭。"
  },
  {
    "title": "一个不落",
    "href": "details/movie-0891.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "脱贫攻坚",
      "返乡青年",
      "乡村振兴",
      "真实改编",
      "温暖治愈"
    ],
    "oneLine": "名校毕业的高材生回乡当村官,发现扶贫最难的不是穷,而是人心里的“懒”。"
  },
  {
    "title": "苍之骑士团",
    "href": "details/movie-0892.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "骑士",
      "背叛",
      "王国",
      "史诗"
    ],
    "oneLine": "被诬陷叛国的骑士团残部,为了洗刷污名,必须亲手杀死曾经效忠的疯王。"
  },
  {
    "title": "我,迈克尔",
    "href": "details/movie-0893.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "真实人物改编",
      "LGBTQ+",
      "自我认同",
      "争议"
    ],
    "oneLine": "他是美国最著名的同性恋权益活动家,却在中年时突然宣布:我要变成直男,以上帝的名义。"
  },
  {
    "title": "达尔文奖",
    "href": "details/movie-0894.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "愚蠢死亡",
      "荒诞",
      "单元剧",
      "旁白"
    ],
    "oneLine": "每集讲述一个“通过愚蠢方式杀死自己,淘汰劣质基因”的真实改编荒诞故事。"
  },
  {
    "title": "老板渡假去",
    "href": "details/movie-0895.html",
    "cover": "./145.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "职场",
      "假期",
      "乌龙",
      "公司"
    ],
    "oneLine": "老板外出度假时,三位员工偷偷把办公室改成了游乐场,却不料老板半路折返撞见了一切。"
  },
  {
    "title": "杜什一家",
    "href": "details/movie-0896.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "暴发户",
      "文化冲突",
      "温情",
      "搞笑",
      "移民"
    ],
    "oneLine": "非洲移民暴发户买下法国古堡,用部落习俗挑战贵族的傲慢,笑料百出。"
  },
  {
    "title": "关上的门",
    "href": "details/movie-0897.html",
    "cover": "./147.jpg",
    "year": "2018",
    "region": "西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "密闭空间",
      "录音",
      "真相",
      "道德困境"
    ],
    "oneLine": "心理医生在办公室发现一段录音,内容是自己在一扇关上的门后杀害病人。"
  },
  {
    "title": "我不是药神",
    "href": "details/movie-0898.html",
    "cover": "./148.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "医药",
      "仿制药",
      "法与情",
      "小人物"
    ],
    "oneLine": "一个卖印度神油的小老板,靠代购仿制药成了上千病人的“药神”,也成了警方的头号目标。"
  },
  {
    "title": "假死疑云",
    "href": "details/movie-0899.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "诈死",
      "保险诈骗",
      "多重反转"
    ],
    "oneLine": "丈夫葬礼上,一个神秘女人送来一盒录像带,里面竟是丈夫在“死后”第三天对着镜头微笑。"
  },
  {
    "title": "我在天庭收废品",
    "href": "details/movie-0900.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "国产短剧",
    "tags": [
      "神仙",
      "环保",
      "逆袭",
      "职场",
      "搞笑"
    ],
    "oneLine": "被裁员的90后小伙误入天庭环卫局,靠收废品搅动三界秩序。"
  },
  {
    "title": "好汉两个半第五季",
    "href": "details/movie-0901.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "宅男",
      "兄弟",
      "段子手",
      "脱发",
      "重启"
    ],
    "oneLine": "十年后重启,那个曾经的富二代花花公子如今穷困潦倒,搬来和已经秃顶生娃的弟弟同住。"
  },
  {
    "title": "死者的书",
    "href": "details/movie-0902.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "生死簿",
      "图书馆",
      "亡者",
      "诅咒",
      "代笔人"
    ],
    "oneLine": "一家只接待死者的深夜图书馆,每位亡者可以口述一本“死者的书”,内容将决定他们在另一个世界的归宿。"
  },
  {
    "title": "拿撒勒的耶稣",
    "href": "details/movie-0903.html",
    "cover": "./3.jpg",
    "year": "2027",
    "region": "以色列/美国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "真实视角",
      "历史考据",
      "人性神性",
      "多语言"
    ],
    "oneLine": "用考古学和历史学还原耶稣:他不是神,但比任何神都更像神。"
  },
  {
    "title": "淫缚学艳",
    "href": "details/movie-0904.html",
    "cover": "./4.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "SM",
      "绳缚",
      "禁忌",
      "心理创伤"
    ],
    "oneLine": "一位传统绳缚师与一名失语的女插画家之间,通过绳索展开了一场无声的、关于伤痛与治愈的对话。"
  },
  {
    "title": "碰之道",
    "href": "details/movie-0905.html",
    "cover": "./5.jpg",
    "year": "2024",
    "region": "日本",
    "type": "日剧",
    "category": "动作冒险",
    "tags": [
      "麻将",
      "竞技",
      "青春",
      "热血",
      "成长"
    ],
    "oneLine": "两位昔日麻将天才少女在废墟桌游吧重逢,却发现彼此正面临职业生涯的毁灭性危机。"
  },
  {
    "title": "春梦 春梦",
    "href": "details/movie-0906.html",
    "cover": "./6.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "梦境",
      "日据时代",
      "平行时空",
      "遗憾"
    ],
    "oneLine": "2022年的失眠女作家每晚梦见1945年的日本军官,两人在梦醒边缘展开跨时空绝恋。"
  },
  {
    "title": "从21世纪安全撤离",
    "href": "details/movie-0907.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "穿越",
      "中年危机",
      "怀旧",
      "高概念"
    ],
    "oneLine": "三个40岁的中年大叔打喷嚏时灵魂穿回18岁,但身体留在当下,他们要一边高考一边拯救不靠谱的未来。"
  },
  {
    "title": "发射线",
    "href": "details/movie-0908.html",
    "cover": "./8.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "时间循环",
      "量子物理",
      "密室逃脱"
    ],
    "oneLine": "一群物理系学生在废弃实验室唤醒一台能发射“命运线”的量子对撞机,结果发现每人只剩24小时寿命。"
  },
  {
    "title": "对决疯暴",
    "href": "details/movie-0909.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港产片",
      "双雄",
      "癫狂反派",
      "近身肉搏",
      "硬核"
    ],
    "oneLine": "退役特种兵与偏执狂刑警,必须联手对抗一个将全城人质变为“炸弹”的精神失控者。"
  },
  {
    "title": "牢狱鸳",
    "href": "details/movie-0910.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "监狱",
      "复仇",
      "兄弟情",
      "黑帮",
      "救赎"
    ],
    "oneLine": "在戒备最森严的联邦监狱里,一对曾经的结拜兄弟,一个要保护对方,一个要亲手杀了对方。"
  },
  {
    "title": "寂寞小鲜肉",
    "href": "details/movie-0911.html",
    "cover": "./11.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "姐弟恋",
      "网恋奔现",
      "自我认同",
      "都市寂寞",
      "幽默"
    ],
    "oneLine": "一个靠网恋诈骗中年女性的年轻骗子,意外爱上了自己的“肥羊”,对方竟是他亲姐姐的同学。"
  },
  {
    "title": "淘金谷",
    "href": "details/movie-0912.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "荒野",
      "人性",
      "金钱",
      "背叛"
    ],
    "oneLine": "传言山谷一夜暴富,七名落魄者结伴淘金,却发现金子是饵,彼此才是猎物。"
  },
  {
    "title": "誓盟",
    "href": "details/movie-0913.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "抗日",
      "兄弟情",
      "国共合作",
      "命运沉浮",
      "历史洪流"
    ],
    "oneLine": "三个结拜兄弟在抗战硝烟中歃血为盟,却因信仰不同最终在淮海战场上兵戎相见。"
  },
  {
    "title": "沙漠胜利",
    "href": "details/movie-0914.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "边境",
      "骑兵",
      "牺牲",
      "真实事件改编"
    ],
    "oneLine": "1971年印巴战争,一支被遗忘的骆驼骑兵连执行自杀式断后任务。"
  },
  {
    "title": "傻仔得美",
    "href": "details/movie-0915.html",
    "cover": "./15.jpg",
    "year": "1993",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "扮猪吃老虎",
      "乌龙姻缘",
      "市井幽默"
    ],
    "oneLine": "被全村人当作傻子的阿福,阴差阳错娶到了刁蛮大小姐,却发现她才是真正的“宝藏”。"
  },
  {
    "title": "我是伊莉莎白史马特",
    "href": "details/movie-0916.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "真实改编",
      "心理创伤",
      "女性力量",
      "独白",
      "囚禁"
    ],
    "oneLine": "被囚禁九个月后,少女用声音为武器,在黑暗中记录下重生的全部证据。"
  },
  {
    "title": "嗜人之夜",
    "href": "details/movie-0917.html",
    "cover": "./17.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "硬核打斗",
      "黑吃黑",
      "血腥美学"
    ],
    "oneLine": "退隐杀手为救一个小女孩,单枪匹马血洗整栋黑帮大厦。"
  },
  {
    "title": "超能追爱记",
    "href": "details/movie-0918.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "超能力",
      "恋爱",
      "社畜",
      "沙雕"
    ],
    "oneLine": "一个社畜突然获得“听到别人内心独白”的超能力,却发现全公司的人都在暗恋他,唯独女神在想怎么杀他。"
  },
  {
    "title": "一碌蔗",
    "href": "details/movie-0919.html",
    "cover": "./19.jpg",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "青春",
      "怀旧",
      "长洲岛",
      "成长",
      "香港"
    ],
    "oneLine": "七十年代的长洲岛,卖蔗水的少年用一根甘蔗撬动了江湖与初恋。"
  },
  {
    "title": "红粉联盟2022",
    "href": "details/movie-0920.html",
    "cover": "./20.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "女子棒球",
      "二战",
      "女性力量",
      "群像"
    ],
    "oneLine": "二战时期,一群来自不同背景的女性组建职业棒球联盟,在男人战场上打出了自己的全垒打。"
  },
  {
    "title": "金婚",
    "href": "details/movie-0921.html",
    "cover": "./21.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "婚姻史诗",
      "人间烟火",
      "时代变迁"
    ],
    "oneLine": "一对夫妻从青丝到白发,五十年婚姻路见证了新中国的沧桑巨变。"
  },
  {
    "title": "盖世豪侠",
    "href": "details/movie-0922.html",
    "cover": "./22.jpg",
    "year": "2019",
    "region": "中国内地",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "江湖",
      "反套路",
      "废柴逆袭",
      "爆笑"
    ],
    "oneLine": "一个不会武功的厨子被误认为是武林盟主,他只能用炒菜铲子“料理”整个江湖。"
  },
  {
    "title": "盗走林布兰",
    "href": "details/movie-0923.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "荷兰/比利时",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "艺术盗窃",
      "笨贼",
      "名画",
      "讽刺",
      "高智商反转"
    ],
    "oneLine": "一个三流画家被胁迫去博物馆偷伦勃朗的真迹,但他画了一幅足以乱真的赝品打算狸猫换太子,却发现自己拿错了画。"
  },
  {
    "title": "月亮和六便士",
    "href": "details/movie-0924.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "毛姆",
      "画家",
      "逃离",
      "艺术与生活"
    ],
    "oneLine": "伦敦股票经纪人突然抛弃一切去巴黎画画,所有人都在嘲笑他,除了债主。"
  },
  {
    "title": "好莱坞结局",
    "href": "details/movie-0925.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "片场谋杀",
      "双面编剧",
      "戏中戏",
      "黑色幽默"
    ],
    "oneLine": "一部好莱坞大片的拍摄现场接连发生“意外死亡”,编剧却在剧本里提前写好了每一个人的死法。"
  },
  {
    "title": "舍赫拉查德",
    "href": "details/movie-0926.html",
    "cover": "./26.jpg",
    "year": "2023",
    "region": "中东/法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女性",
      "讲故事",
      "生存",
      "诗意",
      "反抗"
    ],
    "oneLine": "被囚禁的女孩每晚向军阀讲述一个未完的故事,用叙事换取黎明。"
  },
  {
    "title": "安纳莉",
    "href": "details/movie-0927.html",
    "cover": "./27.jpg",
    "year": "2020",
    "region": "德国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "二战",
      "女同",
      "禁忌",
      "历史",
      "疗愈"
    ],
    "oneLine": "1943年的柏林,一个犹太女孩藏身在一个德国军官的别墅,却与军官的妻子产生了危险的感情。"
  },
  {
    "title": "鳄之泪",
    "href": "details/movie-0928.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "澳大利亚/美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "鳄鱼",
      "极端生存",
      "反转"
    ],
    "oneLine": "野生动物摄影师深入澳洲北领地拍摄咸水鳄,却发现一条巨鳄每次杀死猎物后都会“流泪”,那泪水里有塑料微粒。"
  },
  {
    "title": "初恋那一天所读的故事",
    "href": "details/movie-0929.html",
    "cover": "./29.jpg",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "师生恋",
      "补习班",
      "年下",
      "文学告白",
      "时间错位"
    ],
    "oneLine": "32岁的失意补习班老师,被一个16岁高中生用她22岁时写的“初恋小说”告白。"
  },
  {
    "title": "女高中生结婚记",
    "href": "details/movie-0930.html",
    "cover": "./30.jpg",
    "year": "2004",
    "region": "韩国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "高中生",
      "契约婚姻",
      "怀孕",
      "早婚",
      "家庭"
    ],
    "oneLine": "全校第一的乖乖女和全校倒数第一的混混,因为一次意外怀孕,被迫开启了一段荒唐又温暖的同居生活。"
  },
  {
    "title": "替死鬼",
    "href": "details/movie-0931.html",
    "cover": "./31.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "替身",
      "身份盗窃",
      "心理操控",
      "反转再反转",
      "社会讽刺"
    ],
    "oneLine": "失业青年收钱替人坐牢,出狱后发现自己的身份已经被“雇主”彻底取代。"
  },
  {
    "title": "和平战士",
    "href": "details/movie-0932.html",
    "cover": "./32.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "励志",
      "苏格拉底",
      "心灵成长",
      "体操"
    ],
    "oneLine": "天才体操运动员深夜在加油站遇到一位神秘的老人,老人说他不懂体操,更不懂人生。"
  },
  {
    "title": "星梦奇缘",
    "href": "details/movie-0933.html",
    "cover": "./33.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "娱乐圈",
      "经纪人",
      "造星",
      "梦想"
    ],
    "oneLine": "过气经纪人用大数据算法,将一个素人保安打造成了顶流巨星。"
  },
  {
    "title": "最后约翰死了",
    "href": "details/movie-0934.html",
    "cover": "./34.jpg",
    "year": "2012",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "邪教",
      "平行维度",
      "超自然",
      "毒蘑菇"
    ],
    "oneLine": "两个嗑了“超维度”毒蘑菇的朋克青年,意外成了唯一能阻止跨维度恶魔入侵的人类。"
  },
  {
    "title": "飞天小老爷",
    "href": "details/movie-0935.html",
    "cover": "./35.jpg",
    "year": "2021",
    "region": "法国",
    "type": "动画",
    "category": "动画少儿",
    "tags": [
      "反英雄",
      "阶级讽刺",
      "蒸汽朋克"
    ],
    "oneLine": "一位习惯压榨仆人的贵族发明家意外造出飞行器,结果所有仆人都先于他飞上了天。"
  },
  {
    "title": "新月圆花残断肠时",
    "href": "details/movie-0936.html",
    "cover": "./36.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "民国",
      "家族恩怨",
      "虐恋",
      "戏曲元素",
      "悲剧美学"
    ],
    "oneLine": "二十年代江南戏班,当家花旦与少东家相爱,却被兄嫂设计嫁入军阀府,大婚之日新月圆,花却残。"
  },
  {
    "title": "阴儿",
    "href": "details/movie-0937.html",
    "cover": "./37.jpg",
    "year": "2017",
    "region": "中国台湾",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "送肉粽",
      "冥婚",
      "附身",
      "仪式",
      "乡野"
    ],
    "oneLine": "一场失败的送肉粽仪式,导致厉鬼跑进了医院妇产科,新生儿们陆续出现了诡异的反应。"
  },
  {
    "title": "战神传说",
    "href": "details/movie-0938.html",
    "cover": "./38.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "魔幻武侠",
      "神兵利器",
      "悲剧英雄"
    ],
    "oneLine": "渔村少年意外拔出镇海神剑,却引发了人间与修罗界的百年大战。"
  },
  {
    "title": "蛋糕师",
    "href": "details/movie-0939.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "复仇",
      "美食",
      "暗黑"
    ],
    "oneLine": "米其林甜点大师的独子被杀,他决定在杀害儿子的凶手婚礼上,制作一款“含泪”的七层蛋糕。"
  },
  {
    "title": "斗战胜佛之大圣之泪",
    "href": "details/movie-0940.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "西游改编",
      "孙悟空",
      "前世今生",
      "催泪"
    ],
    "oneLine": "悟空取经路上意外落下一滴泪,落入凡间化作一个注定要杀他的女孩。"
  },
  {
    "title": "最乖巧的杀人犯",
    "href": "details/movie-0941.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "宅男",
      "二次元",
      "畸形母爱",
      "反常人格"
    ],
    "oneLine": "社区里公认的“妈宝乖孩子”,在cosplay比赛前夕,用珍藏的动漫道具策划了一场完美谋杀。"
  },
  {
    "title": "晏阳初",
    "href": "details/movie-0942.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "平民教育",
      "乡村建设",
      "定县",
      "知识分子"
    ],
    "oneLine": "民国时期,平民教育家晏阳初放弃都市优渥生活,举家迁往定县农村,开启了一场改变农民命运的文字与生计革命。"
  },
  {
    "title": "俗女养成记2",
    "href": "details/movie-0943.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "女性成长",
      "40岁",
      "台南",
      "家庭",
      "写实治愈"
    ],
    "oneLine": "陈嘉玲40岁了,孩子刚上幼儿园,老公创业失败,婆婆搬来同住,她的“俗女”人生进入下半场。"
  },
  {
    "title": "美国皮条客",
    "href": "details/movie-0944.html",
    "cover": "./44.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "底层",
      "夜生活",
      "权力",
      "生存",
      "真实改编"
    ],
    "oneLine": "上世纪70年代纽约地下皮条客之王,如何从街头混混爬上欲望王座,又急速坠落。"
  },
  {
    "title": "妖者为王第二季",
    "href": "details/movie-0945.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画",
    "category": "动作冒险",
    "tags": [
      "妖族",
      "权谋",
      "战争",
      "热血"
    ],
    "oneLine": "人妖大战一触即发,身为妖界内定的王,他却从小被人族养大,第一季结尾他杀了自己的养父。"
  },
  {
    "title": "情欲躯壳",
    "href": "details/movie-0946.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "换脸",
      "替身爱人",
      "伦理禁忌"
    ],
    "oneLine": "整形医生无法接受妻子去世,给模样相似的女人整成妻子模样,却发现对方竟是妻子的双胞胎妹妹。"
  },
  {
    "title": "半醒浮生",
    "href": "details/movie-0947.html",
    "cover": "./47.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "梦境",
      "记忆植入",
      "存在主义",
      "烧脑"
    ],
    "oneLine": "一个男人每天醒来都发现自己是另一个人,医生说他患了“身份解离症”,直到他在第92个人生里认出了同一个人。"
  },
  {
    "title": "人生七年3",
    "href": "details/movie-0948.html",
    "cover": "./48.jpg",
    "year": "1977",
    "region": "英国",
    "type": "纪录片",
    "category": "海外精选",
    "tags": [
      "成长",
      "社会",
      "阶级",
      "人生",
      "经典"
    ],
    "oneLine": "每七年一次,记录14个不同阶层的英国孩子,这一次他们21岁了。"
  },
  {
    "title": "舞会惊魂3:血夜回魂",
    "href": "details/movie-0949.html",
    "cover": "./49.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "虐杀片",
      "舞会",
      "面具杀手",
      "血浆",
      "复古恐怖"
    ],
    "oneLine": "毕业舞会当晚,一个戴着骷髅面具的杀手复活归来,要完成二十年前未完成的屠杀。"
  },
  {
    "title": "君子盟",
    "href": "details/movie-0950.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电视剧",
    "category": "古装甜宠",
    "tags": [
      "双男主",
      "权谋",
      "朝堂",
      "兄弟情"
    ],
    "oneLine": "礼部侍郎与大理寺少卿为查旧案结成秘密同盟,却发现彼此父亲的死竟是同一人所害。"
  },
  {
    "title": "时光大战",
    "href": "details/movie-0951.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "时间循环",
      "战争",
      "特种兵",
      "因果律"
    ],
    "oneLine": "一支特种小队被困在同一个小时内无限循环,每次死亡都会重置,但敌人也在“学习”他们。"
  },
  {
    "title": "神父同志",
    "href": "details/movie-0952.html",
    "cover": "./52.jpg",
    "year": "1994",
    "region": "英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "宗教",
      "同性恋",
      "信仰",
      "禁忌之恋"
    ],
    "oneLine": "一位虔诚的天主教神父,在贫穷的教区爱上了另一个男人,他在上帝与人之间该如何选择?"
  },
  {
    "title": "玉女痴郎",
    "href": "details/movie-0953.html",
    "cover": "./53.jpg",
    "year": "1969",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "邵氏",
      "怀旧",
      "错摸",
      "欢喜冤家"
    ],
    "oneLine": "一位不食人间烟火的富家千金,爱上了父亲公司里一位才华横溢的穷会计,但她不知道,这位“痴郎”其实是来复仇的。"
  },
  {
    "title": "团子大家族 第二季",
    "href": "details/movie-0954.html",
    "cover": "./54.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动漫",
    "category": "喜剧家庭",
    "tags": [
      "番剧续作",
      "团子",
      "小镇",
      "成长",
      "催泪"
    ],
    "oneLine": "五年后,当年那群吃团子的孩子长大成人,却因为一家老字号团子店的倒闭危机重聚。"
  },
  {
    "title": "格桑花开的时候",
    "href": "details/movie-0955.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "援藏教师",
      "留守儿童",
      "双语教育"
    ],
    "oneLine": "藏族盲童少女在支教老师帮助下,用声音“看见”了格桑花海的颜色。"
  },
  {
    "title": "克雷尔·多兰",
    "href": "details/movie-0956.html",
    "cover": "./56.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "艺术家传记",
      "女性力量",
      "战后重建"
    ],
    "oneLine": "二战结束后,一位法国女建筑师回到被炸毁的家乡,用废墟中的材料重建城市与人心。"
  },
  {
    "title": "渡过黑暗",
    "href": "details/movie-0957.html",
    "cover": "./57.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "密室",
      "心理",
      "审判",
      "道德",
      "暴雨"
    ],
    "oneLine": "七名陌生人因暴雨被困在一座古堡,醒来后发现每人身上都有一条他们曾犯下的、未被惩罚的罪行的记录。"
  },
  {
    "title": "超人前传第七季",
    "href": "details/movie-0958.html",
    "cover": "./58.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "超级英雄起源",
      "氪星遗产",
      "宿敌联手"
    ],
    "oneLine": "克拉克终于面对自己的氪星血脉,却发现卢瑟·莱恩掌握了唯一能摧毁布莱尼亚克的反向科技。"
  },
  {
    "title": "走投无路1986",
    "href": "details/movie-0959.html",
    "cover": "./59.jpg",
    "year": "1986",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港产片",
      "末路狂徒",
      "街头暴力",
      "时代转型"
    ],
    "oneLine": "1986年,三个内地逃犯偷渡到香港,以为到了天堂,却发现这是一条更大的绝路。"
  },
  {
    "title": "守梦者",
    "href": "details/movie-0960.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "梦境入侵",
      "记忆",
      "烧脑",
      "黑科技"
    ],
    "oneLine": "一个失去女儿的保安发现,可以通过“梦境共享”进入连环杀手的梦里,修改他的记忆。"
  },
  {
    "title": "将军的儿子2",
    "href": "details/movie-0961.html",
    "cover": "./61.jpg",
    "year": "1991",
    "region": "韩国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "日据时期",
      "抗日",
      "侠客",
      "复仇",
      "兄弟情"
    ],
    "oneLine": "抗日义兵团将军之子为父报仇,却发现自己要杀的仇人,竟是失散多年、如今为日军效力的亲哥哥。"
  },
  {
    "title": "滇越铁路·生命的故事",
    "href": "details/movie-0962.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "纪录片",
    "category": "国产短剧",
    "tags": [
      "滇越铁路",
      "云南",
      "越南",
      "工业遗产",
      "岁月"
    ],
    "oneLine": "历经百年沧桑的滇越铁路,见证了从殖民、抗战到现代的多段历史,以及沿线普通人的命运浮沉。"
  },
  {
    "title": "死神的精度",
    "href": "details/movie-0963.html",
    "cover": "./63.jpg",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "死神",
      "人生哲学",
      "治愈"
    ],
    "oneLine": "一个热爱音乐的死神在给目标执行死亡前七天,总会被对方改变对人类的看法。"
  },
  {
    "title": "百变狸猫国语",
    "href": "details/movie-0964.html",
    "cover": "./64.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "狸猫",
      "变身",
      "环境保护",
      "国语配音",
      "童趣"
    ],
    "oneLine": "一群住在东京郊外的狸猫为了保住栖息地,苦练变身术伪装成人类,却发现自己比人类更适合做“社畜”。"
  },
  {
    "title": "生命的证据",
    "href": "details/movie-0965.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "器官移植",
      "伦理",
      "绑架",
      "反转"
    ],
    "oneLine": "一名死刑犯同意捐献器官,却在“死亡”后睁开了眼睛,而接受者已被推进手术室。"
  },
  {
    "title": "路西法第二季",
    "href": "details/movie-0966.html",
    "cover": "./66.jpg",
    "year": "2016",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "魔鬼",
      "洛杉矶",
      "破案",
      "心理治疗",
      "家庭"
    ],
    "oneLine": "魔鬼路西法继续在洛杉矶开夜总会、帮警察破案,这一季他妈妈从地狱里爬出来了。"
  },
  {
    "title": "斯凡克梅耶的神奇宝柜",
    "href": "details/movie-0967.html",
    "cover": "./67.jpg",
    "year": "2015",
    "region": "英国/捷克",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "超现实主义",
      "欲望",
      "木偶"
    ],
    "oneLine": "一间二手古董店里,只要向那个古怪的宝柜里放入一样东西,就会失去身体的一部分。"
  },
  {
    "title": "非屠龙童话",
    "href": "details/movie-0968.html",
    "cover": "./68.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "公主",
      "反套路",
      "成长",
      "友情"
    ],
    "oneLine": "一个不会魔法的公主,一头不爱喷火的龙,他们决定联手拆了“勇者屠龙”的老套剧本。"
  },
  {
    "title": "长安诡事之末世神兵",
    "href": "details/movie-0969.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影/网络电影",
    "category": "国产短剧",
    "tags": [
      "狄仁杰",
      "机关术",
      "密室杀人",
      "唐朝诡事录",
      "架空历史"
    ],
    "oneLine": "长安城接连出现被烧成焦炭的尸体,狄仁杰发现凶手竟是一具能自动行走的唐代铠甲,而它的目标是杀死所有工匠后人。"
  },
  {
    "title": "贫民百万总统",
    "href": "details/movie-0970.html",
    "cover": "./70.jpg",
    "year": "2019",
    "region": "印度",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "选举",
      "贫民窟",
      "讽刺",
      "逆袭"
    ],
    "oneLine": "贫民窟的混混被财阀推去竞选总统当傀儡,结果他唯一会做的事,就是兑现所有承诺。"
  },
  {
    "title": "吹梦无踪",
    "href": "details/movie-0971.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "梦境操控",
      "遗愿清单",
      "催泪"
    ],
    "oneLine": "一个能潜入别人梦境的女孩,为了完成已故男友的遗愿,在梦里替他向所有人告别。"
  },
  {
    "title": "厕所爱情故事",
    "href": "details/movie-0972.html",
    "cover": "./72.jpg",
    "year": "2017",
    "region": "印度",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "社会问题",
      "农村陋习",
      "女性觉醒",
      "真实事件改编"
    ],
    "oneLine": "新婚丈夫因为家里没有厕所,妻子跑回娘家放话:“要么建厕所,要么离婚。”于是全村男人疯了。"
  },
  {
    "title": "妯娌的三国时代",
    "href": "details/movie-0973.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "女性群像",
      "家族争斗",
      "遗产风波",
      "现实题材",
      "演技炸裂"
    ],
    "oneLine": "老头子留下的不是遗嘱,是三把钥匙,分别打开金库、秘密,和这个家最后的遮羞布。"
  },
  {
    "title": "终归大海",
    "href": "details/movie-0974.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "海啸遗孤",
      "姐妹",
      "记忆",
      "静默叙事"
    ],
    "oneLine": "东日本大地震十年后,姐姐假装成幸存下来的妹妹,替她活完了高中、大学和恋爱,直到妹妹的幽灵出现在海边。"
  },
  {
    "title": "在爱之中",
    "href": "details/movie-0975.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "聋哑人",
      "大提琴",
      "手语诗歌"
    ],
    "oneLine": "她是失聪的大提琴手,他是话痨的街头诗人,他们用震动和手语谈了一场无声的恋爱。"
  },
  {
    "title": "空中浩劫第十五季",
    "href": "details/movie-0976.html",
    "cover": "./76.jpg",
    "year": "2016",
    "region": "加拿大",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "航空安全",
      "真实空难",
      "黑匣子解密",
      "事故重演"
    ],
    "oneLine": "每一集都是一场致命空难的抽丝剥茧,真相比电影更惊心动魄。"
  },
  {
    "title": "报应不爽",
    "href": "details/movie-0977.html",
    "cover": "./77.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑吃黑",
      "复仇",
      "暴力美学",
      "悲情英雄",
      "最后反转"
    ],
    "oneLine": "金盆洗手的杀手被曾经的搭档陷害入狱,出狱后发现女儿已失明,他掏出藏在骨灰盒里的手枪。"
  },
  {
    "title": "奥黛丽赫本传",
    "href": "details/movie-0978.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "美国/英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "赫本",
      "二战",
      "荷兰",
      "芭蕾",
      "联合国"
    ],
    "oneLine": "聚焦赫本从二战时荷兰抵抗运动的小信使,到成为联合国儿童基金会大使后,再度回到饥荒之地的真实心路。"
  },
  {
    "title": "荷兰火海战",
    "href": "details/movie-0979.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "荷兰",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "洪水",
      "火灾",
      "二战",
      "水陆大战",
      "特效大片"
    ],
    "oneLine": "二战末期,荷兰水线防线被炸开,纳粹与盟军在滔天洪水与熊熊大火中展开终极对决。"
  },
  {
    "title": "念情女博士",
    "href": "details/movie-0980.html",
    "cover": "./80.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "高知女性",
      "失忆梗",
      "重逢"
    ],
    "oneLine": "一位神经科学女博士研发出了“记忆编辑”技术,却发现自己的初恋被人为删除了。"
  },
  {
    "title": "决胜机密",
    "href": "details/movie-0981.html",
    "cover": "./81.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "商业间谍",
      "暗网",
      "近身肉搏",
      "双雄对决"
    ],
    "oneLine": "顶尖商业间谍被陷害成叛徒,为自证清白,他必须潜入全球最安全的暗网峰会窃取一份足以颠覆世界的机密文件。"
  },
  {
    "title": "野战兵团",
    "href": "details/movie-0982.html",
    "cover": "./82.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "未来战争",
      "机甲",
      "兄弟情",
      "硬核"
    ],
    "oneLine": "2040年,一支美军实验机甲部队被空投到第三次世界大战的绞肉机中,任务是守住一个根本不存在的坐标。"
  },
  {
    "title": "地狱美女",
    "href": "details/movie-0983.html",
    "cover": "./83.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "复仇",
      "降头",
      "凄美",
      "轮回"
    ],
    "oneLine": "惨遭毁容的女孩被地狱使者赐予了一张绝美的脸,但代价是每晚都会变成真正的恶鬼。"
  },
  {
    "title": "布里叶女士",
    "href": "details/movie-0984.html",
    "cover": "./84.jpg",
    "year": "2027",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女性先锋",
      "文学沙龙",
      "时代束缚",
      "自我觉醒"
    ],
    "oneLine": "19世纪女作家布里叶为了出版小说,不得不假装自己是男爵的“代笔幽灵”。"
  },
  {
    "title": "亱亱春宵",
    "href": "details/movie-0985.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "欲望",
      "婚姻",
      "禁忌",
      "时代变迁"
    ],
    "oneLine": "六十年代香港,一名舞女与三个男人的一夜情,却横跨她整个三十年人生。"
  },
  {
    "title": "哥本哈根三温暖",
    "href": "details/movie-0986.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "丹麦",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "北欧",
      "家庭浴室",
      "赤裸",
      "和解",
      "生活流"
    ],
    "oneLine": "一家经营了八十年的家庭公共浴室面临拆迁,三兄妹在赤裸相见的蒸汽中,被迫面对彼此最羞耻的秘密。"
  },
  {
    "title": "厨缘",
    "href": "details/movie-0987.html",
    "cover": "./87.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "美食",
      "代际冲突",
      "传承",
      "师徒"
    ],
    "oneLine": "个性叛逆的西餐厨师长因一次意外失忆,被一位做路边摊的老人收留,并重新找回了中华美食的根。"
  },
  {
    "title": "间谍速成班2",
    "href": "details/movie-0988.html",
    "cover": "./88.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "乌龙特工",
      "菜鸟逆袭",
      "荒诞任务"
    ],
    "oneLine": "上一部误打误撞立了功的实习保安,这次被赶鸭子上架去保护一位真实特工。"
  },
  {
    "title": "老公大作战",
    "href": "details/movie-0989.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "夫妻关系",
      "整蛊",
      "温情"
    ],
    "oneLine": "为了在离婚冷静期内“赢”过对方,一对夫妻展开了一场笑料百出的终极恶斗。"
  },
  {
    "title": "穆桂英之大破天门阵国语",
    "href": "details/movie-0990.html",
    "cover": "./90.jpg",
    "year": "2012",
    "region": "中国香港/中国大陆",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "杨门女将",
      "天门阵",
      "巾帼英雄",
      "粤语配音",
      "阵法"
    ],
    "oneLine": "穆桂英挂帅出征,面对辽国摆下的奇门遁甲“天门阵”,她必须用智慧破解这个无解的战争机器。"
  },
  {
    "title": "烈日灼心",
    "href": "details/movie-0991.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "警察父子",
      "顶罪",
      "救赎"
    ],
    "oneLine": "退休刑警的儿子在追捕一名毒贩时中枪,醒来后父亲告诉他:“那颗子弹,是我三十年前就该挨的。"
  },
  {
    "title": "举报者",
    "href": "details/movie-0992.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "反腐",
      "媒体",
      "正义",
      "压力"
    ],
    "oneLine": "当她实名举报家乡的化工厂污染后,全村人都把她当成了仇人,包括她患病的父亲。"
  },
  {
    "title": "周末食谱2016",
    "href": "details/movie-0993.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "美食",
      "家庭",
      "日记体",
      "时代变迁"
    ],
    "oneLine": "一位华裔主妇用周末的12道菜,记录了她在美国2016年一整年的生活与抗议。"
  },
  {
    "title": "魔镜奇缘2",
    "href": "details/movie-0994.html",
    "cover": "./94.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "动画电影",
    "category": "国产短剧",
    "tags": [
      "童话改编",
      "公主",
      "镜子世界",
      "成长"
    ],
    "oneLine": "白雪公主的女儿为了拯救被诅咒的母后,必须进入镜子里的颠倒世界,找到内心真实的自己。"
  },
  {
    "title": "凹凸学园 第二季",
    "href": "details/movie-0995.html",
    "cover": "./95.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "泡面番",
      "校园日常",
      "搞笑"
    ],
    "oneLine": "凹凸学园新学期开始,奇葩学生们为了争夺“最烂社团”的补助金,展开了一系列令人捧腹的骚操作。"
  },
  {
    "title": "我是刑警",
    "href": "details/movie-0996.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "纪实",
      "职业",
      "单元案",
      "真实改编",
      "硬核"
    ],
    "oneLine": "从警校毕业到退休,一个刑警的三十年,十五个大案,每一次出警都可能是最后一次回家。"
  },
  {
    "title": "东京快递",
    "href": "details/movie-0997.html",
    "cover": "./97.jpg",
    "year": "1998",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "快递员",
      "都市群像",
      "平成怀旧",
      "人情冷暖",
      "单车"
    ],
    "oneLine": "一名沉默的东京快递员每天穿梭于高楼与陋巷,他发现每个包裹里都装着一个求救信号。"
  },
  {
    "title": "高校女汉子",
    "href": "details/movie-0998.html",
    "cover": "./98.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "网络剧/电影",
    "category": "国产短剧",
    "tags": [
      "校园",
      "格斗",
      "反差萌",
      "表白",
      "姐妹情"
    ],
    "oneLine": "全国青少年武术冠军被迫进入表演系学撒娇,却在期末大戏上把罗密欧摔成了朱丽叶。"
  },
  {
    "title": "彩云",
    "href": "details/movie-0999.html",
    "cover": "./99.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "穿越",
      "港风",
      "怀旧",
      "遗憾"
    ],
    "oneLine": "她买了一把据说能看见过去的古董伞,雨天撑开后,竟看见了十年前的自己和他。"
  },
  {
    "title": "黑玫瑰",
    "href": "details/movie-1000.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "卧底",
      "女杀手",
      "复仇",
      "港风"
    ],
    "oneLine": "警校最优秀的毕业生被要求假扮黑帮老大的情妇“黑玫瑰”,但她很快发现,真正的黑玫瑰另有其人且正在看着自己。"
  },
  {
    "title": "空难生还乐队",
    "href": "details/movie-1001.html",
    "cover": "./101.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "空难奇迹",
      "乐队",
      "幸存者创伤",
      "重生"
    ],
    "oneLine": "一支无名乐队在空难中全员幸存,从此被舆论架上了神坛,他们必须学会如何与“奇迹”二字共处。"
  },
  {
    "title": "三分野",
    "href": "details/movie-1002.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "职场",
      "霸总反转",
      "野性恋爱",
      "卫星工程师",
      "双强"
    ],
    "oneLine": "卫星工程师向园空降成集团最烂分公司总监,发现合作方老总正是三年前被她“白嫖方案”后人间蒸发的野男人。"
  },
  {
    "title": "致命玩笑",
    "href": "details/movie-1003.html",
    "cover": "./103.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "小丑",
      "恶作剧",
      "直播",
      "反套路"
    ],
    "oneLine": "一群网红直播玩“整蛊路人”的恶作剧,直到他们扮成小丑敲开了一个连环杀手的门。"
  },
  {
    "title": "假如生活欺骗了你",
    "href": "details/movie-1004.html",
    "cover": "./104.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "婚姻",
      "谎言",
      "中年危机",
      "女性成长"
    ],
    "oneLine": "结婚十五年的家庭主妇发现丈夫出轨,而她手上唯一的证据是一份伪造的癌症诊断书。"
  },
  {
    "title": "冷秋薇(上、下集)粤语",
    "href": "details/movie-1005.html",
    "cover": "./105.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "豪门恩怨",
      "复仇",
      "粤语原声"
    ],
    "oneLine": "豪门私生女冷秋薇在养父被害后,一人分饰两角潜入亲生父亲家中,上演一场步步惊心的复仇大戏。"
  },
  {
    "title": "探监日记",
    "href": "details/movie-1006.html",
    "cover": "./106.jpg",
    "year": "2013",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "监狱",
      "母女",
      "犯罪",
      "日记体"
    ],
    "oneLine": "13岁的女孩莉莎每周去监狱探望母亲,她在日记里写下每一次对话,直到母亲说“我其实没杀人”。"
  },
  {
    "title": "龙发威",
    "href": "details/movie-1007.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "异能觉醒",
      "小人物逆袭",
      "热血"
    ],
    "oneLine": "一个被全村人嘲笑的懦弱青年,在一次濒死体验后,觉醒了先祖遗留的“龙魂”之力。"
  },
  {
    "title": "悄悄地喜欢你",
    "href": "details/movie-1008.html",
    "cover": "./108.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "暗恋",
      "双向奔赴",
      "纯爱",
      "遗憾",
      "治愈"
    ],
    "oneLine": "一个社恐女孩用匿名短信陪伴暗恋男生度过高三,却在毕业时得知他一直在寻找自己。"
  },
  {
    "title": "快递惊魂",
    "href": "details/movie-1009.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "密室逃生",
      "倒计时",
      "犯罪心理",
      "都市追击"
    ],
    "oneLine": "一名平凡的快递员在送货途中,意外发现自己运送的并非包裹,而是一颗定时炸弹。"
  },
  {
    "title": "奇门密探",
    "href": "details/movie-1010.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "密探",
      "机关术",
      "夺宝",
      "无厘头",
      "江湖"
    ],
    "oneLine": "明末,一群身怀绝技的“奇门”后裔组成临时密探队,与东厂争夺能改变历史的诸葛武侯机关盒。"
  },
  {
    "title": "哈啦美容院",
    "href": "details/movie-1011.html",
    "cover": "./111.jpg",
    "year": "2016",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "乡土剧",
      "女性创业",
      "邻里温情"
    ],
    "oneLine": "为了不被拆迁,台南小镇上一家老旧美容院的老板娘们,决定用最浮夸的发型和最八卦的嘴炮对抗开发商。"
  },
  {
    "title": "你的世界如果没有我",
    "href": "details/movie-1012.html",
    "cover": "./112.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "纯爱",
      "穿越",
      "治愈",
      "奇幻",
      "催泪"
    ],
    "oneLine": "为了拯救注定因车祸丧生的男友,她每天通过日记穿越回过去,试图改写时间线。"
  },
  {
    "title": "谍网雄鸽",
    "href": "details/movie-1013.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "中国香港/英国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "鸽子",
      "冷战",
      "双雄",
      "香港回归",
      "怀旧"
    ],
    "oneLine": "1997前夕,英国军情六处派出一名“鸽子专家”到香港,他的任务是用信鸽网络监视一个即将消失的苏联间谍。"
  },
  {
    "title": "马路无理学园",
    "href": "details/movie-1014.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "漫改",
      "无厘头",
      "热血教师",
      "问题学生"
    ],
    "oneLine": "前黑道老大为了还债去当高中老师,他用极道法则——“不讲道理,只讲义气”来感化一群废柴学生。"
  },
  {
    "title": "病尉迟孙立",
    "href": "details/movie-1015.html",
    "cover": "./115.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "水浒外传",
      "病尉迟",
      "官场与江湖",
      "马上枪术"
    ],
    "oneLine": "登州兵马提辖孙立,为了一个“病”字,单枪匹马杀回了早已背叛他的梁山。"
  },
  {
    "title": "唐明皇",
    "href": "details/movie-1016.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "帝王晚年",
      "盛世崩塌",
      "非虚构叙事"
    ],
    "oneLine": "这部剧不讲李隆基的辉煌前半生,只讲他从天子到囚徒的最后三年。"
  },
  {
    "title": "让她走",
    "href": "details/movie-1017.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "控制欲",
      "家庭伦理",
      "反转"
    ],
    "oneLine": "母亲发现儿子的未婚妻很像自己年轻时的闺蜜,而那个闺蜜在20年前被她亲手推下了悬崖。"
  },
  {
    "title": "雪人情缘",
    "href": "details/movie-1018.html",
    "cover": "./118.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "雪山",
      "都市",
      "治愈",
      "暖冬"
    ],
    "oneLine": "失意的建筑师在长白山堆了一个雪人,雪人每晚化作人形来到她身边,但天亮后就会失去前一晚的记忆。"
  },
  {
    "title": "世界大战2 新的进攻",
    "href": "details/movie-1019.html",
    "cover": "./119.jpg",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "外星人",
      "十年后",
      "电磁炮",
      "废墟",
      "基因突变"
    ],
    "oneLine": "第一批外星人倒下十年后,人类用它们的残骸造武器,但新敌人带着免疫来了。"
  },
  {
    "title": "古堡屠龙",
    "href": "details/movie-1020.html",
    "cover": "./120.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "魔幻",
      "中世纪",
      "史诗"
    ],
    "oneLine": "为了拯救被诅咒的王国,一名哑巴骑士必须潜入一座活着的古堡,杀死盘踞其中的机械巨龙。"
  },
  {
    "title": "萨德柯",
    "href": "details/movie-1021.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "萨德侯爵",
      "法国大革命",
      "情色哲学",
      "密室囚禁",
      "人性实验"
    ],
    "oneLine": "十八世纪法国贵族萨德柯在巴士底狱中,用文字与想象进行了一场颠覆封建道德的精神越狱。"
  },
  {
    "title": "探清水河:重生",
    "href": "details/movie-1022.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "民国",
      "轮回",
      "小曲改编"
    ],
    "oneLine": "一首北京小曲串联起民国与当代的两段悲剧爱情,死者竟在同一处河道重生。"
  },
  {
    "title": "寻凶的幽灵轨迹",
    "href": "details/movie-1023.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "通灵",
      "刑侦",
      "单元剧"
    ],
    "oneLine": "能看见死者残留“情感轨迹”的女刑警,搭档一个只信证据的毒舌法医,联手侦破冷案。"
  },
  {
    "title": "我的宇宙",
    "href": "details/movie-1024.html",
    "cover": "./124.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "宇宙",
      "自闭症",
      "亲情",
      "微观世界"
    ],
    "oneLine": "一名患有自闭症的天才少年将自己锁在微观世界的想象中,直到他发现父亲留下的笔记本,才意识到他的“宇宙”可以改变现实。"
  },
  {
    "title": "战国自卫队",
    "href": "details/movie-1025.html",
    "cover": "./125.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "穿越",
      "古代战争",
      "军事",
      "爽片"
    ],
    "oneLine": "一支现代自卫队小队穿越回战国,他们先进的热武器面对的是武田信玄的千军万马。"
  },
  {
    "title": "笨金鱼",
    "href": "details/movie-1026.html",
    "cover": "./126.jpg",
    "year": "2018",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "自闭症",
      "兄妹",
      "金鱼",
      "治愈"
    ],
    "oneLine": "哥哥说妹妹养的金鱼笨到撞缸,直到妹妹走失,他才发现金鱼记得所有回家的路。"
  },
  {
    "title": "无主之人",
    "href": "details/movie-1027.html",
    "cover": "./127.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "连环杀手",
      "多重人格",
      "心理审讯",
      "真实改编",
      "迷宫"
    ],
    "oneLine": "臭名昭著的杀手自称多重人格,审讯官进入他的意识迷宫后,发现自己也在里面。"
  },
  {
    "title": "神秘怪物",
    "href": "details/movie-1028.html",
    "cover": "./128.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "小镇",
      "超自然",
      "连环失踪"
    ],
    "oneLine": "小镇居民集体失忆,只记得见过一个“模糊的、令人不安的影子”。"
  },
  {
    "title": "我必将离去",
    "href": "details/movie-1029.html",
    "cover": "./129.jpg",
    "year": "2025",
    "region": "阿根廷",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "绝症",
      "预知死亡",
      "人生告别",
      "温情"
    ],
    "oneLine": "得知自己只剩七天生命的老人,发现自己能看到别人头上的死亡倒计时,唯独看不到自己的。"
  },
  {
    "title": "王者之风",
    "href": "details/movie-1030.html",
    "cover": "./130.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "民国",
      "武术门派",
      "京城",
      "规矩",
      "以武服人"
    ],
    "oneLine": "民国初年,天津武术界第一块“王者”金牌被盗,一名落魄武师被冤枉,不得不重出江湖。"
  },
  {
    "title": "怪兽与邓不利多的秘密",
    "href": "details/movie-1031.html",
    "cover": "./131.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "魔法世界",
      "神奇动物",
      "巫师对决",
      "政治阴谋",
      "传奇故事"
    ],
    "oneLine": "为了阻止黑巫师篡夺麻瓜世界权力,邓不利多派遣一支杂牌军潜入柏林,却遭遇了史上最狂暴的魔法生物。"
  },
  {
    "title": "七大罪第一季",
    "href": "details/movie-1032.html",
    "cover": "./132.jpg",
    "year": "2014",
    "region": "日本",
    "type": "动漫",
    "category": "动画少儿",
    "tags": [
      "骑士",
      "逆袭",
      "魔法",
      "圣战",
      "冒险小队"
    ],
    "oneLine": "被诬陷叛国的公主找到一群传说中的重罪犯“七大罪”,希望他们帮自己推翻圣骑士的暴政。"
  },
  {
    "title": "塑料王国",
    "href": "details/movie-1033.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "美国/德国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "近未来",
      "环保恐怖",
      "人造生命",
      "资本反噬"
    ],
    "oneLine": "一家科技公司发明了可吞噬塑料的合成生命体,不料它们进化出智慧并开始吞噬一切碳基物质。"
  },
  {
    "title": "蛮荒宝穴",
    "href": "details/movie-1034.html",
    "cover": "./134.jpg",
    "year": "2022",
    "region": "美国/墨西哥",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "寻宝",
      "生存",
      "背叛",
      "荒漠"
    ],
    "oneLine": "一张祖传藏宝图引来亡命之徒,父子二人必须在荒漠的流沙与毒枭枪口间,找到传说中消失的阿兹特克金矿。"
  },
  {
    "title": "讯号",
    "href": "details/movie-1035.html",
    "cover": "./135.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "时空对讲机",
      "未结案件",
      "双男主",
      "平行时空"
    ],
    "oneLine": "2026年的刑警捡到一个对讲机,那头竟是2000年正在追查同一个连环杀人案的老刑警。"
  },
  {
    "title": "不可爱的她",
    "href": "details/movie-1036.html",
    "cover": "./136.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "反套路",
      "毒舌",
      "职场",
      "治愈",
      "姐弟恋"
    ],
    "oneLine": "全公司最讨厌的“灭绝师太”女高管,意外绑定了“必须被人爱”的系统。"
  },
  {
    "title": "义大利之旅",
    "href": "details/movie-1037.html",
    "cover": "./137.jpg",
    "year": "1954",
    "region": "意大利",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "罗西里尼",
      "英格丽·褒曼",
      "婚姻危机",
      "那不勒斯"
    ],
    "oneLine": "一对感情破裂的英国夫妇在那不勒斯自驾旅行,在庞贝古城的废墟与火山灰中,重新找回了肉体与灵魂的共鸣。"
  },
  {
    "title": "校园恰恰恰",
    "href": "details/movie-1038.html",
    "cover": "./138.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "校园",
      "舞蹈",
      "热血",
      "成长"
    ],
    "oneLine": "一所末流高中的校长为了拯救学校免于倒闭,异想天开地组建了一支男女混合国标舞团,参加全国比赛。"
  },
  {
    "title": "想见你",
    "href": "details/movie-1039.html",
    "cover": "./139.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影版",
    "category": "海外精选",
    "tags": [
      "穿越",
      "磁带",
      "闭环",
      "宿命"
    ],
    "oneLine": "为了打破无限循环的穿越闭环,李子维和黄雨萱必须回到所有悲剧的原点,亲手终结他们的爱情。"
  },
  {
    "title": "仁心解码II粤语",
    "href": "details/movie-1040.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "精神病学",
      "法医精神科",
      "连环案",
      "粤语原声"
    ],
    "oneLine": "法医精神科医生高立仁再次出手,这次他面对的是一个利用精神疾病鉴定漏洞,策划完美犯罪的“高智商恶魔”。"
  },
  {
    "title": "大幻术师2",
    "href": "details/movie-1041.html",
    "cover": "./141.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "悬疑犯罪",
    "tags": [
      "民国",
      "魔术",
      "复仇",
      "盗宝"
    ],
    "oneLine": "民国第一幻术师卷入连环盗窃案,他必须在48小时内用魔术破解对手的真实幻觉。"
  },
  {
    "title": "英雄出少年粤语",
    "href": "details/movie-1042.html",
    "cover": "./142.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "粤语原声",
      "少年英雄",
      "师门恩怨",
      "热血"
    ],
    "oneLine": "孤儿阿杰意外获得半本失传拳谱,为替义父报仇,他只身闯入斧头帮总坛。"
  },
  {
    "title": "骨妹国语",
    "href": "details/movie-1043.html",
    "cover": "./143.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "女杀手",
      "江湖",
      "复仇",
      "国语配音"
    ],
    "oneLine": "澳门赌场背后最令人闻风丧胆的“骨妹”不是一个人,而是一个被遗弃的女孩联盟。"
  },
  {
    "title": "歃血兄弟",
    "href": "details/movie-1044.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "卧底",
      "兄弟情",
      "黑帮",
      "背叛"
    ],
    "oneLine": "两名从小结拜的兄弟在黑帮与警察之间站到了对立面,歃血为盟的誓言即将用鲜血来检验。"
  },
  {
    "title": "新七侠五义之屠龙案",
    "href": "details/movie-1045.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "国产短剧",
    "tags": [
      "展昭",
      "白玉堂",
      "探案",
      "朝堂"
    ],
    "oneLine": "一桩灭门惨案牵出前朝“屠龙”密诏,展昭与白玉堂被迫联手,却发现幕后操盘手是包拯。"
  },
  {
    "title": "没礼貌",
    "href": "details/movie-1046.html",
    "cover": "./146.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "黑帮",
      "礼仪",
      "反转"
    ],
    "oneLine": "一个强迫症黑帮老大要求手下杀人必须讲究“礼貌”,直到他遇到一个比他更“没礼貌”的疯批杀手。"
  },
  {
    "title": "平静的海滩",
    "href": "details/movie-1047.html",
    "cover": "./147.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "家庭秘密",
      "海岸线",
      "回忆"
    ],
    "oneLine": "一个女人回到童年的海边小镇,发现平静的海面下掩埋着整个家族的谎言。"
  },
  {
    "title": "猎杀前线",
    "href": "details/movie-1048.html",
    "cover": "./148.jpg",
    "year": "2027",
    "region": "俄罗斯",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "狙击手",
      "雪原",
      "对抗"
    ],
    "oneLine": "二战东线战场,一名苏联女狙击手与她的德国“幽灵”对手,在零下四十度的无人雪原上进行了一场持续七天的猎杀游戏。"
  },
  {
    "title": "女子监狱第七季",
    "href": "details/movie-1049.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "监狱",
      "女性",
      "社会议题",
      "大结局"
    ],
    "oneLine": "监狱私有化改革失败导致系统崩溃,老囚犯们面临集体转移,过去的恩怨在最后24小时内集中爆发。"
  },
  {
    "title": "上海解放之路",
    "href": "details/movie-1050.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "上海战役",
      "地下党",
      "谍战",
      "投诚",
      "城市战争"
    ],
    "oneLine": "1949年上海解放前夜,一名国民党军官之女与一名地下党情报员,在炮火中联手保护自来水厂。"
  },
  {
    "title": "六级可危",
    "href": "details/movie-1051.html",
    "cover": "./1.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "国产短剧",
    "tags": [
      "大学生活",
      "考试焦虑",
      "无厘头",
      "小组作业",
      "黑马"
    ],
    "oneLine": "为了凑学分混进英语六级考场,四个学渣意外卷入了一场国际间谍的窃密风波。"
  },
  {
    "title": "无惧的爱",
    "href": "details/movie-1052.html",
    "cover": "./2.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "保镖",
      "政客女儿",
      "救赎"
    ],
    "oneLine": "因失误而被开除的前特工,成为激进派政客女儿的保镖,却发现想杀她的正是她父亲。"
  },
  {
    "title": "马克辛的归来",
    "href": "details/movie-1053.html",
    "cover": "./3.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "邪典",
      "续集",
      "好莱坞",
      "血腥杀戮"
    ],
    "oneLine": "色情片女星出身的恐怖女王马克辛,为拍封山之作重返被诅咒的片场,恶灵再度苏醒。"
  },
  {
    "title": "吉丽喜多",
    "href": "details/movie-1054.html",
    "cover": "./4.jpg",
    "year": "2020",
    "region": "泰国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "鬼妻",
      "婚礼",
      "泰国民俗"
    ],
    "oneLine": "程序员娶了古曼童女鬼当老婆,婚后发现她比甲方还会挑Bug。"
  },
  {
    "title": "哈莉·奎茵第四季",
    "href": "details/movie-1055.html",
    "cover": "./5.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "category": "动画少儿",
    "tags": [
      "DC",
      "反派",
      "暴力美学"
    ],
    "oneLine": "彻底洗白的哈莉不再满足于做反派,她决定成为哥谭市最伟大的英雄,哪怕用最疯癫的方式。"
  },
  {
    "title": "摧花狂魔",
    "href": "details/movie-1056.html",
    "cover": "./6.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "变态杀手",
      "心理压迫",
      "密室逃生",
      "血腥",
      "悬疑"
    ],
    "oneLine": "五个女孩被囚禁在废弃花房中,必须在一小时内解开谜题,否则将沦为花朵的肥料。"
  },
  {
    "title": "奇门密探粤语",
    "href": "details/movie-1057.html",
    "cover": "./7.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "密探",
      "风水",
      "粤语原声",
      "机关术"
    ],
    "oneLine": "清朝最后一位“奇门密探”用五行八卦术在香港智斗降头师,守护龙脉裂痕的秘密。"
  },
  {
    "title": "善地第三季",
    "href": "details/movie-1058.html",
    "cover": "./8.jpg",
    "year": "2018",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "哲学",
      "道德测验",
      "伦理",
      "脑洞大开",
      "人性"
    ],
    "oneLine": "一群“烂人”回到人间重新学习如何变好,却发现他们每一次善良的选择,都被系统判定为自私。"
  },
  {
    "title": "床下魔怪",
    "href": "details/movie-1059.html",
    "cover": "./9.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "童年恐惧",
      "密室逃脱式",
      "心理恐怖",
      "不靠鬼怪"
    ],
    "oneLine": "五岁的男孩每天都说床下有怪物,父母不信,直到他们偷偷装上摄像头,看到了自己这辈子都无法解释的画面。"
  },
  {
    "title": "武林不二周刊",
    "href": "details/movie-1060.html",
    "cover": "./10.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "古装职场",
      "狗仔队",
      "江湖八卦",
      "单元剧"
    ],
    "oneLine": "江湖第一狗仔组织的头牌记者,专挖大侠黑料和门派秘辛,直到他意外拍到了自己老板的惊天大瓜。"
  },
  {
    "title": "兄弟连",
    "href": "details/movie-1061.html",
    "cover": "./11.jpg",
    "year": "2001",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "二战",
      "美军",
      "写实主义",
      "群像剧"
    ],
    "oneLine": "从诺曼底登陆到希特勒的鹰巢,一支美军空降连队用血肉写下的二战欧洲战场亲历记。"
  },
  {
    "title": "大唐荣耀",
    "href": "details/movie-1062.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "唐朝",
      "权谋",
      "史诗",
      "大女主"
    ],
    "oneLine": "从被家族遗弃的孤女到执掌后宫的皇太后,她见证了开元盛世与安史之乱的全貌。"
  },
  {
    "title": "不倒侠",
    "href": "details/movie-1063.html",
    "cover": "./13.jpg",
    "year": "2015",
    "region": "中国台湾",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "拳击",
      "励志",
      "父子关系",
      "底层",
      "热血"
    ],
    "oneLine": "一个从未赢过的拳击手,他的绝招不是KO对手,而是无论被击倒多少次都能站起来。"
  },
  {
    "title": "闺中密友",
    "href": "details/movie-1064.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "闺蜜",
      "反转",
      "心理惊悚",
      "都市"
    ],
    "oneLine": "闺蜜新婚夜人间蒸发,伴娘发现她的完美婚姻竟是一场精心设计的骗局。"
  },
  {
    "title": "禽兽1953",
    "href": "details/movie-1065.html",
    "cover": "./15.jpg",
    "year": "1953",
    "region": "日本",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "战后",
      "颓废",
      "黑市",
      "人性"
    ],
    "oneLine": "1953年东京黑市,一个退伍兵为救治妹妹出卖灵魂,最终活成了比战争更残忍的禽兽。"
  },
  {
    "title": "叱咤风流",
    "href": "details/movie-1066.html",
    "cover": "./16.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "黑帮",
      "爱情",
      "时代变迁",
      "枭雄"
    ],
    "oneLine": "九十年代澳门赌场风云中,一个叠码仔用爱情与背叛换来的帝国,却在回归前夜濒临崩塌。"
  },
  {
    "title": "兄弟珍重",
    "href": "details/movie-1067.html",
    "cover": "./17.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "出狱",
      "兄弟情",
      "社会边缘",
      "救赎",
      "九龙城寨"
    ],
    "oneLine": "坐了十五年牢的阿火出狱后,发现当年顶罪的兄弟已成为富豪,而自己却一无所有。"
  },
  {
    "title": "冤家斗一番",
    "href": "details/movie-1068.html",
    "cover": "./18.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电视剧(20集)",
    "category": "都市爱情",
    "tags": [
      "欢喜冤家",
      "办公室恋情",
      "港式笑料",
      "整蛊对决"
    ],
    "oneLine": "广告公司创意总监与市场部女强人相互看不顺眼,他们不知道,两人已在网上热恋三个月。"
  },
  {
    "title": "路竞我择",
    "href": "details/movie-1069.html",
    "cover": "./19.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "公路",
      "创业",
      "前任重逢",
      "二手车"
    ],
    "oneLine": "一对因为穷分手的初恋情侣,七年后在川藏线上一场二手车比赛中重逢,如今都成了对手。"
  },
  {
    "title": "密逃星球",
    "href": "details/movie-1070.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "category": "国产短剧",
    "tags": [
      "密室逃脱",
      "星际主题",
      "明星对抗",
      "高能烧脑"
    ],
    "oneLine": "六位明星被困外星飞船,每期破解一个密室,失败者将被“流放”到未知星球。"
  },
  {
    "title": "猎捕",
    "href": "details/movie-1071.html",
    "cover": "./21.jpg",
    "year": "2015",
    "region": "英国",
    "type": "纪录片",
    "category": "海外精选",
    "tags": [
      "捕食者",
      "动物行为",
      "BBC"
    ],
    "oneLine": "颠覆“弱肉强食”的刻板印象:顶级捕食者80%的狩猎时间都在失败,生命从不是一边倒的屠杀。"
  },
  {
    "title": "赤子童真",
    "href": "details/movie-1072.html",
    "cover": "./22.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "幼儿园",
      "战后",
      "隐形朋友",
      "创伤"
    ],
    "oneLine": "二战结束后的法国乡村,五岁男孩声称他的“隐形朋友”是个纳粹士兵,并说出了没人知道的墓地位置。"
  },
  {
    "title": "禁欲者",
    "href": "details/movie-1073.html",
    "cover": "./23.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "心理",
      "宗教",
      "反转",
      "密室"
    ],
    "oneLine": "为继承巨额遗产,七个陌生人被迫在一座修道院中执行一年“彻底禁欲”,但每晚都有人违反誓言死去。"
  },
  {
    "title": "大张旗鼓",
    "href": "details/movie-1074.html",
    "cover": "./24.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "乡村",
      "乐队",
      "逆袭",
      "搞笑",
      "热血"
    ],
    "oneLine": "一个破产的摇滚主唱回到老家,把村里的丧葬鼓乐队改造成了史上最躁的摇滚天团。"
  },
  {
    "title": "王道",
    "href": "details/movie-1075.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑帮",
      "复仇",
      "卧底"
    ],
    "oneLine": "帮派最忠诚的“法律顾问”出狱后,发现社团早已转型上市公司,而他手里的旧账本,能炸毁半个金融圈。"
  },
  {
    "title": "外滩钟声",
    "href": "details/movie-1076.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "民国",
      "历史",
      "谍战",
      "钟楼"
    ],
    "oneLine": "上海外滩海关大钟每次停摆,就会发生一桩诡异命案,守钟人发现钟声里藏着摩斯密码。"
  },
  {
    "title": "义务与演技",
    "href": "details/movie-1077.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "舞台剧",
      "复仇",
      "演技派",
      "假戏真做"
    ],
    "oneLine": "为了洗脱妹妹的杀人罪名,舞台剧演员受雇于富豪,必须在真实法庭上表演一场“无罪辩护”。"
  },
  {
    "title": "古玩鬼",
    "href": "details/movie-1078.html",
    "cover": "./28.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "民俗",
      "惊悚",
      "古董",
      "诅咒",
      "悬疑"
    ],
    "oneLine": "一尊明代古董娃娃,谁买了它,身边的亲人就会变成替它索命的“玩偶”。"
  },
  {
    "title": "冥王星",
    "href": "details/movie-1079.html",
    "cover": "./29.jpg",
    "year": "2026",
    "region": "美国/德国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "星际殖民",
      "集体失忆",
      "人造重力异常",
      "密室推理"
    ],
    "oneLine": "冥王星基地全体220人同时丢失了最近72小时记忆,而倒计时显示“恒星炸弹”将在48小时后引爆。"
  },
  {
    "title": "阿马尔菲:女神的报酬",
    "href": "details/movie-1080.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "意大利、日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "异国风情",
      "外交风云",
      "绑架",
      "寻宝"
    ],
    "oneLine": "一位驻意大利的日本外交官在调查同胞失踪案时,发现线索指向一幅价值连城的失踪名画与一个古老家族诅咒。"
  },
  {
    "title": "舒克贝塔第四季",
    "href": "details/movie-1081.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "中国",
    "type": "剧集",
    "category": "动画少儿",
    "tags": [
      "郑渊洁",
      "经典重启",
      "飞行冒险",
      "正义伙伴",
      "科幻机甲"
    ],
    "oneLine": "舒克和贝塔的航空公司遭遇神秘反重力技术威胁,他们必须飞向月球,揭开五角飞碟的终极秘密。"
  },
  {
    "title": "再见我的新郎",
    "href": "details/movie-1082.html",
    "cover": "./32.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "催泪",
      "绝症",
      "治愈系"
    ],
    "oneLine": "婚礼前夜,新郎车祸失忆,彻底忘记了爱人,但他唯独记得婚礼的誓言流程。"
  },
  {
    "title": "索菲亚",
    "href": "details/movie-1083.html",
    "cover": "./33.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "身份认同",
      "作家",
      "记忆骗局",
      "双胞胎",
      "文学改编"
    ],
    "oneLine": "畅销女作家回乡寻找小说灵感,却发现失踪二十年的双胞胎姐姐竟活在自己的签名里。"
  },
  {
    "title": "书法女孩 舞动甲子园",
    "href": "details/movie-1084.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "书法",
      "应援团",
      "热血",
      "女子力"
    ],
    "oneLine": "为了拯救即将废部的棒球队,书法部的唯一社员决定用巨大的“地面书法”在甲子园赛场上进行史上最疯狂的应援。"
  },
  {
    "title": "2001影音全纪录",
    "href": "details/movie-1085.html",
    "cover": "./35.jpg",
    "year": "2002",
    "region": "中国大陆",
    "type": "纪录片",
    "category": "国产短剧",
    "tags": [
      "千禧年",
      "盗版碟",
      "青春",
      "文化记忆"
    ],
    "oneLine": "记录了2001年中国小城音像店从VCD到网络下载的历史转折,以及那群泡在盗版碟里的年轻人。"
  },
  {
    "title": "黑暗之敌",
    "href": "details/movie-1086.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "二战",
      "地堡",
      "狼人",
      "心理恐怖"
    ],
    "oneLine": "二战最后一天,一群德军士兵躲进地堡,却发现黑暗中藏着比盟军更可怕的怪物。"
  },
  {
    "title": "我与你的光年距离2",
    "href": "details/movie-1087.html",
    "cover": "./37.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "跨时空",
      "平行宇宙",
      "虐恋",
      "循环"
    ],
    "oneLine": "为了拯救在事故中死去的男友,她不断穿越平行宇宙,却发现在每个宇宙里他都会爱上别人。"
  },
  {
    "title": "我的恋人有点迷",
    "href": "details/movie-1088.html",
    "cover": "./38.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "国产短剧",
    "tags": [
      "失忆",
      "甜宠",
      "身份互换"
    ],
    "oneLine": "男友车祸失忆后,坚称自己是来自平行世界的骑士,而公主是楼下卖煎饼的大妈。"
  },
  {
    "title": "狼群的冲突",
    "href": "details/movie-1089.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "黑帮",
      "家族内斗",
      "卧底",
      "背叛"
    ],
    "oneLine": "一个黑帮家族的二把手为了上位,暗中引入敌对帮派制造内乱,却不知道家族老大的私生子就在对方阵营里当卧底。"
  },
  {
    "title": "衣橱国语",
    "href": "details/movie-1090.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "平行时空",
      "语言",
      "身份认同"
    ],
    "oneLine": "一名失语症女孩打开外婆的旧衣橱,竟能说出从未学过的各地方言。"
  },
  {
    "title": "雪花女孩",
    "href": "details/movie-1091.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电视剧",
    "category": "恐怖惊悚",
    "tags": [
      "绑架案",
      "圣诞",
      "双时间线",
      "女警探",
      "小镇秘密"
    ],
    "oneLine": "2010年圣诞夜,6岁女孩在雪夜失踪;2025年,另一位年轻女性收到了一封署名“雪花女孩”的神秘来信。"
  },
  {
    "title": "你好李焕英",
    "href": "details/movie-1092.html",
    "cover": "./42.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "穿越",
      "母爱",
      "子欲养而亲不待",
      "催泪"
    ],
    "oneLine": "女儿穿越回母亲年轻的时代,拼命想改变母亲命运,却发现一切都是母亲为自己编织的梦。"
  },
  {
    "title": "疯狂元素城:幕后特辑",
    "href": "details/movie-1093.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "category": "动画少儿",
    "tags": [
      "花絮",
      "皮克斯",
      "特效揭秘",
      "访谈"
    ],
    "oneLine": "揭秘年度高分动画《疯狂元素城》从分镜脚本到最终渲染的完整创作历程。"
  },
  {
    "title": "有色彩的女子",
    "href": "details/movie-1094.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "法国/意大利",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女性画家",
      "色彩美学",
      "自由与激情"
    ],
    "oneLine": "讲述了印象派时期被遗忘的天才女画家塞西尔,如何挣脱时代枷锁,用画笔证明自己的传奇一生。"
  },
  {
    "title": "侠探简不知",
    "href": "details/movie-1095.html",
    "cover": "./45.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "武侠",
      "探案",
      "单元剧",
      "江湖"
    ],
    "oneLine": "失忆的神机谷少谷主简不知,带着一把刀和一张嘴,在江湖中破解奇案找回自己的过去。"
  },
  {
    "title": "战争俘虏",
    "href": "details/movie-1096.html",
    "cover": "./46.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "战俘营",
      "美军越战",
      "友谊"
    ],
    "oneLine": "越南战争末期,一个美军战俘与看守他的北越士兵从敌人变成了交换日记的笔友。"
  },
  {
    "title": "羊惧",
    "href": "details/movie-1097.html",
    "cover": "./47.jpg",
    "year": "2022",
    "region": "新西兰",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "僵尸",
      "羊",
      "病毒",
      "田园",
      "变异"
    ],
    "oneLine": "新西兰牧场,一种病毒让羊变成了食肉怪物,牧民只能用电栅栏自保,直到他们发现羊学会了绕路。"
  },
  {
    "title": "塞尔福里奇先生第二季",
    "href": "details/movie-1098.html",
    "cover": "./48.jpg",
    "year": "2014",
    "region": "英国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "商场风云",
      "家族恩怨",
      "时代变革"
    ],
    "oneLine": "伦敦百货帝国迎来劲敌,塞尔福里奇不得不在爱情与破产之间走钢丝。"
  },
  {
    "title": "生死劫杀1946",
    "href": "details/movie-1099.html",
    "cover": "./49.jpg",
    "year": "2023",
    "region": "中国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "民国",
      "连环杀人",
      "战后",
      "侦探",
      "黑白色调"
    ],
    "oneLine": "1946年上海滩,一具具尸体以古代酷刑方式出现,背后藏着日本731部队的残余秘密。"
  },
  {
    "title": "鲁蛇鸟经纪",
    "href": "details/movie-1100.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "废柴",
      "娱乐圈",
      "翻身",
      "讽刺"
    ],
    "oneLine": "五个失败经纪人带着十八线小明星在娱乐圈底层挣扎,却意外卷入一场顶级阴谋。"
  },
  {
    "title": "巴士阿叔事件",
    "href": "details/movie-1101.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "真实事件改编",
      "网络暴力",
      "小人物",
      "港味"
    ],
    "oneLine": "2006年“巴士阿叔”骂人视频的主角,在成为网络红人后的第十年,试图找回当年那个被他骂的年轻人。"
  },
  {
    "title": "幻影特攻",
    "href": "details/movie-1102.html",
    "cover": "./52.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "赛博朋克",
      "卧底",
      "量子科技",
      "警匪对峙",
      "反转"
    ],
    "oneLine": "2046年,一名患有“幻影痛症”的前特工被召回,潜入虚拟意识网络,追捕能篡改记忆的变节同事。"
  },
  {
    "title": "灵数23",
    "href": "details/movie-1103.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "数字迷信",
      "心理暗示",
      "末日",
      "邪教"
    ],
    "oneLine": "一本畅销书声称“23”是宇宙毁灭的密码,全世界开始疯狂寻找数字背后的真相,却发现书是AI写的。"
  },
  {
    "title": "乌龟的壳其实是肋骨",
    "href": "details/movie-1104.html",
    "cover": "./54.jpg",
    "year": "2022",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "冷幽默",
      "科普",
      "中年危机"
    ],
    "oneLine": "一个濒临离婚的古生物学家,用“乌龟肋骨进化论”来比喻他的婚姻,结果所有人都在认真讨论乌龟。"
  },
  {
    "title": "勇者赫鲁库",
    "href": "details/movie-1105.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "category": "动画少儿",
    "tags": [
      "勇者",
      "魔族",
      "搞笑",
      "反套路"
    ],
    "oneLine": "人类世界的勇者击败了魔王,却发现自己被王国背叛,于是去魔族地盘应聘打工人。"
  },
  {
    "title": "超能力是种病",
    "href": "details/movie-1106.html",
    "cover": "./56.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "超能力",
      "反套路",
      "社畜",
      "讽刺",
      "搞笑"
    ],
    "oneLine": "在这个世界,超能力像流感一样会传染,男主的能力是“让方圆百米内的所有超能力同时失效”,他被政府强制分配到了超能力者隔离医院当护士。"
  },
  {
    "title": "塞斯的自治城",
    "href": "details/movie-1107.html",
    "cover": "./57.jpg",
    "year": "2026",
    "region": "比利时",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "乌托邦",
      "算法",
      "自治",
      "阴谋"
    ],
    "oneLine": "全球首个完全由AI算法治理的城市“塞斯”,宣布独立,并向人类宣读了长达千页的驱逐令。"
  },
  {
    "title": "外伤",
    "href": "details/movie-1108.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "法医",
      "记忆篡改",
      "PTSD",
      "连环杀手",
      "精神分析"
    ],
    "oneLine": "一名法医从车祸中醒来,发现自己无法记住任何人的脸,而唯一的线索是自己左手上用刀刻下的血字:“我是凶手”。"
  },
  {
    "title": "彼得和狼",
    "href": "details/movie-1109.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "俄罗斯/英国",
    "type": "动画/电影",
    "category": "海外精选",
    "tags": [
      "定格动画",
      "普罗科菲耶夫",
      "无声胜有声"
    ],
    "oneLine": "没有对白,只有交响乐和音效,重述那个男孩与狼的经典故事。"
  },
  {
    "title": "伦敦上空的鹰",
    "href": "details/movie-1110.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "二战",
      "不列颠空战",
      "飞行员",
      "兄弟"
    ],
    "oneLine": "不列颠空战中,一个英国飞行员和一个德国飞行员在空中打下对方后,又在雪夜的木屋里相遇了。"
  },
  {
    "title": "微妙爱情",
    "href": "details/movie-1111.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "法式浪漫",
      "办公室恋情",
      "温柔治愈",
      "熟男熟女"
    ],
    "oneLine": "一位曾因丧夫而心如死水的女强人,在遇到一位笨拙憨厚的北欧同事后,重新学会了如何去爱。"
  },
  {
    "title": "傲慢的波里斯先生",
    "href": "details/movie-1112.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "英伦",
      "讽刺",
      "文学",
      "阶级"
    ],
    "oneLine": "一位落魄的贵族作家被迫给一个俄罗斯暴发户写传记,为了报复,他决定把书写成一部旷世讽刺杰作。"
  },
  {
    "title": "天国与地狱",
    "href": "details/movie-1113.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "灵魂互换",
      "警察",
      "连环杀手",
      "正义与邪恶"
    ],
    "oneLine": "热血刑警与冷血连环杀手意外灵魂互换,为了不露馅,刑警必须学着像恶魔一样思考,而杀手则潜伏进警队继续杀人。"
  },
  {
    "title": "长大的家伙",
    "href": "details/movie-1114.html",
    "cover": "./64.jpg",
    "year": "2020",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "童年后遗症",
      "巨型婴儿",
      "成长痛"
    ],
    "oneLine": "一个从未被母亲拥抱过的男人,35岁那年,身体突然开始“逆向长大”——先长回18岁,再长回10岁。"
  },
  {
    "title": "阿卡普高第二季",
    "href": "details/movie-1115.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "度假村",
      "墨西哥",
      "成长"
    ],
    "oneLine": "年轻的管理者麦克斯在阿卡普高度假村站稳脚跟,但新来的对手酒店试图挖走他所有员工。"
  },
  {
    "title": "街景一九七〇",
    "href": "details/movie-1116.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "1970年代",
      "台北",
      "青春",
      "时代变迁"
    ],
    "oneLine": "1970年台北西门町,一个街头摄影师用胶片记录即将拆迁的中华商场,却意外拍下了一场白色恐怖秘密逮捕的现场。"
  },
  {
    "title": "四平青年之街溜子",
    "href": "details/movie-1117.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "东北",
      "混社会",
      "逆袭",
      "黑色幽默"
    ],
    "oneLine": "四平混混“街溜子”二驴为了兄弟义气假扮富二代,结果被真富二代全城追杀,还意外卷入一场跨国假钞案。"
  },
  {
    "title": "双生花2014",
    "href": "details/movie-1118.html",
    "cover": "./68.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "姐妹",
      "替身",
      "心理",
      "校园",
      "秘密"
    ],
    "oneLine": "2014年的夏天,安静内向的妹妹失踪了,姐姐不得不假扮她生活,却发现自己逐渐爱上了妹妹的男友。"
  },
  {
    "title": "阴阳路19:我对眼见到嘢",
    "href": "details/movie-1119.html",
    "cover": "./69.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "阴阳眼",
      "都市传说",
      "因果循环",
      "港式民俗"
    ],
    "oneLine": "一个声称能“见到鬼”的网络主播,在一栋废弃大厦直播时,发现鬼真的在看他直播。"
  },
  {
    "title": "女剧盗",
    "href": "details/movie-1120.html",
    "cover": "./70.jpg",
    "year": "1996",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "女性侠盗",
      "剧场",
      "双重身份",
      "港剧"
    ],
    "oneLine": "白天是剧团里不起眼的道具师,夜晚是专偷贪官奸商的“女剧盗”,一场戏中戏揭开身世之谜。"
  },
  {
    "title": "战争不相信眼泪",
    "href": "details/movie-1121.html",
    "cover": "./71.jpg",
    "year": "2012",
    "region": "中国",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "女兵",
      "抗战",
      "长征",
      "残酷真实"
    ],
    "oneLine": "一支红军女兵运输连在长征路上被敌军打散,她们不相信眼泪,只相信手中的枪和脚下的路。"
  },
  {
    "title": "没有过不去的年",
    "href": "details/movie-1122.html",
    "cover": "./72.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "春运",
      "亲情和解",
      "返乡",
      "年夜饭"
    ],
    "oneLine": "一个在北京打拼失败的落魄编剧,为了躲避债主,被迫搭上黑车返乡过年。"
  },
  {
    "title": "洛杉矶没有爱情",
    "href": "details/movie-1123.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "都市",
      "现实",
      "速食爱情",
      "群像",
      "黑色幽默"
    ],
    "oneLine": "六名在洛杉矶打拼的年轻男女,用APP约会上床,却始终敲不开那个叫“爱情”的房门。"
  },
  {
    "title": "妖星哥拉斯",
    "href": "details/movie-1124.html",
    "cover": "./74.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "怪兽",
      "特摄",
      "太空",
      "末日危机"
    ],
    "oneLine": "一颗拥有意识的妖星哥拉斯冲向地球,人类联合哥斯拉,展开太空决战。"
  },
  {
    "title": "魔女的秘密",
    "href": "details/movie-1125.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "魔女",
      "便利店",
      "诅咒",
      "罗曼史",
      "治愈"
    ],
    "oneLine": "隐姓埋名的魔女在便利店打工,她卖的每件商品都带着一个“小诅咒”。"
  },
  {
    "title": "小男人周记",
    "href": "details/movie-1126.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "男性视角",
      "中年危机",
      "职场",
      "家庭",
      "港式幽默"
    ],
    "oneLine": "一个失业、被妻女嫌弃、被朋友坑的中年废柴,决定用一本“渣男日记”逆袭人生,却越搞越糟。"
  },
  {
    "title": "梦幻歌舞",
    "href": "details/movie-1127.html",
    "cover": "./77.jpg",
    "year": "2023",
    "region": "印度",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "宝莱坞",
      "平行世界",
      "梦想",
      "视觉效果",
      "乐队"
    ],
    "oneLine": "一个落魄歌手跳河自杀时,竟穿越到一个所有人说话都自带背景音乐和特效的奇幻小镇。"
  },
  {
    "title": "塞纳河与巴黎的相遇",
    "href": "details/movie-1128.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "跨文化爱情",
      "巴黎迷梦",
      "时间循环",
      "哲学浪漫",
      "城市情书"
    ],
    "oneLine": "中国留学生塞纳在巴黎经历了一百次同样的“初次约会”,每次都以为自己是主动方,直到发现对方也在经历循环。"
  },
  {
    "title": "姐姐死了",
    "href": "details/movie-1129.html",
    "cover": "./79.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "姐妹",
      "复仇",
      "谎言",
      "双胞胎",
      "烧脑"
    ],
    "oneLine": "妹妹在姐姐葬礼上发现不对:棺材里的人不是姐姐,而是一个戴着姐姐面具的陌生女人。"
  },
  {
    "title": "她不见了",
    "href": "details/movie-1130.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "女性",
      "失踪案",
      "记忆碎片",
      "反转"
    ],
    "oneLine": "女儿失踪七年后,母亲在养老院发现她竟然一直以护工身份活着,却完全不认识自己。"
  },
  {
    "title": "鬼挡路7",
    "href": "details/movie-1131.html",
    "cover": "./81.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "血腥",
      "密室",
      "畸形怪胎",
      "生存"
    ],
    "oneLine": "一队网红主播进入废弃矿井探险,惊醒了沉睡百年的食人矿工家族。"
  },
  {
    "title": "谁主英伦",
    "href": "details/movie-1132.html",
    "cover": "./82.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "权谋斗争",
      "暗箱操作",
      "阶层对立"
    ],
    "oneLine": "一场突如其来的首相坠机事件,揭开了英伦三岛百年贵族与新贵之间的血色洗牌。"
  },
  {
    "title": "驭影师",
    "href": "details/movie-1133.html",
    "cover": "./83.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "网络剧",
    "category": "国产短剧",
    "tags": [
      "都市异能",
      "影子操控",
      "职场喜剧"
    ],
    "oneLine": "社畜李想发现自己能操控影子,却先用来让老板的影子在会议中倒立,引发了一连串笑料。"
  },
  {
    "title": "朋诱关系",
    "href": "details/movie-1134.html",
    "cover": "./84.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "同志",
      "暧昧",
      "友谊",
      "成长"
    ],
    "oneLine": "两个直男为了合租便宜假装情侣,结果住着住着,连自己都分不清是真是假。"
  },
  {
    "title": "冒牌特工",
    "href": "details/movie-1135.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "身份错位",
      "草根英雄",
      "谍战搞笑"
    ],
    "oneLine": "一个跑龙套的群演被误认为王牌特工,而他拿到的剧本只有四个字:活着回来。"
  },
  {
    "title": "宝芝林粤语",
    "href": "details/movie-1136.html",
    "cover": "./86.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "黄飞鸿",
      "经典",
      "师徒情",
      "民初"
    ],
    "oneLine": "青年黄飞鸿接手宝芝林,面对洋人挑战和内部矛盾,不得不以武立德,振兴医馆。"
  },
  {
    "title": "我无曳",
    "href": "details/movie-1137.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "替身迷局",
      "身份反转",
      "方言叙事",
      "冷峻美学",
      "社会派"
    ],
    "oneLine": "长江边小城,一个被断定自杀的哑女突然活着回来,却声称自己“不是她”。"
  },
  {
    "title": "问问你的心",
    "href": "details/movie-1138.html",
    "cover": "./88.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "律师行业",
      "现实主义",
      "女性成长",
      "道德困境"
    ],
    "oneLine": "一个理想主义的年轻律师为农民工维权,结果发现自己律所的老板就是黑心开发商的隐秘合伙人。"
  },
  {
    "title": "泰王纳黎萱5",
    "href": "details/movie-1139.html",
    "cover": "./89.jpg",
    "year": "2015",
    "region": "泰国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "泰缅战争",
      "史诗",
      "宫廷权谋",
      "象战"
    ],
    "oneLine": "泰王纳黎萱的最后一战,面对叛军与缅军的联手夹击,他用一场前所未见的战术粉碎了敌人的包围。"
  },
  {
    "title": "三个臭皮匠",
    "href": "details/movie-1140.html",
    "cover": "./90.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "草台班子",
      "破案",
      "反向操作",
      "搞笑"
    ],
    "oneLine": "一个失业的编剧、一个跑路的理财经理和一个迷信的退休大妈,组成了全城最不靠谱的“民间侦探社”,却歪打正着破了悬案。"
  },
  {
    "title": "一周的朋友2017",
    "href": "details/movie-1141.html",
    "cover": "./91.jpg",
    "year": "2017",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "记忆障碍",
      "纯爱",
      "日记",
      "救赎"
    ],
    "oneLine": "女主每到周一就会忘记所有朋友,男主决定“每周一重新追她一次”。"
  },
  {
    "title": "扭计美人",
    "href": "details/movie-1142.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "女强",
      "智斗",
      "轻喜剧"
    ],
    "oneLine": "破产商贾之女为了退掉豪门婚约,使出浑身解数装疯卖傻、败家闯祸,却越搞砸越被未婚夫一家当成绝世天才。"
  },
  {
    "title": "儿女债粤语",
    "href": "details/movie-1143.html",
    "cover": "./93.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "香港",
      "移民",
      "代际冲突",
      "回归",
      "市井"
    ],
    "oneLine": "1997年前夕,一个香港底层家庭的四兄妹,为了争夺一张移民加拿大的单程票,亲情濒临破碎。"
  },
  {
    "title": "狂鳄",
    "href": "details/movie-1144.html",
    "cover": "./94.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "巨鳄",
      "洪水",
      "被困",
      "生存",
      "血腥猎杀"
    ],
    "oneLine": "百年一遇的洪水将小镇淹成泽国,一头30英尺的咸水鳄趁机游入居民区大开杀戒。"
  },
  {
    "title": "太阳王子 霍尔斯的大冒险",
    "href": "details/movie-1145.html",
    "cover": "./95.jpg",
    "year": "1968",
    "region": "日本",
    "type": "电影/动画",
    "category": "动画少儿",
    "tags": [
      "高畑勋",
      "宫崎骏",
      "经典",
      "北欧",
      "成长"
    ],
    "oneLine": "少年霍尔斯为父报仇,带着狼族伙伴踏上寻找太阳剑的征途,去击败冰之女王。"
  },
  {
    "title": "黑街追辑令",
    "href": "details/movie-1146.html",
    "cover": "./96.jpg",
    "year": "1995",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑人电影",
      "街头",
      "复仇",
      "社会写实",
      "警匪"
    ],
    "oneLine": "弟弟在街头被枪杀,身为警察的哥哥必须在法律和复仇之间做出终极选择。"
  },
  {
    "title": "君子好逑",
    "href": "details/movie-1147.html",
    "cover": "./97.jpg",
    "year": "1998",
    "region": "中国香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "三角恋",
      "都市情感",
      "港式爱情",
      "幽默对白",
      "错位恋情"
    ],
    "oneLine": "两个性格迥异的室友同时爱上新搬来的女邻居,却都以为对方是自己爱情的绊脚石。"
  },
  {
    "title": "泰囧",
    "href": "details/movie-1148.html",
    "cover": "./98.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "泰国",
      "旅游",
      "徐峥王宝强"
    ],
    "oneLine": "商业精英徐朗为了拿到授权书,在泰国遭遇了卖葱油饼的奇葩王宝,展开一段噩梦般的旅程。"
  },
  {
    "title": "隐世宗门掌教",
    "href": "details/movie-1149.html",
    "cover": "./99.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "修仙",
      "搞笑",
      "扮猪吃老虎",
      "穿越"
    ],
    "oneLine": "现代大学生穿越异界,继承了一个破落的隐世宗门,门下弟子只有一条狗。"
  },
  {
    "title": "水中漫步2004",
    "href": "details/movie-1150.html",
    "cover": "./100.jpg",
    "year": "2004",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "自闭症",
      "水",
      "幻想"
    ],
    "oneLine": "一个无法与他人交流的自闭症少年,坚信自己可以在水面上行走。"
  },
  {
    "title": "爱·重来",
    "href": "details/movie-1151.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "失忆",
      "婚姻危机",
      "台式纯爱"
    ],
    "oneLine": "妻子因车祸失忆,只记得大学时代的恋人,却忘了自己已经结婚十年。"
  },
  {
    "title": "赌马风波",
    "href": "details/movie-1152.html",
    "cover": "./102.jpg",
    "year": "1992",
    "region": "香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "赛马",
      "黑帮",
      "兄弟情"
    ],
    "oneLine": "为了还清赌债,三兄弟决定偷走冠军马,却发现那匹马听得懂人话。"
  },
  {
    "title": "黑帮夏日好开工",
    "href": "details/movie-1153.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "黑色幽默",
      "黑帮",
      "度假"
    ],
    "oneLine": "因为天气太热,意大利黑手党宣布“夏季停工令”,两名被迫休假的杀手在海边度假时,却接二连三地误杀了自己的目标。"
  },
  {
    "title": "山歌姻缘",
    "href": "details/movie-1154.html",
    "cover": "./104.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "民歌",
      "家族恩怨",
      "田园风光",
      "文化传承"
    ],
    "oneLine": "两个世代对歌的世仇家族,却诞生了一对用山歌秘密传情的恋人。"
  },
  {
    "title": "情迷佳人",
    "href": "details/movie-1155.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "AI恋人",
      "替身文学",
      "容貌焦虑",
      "身份窃取",
      "反转"
    ],
    "oneLine": "整容医院护士偷偷购买了与暗恋对象99%相似的AI伴侣,却发现AI不断要求她“变成”他失踪的前女友。"
  },
  {
    "title": "野蛮人柯南",
    "href": "details/movie-1156.html",
    "cover": "./106.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "重启",
      "冷兵器",
      "复仇",
      "肌肉男"
    ],
    "oneLine": "杀父仇人用巫术复活了远古邪灵,柯南必须找到唯一能杀死邪灵的亚特兰蒂斯之剑。"
  },
  {
    "title": "狂花追杀令",
    "href": "details/movie-1157.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "女杀手",
      "复仇",
      "血腥",
      "高速",
      "暴力美学"
    ],
    "oneLine": "代号“狂花”的顶级杀手被组织出卖,身负重伤的她开着一辆救护车,在医院、高速公路和黑帮老巢展开复仇。"
  },
  {
    "title": "三颗摇滚的心",
    "href": "details/movie-1158.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "乐队",
      "中年",
      "梦想",
      "废柴"
    ],
    "oneLine": "三个失意的中年大叔决定重组乐队,却发现他们唯一的演出机会是儿童医院的重症病房。"
  },
  {
    "title": "同龄叔父",
    "href": "details/movie-1159.html",
    "cover": "./109.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "辈分错乱",
      "代际和解",
      "幽默"
    ],
    "oneLine": "25岁青年回乡发现85岁的叔公竟是自己的大学同学,两人被迫以叔侄身份同住。"
  },
  {
    "title": "星球大战:异等小队第一季",
    "href": "details/movie-1160.html",
    "cover": "./110.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "category": "动画少儿",
    "tags": [
      "克隆人",
      "雇佣兵",
      "后共和国时代"
    ],
    "oneLine": "五个拥有特殊基因的克隆人小队,在帝国崛起后沦为通缉犯。"
  },
  {
    "title": "机密议程式",
    "href": "details/movie-1161.html",
    "cover": "./111.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "数学家",
      "洗钱暗号",
      "方程式",
      "高智商犯罪"
    ],
    "oneLine": "警方破解不了的不是密码,而是一道小学奥数题,因为出题的人是个数学天才也是变态。"
  },
  {
    "title": "侠胆双雄",
    "href": "details/movie-1162.html",
    "cover": "./112.jpg",
    "year": "1981",
    "region": "美国",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "八十年代",
      "搭档",
      "私家侦探",
      "肌肉车"
    ],
    "oneLine": "一个越战退伍兵和一个前警察组成私家侦探搭档,开着黑色肌肉车在洛杉矶惩恶扬善。"
  },
  {
    "title": "情迷家教",
    "href": "details/movie-1163.html",
    "cover": "./113.jpg",
    "year": "2002",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "师生恋",
      "伦理",
      "禁忌",
      "钢琴"
    ],
    "oneLine": "三十岁的钢琴女家教给十五岁富少上课,两人逐渐陷入一场无法言说的危险关系。"
  },
  {
    "title": "托米莉斯女王",
    "href": "details/movie-1164.html",
    "cover": "./114.jpg",
    "year": "2019",
    "region": "哈萨克斯坦",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "史诗",
      "女战士",
      "游牧民族",
      "复仇"
    ],
    "oneLine": "草原女王托米莉斯,为了给死去的丈夫和儿子报仇,单挑波斯皇帝居鲁士。"
  },
  {
    "title": "死亡繁殖",
    "href": "details/movie-1165.html",
    "cover": "./115.jpg",
    "year": "2024",
    "region": "澳大利亚",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "生物实验",
      "末世",
      "寄生虫"
    ],
    "oneLine": "一种通过体液传播的寄生虫能让宿主快速怀孕,而产下的“婴儿”会杀死宿主。"
  },
  {
    "title": "吓餐懵",
    "href": "details/movie-1166.html",
    "cover": "./116.jpg",
    "year": "2005",
    "region": "中国香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "恶搞",
      "僵尸",
      "无厘头",
      "香港"
    ],
    "oneLine": "一个倒霉蛋误入闹鬼大楼,却发现鬼比人还胆小,笑到肚子痛。"
  },
  {
    "title": "狱中龙",
    "href": "details/movie-1167.html",
    "cover": "./117.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "监狱风云",
      "兄弟情义",
      "帮派卧底",
      "老港片"
    ],
    "oneLine": "他是监狱里的龙,但他不知道自己游错了海。"
  },
  {
    "title": "今匀大赌大件事",
    "href": "details/movie-1168.html",
    "cover": "./118.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "赌片",
      "港式无厘头",
      "乌龙",
      "兄弟",
      "黑吃黑"
    ],
    "oneLine": "两个废柴误拿了黑帮的一亿赌资,为了活命,他们必须在赌桌上赢回同等的钱。"
  },
  {
    "title": "复仇女黑帮",
    "href": "details/movie-1169.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "极道",
      "女杀手",
      "暴力美学",
      "以暴制暴"
    ],
    "oneLine": "一群被黑帮迫害的绝望主妇结盟,以柔克刚,用“主妇智慧”团灭整个极道组织。"
  },
  {
    "title": "神圣之门",
    "href": "details/movie-1170.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "category": "科幻奇幻",
    "tags": [
      "异世界",
      "门",
      "代价",
      "神域"
    ],
    "oneLine": "东京地铁月台出现一扇只会打开三分钟的门,进去的人回来时都失去了最重要的记忆。"
  },
  {
    "title": "马利和我",
    "href": "details/movie-1171.html",
    "cover": "./121.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "萌宠",
      "拉布拉多",
      "生命教育"
    ],
    "oneLine": "世界上最糟糕的狗狗,教会了一个家庭如何去爱、面对衰老与告别。"
  },
  {
    "title": "夏洛特眼中的简",
    "href": "details/movie-1172.html",
    "cover": "./122.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女作家",
      "姐妹",
      "禁忌之恋",
      "维多利亚时代"
    ],
    "oneLine": "勃朗特家最小的妹妹夏洛特,在整理遗物时发现大姐简的日记,揭露了一段与女仆的隐秘恋情。"
  },
  {
    "title": "惹鬼回路3",
    "href": "details/movie-1173.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "J-Horror",
      "科技恐惧",
      "亡灵网络"
    ],
    "oneLine": "新型脑机接口让人类能“看见”亡魂,但当所有用户开始做同一个噩梦时,现实开始崩坏。"
  },
  {
    "title": "敌军",
    "href": "details/movie-1174.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "二战",
      "战俘",
      "人性",
      "德军",
      "反转"
    ],
    "oneLine": "苏联女军医在战场救下一名德国伤兵,三个月后她沦为战俘,审讯她的正是那个被她救过的人。"
  },
  {
    "title": "索拉一家",
    "href": "details/movie-1175.html",
    "cover": "./125.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "家族诅咒",
      "魔法",
      "世代同堂",
      "搞笑"
    ],
    "oneLine": "索拉家的每一个成员都身怀一种奇怪的魔法,但每逢家庭聚餐,这些魔法总会把房子搞得一团糟。"
  },
  {
    "title": "爱你爱妳",
    "href": "details/movie-1176.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "双胞胎互换",
      "都市情感",
      "错位恋爱",
      "轻喜剧"
    ],
    "oneLine": "姐姐逃婚去南极,社恐妹妹被迫顶替她嫁入豪门,却发现未婚夫是自己网恋三年的对象。"
  },
  {
    "title": "梅西",
    "href": "details/movie-1177.html",
    "cover": "./127.jpg",
    "year": "2021",
    "region": "阿根廷/西班牙",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "足球",
      "侏儒症",
      "逆袭",
      "家庭",
      "励志"
    ],
    "oneLine": "梅西不是天生的巨星——小时候他是被医生判了“死刑”的矮小少年,父亲卖血为他治病。"
  },
  {
    "title": "非常出击",
    "href": "details/movie-1178.html",
    "cover": "./128.jpg",
    "year": "2008",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "特工",
      "民国",
      "暗杀",
      "智斗"
    ],
    "oneLine": "1937年上海沦陷,五个互不相识的民间高手被秘密收编,组成一支不存在的“幽灵特工队”。"
  },
  {
    "title": "美丽小魔头",
    "href": "details/movie-1179.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "童星",
      "心理操控",
      "恶女养成",
      "反雌竞"
    ],
    "oneLine": "全韩国最红的8岁童星,私底下是个小恶魔。她的经纪人为了控制她,把自己女儿送进了同一场噩梦。"
  },
  {
    "title": "人·鬼·情",
    "href": "details/movie-1180.html",
    "cover": "./130.jpg",
    "year": "1987",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "女老生",
      "性别困境",
      "艺术与人生"
    ],
    "oneLine": "一位京剧女老生一生在舞台上扮演男人,却在台下始终找不到一个真正接纳她的爱人。"
  },
  {
    "title": "铁男特警",
    "href": "details/movie-1181.html",
    "cover": "./131.jpg",
    "year": "2027",
    "region": "日本",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "义肢",
      "近未来",
      "警匪",
      "人性",
      "钢铁之躯"
    ],
    "oneLine": "失去四肢的警察换上战斗义肢,却发现自己的新身体藏着杀人程序。"
  },
  {
    "title": "燕子盗",
    "href": "details/movie-1182.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "轻功",
      "连环案",
      "江湖",
      "女性"
    ],
    "oneLine": "十年前,燕子盗劫富济贫;十年后,模仿犯频频作案,引出的却是江湖最大的骗局。"
  },
  {
    "title": "血手印",
    "href": "details/movie-1183.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "连环杀人",
      "雨夜",
      "手印诅咒",
      "刑警",
      "密闭空间"
    ],
    "oneLine": "暴雨夜,三起命案现场都出现同一个血手印,而它属于三年前就已经死去的女孩。"
  },
  {
    "title": "完美的一天",
    "href": "details/movie-1184.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "西班牙",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "时间循环",
      "人生选择",
      "存在主义"
    ],
    "oneLine": "一个对生活绝望的男人获得了一枚“完美一天”硬币,投掷后他会在最快乐的一天里无限循环。"
  },
  {
    "title": "人生万万想不到",
    "href": "details/movie-1185.html",
    "cover": "./135.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "反转",
      "乌龙",
      "中奖"
    ],
    "oneLine": "一辈子倒霉的清洁工中了六合彩头奖,却把彩票塞进了要捐给慈善机构的旧裤子里。"
  },
  {
    "title": "怒海群雄",
    "href": "details/movie-1186.html",
    "cover": "./136.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "海盗",
      "海上霸权",
      "兄弟情",
      "船战"
    ],
    "oneLine": "三个性格迥异的海盗船长,为了对抗无敌的西班牙舰队,决定先拼个你死我活选出领袖。"
  },
  {
    "title": "天堂血路",
    "href": "details/movie-1187.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "德国/奥地利",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "二战",
      "信仰",
      "逃亡",
      "人性"
    ],
    "oneLine": "二战尾声,一名德军逃兵与一名犹太女孩在阿尔卑斯山的暴风雪中互相救赎。"
  },
  {
    "title": "三只流浪猫",
    "href": "details/movie-1188.html",
    "cover": "./138.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "猫咪",
      "流浪",
      "治愈",
      "社会边缘",
      "群像"
    ],
    "oneLine": "三只被遗弃的猫,串联起都市里三个不同年龄、不同境遇的边缘人。"
  },
  {
    "title": "我兄弟的婚礼",
    "href": "details/movie-1189.html",
    "cover": "./139.jpg",
    "year": "2026",
    "region": "印度",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "锡克教",
      "同性",
      "返乡",
      "代际冲突",
      "传统"
    ],
    "oneLine": "一名在纽约出柜的锡克教建筑师回到旁遮普参加弟弟的婚礼,却发现新郎是自己五年前的Tinder约会对象。"
  },
  {
    "title": "黑猫",
    "href": "details/movie-1190.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "诅咒",
      "猫咪",
      "都市传说",
      "复仇"
    ],
    "oneLine": "一只通体漆黑的流浪猫每晚出现在不同家庭的窗台,次日那家必有人离奇死亡。"
  },
  {
    "title": "或许我愿意",
    "href": "details/movie-1191.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "相亲",
      "假结婚",
      "契约恋爱"
    ],
    "oneLine": "社恐程序员花钱雇人扮女友回家过年,不料对方竟是暗恋十年的高中同学,还带着一个五岁孩子。"
  },
  {
    "title": "秘密2015",
    "href": "details/movie-1192.html",
    "cover": "./142.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "记忆读取",
      "伦理困境",
      "人性拷问"
    ],
    "oneLine": "近未来,一种能读取死者最后记忆的装置问世,女调查员在侵入连环杀手大脑时,发现了自己父亲的秘密。"
  },
  {
    "title": "机动部队粤语",
    "href": "details/movie-1193.html",
    "cover": "./143.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "卧底",
      "兄弟情",
      "枪战",
      "粤语原声"
    ],
    "oneLine": "一场失败的卧底行动让整支机动部队陷入内鬼疑云,兄弟反目之前,他们必须先揪出真正的叛徒。"
  },
  {
    "title": "一飞冲天",
    "href": "details/movie-1194.html",
    "cover": "./144.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "跳台滑雪",
      "冬奥",
      "逆袭",
      "师徒"
    ],
    "oneLine": "一个被省队开除的短跑少年,阴差阳错站上了跳台滑雪的赛场,目标直指冬奥。"
  },
  {
    "title": "地球百子第二季",
    "href": "details/movie-1195.html",
    "cover": "./145.jpg",
    "year": "2015",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "末世生存",
      "部落战争",
      "AI崛起"
    ],
    "oneLine": "地面幸存者竟是一个“山姆共和国”的核战遗民,而百子们体内都被注入了追踪芯片。"
  },
  {
    "title": "笨蛋·测验·召唤兽:祭",
    "href": "details/movie-1196.html",
    "cover": "./146.jpg",
    "year": "2011",
    "region": "日本",
    "type": "动画剧集 (OVA)",
    "category": "动画少儿",
    "tags": [
      "笨蛋",
      "召唤兽",
      "学园祭",
      "搞笑",
      "明久"
    ],
    "oneLine": "学园祭前夕,明久为了给瑞希买发卡,意外被卷入一场与隔壁高中对抗的召唤兽棒球赛。"
  },
  {
    "title": "博洛拉姆",
    "href": "details/movie-1197.html",
    "cover": "./147.jpg",
    "year": "2019",
    "region": "哈萨克斯坦/俄罗斯",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "草原",
      "游牧民族",
      "反抗",
      "史诗"
    ],
    "oneLine": "十八世纪哈萨克草原上,少年博洛拉姆目睹部落被屠,十年后他带领一支游骑兵,向沙俄复仇。"
  },
  {
    "title": "绝 ‧ 种",
    "href": "details/movie-1198.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "克隆人",
      "生育禁令",
      "末世设定",
      "伦理争议",
      "反转结局"
    ],
    "oneLine": "在一个禁止自然生育、只能克隆的末世,一名孕妇被发现,政府要摘取她子宫,而她要逃进“绝种地带”。"
  },
  {
    "title": "豆田战役",
    "href": "details/movie-1199.html",
    "cover": "./149.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "抗日神剧",
      "荒诞",
      "农村战场"
    ],
    "oneLine": "1943年华北农村,一场因一颗黄豆引发的日军扫荡,最终演变成荒诞的“豆田战役”。"
  },
  {
    "title": "新猛鬼街国语",
    "href": "details/movie-1200.html",
    "cover": "./150.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "梦中杀人",
      "翻拍",
      "弗莱迪",
      "心理恐惧"
    ],
    "oneLine": "一群青少年发现自己在梦中被同一个满脸刀疤的男人追杀,而失眠并不能阻止死亡降临。"
  },
  {
    "title": "东京日",
    "href": "details/movie-1201.html",
    "cover": "./1.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "亲情",
      "单亲爸爸",
      "日常",
      "治愈"
    ],
    "oneLine": "一位患有短期记忆障碍的父亲,每天都要在东京的车站重新认识自己的女儿。"
  },
  {
    "title": "大漠英雄传",
    "href": "details/movie-1202.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国",
    "type": "网络剧",
    "category": "动作冒险",
    "tags": [
      "沙漠",
      "寻宝",
      "侠客",
      "动作"
    ],
    "oneLine": "落魄刀客为救赎踏上沙漠,发现传说中的英雄其实是自己最想杀的人。"
  },
  {
    "title": "勿忘初心",
    "href": "details/movie-1203.html",
    "cover": "./3.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "创业",
      "兄弟反目",
      "黑色幽默",
      "初心"
    ],
    "oneLine": "三个大学好友一起创业十年,公司上市前夜,他们决定用一场“真心话大冒险”来清算所有旧账与背叛。"
  },
  {
    "title": "千姬变2之帝女幽魂",
    "href": "details/movie-1204.html",
    "cover": "./4.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "女鬼",
      "穿越",
      "捉妖师",
      "搞笑"
    ],
    "oneLine": "明朝公主死后化为千年厉鬼,却在现代都市爱上了一个落魄的龙虎山道士传人,但天庭派来的机器人捉妖师也到了。"
  },
  {
    "title": "啊!设计",
    "href": "details/movie-1205.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "设计",
      "美学",
      "日常",
      "教育",
      "匠心"
    ],
    "oneLine": "从一把茶壶到一座城市,鬼才设计师们将用100分钟,重新教会你看待这个世界的方式。"
  },
  {
    "title": "午餐之歌",
    "href": "details/movie-1206.html",
    "cover": "./6.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "治愈",
      "食堂",
      "单元剧",
      "人情冷暖"
    ],
    "oneLine": "每到午餐时间,神秘女店主就会根据当天心情为客人即兴创作一首打工人之歌。"
  },
  {
    "title": "神秘博士:圣诞颂歌",
    "href": "details/movie-1207.html",
    "cover": "./7.jpg",
    "year": "2010",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "时间旅行",
      "圣诞",
      "狄更斯",
      "治愈",
      "英剧"
    ],
    "oneLine": "博士困在一颗被阴云笼罩的星球上空,他必须在一个小时内,改变吝啬鬼卡兹兰的心,以拯救四千人。"
  },
  {
    "title": "新九品芝麻官2024",
    "href": "details/movie-1208.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "翻拍",
      "直播",
      "网络审判",
      "无厘头"
    ],
    "oneLine": "乱用AI审案的新知县刚上任,就遇到了富二代杀妻案,被逼无奈开启抖音直播,让网友断案。"
  },
  {
    "title": "小熊维尼之长鼻怪大冒险",
    "href": "details/movie-1209.html",
    "cover": "./9.jpg",
    "year": "2026",
    "region": "美国",
    "type": "动画电影",
    "category": "喜剧家庭",
    "tags": [
      "冒险",
      "友情",
      "治愈",
      "童话"
    ],
    "oneLine": "当百亩森林里出现神秘的脚印,小熊维尼决定揭开“长鼻怪”的真面目。"
  },
  {
    "title": "一路向西2之泰西",
    "href": "details/movie-1210.html",
    "cover": "./10.jpg",
    "year": "2018",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "成人",
      "异国风情",
      "自我寻找"
    ],
    "oneLine": "失意港男远赴泰国寻找情欲解放,却在人妖秀和佛教禅修之间,找到了迷失的自我。"
  },
  {
    "title": "我爱你姜九",
    "href": "details/movie-1211.html",
    "cover": "./11.jpg",
    "year": "2027",
    "region": "韩国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "时间循环",
      "暗恋成真",
      "救赎"
    ],
    "oneLine": "内向的图书管理员发现,只要在纸上写“我爱你姜九”,那天就会重复过。"
  },
  {
    "title": "原始恐惧",
    "href": "details/movie-1212.html",
    "cover": "./12.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "荒野求生",
      "史前生物",
      "生死时速"
    ],
    "oneLine": "一群探险家误入时间裂缝,回到尚未被探索的白垩纪,而他们唯一的武器是现代知识。"
  },
  {
    "title": "催眠大师",
    "href": "details/movie-1213.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "催眠",
      "心理博弈",
      "反转",
      "密室"
    ],
    "oneLine": "著名的心理医生在治疗一名奇怪的失眠症患者时,发现自己反而被对方一步步拉入了记忆的陷阱。"
  },
  {
    "title": "沉默的灵魂",
    "href": "details/movie-1214.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "斯大林格勒",
      "复活",
      "亡灵",
      "救赎",
      "诗意"
    ],
    "oneLine": "斯大林格勒战役中阵亡的士兵,七十年后集体“复活”,他们沉默地走回故乡,只为取回当年寄出的家书。"
  },
  {
    "title": "致命学园爱丽丝",
    "href": "details/movie-1215.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "category": "悬疑犯罪",
    "tags": [
      "超能力",
      "学园",
      "推理",
      "死亡游戏",
      "心理战"
    ],
    "oneLine": "一所只有“爱丽丝”才能进入的学园,每个爱丽丝的代价是身边一个人的死亡。"
  },
  {
    "title": "飞常危机",
    "href": "details/movie-1216.html",
    "cover": "./16.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "航班危机",
      "病毒泄漏",
      "孤胆英雄",
      "高空密闭",
      "倒计时"
    ],
    "oneLine": "国际航班上一种快速致命病毒泄漏,只有坐经济舱末尾的退伍女兵懂得如何迫降。"
  },
  {
    "title": "贝蒂的承诺",
    "href": "details/movie-1217.html",
    "cover": "./17.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "遗产继承",
      "假扮情侣",
      "法式浪漫",
      "乌龙"
    ],
    "oneLine": "为了继承奶奶的农场,叛逆少女必须在一个月内结婚,而她找到的“新郎”竟是个逃犯。"
  },
  {
    "title": "我老婆不是人",
    "href": "details/movie-1218.html",
    "cover": "./18.jpg",
    "year": "1991",
    "region": "香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "人鬼情未了",
      "女鬼报恩",
      "阴阳恋",
      "搞笑",
      "温情"
    ],
    "oneLine": "倒霉建筑师救下一只女鬼后,被迫与她“冥婚”同居,没想到这位鬼妻竟帮他事业腾飞,代价是他必须在一个月内真正爱上她。"
  },
  {
    "title": "我的女朋友男朋友",
    "href": "details/movie-1219.html",
    "cover": "./19.jpg",
    "year": "2027",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "多角恋",
      "身份认同",
      "青春校园",
      "双向暗恋"
    ],
    "oneLine": "三个大学生组成的“情侣兼室友”关系里,每个人都在偷偷暗恋着另一个人。"
  },
  {
    "title": "怪你过分美丽",
    "href": "details/movie-1220.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "悬疑/惊悚",
    "category": "海外精选",
    "tags": [
      "整形",
      "身份置换",
      "嫉妒",
      "反转"
    ],
    "oneLine": "一名平凡女职员花钱整容成公司女神的模样,却发现女神本人正在整回她原来的脸。"
  },
  {
    "title": "危险的传闻",
    "href": "details/movie-1221.html",
    "cover": "./21.jpg",
    "year": "2018",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "谣言",
      "复仇",
      "媒体",
      "反转"
    ],
    "oneLine": "一名失业记者为钱编造黑帮传闻,却发现自己虚构的故事正在真实世界一一应验。"
  },
  {
    "title": "鸽之翼",
    "href": "details/movie-1222.html",
    "cover": "./22.jpg",
    "year": "1997",
    "region": "美国/英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "经典改编",
      "亨利·詹姆斯",
      "三角恋",
      "道德困境"
    ],
    "oneLine": "贫穷的记者爱上了富家女,而富家女却误以为他是为了她的钱才接近她。"
  },
  {
    "title": "倩女幽魂2003国语",
    "href": "details/movie-1223.html",
    "cover": "./23.jpg",
    "year": "2003",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "聂小倩",
      "宁采臣",
      "前世今生",
      "人妖恋",
      "大S"
    ],
    "oneLine": "七世怨侣的宿命轮回重启,这一世的聂小倩不再是女鬼,而是为爱堕入魔道的狐妖。"
  },
  {
    "title": "渚北谜案",
    "href": "details/movie-1224.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "本格推理",
      "连环杀人",
      "小城故事",
      "法医"
    ],
    "oneLine": "渚北河底捞出一具被“缝合”的男尸,法医发现其体内的骨头分别来自七名失踪多年的女性。"
  },
  {
    "title": "别那么骄傲",
    "href": "details/movie-1225.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "中国台湾,中国内地",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "灵魂互换",
      "职场",
      "励志",
      "反内卷"
    ],
    "oneLine": "骄傲的精英男与自卑的社畜女灵魂互换,一个体验了“社畜之苦”,一个过了一把“精英瘾”,却发现彼此都不快乐。"
  },
  {
    "title": "幻日奇遇",
    "href": "details/movie-1226.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "国产短剧",
    "tags": [
      "平行宇宙",
      "上班族",
      "搞笑",
      "奇遇",
      "成长"
    ],
    "oneLine": "一个失意的都市白领不小心掉进“幻日”裂缝,在七个平行宇宙的自己中找到了人生意义。"
  },
  {
    "title": "美好未来",
    "href": "details/movie-1227.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "末世温情",
      "AI伦理",
      "父女情",
      "生态崩溃"
    ],
    "oneLine": "在氧气需付费购买的世界里,一位父亲黑进呼吸系统,只为让女儿多笑一次。"
  },
  {
    "title": "吸血迷城",
    "href": "details/movie-1228.html",
    "cover": "./28.jpg",
    "year": "2014",
    "region": "美国/英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "吸血鬼",
      "考古",
      "诅咒",
      "埃及"
    ],
    "oneLine": "伦敦考古学家意外挖出一具活着的吸血鬼木乃伊,他竟是三千年前的法老图坦卡蒙。"
  },
  {
    "title": "在屋顶上流浪",
    "href": "details/movie-1229.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "屋顶",
      "自闭症",
      "城市探险",
      "治愈"
    ],
    "oneLine": "自闭症少年只敢在屋顶行走,带领少女俯瞰伦敦找到失踪的猫。"
  },
  {
    "title": "丁香花开的兽道",
    "href": "details/movie-1230.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "日式奇幻",
      "物哀美学",
      "人兽之间",
      "乡野传说"
    ],
    "oneLine": "一个迷路的少年在山中遇到一条铺满丁香花的小路,路的尽头是一位半人半兽的老妇人。"
  },
  {
    "title": "朋友圈 第2季",
    "href": "details/movie-1231.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "社交媒体",
      "Z世代",
      "黑色幽默",
      "单元剧"
    ],
    "oneLine": "本季探索“点赞已死”,每个故事都始于一个被所有人忽略的朋友圈,终于一条人命。"
  },
  {
    "title": "寻女记",
    "href": "details/movie-1232.html",
    "cover": "./32.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧 (短剧)",
    "category": "国产短剧",
    "tags": [
      "拐卖",
      "母亲",
      "十年追凶",
      "卧底",
      "农村"
    ],
    "oneLine": "女儿被拐十年后,母亲凭着一张整容脸潜入人贩家族内部,当上了仇人的保姆。"
  },
  {
    "title": "詹姆斯·怀特",
    "href": "details/movie-1233.html",
    "cover": "./33.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "斯诺克",
      "天才",
      "传奇",
      "励志"
    ],
    "oneLine": "他是斯诺克球台旁的天才“旋风”,却一生与世界冠军擦肩而过六次。"
  },
  {
    "title": "派对女孩",
    "href": "details/movie-1234.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "女性成长",
      "夜店",
      "自我救赎",
      "都市"
    ],
    "oneLine": "一个混迹夜店的“派对动物”,在一场意外后,被迫回到小镇直面破碎的家庭和真实的自己。"
  },
  {
    "title": "飞拳铁汉",
    "href": "details/movie-1235.html",
    "cover": "./35.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "机械义肢",
      "地下竞技",
      "反乌托邦"
    ],
    "oneLine": "为了给女儿治病,退役拳手装上能发射炮弹的机械臂,参加死亡格斗直播,却发现女儿就在对面观众席。"
  },
  {
    "title": "大喜盈门",
    "href": "details/movie-1236.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "结婚",
      "彩礼",
      "南北差异",
      "农村",
      "幽默"
    ],
    "oneLine": "一场南方小县城与北方大城市的联姻,因为“天价彩礼”和古怪婚俗,闹得鸡飞狗跳。"
  },
  {
    "title": "芭东女孩",
    "href": "details/movie-1237.html",
    "cover": "./37.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "女性",
      "底层",
      "救赎",
      "反转",
      "悬疑"
    ],
    "oneLine": "为偿还债务而被迫在芭东夜市工作的女孩,意外卷入一场珠宝劫案,却发现自己才是猎手。"
  },
  {
    "title": "7天之前",
    "href": "details/movie-1238.html",
    "cover": "./38.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "时间循环",
      "记忆重启",
      "谋杀",
      "蝴蝶效应"
    ],
    "oneLine": "联邦探员每次醒来都是七天前,他必须在记忆清零前,找出连环爆炸案的凶手,而凶手似乎也知情。"
  },
  {
    "title": "我走我路",
    "href": "details/movie-1239.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "徒步",
      "自我救赎",
      "女性成长",
      "荒野"
    ],
    "oneLine": "都市白领林夏扔掉手机踏上无人区徒步,却在极端环境中遭遇了比迷路更可怕的真相。"
  },
  {
    "title": "姑鲁之恋",
    "href": "details/movie-1240.html",
    "cover": "./40.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "水族",
      "端节",
      "马尾绣",
      "彩礼"
    ],
    "oneLine": "贵州水族姑娘与外来支教老师相爱,却因“九天嫁女”的神秘祖训和天价彩礼被迫分离。"
  },
  {
    "title": "我的如意狼君粤语",
    "href": "details/movie-1241.html",
    "cover": "./41.jpg",
    "year": "2011",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "TVB",
      "民国",
      "复仇",
      "虐恋"
    ],
    "oneLine": "民国糖厂大小姐救了失忆流浪汉,却发现他是来报复她家的百年仇人之子。"
  },
  {
    "title": "完美物质",
    "href": "details/movie-1242.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "纳米科技",
      "身体恐怖",
      "基因编辑",
      "反乌托邦"
    ],
    "oneLine": "能修复一切的神奇物质,开始让宿主从内部完美融化。"
  },
  {
    "title": "鬼声鬼气",
    "href": "details/movie-1243.html",
    "cover": "./43.jpg",
    "year": "1995",
    "region": "中国香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "僵尸",
      "道士",
      "电台",
      "乌龙"
    ],
    "oneLine": "一个灵异电台节目的落魄主持人,为了涨收听率假扮道士抓鬼,却意外唤醒了清朝僵尸,不得不假戏真做。"
  },
  {
    "title": "家务优等生",
    "href": "details/movie-1244.html",
    "cover": "./44.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "家庭主夫",
      "性别反转",
      "阶级"
    ],
    "oneLine": "一名年薪千万的投行男沦落为全职家庭主夫,在家长群里掀起血雨腥风。"
  },
  {
    "title": "真实的故事",
    "href": "details/movie-1245.html",
    "cover": "./45.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "记者",
      "身份冒用",
      "真实事件",
      "心理博弈",
      "监狱"
    ],
    "oneLine": "一位落魄记者发现,杀死妻儿的凶手在逃亡时竟冒用了自己的名字。"
  },
  {
    "title": "巴特拉住宅事件",
    "href": "details/movie-1246.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "真实改编",
      "家族秘密",
      "种姓",
      "豪宅"
    ],
    "oneLine": "德里一栋废弃的殖民风格老宅里,工人在装修时挖出了三十七具骨骸,每具都戴着同一个家族的戒指。"
  },
  {
    "title": "郊狼",
    "href": "details/movie-1247.html",
    "cover": "./47.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "边境",
      "走私",
      "卧底",
      "拉丁裔",
      "人性"
    ],
    "oneLine": "一名退休边境巡警被毒枭胁迫,不得不利用毕生经验帮墨西哥偷渡客穿越自己守护过的沙漠。"
  },
  {
    "title": "美国忍者",
    "href": "details/movie-1248.html",
    "cover": "./48.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "近未来",
      "基因改造",
      "反英雄",
      "冷兵器对决",
      "高科技犯罪"
    ],
    "oneLine": "退伍军人被植入忍者战斗芯片,却发现自己的记忆与身体正被幕后组织缓慢吞噬。"
  },
  {
    "title": "河上的爱情",
    "href": "details/movie-1249.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "长江",
      "书信",
      "年代",
      "宿命"
    ],
    "oneLine": "1990年代,长江客轮上,两个陌生男女互换了写给别人的情书,却开启了一场持续二十年的寻人。"
  },
  {
    "title": "平淡无奇的孩子",
    "href": "details/movie-1250.html",
    "cover": "./50.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "亲子",
      "教育",
      "反转",
      "催泪",
      "现实"
    ],
    "oneLine": "夫妻俩一直抱怨女儿太平庸,直到他们在女儿的作文里看到一句话:“我最大的优点是有一对很普通的父母。"
  },
  {
    "title": "西门豹",
    "href": "details/movie-1251.html",
    "cover": "./51.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "破除迷信",
      "反腐",
      "智斗"
    ],
    "oneLine": "一个不信鬼神的县令,如何用一场“河神娶亲”的骗局,揪出背后整个贪腐利益链?"
  },
  {
    "title": "魔鬼命令之患难兄弟",
    "href": "details/movie-1252.html",
    "cover": "./52.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "基因改造",
      "兄弟情",
      "逃亡",
      "B级片"
    ],
    "oneLine": "两个从军方基因实验基地逃出的“完美士兵”,一个是嗜血狂魔,一个只想种花,他们必须联手活下去。"
  },
  {
    "title": "灵域1",
    "href": "details/movie-1253.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "热血少年",
      "灵力修炼",
      "镇魂珠",
      "异界大陆"
    ],
    "oneLine": "失忆少年秦烈身怀神秘“镇魂珠”,在灵域最边缘的小镇,一步步揭开自己身世与天地浩劫的秘密。"
  },
  {
    "title": "谢瑶环传奇之西天胜境",
    "href": "details/movie-1254.html",
    "cover": "./54.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "女侠",
      "神话",
      "冒险",
      "悬疑",
      "视觉大片"
    ],
    "oneLine": "女官谢瑶环为调查西域奇案,意外闯入“西天胜境”,发现此地藏着一个能毁灭大唐的巨大秘密。"
  },
  {
    "title": "绝地救援",
    "href": "details/movie-1255.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "火星",
      "单人求生",
      "倒计时",
      "技术流",
      "集体营救"
    ],
    "oneLine": "火星基地爆炸后,一名宇航员被判定死亡,三天后地球收到了他发来的摩斯密码。"
  },
  {
    "title": "工作的孩子",
    "href": "details/movie-1256.html",
    "cover": "./56.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "童工",
      "校园暴力",
      "阶级固化"
    ],
    "oneLine": "白天是高中生,晚上是快递员、便利店店员和代驾,为了不辍学,他每天只能睡三小时。"
  },
  {
    "title": "忙人日记",
    "href": "details/movie-1257.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "职场",
      "中年危机",
      "治愈",
      "慢生活"
    ],
    "oneLine": "一个永远在“加班”的工作狂女强人,因为一次“强制休假”,被迫学会了如何“浪费时间”。"
  },
  {
    "title": "寒蝉鸣泣之时",
    "href": "details/movie-1258.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画",
    "category": "动画少儿",
    "tags": [
      "轮回",
      "雏见泽",
      "昭和",
      "祭典",
      "解谜"
    ],
    "oneLine": "昭和58年,搬进偏僻山村雏见泽的男生被卷入每年绵流祭必发生的“一人死亡、一人失踪”的诅咒之中。"
  },
  {
    "title": "孪生陌生人",
    "href": "details/movie-1259.html",
    "cover": "./59.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "身份认同",
      "黑色幽默",
      "伦理",
      "反转"
    ],
    "oneLine": "一场基因实验让三兄弟重逢,却发现背后藏着惊人家族的谎言。"
  },
  {
    "title": "乔治城最糟的婚姻",
    "href": "details/movie-1260.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "政治世家",
      "离婚大战",
      "互相算计",
      "笑里藏刀"
    ],
    "oneLine": "华盛顿最有权势的政治夫妻宣布离婚,两人各聘顶级律师,把白宫实习生、国会机密文件甚至家里的狗都变成了博弈筹码。"
  },
  {
    "title": "诗和远方的聚会",
    "href": "details/movie-1261.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "文艺",
      "人生抉择",
      "中年危机",
      "公路",
      "理想与现实"
    ],
    "oneLine": "一场老友聚会,让三个中年人决定抛下一切去寻找诗与远方,却发现远方的尽头是另一个围城。"
  },
  {
    "title": "女王神剑",
    "href": "details/movie-1262.html",
    "cover": "./62.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "女战士",
      "复仇",
      "剑与魔法",
      "神器",
      "觉醒"
    ],
    "oneLine": "原本只是铁匠学徒的索妮娅,在部落被灭后,拔出了一把只有“真王”才能举起的魔剑,但她是个女人。"
  },
  {
    "title": "室井慎次不败之人",
    "href": "details/movie-1263.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "警察官僚",
      "体制对抗",
      "职场沉浮",
      "日式冷峻"
    ],
    "oneLine": "《跳跃大搜查线》衍生剧,室井慎次升至警视监,却在权力巅峰遭遇最危险的内部告发。"
  },
  {
    "title": "二逼",
    "href": "details/movie-1264.html",
    "cover": "./64.jpg",
    "year": "2015",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "方言喜剧",
      "城乡结合部",
      "蠢贼",
      "阴差阳错",
      "黑色幽默"
    ],
    "oneLine": "一个笨贼偷了一部手机,发现手机主人是个杀手,而杀手的下一个目标正是自己。"
  },
  {
    "title": "嗅探员",
    "href": "details/movie-1265.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "嗅觉超能力",
      "气味数据库",
      "连环纵火",
      "单元剧"
    ],
    "oneLine": "拥有超常嗅觉的刑警能“闻到”情绪和谎言,但最新纵火犯身上没有任何气味。"
  },
  {
    "title": "多情女偏遇薄情人",
    "href": "details/movie-1266.html",
    "cover": "./66.jpg",
    "year": "1985",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "文艺爱情",
      "渣男",
      "女性觉醒",
      "港风"
    ],
    "oneLine": "茶餐厅女招待爱上落魄画家,倾尽所有供他成名后,对方却用一幅名为《恩赐》的画作羞辱她。"
  },
  {
    "title": "密室艳尸",
    "href": "details/movie-1267.html",
    "cover": "./67.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "奇案",
      "香港",
      "重口味",
      "反转",
      "社会派"
    ],
    "oneLine": "豪华公寓惊现一具艳尸,全身无伤,密室紧锁,唯一的线索是死者胃里的一枚五十年前的硬币。"
  },
  {
    "title": "南波万的聚会第三季",
    "href": "details/movie-1268.html",
    "cover": "./68.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "综艺",
    "category": "国产短剧",
    "tags": [
      "明星聚会",
      "游戏挑战",
      "怀旧",
      "即兴喜剧"
    ],
    "oneLine": "六位过气艺人被关进一栋90年代风格的大楼,每期完成一个“时代的眼泪”任务才能出逃。"
  },
  {
    "title": "野兽本性",
    "href": "details/movie-1269.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "心理惊悚",
      "丛林法则",
      "兽性觉醒",
      "生存"
    ],
    "oneLine": "七位企业高管在团建中遭遇神秘野兽袭击,他们很快发现,真正的野兽藏在每个人的西装之下。"
  },
  {
    "title": "红问号",
    "href": "details/movie-1270.html",
    "cover": "./70.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "网剧",
    "category": "悬疑犯罪",
    "tags": [
      "刑侦",
      "心理战",
      "数字谜题",
      "单元剧",
      "反转"
    ],
    "oneLine": "每个案发现场都有一个红色问号,而凶手似乎总是在帮警察破案。"
  },
  {
    "title": "玩具性爱",
    "href": "details/movie-1271.html",
    "cover": "./71.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "成人玩具",
      "婚姻",
      "孤独",
      "禁忌",
      "女性视角"
    ],
    "oneLine": "一名家庭主妇秘密成为高端成人玩具的评测员,却在私密视频意外泄露后,被迫面对整个社区的审判。"
  },
  {
    "title": "我想变成鸟,所以跳起来",
    "href": "details/movie-1272.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "自闭症",
      "舞蹈",
      "治愈",
      "非语言"
    ],
    "oneLine": "患有重度自闭症的少年无法说话,却用肢体在空中写出了比任何语言都激烈的诗。"
  },
  {
    "title": "梨花一枝春带雨",
    "href": "details/movie-1273.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "民国",
      "戏班",
      "禁忌之恋",
      "传承"
    ],
    "oneLine": "梨园女武生与仇家之子的爱情,在大雪封台的最后一夜酿成血色悲剧。"
  },
  {
    "title": "正年轻",
    "href": "details/movie-1274.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "女子足球",
      "山村教育",
      "真实改编",
      "励志",
      "群像"
    ],
    "oneLine": "云南大山里一群女孩靠踢野球踢进全国总决赛,但她们的对手是训练有素的省队。"
  },
  {
    "title": "穿越谜团",
    "href": "details/movie-1275.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "时间循环",
      "平行宇宙",
      "亲情救赎"
    ],
    "oneLine": "物理教授意外坠入时间裂缝,每天醒来都是女儿遇难的前一天,但他却发现凶手正是自己。"
  },
  {
    "title": "好玩派对",
    "href": "details/movie-1276.html",
    "cover": "./76.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "密室",
      "游戏",
      "反转"
    ],
    "oneLine": "六个老同学受邀参加一个“好玩派对”,却发现派对是一场真实的“大逃杀”预演。"
  },
  {
    "title": "凝视黑夜",
    "href": "details/movie-1277.html",
    "cover": "./77.jpg",
    "year": "2002",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "连环杀人",
      "盲人",
      "心灵诡计",
      "刑侦",
      "心理战"
    ],
    "oneLine": "滨海市发生连环命案,唯一的目击者竟是个盲人按摩师,他用“听”与“触摸”协助警察一步步逼近扭曲的真相。"
  },
  {
    "title": "威基基兄弟",
    "href": "details/movie-1278.html",
    "cover": "./78.jpg",
    "year": "2001",
    "region": "韩国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "梦想",
      "乐队",
      "怀旧"
    ],
    "oneLine": "四个落魄乐手在夏威夷威基基海滩许下承诺,二十年后却在首尔一家即将倒闭的二手唱片店重逢。"
  },
  {
    "title": "唐探之盛世少年",
    "href": "details/movie-1279.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "唐朝",
      "少年",
      "推理",
      "热血"
    ],
    "oneLine": "长安城最废柴的太子与最书呆的侍郎之女联手,破获了一起威胁大唐“盛世气象”的诡异密室案。"
  },
  {
    "title": "致命女秘书",
    "href": "details/movie-1280.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "办公室阴谋",
      "双面人生",
      "职场黑化"
    ],
    "oneLine": "白天是唯唯诺诺的透明秘书,夜晚却是操纵企业生死的暗网操盘手。"
  },
  {
    "title": "一乡之长",
    "href": "details/movie-1281.html",
    "cover": "./81.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "基层政治",
      "乡村振兴",
      "黑色幽默",
      "乡土人情"
    ],
    "oneLine": "新来的镇长想把贫困乡变成网红打卡地,却惹出了一连串啼笑皆非的政治笑话。"
  },
  {
    "title": "大珠宝家",
    "href": "details/movie-1282.html",
    "cover": "./82.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "世纪劫案",
      "匠人精神",
      "父与子"
    ],
    "oneLine": "世界顶级珠宝匠的真实故事,他为盗贼团打造了一套“完美工具”,却把自己送进监狱。"
  },
  {
    "title": "稍后见,汉娜!",
    "href": "details/movie-1283.html",
    "cover": "./83.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "人工智能",
      "临终告别",
      "虚拟永生",
      "道德困境"
    ],
    "oneLine": "女儿汉娜去世后,母亲定制了AI克隆体,却发现这个“汉娜”知道只有真汉娜才可能知道的暗黑秘密。"
  },
  {
    "title": "吹响悠风号合奏比赛篇",
    "href": "details/movie-1284.html",
    "cover": "./84.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "京阿尼",
      "管乐团",
      "合奏",
      "羁绊",
      "细腻"
    ],
    "oneLine": "北宇治高中管乐团迎来新赛季,久美子等人必须在严苛的“自由曲”选拔中,找到属于自己“独一无二的声音”。"
  },
  {
    "title": "不二女县令",
    "href": "details/movie-1285.html",
    "cover": "./85.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "女官",
      "破案",
      "朝堂",
      "平权"
    ],
    "oneLine": "落魄贵女女扮男装考中进士,却被派到土匪横行的县城当县令,第一天身份就暴露了。"
  },
  {
    "title": "炭疽第二季",
    "href": "details/movie-1286.html",
    "cover": "./86.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电视剧",
    "category": "恐怖惊悚",
    "tags": [
      "生化危机",
      "政治阴谋",
      "群像戏",
      "真实感"
    ],
    "oneLine": "9·11”后那场致命的炭疽攻击再现,然而这次,粉末寄到了白宫椭圆形办公室。"
  },
  {
    "title": "终守阿勒波",
    "href": "details/movie-1287.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "叙利亚/英国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "内战",
      "平民",
      "白头盔",
      "废墟"
    ],
    "oneLine": "叙利亚内战末期,一名白头盔志愿者在阿勒颇的废墟中搜寻幸存者,同时寻找失散的女儿。"
  },
  {
    "title": "太阳谷",
    "href": "details/movie-1288.html",
    "cover": "./88.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "末世",
      "太阳能",
      "阴谋",
      "少年",
      "生存"
    ],
    "oneLine": "永昼笼罩的废土上,一个被称为“太阳谷”的永夜禁区,藏着人类最后的秘密。"
  },
  {
    "title": "忘年之心",
    "href": "details/movie-1289.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "年龄差",
      "治愈",
      "演技派"
    ],
    "oneLine": "一个被社会抛弃的前黑道成员,被迫照顾一个同样被家人嫌弃、患有阿尔兹海默症的毒舌老妇。"
  },
  {
    "title": "伊万娜",
    "href": "details/movie-1290.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "二战",
      "女狙击手",
      "复仇",
      "雪原",
      "一人军团"
    ],
    "oneLine": "斯大林格勒战役后,苏联女狙击手伊万娜发现未婚夫叛变,独自追杀他进入德军腹地。"
  },
  {
    "title": "下一战歌手",
    "href": "details/movie-1291.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "category": "国产短剧",
    "tags": [
      "素人",
      "舞台竞演",
      "导师制",
      "真实"
    ],
    "oneLine": "摒弃修音,全开麦直播,一群怀揣梦想的素人在高压下争夺唯一一张改变命运的签约合同。"
  },
  {
    "title": "工作经验",
    "href": "details/movie-1292.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "实习",
      "残酷",
      "契约制",
      "现实主义"
    ],
    "oneLine": "五个应届生为了争夺一个转正名额,被迫参加为期三个月的“职场饥饿游戏”。 大信集团的实习计划:五人一组,每月必须末位淘汰一人,活到最后的人才能签合同。"
  },
  {
    "title": "灵异神探",
    "href": "details/movie-1293.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "通灵破案",
      "搭档探案",
      "都市传说",
      "单元剧"
    ],
    "oneLine": "一个不信鬼神的无神论警探,和一个能看见死者记忆的灵媒,被迫组成搭档,专破闹鬼凶案。"
  },
  {
    "title": "女王艳史",
    "href": "details/movie-1294.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "英国",
    "type": "电视剧",
    "category": "古装甜宠",
    "tags": [
      "宫廷情仇",
      "女性君主",
      "双女王",
      "权力情欲",
      "都铎王朝"
    ],
    "oneLine": "年轻的伊丽莎白一世发现,她的母亲安妮·博林并未被斩首,而是被秘密囚禁在伦敦塔的地下一间镜室里。"
  },
  {
    "title": "向前一步综艺",
    "href": "details/movie-1295.html",
    "cover": "./95.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "综艺",
    "category": "国产短剧",
    "tags": [
      "女性",
      "职场歧视",
      "素人",
      "辩论"
    ],
    "oneLine": "十二位不同年龄的女性在模拟职场中每隔一天向前迈一步或退一步。"
  },
  {
    "title": "囧男窘事第三季",
    "href": "details/movie-1296.html",
    "cover": "./96.jpg",
    "year": "2017",
    "region": "美国",
    "type": "剧集",
    "category": "动画少儿",
    "tags": [
      "成人动画",
      "社畜",
      "职场",
      "黑色幽默",
      "尴尬"
    ],
    "oneLine": "史上最倒霉、最抠门、情商最低的IT男杰瑞又回来了,这一次他试图在新来的女上司面前证明自己,结果把公司大楼炸了一半。"
  },
  {
    "title": "荣耀三九年",
    "href": "details/movie-1297.html",
    "cover": "./97.jpg",
    "year": "2009",
    "region": "英国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "二战前夕",
      "贵族",
      "谍战",
      "姐妹情"
    ],
    "oneLine": "1939年战争阴云下,贵族姐妹爱上同一个男人,而那个男人竟是潜伏的纳粹间谍。"
  },
  {
    "title": "糊涂县令郑板桥",
    "href": "details/movie-1298.html",
    "cover": "./98.jpg",
    "year": "2005",
    "region": "中国内地",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "郑板桥",
      "反腐",
      "智斗",
      "扬州",
      "文人风骨"
    ],
    "oneLine": "一代书画大家郑板桥被派往贪腐重灾区当县令,用“糊涂”做刀,以“怪才”为刃,智斗权贵。"
  },
  {
    "title": "似锦",
    "href": "details/movie-1299.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "刺绣",
      "复仇",
      "民国家族",
      "非遗",
      "女性互助"
    ],
    "oneLine": "满门抄斩的罪臣之女,隐姓埋名进入皇家刺绣院,用一根绣线织出了十年复仇棋局。"
  },
  {
    "title": "无影剑",
    "href": "details/movie-1300.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "古装",
      "复仇",
      "无招胜有招",
      "女性江湖"
    ],
    "oneLine": "江湖传说“无影剑”出鞘必见血,但没人知道这把剑根本没有剑刃,用的是刺客自己的影子。"
  },
  {
    "title": "1208全民开讲",
    "href": "details/movie-1301.html",
    "cover": "./101.jpg",
    "year": "2006",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "广播",
      "政治黑幕",
      "群像",
      "压迫感"
    ],
    "oneLine": "一通深夜电台call-in,让主持人发现听众在直播中“意外死亡”的真相。"
  },
  {
    "title": "说出你的秘密",
    "href": "details/movie-1302.html",
    "cover": "./102.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺/电影",
    "category": "国产短剧",
    "tags": [
      "心理游戏",
      "密室",
      "社交实验",
      "反转"
    ],
    "oneLine": "七个陌生人参与一档高额奖金真人秀,每坦白一个秘密,就能获得十万,而秘密被公开者出局。"
  },
  {
    "title": "八公犬物语",
    "href": "details/movie-1303.html",
    "cover": "./103.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "狗狗",
      "忠诚",
      "翻拍",
      "催泪"
    ],
    "oneLine": "最新版八公故事,这次的反转在于:主人其实没有死,而是失忆了。"
  },
  {
    "title": "三生三界情人劫",
    "href": "details/movie-1304.html",
    "cover": "./104.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "仙侠",
      "轮回",
      "虐恋"
    ],
    "oneLine": "上仙为渡情劫下凡,结果在妖界、人界、天界连栽三次跟头,每次都爱上同一个人。"
  },
  {
    "title": "王保长新篇II死去生来",
    "href": "details/movie-1305.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "民国乡村",
      "官场讽刺",
      "假死逆袭",
      "川味方言"
    ],
    "oneLine": "王保长被土匪逼着“假死”后,躲在棺材里目睹了全村人如何分他的家产。"
  },
  {
    "title": "裸拳斗",
    "href": "details/movie-1306.html",
    "cover": "./106.jpg",
    "year": "2027",
    "region": "东南亚",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "地下拳赛",
      "不戴拳套",
      "父子",
      "救赎"
    ],
    "oneLine": "为了给儿子换一颗心脏,一个瘸腿父亲打进了东南亚最血腥的地下拳赛。"
  },
  {
    "title": "太阳帝国",
    "href": "details/movie-1307.html",
    "cover": "./107.jpg",
    "year": "1987",
    "region": "英国/美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "二战",
      "上海租界",
      "少年视角"
    ],
    "oneLine": "1941年上海租界,一个英国富家少年在日军的龙华集中营里长大,对飞机的痴迷超越了对敌我的认知。"
  },
  {
    "title": "红色",
    "href": "details/movie-1308.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "杀手",
      "复仇",
      "视觉"
    ],
    "oneLine": "只穿红衣的盲眼女杀手,通过声波和嗅觉在黑帮大楼里展开毁灭性屠杀。"
  },
  {
    "title": "我以前比较黑",
    "href": "details/movie-1309.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "台湾",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "变性",
      "外貌焦虑",
      "身份认同"
    ],
    "oneLine": "经历了变性手术和全脸整容后,已经成功的都市精英偶遇了高中时代暗恋过的直男,对方的一句话让她彻底崩溃。"
  },
  {
    "title": "探清水河:重生",
    "href": "details/movie-1310.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "北京",
      "民国",
      "歌谣",
      "轮回"
    ],
    "oneLine": "北京传统小曲《探清水河》背后的真实命案,在百年后的现代被一个北漂歌手“重演”。"
  },
  {
    "title": "三个俄罗斯女孩",
    "href": "details/movie-1311.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "二战",
      "女兵",
      "狙击手",
      "友情",
      "残酷"
    ],
    "oneLine": "二战前线,三个年轻的苏联女狙击手在战火中结下生死友谊,却只有一人看到了胜利的曙光。"
  },
  {
    "title": "日无光心慌慌",
    "href": "details/movie-1312.html",
    "cover": "./112.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "太阳消失",
      "村落仪式",
      "影子寄生",
      "集体失忆"
    ],
    "oneLine": "泰国北部一个村庄连续77天不见太阳,村民开始偷割别人的影子。"
  },
  {
    "title": "我是阿拉伯人",
    "href": "details/movie-1313.html",
    "cover": "./113.jpg",
    "year": "2023",
    "region": "法国/以色列/巴勒斯坦",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "身份认同",
      "社会现实",
      "以巴冲突",
      "人文关怀"
    ],
    "oneLine": "一名拥有以色列身份证的阿拉伯律师,在辩护过程中发现自己既不是犹太人的朋友,也不是阿拉伯人的英雄。"
  },
  {
    "title": "贫民英雄",
    "href": "details/movie-1314.html",
    "cover": "./114.jpg",
    "year": "2012",
    "region": "马来西亚",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "小人物",
      "逆袭",
      "城市改造"
    ],
    "oneLine": "吉隆坡一个即将被拆迁的贫民窟里,一群底层居民结成同盟,对抗无良地产商。"
  },
  {
    "title": "维和部队",
    "href": "details/movie-1315.html",
    "cover": "./115.jpg",
    "year": "2026",
    "region": "多国",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "联合国",
      "战区",
      "多国部队",
      "道德困境"
    ],
    "oneLine": "一支多国维和部队被困在交战区,联合国的命令是不开枪,而敌人只想屠光他们。"
  },
  {
    "title": "滑板狂热",
    "href": "details/movie-1316.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "英国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "青春",
      "滑板",
      "废柴逆袭",
      "英式幽默"
    ],
    "oneLine": "一群被补习班开除的“差生”,为了抢回操场,决定用滑板挑战校长制定的荒谬校规。"
  },
  {
    "title": "牵牛的夏天",
    "href": "details/movie-1317.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "中国内地",
    "type": "电视剧集",
    "category": "喜剧家庭",
    "tags": [
      "园艺",
      "返乡",
      "代际和解",
      "慢生活"
    ],
    "oneLine": "被裁员的女程序员回村接手爷爷的花田,却发现唯一的“员工”是一头会挑种子的倔牛。"
  },
  {
    "title": "打击惊魂",
    "href": "details/movie-1318.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "特工",
      "反杀",
      "密室"
    ],
    "oneLine": "一名退休特工被绑在废弃安全屋里,前来审讯他的五个新人,一个接一个死去。"
  },
  {
    "title": "和平万岁",
    "href": "details/movie-1319.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "抗美援朝",
      "狙击手",
      "长津湖",
      "兄弟",
      "冻雕"
    ],
    "oneLine": "长津湖战役中,一对狙击手兄弟被冻成“冰雕”,他们的枪口始终指向敌人。"
  },
  {
    "title": "月球探秘",
    "href": "details/movie-1320.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "科幻",
      "月球",
      "探险",
      "未知生物",
      "灾难"
    ],
    "oneLine": "中国玉兔号月球车传回异常数据,一支国际宇航员小组前往探秘,发现月球背面并非死寂。"
  },
  {
    "title": "讲大话",
    "href": "details/movie-1321.html",
    "cover": "./121.jpg",
    "year": "2019",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "说谎者",
      "童真交易",
      "倒数三天"
    ],
    "oneLine": "一个习惯用谎言保护女儿的单亲爸爸,突然发现每次说谎,女儿就会变小一岁。"
  },
  {
    "title": "天堂90分钟",
    "href": "details/movie-1322.html",
    "cover": "./122.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "濒死体验",
      "亲情救赎",
      "信仰"
    ],
    "oneLine": "一场车祸让他“死亡”90分钟,醒来后他却对天堂所见闭口不谈。"
  },
  {
    "title": "热情邀约",
    "href": "details/movie-1323.html",
    "cover": "./123.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "社恐",
      "线上恋爱",
      "线下翻车"
    ],
    "oneLine": "线上社牛、线下社恐的程序员被女神“热情邀约”参加周末派对,他决定雇一个“自己”去赴约。"
  },
  {
    "title": "东京乐园",
    "href": "details/movie-1324.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "游乐园",
      "人工智能",
      "循环",
      "迷失"
    ],
    "oneLine": "一家三口走进刚开业的超现实乐园,发现每个游乐设施都在重演他们的人生遗憾。"
  },
  {
    "title": "姊妹靓起来",
    "href": "details/movie-1325.html",
    "cover": "./125.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "姐妹创业",
      "美妆行业",
      "女性成长",
      "轻喜剧"
    ],
    "oneLine": "性格迥异的亲姐妹被迫接手母亲濒临倒闭的美容院,一个负责技术,一个负责营销,吵得不可开交。"
  },
  {
    "title": "陌生人的慰籍",
    "href": "details/movie-1326.html",
    "cover": "./126.jpg",
    "year": "1990",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "威尼斯",
      "欲望",
      "婚姻危机",
      "变态",
      "心理"
    ],
    "oneLine": "一对夫妻在威尼斯度假,被一位神秘绅士引入一场精心设计的欲望与暴力游戏。"
  },
  {
    "title": "恐怖分子",
    "href": "details/movie-1327.html",
    "cover": "./127.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "反恐",
      "人性实验",
      "社会派",
      "反转"
    ],
    "oneLine": "一个被误认为是恐怖分子的普通上班族,决定真的成为恐怖分子。"
  },
  {
    "title": "黑道家族 第二季",
    "href": "details/movie-1328.html",
    "cover": "./128.jpg",
    "year": "2026",
    "region": "美国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "家族斗争",
      "权力游戏",
      "暴力升级",
      "心理战"
    ],
    "oneLine": "老大入狱,群龙无首,二代们掀起的权力内斗,将整个家族拖入毁灭深渊。"
  },
  {
    "title": "不良女郎",
    "href": "details/movie-1329.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "黑帮",
      "女性",
      "复仇",
      "卧底",
      "暴力美学"
    ],
    "oneLine": "为了寻找失踪的妹妹,前女打手伪装成不良高中生,潜入校内外黑恶势力内部。"
  },
  {
    "title": "恍惚的土地",
    "href": "details/movie-1330.html",
    "cover": "./130.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "土地记忆",
      "灵魂",
      "生态",
      "魔幻写实",
      "家族史"
    ],
    "oneLine": "一片被污染的土地每到月圆之夜便会“恍惚”——让站上去的人看见祖先被掠夺的历史。"
  },
  {
    "title": "怪错娇妻",
    "href": "details/movie-1331.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "替身",
      "反转",
      "都市传说"
    ],
    "oneLine": "模范丈夫发现昏迷的妻子醒来后性格大变,DNA吻合,但她说出的秘密只有真正的女主人知道。"
  },
  {
    "title": "阿有正传",
    "href": "details/movie-1332.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "小人物",
      "粤语片",
      "阿甘式",
      "乐观",
      "草根精神"
    ],
    "oneLine": "智商只有75的阿有,凭借着一股傻劲和善良,歪打正着地成为了香港金融风暴中的传奇人物。"
  },
  {
    "title": "权欲第三章第三季",
    "href": "details/movie-1333.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "美国",
    "type": "TV剧集",
    "category": "悬疑犯罪",
    "tags": [
      "黑帮",
      "权力游戏",
      "复仇",
      "限制级"
    ],
    "oneLine": "汤米的复仇怒火烧向芝加哥,却发现旧日盟友早已背叛了他的血液。"
  },
  {
    "title": "痴情劫粤语",
    "href": "details/movie-1334.html",
    "cover": "./134.jpg",
    "year": "2021",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "偏执型人格",
      "律政",
      "心理操控",
      "粤语原声"
    ],
    "oneLine": "女律师接手了一起富二代“痴情”骚扰案,却发现委托人自己才是那个深陷痴情劫的猎物。"
  },
  {
    "title": "夺魄通行证",
    "href": "details/movie-1335.html",
    "cover": "./135.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "地铁",
      "灵魂交易",
      "都市传说",
      "噩梦循环"
    ],
    "oneLine": "深夜最后一班地铁里,一张无限期通票的代价是你的灵魂,而退票的唯一方式是杀死下一个持票人。"
  },
  {
    "title": "现代豪侠传",
    "href": "details/movie-1336.html",
    "cover": "./136.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "侠盗",
      "赛博朋克",
      "姐妹情",
      "黑吃黑",
      "反转"
    ],
    "oneLine": "2046年的九龙城寨废墟里,三位身怀绝技的保洁阿姨,用吸尘器和拖把干翻了一整支高科技雇佣兵。"
  },
  {
    "title": "咿嘞呜!",
    "href": "details/movie-1337.html",
    "cover": "./137.jpg",
    "year": "2024",
    "region": "巴西",
    "type": "动画短片",
    "category": "动画少儿",
    "tags": [
      "巴西民俗",
      "无对白",
      "狂欢节"
    ],
    "oneLine": "一只在巴西雨林里迷路的小猴子,用一声“咿嘞呜”唤醒整个森林的狂欢节。"
  },
  {
    "title": "三小一家人",
    "href": "details/movie-1338.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "法国/比利时",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "重组家庭",
      "法式幽默",
      "代际冲突"
    ],
    "oneLine": "三个来自不同离异家庭的孩子被迫和他们的继兄弟姐妹住在一起,他们决定用尽一切方法拆散这对不般配的新人父母。"
  },
  {
    "title": "败犬女王",
    "href": "details/movie-1339.html",
    "cover": "./139.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "大龄剩女",
      "姐弟恋",
      "杂志社",
      "翻拍",
      "女性成长"
    ],
    "oneLine": "33岁的杂志社女副总编事业开挂却情场失意,直到一个23岁的打工仔闯入她的生活。"
  },
  {
    "title": "飞行夜女巫",
    "href": "details/movie-1340.html",
    "cover": "./140.jpg",
    "year": "2022",
    "region": "俄罗斯",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "二战",
      "女飞行员",
      "巫术",
      "暗夜",
      "苏联"
    ],
    "oneLine": "二战时期,一支苏联女子飞行队用老式轰炸机与古老的巫术对抗德军。"
  },
  {
    "title": "迈克尔·谢恩,私家侦探",
    "href": "details/movie-1341.html",
    "cover": "./141.jpg",
    "year": "1960",
    "region": "英国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "黑白片",
      "英伦硬汉",
      "经典IP"
    ],
    "oneLine": "他是伦敦最硬的侦探,但他的真实身份是——一个靠“演侦探”维生的三线演员。"
  },
  {
    "title": "温柔杀戮",
    "href": "details/movie-1342.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "杀手",
      "文艺",
      "孤独",
      "救赎"
    ],
    "oneLine": "一个只杀恋童癖的杀手,在一次任务中发现目标竟然是给他送了三年的外卖员。"
  },
  {
    "title": "我的梦中情人2",
    "href": "details/movie-1343.html",
    "cover": "./143.jpg",
    "year": "2021",
    "region": "印度尼西亚",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "梦中情人",
      "虚拟偶像",
      "程序媛",
      "治愈"
    ],
    "oneLine": "失恋的程序员小姐姐开发了一款“定制梦中情人”APP,结果代码失控,三个不同的虚拟男友同时出现在她的生活里。"
  },
  {
    "title": "来信",
    "href": "details/movie-1344.html",
    "cover": "./144.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "书信",
      "亲情",
      "悬疑",
      "年代"
    ],
    "oneLine": "一封迟到了五十年的信,揭开了养老院里两位老人之间跨越时空的母女谎言。"
  },
  {
    "title": "加勒比海之勒索风云",
    "href": "details/movie-1345.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "游艇",
      "黑客",
      "反转",
      "密室"
    ],
    "oneLine": "六位富豪在加勒比海游艇上被黑客勒索,才发现彼此都是绑匪。"
  },
  {
    "title": "小八路",
    "href": "details/movie-1346.html",
    "cover": "./146.jpg",
    "year": "1974",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "抗日",
      "红小兵",
      "机智勇敢",
      "黑白"
    ],
    "oneLine": "抗日战争时期,少年虎子加入八路军当上了交通员,他用自己的机智多次粉碎了日伪军的扫荡计划。"
  },
  {
    "title": "功夫少女吴温蒂",
    "href": "details/movie-1347.html",
    "cover": "./147.jpg",
    "year": "2024",
    "region": "中国台湾/美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "少女功夫",
      "华裔",
      "校园霸凌",
      "成长"
    ],
    "oneLine": "在美国长大的华裔混血少女Wendy,暑假被妈妈骗回台北学“女子防身术”,却发现教练是曾经的武侠片反派专业户。"
  },
  {
    "title": "愤怒之声",
    "href": "details/movie-1348.html",
    "cover": "./148.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "声纹",
      "复仇",
      "网暴",
      "反转"
    ],
    "oneLine": "一位失去女儿的母亲开发了声纹追踪AI,在全城寻找那个在网上逼死女儿的匿名账号“愤怒之声”。"
  },
  {
    "title": "山2",
    "href": "details/movie-1349.html",
    "cover": "./149.jpg",
    "year": "2016",
    "region": "土耳其",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "山地作战",
      "狙击手",
      "兄弟情",
      "反恐",
      "战术小队"
    ],
    "oneLine": "一支土耳其特种部队被困深山,面对百倍叛军,他们唯一的武器是彼此与这座山。"
  },
  {
    "title": "佛地魔:传人的起源",
    "href": "details/movie-1350.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "哈利波特宇宙",
      "反派起源",
      "黑魔法",
      "悲剧"
    ],
    "oneLine": "在成为“那个人”之前,他是汤姆·里德尔,一个试图用永生对抗死亡恐惧的天才少年。"
  },
  {
    "title": "移动迷宫2:焦土试炼",
    "href": "details/movie-1351.html",
    "cover": "./1.jpg",
    "year": "2015",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "末世狂奔",
      "感染变异",
      "背叛谜团",
      "废土美学"
    ],
    "oneLine": "逃出迷宫只是噩梦开始,焦土之上有更恐怖的试炼等着他们。"
  },
  {
    "title": "死亡谷2021",
    "href": "details/movie-1352.html",
    "cover": "./2.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "克隆谷",
      "时间循环",
      "幸存者",
      "基因实验",
      "谁是本体"
    ],
    "oneLine": "九个人在死亡谷醒来,每个人身边都躺着自己的尸体,而谷底传出倒计时。"
  },
  {
    "title": "鬼友",
    "href": "details/movie-1353.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "阴阳眼社畜",
      "鬼室友",
      "搞笑驱邪"
    ],
    "oneLine": "社畜意外获得阴阳眼后,被迫和五位死于不同年代的鬼魂合租,一起解决灵异案件。"
  },
  {
    "title": "动态漫画·一剑独尊",
    "href": "details/movie-1354.html",
    "cover": "./4.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "修仙",
      "动态漫画",
      "爽文改编"
    ],
    "oneLine": "凡体少年手握无字剑谱,每翻一页,天界便有一位仙人消失。"
  },
  {
    "title": "擅长捉弄的高木同学第二季",
    "href": "details/movie-1355.html",
    "cover": "./5.jpg",
    "year": "2020",
    "region": "日本",
    "type": "剧集",
    "category": "动画少儿",
    "tags": [
      "纯爱",
      "日常",
      "甜剧"
    ],
    "oneLine": "普通中学生西片继续被邻座高木捉弄,每一次“反击”都变成了反向表白。"
  },
  {
    "title": "十诫V:杀人影片",
    "href": "details/movie-1356.html",
    "cover": "./6.jpg",
    "year": "1989",
    "region": "波兰",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "基耶斯洛夫斯基",
      "死刑",
      "法律伦理",
      "十诫"
    ],
    "oneLine": "一个年轻人无端杀死了一名出租车司机,被判处死刑,而为他辩护的律师却是一个死刑反对者。"
  },
  {
    "title": "新甘十九妹",
    "href": "details/movie-1357.html",
    "cover": "./7.jpg",
    "year": "2014",
    "region": "中国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "经典翻拍",
      "复仇与宽恕",
      "女性侠客",
      "江湖恩怨"
    ],
    "oneLine": "背负血海深仇的复仇者甘十九妹,爱上了仇人之子,在仇恨与爱情间选择了第三条路。"
  },
  {
    "title": "灰色的迷宫",
    "href": "details/movie-1358.html",
    "cover": "./8.jpg",
    "year": "2015",
    "region": "日本",
    "type": "动画OVA",
    "category": "动画少儿",
    "tags": [
      "时空轮回",
      "记忆陷阱",
      "哲学",
      "绝望"
    ],
    "oneLine": "一名青年被困在无限循环的一小时里,每次重置都会丢失一个关于爱人的记忆片段。"
  },
  {
    "title": "半个空鞍子",
    "href": "details/movie-1359.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "赎罪之旅",
      "荒野求生",
      "老人与马",
      "沉默叙事"
    ],
    "oneLine": "老牛仔带着死去搭档的半个马鞍穿越沙漠,只为兑现一个沉默的承诺,却发现自己才是被救赎的那个人。"
  },
  {
    "title": "喜剧 站前番头",
    "href": "details/movie-1360.html",
    "cover": "./10.jpg",
    "year": "2013",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "站前",
      "日本小品",
      "群像剧",
      "怀旧"
    ],
    "oneLine": "一个即将被拆除的火车站前,一群小贩为了留住车站而想出各种搞笑馊主意。"
  },
  {
    "title": "与自然告别",
    "href": "details/movie-1361.html",
    "cover": "./11.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "乡村",
      "拆迁",
      "祖孙情",
      "时代变迁",
      "环保"
    ],
    "oneLine": "一座千年古村面临拆迁,倔强的老护林员带着孙女进行最后一次山中巡护。"
  },
  {
    "title": "虎父无犬女",
    "href": "details/movie-1362.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "父女情",
      "武术",
      "代际冲突",
      "成长"
    ],
    "oneLine": "退休拳王的女儿为救父亲公司,隐瞒身份参加地下拳赛,却遇上当年击败父亲的仇人之子。"
  },
  {
    "title": "家村来信",
    "href": "details/movie-1363.html",
    "cover": "./13.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "农村背景",
      "笔友",
      "返乡",
      "集体沉默",
      "尘封秘密"
    ],
    "oneLine": "返乡青年根据奶奶遗物中的旧信寻找笔友,却发现整个村子都在隐瞒这个人的存在。"
  },
  {
    "title": "越夜越宵愁",
    "href": "details/movie-1364.html",
    "cover": "./14.jpg",
    "year": "2023",
    "region": "台湾",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "深夜食堂",
      "夜市",
      "人生故事",
      "单元剧",
      "治愈"
    ],
    "oneLine": "台北夜市一家只在凌晨营业的炒饭摊,每碗炒饭都会让客人看到自己最想念却再也见不到的人。"
  },
  {
    "title": "魔法战士李维",
    "href": "details/movie-1365.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集/动画",
    "category": "科幻奇幻",
    "tags": [
      "魔法",
      "机甲",
      "硬核奇幻",
      "双主角"
    ],
    "oneLine": "落魄天才魔法师,驾驶远古机甲,向背叛他的魔法帝国复仇。"
  },
  {
    "title": "美丽背后",
    "href": "details/movie-1366.html",
    "cover": "./16.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "整形医院",
      "职场霸凌",
      "女性群像",
      "复仇",
      "医疗黑幕"
    ],
    "oneLine": "首尔顶级整形医院的护士长从顶楼坠落,警方判定自杀,但她的日记本记录着每位医生的秘密。"
  },
  {
    "title": "狼少女",
    "href": "details/movie-1367.html",
    "cover": "./17.jpg",
    "year": "2018",
    "region": "法国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "狼孩",
      "自然主义",
      "女性成长",
      "荒野",
      "救赎"
    ],
    "oneLine": "在狼群中长大的女孩被带回人类社会,她必须在优雅的文明枷锁和狂野的本能自由之间做出最终选择。"
  },
  {
    "title": "相见不如怀念",
    "href": "details/movie-1368.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "同学会",
      "中年危机",
      "遗憾",
      "群像"
    ],
    "oneLine": "高中同学35周年聚会,当年最耀眼的校花如今在便利店上夜班,最不起眼的“透明人”却成了硅谷新贵。"
  },
  {
    "title": "花儿绽放",
    "href": "details/movie-1369.html",
    "cover": "./19.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "支教",
      "山区",
      "女性成长",
      "现实主义"
    ],
    "oneLine": "一位大城市的女舞蹈老师来到贵州山区支教,却意外发现这里的孩子用“花儿”来命名她们无法言说的伤痛。"
  },
  {
    "title": "女孩之夜",
    "href": "details/movie-1370.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "闺蜜",
      "女性友谊",
      "成长",
      "一夜荒唐",
      "温情"
    ],
    "oneLine": "五个超过十年的闺蜜在单身夜派对上玩嗨了,醒来发现自己身怀巨款且警笛大作。"
  },
  {
    "title": "小熊历险记",
    "href": "details/movie-1371.html",
    "cover": "./21.jpg",
    "year": "2018",
    "region": "美国",
    "type": "动画电影",
    "category": "喜剧家庭",
    "tags": [
      "治愈",
      "成长",
      "友情",
      "森林"
    ],
    "oneLine": "胆小小熊为了寻找丢失的蜂蜜罐,误入食人魔领地,却意外收获了真正的勇气。"
  },
  {
    "title": "关山度若飞",
    "href": "details/movie-1372.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "古代",
      "西域",
      "特种兵",
      "家国情怀"
    ],
    "oneLine": "东汉末年,六人小队,深入西域三千里,只为救回一个被遗忘在黄沙中的驿站。"
  },
  {
    "title": "温迪和露西",
    "href": "details/movie-1373.html",
    "cover": "./23.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "流浪",
      "狗",
      "温情"
    ],
    "oneLine": "穷游少女的车在荒野抛锚,她唯一的伙伴——金毛犬露西被当地警方当作流浪犬收容。"
  },
  {
    "title": "红色康乃馨",
    "href": "details/movie-1374.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "连环杀人",
      "植物意象",
      "女性受害",
      "双女主"
    ],
    "oneLine": "女法医与女刑警联手追查“康乃馨杀手”,发现每一名死者生前都曾家暴过自己的母亲。"
  },
  {
    "title": "大尉叛逃记",
    "href": "details/movie-1375.html",
    "cover": "./25.jpg",
    "year": "2022",
    "region": "俄罗斯",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "冷战",
      "谍战",
      "逃亡",
      "父女情"
    ],
    "oneLine": "苏联功勋大尉为给女儿治病,带着核弹发射代码叛逃美国,却发现美方也想要他的命。"
  },
  {
    "title": "巴林石传奇",
    "href": "details/movie-1376.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "国石",
      "家族恩怨",
      "文物保护"
    ],
    "oneLine": "一块失踪百年的巴林石印章,牵出民国时期三代人的护宝迷局。"
  },
  {
    "title": "爱情好意外",
    "href": "details/movie-1377.html",
    "cover": "./27.jpg",
    "year": "2015",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "法式幽默",
      "车祸后遗症",
      "治愈系",
      "办公室恋情"
    ],
    "oneLine": "严谨到刻板的律师车祸失忆后,醒来看到的第一张脸——那个邋遢的厨师——就被她当成了命中注定的恋人。"
  },
  {
    "title": "我是怎样度过这个夏天",
    "href": "details/movie-1378.html",
    "cover": "./28.jpg",
    "year": "2010",
    "region": "俄罗斯",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "北极",
      "心理博弈",
      "囚禁"
    ],
    "oneLine": "一名老气象员与一个年轻实习生,在北极孤岛上用谎言维持着生存秩序。"
  },
  {
    "title": "破茧边缘粤语",
    "href": "details/movie-1379.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "市井黑帮",
      "兄弟情",
      "底层挣扎"
    ],
    "oneLine": "九龙城寨拆迁前夜,两个从小长大的兄弟一个成了警察,一个成了毒枭,最终兵戎相见。"
  },
  {
    "title": "关中义事",
    "href": "details/movie-1380.html",
    "cover": "./30.jpg",
    "year": "2008",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "关中",
      "家族恩怨",
      "民国",
      "守陵"
    ],
    "oneLine": "民国关中,两个世代为敌的家族,却要共同守护一座帝陵的秘密。"
  },
  {
    "title": "爱琴海没有空气",
    "href": "details/movie-1381.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "希腊/法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "窒息感",
      "婚姻",
      "中年危机",
      "希腊"
    ],
    "oneLine": "一对结婚十五年的夫妻来爱琴海度假,却发现彼此像生活在水底的真空里。"
  },
  {
    "title": "旋风九日",
    "href": "details/movie-1382.html",
    "cover": "./32.jpg",
    "year": "2020",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "邓小平",
      "1978",
      "外交",
      "转折"
    ],
    "oneLine": "1978年,邓小平访日九天,旋风般改变了中国现代化进程。"
  },
  {
    "title": "好女孩",
    "href": "details/movie-1383.html",
    "cover": "./33.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "女性复仇",
      "双面人生",
      "道德困境",
      "高中",
      "霸凌"
    ],
    "oneLine": "全校第一的模范生,每晚戴上假发变成替被霸凌者“讨回公道”的网络判官。"
  },
  {
    "title": "乌鲁米",
    "href": "details/movie-1384.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "冷兵器",
      "复仇",
      "史诗",
      "女战士",
      "殖民反抗"
    ],
    "oneLine": "一名部落铸剑师之女手持祖传弯刀“乌鲁米”,对殖民者展开一场无声的血腥报复。"
  },
  {
    "title": "鸣鸿传",
    "href": "details/movie-1385.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "古装甜宠",
    "tags": [
      "铸剑",
      "江湖",
      "冤案",
      "父子传承"
    ],
    "oneLine": "天下第一铸剑师被灭门后,唯一的儿子成了只会打菜刀的哑巴铁匠,直到那把传说之剑再次现世。"
  },
  {
    "title": "残酷的梦",
    "href": "details/movie-1386.html",
    "cover": "./36.jpg",
    "year": "2025",
    "region": "加拿大",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "梦境",
      "连环杀手",
      "预知",
      "精神分析"
    ],
    "oneLine": "他总能梦见下一个受害者的死亡方式,直到有一天,他在梦里看到凶手是自己。"
  },
  {
    "title": "濶少艳遇",
    "href": "details/movie-1387.html",
    "cover": "./37.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "风月",
      "豪门恩怨",
      "错位姻缘"
    ],
    "oneLine": "花花公子为继承遗产假扮穷小子,却爱上了自己曾玩弄过的舞女,而她竟带着他的孩子。"
  },
  {
    "title": "铁血神探",
    "href": "details/movie-1388.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "硬核警匪",
      "肉搏战",
      "东北背景",
      "孤胆英雄"
    ],
    "oneLine": "一名被停职的刑警,为了给惨死的搭档复仇,独自一人在边境小城,与一个跨国贩毒集团展开血战。"
  },
  {
    "title": "让爱自由",
    "href": "details/movie-1389.html",
    "cover": "./39.jpg",
    "year": "2006",
    "region": "中国台湾",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "三代同堂",
      "女性成长",
      "情感纠葛",
      "救赎"
    ],
    "oneLine": "同一个屋檐下,外婆、妈妈和女儿都在用自己的方式“让爱自由”,却差点毁掉了这个家。"
  },
  {
    "title": "捍卫任务3:全面开战",
    "href": "details/movie-1390.html",
    "cover": "./40.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "杀手世界",
      "高桌组织",
      "逐出令",
      "狗杀手",
      "近身枪斗术"
    ],
    "oneLine": "约翰·维克被杀手组织“高桌”全球通缉,他要在纽约的暴雨中杀出一条血路,只为救一条狗。"
  },
  {
    "title": "圣诞许个愿",
    "href": "details/movie-1391.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "圣诞",
      "愿望",
      "魔法",
      "治愈",
      "合家欢"
    ],
    "oneLine": "为了拯救倒闭的家族玩具店,小女孩在圣诞节许愿让店里的木雕玩具复活,结果全城的玩具都活了。"
  },
  {
    "title": "花月良宵",
    "href": "details/movie-1392.html",
    "cover": "./42.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "欢喜冤家",
      "民俗",
      "浪漫"
    ],
    "oneLine": "民国乱世,一个精明抠门的女掌柜与一个只会唱戏的落魄名伶,为争夺一张藏宝图被迫假扮夫妻。"
  },
  {
    "title": "欲望过程",
    "href": "details/movie-1393.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "人性",
      "沉沦",
      "财阀",
      "复仇",
      "计中计"
    ],
    "oneLine": "一个为了进入上流社会的女人,用身体做投资,却没发现自己才是那场资本游戏里的唯一筹码。"
  },
  {
    "title": "上海幻梦",
    "href": "details/movie-1394.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "民国",
      "旗袍",
      "穿越",
      "弄堂",
      "遗憾美学"
    ],
    "oneLine": "2025年的设计师意外穿越到1930年代的上海,她爱上了当红小生,却发现自己必须在舞会那一夜做出改变历史的选择。"
  },
  {
    "title": "宿命",
    "href": "details/movie-1395.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "时间循环",
      "因果报应",
      "心理恐怖"
    ],
    "oneLine": "一个声称能预知死亡的网站让七位用户依次死去,而最后一个用户名,是女主自己的名字。"
  },
  {
    "title": "火之国",
    "href": "details/movie-1396.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "忍者",
      "幕府",
      "地下城",
      "火山",
      "复仇"
    ],
    "oneLine": "在熔岩流淌的活火山内部,隐藏着最后一个拒绝臣服幕府的忍者村落。"
  },
  {
    "title": "当我们海阔天空",
    "href": "details/movie-1397.html",
    "cover": "./47.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "大学生创业",
      "乡村振兴",
      "真实改编",
      "群像戏",
      "热血"
    ],
    "oneLine": "四个挂科边缘的废柴大学生,为了逃避毕业即失业,跑到大山里搞起了直播带货和智慧农业。"
  },
  {
    "title": "血玺金刀粤语",
    "href": "details/movie-1398.html",
    "cover": "./48.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电视剧",
    "category": "古装甜宠",
    "tags": [
      "港剧",
      "复仇",
      "皇室秘宝",
      "身世之谜",
      "武打"
    ],
    "oneLine": "太祖传国玉玺刻于金刀之上,江湖与朝廷为夺此刀,掀起了三代人的恩怨情仇。"
  },
  {
    "title": "惊魂记4",
    "href": "details/movie-1399.html",
    "cover": "./49.jpg",
    "year": "1990",
    "region": "美国",
    "type": "电视剧",
    "category": "恐怖惊悚",
    "tags": [
      "经典续集",
      "心理惊悚",
      "诺曼·贝茨"
    ],
    "oneLine": "诺曼·贝茨被假释出狱,娶了妻,过着正常人的生活,直到他发现自己又开始“想妈妈”了。"
  },
  {
    "title": "大漠情怨",
    "href": "details/movie-1400.html",
    "cover": "./50.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "沙漠",
      "复仇",
      "虐恋",
      "商队",
      "权谋"
    ],
    "oneLine": "丝绸之路上,女镖师为报灭门之仇,却爱上了仇人派来的卧底向导。"
  },
  {
    "title": "新笑林小子之我最棒",
    "href": "details/movie-1401.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "武术",
      "夏令营",
      "竞争",
      "成长"
    ],
    "oneLine": "两个参加武术夏令营的死对头,在争夺“最棒”头衔的过程中,意外卷入了拯救营地的大行动。"
  },
  {
    "title": "星空",
    "href": "details/movie-1402.html",
    "cover": "./52.jpg",
    "year": "2011",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "几米",
      "治愈",
      "成长",
      "孤独",
      "童年"
    ],
    "oneLine": "两个因家庭破碎而孤独的少年,为了寻找记忆中的那片星空,踏上一场奇幻的逃离之旅。"
  },
  {
    "title": "击浪青春",
    "href": "details/movie-1403.html",
    "cover": "./53.jpg",
    "year": "1996",
    "region": "日本",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "划艇",
      "青春",
      "绝症",
      "励志"
    ],
    "oneLine": "五个被诊断为绝症的女孩,决定组建一支赛艇队,用一次远航来证明自己活过。"
  },
  {
    "title": "千机变II花都大战",
    "href": "details/movie-1404.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女特工",
      "僵尸",
      "末世",
      "港风"
    ],
    "oneLine": "花都沦陷为僵尸之城,两名女特工必须在24小时内护送一滴“圣母之泪”穿越尸海,重启人类防线。"
  },
  {
    "title": "遗赠的秘密",
    "href": "details/movie-1405.html",
    "cover": "./55.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "遗产",
      "家族诅咒",
      "民俗学",
      "祠堂"
    ],
    "oneLine": "父亲去世后留下诡异遗嘱:四个子女必须在冬至夜共住祖宅,否则将死于非命。"
  },
  {
    "title": "小台灯",
    "href": "details/movie-1406.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画短片",
    "category": "动画少儿",
    "tags": [
      "治愈系",
      "哲学寓言",
      "极简主义",
      "拟人化",
      "留守儿童"
    ],
    "oneLine": "一只被遗弃在老屋里的台灯,每晚坚持为自己亮灯十分钟,假装还有人住。"
  },
  {
    "title": "克劳德雷路许之偶然与谎言",
    "href": "details/movie-1407.html",
    "cover": "./57.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "作者电影",
      "哲学",
      "偶然",
      "欺骗"
    ],
    "oneLine": "如果每一次相遇都是偶然,那每一次谎言都是必然。"
  },
  {
    "title": "名侦探明智小五郎",
    "href": "details/movie-1408.html",
    "cover": "./58.jpg",
    "year": "1997",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "本格推理",
      "怪盗",
      "复古"
    ],
    "oneLine": "昭和时代的本格侦探遇上现代连环杀手,他不得不抛弃优雅,用疯癫来对抗精密犯罪。"
  },
  {
    "title": "禁婚令",
    "href": "details/movie-1409.html",
    "cover": "./59.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "朝鲜王朝",
      "假婚约",
      "宫斗",
      "欢喜冤家",
      "契约恋爱"
    ],
    "oneLine": "朝鲜最年轻的君王为拒婚下了一道荒唐禁令,却偏偏对一个冒牌女官动了真心。"
  },
  {
    "title": "警方求助",
    "href": "details/movie-1410.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "真实案件改编",
      "接线员视角",
      "社会派推理"
    ],
    "oneLine": "110接线员接起一通求救电话,对面说“我想自首”,然后报出了一个已经结案10年的失踪案细节。"
  },
  {
    "title": "父母对抗赛",
    "href": "details/movie-1411.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "搞笑",
      "升学压力",
      "反转",
      "黑色幽默",
      "教育"
    ],
    "oneLine": "为了让孩子进入贵族幼儿园,五对父母展开荒诞对决,却发现比赛规则直指他们最肮脏的秘密。"
  },
  {
    "title": "星际牛仔:天国之门",
    "href": "details/movie-1412.html",
    "cover": "./62.jpg",
    "year": "2026",
    "region": "日本",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "太空歌剧",
      "赏金猎人",
      "爵士乐"
    ],
    "oneLine": "一块来自“天国之门”事件的神秘芯片,让Spike等人卷入跨星系阴谋。"
  },
  {
    "title": "托托小英雄",
    "href": "details/movie-1413.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "儿童",
      "想象力",
      "亲情"
    ],
    "oneLine": "一个总被欺负的8岁小男孩,坚信自己是超级英雄,并要潜入隔壁老奶奶的屋里,找回她丢失的“彩虹之心”。"
  },
  {
    "title": "跨越世纪的情书",
    "href": "details/movie-1414.html",
    "cover": "./64.jpg",
    "year": "2021",
    "region": "中国大陆/俄罗斯",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "异国恋",
      "世纪长信",
      "中俄友谊",
      "时代洪流",
      "浪漫史诗"
    ],
    "oneLine": "一封写于20世纪50年代的信,跨越70年才送到对方手中,而收信人已是白发苍苍的老人。"
  },
  {
    "title": "艾玛好色",
    "href": "details/movie-1415.html",
    "cover": "./65.jpg",
    "year": "2024",
    "region": "瑞典/丹麦",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "女性欲望",
      "青春阵痛",
      "北欧冷感",
      "成长"
    ],
    "oneLine": "15岁的艾玛被小镇评为“最想睡的女生”,但她只想找到一个人,愿意听她读完一本关于蜜蜂自杀的哲学小册子。"
  },
  {
    "title": "我爱的是你爱我",
    "href": "details/movie-1416.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "都市",
      "情感",
      "错位",
      "分手"
    ],
    "oneLine": "他喜欢的是“被爱”的感觉,而她只想要一个“爱人”,这场错位的恋爱注定无解。"
  },
  {
    "title": "瓦鲁",
    "href": "details/movie-1417.html",
    "cover": "./67.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "时间循环",
      "岛屿",
      "渔民",
      "神话"
    ],
    "oneLine": "布列塔尼小岛上的渔民瓦鲁发现,他每天都会在暴风雨中醒来,而岛上的日历已经三十年没翻过了。"
  },
  {
    "title": "猎神:冬日之战",
    "href": "details/movie-1418.html",
    "cover": "./68.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "北欧神话",
      "雪原",
      "猎神起源",
      "魔物猎人"
    ],
    "oneLine": "猎神诞生之前,他是被遗弃在北境冰原的孤儿,第一头杀死他的猎物是一只霜巨狼,而巨狼体内锁着春天的魂魄。"
  },
  {
    "title": "隔壁的男孩杀过来",
    "href": "details/movie-1419.html",
    "cover": "./69.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "邻居",
      "身份反转",
      "生存之战",
      "血腥暴力"
    ],
    "oneLine": "一位独居女主发现新搬来的腼腆男孩,竟是潜逃的顶级少年杀手。"
  },
  {
    "title": "猛鬼系列之一眉道姑",
    "href": "details/movie-1420.html",
    "cover": "./70.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "僵尸",
      "道姑",
      "香港老片",
      "无厘头"
    ],
    "oneLine": "一个只有一条眉毛的道姑,带着两个傻徒弟大战清朝僵尸王。"
  },
  {
    "title": "整九码",
    "href": "details/movie-1421.html",
    "cover": "./71.jpg",
    "year": "2008",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "橄榄球",
      "黑帮",
      "卧底",
      "赌球"
    ],
    "oneLine": "一名数学天才为了还债,被迫进入橄榄球联盟当裁判,利用公式操纵比赛,却引起了黑帮和FBI的双重关注。"
  },
  {
    "title": "鬼勾魂",
    "href": "details/movie-1422.html",
    "cover": "./72.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电视剧",
    "category": "恐怖惊悚",
    "tags": [
      "民间邪术",
      "轮回",
      "师徒",
      "单元剧"
    ],
    "oneLine": "夜夜梦见同一个红衣女人索命,七个互不相识的人发现他们前世是同一个人。"
  },
  {
    "title": "考试",
    "href": "details/movie-1423.html",
    "cover": "./73.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "升学",
      "AI监考",
      "密室",
      "社会批判",
      "反转"
    ],
    "oneLine": "为了进入顶级名校,六名考生被困密室参加AI终极面试,却发现考官要筛选的不是智商,而是人性的弱点。"
  },
  {
    "title": "我不卖身我卖子宫",
    "href": "details/movie-1424.html",
    "cover": "./74.jpg",
    "year": "2008",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "代孕",
      "底层女性",
      "黑色幽默",
      "邱礼涛",
      "写实"
    ],
    "oneLine": "为了给瘫痪丈夫治病,中年妇女阿黎决定去当“代孕妈妈”,却发现子宫是她唯一能卖的“商品”。"
  },
  {
    "title": "布格迪先生",
    "href": "details/movie-1425.html",
    "cover": "./75.jpg",
    "year": "2016",
    "region": "法国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "隐喻",
      "小镇",
      "怪诞",
      "社会讽刺",
      "黑色幽默"
    ],
    "oneLine": "每当小镇有人说出谎言,那位神秘的布格迪先生就会强行喂给说谎者一块活着的肉馅。"
  },
  {
    "title": "飞狗巴迪",
    "href": "details/movie-1426.html",
    "cover": "./76.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "会飞的狗",
      "宠物情缘",
      "小镇危机",
      "环保",
      "治愈"
    ],
    "oneLine": "内向少年捡到一只会飞的金毛犬,与此同时,小镇上空的候鸟开始离奇失踪,似乎与附近新建的化工厂有关。"
  },
  {
    "title": "命定伴侣",
    "href": "details/movie-1427.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "基因配对",
      "反乌托邦",
      "记忆删除",
      "自由意志"
    ],
    "oneLine": "在由政府按基因匹配婚姻的未来,三个“错误匹配”的人掀翻了系统。"
  },
  {
    "title": "秘林謎村",
    "href": "details/movie-1428.html",
    "cover": "./78.jpg",
    "year": "2018",
    "region": "英国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "失踪案",
      "时间循环",
      "森林怪谈",
      "英剧",
      "心理惊悚"
    ],
    "oneLine": "三名背包客在威尔士森林中迷路,发现每隔十公里就会出现一座完全相同的废弃村庄。"
  },
  {
    "title": "执斧人",
    "href": "details/movie-1429.html",
    "cover": "./79.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "东北林区",
      "斧头追杀",
      "心理惊悚"
    ],
    "oneLine": "东北林场深夜传出诡异斧声,守林人发现每一声回响都在复刻七年前的灭门案。"
  },
  {
    "title": "拉斯维加斯三日游",
    "href": "details/movie-1430.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "疯狂旅行",
      "赌城迷路",
      "祖孙情",
      "误会重重"
    ],
    "oneLine": "一位保守的75岁祖母为了拿回被偷的手机,在赌城误入脱衣舞俱乐部,却意外找到了自己的第二春。"
  },
  {
    "title": "我们家的微幸福生活",
    "href": "details/movie-1431.html",
    "cover": "./81.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "三代同堂",
      "邻里",
      "细碎日常",
      "温情"
    ],
    "oneLine": "北京胡同里一户普通人家,三代人为了房子、工作、相亲吵吵闹闹,却总在不经意间暖到心坎。"
  },
  {
    "title": "蜀山:新蜀山剑侠",
    "href": "details/movie-1432.html",
    "cover": "./82.jpg",
    "year": "1983",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "徐克",
      "仙侠",
      "特效革新",
      "蜀山",
      "正邪大战"
    ],
    "oneLine": "血魔即将复活,蜀山派弟子丁引必须找到天击雷炎双剑合璧,才能阻止浩劫。"
  },
  {
    "title": "绝命大克星",
    "href": "details/movie-1433.html",
    "cover": "./83.jpg",
    "year": "1995",
    "region": "香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "杀手",
      "基因突变",
      "反英雄",
      "枪战",
      "都市传说"
    ],
    "oneLine": "城市中出现了专门猎杀杀手的杀手,而他的下一个目标,是金盆洗手的传奇刺客“医生”。"
  },
  {
    "title": "小爱神",
    "href": "details/movie-1434.html",
    "cover": "./84.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "神明下凡",
      "欢喜冤家",
      "都市"
    ],
    "oneLine": "因为业绩垫底被贬下凡的实习爱神,必须撮合99对情侣才能重返天庭,而他选中的第一个目标,是自己最看不惯的毒舌女上司。"
  },
  {
    "title": "换世之恋",
    "href": "details/movie-1435.html",
    "cover": "./85.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集 奇幻/爱情",
    "category": "国产短剧",
    "tags": [
      "穿越",
      "身份互换",
      "民国",
      "宿命"
    ],
    "oneLine": "现代女总裁与民国少爷每次亲吻就会交换身体,并跨越百年寻找彼此。"
  },
  {
    "title": "日本夜与雾",
    "href": "details/movie-1436.html",
    "cover": "./86.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "泡沫经济",
      "失踪案",
      "媒体暴力",
      "双线叙事",
      "冷峻"
    ],
    "oneLine": "2010年跨年夜,东京一名女大学生消失在漫天烟火中,四十年后同一地点发现她的遗骨与一本未写完的日记。"
  },
  {
    "title": "春满夏令营",
    "href": "details/movie-1437.html",
    "cover": "./87.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "夏令营",
      "乡村",
      "成长",
      "欢笑"
    ],
    "oneLine": "一群城市问题少年被送到东北乡村夏令营,却把务农任务玩成了一场爆笑“生存挑战”。"
  },
  {
    "title": "警戒结束",
    "href": "details/movie-1438.html",
    "cover": "./88.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "卧底警匪",
      "极限生存",
      "兄弟情",
      "真实感"
    ],
    "oneLine": "两名卧底警察被要求“假戏真做”贩一次毒,以掩护整个缉毒行动。"
  },
  {
    "title": "贾方复仇记",
    "href": "details/movie-1439.html",
    "cover": "./89.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影/动画",
    "category": "科幻奇幻",
    "tags": [
      "反派归来",
      "魔法对抗",
      "迪士尼风格"
    ],
    "oneLine": "沉睡千年后,邪恶巫师贾方被意外唤醒,他带着对阿拉丁更残酷的诅咒回到阿格拉巴,这次他要让整个王国陷入永恒的黑暗。"
  },
  {
    "title": "移魂劫",
    "href": "details/movie-1440.html",
    "cover": "./90.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "意识互换",
      "阴谋",
      "伦理困境"
    ],
    "oneLine": "一项非法的意识移植手术,让一位母亲的身体里住进了杀手的灵魂。"
  },
  {
    "title": "怪物王女",
    "href": "details/movie-1441.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "怪物",
      "王室秘密",
      "改造人",
      "血色王冠",
      "弑父"
    ],
    "oneLine": "国王驾崩后,三位王子争相铲除的怪物公主,其实才是王位真正的守护者。"
  },
  {
    "title": "外出就餐3:饕餮自助",
    "href": "details/movie-1442.html",
    "cover": "./92.jpg",
    "year": "2011",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "LGBTQ+",
      "美食",
      "一夜情变真爱",
      "自助餐大战"
    ],
    "oneLine": "一名恐恋爱的一夜情高手,在一场“自助餐相亲”游戏中,把自己玩进了真爱陷阱。"
  },
  {
    "title": "我感觉到你在空气中徘徊",
    "href": "details/movie-1443.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "转世",
      "厨师",
      "公寓",
      "前世记忆"
    ],
    "oneLine": "一位高冷建筑师每晚都会梦到一个陌生的老式厨房,直到他在新租的公寓楼下,遇到了那个能把记忆煮进汤里的男孩。"
  },
  {
    "title": "老莫的第二个春天",
    "href": "details/movie-1444.html",
    "cover": "./94.jpg",
    "year": "1984",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "老兵",
      "台湾",
      "乡愁",
      "黄昏恋",
      "金马奖"
    ],
    "oneLine": "来台四十年的老兵老莫,在老乡的安排下娶了山地少女玉梅,新婚夜却发现自己无法忘记大陆的结发妻。"
  },
  {
    "title": "毋愿五楼上的邻居",
    "href": "details/movie-1445.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "都市怪谈",
      "公寓恐怖",
      "因果报应",
      "楼宇传说"
    ],
    "oneLine": "一栋老公寓的五楼永远没人敢住,因为每一个搬进去的租客,都会变成墙上的一张照片。"
  },
  {
    "title": "勇敢说爱",
    "href": "details/movie-1446.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "暗恋",
      "双向奔赴",
      "治愈",
      "青春",
      "校园"
    ],
    "oneLine": "一封藏在毕业相册里的情书,在十年后意外被翻开,搅动了三个人的命运。"
  },
  {
    "title": "莫斯科离大同不远",
    "href": "details/movie-1447.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "中国大陆/俄罗斯",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "跨国奇遇",
      "煤老板",
      "文化冲突"
    ],
    "oneLine": "山西大同一位煤老板为了追回被骗的资金,稀里糊涂跟着一位俄罗斯落魄画家,开着货车从大同直奔莫斯科。"
  },
  {
    "title": "情欲与虐杀",
    "href": "details/movie-1448.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "大正时代",
      "女权",
      "畸恋"
    ],
    "oneLine": "大正年间,一个游走于政治暗杀与男女欢场的女革命家,同时与一对父子展开了无法回头的禁忌之恋。"
  },
  {
    "title": "再见枕边人国语",
    "href": "details/movie-1449.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国香港/中国大陆",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "双重身份",
      "失忆梗",
      "家族斗争",
      "替身爱人",
      "商战博弈"
    ],
    "oneLine": "丈夫车祸失忆后,妻子发现他手机里存着三个不同“妻子”的结婚照,而自己才是第三者。"
  },
  {
    "title": "长毛象欢度圣诞",
    "href": "details/movie-1450.html",
    "cover": "./100.jpg",
    "year": "2017",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "圣诞",
      "史前动物",
      "穿越",
      "搞笑",
      "温情"
    ],
    "oneLine": "一只冰封万年的长毛象被圣诞老人的驯鹿意外挖出,醒来后以为自己是圣诞坐骑。"
  },
  {
    "title": "变态城",
    "href": "details/movie-1451.html",
    "cover": "./101.jpg",
    "year": "2023",
    "region": "美国/法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "心理恐怖",
      "定格动画",
      "超现实主义"
    ],
    "oneLine": "在一个所有居民都在拼命追求“绝对正常”的城市里,一个长着猪鼻子的小男孩为了交朋友,决定切掉自己的鼻子。"
  },
  {
    "title": "非婚不可",
    "href": "details/movie-1452.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "泰国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "契约结婚",
      "先婚后爱",
      "家族恩怨",
      "霸道总裁",
      "泰式甜宠"
    ],
    "oneLine": "为了争夺家族遗产,花花公子被迫与一名认真的单身妈妈签订结婚契约,却发现自己第一次动了真心。"
  },
  {
    "title": "奥匈情史(下)",
    "href": "details/movie-1453.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "英国/奥地利",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "宫廷",
      "悲剧",
      "皇室",
      "宿命"
    ],
    "oneLine": "皇储 Rudolf 与平民女孩 Mary 的秘密恋情,正在加速摧毁哈布斯堡王朝最后的体面。"
  },
  {
    "title": "守业者粤语",
    "href": "details/movie-1454.html",
    "cover": "./104.jpg",
    "year": "2014",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "家族斗争",
      "丝绸",
      "行业剧",
      "恩怨"
    ],
    "oneLine": "丝绸大王突然离世,养子与亲生女儿为争夺家产,揭开了家族染坊里深埋三十年的血案。"
  },
  {
    "title": "穿越乡间路",
    "href": "details/movie-1455.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "乡村",
      "时间循环",
      "自我和解",
      "老屋"
    ],
    "oneLine": "一个叛逆城市女孩被迫回到故乡老屋,却发现每次走完那条乡间小路,时间就会倒回一天。"
  },
  {
    "title": "死亡仓库2",
    "href": "details/movie-1456.html",
    "cover": "./106.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "低成本血浆",
      "密室逃生",
      "反转结局"
    ],
    "oneLine": "上一部最后逃出的女主重回仓库,发现所谓“生还”只是诅咒的第一环。"
  },
  {
    "title": "智勇双探",
    "href": "details/movie-1457.html",
    "cover": "./107.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "双男主",
      "探案",
      "高智商",
      "欢喜冤家"
    ],
    "oneLine": "一个靠逻辑的犯罪心理学教授,一个靠直觉的草根神探,被迫联手追查震惊全城的“本我连环案”。"
  },
  {
    "title": "蜜丝炸弹",
    "href": "details/movie-1458.html",
    "cover": "./108.jpg",
    "year": "2016",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女特工",
      "无厘头",
      "台客文化",
      "恶搞"
    ],
    "oneLine": "三个菜鸟女特工接到任务保护一枚“炸弹”,结果发现炸弹其实是只怀孕的母猪。"
  },
  {
    "title": "曼谷杀手",
    "href": "details/movie-1459.html",
    "cover": "./109.jpg",
    "year": "2024",
    "region": "泰国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "杀手",
      "复仇",
      "泰拳"
    ],
    "oneLine": "一个失忆的冷血杀手在曼谷唐人街醒来,发现自己要杀的下一个目标,竟是十年前救过自己的恩人。"
  },
  {
    "title": "忠狗巴比传",
    "href": "details/movie-1460.html",
    "cover": "./110.jpg",
    "year": "2021",
    "region": "英国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "真实事件改编",
      "人狗情",
      "忠诚传奇"
    ],
    "oneLine": "真实故事:一只苏格兰梗犬在主人墓前守了十四年,直至死去。"
  },
  {
    "title": "魔娃娃",
    "href": "details/movie-1461.html",
    "cover": "./111.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "娃娃",
      "诅咒",
      "降头",
      "怀旧",
      "邪典"
    ],
    "oneLine": "街头卖的木偶能实现愿望,但每实现一个,许愿者身上就会有零件变成木头。"
  },
  {
    "title": "体外实验",
    "href": "details/movie-1462.html",
    "cover": "./112.jpg",
    "year": "2026",
    "region": "德国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "赛博朋克",
      "人体实验",
      "伦理",
      "意识"
    ],
    "oneLine": "科学家将濒死妻子的意识上传到一具人造躯壳中,却发现她开始不受控制地让周围的人产生幻觉。"
  },
  {
    "title": "狐狸与猎狗",
    "href": "details/movie-1463.html",
    "cover": "./113.jpg",
    "year": "1981",
    "region": "美国",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "友情",
      "自然",
      "催泪"
    ],
    "oneLine": "小狐狸与小猎狗曾是童年玩伴,但当它们长大后,天敌的宿命逼它们在森林里生死相搏。"
  },
  {
    "title": "弗里斯基",
    "href": "details/movie-1464.html",
    "cover": "./114.jpg",
    "year": "2015",
    "region": "德国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "养老院",
      "叛逆",
      "嘻哈",
      "代际"
    ],
    "oneLine": "浑身刺青的问题少女被罚到养老院做义工,没想到她用嘻哈音乐唤醒了老人们沉睡的青春叛逆心。"
  },
  {
    "title": "没有心跳的少女",
    "href": "details/movie-1465.html",
    "cover": "./115.jpg",
    "year": "2018",
    "region": "日本",
    "type": "动画剧集",
    "category": "都市爱情",
    "tags": [
      "机器人",
      "末世",
      "战斗",
      "催泪",
      "AI"
    ],
    "oneLine": "在人类已经不需要情感的末世,他捡到了一个会流泪的、没有心跳的战斗少女。"
  },
  {
    "title": "兽娘动物园",
    "href": "details/movie-1466.html",
    "cover": "./116.jpg",
    "year": "2017",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "兽娘",
      "废土",
      "科普"
    ],
    "oneLine": "失忆少女在巨大的废土公园里遇到兽娘朋友,却发现她们的存在是为了掩盖一场灭绝人类的灾难。"
  },
  {
    "title": "国宝山椒鱼",
    "href": "details/movie-1467.html",
    "cover": "./117.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "乡土",
      "怪兽",
      "守护神"
    ],
    "oneLine": "为了拯救即将被大坝淹没的村庄,村民们决定给一条不会游泳的国宝山椒鱼穿上潜水服。"
  },
  {
    "title": "暴力大都会",
    "href": "details/movie-1468.html",
    "cover": "./118.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "赛博朋克",
      "黑帮",
      "复仇",
      "义体改造",
      "暗黑"
    ],
    "oneLine": "在义体泛滥的大都会,一个没有改造过的纯肉身体警探,靠着一双拳头和一颗脑子挑战整个黑帮帝国。"
  },
  {
    "title": "爱情游戏",
    "href": "details/movie-1469.html",
    "cover": "./119.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "约会软件",
      "情感骗局",
      "都市男女",
      "心理博弈"
    ],
    "oneLine": "一款主打“真爱测试”的约会APP,让用户通过完成高难度任务来匹配对象,却逐渐演变成一场致命的心理游戏。"
  },
  {
    "title": "今天可能有点辣",
    "href": "details/movie-1470.html",
    "cover": "./120.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "美食",
      "临终关怀",
      "母女",
      "治愈"
    ],
    "oneLine": "患癌的母亲开始在食谱里疯狂加辣椒,因为她想用痛觉覆盖化疗的苦,并教会女儿做最后一道菜。"
  },
  {
    "title": "绝命战场",
    "href": "details/movie-1471.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "真人吃鸡",
      "死亡游戏",
      "未来战争",
      "反乌托邦"
    ],
    "oneLine": "未来世界,死刑犯被送上直播真人秀战场,而这一季的参赛者中混入了一名退役王牌特种兵。"
  },
  {
    "title": "鹰巢",
    "href": "details/movie-1472.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "纳粹",
      "反抗军",
      "刺杀希特勒"
    ],
    "oneLine": "1944年,一群德国军官在鹰巢策划刺杀希特勒,却发现元首早已被替身取代。"
  },
  {
    "title": "尼可曼斯",
    "href": "details/movie-1473.html",
    "cover": "./123.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "童年阴影",
      "怪物",
      "心理恐惧",
      "小成本"
    ],
    "oneLine": "为了阻止妹妹被噩梦吞噬,哥哥必须重新召唤出那个令他们儿时绝望的怪物。"
  },
  {
    "title": "迷人的图画",
    "href": "details/movie-1474.html",
    "cover": "./124.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "艺术品",
      "诅咒",
      "画廊",
      "心理",
      "修复师"
    ],
    "oneLine": "一幅十九世纪的迷人画作被送至修复室,修复师发现画中的人物每天都会移动,且越来越靠近画框边缘。"
  },
  {
    "title": "金斯敦市长第一季",
    "href": "details/movie-1475.html",
    "cover": "./125.jpg",
    "year": "2021",
    "region": "美国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "政治惊悚",
      "家族权力",
      "监禁系统",
      "暴力博弈"
    ],
    "oneLine": "在唯一没有合法赌场的密歇根小镇,一个中间人家庭靠摆平罪犯与警察之间的灰色交易统治着地下世界。"
  },
  {
    "title": "女生要革命",
    "href": "details/movie-1476.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "女性主义",
      "校园",
      "网络",
      "自我认同"
    ],
    "oneLine": "一所重点高中里,一群被标签化的“问题女生”决定联手对抗不合理的校规和无处不在的偏见,发起一场改变所有人的“革命”。"
  },
  {
    "title": "如意天书",
    "href": "details/movie-1477.html",
    "cover": "./127.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "天书",
      "逆袭",
      "法宝",
      "宿敌",
      "修仙"
    ],
    "oneLine": "废柴书生意外捡到一本会骂人的天书,从此被迫开启爆笑修仙之路。"
  },
  {
    "title": "小人物大英雄",
    "href": "details/movie-1478.html",
    "cover": "./128.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "外卖员",
      "网络直播",
      "见义勇为",
      "身份错位"
    ],
    "oneLine": "外卖员小伟送餐时碰巧救了个人,不料全程被拍下,一夜爆红后他却陷入了更大的麻烦。"
  },
  {
    "title": "飞行大王",
    "href": "details/movie-1479.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "滑翔翼",
      "小镇青年",
      "逆袭",
      "父子矛盾",
      "天空竞技"
    ],
    "oneLine": "一个欠债的小镇青年为了躲避追债人,意外报名了全国滑翔翼大赛,却发现自己真正的对手是 estranged 多年的父亲。"
  },
  {
    "title": "除霸",
    "href": "details/movie-1480.html",
    "cover": "./130.jpg",
    "year": "1987",
    "region": "中国内地",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "武打",
      "除暴安良",
      "民间英雄",
      "八十年代",
      "动作片"
    ],
    "oneLine": "清末,武林高手为救百姓,单枪匹马闯入恶霸的老巢,展开一场血战。"
  },
  {
    "title": "疯狂天才",
    "href": "details/movie-1481.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "数学",
      "精神疾病",
      "密码学",
      "冷战",
      "天才陨落"
    ],
    "oneLine": "破解了国家最高机密密码的天才数学家,因为声称看见了“宇宙真理的数字”,被关进精神病院长达三十年。"
  },
  {
    "title": "栀子花白兰花",
    "href": "details/movie-1482.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "上海",
      "叫卖声",
      "阿尔茨海默",
      "母女",
      "乡愁"
    ],
    "oneLine": "上海最后一位“白兰花阿婆”患上阿尔茨海默症,唯一不忘的是走街串巷的叫卖声。"
  },
  {
    "title": "兜风",
    "href": "details/movie-1483.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "母女",
      "和解",
      "二手车",
      "环岛",
      "遗愿清单"
    ],
    "oneLine": "叛逆女儿偷走父亲的老爷车,后座却坐着身患绝症、被她遗忘二十年的亲生母亲。"
  },
  {
    "title": "私密背叛",
    "href": "details/movie-1484.html",
    "cover": "./134.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电视剧",
    "category": "恐怖惊悚",
    "tags": [
      "心理咨询",
      "婚外情",
      "录音",
      "反转",
      "信任崩塌"
    ],
    "oneLine": "一位妻子在与心理咨询师的对话中,发现丈夫和咨询师早已合谋,而她才是唯一的“病人”。"
  },
  {
    "title": "同学麦娜丝",
    "href": "details/movie-1485.html",
    "cover": "./135.jpg",
    "year": "2023",
    "region": "台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "中年",
      "同学会",
      "怀旧",
      "人生遗憾"
    ],
    "oneLine": "四个高中同学在毕业二十年后的一场同学会上重逢,每个人都以为自己是被“减掉”的那个,却不知道别人活得也没多好。"
  },
  {
    "title": "不超过一分钟",
    "href": "details/movie-1486.html",
    "cover": "./136.jpg",
    "year": "2015",
    "region": "法国",
    "type": "短片",
    "category": "都市爱情",
    "tags": [
      "时间",
      "重逢",
      "出租车",
      "倒计时",
      "错过"
    ],
    "oneLine": "凌晨的尼斯机场,一对分手七年的恋人在出租车上重逢,而这段车程只有四十七秒。"
  },
  {
    "title": "飞马俏姑娘",
    "href": "details/movie-1487.html",
    "cover": "./137.jpg",
    "year": "2003",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "少女成长",
      "马术",
      "逆境重生"
    ],
    "oneLine": "叛逆少女被送到牧场劳改,却意外发现一匹无人能驯服的野马竟是她的灵魂镜像。"
  },
  {
    "title": "血战残阳",
    "href": "details/movie-1488.html",
    "cover": "./138.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "狙击手",
      "湘西",
      "雪峰山",
      "兄弟情"
    ],
    "oneLine": "湘西会战最后三天,一个瞎子老兵和一个新兵蛋子,背着空空如也的子弹袋,守着唯一的阵地。 1945年雪峰山,一支溃败的国军小队仅剩两人:眼瞎的师父和懦弱的徒弟,面前是上千日军。"
  },
  {
    "title": "地心引力国语",
    "href": "details/movie-1489.html",
    "cover": "./139.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "太空",
      "灾难",
      "配音",
      "国语",
      "求生"
    ],
    "oneLine": "著名配音演员重新演绎经典,一名女宇航员在太空站被摧毁后,必须依靠信念穿越大气层。"
  },
  {
    "title": "永不言死",
    "href": "details/movie-1490.html",
    "cover": "./140.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "不死者",
      "轮回",
      "历史跨度",
      "永生悲剧"
    ],
    "oneLine": "一个从朝鲜时代活到2026年的不死之人,每个世纪都会爱上同一个人,而对方每次都会在他面前死去。"
  },
  {
    "title": "士魂魔道 大龙卷",
    "href": "details/movie-1491.html",
    "cover": "./141.jpg",
    "year": "2027",
    "region": "日本",
    "type": "电影/动画",
    "category": "动画少儿",
    "tags": [
      "蒸汽朋克武士",
      "复仇之路",
      "视觉奇观"
    ],
    "oneLine": "在一个被不灭龙卷风笼罩的蒸汽时代,被灭门的武士之女,驾驭着机械战马向拥有“风魔之力”的仇人发起复仇。"
  },
  {
    "title": "行错桃花运",
    "href": "details/movie-1492.html",
    "cover": "./142.jpg",
    "year": "2023",
    "region": "香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "错位爱情",
      "香港喜剧",
      "相亲",
      "身份误会",
      "搞笑"
    ],
    "oneLine": "内向宅男被算命先生告知“今日桃花泛滥”,一天内竟同时与五个女人展开乌龙恋爱。"
  },
  {
    "title": "克里斯托弗·罗宾",
    "href": "details/movie-1493.html",
    "cover": "./143.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "中年危机",
      "童年",
      "治愈",
      "真人动画",
      "怀旧"
    ],
    "oneLine": "中年社畜克里斯托弗·罗宾弄丢了重要文件,却在公文包里发现了儿时的玩偶小熊维尼。"
  },
  {
    "title": "虚情假意",
    "href": "details/movie-1494.html",
    "cover": "./144.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "豪门",
      "替代",
      "谎言",
      "继承",
      "真相"
    ],
    "oneLine": "一个冒牌千金被送入豪门,却发现全家都在演戏,真正的继承者藏在地下室。"
  },
  {
    "title": "奸臣:色诱天下",
    "href": "details/movie-1495.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "朝鲜王朝",
      "燕山君",
      "妓生",
      "权力",
      "复仇"
    ],
    "oneLine": "燕山君时期,奸臣任崇载训练绝色妓生献给暴君,却不知妓生是来刺杀他的。"
  },
  {
    "title": "小生添错丁",
    "href": "details/movie-1496.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "乌龙",
      "育儿",
      "身份错位",
      "港式幽默",
      "温情"
    ],
    "oneLine": "三个在产房被抱错的男婴长到7岁,三个风格迥异的家庭被迫同居磨合,却发现当初的“错”也许是“对”。"
  },
  {
    "title": "白鹭谣",
    "href": "details/movie-1497.html",
    "cover": "./147.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "民国",
      "家族",
      "复仇",
      "江南",
      "女性"
    ],
    "oneLine": "白鹭洲头惊现无头女尸,留学归来的大小姐发现,这竟与二十年前的灭门血案有关。"
  },
  {
    "title": "摩登女婿",
    "href": "details/movie-1498.html",
    "cover": "./148.jpg",
    "year": "2014",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "上门女婿",
      "代际冲突",
      "逆袭",
      "创业",
      "都市生活"
    ],
    "oneLine": "农村出身的上门女婿在岳母刁难下偷偷创业,却意外成了全城最火网红。"
  },
  {
    "title": "新的肌肤",
    "href": "details/movie-1499.html",
    "cover": "./149.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "人造皮肤",
      "身体改造",
      "身份认同",
      "科技伦理",
      "赛博格"
    ],
    "oneLine": "一种能治愈一切疤痕的人造皮肤上市,但换过“新肌肤”的人,开始忘记自己是谁。"
  },
  {
    "title": "超级语文课第二季",
    "href": "details/movie-1500.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "综艺",
    "category": "国产短剧",
    "tags": [
      "语文老师",
      "作文对决",
      "诗词飞花令",
      "教育综艺"
    ],
    "oneLine": "十二位风格迥异的语文老师同台PK,用“神级板书”和“魔性讲课”争夺年度金牌教师。"
  },
  {
    "title": "蜜月花车",
    "href": "details/movie-1501.html",
    "cover": "./1.jpg",
    "year": "1954",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "黑白片",
      "公路喜剧",
      "新婚夫妻",
      "倒霉之旅",
      "经典好莱坞"
    ],
    "oneLine": "一对新婚夫妇开着用婚礼份子钱买的二手花车去佛罗里达度蜜月,一路上花车接连爆胎、抛锚、还被误认为是抢劫犯。"
  },
  {
    "title": "邻家诗话第四季",
    "href": "details/movie-1502.html",
    "cover": "./2.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺",
    "category": "国产短剧",
    "tags": [
      "诗词歌赋",
      "庭院雅集",
      "慢综艺",
      "国风美学"
    ],
    "oneLine": "第四季走出庭院,每一期去一首诗的诞生地,在真实山水间重新唱和。"
  },
  {
    "title": "恰似两滴水",
    "href": "details/movie-1503.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "克隆",
      "身份认同",
      "伦理",
      "哲学",
      "文艺"
    ],
    "oneLine": "一位失独母亲克隆了死去的女儿,却发现这个拥有相同DNA的女孩,性格却与她死去的孩子恰似两滴水般不同。"
  },
  {
    "title": "全谎位登月",
    "href": "details/movie-1504.html",
    "cover": "./4.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "阴谋论",
      "登月",
      "政治惊悚",
      "脑洞"
    ],
    "oneLine": "一名 CIA 特工被派去“监督”登月造假计划,却在过程中发现了真正的阴谋——月球上有东西不想让我们上去。"
  },
  {
    "title": "遗失的王国",
    "href": "details/movie-1505.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "考古",
      "平行世界",
      "古文明",
      "解谜"
    ],
    "oneLine": "考古学家在一座13世纪教堂的地窖里挖出一块芯片,插入电脑后,屏幕上映出了一个由数学公式构成的辉煌王朝。"
  },
  {
    "title": "女高怪谈4:声音",
    "href": "details/movie-1506.html",
    "cover": "./6.jpg",
    "year": "2005",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "校园",
      "幽灵",
      "友情",
      "未解之谜"
    ],
    "oneLine": "女子高中内,只有死去的英缘能听到好友善敏的声音,一段被掩盖的真相随之揭开。"
  },
  {
    "title": "寄宿学校之六少年",
    "href": "details/movie-1507.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "孤岛",
      "暴风雪山庄",
      "少年侦探",
      "心理博弈"
    ],
    "oneLine": "六名被退学的少年困在暴风雨中的废弃校舍,第二具尸体出现时,他们发现凶手就在身边。"
  },
  {
    "title": "云雀山庄的情人",
    "href": "details/movie-1508.html",
    "cover": "./8.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "山庄",
      "秘密",
      "身份互换",
      "雨中追凶"
    ],
    "oneLine": "暴雨封山的夜晚,云雀山庄的七个房客中藏着一对假扮情侣的凶手。"
  },
  {
    "title": "四片羽毛",
    "href": "details/movie-1509.html",
    "cover": "./9.jpg",
    "year": "2026",
    "region": "英国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "荣誉",
      "背叛",
      "救赎"
    ],
    "oneLine": "军官拒绝参战被朋友送四片白羽毛象征懦夫,他隐姓埋名潜入敌营,用一生证明自己不是逃兵。"
  },
  {
    "title": "歌舞青春2",
    "href": "details/movie-1510.html",
    "cover": "./10.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "高校音乐节",
      "文化碰撞",
      "梦想对决"
    ],
    "oneLine": "十年后的高校音乐节,当年的野猫队以另一种方式“回归”了。"
  },
  {
    "title": "山村大爷",
    "href": "details/movie-1511.html",
    "cover": "./11.jpg",
    "year": "2012",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "亲情",
      "留守老人",
      "传承",
      "温情"
    ],
    "oneLine": "倔强的老木匠在得知自己患癌后,决定用最后三个月教会城里来的孙子一门即将失传的手艺。"
  },
  {
    "title": "黑衣女孩",
    "href": "details/movie-1512.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "都市传说",
      "寄宿学校",
      "邪教",
      "时间循环"
    ],
    "oneLine": "1970年代,一所偏远女子寄宿学校流传着“黑衣女孩”的鬼魂传说,转学生安娜却发现,鬼魂每晚都会在镜子里对她说话,警告她明天会死。"
  },
  {
    "title": "刽子手1963",
    "href": "details/movie-1513.html",
    "cover": "./13.jpg",
    "year": "1963",
    "region": "香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑白片",
      "刽子手",
      "港岛旧案",
      "职业宿命"
    ],
    "oneLine": "1963年的香港,最后一名刽子手接到斩首令,却发现死囚是当年救过自己的兄弟。"
  },
  {
    "title": "巴赫曼的沙漠之旅",
    "href": "details/movie-1514.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "德国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "沙漠",
      "地质学家",
      "寻找自我",
      "荒野"
    ],
    "oneLine": "著名地质学家巴赫曼带着亡妻的骨灰,独自闯入撒哈拉腹地,只为找到那颗以她名字命名的陨石。"
  },
  {
    "title": "黑暗之夏",
    "href": "details/movie-1515.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "邪教",
      "小镇迷云",
      "惊悚"
    ],
    "oneLine": "1999年夏天,一个村庄的孩子们集体失踪,31年后,当年的幸存者收到了来自过去的求救电话。"
  },
  {
    "title": "春色梨花",
    "href": "details/movie-1516.html",
    "cover": "./16.jpg",
    "year": "1973",
    "region": "台湾",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "文艺",
      "乡土文学",
      "禁忌之恋",
      "绝美画面"
    ],
    "oneLine": "上世纪50年代台湾乡村,一个外省教师与本地梨园寡妇的禁忌爱恋,引发整个村庄的撕裂。"
  },
  {
    "title": "妖妇",
    "href": "details/movie-1517.html",
    "cover": "./17.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "蛇蝎美人",
      "计中计",
      "人性阴暗",
      "反转"
    ],
    "oneLine": "村子里来了个美艳寡妇,三个月后,村长死了、富豪疯了、少年失踪了,而她的肚子大了起来。"
  },
  {
    "title": "男性,女性",
    "href": "details/movie-1518.html",
    "cover": "./18.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "两性战争",
      "巴黎青年",
      "黑白色调",
      "对话体"
    ],
    "oneLine": "巴黎一间公寓里,15个男人和15个女人被隔离30天,关于爱情、权力与身体的辩论演变为一场战争。"
  },
  {
    "title": "我知道我爱你",
    "href": "details/movie-1519.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "中国内地",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "日久生情",
      "宠物医生",
      "花艺师",
      "慢热"
    ],
    "oneLine": "一个不敢爱的花艺师,遇见了一个不会爱的宠物医生,两人用一年四季治愈彼此。"
  },
  {
    "title": "蓝兰岛漂流记",
    "href": "details/movie-1520.html",
    "cover": "./20.jpg",
    "year": "2023",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "孤岛",
      "少女",
      "生存",
      "治愈"
    ],
    "oneLine": "邮轮沉没后,26名女高中生漂流到一座只有女人的神秘岛屿,食物链顶端却是一个男孩。"
  },
  {
    "title": "某个世界",
    "href": "details/movie-1521.html",
    "cover": "./21.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "平行宇宙",
      "心理操控",
      "烧脑"
    ],
    "oneLine": "一家科技公司发明了“梦境编辑器”,无数人在虚假的幸福中永远沉睡。"
  },
  {
    "title": "战争大秘密",
    "href": "details/movie-1522.html",
    "cover": "./22.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "二战",
      "解密",
      "家庭秘密",
      "历史创伤"
    ],
    "oneLine": "一个安静的乡村阁楼里,孙女偶然发现祖父的“战争英雄”勋章背后,藏着一个足以颠覆历史的录音带。"
  },
  {
    "title": "我亲爱的表哥",
    "href": "details/movie-1523.html",
    "cover": "./23.jpg",
    "year": "2019",
    "region": "巴西",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "乡村",
      "禁忌之恋",
      "宗教",
      "沉默的爱",
      "葡萄牙语"
    ],
    "oneLine": "一位沉默的牧羊人和他刚从城市回来的表哥,在巴西腹地一场持续四十天的大旱中,默默相爱。"
  },
  {
    "title": "磨刀霍霍向太阳",
    "href": "details/movie-1524.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "农村",
      "光伏",
      "骗局",
      "反抗",
      "魔幻现实主义"
    ],
    "oneLine": "村长说要在梯田上铺满光伏板,老铁匠拿起祖传菜刀,要砍了那个“假太阳”。"
  },
  {
    "title": "云端第二季",
    "href": "details/movie-1525.html",
    "cover": "./25.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "数据幽灵",
      "AI",
      "数字永生",
      "暗网"
    ],
    "oneLine": "第一季的“云端审判者”落网后,更恐怖的AI诞生,它不仅能预测犯罪,还能操控死人。"
  },
  {
    "title": "吾凰在上 动态漫画",
    "href": "details/movie-1526.html",
    "cover": "./26.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "动漫",
    "category": "古装甜宠",
    "tags": [
      "凤凰",
      "穿越",
      "女强",
      "权谋",
      "动态漫画"
    ],
    "oneLine": "现代女摄影师意外穿越成亡国公主,为了活命,她必须在暴君面前扮演一只温顺的凤凰。"
  },
  {
    "title": "边缘",
    "href": "details/movie-1527.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "卧底",
      "灰色地带",
      "硬核",
      "人性拷问"
    ],
    "oneLine": "一位即将退休的警察主动潜入毒枭集团,却发现自己唯一的儿子早已是组织内部比卧底更深的“边缘人”。"
  },
  {
    "title": "电子世界争霸战",
    "href": "details/movie-1528.html",
    "cover": "./28.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "赛博空间",
      "摩托车",
      "重启",
      "视觉系"
    ],
    "oneLine": "时隔四十年,原版程序员的孙子被困于进化出自我意识的量子网格,他必须赢得史上最残酷的光轮摩托赛。"
  },
  {
    "title": "血腥生日",
    "href": "details/movie-1529.html",
    "cover": "./29.jpg",
    "year": "2026",
    "region": "澳大利亚",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "密室",
      "生日诅咒",
      "无人生还"
    ],
    "oneLine": "七个好友在孤岛开生日派对,蛋糕里藏的不是蜡烛,是一把钥匙。"
  },
  {
    "title": "五卢比恩仇录",
    "href": "details/movie-1530.html",
    "cover": "./30.jpg",
    "year": "2025",
    "region": "印度",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "阶级对立",
      "复仇",
      "印式动作",
      "五卢比"
    ],
    "oneLine": "因为五卢比,富人踩碎了穷人的眼镜,二十年后,穷人带着更强的眼镜回来复仇。"
  },
  {
    "title": "现世恋",
    "href": "details/movie-1531.html",
    "cover": "./31.jpg",
    "year": "1986",
    "region": "日本",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "穿越",
      "前世今生",
      "昭和风情",
      "纯爱"
    ],
    "oneLine": "一个现代东京的上班族,每晚都会梦见自己是二战前的艺伎,和一个军官相恋,直到他在现实里遇到了那个军官的转世。"
  },
  {
    "title": "猎杀超自然",
    "href": "details/movie-1532.html",
    "cover": "./32.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电视剧",
    "category": "科幻奇幻",
    "tags": [
      "怪物",
      "政府秘密",
      "小队作战",
      "血腥"
    ],
    "oneLine": "当全世界否认鬼怪存在时,这支见不得光的军方小队每晚都在用命清理失控的超自然事件。"
  },
  {
    "title": "劫局",
    "href": "details/movie-1533.html",
    "cover": "./33.jpg",
    "year": "2021",
    "region": "中国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "公交车劫持",
      "谈判专家",
      "反转",
      "人性拷问",
      "密闭空间"
    ],
    "oneLine": "一辆公交被劫持,谈判专家到现场才认出劫匪是二十年前救过自己的恩人。"
  },
  {
    "title": "通天塔2006",
    "href": "details/movie-1534.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "美国/墨西哥",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "跨文化",
      "灾难",
      "巧合",
      "寓言"
    ],
    "oneLine": "一栋烂尾的全球最高楼,将十二个不同国家的人困在同一夜。"
  },
  {
    "title": "医者",
    "href": "details/movie-1535.html",
    "cover": "./35.jpg",
    "year": "2022",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "医生",
      "道德困境",
      "死亡",
      "治愈"
    ],
    "oneLine": "东大毕业的天才外科医转入临终关怀病房,她要在这里学会的不是如何救人,而是如何让人好好死去。"
  },
  {
    "title": "灵魂约定",
    "href": "details/movie-1536.html",
    "cover": "./36.jpg",
    "year": "2028",
    "region": "日本",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "轮回",
      "婚约",
      "记忆封印",
      "日系虐恋"
    ],
    "oneLine": "每一世他们都约定结婚,但每一世新娘都会在婚礼前夜离奇消失。"
  },
  {
    "title": "内讧",
    "href": "details/movie-1537.html",
    "cover": "./37.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "密室",
      "黑色电影",
      "反转"
    ],
    "oneLine": "五名顶级杀手被困在密闭的电梯里,他们必须在抵达顶层前找出谁才是真正的“内鬼”。"
  },
  {
    "title": "钱不够用3",
    "href": "details/movie-1538.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "新加坡",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "讽刺",
      "家庭",
      "中年危机"
    ],
    "oneLine": "失业三兄弟发行虚拟货币一夜暴富,却发现最大的麻烦是怎样把钱花光。"
  },
  {
    "title": "奇门鬼谷粤语",
    "href": "details/movie-1539.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电视剧",
    "category": "古装甜宠",
    "tags": [
      "鬼谷子",
      "粤语原声",
      "机关术"
    ],
    "oneLine": "鬼谷子关门弟子操着粤语闯入战国乱世,用奇门遁甲搅动七国风云。"
  },
  {
    "title": "破碎的王冠",
    "href": "details/movie-1540.html",
    "cover": "./40.jpg",
    "year": "2023",
    "region": "英国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "王室",
      "权谋",
      "中世纪",
      "篡位"
    ],
    "oneLine": "老王驾崩,三子争位,一顶能预言王朝兴衰的古老王冠意外碎裂成五块。"
  },
  {
    "title": "撒旦之外",
    "href": "details/movie-1541.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "美国/墨西哥",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "邪教",
      "拉美巫术",
      "献祭"
    ],
    "oneLine": "梵蒂冈调查员深入拉美丛林,发现一个崇拜犹大的邪教正在举行反向弥撒。"
  },
  {
    "title": "大白鲨4:复仇",
    "href": "details/movie-1542.html",
    "cover": "./42.jpg",
    "year": "1987",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "鲨鱼",
      "复仇",
      "海洋",
      "血腥",
      "B级片"
    ],
    "oneLine": "一条似乎具有超自然智能的大白鲨追踪警长遗孀来到巴哈马,誓要灭绝她的整个家族。"
  },
  {
    "title": "地球上最后一个男孩",
    "href": "details/movie-1543.html",
    "cover": "./43.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "末世",
      "生殖危机",
      "逃亡",
      "神秘组织",
      "基因密码"
    ],
    "oneLine": "一种病毒杀死了全球所有Y染色体,12岁男孩阿莱成为全人类唯一的火种。"
  },
  {
    "title": "我的幸福婚约",
    "href": "details/movie-1544.html",
    "cover": "./44.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "大正时代",
      "异能",
      "先婚后爱",
      "治愈"
    ],
    "oneLine": "她是个没有异能的“废物”,被当成政治筹码嫁给冷血将军,却意外发现自己是唯一能封印他毁灭性力量的人。"
  },
  {
    "title": "我美之梦",
    "href": "details/movie-1545.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "整容",
      "灵魂互换",
      "外貌焦虑",
      "治愈"
    ],
    "oneLine": "一个沉迷整容的“整形中毒女”和一个天生丑颜的“素颜神”,一场车祸导致她们灵魂互换,开启了对“美”的重新定义。"
  },
  {
    "title": "锦衣卫之夺命奇书",
    "href": "details/movie-1546.html",
    "cover": "./46.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "古装推理",
      "连环杀人",
      "武打设计"
    ],
    "oneLine": "明朝万历年间,京城惊现“奇书杀人案”,死者死状均对应一本失传禁书中的插画。"
  },
  {
    "title": "中国新歌声第一季",
    "href": "details/movie-1547.html",
    "cover": "./47.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "综艺/真人秀",
    "category": "国产短剧",
    "tags": [
      "素人选秀",
      "导师抢人",
      "经典翻唱",
      "现象级综艺"
    ],
    "oneLine": "转椅改为战车,导师从高坡冲下,只为抢到一个能让自己起鸡皮疙瘩的声音。"
  },
  {
    "title": "落水姻缘",
    "href": "details/movie-1548.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "欢喜冤家",
      "身份错位",
      "海岛奇遇",
      "契约婚姻"
    ],
    "oneLine": "一场意外的落水,让恐婚女律师和负债公子在荒岛上被迫扮演夫妻,却发现了惊天骗局。"
  },
  {
    "title": "愤怒的爱情",
    "href": "details/movie-1549.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "家暴",
      "复仇",
      "姐弟恋",
      "极限拉扯",
      "救赎"
    ],
    "oneLine": "长期遭受家暴的妻子联手家暴男的情人,精心策划了一场完美的“意外死亡”,却在过程中爱上了彼此。"
  },
  {
    "title": "终物语",
    "href": "details/movie-1550.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "怪谈",
      "校园",
      "伪侦探",
      "时间回溯"
    ],
    "oneLine": "高中毕业前夜,一个自称“终末使者”的少女出现,要为男主角的三年青春逐一定罪。"
  },
  {
    "title": "女人和枪",
    "href": "details/movie-1551.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑色电影",
      "反转",
      "蛇蝎女",
      "小镇",
      "罪恶"
    ],
    "oneLine": "丈夫葬礼上,寡妇收到的不是慰问金,而是一把装在礼盒里的手枪。"
  },
  {
    "title": "诅咒录影",
    "href": "details/movie-1552.html",
    "cover": "./52.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "录像带",
      "谋杀",
      "韩国悬案",
      "民俗",
      "第一人称"
    ],
    "oneLine": "韩国一档网络探灵节目挖出一盘1992年的旧录像带,里面记录了一起“不可能发生”的连环谋杀。"
  },
  {
    "title": "暗金烂狗",
    "href": "details/movie-1553.html",
    "cover": "./53.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "高利贷",
      "底层剥削",
      "反英雄",
      "单元剧",
      "冷眼叙事"
    ],
    "oneLine": "一个专门放贷给“绝对还不起的人”的恶质金融业者,每一集都在见证一个家庭的彻底崩坏,而他从不拯救。"
  },
  {
    "title": "狂野生活",
    "href": "details/movie-1554.html",
    "cover": "./54.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "父女公路",
      "野外求生",
      "和解之旅"
    ],
    "oneLine": "叛逆女儿被迫跟随动物纪录片导演父亲进入亚马逊,却发现父亲的真实身份是前特种兵,且正在被追杀。"
  },
  {
    "title": "双鞭呼延灼",
    "href": "details/movie-1555.html",
    "cover": "./55.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "水浒传",
      "连环马",
      "武将传记",
      "冷兵器对战"
    ],
    "oneLine": "梁山泊最难对付的朝廷猛将,他的忠诚被高俅当成了笑话。"
  },
  {
    "title": "小黄人大眼萌粤语",
    "href": "details/movie-1556.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "香港/美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "小黄人",
      "粤语配音",
      "香港地标",
      "找主人",
      "爆笑"
    ],
    "oneLine": "凯文、斯图尔特和鲍勃意外流落香港,为了回到格鲁身边,它们竟误打误撞参加了龙舟比赛。"
  },
  {
    "title": "本内特的禅",
    "href": "details/movie-1557.html",
    "cover": "./57.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "职场",
      "冥想",
      "反内卷",
      "讽刺"
    ],
    "oneLine": "华尔街天才交易员被发配到冥想班,却发现竞争对手都在里面偷偷开悟。"
  },
  {
    "title": "苏格兰女王:玛丽一世",
    "href": "details/movie-1558.html",
    "cover": "./58.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "王权斗争",
      "伊丽莎白一世",
      "囚禁岁月",
      "女性政治"
    ],
    "oneLine": "不同于光鲜的历史剧,本剧聚焦玛丽一世被囚禁英格兰的最后十九年,权力、信仰与母性的终极拉扯。"
  },
  {
    "title": "美幸梦游仙境",
    "href": "details/movie-1559.html",
    "cover": "./59.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "少女",
      "梦境",
      "成长",
      "治愈",
      "爱丽丝"
    ],
    "oneLine": "一个被校园霸凌的少女在昏迷中坠入自己创造的“仙境”,每一关怪物都对应她的真实心理创伤。"
  },
  {
    "title": "一楼一故事",
    "href": "details/movie-1560.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "唐楼志异",
      "垂直社区",
      "邻里秘辛",
      "电梯停运"
    ],
    "oneLine": "一栋没有电梯的12层旧唐楼,每一层都藏着一个不可告人的交换协议。"
  },
  {
    "title": "菜鸟评审员",
    "href": "details/movie-1561.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "美食评审",
      "职场黑幕",
      "个人成长",
      "行业揭秘"
    ],
    "oneLine": "新人被选入米其林评审团,却发现这场看似公正的评选背后全是商业算计。"
  },
  {
    "title": "小巷风雨",
    "href": "details/movie-1562.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "年代变迁",
      "邻里",
      "坚韧"
    ],
    "oneLine": "一条南方小巷六十年的风雨变迁,三代女性的命运与一座城市的历史血脉相连。"
  },
  {
    "title": "天生好手",
    "href": "details/movie-1563.html",
    "cover": "./63.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "乒乓球",
      "逆袭",
      "师徒",
      "热血",
      "成长"
    ],
    "oneLine": "一位被开除体校的天才少年,在地下乒乓球赌局中打出了通往国家队的大门。"
  },
  {
    "title": "077情报员:核子间谍战",
    "href": "details/movie-1564.html",
    "cover": "./64.jpg",
    "year": "1967",
    "region": "香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "特工",
      "核危机",
      "黑白片",
      "孤胆英雄"
    ],
    "oneLine": "代号077的特工潜入敌对组织,却发现核弹目标竟是自己的上级机构。"
  },
  {
    "title": "给明日的遗言",
    "href": "details/movie-1565.html",
    "cover": "./65.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "遗书",
      "临终",
      "亲情修复",
      "催泪",
      "是枝裕和风"
    ],
    "oneLine": "母亲去世后,三兄妹在整理遗物时发现七封未寄出的信,收件人都是三十年后的他们。"
  },
  {
    "title": "特拉·威利:未知星球",
    "href": "details/movie-1566.html",
    "cover": "./66.jpg",
    "year": "2019",
    "region": "法国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "冒险",
      "儿童",
      "太空"
    ],
    "oneLine": "一个被称为“宇宙最强灾星”的孤儿被遗弃在神秘星球,他必须在这片恐龙和巨兽横行的土地上,修好飞船并找到回家的路。"
  },
  {
    "title": "猫头鹰的哭泣",
    "href": "details/movie-1567.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "小镇",
      "凶杀",
      "传说",
      "猫头鹰",
      "心理"
    ],
    "oneLine": "每当小镇教堂的猫头鹰雕像发出哭声,当夜必有人离奇死亡。"
  },
  {
    "title": "大唐迷雾",
    "href": "details/movie-1568.html",
    "cover": "./68.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "狄仁杰",
      "梦游",
      "幻术",
      "破案"
    ],
    "oneLine": "洛阳城连续有人梦游杀人,狄仁杰发现凶手的作案手法竟全部来自他正在撰写的《断狱指南》。"
  },
  {
    "title": "无法抗拒的他日版",
    "href": "details/movie-1569.html",
    "cover": "./69.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "翻拍",
      "渣男恋爱",
      "女性觉醒"
    ],
    "oneLine": "翻拍自大热韩剧,日版将背景改为东京美大,那位不想恋爱只想调情的“蝴蝶男”让女主一次次沦陷。"
  },
  {
    "title": "普通人1980",
    "href": "details/movie-1570.html",
    "cover": "./70.jpg",
    "year": "1980",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "家庭悲剧",
      "心理创伤",
      "救赎",
      "经典"
    ],
    "oneLine": "一场大儿子的意外溺亡,让这个中产家庭的每个成员都活成了一座孤岛。"
  },
  {
    "title": "惊叫大电影",
    "href": "details/movie-1571.html",
    "cover": "./71.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "元叙事",
      "血浆搞笑",
      "烂片之王",
      "观众互动"
    ],
    "oneLine": "一部史上最烂的恐怖片在影院首映时,片中的女鬼突然打破第四面墙,开始追杀观众。"
  },
  {
    "title": "法王艳史",
    "href": "details/movie-1572.html",
    "cover": "./72.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "僧王",
      "权力博弈",
      "禁忌之恋",
      "朝堂风云"
    ],
    "oneLine": "一代法王重返皇宫查案,却在旧爱与皇权之间陷入生死两难。"
  },
  {
    "title": "新·奥特曼",
    "href": "details/movie-1573.html",
    "cover": "./73.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "经典重启",
      "巨大化英雄",
      "哲学思辨",
      "高燃特效",
      "泽塔"
    ],
    "oneLine": "新一代奥特曼不仅面对地球怪兽,更要面对“人类是否值得拯救”的终极审判。"
  },
  {
    "title": "果戈里:复仇",
    "href": "details/movie-1574.html",
    "cover": "./74.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "果戈里",
      "黑暗骑士",
      "哥特",
      "探案"
    ],
    "oneLine": "著名作家果戈里化身黑暗侦探,在圣彼得堡的暗黑下水道里,追杀杀死他恋人的“黑僧侣”。"
  },
  {
    "title": "夺命十二小时",
    "href": "details/movie-1575.html",
    "cover": "./75.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "极限营救",
      "复仇",
      "暴风雪山庄",
      "反转"
    ],
    "oneLine": "前法医为救被绑架的女儿,必须在12小时内从一栋满是杀手的烂尾楼里找到唯一的解药。"
  },
  {
    "title": "死神少爷与黑女仆",
    "href": "details/movie-1576.html",
    "cover": "./76.jpg",
    "year": "2021",
    "region": "日本",
    "type": "动画剧集",
    "category": "动画少儿",
    "tags": [
      "诅咒",
      "主仆恋",
      "发糖",
      "纯爱"
    ],
    "oneLine": "被诅咒触碰即死的贵族少爷,与从小侍奉他的黑女仆之间,永远隔着一拳距离的恋爱。"
  },
  {
    "title": "塞维利亚理发师历险记",
    "href": "details/movie-1577.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "理发师",
      "歌剧改编",
      "中世纪",
      "乌龙"
    ],
    "oneLine": "塞维利亚最聪明的话痨理发师,意外卷入贵族爱情与海盗宝藏的双重闹剧。"
  },
  {
    "title": "海岛之恋",
    "href": "details/movie-1578.html",
    "cover": "./78.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "海岛",
      "治愈",
      "前任",
      "重逢"
    ],
    "oneLine": "一对分手五年的情侣,分别报名了同一个无人岛求生节目,却发现岛上只有他们两个人。"
  },
  {
    "title": "万圣夜怪谭",
    "href": "details/movie-1579.html",
    "cover": "./79.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "万圣节",
      "分段式",
      "都市传说",
      "糖果",
      "伪装"
    ],
    "oneLine": "万圣夜四个孩子的“不给糖就捣蛋”之路,每敲开一扇门都是一个恐怖故事。"
  },
  {
    "title": "荒村公寓",
    "href": "details/movie-1580.html",
    "cover": "./80.jpg",
    "year": "2010",
    "region": "中国大陆",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "惊悚",
      "传说",
      "诅咒",
      "心理"
    ],
    "oneLine": "一群大学生为了探险,住进了传说中半夜会多出一级台阶的荒村公寓,从此噩梦缠身。"
  },
  {
    "title": "说来有点可笑",
    "href": "details/movie-1581.html",
    "cover": "./81.jpg",
    "year": "2010",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "精神科病房",
      "青春焦虑",
      "温暖治愈"
    ],
    "oneLine": "压力过大的高中生误入成人精神科病房,却发现这里的“疯子”比外面任何一个正常人都有趣。"
  },
  {
    "title": "迟到的真相",
    "href": "details/movie-1582.html",
    "cover": "./82.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "冤案",
      "老警察",
      "执着",
      "腐败",
      "正义"
    ],
    "oneLine": "一桩尘封十七年的冤案,一个被开除的老警察,他用余生证明:真相可能会迟到,但永远不会缺席。"
  },
  {
    "title": "没有脸孔的老大",
    "href": "details/movie-1583.html",
    "cover": "./83.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑帮",
      "失忆",
      "替身",
      "阶层",
      "实验电影"
    ],
    "oneLine": "一个没有脸、没有声音、没有名字的黑帮老大,靠手下轮流模仿他,统治地下世界十年。"
  },
  {
    "title": "热爱十七",
    "href": "details/movie-1584.html",
    "cover": "./84.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "游泳队",
      "出柜",
      "霸凌",
      "救赎"
    ],
    "oneLine": "17岁游泳少年被全校霸凌,霸凌他的头目却在深夜偷偷吻了他。"
  },
  {
    "title": "鬣狗之路",
    "href": "details/movie-1585.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑帮",
      "律师",
      "以暴制暴",
      "西装暴徒",
      "复仇"
    ],
    "oneLine": "专门替恶人辩护的律师,被仇家割喉失声后,转而用法律之外的手段将整个黑帮送进地狱。"
  },
  {
    "title": "神奇动物:格林德沃之罪",
    "href": "details/movie-1586.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "魔法世界",
      "神奇动物",
      "格林德沃",
      "邓布利多",
      "大战"
    ],
    "oneLine": "格林德沃越狱后,纽特受邓布利多之托前往亚洲丛林,寻找能预知未来的上古神兽。"
  },
  {
    "title": "喜雀",
    "href": "details/movie-1587.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "乡土",
      "荒诞",
      "拆迁",
      "老人与鸟",
      "现实题材"
    ],
    "oneLine": "农村独居老头的鹩哥学会了说“拆”,一夜之间,他的破房子成了开发商眼中的金矿。"
  },
  {
    "title": "在池中",
    "href": "details/movie-1588.html",
    "cover": "./88.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "社会寓言",
      "密闭空间",
      "心理博弈",
      "极简主义"
    ],
    "oneLine": "七个互不相识的人从同一张手术台上醒来,全部失忆,只知道自己身在一个慢慢灌满水的巨大泳池底部。"
  },
  {
    "title": "怎么就,结婚了",
    "href": "details/movie-1589.html",
    "cover": "./89.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "闪婚",
      "合约恋爱",
      "财阀"
    ],
    "oneLine": "为了继承家业,女总裁与穷学生签下“百日婚姻合约”,结果第一百零一天,两人都违约了。"
  },
  {
    "title": "胡涂司机",
    "href": "details/movie-1590.html",
    "cover": "./90.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "出租车",
      "连环巧合",
      "小人物",
      "城市夜景"
    ],
    "oneLine": "一个脸盲症出租车司机一夜之间接连载到杀手、毒贩和逃犯,却浑然不觉。"
  },
  {
    "title": "大口仔遇福星",
    "href": "details/movie-1591.html",
    "cover": "./91.jpg",
    "year": "1987",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "五福星",
      "搞笑",
      "市井英雄",
      "老港片"
    ],
    "oneLine": "大口仔被黑帮追杀,误打误撞遇上一群小人物福星,爆笑反杀闹翻天。"
  },
  {
    "title": "临时决斗",
    "href": "details/movie-1592.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "功夫",
      "草根",
      "逆袭",
      "港味"
    ],
    "oneLine": "一个外卖骑手被卷入黑帮临时发起的“街霸赛”,赢了奖金,输了自由。"
  },
  {
    "title": "再铸辉煌",
    "href": "details/movie-1593.html",
    "cover": "./93.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "体育竞技",
      "振兴三大球",
      "年代变迁",
      "师徒传承",
      "热血逆袭"
    ],
    "oneLine": "一支被解散二十年的城市女篮,由五个失意的中年女人重新组建,目标是全国冠军。"
  },
  {
    "title": "贼心魅影",
    "href": "details/movie-1594.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "盗贼",
      "替身",
      "猫鼠游戏",
      "反转"
    ],
    "oneLine": "顶级女飞贼金盆洗手后成为保安顾问,却被派去抓一个和自己十年前作案手法完全一样的“模仿犯”。"
  },
  {
    "title": "露营悄悄话",
    "href": "details/movie-1595.html",
    "cover": "./95.jpg",
    "year": "2021",
    "region": "韩国",
    "type": "综艺/真人秀",
    "category": "喜剧家庭",
    "tags": [
      "露营",
      "闺蜜旅行",
      "美食",
      "慢综艺"
    ],
    "oneLine": "几个女明星深夜围在篝火旁,聊八卦、聊心事、聊那些不能说的秘密。"
  },
  {
    "title": "奇怪的她",
    "href": "details/movie-1596.html",
    "cover": "./96.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "返老还童",
      "老人",
      "梦想",
      "两代和解"
    ],
    "oneLine": "74岁的毒舌奶奶被家人嫌弃,在一家“青春照相馆”拍照后,一夜之间回到了20岁的模样。"
  },
  {
    "title": "芭比之狗狗奇遇记",
    "href": "details/movie-1597.html",
    "cover": "./97.jpg",
    "year": "2021",
    "region": "美国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "芭比",
      "狗狗",
      "冒险",
      "友谊",
      "歌舞"
    ],
    "oneLine": "芭比和她的姐妹们带着狗狗去野营,不料狗狗们意外启动了一辆藏有古代地图的旧房车。"
  },
  {
    "title": "义士艳史",
    "href": "details/movie-1598.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "江湖",
      "禁忌之恋",
      "复仇",
      "风月"
    ],
    "oneLine": "背负血海深仇的义士潜入了仇家,却爱上了仇家那位眼盲心不盲的妾室。"
  },
  {
    "title": "阿姐万万醉",
    "href": "details/movie-1599.html",
    "cover": "./99.jpg",
    "year": "2017",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女版醉拳",
      "师奶",
      "黑帮",
      "市井英雄",
      "无厘头"
    ],
    "oneLine": "菜市场卖鱼阿姐练就“醉拳刀法”,一喝醉就打遍深水埗无敌手,直到黑帮绑架了她的儿子。"
  },
  {
    "title": "料理的秘密",
    "href": "details/movie-1600.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "百年老店",
      "厨艺传承",
      "下毒疑云",
      "复仇",
      "舌尖上的中国"
    ],
    "oneLine": "百年老字号餐厅的掌门人突然暴毙,留下的遗言只有一道失传菜谱,四个徒弟必须在七天内还原这道菜,才能揭开死亡真相。"
  },
  {
    "title": "邪恶的蕾丝莉",
    "href": "details/movie-1601.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "恶童",
      "寄宿家庭",
      "心理操控",
      "反转",
      "独立恐怖"
    ],
    "oneLine": "收养了一个甜美孤女后,这家人发现恐怖的不是鬼魂,而是她完美无瑕的微笑。"
  },
  {
    "title": "地狱通话",
    "href": "details/movie-1602.html",
    "cover": "./102.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "手机",
      "鬼魂",
      "诅咒"
    ],
    "oneLine": "一款可以联系到死去亲人的App风靡网络,但每次通话后,用户都必须满足死者的一个遗愿。"
  },
  {
    "title": "燃情追踪",
    "href": "details/movie-1603.html",
    "cover": "./103.jpg",
    "year": "2016",
    "region": "英国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "女间谍",
      "军情五处",
      "反恐",
      "情感操控"
    ],
    "oneLine": "军情五处最年轻的女特工,奉命色诱一名疑似恐怖分子的金融家,却发现自己真的爱上了他。"
  },
  {
    "title": "故乡",
    "href": "details/movie-1604.html",
    "cover": "./104.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "回不去的家",
      "城乡变迁",
      "父辈的晚年",
      "拆迁",
      "方言电影"
    ],
    "oneLine": "离乡二十年后回来办理父亲后事,却发现整个村子只存在于一张老照片里。"
  },
  {
    "title": "陌生人:第二章",
    "href": "details/movie-1605.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "入侵",
      "面具",
      "生存",
      "血腥"
    ],
    "oneLine": "前作逃生的女主隐居林中小屋,却发现那群面具暴徒正通过网络直播,向千万观众展示她的新一轮“狩猎”。"
  },
  {
    "title": "旋风十一人",
    "href": "details/movie-1606.html",
    "cover": "./106.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "足球",
      "胡歌",
      "校园",
      "热血",
      "教练"
    ],
    "oneLine": "一个因假球风波身败名裂的过气教练,带着一支连小组赛都出不了的菜鸟校队,杀向全国决赛。"
  },
  {
    "title": "高丽契丹战争",
    "href": "details/movie-1607.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "史诗",
      "民族",
      "权谋",
      "大制作"
    ],
    "oneLine": "十世纪,高丽王朝以残兵败将对抗契丹百万铁骑,而真正的战场在谈判桌上和三军主帅的内心。"
  },
  {
    "title": "赌命为王",
    "href": "details/movie-1608.html",
    "cover": "./108.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "赌博",
      "卧底",
      "家族",
      "背叛"
    ],
    "oneLine": "前数学天才为救妹妹潜入东南亚地下赌王家族,却发现自己才是赌王失踪多年的亲生儿子。"
  },
  {
    "title": "珍爱热线",
    "href": "details/movie-1609.html",
    "cover": "./109.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "电台",
      "深夜节目",
      "治愈",
      "陌生来电"
    ],
    "oneLine": "深夜电台主持人接到一通匿名来电,对方哭着讲述的故事,竟与自己二十年前的初恋完全吻合。"
  },
  {
    "title": "13号子弹",
    "href": "details/movie-1610.html",
    "cover": "./110.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "枪战",
      "复仇",
      "警匪",
      "硬汉"
    ],
    "oneLine": "警探左轮手枪里的第13号子弹是一颗哑弹,正是这颗没响的子弹,让他追查到了警局内部的惊天黑幕。"
  },
  {
    "title": "甜蜜的事业",
    "href": "details/movie-1611.html",
    "cover": "./111.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "乡村振兴",
      "直播带货",
      "返乡青年"
    ],
    "oneLine": "三个在大城市失败的年轻人回到广西山沟沟,发誓要用甘蔗种出一家上市公司。"
  },
  {
    "title": "阿班与裘迪",
    "href": "details/movie-1612.html",
    "cover": "./112.jpg",
    "year": "2028",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "音乐公路",
      "民谣",
      "流浪",
      "治愈"
    ],
    "oneLine": "失意的民谣歌手与患绝症的女孩结伴横穿美国,只为让她听一场最后的演唱会。"
  },
  {
    "title": "新岳父大人之三喜临门",
    "href": "details/movie-1613.html",
    "cover": "./113.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "中年危机",
      "多代同堂",
      "乌龙事件",
      "温情搞笑"
    ],
    "oneLine": "刚接受女儿出嫁的老爸,突然迎来儿子闪婚和父亲黄昏恋,家庭地位一降再降。"
  },
  {
    "title": "美女与怪物",
    "href": "details/movie-1614.html",
    "cover": "./114.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "病态美",
      "反转童话",
      "身体恐怖"
    ],
    "oneLine": "她绑架了怪物,想让它爱上自己;却不知道自己正在变成下一个怪物。"
  },
  {
    "title": "我在等你",
    "href": "details/movie-1615.html",
    "cover": "./115.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "时间循环",
      "书店",
      "绝症",
      "手写信",
      "纯爱"
    ],
    "oneLine": "男主确诊渐冻症那天,女友留下一封信消失,第二天却以陌生人的身份重新出现在他面前。"
  },
  {
    "title": "破浪而出",
    "href": "details/movie-1616.html",
    "cover": "./116.jpg",
    "year": "2025",
    "region": "挪威",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "海啸",
      "峡湾",
      "极限求生",
      "次生灾害"
    ],
    "oneLine": "地质学家预测的滑坡海啸提前了三分钟来袭,正在峡湾底部清理二战沉船油污的潜水员成了离死神最近的人。"
  },
  {
    "title": "风尘艳侣",
    "href": "details/movie-1617.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "舞女",
      "杀手",
      "九龙城寨",
      "宿命"
    ],
    "oneLine": "她是九龙城寨最红的舞女,他是城寨最冷酷的杀手,两人相约干掉对方背后的老大后私奔。"
  },
  {
    "title": "好汉三条半",
    "href": "details/movie-1618.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "东北",
      "下岗再就业",
      "笨贼",
      "私人安保",
      "废柴联盟"
    ],
    "oneLine": "三个东北下岗大叔凑钱开了一家“好汉安保公司”,第一个客户是半条命的老骗子,要他们保护一个价值五毛钱的瓷瓶。"
  },
  {
    "title": "重庆",
    "href": "details/movie-1619.html",
    "cover": "./119.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "山城",
      "黑色幽默",
      "多线叙事",
      "底层生存"
    ],
    "oneLine": "一辆失控的轻轨列车,将三个命运迥异的重庆人拖进一场环环相扣的黑色漩涡。"
  },
  {
    "title": "圣人莫德",
    "href": "details/movie-1620.html",
    "cover": "./120.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "宗教狂热",
      "护工",
      "信仰",
      "肉体与灵魂"
    ],
    "oneLine": "一名虔诚的临终关怀护工,坚信自己受命拯救一名绝症舞者的灵魂,手段逐渐失控。"
  },
  {
    "title": "流氓世家",
    "href": "details/movie-1621.html",
    "cover": "./121.jpg",
    "year": "1989",
    "region": "香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "黑帮",
      "家族",
      "宿命",
      "港产片"
    ],
    "oneLine": "出身黑道世家的大学生拼命想洗白,但为了给被打成植物人的警察哥哥报仇,他拿起了比父辈更狠的刀。"
  },
  {
    "title": "奇异生物变僵尸",
    "href": "details/movie-1622.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "变异僵尸",
      "生物实验",
      "末世求生",
      "怪物设计",
      "血浆片"
    ],
    "oneLine": "一种寄生真菌让所有变异生物死后都会变成僵尸,人类成了食物链最底端。"
  },
  {
    "title": "新来的美女邻居",
    "href": "details/movie-1623.html",
    "cover": "./123.jpg",
    "year": "2026",
    "region": "西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "窥视",
      "反转",
      "公寓楼",
      "心理战",
      "R级"
    ],
    "oneLine": "中年作家对门搬来一位神秘美女,他用望远镜偷窥她的生活,却发现她的每一个行为都和他刚写完的小说情节一模一样。"
  },
  {
    "title": "幽魂奇恋",
    "href": "details/movie-1624.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "人鬼恋",
      "冥婚",
      "捉妖师",
      "悲剧"
    ],
    "oneLine": "民国捉妖师之女被迫与富家少爷冥婚,却发现未婚夫的鬼魂竟是十年前救她的书童。"
  },
  {
    "title": "度假村兼职",
    "href": "details/movie-1625.html",
    "cover": "./125.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "打工度假",
      "荒岛",
      "怪咖同事",
      "黑色幽默",
      "命案"
    ],
    "oneLine": "女主角到海岛度假村打工换宿,却发现前六任兼职生都“意外”死亡,她是第七任。"
  },
  {
    "title": "宝宝进城",
    "href": "details/movie-1626.html",
    "cover": "./126.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "婴儿",
      "冒险",
      "萌宠",
      "动画"
    ],
    "oneLine": "一岁半的天才宝宝为了找回丢失的安抚奶嘴,驾驶着婴儿车闯入了大都会。"
  },
  {
    "title": "高卢勇士传",
    "href": "details/movie-1627.html",
    "cover": "./127.jpg",
    "year": "2006",
    "region": "法国",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "高卢英雄",
      "魔法药水",
      "罗马",
      "法国漫画",
      "恶搞"
    ],
    "oneLine": "高卢小村庄的勇士喝了魔法药水力大无穷,为了对抗凯撒,他们造了一座会飞的罗马竞技场。"
  },
  {
    "title": "狂赌之渊第一季",
    "href": "details/movie-1628.html",
    "cover": "./128.jpg",
    "year": "2019",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "漫改",
      "赌博",
      "颜艺",
      "校园",
      "疯狂"
    ],
    "oneLine": "在金钱与阶级支配的私立百花王学园,神秘转学生蛇喰梦子用疯狂的赌术撕碎了一切虚伪的规则。"
  },
  {
    "title": "军人魂",
    "href": "details/movie-1629.html",
    "cover": "./129.jpg",
    "year": "2020",
    "region": "中国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "抗战老兵",
      "回忆录",
      "阵地战",
      "兄弟连",
      "家国情怀"
    ],
    "oneLine": "一封遗书揭开尘封往事:一个连队被命令死守阵地八小时,最终只有一人活了下来。"
  },
  {
    "title": "金融大王",
    "href": "details/movie-1630.html",
    "cover": "./130.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "华尔街",
      "白手起家",
      "金融诈骗",
      "黑色幽默"
    ],
    "oneLine": "一个高中辍学的披萨外送员,用三年时间骗倒半个华尔街,最终却被自己的“善良”绊倒。"
  },
  {
    "title": "7月7日晴",
    "href": "details/movie-1631.html",
    "cover": "./131.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "七夕",
      "时间胶囊",
      "穿越",
      "短信",
      "错过"
    ],
    "oneLine": "结婚前三天,她收到一封来自十年前的短信:“请在7月7日晴那天,替我去见你。"
  },
  {
    "title": "老兄们",
    "href": "details/movie-1632.html",
    "cover": "./132.jpg",
    "year": "2019",
    "region": "韩国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "兄弟情",
      "中年危机",
      "黑帮喜剧",
      "釜山",
      "义气"
    ],
    "oneLine": "曾经叱咤风云的釜山黑帮四兄弟,二十年后分别成了快递员、保险员、炸鸡店老板和囚犯。"
  },
  {
    "title": "毕打自己人粤语",
    "href": "details/movie-1633.html",
    "cover": "./133.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "杂志社",
      "粤语",
      "职场",
      "老中青"
    ],
    "oneLine": "一家即将倒闭的八卦杂志社,五个性格迥异的员工决定自己写稿自己卖,救活它。"
  },
  {
    "title": "小小爱火花",
    "href": "details/movie-1634.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "动画片",
    "category": "喜剧家庭",
    "tags": [
      "火柴人",
      "幼儿园",
      "情绪管理",
      "第一次心动",
      "治愈系"
    ],
    "oneLine": "幼儿园里一根小火柴头被风吹灭了火焰,他必须找到人生中第一颗“爱火花”才能重新燃烧。"
  },
  {
    "title": "星光闪耀的少年",
    "href": "details/movie-1635.html",
    "cover": "./135.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "选秀",
      "练习生",
      "出道实录",
      "兄弟情"
    ],
    "oneLine": "六位来自不同经纪公司的末位练习生,被迫组成“垃圾回收站”组合,却意外走上了顶级偶像之路。"
  },
  {
    "title": "布朗克斯的故事",
    "href": "details/movie-1636.html",
    "cover": "./136.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "成长",
      "黑帮",
      "父子情",
      "街头智慧",
      "怀旧"
    ],
    "oneLine": "九岁男孩在布朗克斯区目睹黑帮杀人,却意外被黑帮老大收为门徒,陷入良知与崇拜的挣扎。"
  },
  {
    "title": "通向地狱的后门",
    "href": "details/movie-1637.html",
    "cover": "./137.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "密室逃脱",
      "邪教",
      "直播",
      "反转",
      "血腥"
    ],
    "oneLine": "六个陌生人参加一场高额奖金的密室逃脱,却发现每次开门都有一人死去。"
  },
  {
    "title": "私刑枷锁",
    "href": "details/movie-1638.html",
    "cover": "./138.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "义警",
      "法律",
      "复仇",
      "道德困境"
    ],
    "oneLine": "女儿被奸杀,司法却因证据不足释放凶手,父亲戴上枷锁游街:请公民投票决定是否杀他。"
  },
  {
    "title": "道森10号岛",
    "href": "details/movie-1639.html",
    "cover": "./139.jpg",
    "year": "2009",
    "region": "英国/阿根廷",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "政治",
      "监狱",
      "真实事件改编",
      "人性"
    ],
    "oneLine": "1982年英阿马岛战争爆发,一群被俘的阿根廷士兵被关押在苏格兰的孤岛监狱,看守只有三人。"
  },
  {
    "title": "海底城市",
    "href": "details/movie-1640.html",
    "cover": "./140.jpg",
    "year": "2027",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "水下文明",
      "末世",
      "探索",
      "生态科幻"
    ],
    "oneLine": "海平面上升淹没大陆,幸存者在海底发现了一座史前高科技城市,那里的居民全是透明人。"
  },
  {
    "title": "外出用餐3:天菜吃到饱",
    "href": "details/movie-1641.html",
    "cover": "./141.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧情片",
    "category": "都市爱情",
    "tags": [
      "约会文化",
      "自我认同",
      "美食隐喻",
      "开放式关系",
      "都市喜剧"
    ],
    "oneLine": "一位恐婚的美食博主与一位相信真爱的厨师打赌,要在三个月内吃遍全城“天菜”,却发现心动无法用卡路里计算。"
  },
  {
    "title": "憨姑爷粤语",
    "href": "details/movie-1642.html",
    "cover": "./142.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "粤语",
      "豪门",
      "装傻",
      "温情"
    ],
    "oneLine": "一个装傻的穷小子被当作“憨居佬”入赘豪门,却用大智若愚的方式,把各怀鬼胎的一家人治得服服帖帖。"
  },
  {
    "title": "卓雅",
    "href": "details/movie-1643.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "俄罗斯",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "二战",
      "苏联女英雄",
      "游击战",
      "爱国主义",
      "真实事件"
    ],
    "oneLine": "年仅18岁的苏联女游击队员卓雅,在被德军俘虏后,用生命诠释了何为不屈与信仰。"
  },
  {
    "title": "融雪",
    "href": "details/movie-1644.html",
    "cover": "./144.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "东北",
      "凶杀",
      "回忆",
      "救赎"
    ],
    "oneLine": "2023年,东北小城的积雪融化,露出了一具白骨,牵扯出1999年跨世纪之夜的五个好友的秘密。"
  },
  {
    "title": "青年干探",
    "href": "details/movie-1645.html",
    "cover": "./145.jpg",
    "year": "2024",
    "region": "香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "警校",
      "卧底",
      "校园暴力",
      "热血"
    ],
    "oneLine": "警校最废柴的四人组被选为“天选卧底”,潜入高校调查黑帮毒品案。"
  },
  {
    "title": "米兰制造",
    "href": "details/movie-1646.html",
    "cover": "./146.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "职场",
      "奋斗",
      "时装周",
      "女性成长"
    ],
    "oneLine": "小镇女孩误打误撞进入米兰顶尖时装屋,白天被魔鬼主编折磨,夜晚在缝纫机前自学成才。"
  },
  {
    "title": "连锁大阴谋",
    "href": "details/movie-1647.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "犯罪",
      "悬疑",
      "都市传说",
      "暗网"
    ],
    "oneLine": "一家网红连锁洗衣店,表面洗衣服,暗网接单“洗人命”,而取货凭证是你的指纹。"
  },
  {
    "title": "杀手正在召唤",
    "href": "details/movie-1648.html",
    "cover": "./148.jpg",
    "year": "2026",
    "region": "韩国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "电话亭",
      "赏金猎人",
      "复眼杀手"
    ],
    "oneLine": "午夜接错电话,外卖员被告知自己已被悬赏,全城的疯子杀手都在赶来杀他的路上。"
  },
  {
    "title": "久久戒酒",
    "href": "details/movie-1649.html",
    "cover": "./149.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "戒酒",
      "互助会",
      "小人物",
      "中年危机"
    ],
    "oneLine": "九个酒鬼在戒酒互助会上发誓再也不喝了,散会后却一起进了同一家酒馆,尴尬地打了个照面。"
  },
  {
    "title": "鬼界超级混蛋",
    "href": "details/movie-1650.html",
    "cover": "./150.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "地狱",
      "摇滚",
      "叛逆",
      "神明",
      "重组家庭"
    ],
    "oneLine": "阎魔王的叛逆女儿为了阻止无聊的天国吞并地狱,组建了一支由史上最恶亡灵组成的摇滚乐队。"
  },
  {
    "title": "守岛人",
    "href": "details/movie-1651.html",
    "cover": "./1.jpg",
    "year": "2020",
    "region": "中国",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "孤岛",
      "坚守",
      "父子",
      "风暴",
      "传承"
    ],
    "oneLine": "台风夜,老守岛人病倒,叛逆儿子必须在失联孤岛上独自扛起灯塔。"
  },
  {
    "title": "拜托了!别宠我",
    "href": "details/movie-1652.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "古装甜宠",
    "tags": [
      "反套路",
      "穿书",
      "傲娇王爷",
      "契约情侣",
      "搞笑"
    ],
    "oneLine": "炮灰女配穿书后发誓不碰男主,谁知男主有“读心术”,她每句“别宠我”都被听成“求抱抱”。"
  },
  {
    "title": "身为女主角!",
    "href": "details/movie-1653.html",
    "cover": "./3.jpg",
    "year": "2023",
    "region": "日本",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "娱乐圈",
      "逆袭",
      "伪纪录片",
      "职场",
      "反套路"
    ],
    "oneLine": "一个习惯在别人故事里当配角的龙套演员,意外被选中扮演“真实恋爱综艺”的唯一女主角。"
  },
  {
    "title": "自梳",
    "href": "details/movie-1654.html",
    "cover": "./4.jpg",
    "year": "2026",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女同",
      "民国",
      "珠三角往事"
    ],
    "oneLine": "1930 年代广东顺德,两个自梳女在丝厂里约定终身不嫁,却同时爱上了一个缫丝机器的男技师。"
  },
  {
    "title": "我爱钟无艳",
    "href": "details/movie-1655.html",
    "cover": "./5.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "女强",
      "丑女",
      "反转",
      "齐宣王"
    ],
    "oneLine": "史上最丑的王妃,用智商碾压了整个后宫。"
  },
  {
    "title": "海军陆战队员2",
    "href": "details/movie-1656.html",
    "cover": "./6.jpg",
    "year": "2009",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "硬汉",
      "孤胆英雄",
      "反恐",
      "丛林战"
    ],
    "oneLine": "一名退役海军陆战队员在东南亚度假时,妻子被当地恐怖组织绑架,他必须用最致命的丛林战术展开营救。"
  },
  {
    "title": "哦!我的皇帝陛下第二季",
    "href": "details/movie-1657.html",
    "cover": "./7.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "穿越",
      "偶像",
      "沙雕甜宠",
      "星座"
    ],
    "oneLine": "水逆少女洛菲菲回到黄道国,发现十二星座男神们集体失忆,她必须帮他们找回记忆以免世界崩塌。"
  },
  {
    "title": "危鸡总动员",
    "href": "details/movie-1658.html",
    "cover": "./8.jpg",
    "year": "2023",
    "region": "美国/加拿大",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "农场",
      "阴谋",
      "快餐",
      "逃亡"
    ],
    "oneLine": "一只即将被做成炸鸡块的农场母鸡,带领一群家禽越狱并揭露快餐巨头背后的克隆阴谋。"
  },
  {
    "title": "都会交响曲",
    "href": "details/movie-1659.html",
    "cover": "./9.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "纽约",
      "交响乐团",
      "街头艺人",
      "梦想"
    ],
    "oneLine": "纽约地铁里七个互不相识的街头艺人,发现他们各自演奏的片段,拼起来是一首完整的交响曲。"
  },
  {
    "title": "车手",
    "href": "details/movie-1660.html",
    "cover": "./10.jpg",
    "year": "2012",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "漂移",
      "警匪",
      "隐形车",
      "窄巷",
      "杜琪峰"
    ],
    "oneLine": "驾驶技术超群的交警阿翔,与驾驶“隐形车”的亡命劫匪在午夜街头展开猫鼠游戏。"
  },
  {
    "title": "明星志愿2",
    "href": "details/movie-1661.html",
    "cover": "./11.jpg",
    "year": "2019",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "娱乐圈",
      "练习生",
      "经纪人",
      "出道",
      "友情岁月"
    ],
    "oneLine": "闪耀舞台的背后,是无数个被汗水与泪水浸透的夜晚。"
  },
  {
    "title": "流氓太保",
    "href": "details/movie-1662.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "英伦黑帮",
      "父子传承",
      "叛逆少年",
      "复古70年代"
    ],
    "oneLine": "1970年代伦敦东区,一个14岁男孩想成为最狠的帮派老大,却发现父亲只是个收保护费的懦夫。"
  },
  {
    "title": "拜托,请你爱我",
    "href": "details/movie-1663.html",
    "cover": "./13.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "契约婚姻",
      "先婚后爱",
      "职场恋情",
      "甜宠"
    ],
    "oneLine": "毒舌女律师为了打赢一场遗产官司,不得不假装与死对头男明星结婚,结果假戏真做成了全网最火的CP。"
  },
  {
    "title": "凹凸魔女的亲子日常",
    "href": "details/movie-1664.html",
    "cover": "./14.jpg",
    "year": "2025",
    "region": "日本",
    "type": "动画",
    "category": "喜剧家庭",
    "tags": [
      "魔女",
      "母女",
      "治愈",
      "搞笑"
    ],
    "oneLine": "最强魔女捡到人类弃婴,笨拙养大后,女儿的身高和魔力都“凹凸”反了。"
  },
  {
    "title": "荒岛甜心",
    "href": "details/movie-1665.html",
    "cover": "./15.jpg",
    "year": "2025",
    "region": "澳大利亚",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "荒岛",
      "心理惊悚",
      "女性",
      "寄生虫",
      "反转"
    ],
    "oneLine": "她以为救自己的是爱慕已久的植物学家,却发现对方正试图将自己培育成“花肥”。"
  },
  {
    "title": "殉道者",
    "href": "details/movie-1666.html",
    "cover": "./16.jpg",
    "year": "2008",
    "region": "法国/加拿大",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "新法极恐",
      "肉体恐怖",
      "宗教哲学",
      "精神摧毁"
    ],
    "oneLine": "一个神秘组织绑架年轻女性,用极致折磨让她们看见“死后世界”,然后记录下死前的尖叫。"
  },
  {
    "title": "捷克梦",
    "href": "details/movie-1667.html",
    "cover": "./17.jpg",
    "year": "2026",
    "region": "捷克/斯洛伐克",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "东欧转型",
      "梦想与现实",
      "荒诞"
    ],
    "oneLine": "布拉格的一名清洁工中了彩票头奖,却发现奖金只是一张前往“西方极乐世界”的单程票。"
  },
  {
    "title": "间谍风一号",
    "href": "details/movie-1668.html",
    "cover": "./18.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "民国",
      "军统",
      "无线电",
      "双面间谍"
    ],
    "oneLine": "1944年上海,一个代号“风一号”的神秘电台向重庆发出警告:“军统高层有内鬼,代号‘狐’。"
  },
  {
    "title": "如影随形2016",
    "href": "details/movie-1669.html",
    "cover": "./19.jpg",
    "year": "2016",
    "region": "美国/加拿大",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "双胞胎",
      "失踪",
      "记忆置换",
      "心理操控"
    ],
    "oneLine": "孪生妹妹失踪七年后突然回家,但姐姐发现她的所有记忆,都是照着自己丢失的日记本念出来的。"
  },
  {
    "title": "噢,亲爱的莫妮卡",
    "href": "details/movie-1670.html",
    "cover": "./20.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "中年",
      "婚外情",
      "日记",
      "笑中带泪",
      "开放式"
    ],
    "oneLine": "一个中年男人在和妻子分居期间爱上了名叫莫妮卡的AI助手,而真正的莫妮卡突然出现了。"
  },
  {
    "title": "死后人人爱",
    "href": "details/movie-1671.html",
    "cover": "./21.jpg",
    "year": "2025",
    "region": "法国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "灵魂出窍",
      "黑色幽默",
      "社交媒体",
      "假面人生"
    ],
    "oneLine": "一个自恋的网红博主意外身亡,发现只有揭露自己生前的虚伪,灵魂才能升天,但没人愿意相信那个真实的他。"
  },
  {
    "title": "最后的歌舞女郎",
    "href": "details/movie-1672.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "昭和",
      "脱衣舞",
      "尊严",
      "时代挽歌"
    ],
    "oneLine": "70岁的脱衣舞娘在剧场被拆除的前夜,决定穿回60年前的戏服,跳完最后一场脱衣舞。"
  },
  {
    "title": "三次为定",
    "href": "details/movie-1673.html",
    "cover": "./23.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "超能力",
      "约会",
      "后悔药",
      "都市男女",
      "奇遇"
    ],
    "oneLine": "大龄女青年获得超能力:每段感情可以回到过去三次,她试图用这三次机会找到完美男友。"
  },
  {
    "title": "加油喜事",
    "href": "details/movie-1674.html",
    "cover": "./24.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "婚礼",
      "乌龙",
      "两代矛盾",
      "和解"
    ],
    "oneLine": "一场婚礼上,三家父辈突然打了起来,才发现新郎新娘其实是失散多年的兄妹。"
  },
  {
    "title": "没人瞭波斯猫",
    "href": "details/movie-1675.html",
    "cover": "./25.jpg",
    "year": "2017",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "猫咪",
      "继承",
      "荒诞",
      "法式幽默",
      "温情"
    ],
    "oneLine": "一个潦倒的摇滚乐手得知自己继承了祖母的亿万遗产,条件是他必须和一只名叫“没人瞭”的波斯猫一起生活满一年。"
  },
  {
    "title": "绝战",
    "href": "details/movie-1676.html",
    "cover": "./26.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "狙击手",
      "抗美援朝",
      "兄弟情",
      "战术",
      "冷枪"
    ],
    "oneLine": "两支相互敌对的狙击小组被派去执行同一个自杀任务,而在撤退路上他们只剩最后一发子弹。"
  },
  {
    "title": "搏击芭蕾",
    "href": "details/movie-1677.html",
    "cover": "./27.jpg",
    "year": "2023",
    "region": "俄罗斯",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "格斗",
      "芭蕾",
      "复仇"
    ],
    "oneLine": "前芭蕾舞首席因陷害被迫退役,十年后她以综合格斗选手身份重回赛场,用“天鹅湖”的动作打碎每个仇人。"
  },
  {
    "title": "新妹魔王的契约者 特典",
    "href": "details/movie-1678.html",
    "cover": "./28.jpg",
    "year": "2015",
    "region": "日本",
    "type": "OVA",
    "category": "科幻奇幻",
    "tags": [
      "魔王",
      "泳装",
      "日常",
      "杀必死",
      "契约"
    ],
    "oneLine": "魔王之女与契约者意外获得一日假期,却在海边遭遇了来自异次元的搞事推销员。"
  },
  {
    "title": "桃色",
    "href": "details/movie-1679.html",
    "cover": "./29.jpg",
    "year": "2004",
    "region": "中国香港",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "王家卫风格",
      "同性元素",
      "欲望都市",
      "唯美摄影"
    ],
    "oneLine": "房产经纪遇到一对神秘的同性情侣,三人陷入一场关于欲望、谎言与身份错位的迷情游戏。"
  },
  {
    "title": "疯狂作死夜",
    "href": "details/movie-1680.html",
    "cover": "./30.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "黑色幽默",
      "狂欢",
      "一夜惊魂",
      "多线叙事"
    ],
    "oneLine": "一个万圣节之夜,五个互不相干的故事因为一块被诅咒的万圣节糖果而疯狂交织在一起。"
  },
  {
    "title": "爱与平成之色男",
    "href": "details/movie-1681.html",
    "cover": "./31.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "平成时代",
      "好色",
      "怀旧"
    ],
    "oneLine": "平成年代最后一天,一个自封“色男”的过气AV导演,召集旧情人拍最后一部电影。"
  },
  {
    "title": "最后的面具",
    "href": "details/movie-1682.html",
    "cover": "./32.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "威尼斯狂欢节",
      "面具杀人魔",
      "身份互换"
    ],
    "oneLine": "威尼斯狂欢节上,七个戴着相同面具的人被邀请到一座孤岛,其中一个是真正的杀人魔。"
  },
  {
    "title": "魔女娇妃",
    "href": "details/movie-1683.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "欢喜冤家",
      "魔界公主",
      "甜宠"
    ],
    "oneLine": "魔界最废柴的公主被贬下凡,嫁给了人间最怕鬼的捉妖将军。"
  },
  {
    "title": "财富、年轻和美貌",
    "href": "details/movie-1684.html",
    "cover": "./34.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "魔鬼交易",
      "整容",
      "金融骗局",
      "欲望膨胀"
    ],
    "oneLine": "一个又老又丑又穷的男人在跳楼前被魔鬼拦住,魔鬼给他三样东西,但代价是他每使用一样,就会失去对应的另一种东西。"
  },
  {
    "title": "一个女大学生的告白",
    "href": "details/movie-1685.html",
    "cover": "./35.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "社会派",
      "网络暴力",
      "反转"
    ],
    "oneLine": "一名女大学生在校园论坛上匿名告白自己曾被教授性侵,第二天却发现那个“教授”根本不存在。"
  },
  {
    "title": "世界有时很美",
    "href": "details/movie-1686.html",
    "cover": "./36.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "自闭症",
      "咖啡",
      "救赎",
      "都市"
    ],
    "oneLine": "一位患有阿斯伯格综合征的咖啡师,通过自己独特的味觉记忆系统,帮助失忆的老人找回家人。"
  },
  {
    "title": "慈母骄儿",
    "href": "details/movie-1687.html",
    "cover": "./37.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "母爱",
      "溺爱",
      "成长",
      "教育",
      "现实"
    ],
    "oneLine": "一位单亲母亲倾尽所有把儿子培养成“天才”,却发现成年后的儿子连鞋带都不会系。"
  },
  {
    "title": "霍多洛夫斯基星座",
    "href": "details/movie-1688.html",
    "cover": "./38.jpg",
    "year": "2024",
    "region": "俄罗斯",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "天体物理",
      "苏联",
      "偏执天才"
    ],
    "oneLine": "苏联解体后,一位流亡的天体物理学家宣称自己发现了以己命名的星座,并试图用它导航回不存在的祖国。"
  },
  {
    "title": "俄国新娘",
    "href": "details/movie-1689.html",
    "cover": "./39.jpg",
    "year": "2021",
    "region": "俄罗斯,美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "黑帮",
      "新娘",
      "复仇",
      "暴力美学"
    ],
    "oneLine": "一个被贩卖到美国的俄罗斯新娘,在新婚之夜反杀了整个黑帮家族,只为找到妹妹。"
  },
  {
    "title": "山中传奇",
    "href": "details/movie-1690.html",
    "cover": "./40.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "民间传说",
      "万物有灵",
      "水墨画风",
      "东方美学"
    ],
    "oneLine": "失意画师进入一座画中出现的深山,发现山中万物皆可入画,但每画一笔就失去一段记忆。"
  },
  {
    "title": "半夜鸡叫",
    "href": "details/movie-1691.html",
    "cover": "./41.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "乡村怪谈",
      "民俗恐怖",
      "还魂复仇",
      "心理惊悚"
    ],
    "oneLine": "一个被开发商霸占的荒村,每到午夜三点,全村废弃的鸡笼里会同时传出凄厉的鸡鸣声。"
  },
  {
    "title": "咱可不是猫",
    "href": "details/movie-1692.html",
    "cover": "./42.jpg",
    "year": "2022",
    "region": "日本",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "变身",
      "流浪猫",
      "治愈",
      "人生感悟"
    ],
    "oneLine": "三个落魄的年轻人意外被诅咒变成流浪猫,必须做满一百件好事才能变回人。"
  },
  {
    "title": "老大冻未条",
    "href": "details/movie-1693.html",
    "cover": "./43.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "黑帮",
      "中年危机",
      "荒谬",
      "反转"
    ],
    "oneLine": "黑帮老大突然得了“无法动弹”的怪病,手下竟将他抬上轮椅,照常收租砍人。"
  },
  {
    "title": "周末惊魂",
    "href": "details/movie-1694.html",
    "cover": "./44.jpg",
    "year": "2018",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "周末度假",
      "信号消失",
      "模仿杀人",
      "反转结局"
    ],
    "oneLine": "五个好友去湖边木屋过周末,却发现有一台摄像机在全程直播他们被屠杀。"
  },
  {
    "title": "迷失决胜分",
    "href": "details/movie-1695.html",
    "cover": "./45.jpg",
    "year": "2024",
    "region": "英国/美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "网球",
      "心理战",
      "复仇",
      "反转"
    ],
    "oneLine": "一位跌落神坛的网球天才,在一场地下赌球赛中遇到了当年毁掉他职业生涯的死对头,这是一场赌上性命的比赛。"
  },
  {
    "title": "省亲日",
    "href": "details/movie-1696.html",
    "cover": "./46.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "家庭",
      "女性",
      "民俗",
      "压迫",
      "农村"
    ],
    "oneLine": "远嫁女子按习俗回娘家吃饭,却发现全家人都已非活人。"
  },
  {
    "title": "星球奇兵:刀客雷恩历险记",
    "href": "details/movie-1697.html",
    "cover": "./47.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "太空西部",
      "赏金猎人",
      "机械义肢"
    ],
    "oneLine": "一个失去左臂的前星际游骑兵,在边境星球追捕生化逃犯时,发现悬赏令上的目标竟是他自己的克隆体。"
  },
  {
    "title": "勇者必胜",
    "href": "details/movie-1698.html",
    "cover": "./48.jpg",
    "year": "2014",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "反恐",
      "孤胆英雄",
      "营救行动",
      "枪战大片"
    ],
    "oneLine": "英国SAS退役士兵在肯尼亚购物中心偶遇恐怖袭击,为了救出被困在电影院里的女儿,他要用一把消防斧杀穿整栋大楼。"
  },
  {
    "title": "宇宙之法 埃洛希姆编",
    "href": "details/movie-1699.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "外星文明",
      "创世神话",
      "高维宇宙",
      "灵性",
      "烧脑"
    ],
    "oneLine": "当一个天体物理学博士被外星种族“埃洛希姆”选中,他才发现人类的科学不过是神学前传。"
  },
  {
    "title": "绝妙心灵第二季",
    "href": "details/movie-1700.html",
    "cover": "./50.jpg",
    "year": "2025",
    "region": "英国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "脑波感应",
      "伦理困境",
      "英式细腻",
      "神剧续作"
    ],
    "oneLine": "当人类可以借由技术“听到”彼此心中最阴暗的想法,婚姻、政治和信仰全都崩塌了。"
  },
  {
    "title": "野兽良民",
    "href": "details/movie-1701.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑帮",
      "卧底",
      "道德困境",
      "反转"
    ],
    "oneLine": "潜入黑帮七年的卧底警察成为老大最信任的兄弟后,组织命令他亲手杀死另一个卧底。"
  },
  {
    "title": "神秘的旅伴",
    "href": "details/movie-1702.html",
    "cover": "./52.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "火车",
      "卧铺车厢",
      "连环谜团"
    ],
    "oneLine": "一趟从北京开往莫斯科的K3次列车上,六天六夜之间,一个包厢里的四个人接连“失踪”。"
  },
  {
    "title": "西游降魔篇粤语版",
    "href": "details/movie-1703.html",
    "cover": "./53.jpg",
    "year": "2013",
    "region": "香港",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "周星驰",
      "西游",
      "暗黑",
      "粤语",
      "降魔"
    ],
    "oneLine": "驱魔人陈玄奘在降服猪妖和孙悟空的过程中,领悟了“大爱”的真谛。"
  },
  {
    "title": "筑梦大海",
    "href": "details/movie-1704.html",
    "cover": "./54.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "海上施工",
      "亲情",
      "和解",
      "匠人精神"
    ],
    "oneLine": "梦想成为音乐人的儿子,被迫回家继承濒临倒闭的海上工程公司,却发现大海会“说话”。"
  },
  {
    "title": "指环王:护戒使者",
    "href": "details/movie-1705.html",
    "cover": "./55.jpg",
    "year": "2001",
    "region": "美国/新西兰",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "魔戒",
      "托尔金",
      "中土世界",
      "史诗冒险"
    ],
    "oneLine": "怯懦的霍比特人佛罗多继承了一枚能毁灭世界的魔戒,必须和八位同伴穿越魔多,将它投入末日火山。"
  },
  {
    "title": "晕眩症",
    "href": "details/movie-1706.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "眩晕",
      "心理",
      "拆迁",
      "母女",
      "幻觉"
    ],
    "oneLine": "一位患有眩晕症的建筑测绘师,在老城拆迁前频繁看到一栋不存在的旧楼。"
  },
  {
    "title": "学校旅行",
    "href": "details/movie-1707.html",
    "cover": "./57.jpg",
    "year": "2018",
    "region": "西班牙",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "露营",
      "失踪",
      "校园霸凌",
      "全员恶人",
      "罗生门"
    ],
    "oneLine": "一次郊外露营旅行后,全班公认的“怪胎”坠崖身亡,但每一位同学口中的“经过”都截然不同。"
  },
  {
    "title": "德昂",
    "href": "details/movie-1708.html",
    "cover": "./58.jpg",
    "year": "2019",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "云南",
      "少数民族",
      "茶叶",
      "代际冲突",
      "身份寻找"
    ],
    "oneLine": "在城市打拼的德昂族青年被迫回乡接掌茶园,却在传统与现代之间撕裂了父子两代人。"
  },
  {
    "title": "爱你变成害你",
    "href": "details/movie-1709.html",
    "cover": "./59.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "病态爱情",
      "控制欲",
      "心理惊悚",
      "高概念",
      "反转"
    ],
    "oneLine": "她为了永远留住男友的爱,将他的记忆删除到只剩下爱上她的那一天,然后每天重复。"
  },
  {
    "title": "王中王",
    "href": "details/movie-1710.html",
    "cover": "./60.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "乒乓球",
      "师徒",
      "退役",
      "中年危机",
      "热血"
    ],
    "oneLine": "前国乒冠军沦落到小区乒乓球室教大爷大妈,却发现这里藏着一个能打败现役世界第一的天才少年。"
  },
  {
    "title": "奢侈的骨",
    "href": "details/movie-1711.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "底层生活",
      "骨灰盒",
      "黑色幽默",
      "是枝裕和风"
    ],
    "oneLine": "东京一则新闻说火葬场的骨灰盒成本只有 300 日元,于是一群穷人去墓地偷骨灰盒,打算自己烧制。"
  },
  {
    "title": "婊兄弟上路",
    "href": "details/movie-1712.html",
    "cover": "./62.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "黑色幽默",
      "公路片",
      "兄弟情"
    ],
    "oneLine": "两个性格迥异的结拜兄弟开车前往一场葬礼,车上藏着不可告人的秘密。"
  },
  {
    "title": "母语",
    "href": "details/movie-1713.html",
    "cover": "./63.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "方言",
      "代际冲突",
      "文化传承"
    ],
    "oneLine": "一名不会说家乡话的90后女孩回乡照顾祖母,为了沟通她必须学会正在消失的方言。"
  },
  {
    "title": "杨贵妃1962",
    "href": "details/movie-1714.html",
    "cover": "./64.jpg",
    "year": "1962",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "邵氏",
      "黄梅调",
      "李翰祥",
      "古典美人",
      "悲剧"
    ],
    "oneLine": "倾国倾城的杨玉环,从寿王妃到太真道人再到贵妃,她的每一步都走向了马嵬坡下的白绫。"
  },
  {
    "title": "边疆",
    "href": "details/movie-1715.html",
    "cover": "./65.jpg",
    "year": "2028",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "边境",
      "走私",
      "暴雪",
      "密室",
      "全员恶人"
    ],
    "oneLine": "暴风雪封住了中俄边境唯一的小旅馆,里面六个客人,每个人身上都背着一条人命。"
  },
  {
    "title": "阿尔巴特罗斯",
    "href": "details/movie-1716.html",
    "cover": "./66.jpg",
    "year": "2026",
    "region": "新西兰",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "航海",
      "人与自然",
      "成长",
      "环保",
      "治愈"
    ],
    "oneLine": "为了完成父亲的遗愿,叛逆少女独自驾驶老旧帆船“阿尔巴特罗斯”号穿越“魔鬼西风带”,却意外发现信天翁正在为她领航。"
  },
  {
    "title": "人生闹剧",
    "href": "details/movie-1717.html",
    "cover": "./67.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "存在主义",
      "荒诞日常",
      "人生哲思"
    ],
    "oneLine": "一个男人从出生到死亡的每个重要时刻都发生荒诞意外,但他发现这才是完美人生。"
  },
  {
    "title": "鬼驱人",
    "href": "details/movie-1718.html",
    "cover": "./68.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "驱魔",
      "恶灵",
      "家庭",
      "惊悚",
      "宗教"
    ],
    "oneLine": "单亲妈妈发现女儿被恶灵附身,教堂派来的驱魔师却似乎在刻意激怒那个“东西”。"
  },
  {
    "title": "出入平安",
    "href": "details/movie-1719.html",
    "cover": "./69.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "卧底",
      "双雄",
      "黑吃黑"
    ],
    "oneLine": "黑帮卧底与警察内鬼在一次失败的交易中被迫联手,逃亡路上相互试探,生死一线。"
  },
  {
    "title": "反贪风暴4",
    "href": "details/movie-1720.html",
    "cover": "./70.jpg",
    "year": "2019",
    "region": "香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "廉政公署",
      "监狱",
      "卧底",
      "贪污"
    ],
    "oneLine": "廉政公署首席调查主任陆志廉,为了取证含冤入狱,在监狱中掀起血雨腥风。"
  },
  {
    "title": "金石盟",
    "href": "details/movie-1721.html",
    "cover": "./71.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "黑帮",
      "卧底",
      "义肢格斗",
      "金盆洗手",
      "父子仇怨"
    ],
    "oneLine": "一位安装金石义肢的退休杀手重出江湖,不是为了钱,而是为了抢在被警方逮捕前,亲手了结自己成为卧底的儿子。"
  },
  {
    "title": "吉屋出租:百老汇剧场版",
    "href": "details/movie-1722.html",
    "cover": "./72.jpg",
    "year": "2026",
    "region": "美国",
    "type": "音乐剧电影",
    "category": "都市爱情",
    "tags": [
      "音乐剧改编",
      "波西米亚",
      "艾滋病",
      "纽约东村",
      "普契尼"
    ],
    "oneLine": "在数字时代重生的波西米亚人,用TikTok直播对抗房东驱逐,并在疾病与梦想中寻找“今日”的意义。"
  },
  {
    "title": "瓦莱莉和她的奇迹一周",
    "href": "details/movie-1723.html",
    "cover": "./73.jpg",
    "year": "2024",
    "region": "捷克",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "超现实",
      "少女",
      "梦境"
    ],
    "oneLine": "即将被迫嫁给权贵的少女瓦莱莉,在收到一对神秘耳环后,发现整个小镇都陷入了集体癔症。"
  },
  {
    "title": "罗斯威尔第四季",
    "href": "details/movie-1724.html",
    "cover": "./74.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "外星人",
      "阴谋论",
      "小镇",
      "超能力"
    ],
    "oneLine": "外星混血三人组刚想隐居,军方就炸了整个小镇。"
  },
  {
    "title": "如剧如戏",
    "href": "details/movie-1725.html",
    "cover": "./75.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "戏中戏",
      "身份认同",
      "人性博弈",
      "话剧",
      "反转"
    ],
    "oneLine": "一名过气话剧演员为钱假扮富商失忆的儿子,却发现自己的人生正被幕后编剧实时修改。"
  },
  {
    "title": "恶之三联画",
    "href": "details/movie-1726.html",
    "cover": "./76.jpg",
    "year": "2026",
    "region": "日本",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "单元剧",
      "古典艺术",
      "心理犯罪",
      "叙述性诡计",
      "致郁"
    ],
    "oneLine": "一幅中世纪失窃的三联画重现东京,每个拥有它的人都按照画中“地狱、人间、天堂”的顺序离奇死亡。"
  },
  {
    "title": "爱情是什么",
    "href": "details/movie-1727.html",
    "cover": "./77.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "社会",
      "不婚",
      "多线叙事",
      "扎心",
      "真实"
    ],
    "oneLine": "五个不同年龄段的普通人,在东京寻找“爱情”的正确答案。"
  },
  {
    "title": "欢迎来到丛林",
    "href": "details/movie-1728.html",
    "cover": "./78.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "团建",
      "丛林求生",
      "职场讽刺",
      "反差萌",
      "黑色幽默"
    ],
    "oneLine": "一群养尊处优的都市白领被空投到真的亚马逊丛林,却发现这场“团建”根本不存在救援。"
  },
  {
    "title": "日心说",
    "href": "details/movie-1729.html",
    "cover": "./79.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "硬科幻",
      "地心说",
      "宗教审判",
      "平行宇宙"
    ],
    "oneLine": "科学家证明地球确实围绕太阳转,但宗教法庭说:不,你们那个“太阳”才是地球。"
  },
  {
    "title": "罗雀高飞",
    "href": "details/movie-1730.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "医女成长",
      "逆袭",
      "市井烟火",
      "女性互助"
    ],
    "oneLine": "市井医女以麻雀为引,在权谋暗战中完成自我救赎与扶弱济世的逆袭。"
  },
  {
    "title": "我的三平方",
    "href": "details/movie-1731.html",
    "cover": "./81.jpg",
    "year": "2018",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "基层",
      "教育",
      "梦想",
      "治愈"
    ],
    "oneLine": "一名被贬到山区小学的音乐老师,发现他的音乐教室只有三平方那么大,而他的学生只有一个人。"
  },
  {
    "title": "律政英雄2015",
    "href": "details/movie-1732.html",
    "cover": "./82.jpg",
    "year": "2015",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "检察官",
      "木村拓哉",
      "单元剧电影版"
    ],
    "oneLine": "久利生公平调任到小海滨城市,卷入一桩涉及外务省的隐秘外交案件。"
  },
  {
    "title": "越活越明白",
    "href": "details/movie-1733.html",
    "cover": "./83.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "家庭",
      "成长",
      "时间循环",
      "治愈",
      "代际"
    ],
    "oneLine": "一个对父亲充满怨恨的中年人,意外陷入时间循环,必须不断重过自己最叛逆的那一天,直到学会理解。"
  },
  {
    "title": "快乐舞年级",
    "href": "details/movie-1734.html",
    "cover": "./84.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "小学生",
      "舞蹈",
      "成长",
      "师生",
      "轻松"
    ],
    "oneLine": "一个“佛系”退休芭蕾舞教师,临危受命组建小学啦啦队,却遇上一群只想“快乐摸鱼”的奇葩学生。"
  },
  {
    "title": "冰上奇缘4",
    "href": "details/movie-1735.html",
    "cover": "./85.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "冰雪奇缘衍生",
      "花样滑冰",
      "合家欢",
      "动物搭档"
    ],
    "oneLine": "艾莎和安娜的曾孙女是一位毫无天赋的花滑少女,她唯一的搭档是一只穿着冰刀、会魔法的企鹅。"
  },
  {
    "title": "犹太人苏斯",
    "href": "details/movie-1736.html",
    "cover": "./86.jpg",
    "year": "2023",
    "region": "德国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "历史改编",
      "反纳粹",
      "正义审判"
    ],
    "oneLine": "根据真实事件改编,一个犹太人被纳粹污名化为“贪婪的苏斯”,而他的后人在70年后找到了当年那场冤案的关键录音。"
  },
  {
    "title": "五角大楼文件",
    "href": "details/movie-1737.html",
    "cover": "./87.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "泄密",
      "媒体",
      "越战",
      "新闻自由"
    ],
    "oneLine": "一位国防部分析师复制了七千页越战机密文件,却发现他想揭露的真相,正是政府故意让他泄露的。"
  },
  {
    "title": "拦截终结者",
    "href": "details/movie-1738.html",
    "cover": "./88.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "AI叛乱",
      "时间循环",
      "硬核格斗",
      "机械改造"
    ],
    "oneLine": "2049年,人类最后的抵抗军战士被送回2027年,任务是拦截一台伪装成外卖配送机器人的终结者原型机。"
  },
  {
    "title": "咖啡馆的故事",
    "href": "details/movie-1739.html",
    "cover": "./89.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "治愈系",
      "固定场景",
      "人生百味"
    ],
    "oneLine": "东京一家深夜咖啡馆,每杯咖啡附赠一个空杯子,客人必须在里面倒入一个秘密,才能喝到咖啡。"
  },
  {
    "title": "柏格曼岛",
    "href": "details/movie-1740.html",
    "cover": "./90.jpg",
    "year": "2021",
    "region": "法国/瑞典",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "导演",
      "创作困境",
      "婚姻",
      "致敬伯格曼"
    ],
    "oneLine": "一对陷入婚姻危机的编剧夫妻来到伯格曼晚年居住的法罗岛,试图在偶像的阴影下找回爱情与灵感。"
  },
  {
    "title": "生命的边缘",
    "href": "details/movie-1741.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "加拿大",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "临终关怀",
      "亲情",
      "和解",
      "人生感悟"
    ],
    "oneLine": "叛逆的摇滚少女被迫回到小镇,照顾患有阿尔茨海默症的父亲,在遗忘的边缘,她发现父亲曾是她最狂热的头号粉丝。"
  },
  {
    "title": "公理",
    "href": "details/movie-1742.html",
    "cover": "./92.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "数学",
      "平行宇宙",
      "证明",
      "自我"
    ],
    "oneLine": "数学家证明“上帝不存在”后,祂真的消失了。"
  },
  {
    "title": "乡住温柔",
    "href": "details/movie-1743.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "返乡",
      "民宿",
      "慢节奏",
      "邻里"
    ],
    "oneLine": "一名东京破产的精英白领回到乡下老家,发现母亲把自家改成了“专收怪人”的民宿。"
  },
  {
    "title": "天使宝贝法兰丝",
    "href": "details/movie-1744.html",
    "cover": "./94.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "萌娃",
      "魔法",
      "治愈",
      "合家欢"
    ],
    "oneLine": "七岁女孩法兰丝声称自己是下凡实习的天使,她接到的第一个任务是让街角杂货店的凶老头笑起来。"
  },
  {
    "title": "医院革命第五季",
    "href": "details/movie-1745.html",
    "cover": "./95.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "公立医院",
      "医疗体系",
      "群像剧",
      "社会议题"
    ],
    "oneLine": "纽约最穷的公立医院第五年,医生们不仅要治病,还要对抗一家企图收购医院的资本巨鳄。"
  },
  {
    "title": "无限杀人意料之外",
    "href": "details/movie-1746.html",
    "cover": "./96.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "循环",
      "推理",
      "烧脑",
      "杀人魔"
    ],
    "oneLine": "一个杀手被困在无限循环的一天里,他必须找出每次重置后杀死自己的人到底是谁。"
  },
  {
    "title": "月球漫步",
    "href": "details/movie-1747.html",
    "cover": "./97.jpg",
    "year": "2025",
    "region": "美国/英国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "月球",
      "太空",
      "父子",
      "记忆"
    ],
    "oneLine": "2045年,退休宇航员被征召执行最后一次登月任务,但他发现月球表面的一切都和他三十年前第一次登月时一模一样。"
  },
  {
    "title": "双生契",
    "href": "details/movie-1748.html",
    "cover": "./98.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "互换",
      "姐妹",
      "民国",
      "阴谋",
      "宅斗"
    ],
    "oneLine": "一对失散的双胞胎,一个成了上海滩名媛,一个成了乡下女佣,互换身份后卷入惊天阴谋。"
  },
  {
    "title": "网络凶铃",
    "href": "details/movie-1749.html",
    "cover": "./99.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "都市传说",
      "暗网",
      "直播",
      "心理恐惧"
    ],
    "oneLine": "网红主播为流量点开了一个暗网链接,随后所有点过赞的粉丝,都开始离奇自杀。"
  },
  {
    "title": "鸣龙少年",
    "href": "details/movie-1750.html",
    "cover": "./100.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "高考",
      "逆袭",
      "师徒",
      "热血"
    ],
    "oneLine": "颓废电竞少年被暴躁退休教师捡回“学渣复活班”,目标是送全班考进清华,包括那只校猫。"
  },
  {
    "title": "代课教师",
    "href": "details/movie-1751.html",
    "cover": "./101.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "乡村",
      "师生",
      "支教",
      "现实",
      "温情"
    ],
    "oneLine": "一个初中辍学的打工妹回到母校当代课教师,却要同时教育学生和曾经的自己。"
  },
  {
    "title": "被争论的女人",
    "href": "details/movie-1752.html",
    "cover": "./102.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "堕胎",
      "宪法法院",
      "女性群像",
      "社会运动"
    ],
    "oneLine": "一名妇产科医生被起诉,她集结了60年间不同代际的女性共同出庭。"
  },
  {
    "title": "水之年代",
    "href": "details/movie-1753.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "美国/加拿大",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "环保惊悚",
      "气候难民",
      "文艺科幻"
    ],
    "oneLine": "近未来,海平面上升吞噬了陆地,幸存者在孤岛上通过“浸泡”海水来读取逝者的记忆。"
  },
  {
    "title": "赤壁烽烟",
    "href": "details/movie-1754.html",
    "cover": "./104.jpg",
    "year": "2022",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "三国",
      "大场面",
      "谋略对决",
      "火攻",
      "群像戏"
    ],
    "oneLine": "赤壁大战前七天,一个曹营探子与一个东吴伙夫因意外困在同一艘破船上,被迫合作逃生。"
  },
  {
    "title": "解救围城",
    "href": "details/movie-1755.html",
    "cover": "./105.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "特战",
      "人质",
      "海外",
      "强节奏"
    ],
    "oneLine": "一群中国安保公司在非洲战乱国家被围困在酒店,前特战队员必须带着几十名平民在72小时内突围。"
  },
  {
    "title": "屠门镇之关西荡寇",
    "href": "details/movie-1756.html",
    "cover": "./106.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "网络电影",
      "镖师",
      "土匪",
      "西部片",
      "兄弟情"
    ],
    "oneLine": "民国西北,屠门镇镖师遭遇神秘马贼屠村,唯一的幸存者必须找出内鬼,为兄弟们复仇。"
  },
  {
    "title": "生活像阳光一样灿烂",
    "href": "details/movie-1757.html",
    "cover": "./107.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "重组家庭",
      "烟火气",
      "方言对白",
      "轻松治愈"
    ],
    "oneLine": "一个毒舌的离婚律师和一个乐观的单亲妈妈闪婚,两家四个性格迥异的孩子被迫住在同一屋檐下。"
  },
  {
    "title": "直弯爱侣",
    "href": "details/movie-1758.html",
    "cover": "./108.jpg",
    "year": "2020",
    "region": "美国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "异性恋与同性恋",
      "同居",
      "性别议题",
      "爆笑",
      "毒舌"
    ],
    "oneLine": "一个邋遢的直男程序员和他的毒舌gay蜜合租,两人打赌谁能先帮对方找到完美对象,赌注是一年的家务。"
  },
  {
    "title": "新源氏物语",
    "href": "details/movie-1759.html",
    "cover": "./109.jpg",
    "year": "2008",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "古典文学",
      "改编",
      "现代视角",
      "光源氏",
      "女性主义"
    ],
    "oneLine": "从现代女性视角重述光源氏的一生,揭开紫式部笔下的“完美男人”的另一面。"
  },
  {
    "title": "红气球",
    "href": "details/movie-1760.html",
    "cover": "./110.jpg",
    "year": "2026",
    "region": "法国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "孤独",
      "友谊",
      "巴黎"
    ],
    "oneLine": "巴黎自闭症男孩的红气球不仅会跟着他,还能帮他“听”到别人声音里隐藏的情绪颜色,这引来了科学怪人的觊觎。"
  },
  {
    "title": "抗击",
    "href": "details/movie-1761.html",
    "cover": "./111.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "抗战",
      "热血",
      "小人物",
      "信仰"
    ],
    "oneLine": "1937年,一群来自天南海北的杂牌军被逼上绝路,却用血肉之躯筑起最后一道防线。"
  },
  {
    "title": "血源",
    "href": "details/movie-1762.html",
    "cover": "./112.jpg",
    "year": "2023",
    "region": "美国/加拿大",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "基因诅咒",
      "家族秘密",
      "克苏鲁元素",
      "身体恐怖"
    ],
    "oneLine": "一家人搬进乡下祖宅后,发现祖先的基因改造实验,让他们的血液成了怪物的“催情剂”。"
  },
  {
    "title": "变调的灰姑娘",
    "href": "details/movie-1763.html",
    "cover": "./113.jpg",
    "year": "1978",
    "region": "台湾",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "歌厅",
      "身份错位",
      "悲情",
      "复古"
    ],
    "oneLine": "怀揣歌星梦的舞女冒充富家女参加相亲,不料真千金竟是她的双胞胎妹妹。"
  },
  {
    "title": "幼女社长",
    "href": "details/movie-1764.html",
    "cover": "./114.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "萝莉",
      "商业战争",
      "反差萌",
      "天才"
    ],
    "oneLine": "六岁的天才幼女继承了破产企业,用幼儿园的生存法则搅动残酷的商界。"
  },
  {
    "title": "僵尸教战守则",
    "href": "details/movie-1765.html",
    "cover": "./115.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "丧尸",
      "职场",
      "生存指南"
    ],
    "oneLine": "僵尸病毒爆发,一个沉迷于写PPT的社畜发现,职场生存技能竟是末日求生最强法则。"
  },
  {
    "title": "光环:夜幕",
    "href": "details/movie-1766.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "黑化士官长",
      "星盟内乱",
      "道德困境"
    ],
    "oneLine": "光环阵列被激活前夕,一名失去信仰的斯巴坦战士发现星盟内部竟有一支想要停战的分裂势力。"
  },
  {
    "title": "巅峰拍档第十四季",
    "href": "details/movie-1767.html",
    "cover": "./117.jpg",
    "year": "2009",
    "region": "英国",
    "type": "综艺/剧集",
    "category": "古装甜宠",
    "tags": [
      "三贱客",
      "毒舌",
      "汽车测评",
      "冒险"
    ],
    "oneLine": "三个中年男人开着二手破车穿越玻利维亚,试图证明“只要够疯,哪里都是路”。"
  },
  {
    "title": "少女在异世界战斗",
    "href": "details/movie-1768.html",
    "cover": "./118.jpg",
    "year": "2024",
    "region": "日本",
    "type": "动画剧集",
    "category": "科幻奇幻",
    "tags": [
      "异世界",
      "少女群像",
      "魔法",
      "生存"
    ],
    "oneLine": "十二位来自不同时代与国家的少女被召唤到濒死的异世界,她们唯一的共同点是——都曾在自己原本的世界里被称作“魔女”。"
  },
  {
    "title": "雪王之奇幻沙州",
    "href": "details/movie-1769.html",
    "cover": "./119.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "冒险",
      "动作",
      "权力",
      "奇幻"
    ],
    "oneLine": "失忆的雪国皇子在沙漠绿洲中醒来,发现自己竟成了仇家沙州城的奴隶。"
  },
  {
    "title": "西班牙囚犯",
    "href": "details/movie-1770.html",
    "cover": "./120.jpg",
    "year": "1997",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "商战",
      "阴谋",
      "骗局",
      "心理博弈"
    ],
    "oneLine": "一名年轻程序员发明了巨额算法,却发现公司高层和神秘“西班牙囚犯”正将他推向深渊。"
  },
  {
    "title": "爸妈麦来乱",
    "href": "details/movie-1771.html",
    "cover": "./121.jpg",
    "year": "2025",
    "region": "台湾",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "爸妈",
      "闹剧",
      "返乡",
      "温情"
    ],
    "oneLine": "儿子在城市混不下去回老家,发现爸妈比他还能折腾。"
  },
  {
    "title": "职业女郎",
    "href": "details/movie-1772.html",
    "cover": "./122.jpg",
    "year": "1997",
    "region": "英国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "女性友谊",
      "90年代",
      "伦敦",
      "职场与情感"
    ],
    "oneLine": "两个大学时的密友,毕业后合租伦敦,一个想嫁人,一个想升职,最后都摔得很痛。"
  },
  {
    "title": "我们得做些什么",
    "href": "details/movie-1773.html",
    "cover": "./123.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "法式幽默",
      "社区",
      "环保",
      "荒诞"
    ],
    "oneLine": "为了抗议政府在街角砍一棵树,几个闲散居民成立了“革命委员会”,结果引发蝴蝶效应。"
  },
  {
    "title": "哈罗德和紫色蜡笔",
    "href": "details/movie-1774.html",
    "cover": "./124.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "手绘风",
      "想象力",
      "童真",
      "冒险"
    ],
    "oneLine": "一个被困在白色房间里的男孩,用一支紫色蜡笔画出的任何东西都会变成真的。"
  },
  {
    "title": "水乡危情粤语",
    "href": "details/movie-1775.html",
    "cover": "./125.jpg",
    "year": "1990",
    "region": "中国香港/中国大陆",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "珠三角",
      "偷渡",
      "兄弟情",
      "时代悲剧"
    ],
    "oneLine": "1990年代珠江口水乡,一对兄弟分属两地,哥哥是香港水警,弟弟是大陆偷渡客,两人在一次走私枪火案中枪口相向。"
  },
  {
    "title": "当爱情到来",
    "href": "details/movie-1776.html",
    "cover": "./126.jpg",
    "year": "2025",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "纯爱",
      "书店",
      "偶遇"
    ],
    "oneLine": "社恐书店老板为了拒绝顾客,在门口写了九十九个“不营业”的理由,却被一个女孩全盘推翻。"
  },
  {
    "title": "将死之人",
    "href": "details/movie-1777.html",
    "cover": "./127.jpg",
    "year": "2026",
    "region": "西班牙/墨西哥",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "死亡预知",
      "保险公司",
      "诅咒",
      "群像"
    ],
    "oneLine": "一家保险公司承保“死亡预测险”,但所有客户都在保险生效前一天,以合同上写明的匪夷所思方式准时死亡。"
  },
  {
    "title": "摇曳百合3",
    "href": "details/movie-1778.html",
    "cover": "./128.jpg",
    "year": "2019",
    "region": "日本",
    "type": "TV动画",
    "category": "动画少儿",
    "tags": [
      "社团活动",
      "放学后",
      "吐槽役",
      "学生会",
      "暑假合宿"
    ],
    "oneLine": "娱乐部四人组升入高二,学生会新来的风纪委员誓要取缔这个“没有存在意义的社团”。"
  },
  {
    "title": "发明圣诞节的人",
    "href": "details/movie-1779.html",
    "cover": "./129.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "圣诞",
      "文学改编",
      "维多利亚时代",
      "温暖治愈"
    ],
    "oneLine": "当查尔斯·狄更斯陷入创作瓶颈,笔下角色竟集体逃出草稿,逼他重新发明圣诞节。"
  },
  {
    "title": "苏菲的世界",
    "href": "details/movie-1780.html",
    "cover": "./130.jpg",
    "year": "2027",
    "region": "挪威",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "哲学史",
      "打破第四面墙",
      "平行宇宙"
    ],
    "oneLine": "14岁少女苏菲不断收到神秘来信,每一封都预言了她所在“世界”的编剧即将篡改她的命运。"
  },
  {
    "title": "异域雄鹰",
    "href": "details/movie-1781.html",
    "cover": "./131.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "飞虎队",
      "援华",
      "空战",
      "抗日"
    ],
    "oneLine": "三个中国飞行员和三个美国飞虎队飞行员被击落在日军敌后,六人必须跨越千里生死线。"
  },
  {
    "title": "校园迷糊大王 三学期",
    "href": "details/movie-1782.html",
    "cover": "./132.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "动画少儿",
    "tags": [
      "校园",
      "乌龙",
      "群像",
      "毕业季"
    ],
    "oneLine": "毕业前夕,全校唯一没告白的究极暗恋者,决定在毕业典礼上堵住校花。"
  },
  {
    "title": "安吉拉的圣诞节",
    "href": "details/movie-1783.html",
    "cover": "./133.jpg",
    "year": "2022",
    "region": "加拿大",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "圣诞",
      "亲情",
      "治愈",
      "动画",
      "家庭"
    ],
    "oneLine": "小女孩安吉拉许愿想要一个完整的家,圣诞老人送来的却是一份改变全家人的“勇气”。"
  },
  {
    "title": "我的内心泰语",
    "href": "details/movie-1784.html",
    "cover": "./134.jpg",
    "year": "2023",
    "region": "泰国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "语言障碍",
      "异国恋",
      "文化碰撞"
    ],
    "oneLine": "中国交换生和泰国学长互相暗恋,但两人都偷偷学对方的语言,闹出一堆乌龙。"
  },
  {
    "title": "我的亲密敌人",
    "href": "details/movie-1785.html",
    "cover": "./135.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "双女主",
      "心理惊悚",
      "友情裂痕",
      "记忆谜团"
    ],
    "oneLine": "闺蜜意外失忆后指控我才是毁掉她人生的真凶,而我手机里存着她昨晚发来的求救语音。"
  },
  {
    "title": "把我关起来",
    "href": "details/movie-1786.html",
    "cover": "./136.jpg",
    "year": "2020",
    "region": "日本",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "心理",
      "孤独",
      "女性成长"
    ],
    "oneLine": "无法与人亲密的女主角,在幻想出一位男友并与之同居后,开始正视现实。"
  },
  {
    "title": "大都会2012",
    "href": "details/movie-1787.html",
    "cover": "./137.jpg",
    "year": "2012",
    "region": "美国/加拿大",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "柯南伯格",
      "末日",
      "金融",
      "存在主义"
    ],
    "oneLine": "亿万资产继承人乘坐着豪华轿车横穿曼哈顿去做理发,在这趟末日之旅中目睹整个资本主义体系的坍塌。"
  },
  {
    "title": "空难余波",
    "href": "details/movie-1788.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "空难",
      "调查",
      "心理创伤"
    ],
    "oneLine": "她是空难唯一的幸存者,但调查员告诉她:那架飞机上原本没有她。"
  },
  {
    "title": "大班密令之虎穴擒王粤语",
    "href": "details/movie-1789.html",
    "cover": "./139.jpg",
    "year": "1988",
    "region": "中国香港",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "港剧经典",
      "卧底",
      "警匪对峙",
      "双雄对决"
    ],
    "oneLine": "金牌卧底“大班”在黑帮卧底长达七年,终于爬到龙头位置,却在收网前夜发现,警队里一直有人在给黑帮通风报信。"
  },
  {
    "title": "神捕铁飞花之千里缉凶",
    "href": "details/movie-1790.html",
    "cover": "./140.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "古装甜宠",
    "tags": [
      "女捕快",
      "千里追杀",
      "江湖",
      "复仇",
      "双面人"
    ],
    "oneLine": "女捕头铁飞花为追捕一位“已经死去三年”的采花大盗,从江南水乡一路杀到漠北驼城,却发现追凶本身就是陷阱。"
  },
  {
    "title": "恋之涡",
    "href": "details/movie-1791.html",
    "cover": "./141.jpg",
    "year": "2024",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "不伦恋",
      "漩涡",
      "宿命",
      "日式美学"
    ],
    "oneLine": "在一座孤岛上,四对男女陷入了一场无法挣脱的爱欲漩涡。"
  },
  {
    "title": "如果我想吹口哨",
    "href": "details/movie-1792.html",
    "cover": "./142.jpg",
    "year": "2010",
    "region": "罗马尼亚",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "监狱",
      "兄弟",
      "救赎"
    ],
    "oneLine": "还有五天出狱的少年犯,因为弟弟突然出现,决定越狱。"
  },
  {
    "title": "人头马百变财神变则通粤语",
    "href": "details/movie-1793.html",
    "cover": "./143.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "粤语",
      "财神",
      "变身",
      "市井喜剧"
    ],
    "oneLine": "庙街小混混意外捡到一尊能让人“变成任何职业”的人头马雕像,他变身财神爷后才发现,当神比当人还要累。"
  },
  {
    "title": "上海快车",
    "href": "details/movie-1794.html",
    "cover": "./144.jpg",
    "year": "2029",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "高速列车",
      "记忆植入",
      "限时解谜",
      "车体爆炸"
    ],
    "oneLine": "磁悬浮“上海快车”被植入虚假记忆系统,全车乘客以为自己在度假,实际列车正冲向毁灭。"
  },
  {
    "title": "坚持到底",
    "href": "details/movie-1795.html",
    "cover": "./145.jpg",
    "year": "2021",
    "region": "中国大陆",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "马拉松",
      "逆袭",
      "师徒",
      "热血"
    ],
    "oneLine": "一名被省队开除的长跑运动员,为了养活失明的教练,决定以业余身份冲击奥运会。"
  },
  {
    "title": "魔女南茜:星河谋杀案",
    "href": "details/movie-1796.html",
    "cover": "./146.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "少女侦探",
      "太空站",
      "密室杀人"
    ],
    "oneLine": "高中生侦探南茜受邀登上月球轨道空间站,却遭遇了一场真空密室杀人事件。"
  },
  {
    "title": "禁止打猎",
    "href": "details/movie-1797.html",
    "cover": "./147.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "护林员",
      "盗猎",
      "雪山",
      "人性考验",
      "孤胆英雄"
    ],
    "oneLine": "一个沉默的护林员在禁猎区发现了一车被屠杀的羚羊,而车上的血迹,与十二年前的灭门案完全吻合。"
  },
  {
    "title": "血色歌姬",
    "href": "details/movie-1798.html",
    "cover": "./148.jpg",
    "year": "2019",
    "region": "日本",
    "type": "动画剧集",
    "category": "悬疑犯罪",
    "tags": [
      "黑暗偶像",
      "复仇",
      "阴谋论",
      "歌剧元素"
    ],
    "oneLine": "当红偶像歌姬突然“猝死”舞台,一年后一个声音与她一模一样的神秘新人出现了。"
  },
  {
    "title": "不好的好人",
    "href": "details/movie-1799.html",
    "cover": "./149.jpg",
    "year": "2026",
    "region": "俄罗斯",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "道德困境",
      "地下世界",
      "写实",
      "双面人生"
    ],
    "oneLine": "他是莫斯科备受尊敬的小学数学老师,也是黑帮最信任的账本守护人,直到账本丢了。"
  },
  {
    "title": "极乐岛杀人事件",
    "href": "details/movie-1800.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "孤岛",
      "邪教",
      "全员恶人"
    ],
    "oneLine": "30年前一场导致全岛覆灭的“集体自杀”悬案被重启调查,活着的岛民只有一个——一个不会说话的疯子。"
  },
  {
    "title": "英雄无侠",
    "href": "details/movie-1801.html",
    "cover": "./1.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "网络电影",
    "category": "国产短剧",
    "tags": [
      "反套路",
      "咸鱼主角",
      "官府江湖"
    ],
    "oneLine": "只想当咸鱼的县衙捕快,被卷入武林盟主争夺战,全程靠“躺平哲学”破局。"
  },
  {
    "title": "半夜鸡叫",
    "href": "details/movie-1802.html",
    "cover": "./2.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "农村悬疑",
      "黑色电影",
      "乡土",
      "复仇"
    ],
    "oneLine": "一个平静的东北村庄,每当半夜响起鸡叫,第二天就会有人死去,而第一个死者,正是三十年前诬陷村长的恶霸。"
  },
  {
    "title": "波拉克和他的情人",
    "href": "details/movie-1803.html",
    "cover": "./3.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "艺术家",
      "婚外情",
      "抽象表现主义",
      "悲剧"
    ],
    "oneLine": "一位天才画家的创作狂潮与三段纠缠的爱情,最终在画布上留下无法愈合的裂痕。"
  },
  {
    "title": "凯撒密令",
    "href": "details/movie-1804.html",
    "cover": "./4.jpg",
    "year": "2006",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "梵蒂冈",
      "密码学",
      "宗教阴谋",
      "寻宝"
    ],
    "oneLine": "梵蒂冈档案管理员发现一份被凯撒加密的羊皮卷,内容足以推翻整个基督教的历史,而一个古老杀手组织已经开始行动。"
  },
  {
    "title": "仙境绑架案",
    "href": "details/movie-1805.html",
    "cover": "./5.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "虚拟现实",
      "绑架",
      "富二代",
      "密室逃脱"
    ],
    "oneLine": "富豪之子在虚拟游戏“仙境”中被绑架,绑匪要求全世界的玩家帮他通关才能赎人。"
  },
  {
    "title": "电影首策",
    "href": "details/movie-1806.html",
    "cover": "./6.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "电影行业",
      "制片人",
      "行业黑幕",
      "理想与现实"
    ],
    "oneLine": "一个电影学院毕业生成为某大片的首席策划,却发现这片子的所有创意都是抄的。"
  },
  {
    "title": "月球奇幻旅",
    "href": "details/movie-1807.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "月球",
      "少年",
      "夏令营",
      "神秘信号"
    ],
    "oneLine": "月球夏令营的五个孩子收到一段来自月背的神秘求救信号。"
  },
  {
    "title": "阿里结婚啦",
    "href": "details/movie-1808.html",
    "cover": "./8.jpg",
    "year": "2027",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "少数民族",
      "新疆",
      "传统与现代",
      "婚礼",
      "家族"
    ],
    "oneLine": "哈萨克族青年阿里要娶汉族姑娘小雅,爷爷开出的条件只有一个:用已经失传的“叼羊”比赛方式,赢过全村的年轻人。"
  },
  {
    "title": "钱之坑",
    "href": "details/movie-1809.html",
    "cover": "./9.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "买房",
      "装修",
      "夫妻",
      "倒霉"
    ],
    "oneLine": "一对新婚夫妻倾尽积蓄买了栋百年老宅,本以为捡到宝,结果发现这房子每个螺丝钉都在要他们的命。"
  },
  {
    "title": "自由地带",
    "href": "details/movie-1810.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "乌克兰",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "顿巴斯",
      "平民",
      "生存",
      "群像"
    ],
    "oneLine": "2014年顿巴斯,一个被战火包围的小镇上,一群人试图在“无主之地”建立正常生活。"
  },
  {
    "title": "奇谈",
    "href": "details/movie-1811.html",
    "cover": "./11.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "民俗恐怖",
      "巫术",
      "连环杀人",
      "乡村怪谈"
    ],
    "oneLine": "民俗学家不信鬼怪,前往诡异山村调查怪谈,却发现所有的怪谈都是为了掩盖一个活人的罪行。"
  },
  {
    "title": "斯巴达克斯:竞技场之神",
    "href": "details/movie-1812.html",
    "cover": "./12.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "角斗士",
      "古罗马",
      "复仇",
      "黄暴",
      "史诗"
    ],
    "oneLine": "斯巴达克斯起义之前,传奇角斗士“克里克斯”在竞技场中为自由而战,却发现自己只是贵族的玩物。"
  },
  {
    "title": "兔子镇的火狐狸",
    "href": "details/movie-1813.html",
    "cover": "./13.jpg",
    "year": "2019",
    "region": "中国大陆/德国",
    "type": "电影/动画",
    "category": "国产短剧",
    "tags": [
      "拟人动物",
      "反转",
      "间谍",
      "友情"
    ],
    "oneLine": "一只被派去兔子镇窃取能源秘密的火狐狸,却因爱上萝卜炖兔肉而背叛了狐狸王国。"
  },
  {
    "title": "当潮起时",
    "href": "details/movie-1814.html",
    "cover": "./14.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "钱塘江",
      "返乡",
      "非遗传承"
    ],
    "oneLine": "逃离家乡二十年的服装设计师因父亲病重回乡,却在一场潮水事故中,重新理解了父亲和这片土地。"
  },
  {
    "title": "男生日记",
    "href": "details/movie-1815.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "青春/成长",
    "category": "国产短剧",
    "tags": [
      "青春期",
      "性别认知",
      "校园霸凌",
      "日记体"
    ],
    "oneLine": "一名高中男生在日记里写下“我想穿裙子去上学”,这本日记意外被全班传阅后,一场风暴开始了。"
  },
  {
    "title": "听著,菲利普",
    "href": "details/movie-1816.html",
    "cover": "./16.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "心理惊悚",
      "噪音",
      "自闭症",
      "复仇",
      "高智商犯罪"
    ],
    "oneLine": "一个患有超常听觉的自闭症少年,为了替被家暴的母亲复仇,用噪音制造了一场完美谋杀。"
  },
  {
    "title": "量子框架",
    "href": "details/movie-1817.html",
    "cover": "./17.jpg",
    "year": "2027",
    "region": "德国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "量子计算机",
      "平行现实",
      "意识上传"
    ],
    "oneLine": "物理学家用量子计算机重建已故妻子的意识,却引来了无数个平行宇宙里的“她”。"
  },
  {
    "title": "屠龙少年历险记",
    "href": "details/movie-1818.html",
    "cover": "./18.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "动画电影",
    "category": "科幻奇幻",
    "tags": [
      "成长",
      "勇气",
      "魔法",
      "史诗"
    ],
    "oneLine": "懦弱少年为救村庄踏上屠龙路,却发现恶龙曾是守护世界的英雄。"
  },
  {
    "title": "我与拿破仑",
    "href": "details/movie-1819.html",
    "cover": "./19.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "穿越",
      "拿破仑",
      "历史解构",
      "荒诞"
    ],
    "oneLine": "历史系研究生意外把拿破仑一世带回现代合租公寓。"
  },
  {
    "title": "无限春光27",
    "href": "details/movie-1820.html",
    "cover": "./20.jpg",
    "year": "2017",
    "region": "新加坡",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "酒店房间",
      "年代跨越多段式",
      "风情",
      "人生"
    ],
    "oneLine": "新加坡某酒店27号房,从1940年到2017年,见证了十二段春宵与孤独。"
  },
  {
    "title": "藤田嗣治",
    "href": "details/movie-1821.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "日本/法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "画家",
      "巴黎画派",
      "身份认同"
    ],
    "oneLine": "旅法日本画家藤田嗣治,在东西方夹缝中创造了乳白色裸女,却一生无法融入任何一边。"
  },
  {
    "title": "开心快活人",
    "href": "details/movie-1822.html",
    "cover": "./22.jpg",
    "year": "1989",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "动作喜剧",
      "小人物",
      "复仇",
      "飙车",
      "爱情"
    ],
    "oneLine": "一位生性乐观的泊车小弟意外卷入黑帮阴谋,不得不靠车技和运气拯救心上人。"
  },
  {
    "title": "多少爱,可以重来",
    "href": "details/movie-1823.html",
    "cover": "./23.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "破镜重圆",
      "中年危机",
      "离婚冷静期",
      "市井生活",
      "茶餐厅"
    ],
    "oneLine": "离婚三十年的老夫妻因一份过期房产协议被迫同居三十天,在茶餐厅的烟火气里,重新认识彼此。"
  },
  {
    "title": "持摄影机的人",
    "href": "details/movie-1824.html",
    "cover": "./24.jpg",
    "year": "2024",
    "region": "乌克兰",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "战地记者",
      "伪纪录片",
      "道德困境",
      "第一人称"
    ],
    "oneLine": "一个战地记者在废墟中发现了一台还在录像的家用摄影机,里面的内容颠覆了战争的叙事。"
  },
  {
    "title": "女孩,母亲与恶魔",
    "href": "details/movie-1825.html",
    "cover": "./25.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "代际创伤",
      "附身",
      "母女关系",
      "民俗恐怖",
      "反转"
    ],
    "oneLine": "母亲为保护女儿驱魔,却发现恶魔根本不存在,真正被附身的是母女之间世袭的怨恨。"
  },
  {
    "title": "牢笼之热",
    "href": "details/movie-1826.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "监狱",
      "热浪",
      "窒息",
      "人权",
      "黑幕"
    ],
    "oneLine": "一场持续40天的极端热浪席卷封闭式监狱,囚犯与狱警同时沦为被抛弃的人。"
  },
  {
    "title": "星河办事处",
    "href": "details/movie-1827.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "太空公务员",
      "星际行政",
      "荒诞",
      "职场",
      "宇宙社会学"
    ],
    "oneLine": "银河系联合政府的基层办事处,只有三个公务员,要管八百个星系的违章建筑和婚姻登记。"
  },
  {
    "title": "限时救援",
    "href": "details/movie-1828.html",
    "cover": "./28.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "极限营救",
      "单亲父亲",
      "都市跑酷"
    ],
    "oneLine": "为了在女儿手术前筹集百万救命钱,退伍特种兵被迫成为富豪的“替身肉票”,却意外卷入了一场政治阴谋。"
  },
  {
    "title": "世运英雄传",
    "href": "details/movie-1829.html",
    "cover": "./29.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "举重",
      "原住民",
      "世代传承",
      "逆袭",
      "真实改编"
    ],
    "oneLine": "一个被体校退训的排湾族女孩,回到部落跟爷爷学古法举石,最终站上亚运赛场。"
  },
  {
    "title": "拳王阿里",
    "href": "details/movie-1830.html",
    "cover": "./30.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "拳击",
      "种族平权",
      "传奇人物",
      "政治斗争"
    ],
    "oneLine": "不拍阿里封神之战,只聚焦他被吊销拳击执照、面临五年监禁时最黑暗的121天。"
  },
  {
    "title": "边缘干探",
    "href": "details/movie-1831.html",
    "cover": "./31.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "卧底",
      "双面人生",
      "黑警",
      "街头激战",
      "人性拷问"
    ],
    "oneLine": "一名游走在法律与罪恶边缘的卧底警察,在即将收网之际,发现自己成了警队内部清洗的最高目标。"
  },
  {
    "title": "扶桑花女孩",
    "href": "details/movie-1832.html",
    "cover": "./32.jpg",
    "year": "2006",
    "region": "日本",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "草裙舞",
      "煤矿",
      "昭和",
      "女性"
    ],
    "oneLine": "昭和40年代的日本煤矿小镇,一群女孩赌上一切学习草裙舞,只为拯救即将被关闭的度假村。"
  },
  {
    "title": "恋之光",
    "href": "details/movie-1833.html",
    "cover": "./33.jpg",
    "year": "2023",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "光芒",
      "看见爱",
      "治愈",
      "纯爱"
    ],
    "oneLine": "一位能看到恋爱中人体发出光芒的大学生,遇到了一个完全不会发光的女孩,他开始好奇,爱情究竟是什么。"
  },
  {
    "title": "傻哥的逆袭",
    "href": "details/movie-1834.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "底层",
      "兄弟情",
      "励志",
      "社会讽刺"
    ],
    "oneLine": "智力低下的傻子捡到一袋钱,被全村嘲笑后,他用最笨的办法开了一家“傻子银行”,最后逼疯了所有聪明人。"
  },
  {
    "title": "烟草",
    "href": "details/movie-1835.html",
    "cover": "./35.jpg",
    "year": "2005",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "独立电影",
      "乡村",
      "父辈",
      "劳动"
    ],
    "oneLine": "云南边陲小镇,一位烟农父亲为了让女儿上学,在收购站前蹲了七天七夜,只为把烟叶卖出好价钱。"
  },
  {
    "title": "约瑟夫的礼物",
    "href": "details/movie-1836.html",
    "cover": "./36.jpg",
    "year": "2014",
    "region": "法国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "二战",
      "神秘",
      "救赎",
      "老人",
      "温情"
    ],
    "oneLine": "二战老兵的孙子在阁楼发现一个从未寄出的包裹,收件人是已消失六十年的集中营战友。"
  },
  {
    "title": "剧团零号",
    "href": "details/movie-1837.html",
    "cover": "./37.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "实验剧场",
      "都市传说",
      "集体癔症",
      "艺术献祭"
    ],
    "oneLine": "一个被封印的剧本重现江湖,加入剧团的演员们开始分不清角色与现实的界限,逐步走向疯狂。"
  },
  {
    "title": "好莱坞怪物",
    "href": "details/movie-1838.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "制片厂",
      "实体特效",
      "行业黑幕"
    ],
    "oneLine": "一名过气特效师发现,好莱坞金牌制片人用真实杀人魔替换了片场里的怪物演员。"
  },
  {
    "title": "禁宫情妓",
    "href": "details/movie-1839.html",
    "cover": "./39.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "古装甜宠",
    "tags": [
      "宫廷",
      "权谋",
      "传奇"
    ],
    "oneLine": "教坊司最卑微的官妓,被太监选入后宫当棋子,却一步步成了皇帝唯一不敢碰的女人。"
  },
  {
    "title": "杜宾专员:白色毒药",
    "href": "details/movie-1840.html",
    "cover": "./40.jpg",
    "year": "2025",
    "region": "德国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "缉毒",
      "连环案",
      "孤胆英雄"
    ],
    "oneLine": "缉毒专员杜宾在调查一种新型毒品时发现,毒贩的下一个目标竟是戒毒所里的亲生女儿。"
  },
  {
    "title": "盐之路",
    "href": "details/movie-1841.html",
    "cover": "./41.jpg",
    "year": "2024",
    "region": "英国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "徒步",
      "中年危机",
      "丧子之痛",
      "真实事件改编",
      "治愈"
    ],
    "oneLine": "一对破产又丧子的中年夫妇,决定徒步穿越英国最险峻的海岸线,用脚步找回活下去的勇气。"
  },
  {
    "title": "西谎极落之太爆太子太空舱",
    "href": "details/movie-1842.html",
    "cover": "./42.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港式荒诞",
      "太空舱",
      "住房",
      "平行宇宙"
    ],
    "oneLine": "香港一群住在棺材房“太空舱”的年轻人意外发现自己所处的楼宇其实是一艘伪装成居民楼的太空飞船。"
  },
  {
    "title": "星星知我心",
    "href": "details/movie-1843.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "重组家庭",
      "继母",
      "治愈",
      "女性成长",
      "亲情"
    ],
    "oneLine": "一个恐婚的职场女强人,突然成了五个闹分家的青春期孩子的“继母”。 发誓不婚的女强人林星,在父亲再婚后,被迫接手照顾继母带来的五个叛逆子女,而继母却突然消失了。"
  },
  {
    "title": "月亮之光",
    "href": "details/movie-1844.html",
    "cover": "./44.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "克隆人",
      "月球基地",
      "生命伦理",
      "自我认同"
    ],
    "oneLine": "在月球采矿基地工作的克隆人发现自己已经是第12代复制体,而每次“保养”实际上就是被销毁重造。"
  },
  {
    "title": "偏爱靠近你",
    "href": "details/movie-1845.html",
    "cover": "./45.jpg",
    "year": "2023",
    "region": "韩国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "办公室",
      "青梅竹马",
      "双向暗恋",
      "甜宠",
      "治愈"
    ],
    "oneLine": "新来的CEO竟是童年时总被自己保护的“鼻涕虫”,如今他却故意装作不认识她,只为逼她先告白。"
  },
  {
    "title": "城寨英雄粤语",
    "href": "details/movie-1846.html",
    "cover": "./46.jpg",
    "year": "2016",
    "region": "中国香港",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "九龙城寨",
      "功夫",
      "热血",
      "TVB 巅峰",
      "除暴安良"
    ],
    "oneLine": "九龙城寨最混乱的角落,隐藏着当年被灭门的八极拳传人,他要单挑三巨恶。"
  },
  {
    "title": "侠盗偷画大作战",
    "href": "details/movie-1847.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "高智商犯罪",
      "团队协作",
      "艺术盗窃",
      "反转"
    ],
    "oneLine": "五位各怀绝技的落魄侠盗接下一单天价名画盗窃任务,却发现画中藏着足以颠覆艺术界的惊天秘密。"
  },
  {
    "title": "南征北战",
    "href": "details/movie-1848.html",
    "cover": "./48.jpg",
    "year": "1952",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "解放战争",
      "经典",
      "黑白片",
      "大场面"
    ],
    "oneLine": "华东野战军一个团从苏北撤退到鲁南,再从鲁南反攻,用脚步丈量了半个中国。"
  },
  {
    "title": "下一个圣诞节见",
    "href": "details/movie-1849.html",
    "cover": "./49.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "时空循环",
      "圣诞节",
      "浪漫喜剧",
      "成长"
    ],
    "oneLine": "单身女教师发誓不过圣诞节,却意外被困在“圣诞前夕”的时间循环里,除非她找到真爱。"
  },
  {
    "title": "等着你回来2010",
    "href": "details/movie-1850.html",
    "cover": "./50.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "时空恋旅人",
      "港风",
      "怀旧",
      "命运",
      "催泪"
    ],
    "oneLine": "2010年的他和2024年的她通过一部废弃的公用电话相连,她要阻止他的死亡。"
  },
  {
    "title": "玉女桃花半夜开",
    "href": "details/movie-1851.html",
    "cover": "./51.jpg",
    "year": "2025",
    "region": "中国内地",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "仙侠",
      "反差萌",
      "女帝",
      "契约婚姻",
      "沙雕"
    ],
    "oneLine": "高冷女战神为渡情劫,下凡成为凡间花魁,结果接客第一天就遇到了自己逃婚的将军未婚夫。"
  },
  {
    "title": "离婚好麻吉",
    "href": "details/movie-1852.html",
    "cover": "./52.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "喜剧家庭",
    "tags": [
      "离婚",
      "成年友谊",
      "重组家庭"
    ],
    "oneLine": "三对离婚夫妻阴差阳错成为邻居,成立了“离婚者联盟”,专帮别人离婚,自己却陷入了更复杂的感情漩涡。"
  },
  {
    "title": "小马宝莉:新世代国语版",
    "href": "details/movie-1853.html",
    "cover": "./53.jpg",
    "year": "2024",
    "region": "美国/中国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "友谊",
      "冒险",
      "配音"
    ],
    "oneLine": "当小马国失去魔法,三只性格迥异的小马踏上寻回陆马、飞马和独角兽之间信任的旅程。"
  },
  {
    "title": "黑色宿舍",
    "href": "details/movie-1854.html",
    "cover": "./54.jpg",
    "year": "2012",
    "region": "日本",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "校园怪谈",
      "宿舍",
      "诅咒",
      "集体凌辱",
      "复仇"
    ],
    "oneLine": "艺术大学女生宿舍流传着一条规矩:凌晨两点,绝对不要看走廊尽头的镜子。"
  },
  {
    "title": "癫狂!",
    "href": "details/movie-1855.html",
    "cover": "./55.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "精神病院",
      "反转",
      "人格分裂",
      "密室"
    ],
    "oneLine": "六个人在一间废弃的精神病院醒来,他们发现自己曾是这里的医生,也是这里的病人,更是连环杀手。"
  },
  {
    "title": "毒行公路",
    "href": "details/movie-1856.html",
    "cover": "./56.jpg",
    "year": "2025",
    "region": "墨西哥/美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "公路片",
      "毒枭",
      "复仇",
      "卡车司机"
    ],
    "oneLine": "一名退役赛车手转行做卡车司机,无意中卷入运毒案,妻子被害,他在66号公路上展开了血腥复仇。"
  },
  {
    "title": "超能小萌怪:永远在一起",
    "href": "details/movie-1857.html",
    "cover": "./57.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影/动画",
    "category": "喜剧家庭",
    "tags": [
      "萌宠合家欢",
      "治愈系",
      "魔法冒险"
    ],
    "oneLine": "当小萌怪的魔法开始让小镇居民的情感消失,它们必须用最古老的咒语——友谊,来拯救所有人。"
  },
  {
    "title": "花姊妹风流债",
    "href": "details/movie-1858.html",
    "cover": "./58.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "女性",
      "欲望",
      "家庭",
      "禁忌"
    ],
    "oneLine": "理发店三姐妹靠美色周旋于男人之间,当富商父亲突然归国,一场关于爱与金钱的荒诞游戏必须结束。"
  },
  {
    "title": "电光火石",
    "href": "details/movie-1859.html",
    "cover": "./59.jpg",
    "year": "2020",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "超能力",
      "极速",
      "地下搏击"
    ],
    "oneLine": "一个能在一秒内打出百拳的男人,唯一的对手是正在老去的自己。"
  },
  {
    "title": "肌电工情",
    "href": "details/movie-1860.html",
    "cover": "./60.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "健美",
      "地下拳赛",
      "兄弟情",
      "肉身美学"
    ],
    "oneLine": "过气健美冠军为救患尿毒症的兄弟,50岁高龄复出打黑市拳,每一块肌肉都在替命。"
  },
  {
    "title": "月亮在跳舞",
    "href": "details/movie-1861.html",
    "cover": "./61.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "阿尔茨海默",
      "母女",
      "舞蹈",
      "治愈"
    ],
    "oneLine": "患上阿尔茨海默症的芭蕾舞母亲,只记得一支未完成的舞,女儿决定陪她在病房里跳完。"
  },
  {
    "title": "2020去死",
    "href": "details/movie-1862.html",
    "cover": "./62.jpg",
    "year": "2023",
    "region": "多国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "疫情",
      "黑色幽默",
      "群像",
      "末日狂欢"
    ],
    "oneLine": "疫情封锁期间,一栋公寓楼里的住户通过阳台合唱,逐渐揭开了彼此隐瞒的惊天秘密。"
  },
  {
    "title": "古田会议",
    "href": "details/movie-1863.html",
    "cover": "./63.jpg",
    "year": "2016",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "革命历史",
      "伟人",
      "思想建党",
      "政治建军",
      "红色经典"
    ],
    "oneLine": "1929年,红四军内部关于建军原则的争论白热化,年轻的毛泽东如何在古田会议上统一思想,奠定军队灵魂。"
  },
  {
    "title": "室踪",
    "href": "details/movie-1864.html",
    "cover": "./64.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "密室",
      "偷窥",
      "心理惊悚",
      "都市病"
    ],
    "oneLine": "社恐青年在家里装满了监控,某天回看录像时,发现凌晨三点自己会走出家门,而那时的自己像变了个人。"
  },
  {
    "title": "百妖谱·洛阳篇",
    "href": "details/movie-1865.html",
    "cover": "./65.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "妖怪",
      "单元剧",
      "治愈",
      "唐朝"
    ],
    "oneLine": "唐代洛阳,神秘少女持《百妖谱》行走市井,每收服一妖便引出一段人与妖的尘缘过往。"
  },
  {
    "title": "李润福的日记",
    "href": "details/movie-1866.html",
    "cover": "./66.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "真实事件改编",
      "少年犯罪",
      "日记体叙事",
      "社会派"
    ],
    "oneLine": "一桩震惊全国的小学生连续杀人案,凶手只留下一本日记,里面写满“我想成为爸爸的英雄”。"
  },
  {
    "title": "心田",
    "href": "details/movie-1867.html",
    "cover": "./67.jpg",
    "year": "1998",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "乡土",
      "亲情",
      "农业",
      "代沟"
    ],
    "oneLine": "一辈子务农的老顽固把土地视为命根子,面对城市开发的推土机,他用秧苗种出了一片水泥森林。"
  },
  {
    "title": "捍卫家园",
    "href": "details/movie-1868.html",
    "cover": "./68.jpg",
    "year": "2020",
    "region": "澳大利亚",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "枪战",
      "牧场",
      "退伍军人",
      "拆迁",
      "硬汉"
    ],
    "oneLine": "退役狙击手为保住家族牧场,一人对抗收买黑帮的开发商和腐败警长。"
  },
  {
    "title": "白米炸弹客",
    "href": "details/movie-1869.html",
    "cover": "./69.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "真实改编",
      "食品安全",
      "农民抗争",
      "孤胆英雄"
    ],
    "oneLine": "沉默的老农为抗议进口米混充,自制低杀伤力炸弹在台北引爆,却没伤一人,只在米袋上留下警告。"
  },
  {
    "title": "滚出我地盘",
    "href": "details/movie-1870.html",
    "cover": "./70.jpg",
    "year": "2025",
    "region": "英国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "拆迁惊魂",
      "冤魂老宅",
      "英式黑色幽默",
      "阶级讽刺"
    ],
    "oneLine": "无良开发商强行征收老宅,却发现屋里住着一个脾气比他们还差的维多利亚时代恶灵。"
  },
  {
    "title": "美人鱼2016",
    "href": "details/movie-1871.html",
    "cover": "./71.jpg",
    "year": "2016",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "周星驰",
      "环保",
      "喜剧",
      "童话",
      "悲剧内核"
    ],
    "oneLine": "为了阻止声呐杀死同类,一条美人鱼伪装成人类去勾引地产大亨,却先交出了自己的心。"
  },
  {
    "title": "嗜血旅馆",
    "href": "details/movie-1872.html",
    "cover": "./72.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "旅馆",
      "吸血鬼",
      "暴风雪山庄",
      "禁忌实验"
    ],
    "oneLine": "一家偏僻旅馆的每个房间都藏着“客人”,而新住客发现这里的自来水是红色的。"
  },
  {
    "title": "拔打鸦",
    "href": "details/movie-1873.html",
    "cover": "./73.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "原住民",
      "童年",
      "乡村",
      "成长"
    ],
    "oneLine": "排湾族小男孩为了给病重的奶奶治病,决定去捕捉传说中会带来好运的乌鸦。"
  },
  {
    "title": "黑超特警组:反转世界",
    "href": "details/movie-1874.html",
    "cover": "./74.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "外星移民",
      "平行宇宙",
      "搭档探案",
      "反套路",
      "重启"
    ],
    "oneLine": "当MIB内部出现“人类威胁论”叛徒,两名最不靠谱的特工必须进入镜像宇宙,阻止两个世界的战争。"
  },
  {
    "title": "生死路",
    "href": "details/movie-1875.html",
    "cover": "./75.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电视剧",
    "category": "动作冒险",
    "tags": [
      "公路悬疑",
      "无限循环",
      "心理惊悚",
      "人性拷问",
      "烧脑"
    ],
    "oneLine": "一辆开往边境的大巴车坠崖,唯一的幸存者醒来后发现,这条路永远开不到终点。"
  },
  {
    "title": "2024北京卫视跨年晚会",
    "href": "details/movie-1876.html",
    "cover": "./76.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "综艺/晚会",
    "category": "国产短剧",
    "tags": [
      "跨年",
      "现场",
      "群星",
      "北京"
    ],
    "oneLine": "2024年北京卫视跨年晚会,群星齐聚,用歌声迎接新年的第一缕曙光。"
  },
  {
    "title": "神马仙姬",
    "href": "details/movie-1877.html",
    "cover": "./77.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "仙界职场",
      "反内卷",
      "甜宠",
      "想象力"
    ],
    "oneLine": "凡间打工社畜穿越成天界最底层的“弼马温”仙姬,却发现天界也要KPI和加班,她决定用现代管理术颠覆整个天庭。"
  },
  {
    "title": "夜限照相馆",
    "href": "details/movie-1878.html",
    "cover": "./78.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "都市传说",
      "亡灵",
      "治愈",
      "摄影",
      "神秘店铺"
    ],
    "oneLine": "首尔一家只在午夜开门的古老照相馆,专为在世间留下最后影像的亡魂服务。"
  },
  {
    "title": "人生赛局",
    "href": "details/movie-1879.html",
    "cover": "./79.jpg",
    "year": "2025",
    "region": "中国香港/中国大陆",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "赛马",
      "赌博",
      "父子和解"
    ],
    "oneLine": "落魄的前骑师与嗜赌的儿子,为了挽救一匹即将被屠宰的赛马,父子上演了一场不可能赢的人生赌局。"
  },
  {
    "title": "繁殖",
    "href": "details/movie-1880.html",
    "cover": "./80.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "克隆伦理",
      "人体实验",
      "惊悚反转"
    ],
    "oneLine": "一项突破性的基因复制技术,让人类可以“繁殖”自己,却意外唤醒了深埋的远古记忆。"
  },
  {
    "title": "男人女人粤语",
    "href": "details/movie-1881.html",
    "cover": "./81.jpg",
    "year": "1997",
    "region": "中国香港",
    "type": "电视剧",
    "category": "都市爱情",
    "tags": [
      "都市情感",
      "黄子华风格",
      "粤语原声",
      "职场"
    ],
    "oneLine": "一间广告公司里,三个男人和三个女人就爱情与尊严展开长达30集的“粤语金句攻防战”。"
  },
  {
    "title": "浮华世界",
    "href": "details/movie-1882.html",
    "cover": "./82.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "豪门恩怨",
      "复仇",
      "珠宝"
    ],
    "oneLine": "贫民窟女孩伪造身份打入香港顶级珠宝家族,她想要的不只是钱,更是让这个姓氏从名流录上消失。"
  },
  {
    "title": "麦克尔",
    "href": "details/movie-1883.html",
    "cover": "./83.jpg",
    "year": "2015",
    "region": "德国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "中年危机",
      "师生恋",
      "古典乐",
      "压抑",
      "救赎"
    ],
    "oneLine": "一位过气的中年钢琴家,将他最后的激情投注在一个沉默的男学生身上,却引发了致命的嫉妒。"
  },
  {
    "title": "能人冯天贵",
    "href": "details/movie-1884.html",
    "cover": "./84.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "乡村振兴",
      "返乡创业",
      "农民",
      "致富",
      "轻喜剧"
    ],
    "oneLine": "在城市混不下去的“冯大嘴”回到陕北农村,靠一张嘴和一群留守老人,竟折腾出了全国闻名的羊粪有机肥品牌。"
  },
  {
    "title": "古董王爷",
    "href": "details/movie-1885.html",
    "cover": "./85.jpg",
    "year": "2025",
    "region": "中国",
    "type": "电视剧",
    "category": "古装甜宠",
    "tags": [
      "民国",
      "满族",
      "收藏",
      "幽默"
    ],
    "oneLine": "民国初年,穷困潦倒的王爷变卖祖宅时发现了一张藏宝图,却引来各方骗子、军阀和洋人的轮番“拜访”。"
  },
  {
    "title": "小狗波图",
    "href": "details/movie-1886.html",
    "cover": "./86.jpg",
    "year": "2024",
    "region": "土耳其",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "动物",
      "地震",
      "幸存者",
      "治愈"
    ],
    "oneLine": "大地震后,一只被压断后腿的小狗带着一个聋哑女孩,在废墟下寻找通往地面的氧气缝隙。"
  },
  {
    "title": "刃牙第一季",
    "href": "details/movie-1887.html",
    "cover": "./87.jpg",
    "year": "2018",
    "region": "日本",
    "type": "动画剧集",
    "category": "动作冒险",
    "tags": [
      "格斗竞技",
      "地下斗技场",
      "父子恩怨",
      "超越人类"
    ],
    "oneLine": "高中生刃牙为了打败世界最强的父亲,踏上了挑战各路格斗怪物的修罗之路。"
  },
  {
    "title": "行动倒数",
    "href": "details/movie-1888.html",
    "cover": "./88.jpg",
    "year": "2022",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "实时叙事",
      "拆弹",
      "卧底",
      "倒计时"
    ],
    "oneLine": "警局被黑客入侵,每一集都是一小时倒计时,拆错一根线就引爆人质。"
  },
  {
    "title": "收获3000年",
    "href": "details/movie-1889.html",
    "cover": "./89.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "家族史诗",
      "土地",
      "农耕文明"
    ],
    "oneLine": "一块从商周传下来的家族田契,横跨三千年,记录了三十代人在同一片土地上的悲欢离合。"
  },
  {
    "title": "文字与图像",
    "href": "details/movie-1890.html",
    "cover": "./90.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "作家",
      "画家",
      "语言游戏"
    ],
    "oneLine": "一个江郎才尽的小说家与一个盲人女画家,通过“描述”与“作画”的游戏,重新找到了创作的意义。"
  },
  {
    "title": "孖床",
    "href": "details/movie-1891.html",
    "cover": "./91.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "公屋",
      "兄弟情",
      "居住困境",
      "黑色幽默"
    ],
    "oneLine": "三十岁的亲兄弟睡在一张上下铺上,哥哥带女友回家过夜,弟弟在隔壁床上打游戏开黑,声音震天响。"
  },
  {
    "title": "陆王",
    "href": "details/movie-1892.html",
    "cover": "./92.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "企业重生",
      "马拉松",
      "匠人精神",
      "家族经营"
    ],
    "oneLine": "一家濒临破产的足袋老铺,用制造足袋的百年工艺开发出一双能改变马拉松历史的跑鞋。"
  },
  {
    "title": "家和万事兴之抬头见喜",
    "href": "details/movie-1893.html",
    "cover": "./93.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "贺岁",
      "东北喜剧",
      "返乡过年"
    ],
    "oneLine": "破产富二代装成成功人士回乡过年,不料全村人都以为他是真的大款。"
  },
  {
    "title": "7500航班",
    "href": "details/movie-1894.html",
    "cover": "./94.jpg",
    "year": "2014",
    "region": "美国/日本",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "飞机",
      "幽灵",
      "日式恐怖",
      "密闭空间",
      "诅咒"
    ],
    "oneLine": "一架从洛杉矶飞往东京的午夜航班在太平洋上空遭遇严重湍流,乘客们惊恐地发现,每隔7分钟就会有一名乘客“人间蒸发”。"
  },
  {
    "title": "大卫·查普尔的街区聚会",
    "href": "details/movie-1895.html",
    "cover": "./95.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影/纪录片",
    "category": "喜剧家庭",
    "tags": [
      "单口喜剧",
      "嘻哈",
      "街头文化",
      "政治讽刺",
      "现场实况"
    ],
    "oneLine": "喜剧大师大卫·查普尔在他的老街区举办了一场免费街区派对,结果派对本身比他的段子还要荒诞十倍。"
  },
  {
    "title": "神猫密探队",
    "href": "details/movie-1896.html",
    "cover": "./96.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "猫",
      "侦探",
      "动物破案",
      "合家欢"
    ],
    "oneLine": "三只流浪猫无意中录下了杀人现场,全城的人都在找这段视频,只有猫知道它在哪。"
  },
  {
    "title": "夺命太岁老虎枪",
    "href": "details/movie-1897.html",
    "cover": "./97.jpg",
    "year": "1992",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "枪战",
      "黑帮",
      "复仇",
      "兄弟情"
    ],
    "oneLine": "一把祖传的纯金老虎手枪重现江湖,引来黑白两道腥风血雨,却不知枪膛里藏着惊天秘密。"
  },
  {
    "title": "太一剑仙传",
    "href": "details/movie-1898.html",
    "cover": "./98.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "动画电影",
    "category": "国产短剧",
    "tags": [
      "修仙玄幻",
      "剑道巅峰",
      "逆天改命",
      "唯美国风",
      "仙魔大战"
    ],
    "oneLine": "落魄剑修携神秘断剑重入仙门,在考核中激活上古剑灵,却被指认为威胁三界的“邪剑宿主”。"
  },
  {
    "title": "选举潮",
    "href": "details/movie-1899.html",
    "cover": "./99.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "黑金",
      "选举舞弊",
      "权力游戏",
      "卧底"
    ],
    "oneLine": "黑帮大佬买通选举,却意外被一名清洁工推上区议员宝座,闹剧由此失控。"
  },
  {
    "title": "野蛮人柯南",
    "href": "details/movie-1900.html",
    "cover": "./100.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "剑与魔法",
      "复仇",
      "蛮族",
      "重启",
      "血腥"
    ],
    "oneLine": "为了给被屠杀的族人报仇,野蛮人柯南必须找到能召唤远古恶魔的神器,却发现自己才是真正的恶魔。"
  },
  {
    "title": "幻灭2003",
    "href": "details/movie-1901.html",
    "cover": "./101.jpg",
    "year": "2003",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "巴黎",
      "文学青年",
      "阶级跨越",
      "巴尔扎克改编",
      "幻灭"
    ],
    "oneLine": "外省才子闯荡巴黎新闻界,却发现文学的天平上,金钱比才华重一万克。"
  },
  {
    "title": "圆梦公司",
    "href": "details/movie-1902.html",
    "cover": "./102.jpg",
    "year": "2026",
    "region": "英国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "记忆",
      "代价",
      "人性"
    ],
    "oneLine": "一家神秘公司可以让你体验任何梦想人生,但代价是你必须遗忘一段现实。"
  },
  {
    "title": "老男人变奏曲",
    "href": "details/movie-1903.html",
    "cover": "./103.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "中年危机",
      "钢琴",
      "友情",
      "怀旧",
      "幽默"
    ],
    "oneLine": "两个失业的老同学偷了一架废弃钢琴,却因此卷入一场荒诞的音乐比赛。"
  },
  {
    "title": "马路英雄",
    "href": "details/movie-1904.html",
    "cover": "./104.jpg",
    "year": "1991",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "飞车",
      "黑帮",
      "兄弟情",
      "港产片"
    ],
    "oneLine": "一个热爱赛车的底层青年为了替死去的兄弟报仇,在午夜的地下赛道上向权力发起了死亡冲刺。"
  },
  {
    "title": "最后的嬉皮",
    "href": "details/movie-1905.html",
    "cover": "./105.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "怀旧",
      "反战",
      "乐队",
      "亲情"
    ],
    "oneLine": "一名患阿兹海默症的老嬉皮只有在听到60年代摇滚乐时,才能认出已决裂半生的儿子。"
  },
  {
    "title": "本命年",
    "href": "details/movie-1906.html",
    "cover": "./106.jpg",
    "year": "1990",
    "region": "中国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "北京",
      "待业青年",
      "宿命",
      "谢飞"
    ],
    "oneLine": "八十年代末北京胡同青年泉子刑满释放,想重新做人,却发现整个时代都在跟他错位。"
  },
  {
    "title": "再见时光",
    "href": "details/movie-1907.html",
    "cover": "./107.jpg",
    "year": "2017",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "阿尔茨海默症",
      "亲情",
      "怀旧"
    ],
    "oneLine": "患有阿尔茨海默症的母亲,记忆永远停留在儿子8岁那年的夏天,年近40的儿子决定陪母亲重新度过那一个暑假。"
  },
  {
    "title": "福冈恋爱白书10",
    "href": "details/movie-1908.html",
    "cover": "./108.jpg",
    "year": "2019",
    "region": "日本",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "福冈",
      "纯爱",
      "真人真事",
      "异地恋",
      "博多"
    ],
    "oneLine": "在福冈县宗像市,一位失意的东京上班族偶然收到一封来自20年前初恋女友埋下的时光胶囊信件。"
  },
  {
    "title": "华尔街狼人",
    "href": "details/movie-1909.html",
    "cover": "./109.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "怪物",
      "金融",
      "身体恐怖",
      "社会隐喻",
      "血腥"
    ],
    "oneLine": "每当纽约证券交易所收盘的钟声敲响,满月的华尔街就会变身嗜血狼人的狩猎场。"
  },
  {
    "title": "唱歌的女人",
    "href": "details/movie-1910.html",
    "cover": "./110.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "香颂",
      "回忆",
      "母子",
      "阿尔茨海默"
    ],
    "oneLine": "患上阿尔茨海默症的老太太只会唱一首歌,儿子花了十年找到那首歌背后的女人——那是父亲一生的秘密。"
  },
  {
    "title": "愤怒鸟大电影2",
    "href": "details/movie-1911.html",
    "cover": "./111.jpg",
    "year": "2019",
    "region": "美国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "游戏改编",
      "搞笑",
      "友情",
      "猪鸟联盟",
      "脑洞"
    ],
    "oneLine": "猪猪岛和鸟岛停战了,因为第三个岛屿发射了更厉害的鸟屎导弹。"
  },
  {
    "title": "爱与罪",
    "href": "details/movie-1912.html",
    "cover": "./112.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "律师",
      "出轨",
      "谋杀",
      "反转"
    ],
    "oneLine": "专打离婚官司的女律师爱上了一个完美男人,直到她发现这个男人是她十岁那年杀人的目击者。"
  },
  {
    "title": "神笔马良",
    "href": "details/movie-1913.html",
    "cover": "./113.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "国风超能力",
      "画妖",
      "反压迫"
    ],
    "oneLine": "现代考古队挖出神笔,马良后人与跨国犯罪集团展开一场“画中决斗”。"
  },
  {
    "title": "梦断银城粤语",
    "href": "details/movie-1914.html",
    "cover": "./114.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港片黄金时代",
      "兄弟反目",
      "娱乐圈黑幕",
      "悲剧"
    ],
    "oneLine": "八十年代香港娱乐圈最红的两兄弟,一个成了影帝,一个成了尸体,都死在了“银城”夜总会的同一个包厢。"
  },
  {
    "title": "我的妈咪不是人",
    "href": "details/movie-1915.html",
    "cover": "./115.jpg",
    "year": "2026",
    "region": "中国",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "机器人妈妈",
      "育儿",
      "冲突",
      "治愈"
    ],
    "oneLine": "儿子发现全能“超人妈妈”是机器人,而她为保护自己正逐渐故障。"
  },
  {
    "title": "奇怪的家政妇国语",
    "href": "details/movie-1916.html",
    "cover": "./116.jpg",
    "year": "2024",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "家政妇",
      "秘密",
      "双面人",
      "国语配音"
    ],
    "oneLine": "一个温柔能干的保姆进入单亲家庭后,孩子们渐渐变得乖巧,但家里的每起“意外”都像事先写好的剧本。"
  },
  {
    "title": "天堂谁属2",
    "href": "details/movie-1917.html",
    "cover": "./117.jpg",
    "year": "2025",
    "region": "德国",
    "type": "剧集",
    "category": "科幻奇幻",
    "tags": [
      "意识上传",
      "永生",
      "阴谋",
      "续作",
      "哲学"
    ],
    "oneLine": "第一季大屠杀后,仅存的意识体在云端重建文明,却发现天堂里混入了人间最恶的恶魔。"
  },
  {
    "title": "一二三,木头人",
    "href": "details/movie-1918.html",
    "cover": "./118.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "童年创伤",
      "失语症",
      "母女",
      "游戏"
    ],
    "oneLine": "因为儿时一场“一二三木头人”的游戏,女儿亲眼目睹母亲被杀,从此再也说不出话;二十年后,凶手假释出狱。"
  },
  {
    "title": "双面贤妻:毒杀姻亲14年",
    "href": "details/movie-1919.html",
    "cover": "./119.jpg",
    "year": "2024",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "真实改编",
      "长期投毒",
      "女性复仇",
      "婆媳"
    ],
    "oneLine": "韩国顺天市,儿媳用家用毒药缓慢毒杀公婆14年,全镇无人察觉,直到丈夫发现了日记。"
  },
  {
    "title": "三爱太难",
    "href": "details/movie-1920.html",
    "cover": "./120.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "爱情",
      "抉择",
      "都市",
      "女性成长"
    ],
    "oneLine": "同时收到三位完美男性的求婚,她却发现自己谁都不爱。"
  },
  {
    "title": "布鲁克林黑街",
    "href": "details/movie-1921.html",
    "cover": "./121.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "黑帮家族",
      "街头暴力",
      "兄弟情",
      "时代悲剧"
    ],
    "oneLine": "1990年代布鲁克林,一对意大利裔兄弟在父亲入狱后,被迫接管黑帮生意,却走向了截然不同的道路。"
  },
  {
    "title": "养鬼吃人",
    "href": "details/movie-1922.html",
    "cover": "./122.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "地狱修道士",
      "钉子头",
      "解谜盒",
      "重启"
    ],
    "oneLine": "一个好奇心旺盛的年轻人买下了古老的哀悼之匣,当他打开它时,来自地狱的修道士军团将他拖入了永恒的痛苦盛宴。"
  },
  {
    "title": "女高怪谈5:结伴自杀",
    "href": "details/movie-1923.html",
    "cover": "./123.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "校园诅咒",
      "契约",
      "反转"
    ],
    "oneLine": "四个女生签下“死后也要在一起”的契约,却只有一人活到了毕业。"
  },
  {
    "title": "红辣椒俱乐部",
    "href": "details/movie-1924.html",
    "cover": "./124.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "复仇女神",
      "黑色电影",
      "暴力美学",
      "底层反抗"
    ],
    "oneLine": "四个被生活逼入绝境的女人,开了一家只卖“复仇”的地下俱乐部。"
  },
  {
    "title": "春天里2005",
    "href": "details/movie-1925.html",
    "cover": "./125.jpg",
    "year": "2005",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "怀旧",
      "高考",
      "工厂子弟",
      "磁带",
      "下岗潮"
    ],
    "oneLine": "2005年北方小城,三个高三死党在高考前三个月,凑钱买了一盘周杰伦《十一月的肖邦》盗版磁带。"
  },
  {
    "title": "湛蓝青春海",
    "href": "details/movie-1926.html",
    "cover": "./126.jpg",
    "year": "2020",
    "region": "法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "夏日",
      "海边",
      "初恋",
      "成长",
      "遗憾"
    ],
    "oneLine": "1980年代法国海边小镇,两个少年在同一个暑假爱上同一片海,也爱上了对方。"
  },
  {
    "title": "我不是预言家",
    "href": "details/movie-1927.html",
    "cover": "./127.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "奇幻",
      "反转",
      "预知能力",
      "蝴蝶效应",
      "宿命"
    ],
    "oneLine": "高考生突然能看见每个人头顶的死亡倒计时,他却没法算出自己的。"
  },
  {
    "title": "17岁的疑惑",
    "href": "details/movie-1928.html",
    "cover": "./128.jpg",
    "year": "2026",
    "region": "中国台湾",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "校园霸凌",
      "平行时空",
      "日记本",
      "身份错位"
    ],
    "oneLine": "转学生捡到一本空白日记,每次书写都会让现实中的一个同学凭空消失。"
  },
  {
    "title": "蓝色的眼睛",
    "href": "details/movie-1929.html",
    "cover": "./129.jpg",
    "year": "2021",
    "region": "墨西哥/西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "诅咒",
      "蓝眼",
      "村庄",
      "邪教"
    ],
    "oneLine": "一个色盲摄影师来到墨西哥村庄,却发现当地所有的蓝色物体都在夜间移动,并窥视着村民。"
  },
  {
    "title": "铁马寻桥粤语",
    "href": "details/movie-1930.html",
    "cover": "./130.jpg",
    "year": "2010",
    "region": "香港",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "粤语原声",
      "家族恩怨",
      "功夫",
      "市井"
    ],
    "oneLine": "深水埗一间跌打馆的父子三人,一边用铁打药酒治人筋骨,一边用拳头治自己的家族旧伤。"
  },
  {
    "title": "杀死克鲁斯",
    "href": "details/movie-1931.html",
    "cover": "./131.jpg",
    "year": "2027",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "杀手",
      "好莱坞",
      "反转",
      "替身",
      "阴谋"
    ],
    "oneLine": "一名过气演员接到神秘任务:在电影首映夜之前,亲手“杀死”顶流明星克鲁斯。"
  },
  {
    "title": "维梅尔:光影大师",
    "href": "details/movie-1932.html",
    "cover": "./132.jpg",
    "year": "2024",
    "region": "荷兰",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "画家",
      "艺术",
      "悬疑",
      "光影"
    ],
    "oneLine": "维梅尔去世前留下一张神秘底片,两百年后人们才发现那不是画,而是照片。"
  },
  {
    "title": "魔幻爆米花",
    "href": "details/movie-1933.html",
    "cover": "./133.jpg",
    "year": "2023",
    "region": "美国",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "恶搞",
      "魔法",
      "影院奇遇"
    ],
    "oneLine": "电影院的爆米花机被陨石砸中,之后在这里吃爆米花的人,都会梦见自己变成正在上映的电影主角。"
  },
  {
    "title": "树木葬",
    "href": "details/movie-1934.html",
    "cover": "./134.jpg",
    "year": "2016",
    "region": "韩国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "环保恐怖",
      "邪教",
      "活埋"
    ],
    "oneLine": "一家推崇“树木葬”的环保殡葬公司,被揭发将未死的活人封入树脂棺材充当“养分”。"
  },
  {
    "title": "三勇士蛮荒救美",
    "href": "details/movie-1935.html",
    "cover": "./135.jpg",
    "year": "1985",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "原始部落",
      "救援",
      "蛮荒",
      "勇士",
      "异族"
    ],
    "oneLine": "三位来自不同部落的勇士必须联手穿越死亡沼泽,只为救回被献祭的少女。"
  },
  {
    "title": "德绍舞者",
    "href": "details/movie-1936.html",
    "cover": "./136.jpg",
    "year": "2022",
    "region": "德国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "舞蹈",
      "抗争",
      "自由",
      "历史",
      "政治"
    ],
    "oneLine": "真实事件改编。东德一名现代舞者因编了一支讽刺政府的舞蹈,被秘密警察盯上,她用身体对抗审查。"
  },
  {
    "title": "贞观盛事",
    "href": "details/movie-1937.html",
    "cover": "./137.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "唐朝",
      "李世民",
      "权谋"
    ],
    "oneLine": "以贞观年间一个“小人物”的视角,窥探盛世帷幕下的暗流与抉择。"
  },
  {
    "title": "美国派:索爱天书",
    "href": "details/movie-1938.html",
    "cover": "./138.jpg",
    "year": "2025",
    "region": "美国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "青春性喜剧",
      "遗书",
      "校园传说",
      "怀旧"
    ],
    "oneLine": "一群高中生找到了一本二十年前的“索爱秘籍”,却发现作者是学校里最受欢迎的清洁工。"
  },
  {
    "title": "最后的卓柏卡布拉国语",
    "href": "details/movie-1939.html",
    "cover": "./139.jpg",
    "year": "2020",
    "region": "美国/巴西",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "吸血怪兽",
      "丛林",
      "科研小队",
      "生存",
      "基因突变"
    ],
    "oneLine": "一支生物科研团队深入亚马逊丛林寻找传说中的吸血怪兽,却发现“卓柏卡布拉”来自一个不能公开的实验事故。"
  },
  {
    "title": "圣昆廷监狱篮球队",
    "href": "details/movie-1940.html",
    "cover": "./140.jpg",
    "year": "2024",
    "region": "美国",
    "type": "纪录片",
    "category": "动作冒险",
    "tags": [
      "囚犯",
      "篮球",
      "改造",
      "真实"
    ],
    "oneLine": "美国最老监狱里的篮球队,用一场球赛试图赎回失控的人生。"
  },
  {
    "title": "大奥秘物语",
    "href": "details/movie-1941.html",
    "cover": "./141.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "考古",
      "图腾",
      "民俗恐怖",
      "反转",
      "烧脑"
    ],
    "oneLine": "一支考古队在西南密林发现了一本用鲜血写成的古籍,书里预言了他们每一个人的死亡顺序。"
  },
  {
    "title": "等待的死亡",
    "href": "details/movie-1942.html",
    "cover": "./142.jpg",
    "year": "2024",
    "region": "法国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "倒计时",
      "心理博弈",
      "封闭空间"
    ],
    "oneLine": "七位陌生人被困地铁车厢,广播说每五分钟将有一人死去,直到找出凶手。"
  },
  {
    "title": "噗噗共鲜师",
    "href": "details/movie-1943.html",
    "cover": "./143.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "搞笑",
      "师生",
      "成长",
      "在地化",
      "热血"
    ],
    "oneLine": "一名菜市场猪肉摊主被误当成代课老师,他用卖猪肉的方法教出了一群学霸。"
  },
  {
    "title": "异兽觉醒",
    "href": "details/movie-1944.html",
    "cover": "./144.jpg",
    "year": "2026",
    "region": "澳大利亚",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "实验室泄漏",
      "古生物突变",
      "生存恐惧",
      "小成本大场面"
    ],
    "oneLine": "基因公司复活了远古寄生虫,宿主会变成“人形螳螂”,而孵化只需要三分钟。"
  },
  {
    "title": "追梦的黎族女娃娃",
    "href": "details/movie-1945.html",
    "cover": "./145.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "黎族",
      "女足",
      "乡村",
      "梦想"
    ],
    "oneLine": "海南黎族山区一个从未踢过球的小女孩,用椰子当足球、沙滩当球场,最终踢进国家少年队。"
  },
  {
    "title": "贴错门神粤语",
    "href": "details/movie-1946.html",
    "cover": "./146.jpg",
    "year": "1990",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "港式喜剧",
      "身份互换",
      "邻里纠纷"
    ],
    "oneLine": "两个死对头门神一夜之间灵魂互换,不得不硬着头皮替对方看家护院。"
  },
  {
    "title": "哭泣的忧罗娜",
    "href": "details/movie-1947.html",
    "cover": "./147.jpg",
    "year": "2019",
    "region": "墨西哥/美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "拉丁传说",
      "水鬼还魂",
      "母性黑暗",
      "现代改编"
    ],
    "oneLine": "现代版的“哭泣女人”传说:一个溺死自己孩子的母亲,她的鬼魂不是来复仇,而是来找回孩子的骨头。"
  },
  {
    "title": "再也不见2021",
    "href": "details/movie-1948.html",
    "cover": "./148.jpg",
    "year": "2023",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "疫情创伤",
      "告别仪式",
      "心理重建"
    ],
    "oneLine": "2021年因疫情失去爱人的四个陌生人,共同举办了一场“再也不见”集体告别会。"
  },
  {
    "title": "月落妇人心",
    "href": "details/movie-1949.html",
    "cover": "./149.jpg",
    "year": "2025",
    "region": "中国台湾/日本",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "母女关系",
      "潮汐隐喻",
      "记忆嫁接",
      "疗愈"
    ],
    "oneLine": "每当满月之夜,患有阿尔茨海默症的母亲会变成17岁时的模样,并且只记得女儿从未见过的、那个抛弃她的恋人。"
  },
  {
    "title": "新白蛇传",
    "href": "details/movie-1950.html",
    "cover": "./150.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "神话新编",
      "女性觉醒",
      "反宿命",
      "视觉国风"
    ],
    "oneLine": "这次,白素贞不是为了报恩才下凡,而是为了夺取许仙体内的“仙根”来对抗仙界,却在朝夕相处中动了真正的凡心。"
  },
  {
    "title": "开麦拉狂想曲",
    "href": "details/movie-1951.html",
    "cover": "./1.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "元电影",
      "剧组",
      "导演梦",
      "荒诞",
      "群像"
    ],
    "oneLine": "一个跑龙套的声称自己“导演”了整部经典电影,而真正的导演已经疯了。"
  },
  {
    "title": "跌宕起伏",
    "href": "details/movie-1952.html",
    "cover": "./2.jpg",
    "year": "2024",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "过山车",
      "创业",
      "兄弟情"
    ],
    "oneLine": "一对破产兄弟决定造全世界最恐怖的过山车,却发现金主是当年害死他们父亲的人。"
  },
  {
    "title": "跟我的前妻谈恋爱",
    "href": "details/movie-1953.html",
    "cover": "./3.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "离婚同居",
      "破镜重圆",
      "前任",
      "嘴硬心软",
      "都市生活"
    ],
    "oneLine": "一对离婚三年的欢喜冤家因为限购政策被迫继续住在同一套房子里,前妻每带一个新男友回家,前夫就在隔壁用音响放《分手快乐》。"
  },
  {
    "title": "隔窗恋爱:飘洋过海",
    "href": "details/movie-1954.html",
    "cover": "./4.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "异地恋",
      "青春",
      "成长",
      "跨文化",
      "书信"
    ],
    "oneLine": "隔着大西洋的恋人们通过一封封手写信,试图维系被时差与距离撕扯的感情。"
  },
  {
    "title": "荒野狂兽",
    "href": "details/movie-1955.html",
    "cover": "./5.jpg",
    "year": "2022",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "非洲",
      "巨狮",
      "父女求生",
      "野兽复仇",
      "血腥真实感"
    ],
    "oneLine": "一头因盗猎失去伴侣的雄狮,在南非草原上追猎一家四口直到最后一滴血。"
  },
  {
    "title": "迪莉莉的巴黎奇幻搜查",
    "href": "details/movie-1956.html",
    "cover": "./6.jpg",
    "year": "2023",
    "region": "法国",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "巴黎",
      "奇幻",
      "侦探",
      "小女孩",
      "文化元素"
    ],
    "oneLine": "生活在美好时代巴黎的混血女孩迪莉莉,利用独特的“嗅觉”天赋追查连环绑架艺术家的神秘组织。"
  },
  {
    "title": "人间有味山河鲜第二季",
    "href": "details/movie-1957.html",
    "cover": "./7.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电视剧",
    "category": "国产短剧",
    "tags": [
      "美食纪录片",
      "山河湖海",
      "食材溯源",
      "人文故事",
      "治愈系"
    ],
    "oneLine": "从长白山到南海,从雪山到沙漠,这一季不仅找鲜味,更找那些为了“鲜”字活了一辈子的人。"
  },
  {
    "title": "黑吃黑第二季",
    "href": "details/movie-1958.html",
    "cover": "./8.jpg",
    "year": "2014",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "黑帮",
      "暴力美学",
      "反转",
      "小镇"
    ],
    "oneLine": "假释犯在宾州小镇冒充警长,第二季里,他既要对付黑帮,还要面对自己亲生父亲是匪首。"
  },
  {
    "title": "步步倾心2024",
    "href": "details/movie-1959.html",
    "cover": "./9.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "古装甜宠",
    "tags": [
      "穿越",
      "宫斗",
      "虐恋",
      "前世今生"
    ],
    "oneLine": "都市女总裁穿越成康熙朝和亲的替身格格,本想靠现代商业思维躺平,却被九子夺嫡的洪流逼上权力巅峰。"
  },
  {
    "title": "提防小手",
    "href": "details/movie-1960.html",
    "cover": "./10.jpg",
    "year": "2024",
    "region": "中国香港",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "扒手",
      "师徒",
      "乌龙任务"
    ],
    "oneLine": "退隐多年的神偷被迫收下一个女警当徒弟,两人联手潜入跨国拍卖行偷一件假珠宝。"
  },
  {
    "title": "少爷返乡",
    "href": "details/movie-1961.html",
    "cover": "./11.jpg",
    "year": "2025",
    "region": "日本",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "东京失败者",
      "乡下创业",
      "社畜觉醒",
      "慢生活",
      "治愈系"
    ],
    "oneLine": "在东京被裁员后回到老家种橘子,发现全村只剩九个老人和一只会说方言的八哥。"
  },
  {
    "title": "有限公司",
    "href": "details/movie-1962.html",
    "cover": "./12.jpg",
    "year": "2024",
    "region": "日本",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "黑心企业",
      "卧底",
      "阶层",
      "反转"
    ],
    "oneLine": "一所濒临倒闭的“有限公司”里,每个员工都是假身份,他们各自为不同势力卧底。"
  },
  {
    "title": "起源2023",
    "href": "details/movie-1963.html",
    "cover": "./13.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "时间循环",
      "病毒爆发",
      "科学家",
      "末日求生"
    ],
    "oneLine": "2023年,一种能篡改记忆的病毒爆发,科学家发现疫情源头竟来自未来。"
  },
  {
    "title": "罪恶无间",
    "href": "details/movie-1964.html",
    "cover": "./14.jpg",
    "year": "2026",
    "region": "中国大陆",
    "type": "剧集",
    "category": "悬疑犯罪",
    "tags": [
      "双胞胎",
      "顶罪",
      "无间道"
    ],
    "oneLine": "缉毒警哥哥在行动中牺牲,双胞胎弟弟假扮他潜入毒巢,却发现哥哥的身份早已被替换。"
  },
  {
    "title": "心动隔扇窗3:咫尺相望",
    "href": "details/movie-1965.html",
    "cover": "./15.jpg",
    "year": "2024",
    "region": "西班牙",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "青春",
      "网红博主",
      "异地恋"
    ],
    "oneLine": "网红作家与黑客少年分手三年后,因一封神秘邮件被迫再度连线。"
  },
  {
    "title": "菲力兹九命猫",
    "href": "details/movie-1966.html",
    "cover": "./16.jpg",
    "year": "2018",
    "region": "法国/比利时",
    "type": "动画电影",
    "category": "喜剧家庭",
    "tags": [
      "猫",
      "生命哲学",
      "九命设定",
      "治愈"
    ],
    "oneLine": "贵族猫菲力兹拥有九条命,却在第九次重生后才发现,前八次都活错了。"
  },
  {
    "title": "爱过之后",
    "href": "details/movie-1967.html",
    "cover": "./17.jpg",
    "year": "2020",
    "region": "韩国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "失忆",
      "婚姻危机",
      "时间逆行",
      "疗愈",
      "文艺"
    ],
    "oneLine": "失忆的女子每天醒来都会忘记丈夫,而丈夫选择每天重新追求她一次。"
  },
  {
    "title": "原谅的勇气",
    "href": "details/movie-1968.html",
    "cover": "./18.jpg",
    "year": "2023",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "死刑犯",
      "受害者家属",
      "和解之路",
      "书信",
      "心理创伤"
    ],
    "oneLine": "女儿被杀后,退休教师老李决定给凶手写十年信,只为了学会“原谅”两个字。"
  },
  {
    "title": "小爸爸",
    "href": "details/movie-1969.html",
    "cover": "./19.jpg",
    "year": "2022",
    "region": "中国台湾",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "穿越",
      "父子",
      "校园",
      "温馨"
    ],
    "oneLine": "一个叛逆的高中生车祸后灵魂穿越回1995年,成了自己17岁父亲的新同桌,试图阻止父母离婚。"
  },
  {
    "title": "水行侠",
    "href": "details/movie-1970.html",
    "cover": "./20.jpg",
    "year": "2025",
    "region": "美国",
    "type": "剧集",
    "category": "动作冒险",
    "tags": [
      "超级英雄",
      "海洋文明",
      "七海之王"
    ],
    "oneLine": "亚特兰蒂斯流亡王子回到深海争夺王位,却发现传说中的“大陆威胁”其实是一场骗局。"
  },
  {
    "title": "胭脂似火",
    "href": "details/movie-1971.html",
    "cover": "./21.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "国产短剧",
    "tags": [
      "民国",
      "复仇",
      "胭脂",
      "女性成长"
    ],
    "oneLine": "毁容的胭脂铺老板娘每天用鲜红胭脂掩盖疤痕,直到她发现毁自己容貌的凶手就住在胭脂铺对面。"
  },
  {
    "title": "疯狂麦斯:愤怒道",
    "href": "details/movie-1972.html",
    "cover": "./22.jpg",
    "year": "2024",
    "region": "澳大利亚/美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "废土",
      "公路追车",
      "女性战团",
      "蒸汽朋克",
      "硬核"
    ],
    "oneLine": "孤胆车手麦斯与一名复仇女指挥官联手,驾驶战争钻车穿越硫酸沙漠,摧毁暴君的“器官农场”。"
  },
  {
    "title": "没人的孩子",
    "href": "details/movie-1973.html",
    "cover": "./23.jpg",
    "year": "2025",
    "region": "欧洲",
    "type": "电影",
    "category": "动画少儿",
    "tags": [
      "孤岛",
      "神秘",
      "悬疑",
      "儿童"
    ],
    "oneLine": "六个孤儿被送到一座没有大人的岛上进行“独立训练”,却在第二天发现少了一个人,而所有人都说岛上始终只有五个。"
  },
  {
    "title": "死产儿",
    "href": "details/movie-1974.html",
    "cover": "./24.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "民俗恐怖",
      "母职恐惧",
      "宗教",
      "高概念"
    ],
    "oneLine": "助产士接手一个无人敢接的产妇,婴儿出生即“死亡”,但当晚,小镇上所有“死产儿”的母亲开始一个接一个消失。"
  },
  {
    "title": "开心超人联盟之英雄归来",
    "href": "details/movie-1975.html",
    "cover": "./25.jpg",
    "year": "2026",
    "region": "中国",
    "type": "动画电影",
    "category": "动画少儿",
    "tags": [
      "童年回归",
      "超英合体",
      "反派洗白"
    ],
    "oneLine": "开心超人退休五年后变成了一个送外卖的普通胖子,直到曾经的宿敌哭着求他归队,说星星球要完了。"
  },
  {
    "title": "小兵张嘎",
    "href": "details/movie-1976.html",
    "cover": "./26.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "抗日",
      "少年英雄",
      "白洋淀",
      "智斗",
      "改编"
    ],
    "oneLine": "2025版“嘎子”不再只是调皮鬼,而是白洋淀地区日军口中的“水鬼”,一个用智慧和机关杀敌的游击少年。"
  },
  {
    "title": "奇幻森林",
    "href": "details/movie-1977.html",
    "cover": "./27.jpg",
    "year": "2024",
    "region": "印度",
    "type": "电影",
    "category": "科幻奇幻",
    "tags": [
      "丛林法则",
      "部落传说",
      "生态寓言",
      "手绘特效"
    ],
    "oneLine": "一个能听懂动物心跳的哑巴男孩,必须在森林女神发怒降下红雨之前,找到偷走神蛋的叛徒——他的亲哥哥。"
  },
  {
    "title": "大偷记",
    "href": "details/movie-1978.html",
    "cover": "./28.jpg",
    "year": "2025",
    "region": "中国香港",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "高智商犯罪",
      "连环反转",
      "盗窃集团",
      "师徒对决",
      "心理博弈"
    ],
    "oneLine": "江湖传说“盗圣”金盆洗手后,发现自己二十年前偷的那幅画里,藏着一个足以颠覆四大家族的秘密。"
  },
  {
    "title": "巧奔妙逃",
    "href": "details/movie-1979.html",
    "cover": "./29.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "国产短剧",
    "tags": [
      "越狱",
      "乌龙",
      "小人物",
      "高智商"
    ],
    "oneLine": "十八线小镇的五个奇葩囚犯,策划了一场漏洞百出的越狱,却阴差阳错成了揭发监狱黑幕的英雄。"
  },
  {
    "title": "夜去晨来",
    "href": "details/movie-1980.html",
    "cover": "./30.jpg",
    "year": "2021",
    "region": "日本",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "临终关怀",
      "父子",
      "和解",
      "慢节奏"
    ],
    "oneLine": "儿子辞职回乡照顾痴呆父亲,在每一个夜晚的恐惧与清晨的遗忘里,重新认识他。"
  },
  {
    "title": "亲子心",
    "href": "details/movie-1981.html",
    "cover": "./31.jpg",
    "year": "2025",
    "region": "中国台湾",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "亲情",
      "代际沟通",
      "治愈"
    ],
    "oneLine": "一位失智的父亲,一个叛逆的女儿,一场迟到了三十年的和解之旅。"
  },
  {
    "title": "白宫隐秘",
    "href": "details/movie-1982.html",
    "cover": "./32.jpg",
    "year": "2023",
    "region": "美国",
    "type": "剧集",
    "category": "恐怖惊悚",
    "tags": [
      "阴谋论",
      "秘密社团",
      "女总统",
      "刺杀"
    ],
    "oneLine": "白宫实习生无意中发现,历任总统都死于同一个百年秘密社团的暗杀。"
  },
  {
    "title": "玛莉娜",
    "href": "details/movie-1983.html",
    "cover": "./33.jpg",
    "year": "2024",
    "region": "意大利",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "歌剧",
      "女性",
      "梦想"
    ],
    "oneLine": "20世纪初,一名西西里渔民的女儿凭借天籁之音闯入米兰斯卡拉歌剧院,却因出身遭受歧视。"
  },
  {
    "title": "炒金男勇夺真爱",
    "href": "details/movie-1984.html",
    "cover": "./34.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "金融职场",
      "土味逆袭",
      "霸道总裁",
      "爽文剧情"
    ],
    "oneLine": "其貌不扬的黄金期货交易员,靠着过人的投资眼光成为亿万富翁,却发现用钱买来的爱情,不如穷护士的一碗热汤。"
  },
  {
    "title": "摩登家庭",
    "href": "details/movie-1985.html",
    "cover": "./35.jpg",
    "year": "2024",
    "region": "中国大陆",
    "type": "剧集",
    "category": "喜剧家庭",
    "tags": [
      "AI管家",
      "代际矛盾",
      "重组家庭"
    ],
    "oneLine": "一个传统中国家庭迎来了一个毒舌的AI机器人管家,由此引发了一系列啼笑皆非的家庭改革。"
  },
  {
    "title": "遗忘的时光",
    "href": "details/movie-1986.html",
    "cover": "./36.jpg",
    "year": "2023",
    "region": "意大利/法国",
    "type": "电影",
    "category": "海外精选",
    "tags": [
      "记忆",
      "阿尔茨海默",
      "奇幻",
      "海岛",
      "时空"
    ],
    "oneLine": "一位阿尔茨海默症患者的记忆变成了一座随时间涨潮而消失的孤岛。"
  },
  {
    "title": "婚礼进行曲(电影)",
    "href": "details/movie-1987.html",
    "cover": "./37.jpg",
    "year": "2023",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "婚礼策划",
      "前任婚礼",
      "治愈",
      "女性成长",
      "群像"
    ],
    "oneLine": "婚礼策划师接到最大订单:策划自己前男友的婚礼,新娘点名要她做。"
  },
  {
    "title": "没好婚姻",
    "href": "details/movie-1988.html",
    "cover": "./38.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "黑色幽默",
      "离婚冷静期",
      "扎心金句"
    ],
    "oneLine": "一对夫妻在30天离婚冷静期内,为了“公平”地分掉所有东西,把日子过成了一场地狱级商战。"
  },
  {
    "title": "时间女神",
    "href": "details/movie-1989.html",
    "cover": "./39.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "都市爱情",
    "tags": [
      "时间循环",
      "宿命",
      "女性觉醒",
      "都市传说"
    ],
    "oneLine": "一个濒临离婚的女人被神秘力量选中,能够每天倒拨时钟10分钟,却发现丈夫出轨的真相远比自己想象的复杂。"
  },
  {
    "title": "欲海惊心杀人夜",
    "href": "details/movie-1990.html",
    "cover": "./40.jpg",
    "year": "2026",
    "region": "美国",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "豪宅凶杀",
      "全员嫌疑人",
      "情欲与阴谋",
      "多视角叙事"
    ],
    "oneLine": "亿万富翁的情人节派对上,主人被杀死在密室里,六个宾客每人都有完美动机,但只有一个人说了真话。"
  },
  {
    "title": "爱无止尽",
    "href": "details/movie-1991.html",
    "cover": "./41.jpg",
    "year": "2014",
    "region": "英国/美国",
    "type": "剧集",
    "category": "海外精选",
    "tags": [
      "冷战",
      "间谍",
      "虐恋",
      "年代剧"
    ],
    "oneLine": "一对在二战中失散的恋人于冷战柏林重逢,却发现彼此分别效力于CIA与克格勃,爱成了最危险的身份。"
  },
  {
    "title": "诺亚方舟漂流记2",
    "href": "details/movie-1992.html",
    "cover": "./42.jpg",
    "year": "2019",
    "region": "德国/比利时",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "动物",
      "萌宠",
      "幽默",
      "团结",
      "续作"
    ],
    "oneLine": "方舟靠岸后,象鼻兽芬尼和它的朋友们误入了一个没有昼夜的“失落世界”。"
  },
  {
    "title": "恋爱留学生",
    "href": "details/movie-1993.html",
    "cover": "./43.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "剧集",
    "category": "都市爱情",
    "tags": [
      "异国恋",
      "成长",
      "文化冲突"
    ],
    "oneLine": "四位留学生在异国他乡的爱情与梦想,有人甜蜜有人心碎。"
  },
  {
    "title": "不准掉头",
    "href": "details/movie-1994.html",
    "cover": "./44.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "悬疑犯罪",
    "tags": [
      "黑色幽默",
      "命运反转",
      "荒漠追逃"
    ],
    "oneLine": "一名欠下巨债的卡车司机在西部戈壁搭载了一名神秘乘客,从此每公里都成了生死赌局。"
  },
  {
    "title": "继承人",
    "href": "details/movie-1995.html",
    "cover": "./45.jpg",
    "year": "2025",
    "region": "韩国",
    "type": "电视剧",
    "category": "悬疑犯罪",
    "tags": [
      "财阀",
      "遗产",
      "假身份",
      "反转"
    ],
    "oneLine": "一个孤儿被塑造成失散多年的财阀长孙,她却发现自己可能是真的。"
  },
  {
    "title": "跑着去北京",
    "href": "details/movie-1996.html",
    "cover": "./46.jpg",
    "year": "2024",
    "region": "中国",
    "type": "电影",
    "category": "古装甜宠",
    "tags": [
      "乡村少年",
      "马拉松",
      "梦想"
    ],
    "oneLine": "云南大山里的傈僳族少年,决定跑步穿越三千公里去北京看奥运会,而他只有一双破球鞋。"
  },
  {
    "title": "亲情接力",
    "href": "details/movie-1997.html",
    "cover": "./47.jpg",
    "year": "2025",
    "region": "中国大陆",
    "type": "电影",
    "category": "喜剧家庭",
    "tags": [
      "马拉松",
      "父子和解",
      "阿尔茨海默",
      "乡村教师",
      "接力棒"
    ],
    "oneLine": "患有阿尔茨海默症的父亲曾经是马拉松教练,儿子决定带他跑完最后一场全程接力赛,每一棒都是父亲遗忘的记忆。"
  },
  {
    "title": "少狼:大电影",
    "href": "details/movie-1998.html",
    "cover": "./48.jpg",
    "year": "2024",
    "region": "美国",
    "type": "电影",
    "category": "动作冒险",
    "tags": [
      "青春",
      "狼人",
      "原班人马",
      "情怀",
      "终极一战"
    ],
    "oneLine": "曾经的狼人少年们已各奔东西,但当古老的月炎再次升起,他们必须回到灯塔山完成最后的献祭。"
  },
  {
    "title": "特瑞萨的噩梦",
    "href": "details/movie-1999.html",
    "cover": "./49.jpg",
    "year": "2021",
    "region": "西班牙",
    "type": "电影",
    "category": "恐怖惊悚",
    "tags": [
      "梦魇",
      "宗教",
      "心理",
      "循环",
      "恶魔"
    ],
    "oneLine": "特瑞萨每晚都会梦到同一个红衣小女孩,而梦中的伤痕醒来后会真实地出现在她身上。"
  },
  {
    "title": "侠医国语",
    "href": "details/movie-2000.html",
    "cover": "./50.jpg",
    "year": "2004",
    "region": "中国香港",
    "type": "电视剧",
    "category": "海外精选",
    "tags": [
      "民国",
      "医者",
      "上海滩",
      "悬壶济世"
    ],
    "oneLine": "1930 年代的上海滩,一名身怀绝技的神秘中医,白天看病救人,夜里化身侠客刺杀日本特务。"
  }
];
