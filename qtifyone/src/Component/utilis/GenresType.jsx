const GenresType =(data, genresType)=>{
 if(genresType === 'all'){
    return data;
 }
 return data.filter((item)=>{
    return item.genres.key === genresType;
 })
}
export default GenresType;