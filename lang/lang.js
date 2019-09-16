var app = new Vue({
  el: "#app",
  data: {
    lang: "en",
    content: {
      firstName: {
        en: "Teerapat",
        th: "ธีรภัทร",
        jp: "チィーラパット"
      },
      lastName: {
        en: "Kraisrisirikul",
        th: "ไกรศรีสิริกุล",
        jp: "クライシーシリクル"
      },
      location: {
        en: "Bangkok, Thailand",
        th: "กรุงเทพ ประเทศไทย",
        jp: "バンコク、タイ"
      }
    }
  },
  methods: {
    get: function(attr) {
      if (this.lang == "en") {
        return attr.en;
      } else if (this.lang == "th") {
        return attr.th;
      } else if (this.lang == "jp") {
        return attr.jp;
      } else {
        return attr.en;
      }
    },
    initLanguage: function() {
      var url = window.location.href;

      if (url.split('?').length == 1) {
        return;
      }
      
      var args = url.split('?')[1].split('&')
      var lang = 'en';

      args.forEach((item, index) => {
        if (item.split('=')[0] == 'lang') {
          lang = item.split('=')[1];
        }
      });

      this.lang = lang;
    }
  }
});
