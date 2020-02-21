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
      about: {
        title: {
          en: "About",
          th: "เกี่ยวกับ",
          jp: "自分"
        },
        firstName: {
          en: "Teerapat",
          th: "ธีรภัทร",
          jp: "ティーラパット"
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
          jp: "大学3年生、情報技術学部、King Mongkut's Institute Technology Ladkrabang."
        }
      },
      education: {
        title: {
          en: "Education",
          th: "การศึกษา",
          jp: "教育"
        },
        items: [
          // content/education/items/0
          {
            title: {
              en: "King Mongkut's Institute of Technology Ladkrabang",
              th: "สถาบันเทคโนโลยีพระจอมเกล้าเจ้าคุณทหารลาดกระบัง",
              jp: "King Mongkut's Institute of Technology Ladkrabang"
            },
            subtitle: {
              en: "Bachelor of Science - BSc, Information Technology",
              th: "วิทยาศาสตร์บันฑิต เทคโนโลยีสารสนเทศ",
              jp: "理学士、情報技術学士"
            },
            date: {
              en: "August 2017 - Present",
              th: "สิงหาคม พ.ศ.2560 - ปัจจุบัน",
              jp: "２０１７年８月 - 今"
            },
            list: [
              {
                en: "Current Cumulative GPA of 3.71",
                th: "ผลการเรียนเฉลี่ย 3.73",
                jp: "３.７３の総合成績"
              },
              {
                en: "4-Year Scholarship Student",
                th: "นักศึกษาทุนการศึกษา 4 ปี",
                jp: "４年の奨学金を受けている大学生"
              }
            ]
          },
          // content/education/items/1
          {
            title: {
              en: "Satriwitthaya 2 School (High School)",
              th: "โรงเรียนสตรีวิทยา ๒ (มัธยมศึกษาตอนปลาย)",
              jp: "サトリウイッタヤー２学校（高校）"
            },
            subtitle: {
              en: "Mathematics and Science Major, Special Program (SP)",
              th: "แผนการเรียนวิทยาศาสตร์-คณิตศาสตร์ ห้องเรียนพิเศษ (SP)",
              jp: "理系、特別プログラム（SP）"
            },
            date: {
              en: "May 2014 - March 2017",
              th: "พฤษภาคม พ.ศ.2557 - มีนาคม พ.ศ.2560",
              jp: "２０１４年５月 - ２０１７年３月"
            },
            list: [
              {
                en: "Cumulative GPA of 3.17",
                th: "ผลการเรียนเฉลี่ย 3.17",
                jp: "３.１７の総合成績"
              },
              {
                en: "Special Program (SP) specializes in the addition of English classes and activities.",
                th: "ห้องเรียนพิเศษ (SP) คือโปรแกรมที่ถูกเพิ่มชั่วโมงเรียนและกิจกรรมภาษาอังกฤษ",
                jp: "特別プログラム（SP）は英語の授業と活動を追加されるプログラムです。"
              },
            ]
          },
          // content/education/items/2
          {
            title: {
              en: "Satriwitthaya 2 School (Middle School)",
              th: "โรงเรียนสตรีวิทยา ๒ (มัธยมศึกษาตอนต้น)",
              jp: "サトリウイッタヤー２学校（中学校）"
            },
            subtitle: {
              en: "English Program (EP)",
              th: "ห้องเรียนภาคภาษาอังกฤษ (EP)",
              jp: "英語プログラム（EP）"
            },
            date: {
              en: "May 2011 - March 2014",
              th: "พฤษภาคม พ.ศ.2554 - มีนาคม พ.ศ.2557",
              jp: "２０１１年５月 - ２０１４年３月"
            },
            list: []
          },
          // content/education/items/3
          {
            title: {
              en: "Chokchai School (Primary School)",
              th: "โรงเรียนโชคชัย (ประถมศึกษา)",
              jp: "チョックチャイ学校（小学校）"
            },
            subtitle: {
              en: "English Program (EP)",
              th: "ห้องเรียนภาคภาษาอังกฤษ (EP)",
              jp: "英語プログラム（EP）"
            },
            date: {
              en: "May 2005 - March 2011",
              th: "พฤษภาคม พ.ศ.2548 - มีนาคม พ.ศ.2554",
              jp: "２００５年５月 - ２０１１年３月"
            },
            list: []
          }
        ]
      },
      activities: {
        title: {
          en: "Activities",
          th: "กิจกรรม",
          jp: "活動"
        }
      },
      skills: {
        title: {
          en: "Skills",
          th: "ความสามารถ",
          jp: "能力"
        }
      },
      achievements: {
        title: {
          en: "Achievements",
          th: "ความสำเร็จ",
          jp: "業績"
        }
      },
      gallery: {
        title: {
          en: "Gallery",
          th: "แกลเลอรี",
          jp: "ギャラリー"
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
