import React from 'react'
import { getNewsAPI } from '../../../services/NewsAPI/getNewsAPI';
//pass this container as props
export const container = () => {
  const fetchNewsData = async () => {
    const apiData = await getNewsAPI();
    // pass this as a prop into news card and render it as so. We wont need useState
    const desireResult = apiData?.results[2] as ReleventCardData
    setNewsAPIResponse(desireResult)
  };
  
  useEffect(() => {
    fetchNewsData()
  },[]);
  return (
    <div>container</div>
  )
}
