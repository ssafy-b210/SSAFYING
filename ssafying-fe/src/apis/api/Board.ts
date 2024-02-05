import axios from "axios";

//게시판 게시글 작성
async function createBoard() {
  try {
    const url = "/board";
    const data = {
      userId: 1,
      title: "test_title",
      content: "test_content",
      category: "FREEDOM",
      isAnonymous: false,
    };
    const response = await axios.post(url, data);
    console.log(response.data);
  } catch (e) {
    console.error(e);
  }
}
