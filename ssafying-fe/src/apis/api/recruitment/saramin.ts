import {saramin} from '../../utils/saramin';

export async function getCategory() {
  const response = await saramin.get("");
  return response.data;
}