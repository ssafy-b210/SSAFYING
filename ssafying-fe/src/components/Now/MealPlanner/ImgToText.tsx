import * as tesseract from "node-tesseract-ocr";
import * as path from "path";

const config: tesseract.Config = {
  lang: "kor+eng",
  oem: 1,
  psm: 3,
};

// const imagePath: string =
//   "C:/Users/SSAFY/Desktop/S10P12B210/ssafying-fe/src/assets/240129.PNG";

tesseract
  .recognize(
    "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbo49uE%2FbtrmTPxkS2Y%2FHhQFnyFUDbWVdWNKVFE3IK%2Fimg.png",
    config
  )
  .then((text: string) => {
    console.log("Result:", text);
  })
  .catch((error: Error) => {
    console.error(error);
  });
