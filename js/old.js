$(function () {
  /**======================================================================================================================================================= */

//   linkInit(SERVR_FAIL_DEFAULT_APPS);
  cerateNavDom(SERVR_FAIL_DEFAULT_APPS)
  /**===加载链接======================================================================================================================================== */
  function linkInit(appArr) {
    // 过滤一级数组
    let finalArr = getChildrenList(appArr);
    // 循环数组
    finalArr.forEach((collection) => {
      // 过滤二级数组
      let children = getChildrenList(collection.children);
      collection.children = children;
    });
    //生成dom
    cerateNavDom(finalArr);
  }

  /**==过滤出status == 0的列表、对数组进行排序、正排=================================================================================================== */
  function getChildrenList(children) {
    return children
      .filter((item) => {
        return item.status == 0;
      })
      .sort((a, b) => {
        return a.sort - b.sort;
      });
  }

  /**==创建导航应用dom============================================================================================================================== */
  function cerateNavDom(arrs) {
    let html = "";
    for (let index = 0; index < arrs.length; index++) {
      const element = arrs[index];
      html += `<div class="link-box link-box${index}">
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
  }

  /**==创建子集dom=============================================================================================================================== */
  function cerateChildrenDom(children) {
    let html = "";
    for (let index = 0; index < children.length; index++) {
      const element = children[index];
      html += `<li class="link-item${index}"><a class="link-a" href="${element.url}" target="_blank">
                            <img src="${element.icon}">
                            <span>${element.title}</span></a>
                     </li>\n`;
    }
    return html;
  }

  /**==反馈交流中心========================================================================================================================================== */
  $("#lxzz").on("click", function () {
    window.open("https://support.qq.com/products/514070/");
  });

  // 网址规范工具类 最终得到xxx/favicon.ico
  function getSubstr(url) {
    if (url.substr(-1) == "/") {
      return url + "favicon.ico";
    }
    return url + "/favicon.ico";
  }
});
