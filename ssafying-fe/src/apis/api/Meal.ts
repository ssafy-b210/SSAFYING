import { axios } from "../utils/axios";

const REST_MEAL_API = `/api/meal`;

// 식단표 생성
export async function createMeal(campusRegion: string, menu: string) {
  try {
    const data = {
      campusRegion: campusRegion,
      menu: menu,
    };
    const response = await axios.post(`${REST_MEAL_API}`, data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

//식단표 메뉴 수정
export async function updateMeal(menu: string, mealPlannerId: number) {
  const data = {
    menu,
  };
  try {
    const response = await axios.patch(
      `${REST_MEAL_API}/${mealPlannerId}`,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

// 식단표 메뉴 투표
export async function voteMeal(userId: number, mealPlannerId: number) {
  const data = {
    userId,
    mealPlannerId,
  };
  try {
    const response = await axios.patch(`${REST_MEAL_API}/vote`, data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

// 식단표 조회
export async function selectMealList(userId: number) {
  try {
    const response = await axios.get(`${REST_MEAL_API}/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
