import * as React from "react"
import { useState, useEffect } from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Article from "../components/article"
import Stories from "../components/stories"

import { createApi } from "unsplash-js";



const IndexPage = () => {

  const [data, setPhotosResponse] = useState();
  const [storiesPhoto, setStoriesPhoto] = useState();
  const [searchItem, setSearchItem] = useState(``);

  const api = createApi({
    accessKey: process.env.GATSBY_UNSPLASH_API_KEY
  });

  const searchArray = ["dog","cat","explore","gaming","city"];
  const randomNumber = Math.floor(Math.random() * 5);
  

  const fetchImage = async() =>{
    if(searchItem.length <= 0){
        await api.search
        .getPhotos({query:searchArray[randomNumber],orientation: "landscape"})
        .then(result => {
          setPhotosResponse(result)
        })
        .catch(() => {
          console.log("something went wrong!");
        });
    }
    else{
        await api.search
        .getPhotos({query:searchItem,orientation: "landscape"})
        .then(result => {
          setPhotosResponse(result)
        })
        .catch(() => {
          console.log("something went wrong!");
        });
    }
}

useEffect(()=>{
   api.search
        .getPhotos({query:`visuals`,orientation: "portrait",perPage:"5"})
        .then(result => {
          setStoriesPhoto(result)
        })
        .catch(() => {
          console.log("something went wrong!");
        });
},[])

useEffect(()=>{
  fetchImage();
},[searchItem]);

return(
  <Layout searchItem={searchItem} setSearchItem={setSearchItem}>
    <Seo title="Home" />
    <Stories storiesPhoto={storiesPhoto}/>
    <Article data={data} searchItem={searchItem} setPhotosResponse={setPhotosResponse} />
    
  </Layout>
)
}

export default IndexPage
