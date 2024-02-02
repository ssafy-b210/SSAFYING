import axios from "axios";

async function getRecruitList() {
  // async, await을 사용하는 경우
  try {
    // GET 요청은 params에 실어 보냄
    const response = await axios.get("/user", {
      params: {
        ID: 12345,
      },
    });

    // 응답 결과(response)를 변수에 저장하거나.. 등 필요한 처리를 해 주면 된다.

    await axios.get("/user?ID=12345"); // 위의 요청과 동일

    var userId = 12345;
    await axios.get(`/user?ID=${userId}`); // Backtick(`)을 이용해 이렇게 요청할 수도 있다.

    console.log(response);
  } catch (e) {
    // 실패 시 처리
    console.error(e);
  }
}
