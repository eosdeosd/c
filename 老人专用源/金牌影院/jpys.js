var rule = {
  title: '金牌影院',
  host: 'https://m.cfkj86.com',
  url: '/api/mw-movie/anonymous/video/list?pageNum=fypage&pageSize=30&sort=1&sortBy=1&type1=fyclass',
  searchUrl: '/api/mw-movie/anonymous/video/searchByWordPageable?keyword=**&pageNum=fypage&pageSize=12&type=false',
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'Referer': 'https://www.cfkj86.com/'
  },
  searchable: 2,
  quickSearch: 0,
  filterable: 0,
  class_name: '电影&电视剧&综艺&动漫',
  class_url: '1&2&3&4',
 
 
  filter:{'interests': [{'key': 'status', 'name': '状态', 'value': [{'n': '想看', 'v': 'mark'}, {'n': '在看', 'v': 'doing'}, {'n': '看过', 'v': 'done'}]}, {'key': 'subtype_tag', 'name': '形式', 'value': [{'n': '全部', 'v': ''}, {'n': '电影', 'v': 'movie'}, {'n': '电视', 'v': 'tv'}]}, {'key': 'year_tag', 'name': '年代', 'value': [{'n': '全部', 'v': '全部'}, {'n': '2024', 'v': '2024'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2010年代', 'v': '2010年代'}, {'n': '2000年代', 'v': '2000年代'}, {'n': '90年代', 'v': '90年代'}, {'n': '80年代', 'v': '80年代'}, {'n': '70年代', 'v': '70年代'}, {'n': '60年代', 'v': '60年代'}, {'n': '更早', 'v': '更早'}]}], 'hot_gaia': [{'key': 'sort', 'name': '排序', 'value': [{'n': '热度', 'v': 'recommend'}, {'n': '最新', 'v': 'time'}, {'n': '评分', 'v': 'rank'}]}, {'key': 'area', 'name': '地区', 'value': [{'n': '全部', 'v': '全部'}, {'n': '华语', 'v': '华语'}, {'n': '欧美', 'v': '欧美'}, {'n': '韩国', 'v': '韩国'}, {'n': '日本', 'v': '日本'}]}], 



    
 
 '1': [{'key': 'type', 'name': '分类', 'value': [{'n': '综合', 'v': 'show_hot'}, {'n': '国内', 'v': 'show_domestic'}, {'n': '国外', 'v': 'show_foreign'}]}], 
 


 '2': [{'key': '类型', 'name': '类型', 'value': [{'n': '全部类型', 'v': ''}, {'n': '喜剧', 'v': '喜剧'}, {'n': '爱情', 'v': '爱情'}, {'n': '动作', 'v': '动作'}, {'n': '科幻', 'v': '科幻'}, {'n': '动画', 'v': '动画'}, {'n': '悬疑', 'v': '悬疑'}, {'n': '犯罪', 'v': '犯罪'}, {'n': '惊悚', 'v': '惊悚'}, {'n': '冒险', 'v': '冒险'}, {'n': '音乐', 'v': '音乐'}, {'n': '历史', 'v': '历史'}, {'n': '奇幻', 'v': '奇幻'}, {'n': '恐怖', 'v': '恐怖'}, {'n': '战争', 'v': '战争'}, {'n': '传记', 'v': '传记'}, {'n': '歌舞', 'v': '歌舞'}, {'n': '武侠', 'v': '武侠'}, {'n': '情色', 'v': '情色'}, {'n': '灾难', 'v': '灾难'}, {'n': '西部', 'v': '西部'}, {'n': '纪录片', 'v': '纪录片'}, {'n': '短片', 'v': '短片'}]}, {'key': '地区', 'name': '地区', 'value': [{'n': '全部地区', 'v': ''}, {'n': '华语', 'v': '华语'}, {'n': '欧美', 'v': '欧美'}, {'n': '韩国', 'v': '韩国'}, {'n': '日本', 'v': '日本'}, {'n': '中国大陆', 'v': '中国大陆'}, {'n': '美国', 'v': '美国'}, {'n': '中国香港', 'v': '中国香港'}, {'n': '中国台湾', 'v': '中国台湾'}, {'n': '英国', 'v': '英国'}, {'n': '法国', 'v': '法国'}, {'n': '德国', 'v': '德国'}, {'n': '意大利', 'v': '意大利'}, {'n': '西班牙', 'v': '西班牙'}, {'n': '印度', 'v': '印度'}, {'n': '泰国', 'v': '泰国'}, {'n': '俄罗斯', 'v': '俄罗斯'}, {'n': '加拿大', 'v': '加拿大'}, {'n': '澳大利亚', 'v': '澳大利亚'}, {'n': '爱尔兰', 'v': '爱尔兰'}, {'n': '瑞典', 'v': '瑞典'}, {'n': '巴西', 'v': '巴西'}, {'n': '丹麦', 'v': '丹麦'}]}, {'key': 'sort', 'name': '排序', 'value': [{'n': '近期热度', 'v': 'T'}, {'n': '首映时间', 'v': 'R'}, {'n': '高分优先', 'v': 'S'}]}, {'key': '年代', 'name': '年代', 'value': [{'n': '全部年代', 'v': ''}, {'n': '2024', 'v': '2024'}, {'n': '2023', 'v': '2023'}, {'n': '2022', 'v': '2022'}, {'n': '2021', 'v': '2021'}, {'n': '2020', 'v': '2020'}, {'n': '2019', 'v': '2019'}, {'n': '2010年代', 'v': '2010年代'}, {'n': '2000年代', 'v': '2000年代'}, {'n': '90年代', 'v': '90年代'}, {'n': '80年代', 'v': '80年代'}, {'n': '70年代', 'v': '70年代'}, {'n': '60年代', 'v': '60年代'}, {'n': '更早', 'v': '更早'}]}]}, 

 





  limit: 6,
  double: false,
  play_parse:true,
  lazy:$js.toString(()=>{
     let pid = input.split('/')[5]
     let nid = input.split('/')[7]
     const t = new Date().getTime()
     eval(getCryptoJS)
     let signkey = 'id='+pid+'&nid='+nid+'&key=cb808529bae6b6be45ecfab29a4889bc&t='+t
     const key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString()
     let json_data = JSON.parse(request('https://www.cfkj86.com/api/mw-movie/anonymous/v1/video/episode/url?id='+pid+'&nid='+nid,{headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'deviceid': 'c6bce57d-bb62-4db7-96cd-265dfb2a79cf',
    'sign': key,
    't': t
    }}))
    log(json_data)
     let link = json_data.data.playUrl
     input={url:link,header:rule.headers}

  }),
  一级: $js.toString(()=>{
        let d = []
        let url = ''
        const t = new Date().getTime()
        const signkey = 'pageNum='+MY_PAGE+'&pageSize=30&sort=1&sortBy=1&type1='+MY_CATE+'&key=cb808529bae6b6be45ecfab29a4889bc&t='+t
        const key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString()
        const list = JSON.parse(request(input,{headers:{
           'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36',
            'Accept': 'application/json, text/plain, */*',
            'deviceId': 'c6bce57d-bb62-4db7-96cd-265dfb2a79cf',
            'sign': key,
            't': t 
        }})).data.list
        list.forEach((it)=>{
            url = 'https://www.cfkj86.com/detail/'+it.vodId
            d.push({
              title: it.vodName,
              desc:it.vodRemarks,
              img:it.vodPic,
              url:url
            })
        })
        setResult(d)
  }),
  二级: {
    title: 'h1&&Text',
    tabs: '.top a',
    lists: '.main-list-sections__BodyArea-sc-8bb7334b-2 .listitem a',
  },
  搜索: $js.toString(()=>{
    const t = new Date().getTime()
     eval(getCryptoJS)
     let pg = MY_PAGE
     let signkey = 'keyword='+KEY+'&pageNum='+pg+'&pageSize=12&type=false&key=cb808529bae6b6be45ecfab29a4889bc&t='+t
     const key = CryptoJS.SHA1(CryptoJS.MD5(signkey).toString()).toString()
      let html = JSON.parse(request(input,{headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36',
    'deviceid': '58a80c52-138c-48fd-8edb-138fd74d12c8',
    'sign': key,
    't': t
    }}))
      let data = html.data.list
      let d = []
      data.forEach(it=>{
        let reurl = 'https://www.cfkj86.com/detail/'+it.vodId
        d.push({
          title: it.vodName,
          desc:it.vodVersion,
          img:it.vodPic,
          url:reurl
        })
      })
    setResult(d)
  }),
}