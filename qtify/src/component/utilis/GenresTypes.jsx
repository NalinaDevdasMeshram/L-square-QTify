const GenresType =(data, genresType)=>{
  console.log('data', data)
    console.log('genresTypes', genresType)
    if(genresType ==='all'){
      console.log('data1', data)
        return data;
    }
   return data.filter((item)=>{
     return item.genre.key === genresType;
   })
}
export default GenresType;