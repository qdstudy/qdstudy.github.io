$(function () {
    /**===工具方法==================================================================================================================================================== */
    // 判空方法
    function validBlank(str) {
      return str === "" || str === "undefined" || str == undefined;
    }

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

    /**==右上点击事件========================================================================================================================================== */
    $("#openDoc").on("click", function () {
      window.open('https://vvan7v9l4y8.feishu.cn/wiki/', '_blank');
    });

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

    //
    /**===初始化================================================================================================================================================== */
    

    createAppDom(SHOW_APPS);
    SHOW_APPS.push(CONTRACT_APPS[0]);
    setAppToc(SHOW_APPS);


  
    // 创建收藏dom=================
    function createAppDom(arr) {
      let html = "";
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        html += `<div class="link-box link-box${element.id}" index="${element.id}" id="toc-title-position-${element.id}">
                          <div class="headline">
                          <strong>${element.title}</strong>
                      </div>
                      <div class="link-list-d">
                          <ul>
                              ${cerateChildrenDom(element.children)}
                          </ul>
                      </div>
                  </div>\n`;
      }
      $("#sys_link_dox").html(html);
      // 创建子集dom========
      function cerateChildrenDom(children) {
        let html = "";
        for (let index = 0; index < children.length; index++) {
          const element = children[index];
          html += `<li class="link-item${index}"><a class="link-a" href="${element.url}" target="_blank">
                          <img src="${element.icon || '../favicon.ico'}">
                          <span title="${element.title}">${element.title}</span></a>
                    </li>\n`;
        }
        return html;
      }
    }
  
    /**==设置目录=============================================================================================================================== */
    function setAppToc(arr) {
      let html = "";
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        html += `<div class="item toc-item sortable" title="${element.title}">${element.title}</div>\n`;
      }
      $(".toc-box").html(html);
  
      initSliderBar();
      function initSliderBar() {
        let scrollFlag = true;
        let scrollFlagtimer = null;
        $(".elevator").find(".toc-item").eq(0).addClass("on");
        $(".elevator").find(".toc-item").on("click", function () {
            scrollFlag = false;
            let index = $(this).index();
            $(".elevator").find(".toc-item").removeClass("on");
            $(this).addClass("on");
            if (index == 0) $(".elevator").find(".toc-item").eq(0).addClass("on");
            let ctop = $("#toc-title-position-" + (index)).offset().top - 200;
            $('html,body').stop(true).animate({scrollTop: ctop}, 200);
            if (scrollFlagtimer) clearTimeout(scrollFlagtimer);
              scrollFlagtimer = setTimeout(function () {
                scrollFlag = true;
            }, 1000);
        })
  
        $(window).on("scroll", function () {
            if (!scrollFlag) return;
            let vtop = $(this).scrollTop();
            let client = $(this).height();
            let scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
            if (scrollHeight > 100) {
              $("#keywords").hide();
            }
            if (vtop > 200) {
                $(".elevator").show();
                let arr = [];
                $(".link-box").each(function () {
                  let stop = $(this).offset().top - 100;
                    if (stop <= vtop) {
                      let index = $(this).attr("index");
                        arr[0] = index;
                    }
                });
  
                $(".elevator").find(".toc-item").removeClass("on");
  
                if (vtop + client == scrollHeight) {
                    $(".elevator").find(".toc-item:last-child").addClass("on");
                } else {
                    $(".elevator").find(".toc-item").eq(arr[0]).addClass("on");
                }
            } else {
                $(".elevator").find(".toc-item").removeClass("on");
                $(".elevator").hide();
            }
        })
      }
  
      // 回到顶部
      $(".back-top").on("click", function () {
        document.documentElement.scroll({
          top: 0,
          left: 0,
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      });
  
    }
  
  });


/**==VUE=============================================================================================================================== */
new Vue({
  el: "#app",
  data: {
      apps: CONTRACT_APPS,
      id:-1

  },
  created() {
  },
  mounted() {
    if(this.apps.length>0){
      this.id = this.apps[0].id;
    }
    console.log(this.apps)
  },
  methods:{

    }
});

  
