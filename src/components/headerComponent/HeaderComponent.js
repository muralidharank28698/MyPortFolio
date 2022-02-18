import React from 'react';
import "./HeaderComponent.css"

function HeaderComponent() {
  return <div className='headerPart'>
      <div className='headerPartTitle'>
                <h1><span>M</span>uralidharanK</h1>
            </div>
            <div className='headerPartTitleLink'>
               <ul className='headerPartTitleLinkUl'>
                   <li><a href=''>Home</a></li>
                   <li><a href=''>About</a></li>
                   <li><a href=''>Projects</a></li>
                   <li><a href=''>Blog</a></li>
                   <li><a href=''>Blog</a></li>
               </ul>
            </div>
  </div>;
}

export default HeaderComponent