import { useEffect, useState } from 'react';
import getData from '../utils/getData';

const useInitialState = () => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    information: undefined,
  });
  useEffect(() => getAllDatas(), []);

  const getAllDatas = async () => {
    setData({ loading: true, error: null });
    // se prepara el terreno para la information
    try {
      const datas = await getData();
      setData({ loading: false, information: datas });
    } catch (error) {
      setData({ loading: false, error: error });
    }
  };

  return data;
};
export default useInitialState;
