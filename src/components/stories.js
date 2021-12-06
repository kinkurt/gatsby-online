import * as React from "react"
import { Fragment, useState } from "react";
import "tailwindcss/tailwind.css";
import Logo from "../images/instagramLogoClear.png";
import { Dialog, Transition } from '@headlessui/react'


const Stories = ({storiesPhoto}) => {

    const ImageClicked = ({photo}) => {
        const [isOpen, setIsOpen] = useState(false);

        function closeModal() {
          setIsOpen(false)
        }
      
        function openModal() {
          setIsOpen(true)
        }
      
        return (
          <>
            <div >
              <button
                type="button"
                onClick={openModal}
              >
                <img className="w-10 h-10 sm:w-16 sm:h-16 border-2 border-pink-700 rounded-full" src={photo.urls.regular} alt={photo.urls.regular}/>
                <div className="max-w-xs text-xs overflow-ellipsis overflow-hidden">
                    {photo.user.first_name}
                </div>
              </button>
            </div>
      
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed inset-0 z-10 overflow-y-auto "
                onClose={closeModal}
              >
                <div className="min-h-screen text-center h-full w-full">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <Dialog.Overlay className="fixed inset-0" />
                  </Transition.Child>
      
                  {/* This element is to trick the browser into centering the modal contents. */}
                  <span
                    className="inline-block h-full align-middle"
                    aria-hidden="true"
                  >
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="inline-block h-full w-full overflow-hidden align-middle transition-all transform bg-black shadow-xl">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-white "
                      >
                        <img src={Logo} alt="Logo" className="max-w-sm p-5"/>
                      </Dialog.Title>
                      <div className="mt-2 w-full flex justify-center">
                        <div className="flex flex-col">
                          <div className="text-white p-6 gap-4 text-left flex items-center">
                            <img className="w-10 h-10 sm:w-16 sm:h-16 border-2 border-pink-700 rounded-full" src={photo.urls.regular} alt={photo.urls.regular}/>
                            <a
                              className="font-bold hover:underline"
                              target="_blank"
                              rel="noreferrer"
                              href={`https://unsplash.com/@${photo.user.username}`}
                            >
                              {photo.user.name}
                            </a>
                          </div>
                            <img className="max-w-56 md:max-w-screen-sm" src={photo.urls.regular} alt={photo.urls.regular}/>
                        </div>
                      </div>
      
                      <div className="mt-4">
                        <button
                          type="button"
                          className="absolute top-6 right-4"
                          onClick={closeModal}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition>
          </>
        );
      };

      

      const StoriesShow = () => {
        if (storiesPhoto == null) {
          return <div className="flex"><svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>Stories</div>;
        } 
        else if (storiesPhoto.errors) {
          return (
            <div>
              <div>{storiesPhoto.errors[0]}</div>
              <div>Update access token for stories!</div>
            </div>
          );
        }
         else {
        return (
          <div className="container mx-auto  max-w-xs sm:max-w-screen-sm h-32 bg-white border border-gray-200 rounded flex justify-center">
              <div className="flex flex-row items-center gap-4">
              {storiesPhoto.response.results.map(photo => (
                <div key={photo.id} className="">
                   <div className="">
                      <button>
                        <ImageClicked photo={photo}/>
                      </button>
                    </div>
                </div>
              ))}
            </div>
          </div>
        );
              }
      }


    return(
        <>
              <StoriesShow />
        </>
    );

};

export default Stories