/* eslint-disable consistent-return */
// import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    // const { data: { data } } = await axios.get('https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary', {
    //   params: {
    //     bl_latitude: sw.lat,
    //     bl_longitude: sw.lng,
    //     tr_longitude: ne.lng,
    //     tr_latitude: ne.lat,
    //   },
    //   headers: {
    //     'x-rapidapi-key': 'ae65c6c19fmsh43997907fbf7f73p171289jsn5568b4f90170',
    //     'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
    //   },
    // });
    const resp =await fetch("https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary/?"+new URLSearchParams({
      bl_latitude: sw.lat,
      bl_longitude: sw.lng,
      tr_longitude: ne.lng,
      tr_latitude: ne.lat,
  }),{
      method:"GET",
      headers:{
        'x-rapidapi-key': 'ae65c6c19fmsh43997907fbf7f73p171289jsn5568b4f90170',
        'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
      },
    });
    const {data}=await resp.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

