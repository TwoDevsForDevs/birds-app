import api from '../services/api';

interface PostOrPutParams {
  id: string;
  route: string;
  data: any;
}

const postOrPut = async ({
  id,
  route,
  data
}: PostOrPutParams): Promise<void> => {
  if (id) {
    await api.put(`${route}/${id}`, data);
  }

  if (!id) {
    await api.post(route, data);
  }
};

export default postOrPut;
