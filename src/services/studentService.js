const capitalize = require("lodash.capitalize");
const startCase = require("lodash.startcase");
const students = [
  { name: "TAN CHIA CHUN", studentId: "A0177787A" },
  { name: "TAN JIA MIN", studentId: "A0194263B" },
  { name: "TAN WEI HUA", studentId: "A0194242H" },
  { name: "WANG WENWEI", studentId: "A0194149W" },
  { name: "WANG YIXIAN", studentId: "A0194158W" },
  { name: "WANG YUWEI", studentId: "A0194229X" },
  { name: "WANG ZHI WEI DARREN", studentId: "A0194107H" },
  { name: "WEI YAQIN", studentId: "A0177725U" },
  { name: "WONG MAYNARD", studentId: "A0194157X" },
  { name: "WONG WEI CHONG ALOYSIUS", studentId: "A0194217A" },
  { name: "WU QIYANG", studentId: "A0194232J" },
  { name: "XU XIN", studentId: "A0194103N" },
  { name: "XU ZIPENG", studentId: "A0194244A" },
  { name: "YANG SHUOGENG", studentId: "A0194153E" },
  { name: "YU HUI", studentId: "A0194275W" },
  { name: "ZARIFAH BINTE ZULKIFLI", studentId: "A0194166X" },
  { name: "ZHANG MENGTONG", studentId: "A0194255Y" },
  { name: "ZHANG YUN", studentId: "A0194181A" },
  { name: "ZHAO WENDI", studentId: "A0177970N" },
  { name: "ZHAO YUECHEN", studentId: "A0194257W" }
];

// eslint-disable-next-line import/prefer-default-export
export function getStudents() {
  return students.map(elem => {
    elem.present = false;
    elem.selected = false;
    elem.name = startCase(capitalize(elem.name));
    return elem;
  });
}
