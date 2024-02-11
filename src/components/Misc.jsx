import React from 'react'

export const UnderlineForNavOptions = ({scrolling}) => {
  return (
    <span class={` ${scrolling?"bg-gradient-to-r from-purple-950 via-sky-900 to-violet-950":"bg-white"}  block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5`}></span>
  )
}

export const UnderlineForFooterOptions = () => {
  return (
    <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gradient-to-r from-purple-950 via-sky-900 to-violet-950"></span>
  )
}


