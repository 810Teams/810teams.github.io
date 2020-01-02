/**
 * `lang.js`
 * JavaScript code contains web content in various languages and multi-language methods
 */

var app = new Vue({
  el: "#app",
  data: {
    langList: ["en", "th", "jp"],
    lang: "en",
    init: false,
    content: {
      nav: {
        about: {
          en: "About",
          th: "เกี่ยวกับ",
          jp: "自分"
        },
        education: {
          en: "Education",
          th: "การศึกษา",
          jp: "教育"
        },
        activities: {
          en: "Activities",
          th: "กิจกรรม",
          jp: "活動"
        },
        skills: {
          en: "Skills",
          th: "ความสามารถ",
          jp: "能力"
        },
        achievements: {
          en: "Achievements",
          th: "ความสำเร็จ",
          jp: "業績"
        },
        interests: {
          en: "Interests",
          th: "ความสนใจ",
          jp: "興味"
        },
        gallery: {
          en: "Gallery",
          th: "แกลเลอรี",
          jp: "ギャラリー"
        }
      },
      about: {
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
        },
        intro: {
          en:
            "3rd Year Information Technology Student at King Mongkut's Institute Technology Ladkrabang.",
          th:
            "นักศึกษาคณะเทคโนโลยีสารสนเทศชั้นปีที่ 3 สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
          jp: "大学3年生、情報技術学部、KMITL"
        }
      }
    }
  },
  methods: {
    initLanguage: function() {
      if (this.init) {
        return;
      }

      this.init = true;
      var url = window.location.href;
      if (url.split("?").length == 1) {
        return;
      }

      var args = url.split("?")[1].split("&");
      args.forEach((item, index) => {
        if (item.split("=")[0] == "lang") {
          this.setLanguage(item.split("=")[1]);
        }
      });
    },
    setLanguage: function(lang) {
      if (this.langList.includes(lang)) {
        this.lang = lang;
      } else {
        this.lang = "en";
      }
    },
    get: function(attr) {
      if (this.lang == "en") {
        return attr.en;
      } else if (this.lang == "th" && attr.th != "") {
        return attr.th;
      } else if (this.lang == "jp" && attr.jp != "") {
        return attr.jp;
      } else {
        return attr.en;
      }
    }
  }
});
