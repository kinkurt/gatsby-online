import * as React from "react";
// import { StaticImage } from "gatsby-plugin-image";

import { Switch  } from '@headlessui/react'

import "tailwindcss/tailwind.css";
import {HeartIcon, ChatIcon, PaperAirplaneIcon,BookmarkIcon, EmojiHappyIcon} from '@heroicons/react/outline';

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
            <div className="border border-gray-200 rounded bg-white max-w-xs sm:max-w-screen-sm"> 

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
            return <div>Loading...</div>;
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
                <div className="flex flex-col justify-center items-center mx-auto">
                  {data.response.results.map(photo => (
                    <div key={photo.id} className="p-3">
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

