$(function () {
  /**==屏蔽ctrl+s========================================================================================================================================== */
  document.onkeydown = function () {
    if (event.ctrlKey == true && event.keyCode == 83) {
      pug.message.tip("调皮了吧，我屏蔽了....");
      event.preventDefault();
    }
  };

});

new Vue({
  el: "#app",
  data: {
    form:{
      url: "",
      title: "",
      icon: ""
    },
    text: "",
    yuanma: ""
  },
  created() {},
  mounted() {
    
  },
  methods:{
    createLinkHandler(){

      if(this.validBlank(this.form.url)){
        this.$message.error('链接未输入');
        return;
      }
      if(this.validBlank(this.form.title)){
        this.$message.error('标题未输入');
        return;
      }
      if(this.validBlank(this.form.icon)){
        this.$message.error('图标未输入');
        return;
      }
      const content = `{ title: "${this.form.title}", url: "${this.form.url}", icon: "${this.form.icon}" },`
      this.text = content;
    },
    setIconHandler(){
      // if(!this.validBlank(this.form.url)){
      //   this.form.icon = this.getSubstr(this.form.url);
      // }
    },
    copyLinkHandler(){
      if(!this.validBlank(this.text)){
        navigator.clipboard.writeText(this.text);
        this.$message.success("已复制到剪贴板");
      }
    },
    getZiYuanHandler(){
        // 使用DOMParser解析HTML
        const parser = new DOMParser();
        const htmlDocument = parser.parseFromString(this.yuanma, 'text/html');

        // 解析标题
        this.form.title = htmlDocument.querySelector('title').textContent;

        // 解析图标
        const iconElement = htmlDocument.querySelector('link[rel="shortcut icon"]');
        const shortIcon = iconElement ? iconElement.getAttribute('href') : '';
        if(this.validBlank(shortIcon)){
          const iconElement2 = htmlDocument.querySelector('link[rel="icon"]');
          this.form.icon = iconElement2 ? iconElement2.getAttribute('href') : '';
        }else{
          this.form.icon = shortIcon;
        }
        // 解析链接
        const ogUrlMeta = htmlDocument.querySelector('meta[property="og:url"]');
        this.form.url = ogUrlMeta ? ogUrlMeta.getAttribute('content') : '';

    },
    setDefaultIconHandler(){
      this.form.icon = "/web/favicon.ico";
    },
    validBlank(str) {
      return str === "" || str === "undefined" || str == undefined;
    },
    getSubstr(url) {
      if (url.substr(-1) == "/") {
        return url + "favicon.ico";
      }
      return url + "/favicon.ico";
    }
  }
});
