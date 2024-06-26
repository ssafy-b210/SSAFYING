import { axios } from "../utils/axios";

const REST_MYPAGE_API = `/api/mypage`;

// 마이페이지의 유저 프로필 조회
export async function selectMyPageDetail(userId: number) {
  try {
    return await axios.get(`${REST_MYPAGE_API}/${userId}`);
  } catch (e: any) {
    console.log(e);
  }
}

// 유저가 사용한 해시태그 전체 조회
export async function selectHashtagList(userId: number) {
  try {
    return await axios.get(`${REST_MYPAGE_API}/${userId}/hashtags`);
  } catch (e: any) {
    console.log(e);
  }
}

// 유저가 작성한 피드 조회
export async function selectMyFeedList(userId: number) {
  try {
    return await axios.get(`${REST_MYPAGE_API}/${userId}/feeds`);
  } catch (e: any) {
    console.log(e);
  }
}

// 유저가 작성한 게시글 조회
export async function selectMyBoardList(userId: number) {
  try {
    return await axios.get(`${REST_MYPAGE_API}/${userId}/boards`);
  } catch (e: any) {
    console.log(e);
  }
}

// 유저가 스크랩한 피드 조회
export async function selectSavedFeedList(userId: number) {
  try {
    return await axios.get(`${REST_MYPAGE_API}/${userId}/feeds/scrap`);
  } catch (e: any) {
    console.log(e);
  }
}

// 유저가 스크랩한 게시글 조회
export async function selectSavedBoardList(userId: number) {
  try {
    const res = await axios.get(`${REST_MYPAGE_API}/${userId}/boards/scrap`);
    return res.data.resultData;
  } catch (e: any) {
    console.log(e);
  }
}

// 유저가 스크랩한 채용공고 조회
export async function selectSavedRecruitList(userId: number) {
  try {
    return await axios.get(`${REST_MYPAGE_API}/${userId}/recruits/scrap`);
  } catch (e: any) {
    console.log(e);
  }
}

// 포트폴리오 링크 조회
export async function selectPortfolioLinkList(userId: number) {
  try {
    return await axios.get(`${REST_MYPAGE_API}/${userId}/portfolio`);
  } catch (e: any) {
    console.log(e);
  }
}

// 포트폴리오 링크 생성
export async function createPortfolioLink(
  userId: number,
  portfolioUrl: string,
  type: string
) {
  try {
    const response = await axios.post(
      `${REST_MYPAGE_API}/${userId}/portfolio`,
      {
        portfolioUrl,
        type,
      }
    );
    console.log(response.data);
  } catch (e: any) {
    console.log(e);
  }
}

// 포트폴리오 링크 수정
export async function modifyPortfolioLink(
  portfolioId: number,
  portfolioUrl: string,
  type: string
) {
  try {
    const response = await axios.put(
      `${REST_MYPAGE_API}/portfolio/${portfolioId}`,
      {
        portfolioUrl,
        type,
      }
    );
    console.log(response.data);
  } catch (e: any) {
    console.log(e);
  }
}

// 포트폴리오 링크 삭제
export async function deletePortfolioLink(portfolioId: number) {
  try {
    const response = await axios.delete(
      `${REST_MYPAGE_API}/portfolio/${portfolioId}`
    );
    console.log(response.data);
  } catch (e: any) {
    console.log(e);
  }
}

// 포트폴리오 리드미 작성
export async function modifyPortfolioReadMe(
  userId: number,
  readme: string | undefined
) {
  try {
    await axios.put(`${REST_MYPAGE_API}/${userId}/readme`, {
      readme: readme,
    });
  } catch (e: any) {
    console.log(e);
  }
}

export async function selectPortfolioReadMe(userId: number) {
  try {
    const response = await axios.get(`${REST_MYPAGE_API}/${userId}/readme`);
    return response.data.resultData;
  } catch (e) {
    console.log(e);
  }
}
