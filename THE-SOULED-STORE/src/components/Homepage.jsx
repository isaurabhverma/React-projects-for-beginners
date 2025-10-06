import NavbarWhite from './NavbarWhite'
import SliderComponent from './SliderComponent';
import './Homepage.css';
import BestSeller from './BestSeller';
import Categories from './Categories';
import Footer from './Footer';
import { PageState } from '../contexts/pagecontext/PageState';
import { useContext } from 'react';
import NavbarRed from './NavbarRed';

function Homepage() {
  const { curclick } = useContext(PageState);
  return (
    <>
    <NavbarRed></NavbarRed>
    <NavbarWhite></NavbarWhite>
    <SliderComponent theme = {curclick}></SliderComponent>
    <BestSeller theme = {curclick} ></BestSeller>
    <Categories theme={curclick}></Categories>
    <Footer></Footer>
    </>
  )
}

export default Homepage;