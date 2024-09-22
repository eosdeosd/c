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
 
  filter:{
        "2":[{"key":"class","name":"类型","value":[{"n":"全部","v":"类型"},{"n":"国产剧","v":"国产剧"},{"n":"港台剧","v":"港台剧"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":"地区"},{"n":"内地","v":"内地"},{"n":"香港地区","v":"香港地区"},{"n":"台湾地区","v":"台湾地区"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"年份"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},{"n":"00年代","v":"00年代"},{"n":"90年代","v":"90年代"},{"n":"80年代","v":"80年代"}]},{"key":"by","name":"排序","value":[{"n":"热播榜","v":"热播榜"},{"n":"好评榜","v":"好评榜"},{"n":"新上线","v":"新上线"}]}],
        "1":[{"key":"class","name":"类型","value":[{"n":"全部","v":"类型"},{"n":"动作片","v":"动作片"},{"n":"喜剧片","v":"喜剧片"},{"n":"爱情片","v":"爱情片"},{"n":"科幻片","v":"科幻片"},{"n":"恐怖片","v":"恐怖片"},{"n":"剧情片","v":"剧情片"},{"n":"战争片","v":"战争片"},{"n":"惊悚片","v":"惊悚片"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":"地区"},{"n":"华语","v":"华语"},{"n":"香港地区","v":"香港地区"},{"n":"美国","v":"美国"},{"n":"欧洲","v":"欧洲"},{"n":"韩国","v":"韩国"},{"n":"日本","v":"日本"},{"n":"台湾地区","v":"台湾地区"},{"n":"泰国","v":"泰国"},{"n":"台湾地区","v":"台湾地区"},{"n":"印度","v":"印度"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"年份"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},{"n":"00年代","v":"00年代"},{"n":"90年代","v":"90年代"},{"n":"80年代","v":"80年代"}]},{"key":"by","name":"排序","value":[{"n":"热播榜","v":"热播榜"},{"n":"好评榜","v":"好评榜"},{"n":"新上线","v":"新上线"}]}],
        "4":[{"key":"class","name":"类型","value":[{"n":"全部","v":"类型"},{"n":"国产漫","v":"国产漫"},{"n":"欧美漫","v":"欧美漫"},{"n":"日韩漫","v":"日韩漫"},{"n":"港台漫","v":"港台漫"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":"地区"},{"n":"中国大陆","v":"中国大陆"},{"n":"日本","v":"日本"},{"n":"韩国","v":"韩国"},{"n":"欧美","v":"欧美"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"年份"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},{"n":"00年代","v":"00年代"},{"n":"90年代","v":"90年代"},{"n":"80年代","v":"80年代"}]},{"key":"by","name":"排序","value":[{"n":"热播榜","v":"热播榜"},{"n":"新上线","v":"新上线"}]},{"key":"total","name":"状态","value":[{"n":"全部","v":"状态"},{"n":"连载","v":"连载"},{"n":"完结","v":"完结"}]}],
        "3":[{"key":"class","name":"类型","value":[{"n":"全部","v":"类型"},{"n":"大陆","v":"大陆"},{"n":"港台","v":"港台"},{"n":"日韩","v":"日韩"},{"n":"欧美","v":"欧美"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":"地区"},{"n":"内地","v":"内地"},{"n":"港台","v":"港台"},{"n":"日韩","v":"日韩"},{"n":"欧美","v":"欧美"},{"n":"其它","v":"其它"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"年份"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},{"n":"00年代","v":"00年代"},{"n":"90年代","v":"90年代"},{"n":"80年代","v":"80年代"}]},{"key":"by","name":"排序","value":[{"n":"热播榜","v":"热播榜"},{"n":"新上线","v":"新上线"}]}],
        "46":[{"key":"class","name":"类型","value":[{"n":"全部","v":"类型"},{"n":"日韩剧","v":"日韩剧"},{"n":"欧美剧","v":"欧美剧"},{"n":"海外剧","v":"海外剧"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":"地区"},{"n":"韩国","v":"韩国"},{"n":"美剧","v":"美剧"},{"n":"日本","v":"日本"},{"n":"泰国","v":"泰国"},{"n":"英国","v":"英国"},{"n":"新加坡","v":"新加坡"},{"n":"其他","v":"其他"}]},{"key":"year","name":"年份","value":[{"n":"全部","v":"年份"},{"n":"2024","v":"2024"},{"n":"2023","v":"2023"},{"n":"2022","v":"2022"},{"n":"2021","v":"2021"},{"n":"2020","v":"2020"},{"n":"2019","v":"2019"},{"n":"2018","v":"2018"},{"n":"2017","v":"2017"},{"n":"2016","v":"2016"},{"n":"2015","v":"2015"},{"n":"10年代","v":"10年代"},{"n":"00年代","v":"00年代"},{"n":"90年代","v":"90年代"},{"n":"80年代","v":"80年代"}]},{"key":"by","name":"排序","value":[{"n":"热播榜","v":"热播榜"},{"n":"好评榜","v":"好评榜"},{"n":"新上线","v":"新上线"}]}]
    },





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