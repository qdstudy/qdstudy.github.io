$(function () {
    /**===工具方法==================================================================================================================================================== */
    // 判空方法
    function validBlank(str) {
      return str === "" || str === "undefined" || str == undefined;
    }

    //
    /**===登录初始化校验================================================================================================================================================== */
    // pug.loading(false, "loadingBox", 1);
    beforeLoginBoxInit();
    function beforeLoginBoxInit() {
        $(".app-search-wrapper").css("background", "url(/images/bgimg_2.jpg)");
        $("nav .nav-user-wraper").html(`<button class="pug-btn pug-btn-sm pug-btn-primary" id="login">登录 / 注册</button>\n`);
        // 获取系统导航
        // pug.close("loadingBox");
        // $("#login").prop("disabled", true);
        const html = `<span class="fz12" style="display: block;padding: 13px;color: #155724;background: #d4edda;border-radius: 6px;text-align: center;letter-spacing: 2px;">
                        <a style="color: #155724;" href="https://kdocs.cn/l/cvbkCfVYkGf0" target="_blank">-- 正规三网大流量卡对比表 实时更新中...  --</a>
                      </span>\n`;
        $("#custom_link_box").html(html);
        createAppDom(SERVR_FAIL_DEFAULT_APPS);
        setAppToc(SERVR_FAIL_DEFAULT_APPS);
        // 登录注册
        $("#login").on("click", function () {
            loginBoxInit();
            // window.open('https://support.qq.com/products/514070/faqs-more?id=154890', '_blank');
        });
    }
    /**===登录窗口初始化================================================================================================================================================== */
    function loginBoxInit() {
      // 1、添加元素到视图
      let html = `<div class="login-wrapper">
                      <div class="hidebg"></div>
                      <div class="login-fixed">
                          <div class="login-container animate__animated animate__fadeIn">
                              <p><i class="iconfont icon-close" id="closeLoginWrapper"></i></p>
                              <div class="main-login-container">
                                  <h1>账号登录</h1>
                                  <div class="l-item">
                                      <input type="text" id="loginAccount" placeholder="请输入5-18位账号" v-model="user.account">
                                  </div>
                                  <div class="l-item">
                                      <input type="password" id="loginPwd" placeholder="请输入5-18位密码" v-model="user.password">
                                  </div>
                                  <div class="l-item">
                                  <button class="pug-btn pug-btn-primary pug-btn-lg fluid login">登 录</button>
                                  </div>
                                  <p style="text-align: center;"><a href="javascript:void(0);" class="to-reg-btn">没有账号?点我注册</a></p>
                              </div>
                              <div class="main-register-container">
                                  <h1>账号注册</h1>
                                  <div class="l-item">
                                      <input type="text" id="regaccount" placeholder="请输入5-18位账号" v-model="user.account">
                                  </div>
                                  <div class="l-item">
                                      <input type="password" id="regPwd" placeholder="请输入5-18位密码" v-model="user.password">
                                  </div>
                                  <div class="l-item">
                                      <input type="password" id="regRePwd" placeholder="请确认5-18位密码" v-model="user.password">
                                  </div>
                                  <div class="l-item">
                                      <button class="pug-btn pug-btn-success pug-btn-lg fluid register">注 册</button>
                                  </div>
                                  <p style="text-align: center;"><a href="javascript:void(0);" class="to-login-btn">已有账号?前往登录</a></p>
                              </div>
                              <p class="xieyi">
                                  注册登录即表示同意<a href="javascript:void(0);">用户协议</a>
                                  和<a href="javascript:void(0);">隐私政策</a>
                              </p>
                          </div>
                      </div>
                  </div>`;
      $("body").append(html);
      // 取消登录窗口
      $("#closeLoginWrapper").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(".login-container")
          .removeClass("animate__animated animate__fadeIn")
          .addClass("animate__animated animate__backOutUp")
          .fadeOut(300, function () {
            $(".login-wrapper").remove();
          });
      });
      // 跳转注册页
      $(".login-container .to-reg-btn").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(".main-login-container").fadeOut(300, function () {
          clearLoginRegForm();
          $(".main-register-container").fadeIn();
        });
      });
      // 跳转登录页
      $(".login-container .to-login-btn").on("click", function (e) {
        e.stopPropagation();
        e.preventDefault();
        $(".main-register-container").fadeOut(300, function () {
          clearLoginRegForm();
          $(".main-login-container").fadeIn();
        });
      });
      // 点击登录事件
      $(".login-container .login").on("click", function () {
        let account = $("#loginAccount").val();
        let password = $("#loginPwd").val();
        if (validBlank(account)) {
          pug.message.warn("请输入账号!");
          $("#loginAccount").focus();
          return;
        }
        if (validBlank(password)) {
          pug.message.warn("请输入密码!");
          $("#loginPwd").focus();
          return;
        }
        pug.message.error('服务异常');
      });
      // 点击注册事件
      $(".login-container .register").on("click", function () {
        let account = $("#regaccount").val();
        let password = $("#regPwd").val();
        let reqPassword = $("#regRePwd").val();
        if (validBlank(account)) {
          pug.message.warn("请输入账号!");
          $("#regaccount").focus();
          return;
        }
        if (validBlank(password)) {
          pug.message.warn("请输入密码!");
          $("#regPwd").focus();
          return;
        }
        if (validBlank(reqPassword)) {
          pug.message.warn("请确认密码!");
          $("#regRePwd").focus();
          return;
        }
        if (password != reqPassword) {
          pug.message.warn("密码输入不一致!");
          return;
        }
        cpug.message.error('服务异常');
      });
      // 切换时清空表单
      function clearLoginRegForm() {
        $("#loginAccount").val("");
        $("#loginPwd").val("");
        $("#regaccount").val("");
        $("#regPwd").val("");
        $("#regRePwd").val("");
      }
    }

    // 创建收藏dom=================
    function createAppDom(arr) {
      let html = "";
      for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        html += `<div class="link-box link-box${index}" index="${index}" id="toc-title-position-${index}">
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
                          <span class="more">
                            <div class="dropdown">
                              <div class="dropdown-trigger">
                                <svg t="1704952112289" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4211" width="1em" height="1em"><path d="M465.9 263c0-12.6 4.2-23.1 12.6-31.5s19-12.7 31.9-12.7c12.5 0 22.8 4.2 31.1 12.7s12.4 19 12.4 31.5c0 12.2-4.1 22.7-12.4 31.5s-18.6 13.2-31.1 13.2c-12.8 0-23.4-4.4-31.9-13.2s-12.6-19.3-12.6-31.5z m0 250.5c0-12.2 4.2-22.6 12.6-31s19-12.7 31.9-12.7c12.5 0 22.8 4.2 31.1 12.7s12.4 18.8 12.4 31c0 12.5-4.1 23.2-12.4 32s-18.6 13.2-31.1 13.2c-12.8 0-23.4-4.4-31.9-13.2s-12.6-19.5-12.6-32z m0 253c0-12.5 4.2-23 12.6-31.3s19-12.5 31.9-12.5c12.5 0 22.8 4.1 31.1 12.5 8.3 8.3 12.4 18.7 12.4 31.3 0 12.5-4.1 23.2-12.4 32s-18.6 13.2-31.1 13.2c-12.8 0-23.4-4.4-31.9-13.2s-12.6-19.5-12.6-32z" p-id="4212"></path></svg>
                              </div>
                              <div class="dropdown-menu">
                                <ul> 
                                  <li><a onclick="shareApp('${element.title}','${element.url}')"><i class="iconfont icon-fenxiangxiao"></i>分享</a></li>
                                </ul>
                              </div>
                            </div>
                          </span>
                    </li>\n`;
        }
        return html;
      }
      // 分享
      shareApp = function (title, url) {
        const text = `${title}: ${url}\n来源: 星域导航`;
        navigator.clipboard.writeText(text);
        pug.message.success("已复制到剪贴板");
      };
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
  
