let SERVR_FAIL_DEFAULT_APPS = [];
$(function () {
  /**
   * 默认应用
   */
  SERVR_FAIL_DEFAULT_APPS = [
    {
      title: "媒体",
      children: [
        { title: "哔哩哔哩", url: "https://www.bilibili.com/", icon: "https://www.bilibili.com/favicon.ico" },
        { title: "网易云音乐", url: "https://music.163.com/#/my/m/music/playlist?id=963538401", icon: "http://p3.music.126.net/tBTNafgjNnTL1KlZMt7lVA==/18885211718935735.jpg" },
        { title: "歌曲宝", url: "https://www.gequbao.com/", icon: "https://www.gequbao.com/favicon.ico" },
        { title: "洛雪音乐", url: "https://lxmusic.toside.cn/", icon: "https://lxmusic.toside.cn/img/favicon.ico" },
        {
          title: "抖音网页版",
          url: "https://www.douyin.com/",
          icon: "https://lf1-cdn-tos.bytegoofy.com/goofy/ies/douyin_web/public/favicon.ico"
        },
        { title: "央视网", url: "https://tv.cctv.com/live/cctv1", icon: "https://tv.cctv.com/favicon.ico" },
        { title: "电影狗", url: "https://www.dianyinggou.com/", icon: "https://www.dianyinggou.com/favicon.ico" },
        { title: "高清影视", url: "https://1080zyk6.com/", icon: "https://1080zyk6.com/favicon.ico" },
        { title: "555电影", url: "https://555dyy10.com/", icon: "https://t1.021huaying.com/2022/07/12/88c2f1613357e.png" },
        // { title: "饭团影视", url: "https://tuan.fan/", icon: "https://tuan.fan/upload/mxcms/20240121-1/b8254990bf86fa121b1106659246bad9.png" },
        { title: "爱看剧", url: "https://www.ikanju.cc//", icon: "https://www.ikanju.cc/static/ds3/img/favicon.png" },
        { title: "韩剧看看", url: "https://www.hanjukankan.com/", icon: "https://www.hanjukankan.com/templets/default2022/images/img/logo_s.png" },
        { title: "小静儿影视", url: "https://xiaojinger.cc/", icon: "https://xiaojinger.cc/static/ds3/img/favicon.png" },
        { title: "03影院", url: "https://www.03yy.co/", icon: "https://www.03yy.co/favicon.ico" },
        { title: "魔王短剧", url: "https://www.mowangduanju.cn/vod/type/id/5.html", icon: "https://www.mowangduanju.cn/template/mxone/mxstatic/picture/logo.png" },
        { title: "异类短剧", url: "http://www.yswsh.cn/vodtype/5.html", icon: "https://s21.ax1x.com/2024/03/24/pFhX7Yn.png" },
        




      ],
    },
    {
      title: "生活",
      children: [
        { title: "今日热榜", url: "https://hot.baiwumm.com/", icon: "https://hot.baiwumm.com/logo.svg" },
        { title: "5E Play", url: "https://www.5eplay.com/", icon: "https://static.5eplay.com/images/favicon.ico" },
        { title: "电动邦", url: "https://www.diandong.com", icon: "//g.dd-img.com/pc/img/favicon/favicon.ico" },
        { title: "懂车帝", url: "https://www.dongchedi.com/", icon: "//p3.dcarimg.com/obj/eden-cn/vlseh7ubqnuhs/motor/favicon/favicon-96x96.png" },
        { title: "小熊油耗", url: "http://www.xiaoxiongyouhao.com/fprice/", icon: "http://www.xiaoxiongyouhao.com/favicon.ico" },
        { title: "隐订阅", url: "https://yinrss.com", icon: "https://yinrss.com/favicon.ico" },
        { title: "丁香园用药助手", url: "https://drugs.dxy.cn/", icon: "https://drugs.dxy.cn/pc/imgs/logo-icon.png" },
        { title: "下厨房", url: "https://www.xiachufang.com/", icon: "https://s.chuimg.com/favicon.ico" },
        { title: "猫眼票房", url: "https://piaofang.maoyan.com/dashboard", icon: "https://obj.pipi.cn/festatic/piaofang/moviepro/favicon.ico" },
        { title: "宜家家居灵感", url: "https://www.ikea.cn/cn/zh/ideas/", icon: "https://static.web.ikea.cn/static/favicon.ico" },
        { title: "意林在线", url: "http://qikan.lifves.com/", icon: "https://www.lifves.com/favicon.ico" },











      ],
    },
    {
      title: "工具",
      children: [
        { title: "文叔叔快传", url: "https://www.wenshushu.cn/", icon: "https://www.wenshushu.cn/favicon.ico" },
        { title: "微信传输助手", url: "https://filehelper.weixin.qq.com/", icon: "https://mp.weixin.qq.com/favicon.ico" },
        { title: "帮小忙", url: "https://tool.browser.qq.com/", icon: "https://tool.browser.qq.com/favicon.ico" },
        { title: "极简简历", url: "https://www.polebrief.com/index", icon: "https://www.polebrief.com/favicon.ico" },
        { title: "表情包大全", url: "https://www.dbbqb.com/", icon: "https://www.dbbqb.com/favicon.ico" },
        { title: "在线P图", url: "https://www.meishuzi.cn/size", icon: "https://www.meishuzi.cn/favicon.ico" },
        //{ title: "工具猫", url: "https://www.toolscat.com/img/ico", icon: "https://www.toolscat.com/static/common/favicon.ico" },
        { title: "无水印解析", url: "https://dlpanda.com/zh-CN", icon: "https://dlpanda.com/favicon.ico" },
        { title: "哔哩哔哩视频解析", url: "https://snapany.com/zh/bilibili", icon: "https://snapany.com/favicon.ico" },
        { title: "B站视频下载", url: "https://zhouql.vip/bilibili/", icon: "/web/favicon.ico" },
        { title: "m3u8 视频下载", 
          url: "https://blog.luckly-mjw.cn/tool-show/m3u8-downloader/index.html",
          icon: "https://fuliba123.net/wp-content/uploads/2024/01/d03c3-blog.luckly-mjw.cn.png" },
        { title: "PDF派", url: "https://www.pdfpai.com/", icon: "https://www.pdfpai.com/statics/images/favicon.ico" },
        { title: "爱PPT", url: "https://www.2ppt.com/", icon: "https://www.2ppt.com/favicon.ico" },
        { title: "即时工具", url: "https://www.67tool.com/", icon: "https://www.67tool.com/favicon.ico" },
        { title: "百家姓加密", url: "https://www.bjxah.com/", icon: "https://api.iowen.cn/favicon/c.p2hp.com.png" },
        { title: "蓝奏网盘", url: "https://pc.woozooo.com/mydisk.php", icon: "https://pc.woozooo.com/favicon.ico" },
      ],
    },
    {
      title: "资源",
      children: [
        { 
          title: "前度工具分享", 
          url: "https://www.alipan.com/s/ZG1bU6brmha", 
          icon: "https://img.alicdn.com/imgextra/i1/O1CN01JDQCi21Dc8EfbRwvF_!!6000000000236-73-tps-64-64.ico" 
        },
        {
          title: "软件库",
          url: "https://mp.weixin.qq.com/s?__biz=MzIzNDUxNzUzNw==&mid=2247559735&idx=1&sn=2b099655c5a4051c576b6c9f2d5a2ec0",
          icon: "https://mp.weixin.qq.com/favicon.ico" 
        },
        { title: "osssr", url: "https://www.osssr.com", icon: "https://www.osssr.com/favicon.ico" },
        { title: "易搜", url: "https://yiso.fun/", icon: "https://yiso.fun/static/img/logo.png" },
        { title: "小纸条", url: "https://ali.gitcafe.ink/", icon: "https://fuliba123.net/wp-content/uploads/2024/01/81331-ali.gitcafe.ink.png" },
        { title: "云盘资源分享", url: "https://yunpan1.cc/", icon: "" },
        { title: "框框大学", url: "https://www.kkdaxue.com/", icon: "https://www.kkdaxue.com/favicon.ico" },
        { title: "磁力预览", url: "https://pics.magnetq.com/", icon: "https://pics.magnetq.com/static/images/apple-touch-icon.png" },

      ],
    },
    {
      title: "设计",
      children: [
        { title: "processon", url: "https://www.processon.com/", icon: "https://www.processon.com/favicon.ico" },
        { title: "diagrams", url: "https://app.diagrams.net/", icon: "https://app.diagrams.net/favicon.ico" },
        { title: "excalidraw", url: "https://excalidraw.com/", icon: "https://excalidraw.com/favicon.ico" },
        { title: "嘉立创EDA", url: "https://u.lceda.cn/account/user/projects/all", icon: "https://u.lceda.cn/favicon.ico" },
        { title: "PS在线", url: "https://www.photopea.com/", icon: "https://www.photopea.com/promo/icon512.png" },
      ],
    },
    {
      title: "GPT",
      children: [
        { title: "BGM猫", url: "https://bgmcat.com/home", icon: "https://bgmcat.com/lanlogo.ico" },
        { title: "gpt1", url: "https://6kvk14.aitianhu1.top/#/chat/", icon: "https://static.usesless.com/favicon.svg" },
        { title: "gpt2", url: "https://chat18.aichatos.xyz/#/chat/", icon: "https://static.usesless.com/favicon.svg" },
      ],
    },
    {
      title: "编程",
      children: [
        {
          title: "阿里云",
          url: "https://www.aliyun.com/minisite/goods?userCode=mp7vwkr3",
          icon: "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico"
        },
        { title: "七牛云", url: "https://sso.qiniu.com/", icon: "https://qiniu.com/favicon.ico"},
        { title: "gitee", url: "https://gitee.com/", icon: "https://gitee.com/favicon.ico" },
        {
          title: "docker仓库",
          url: "https://cr.console.aliyun.com/",
          icon: "https://img.alicdn.com/tfs/TB1_ZXuNcfpK1RjSZFOXXa6nFXa-32-32.ico"
        },
        { title: "51 LA 统计", url: "https://user.51.la/i/product", icon: "https://51.la/favicon.ico" },
        { title: "maven", url: "https://mvnrepository.com/", icon: "https://s1.ax1x.com/2022/09/12/vXhrcR.png" },
        { title: "bootCDN", url: "https://www.bootcdn.cn/", icon: "https://www.bootcdn.cn/assets/ico/favicon.ico" },
        { title: "LeetCode", url: "https://leetcode.cn/problemset/", icon: "https://leetcode.cn/favicon.ico" },
        { title: "api", url: "https://api.aa1.cn/", icon: "https://api.aa1.cn/favicon.ico" },
        { title: "ngrok", url: "https://dashboard.ngrok.com/", icon: "https://ngrok.com/static/favicon.ico" },
        { title: "UnCSS", url: "https://uncss-online.com/", icon: "https://uncss-online.com/static/img/favicon.ico" },
        {
          title: "色彩表",
          url: "https://blog.luckly-mjw.cn/tool-show/base-color/index.html",
          icon: "https://blog.luckly-mjw.cn/favicon.ico"
        },
        {
          title: "iconfont",
          url: "https://www.iconfont.cn/",
          icon: "https://img.alicdn.com/tps/i4/TB1_oz6GVXXXXaFXpXXJDFnIXXX-64-64.ico"
        },
        { title: "animate", url: "https://animate.style/", icon: "https://animate.style/img/favicon.ico" },
        {
          title: "gradient",
          url: "https://cssgradient.io/gradient-backgrounds/",
          icon: "https://cssgradient.io/images/favicon-23859487.png"
        },
      ],
    },
    {
      title: "文档",
      children: [
        { title: "支付宝", url: "https://www.alipay.com/", icon: "https://i.alipayobjects.com/common/favicon/favicon.ico" },
        {
          title: "微信开放平台",
          url: "https://open.weixin.qq.com/",
          icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico" 
        },
        {
          title: "微信公众平台",
          url: "https://mp.weixin.qq.com/",
          icon: "https://res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico"
        },
        { title: "微信支付", url: "https://pay.weixin.qq.com/index.php/", icon: "https://wx.gtimg.com/core/favicon.ico" },
        { title: "uniapp", url: "https://uniapp.dcloud.net.cn/", icon: "https://unicloud.dcloud.net.cn/favicon.ico" },
        { title: "飞书文档", url: "https://vvan7v9l4y8.feishu.cn/drive/home/", icon: "https://lf-scm-cn.feishucdn.com/ccm/pc/web/resource/bear/feishu.ico" },
        { title: "csdn", url: "https://blog.csdn.net/qd2013498006", icon: "https://www.csdn.net/favicon.ico" },
        {
          title: "Ant Design Vue",
          url: "https://1x.antdv.com/docs/vue/introduce-cn/",
          icon: "https://aliyuncdn.antdv.com/favicon.ico"
        },
        {
          title: "element-ui",
          url: "https://element.eleme.cn/#/zh-CN/component/installation",
          icon: "https://element.eleme.cn/favicon.ico"
        },
        { title: "Layui", url: "https://layui.dev/docs/2/", icon: "https://layui.dev/favicon.ico" },
        { title: "图鸟UI", url: "https://vue2.tuniaokj.com/", icon: "https://vue2.tuniaokj.com/favicon.ico" },
        { title: "Pug-UI", url: "https://qdstudy.gitee.io/pug-ui/", icon: "https://www.bootcss.com/assets/favicons/favicon.ico" },
        { title: "赛泰先生", url: "https://www.altitude.xin/blog/home/#/", icon: "https://www.altitude.xin/blog/home/favicon.ico" },
      ],
    },
    
  ];

  /**======================================================================================================================================================= */

  /**==滚动监测========================================================================================================================================== */
  // window.addEventListener(
  //   "scroll",
  //   function () {
  //     let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  //     if (scrollTop > 100) {
  //       $(".top-wrapper").fadeIn();
  //     } else {
  //       $(".top-wrapper").fadeOut();
  //     }
  //     if (scrollTop > 100) {
  //       $("#keywords").hide();
  //     }
  //   },
  //   true
  // );

  /**==语录========================================================================================================================================== */
  const yuLu = () => {
    const qdYiYan = ["去成为太阳，温暖他人","真正喜欢的人和事，都值得我们坚持","忍到春暖花开，走到灯火通明","除却君身三尺雪，天下谁人配白衣","须知少年凌云志，曾许人间第一流",
      "唯有热爱，能抵岁月漫长","心中有丘壑，眉目作山河","人生值得，未来可期","受的这些苦,一定是为了什么值得的东西","平凡永远不乏热闹，沉寂永远不缺高潮","永远相信，美好的事物即将发生",
      "只有贫穷才能不劳而获","跟着光，靠近光，成为光，散发光","披星戴月走过的路，最后将会遍地繁花","心若有向往，何惧道阻且长","做自己的太阳，无需凭借谁的光","即使翅膀折了，心也要飞翔",
      "生活原本沉闷，跑起来就有风","没有谁能阻止你成为一个优秀的人","别人拥有的，不必羡慕；只要努力，时间都会给你"
    ];

    return qdYiYan[Math.floor(Math.random() * qdYiYan.length)];
  };
  $(".yulu").html(yuLu());

  /**==屏蔽ctrl+s========================================================================================================================================== */
  document.onkeydown = function () {
    if (event.ctrlKey == true && event.keyCode == 83) {
      pug.message.tip("调皮了吧，我屏蔽了....");
      event.preventDefault();
    }
  };

  /**==获取搜索框焦点调用百度提示==================================================================================================================== */
  $(".wd").on("click", function () {
    keywordReminder();
  });

  // 输入关键词屏蔽上下左右键位
  $(".wd").keyup(function (event) {
    var key = event.keyCode;
    var shieldKey = [37, 38, 39, 40];
    if (shieldKey.includes(key)) return;
    keywordReminder();
  });

  // 点击其他区域关闭事件
  $(document).on("click", function (e) {
    if (!$("#keywords").is(":hidden")) {
      if (!($(".keyword").is(e.target) || $(".wd").is(e.target) || $(".search-box button").is(e.target))) {
        $("#keywords").hide();
      }
    }
  });

  // 自动提示键盘方向键选择操作 上下键获取焦点
  $(".wd").keydown(function (event) {
    var key = event.keyCode;
    if ($.trim($(this).val()).length === 0) return;
    var id = $(".choose").attr("data-id");
    if (id === undefined) id = 0;
    if (key === 38) {
      id--;
    } else if (key === 40) {
      id++;
    } else {
      return;
    }
    let length = $("#keywords").attr("data-length");
    if (id > length) id = 1;
    if (id < 1) id = length;

    $(".keyword[data-id=" + id + "]")
      .addClass("choose")
      .siblings()
      .removeClass("choose");
    $(".wd").val($(".keyword[data-id=" + id + "]").text());
  });

  // 搜索提示
  function keywordReminder() {
    let keyword = $(".wd").val();
    if (keyword != "") {
      $.ajax({
        url: "https://suggestion.baidu.com/su?wd=" + keyword,
        dataType: "jsonp",
        jsonp: "cb",
        success: function (data) {
          if (data.s.length === 0) return;
          $("#keywords").css("width", $(".wd").width() + $(".search-box button").width() + 20);
          $("#keywords").empty().show();
          $.each(data.s, function (i, val) {
            $("#keywords").append(`<div class="keyword" data-id="${i + 1}"><i class='iconfont icon-sousuo'></i>${val}</div>`);
          });
          $("#keywords").attr("data-length", data.s["length"]);
          $(".keyword").click(function () {
            $(".wd").val($(this).text());
            $(".search-box button").click();
          });
        },
        error: function () {
          $("#keywords").empty().show();
          $("#keywords").hide();
        },
      });
    } else {
      $("#keywords").empty().show();
      $("#keywords").hide();
    }
  }

});
