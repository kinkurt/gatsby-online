import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";

import { Switch  } from '@headlessui/react'

import "tailwindcss/tailwind.css";
import {HeartIcon, ChatIcon,BookmarkIcon, EmojiHappyIcon} from '@heroicons/react/outline';

import { Fragment, useState } from "react";

import MenuItems from "./menuItems";

import ShareLink from "./shareLink";


const Article = ({data, searchItem}) => {

    const Liked = ({setIfLiked}) => {
      const [enabled, setEnabled] = useState(false);
      return (
        <Switch checked={enabled} onChange={setEnabled}><HeartIcon className={` ${ enabled ? 'fill-current text-red-600':''} w-10 h-10`} />{setIfLiked(enabled)}</Switch>
      )
    }

    const Bookmarked = () => {
      const [enabled, setEnabled] = useState(false)
    
      return (
        <Switch checked={enabled} onChange={setEnabled}><BookmarkIcon className={` ${ enabled ? 'fill-current text-black':''} w-10 h-10 `} /></Switch>
        
      )
    }

      const PhotoComp = ({ photo }) => {
        const { user, urls, likes, description,links } = photo;

        const [ifLiked, setIfLiked] = useState(false);
      
        return (
          <Fragment >
            <div className="border border-gray-200 rounded bg-white max-w-xs sm:max-w-screen-sm "> 

                <div className="h-16 flex flex-row items-center p-2 gap-2">
                  <img className="rounded-full h-10 w-10 " src={urls.regular} alt={urls.regular}/>
                  <div>
                    <a
                      className="font-bold hover:underline"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://unsplash.com/@${user.username}`}
                    >
                      {user.username}
                    </a>
                    </div>
                  
                  <div className="ml-auto"><MenuItems /></div>
                </div>

                <img src={urls.regular} alt={urls.regular} width="640px" />
                

              {/* the like, comment and share icons */}
                <div className="flex flex-row p-2 gap-2 ">
                  <Liked setIfLiked={setIfLiked}/>
                  <button><ChatIcon className="h-10 w-10"/></button>
                  <ShareLink imageLink={links.html}/>
                  <div className="ml-auto"><Bookmarked /></div>
                </div>

                {/* likes */}
                
                <div className="px-2">
                  {ifLiked? likes+1 : likes} Likes
                </div>

                {/* title by uploader */}
                <div className="px-2 pb-2">
                <a
                      className="font-bold hover:underline"
                      target="_blank"
                      rel="noreferrer"
                      href={`https://unsplash.com/@${user.username}`}
                    >
                      {user.username}
                    </a>&nbsp;{description}
                </div>

                {/* comment section */}
                <div className="px-2  border-t border-gray-100 h-12 flex items-center gap-2">
                  <button><EmojiHappyIcon className="h-7 w-7"/></button>
                  <input type="text" id="comment" name="comment" placeholder="Add a comment" className="border-white outline-none w-full" ></input>
                  <button className="disabled:opacity-50 ml-auto text-blue-700" disabled>Post</button>
                </div>
            
            </div>
          </Fragment>
        );
      };

      const Body = () => {
        
        if (data == null) {
            return <div className="flex">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>Loading...</div>
          } 
          else if (data.errors) {
            return (
              <div>
                <div>{data.errors[0]}</div>
                <div>Update access token!</div>
              </div>
            );
          }
           else {
            return (
              <div >
                <div className="flex flex-col justify-center items-center mx-auto ">
                  {data.response.results.map(photo => (
                    <div key={photo.id} className="pt-3 pb-3">
                      <PhotoComp  photo={photo} />
                    </div>
                  ))}
                </div>
                
              </div>
            );
          }
        };


    return(
        <>
        <Body />
        </>
    );

};

export default Article

