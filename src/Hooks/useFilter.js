import { useEffect, useState } from 'react';
import filterData from '../utils/filterData';

const useFilter = (continent) => {
  const [data, setData] = useState({
    loading: true,
    error: null,
    information: undefined,
  });
  useEffect(() => getFilterDatas(), []);

  const getFilterDatas = async () => {
    setData({ loading: true, error: null });
    // se prepara el terreno para la information
    try {
      const datas = await filterData(continent);
      setData({ loading: false, information: datas });
    } catch (error) {
      setData({ loading: false, error: error });
    }
  };

  return data;
};
export default useFilter;
