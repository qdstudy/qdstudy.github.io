(function ($) {
    $.Pug = {
        message: {
            success: function (msg, timeOut, options) { Message(msg, timeOut, options, 1) },
            tip: function (msg, timeOut, options) { Message(msg, timeOut, options, 2) },
            warn: function (msg, timeOut, options) { Message(msg, timeOut, options, 3) },
            error: function (msg, timeOut, options) { Message(msg, timeOut, options, 4) }
        },
        confirm: function (content, title, options, resFun, cancelFun) { Confirm(content, title, options, resFun, cancelFun) },
        prompt: function (title, tip, formType, options, resFun, cancelFun) { Prompt(title, tip, formType, options, resFun, cancelFun); },
        iframe: function (options, cancelFun) { iFrame(options, cancelFun) },
        loading: function (flag, id, type) { Loading(flag, id, type) },
        close: function (id) { Close(id) },
        dialog: function (id, cancelFun) { Dialog(id, cancelFun) },
        setCache: function (key, val, expire) { SetCache(key, val, expire) },
        getCache: function (key) { return GetCache(key) },
        removeCache: function (key) { RemoveCache(key) },
        clearCache: function () { ClearCache() },
        addhtmlFile: function (filename, filetype) { AddhtmlFile(filename, filetype) },
        removehtmlFile: function (filename, filetype) { RemovehtmlFile(filename, filetype) },
    }
    //=====================================================================
    /**
     * 加载组件
     * loadingFlag: 是否为全屏
     * loadingId: 局部加载父id
     * type: 风格样式
     * 
     */
    function Loading(loadingFlag, loadingId, type) {
        const loading_ele_1 = `<div class="spinner">
                                    <div class="spinner-container container1">
                                        <div class="circle1"></div>
                                        <div class="circle2"></div>
                                        <div class="circle3"></div>
                                        <div class="circle4"></div>
                                    </div>
                                    <div class="spinner-container container2">
                                        <div class="circle1"></div>
                                        <div class="circle2"></div>
                                        <div class="circle3"></div>
                                        <div class="circle4"></div>
                                    </div>
                                    <div class="spinner-container container3">
                                        <div class="circle1"></div>
                                        <div class="circle2"></div>
                                        <div class="circle3"></div>
                                        <div class="circle4"></div>
                                    </div>
                                </div>`;
        const loading_ele_2 = ` <div class="spinner2">
                                    <div class="bounce1"></div>
                                    <div class="bounce2"></div>
                                    <div class="bounce3"></div>
                                </div>`;
        const loading_ele_3 = `<div class="spinner3"></div>`;

        if (loadingFlag) {
            type = type || 3;
            initLoading(loadingId, type, true);
        } else {
            type = type || 1
            initLoading(loadingId, type, false);
        }
        function initLoading(loadingId, loadingType, fullFlag) {
            //非全屏模式
            if (!fullFlag) {
                let domId = document.getElementById(loadingId);
                if (domId == null) {
                    alert("Ecxeption:Dom元素不存在")
                    return;
                }
                if (loadingType === 1) {
                    domId.innerHTML = loading_ele_1;
                    return;
                } if (loadingType === 2) {
                    domId.innerHTML = loading_ele_2;
                    return;
                } if (loadingType === 3) {
                    domId.innerHTML = loading_ele_3;
                    return;
                } else {
                    domId.innerHTML = loading_ele_1;
                    return;
                }
            } else {
                $("body").append(`<div class="pug-loading-full-bg" id="pug_load_wrapper"></div>`);
                initLoading(loadingId = "pug_load_wrapper", type, false);
            }
        }
    }
    //=====================================================================
    /**
     * 清除加载
     * loadingId: 局部加载父id,为空默认为清除全局加载
     * 
     */
    function Close(loadingId) {
        let domId = "#" + (loadingId || "pug_load_wrapper");
        if (domId === "#pug_load_wrapper") $(domId).remove();
        else $(domId).children().remove();
    }
    //=====================================================================
    /**
     * Message提示
     * msg: 提示消息
     * timeOut：显示时长
     * options: 自定义样式
     * type: 提示类型
     *
     */
    function Message(msg, timeOut, options, type) {
        if (type === 1) {
            msg = msg || "操作成功！";
            loadMessage(msg, timeOut, "pug-message-success", "pug-icon-chenggong", options);
            return;
        } if (type === 2) {
            msg = msg || "温馨提示！";
            loadMessage(msg, timeOut, "pug-message-tip", "pug-icon-tixing2", options);
            return;
        } if (type === 3) {
            msg = msg || "危险操作！";
            loadMessage(msg, timeOut, "pug-message-warn", "pug-icon-jinggao", options);
            return;
        } else {
            msg = msg || "操作失败！";
            loadMessage(msg, timeOut, "pug-message-error", "pug-icon-cuowu", options);
            return;
        }

        function loadMessage(msg, timeOut, bgcolor, icon, options) {
            // 模板对象
            let $template = $(`<div class="pug-message ${bgcolor} animate__animated animate__slideInUp">
                            <span class="pug-message-icon"><i class="pug-iconfont ${icon}"></i></span>
                            <span class="pug-message-msg">${msg}</span>
                        </div>`);
            // 追加内容                   
            $('body').append($template);
            // 自定义样式
            $template.css(options || {});
            // // 定时关闭
            $template.timer = setTimeout(function () {
                if ($template.timer) clearTimeout($template.timer);
                let t = $template;
                $template.removeClass('animate__animated animate__slideInUp').addClass('animate__animated animate__slideOutDown none')
                    .fadeOut(1000, function () {
                        $(this).remove();
                    })
            }, timeOut || 3000);
        }
    }
    //=====================================================================
    /**
     * Dialog弹窗
     * id: 节点id
     * cancelFun：取消回调
     * title:弹窗标题
     * maxmin:是否最大化
     * shade:是否有遮罩
     */
    function Dialog(id, cancelFun) {
        //获取要弹窗的dom节点
        const ele = $("pug-dialog#" + id);
        if (ele == null) {
            alert("dialog设置不规范,请设置为<pug-dialog id=xx></pug-dialog>格式！")
            return;
        }
        //若页面有弹窗则先删除之前弹窗
        if ($(".pug-dialog-box").length > 0) {
            $(".pug-dialog-box_wrapper").remove();
        }
        //获取设置的值,标题，最大化，阴影遮罩，宽度
        let title = ele.attr("name") || "";
        let maxmin = (ele.attr("maxmin") != null);
        let shade = (ele.attr("shade") != null);
        let width = ele.attr("width") || 730;
        //追加元素
        $("body").append(`<div class="pug-dialog-box_wrapper animate__animated animate__fadeIn" role="dialog-wrapper" tabindex="-1" style="overflow: auto;">
                          <div class="pug-dialog-box" role="dialog-box">
                            <div class="pug-dialog-box-header">
                              <div class="pug-dialog-box-title">
                                <span>${title}</span>
                              </div>
                              <span class="pug-dialog-btn-group">
                                <button id="changeSizeBtn"><i class="pug-iconfont pug-icon-quanping"></i></button>
                                <button id="pugiDialogCloseBtn"><i class="pug-iconfont pug-icon-guanbi"></i></button>
                              </span>
                            </div>
                            <div class="pug-dialog-box-body"></div>
                          </div>
                        </div>`);
        //向容器中追加内容
        $(".pug-dialog-box .pug-dialog-box-body").html(ele.clone(true));
        //设置dialog样式
        $(".pug-dialog-box").width(width);
        if (!maxmin) $("#changeSizeBtn").css({ display: "none" });
        if (!shade) $(".pug-dialog-box_wrapper").css({ background: "transparent" });
        //使元素可见
        $(".pug-dialog-box-body pug-dialog").css({ display: "block" });
        //点击x关闭弹窗事件,阻止冒泡，设置动画与回调函数
        $('#pugiDialogCloseBtn').off("click").on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $(".pug-dialog-box_wrapper").removeClass('animate__animated animate__fadeIn')
                .addClass('animate__animated animate__fadeOut')
                .fadeOut(500, function () {
                    $(this).remove();
                })
            if (cancelFun) cancelFun();
        })
        //阴影部分关闭弹窗事件
        $('.pug-dialog-box_wrapper').on('click', function (e) {
            if (shade) {
                if (e.target === e.currentTarget) $("#pugiDialogCloseBtn").trigger("click");
            }
        })
        //改变弹窗大小
        $("#changeSizeBtn").on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            changeSize();
        })
        let sizeFlag = true;//默认为非全屏
        function changeSize() {
            if (sizeFlag) {
                $(".pug-dialog-box").addClass("dialog-max");
                sizeFlag = false;
            } else {
                $(".pug-dialog-box").removeClass("dialog-max");
                sizeFlag = true;
            }
        }
    }
    //=====================================================================
    /**
     * iframe弹窗
     * type: 弹窗类型
     * shade：是否加载背景阴影
     * maxmin: 是否出现最大化最小化按钮
     * area: 弹窗宽度，高度
     * url:  类型1使用为url地址
     * ele: 类型2使用，传入要捕获的元素如 #id/.class 等
     * cancelFun :关闭窗口的回调函数
     */
    function iFrame(options, cancelFun) {
        let defaults = {
            type: 1, // iframe类型/1:传入url地址/2:弹出页面存在的元素
            title: "",//弹出标题
            shade: false,//是否加载背景阴影
            maxmin: true,//是否出现最大化最小化按钮
            defineMax: false,//是否默认最大化
            area: ["730px", "480px"],//弹窗宽度，高度
            url: "error url",//类型1使用为url地址
            ele: "",//类型2使用，传入要捕获的元素如 #id/.class 等
        };
        this.options = Object.assign({}, defaults, options);
        //若页面有弹窗则先删除之前弹窗
        if ($(".pug-iframe-box").length > 0) {
            $(".pug-dialog-box_wrapper").remove();
        }
        let that = this;
        createElement(that.options.type || 1);
        function createElement(i) {
            //添加的公共部分元素
            $("body").append(`<div class="pug-dialog-box_wrapper animate__animated animate__fadeIn" role="iframe-wrapper" tabindex="-1">
                          <div class="pug-iframe-box" role="iframe-box">
                            <div class="pug-iframe-box-header">
                              <div class="pug-iframe-box-title">
                                <span>${that.options.title}</span>
                              </div>
                              <span class="pug-iframe-btn-group">
                                <button id="changeSizeBtn"><i class="pug-iconfont pug-icon-quanping"></i></button>
                                <button id="pugiFrameCloseBtn"><i class="pug-iconfont pug-icon-guanbi"></i></button>
                              </span>
                            </div>
                            <div class="pug-iframe-box-body"></div>
                          </div>
                        </div>`);
            //设置接收的弹窗样式
            $(".pug-iframe-box").css({ width: that.options.area[0] });
            if (!that.options.shade) $(".pug-dialog-box_wrapper").css({ background: "transparent" });
            if (!that.options.maxmin) $("#changeSizeBtn").css({ display: "none" });
            if (i === 1) {
                //追加iframe
                let iFrame = `<iframe id="pug_dialog_iframe" src="${that.options.url}" onload=""
                          frameborder="0" scrolling="auto"></iframe>`
                $(".pug-iframe-box-body").html(iFrame);
                // 设置iframe样式
                $(".pug-iframe-box").css({ height: that.options.area[1] });
                $('#pug_dialog_iframe').attr('width', $(".pug-iframe-box").width() + 'px');
                $('#pug_dialog_iframe').attr('height', $(".pug-iframe-box").height() - 46 + 'px');
            }
            else {
                //获取目标节点的元素追加到指定节点并设置节点样式
                $('.pug-iframe-box .pug-iframe-box-body').append(`<div class="pug-iframe-box-main"></div>`)
                const ele = $(that.options.ele).clone();
                $('.pug-iframe-box-body').css({ height: that.options.area[1] });
                $('.pug-iframe-box-main').html(ele).css({ height: that.options.area[1] });
            }
            if (that.options.defineMax) {
                $("#changeSizeBtn").css({ display: "none" });
                $(".pug-iframe-box").css({
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight,
                    top: "0%"
                });
                if (that.options.type === 1) {
                    $('#pug_dialog_iframe').attr('width', document.documentElement.clientWidth);
                    $('#pug_dialog_iframe').attr('height', document.documentElement.clientHeight - 46 + 'px');
                } if (that.options.type === 2) {
                    $('.pug-iframe-box-body').height(document.documentElement.clientHeight);
                    $('.pug-iframe-box-main').height(document.documentElement.clientHeight);
                }
            }
        }

        //点击x关闭弹窗事件,阻止冒泡，设置动画与回调函数
        $('#pugiFrameCloseBtn').off("click").on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $(".pug-dialog-box_wrapper").removeClass('animate__animated animate__fadeIn')
                .addClass('animate__animated animate__fadeOut')
                .fadeOut(500, function () {
                    $(this).remove();
                })
            if (cancelFun) cancelFun();
        })
        //阴影部分关闭弹窗事件
        $('.pug-dialog-box_wrapper').on('click', function (e) {
            if (that.options.shade) {
                if (e.target === e.currentTarget) $("#pugiFrameCloseBtn").trigger("click");
            }
        })
        //改变弹窗大小
        $("#changeSizeBtn").on("click", function (e) {
            e.stopPropagation();
            e.preventDefault();
            changeSize();
        })
        let sizeFlag = true;//默认为非全屏
        function changeSize() {
            if (sizeFlag) {
                $(".pug-iframe-box").css({
                    width: document.documentElement.clientWidth,
                    height: document.documentElement.clientHeight,
                    top: "0%"
                })
                sizeFlag = false;
            } else {
                $(".pug-iframe-box").css({
                    width: that.options.area[0],
                    height: that.options.area[1],
                    top: "5%"
                });
                sizeFlag = true;
            }
            //改变弹窗子节点样式
            if (that.options.type === 1) {
                $('#pug_dialog_iframe').attr('width', $(".pug-iframe-box").width() + 'px');
                $('#pug_dialog_iframe').attr('height', $(".pug-iframe-box").height() - 46 + 'px');
            } if (that.options.type === 2) {
                $('.pug-iframe-box-body').height($(".pug-iframe-box").height());
                $('.pug-iframe-box-main').height($(".pug-iframe-box").height());
                //当为类型2时恢复原始大小去除弹窗的高度，否则格式有误
                if ($(".pug-iframe-box").height() + "px" == that.options.area[1]) {
                    $(".pug-iframe-box").css("height", "");
                }

            }
        }
    }
    //=====================================================================
    /**
     * Confirm弹窗
     * content: 提醒内容
     * title: 标题
     * options: 对象，设置参数
     * resFun: 成功的回调函数
     * cancelFun： 取消的回调函数
     * 
     */
    function Confirm(content, title, options, resFun, cancelFun) {
        let defaults = {
            btn: ["确定", "取消"], //设置按钮文字,未设置则为默认值
            type: "warn",//图标类型 success、tip、warn
            shade: true,//是否加载阴影背景
        };
        // 设置默认值
        this.options = Object.assign({}, defaults, options);
        this.content = content || "亲,确定执行该操作吗?";
        this.title = title || "提示";
        this.icon = getType(this.options.type);
        // 给每个弹框设置唯一值
        const random = "confirm_" + Math.floor(Math.random() * 90) + 10;
        //若页面有弹窗则先删除之前弹窗
        if ($(".pug-message-box#" + random).length > 0) {
            $(".pug-dialog-box_wrapper#" + random).remove();
        }
        let that = this;
        //追加dom节点
        $("body").append(`<div class="pug-dialog-box_wrapper animate__animated animate__fadeIn" id="${random}" role="dialog-wrapper" tabindex="-1">
                          <div class="pug-message-box" id="${random}" role="message-box">
                          <div class="pug-message-box-header">
                              <div class="pug-message-box-title">
                                  <span>${that.title}</span>
                              </div>
                              <button class="pug-message-box-closebtn" id="pugMBoxCloseBtn">
                                  <i class="pug-iconfont pug-icon-guanbi"></i>
                              </button>
                          </div>
                          <div class="pug-message-box-body">
                              <span class="pug-message-box-icon"><i class="pug-iconfont pug-icon-${that.icon}"></i></span>
                              <span class="pug-message-box-msg">${that.content}</span>
                          </div>
                          <div class="pug-message-box-foot">
                              <button class="pug-message-btn queding" id="pugConfirmBtn">${that.options.btn[0] || "确定"}</button>
                              <button class="pug-message-btn cancel" id="pugCloseBtn">${that.options.btn[1] || "取消"}</button>
                          </div>
                          </div>
                      </div>`);
        if (!that.options.shade) $(".pug-dialog-box_wrapper#" + random).css({ background: "transparent" });
        //确认事件回调
        $('#pugConfirmBtn').on('click', function () { resFun && resFun(true) })
        //取消事件回调
        $('#pugCloseBtn').on('click', function () { cancelFun && cancelFun(true); })
        //按钮点击默认关闭Confirm
        $('.pug-message-box-foot button').on('click', function () {
            $("#pugMBoxCloseBtn").trigger("click");
        })
        // 阴影背景点击关闭Confirm事件
        $('.pug-dialog-box_wrapper').on('click', function (e) {
            if (that.options.shade) {
                if (e.target === e.currentTarget) $("#pugMBoxCloseBtn").trigger("click");
            }
        })
        //点击x关闭事件
        $('#pugMBoxCloseBtn').off("click").on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $(".pug-dialog-box_wrapper#" + random).removeClass('animate__animated animate__fadeIn')
                .addClass('animate__animated animate__fadeOut')
                .fadeOut(500, function () {
                    $(this).remove();
                })
        })
        // 获取图标
        function getType(type) {
            if (type === "success") {
                return "chenggong";
            }
            if (type === "tip") {
                return "tixing2";
            }
            if (type === "warn") {
                return "jinggao";
            }
            return "jinggao";
        }
    }
    /**
     * Prompt弹窗
     * title: 标题
     * tip: 提示
     * formType: 类型
     * options: 对象，设置参数
     * resFun: 成功的回调函数
     * cancelFun： 取消的回调函数
     * 
     */
    function Prompt(title, tip, formType, options, resFun, cancelFun) {
        let defaults = {
            btn: ["确定", "取消"], //设置按钮文字,未设置则为默认值
            type: "warn",//图标类型 success、tip、warn
            shade: true,//是否加载阴影背景
            area: ["600px", "320px"],//弹窗宽度，高度
        };
        // 设置默认值
        this.options = Object.assign({}, defaults, options);
        this.formType = formType || 1;
        this.tip = tip || "请输入内容哦";
        this.title = title || "提示";
        const random = "confirm_" + Math.floor(Math.random() * 90) + 10;
        //若页面有弹窗则先删除之前弹窗
        if ($(".pug-message-box#" + random).length > 0) {
            $(".pug-dialog-box_wrapper#" + random).remove();
        }
        let that = this;
        //追加dom节点
        $("body").append(`<div class="pug-dialog-box_wrapper animate__animated animate__fadeIn" id="${random}" role="dialog-wrapper" tabindex="-1">
                          <div class="pug-message-box" id="${random}" role="message-box">
                          <div class="pug-message-box-header">
                              <div class="pug-message-box-title">
                                  <span>${that.title}</span>
                              </div>
                              <button class="pug-message-box-closebtn" id="pugMBoxCloseBtn">
                                  <i class="pug-iconfont pug-icon-guanbi"></i>
                              </button>
                          </div>
                          <div class="pug-message-box-body pug-prompt-box-body"></div>
                          <div class="pug-message-box-foot">
                              <button class="pug-message-btn queding" id="pugConfirmBtn">${that.options.btn[0] || "确定"}</button>
                              <button class="pug-message-btn cancel" id="pugCloseBtn">${that.options.btn[1] || "取消"}</button>
                          </div>
                          </div>
                      </div>`);
        //设置接收的弹窗样式
        $(".pug-message-box#" + random).css({ width: that.options.area[0] });
        $(".pug-message-box#" + random).css({ height: that.options.area[1] });
        if (that.formType === 1) {
            $(".pug-prompt-box-body").html(`<input class="pug-input" type="password" id="promptText" placeholder="${that.tip}"/>`)
        } else {
            $(".pug-prompt-box-body").html(`<textarea class="pug-textarea" style="height:200px" id="promptText" placeholder="${that.tip}"></textarea>`)
        }
        if (!that.options.shade) $(".pug-dialog-box_wrapper").css({ background: "transparent" });
        //确认事件回调
        $('#pugConfirmBtn').on('click', function () {
            if (resFun) {
                const text = $('.pug-prompt-box-body #promptText').val();
                if (text == "") {
                    Message("内容不能为空", 3000, {}, 2);
                    return;
                }
                resFun(text);
                $("#pugMBoxCloseBtn").trigger("click");
            }
        })
        //取消事件回调
        $('#pugCloseBtn').on('click', function () {
            cancelFun && cancelFun(true);
            $("#pugMBoxCloseBtn").trigger("click");
        })
        // //按钮点击默认关闭Confirm
        // $('.pug-message-box-foot button').on('click', function () {
        //     $("#pugMBoxCloseBtn").trigger("click");
        // })
        // 阴影背景点击关闭Confirm事件
        $('.pug-dialog-box_wrapper').on('click', function (e) {
            if (that.options.shade) {
                if (e.target === e.currentTarget) $("#pugMBoxCloseBtn").trigger("click");
            }
        })
        //点击x关闭事件
        $('#pugMBoxCloseBtn').off("click").on('click', function (e) {
            e.stopPropagation();
            e.preventDefault();
            $(".pug-dialog-box_wrapper#" + random).removeClass('animate__animated animate__fadeIn')
                .addClass('animate__animated animate__fadeOut')
                .fadeOut(500, function () {
                    $(this).remove();
                })
        })


    }
    //=====================================================================
    // 存值函数
    // 接收三个参数：键、值、有效天数
    Storage.prototype.setCanExpireLocal = (key, value, expire) => {
        let obj = {
            data: value, //存储值
            time: Date.now(), //存值时间戳
            expire: expire * 86400000, //过期时间 86400000
        }
        // 注意，localStorage不能直接存储对象类型，sessionStorage也一样
        // 需要先用JSON.stringify()将其转换成字符串，取值时再通过JSON.parse()转换回来
        localStorage.setItem(key, JSON.stringify(obj))
    }
    // 取值函数
    // 接收一个参数，存值的键
    Storage.prototype.getCanExpireLocal = key => {
        let val = localStorage.getItem(key)
        // 如果没有值就直接返回null
        if (!val) return val
        // 存的时候转换成了字符串，现在转回来
        val = JSON.parse(val)
        if (Date.now() > val.time + val.expire) {
            localStorage.removeItem(key)
            return null;
        }
        return val.data
    }
    //存储缓存 接收三个参数：键、值、有效天数
    function SetCache(key, val, expire) {
        expire = expire || 1;
        Storage.prototype.setCanExpireLocal(key, val, expire);
    }
    //获取缓存的值
    function GetCache(key) {
        return Storage.prototype.getCanExpireLocal(key);
    }
    //删除指定key的缓存
    function RemoveCache(key) {
        localStorage.removeItem(key);
    }
    //清除全部缓存
    function ClearCache() {
        localStorage.clear();
    }
    //=====================================================================
    //向dom元素中添加js或css文件,文件名-文件类型
    function AddhtmlFile(filename, filetype) {
        let targetElement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none";
        let targetAttr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none";
        let targetType = (filetype == "js") ? ["type", "text/javascript"] : (filetype == "css") ? ["rel", "stylesheet"] : ["", ""];
        let ele = document.createElement(targetElement);
        ele.setAttribute(targetType[0], targetType[1]);
        ele.setAttribute(targetAttr, filename);
        document.body.appendChild(ele);
    }
    //移除dom元素中的js或css文件,文件名-文件类型
    function RemovehtmlFile(filename, filetype) {
        let targetElement = (filetype == "js") ? "script" : (filetype == "css") ? "link" : "none";
        let targetAttr = (filetype == "js") ? "src" : (filetype == "css") ? "href" : "none";
        let allSuspects = document.getElementsByTagName(targetElement);
        for (let i = allSuspects.length; i >= 0; i--) {
            if (allSuspects[i] && allSuspects[i].getAttribute(targetAttr) != null
                && allSuspects[i].getAttribute(targetAttr).indexOf(filename) != -1)
                allSuspects[i].parentNode.removeChild(allSuspects[i]);
        }
    }
    //=====================================================================

})(jQuery);

let pug = $.Pug;
export default pug;