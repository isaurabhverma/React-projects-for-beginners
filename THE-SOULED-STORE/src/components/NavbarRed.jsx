import React from 'react'
import { PageState } from '../contexts/pagecontext/PageState'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

export default function NavbarRed() {
    const {
        women,men,kid,handelkid,handelmen,handelwomen
    } = useContext(PageState);
  return (
    <>
      <div className='topbar'>
        <div className='inner-topbar'>
            <ul className='topbar-list'>
                <li className={women} onClick={handelwomen} id='topbar-category-list'>WOMEN</li>
                <li className={men} onClick={handelmen} id='topbar-category-list'>MEN</li>
                <li className={kid} onClick={handelkid} id='topbar-category-list'>KIDS</li>
            </ul>
            <ul className='topbar-list topbar-list-options'>
                <li id='topbar-option-list'><Link to='/UnderConstruction'>TRACK ORDER</Link></li>
                <li id='topbar-option-list'><a href='https://www.linkedin.com/in/manshusainishab/'>CONTACT US</a></li>
                <li id='topbar-option-list'><i className="fa fa-mobile-phone"></i>  <a href='https://play.google.com/store/apps/details?id=com.thesouledstore'>DOWNLOAD APP</a></li>
            </ul>
        </div>
      </div>
      </>
  )
}
