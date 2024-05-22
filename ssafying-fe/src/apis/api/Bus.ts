import { axios } from "../utils/axios";

const REST_BUS_API = `/api/bus`;

export async function selectBusStopList(shuttleId: number) {
  try {
    const res = await axios.get(`${REST_BUS_API}`, {
      params: {
        shuttleId: shuttleId,
      },
    });
    return res.data.resultData;
  } catch (err) {
    console.log(err);
  }
}
