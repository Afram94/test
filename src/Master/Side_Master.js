import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineLocalDining, MdOutlineVolunteerActivism, MdAddShoppingCart } from "react-icons/md";
import { IoIosArrowDown, IoIosClose } from "react-icons/io";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";

/* Images */
import Smart_cash_text_Gradient from "../Gfx/Smart_cash_text_Gradient.svg";
import Gasell_smartcash from "../Gfx/Gasell_smartcash.png";
import UC_dark from "../Gfx/UC_dark.png";
import Footer from "../Gfx/Footer.png";

import { getCookie } from '../Components/CookieHandler';

import Cart_product from "../Components/Cart_product";
import SideBar from "../Components/SideBar";

import { slideInRight, slideInUp } from "react-animations"
import { StyleSheet, css } from 'aphrodite';

export default function Std_Master(props) {

  const [isSm, setIsSm] = useState(false)
  const [mobileNav, setMobileNav] = useState(false)

  
  return (
    <div>

      {GetSideBar()}
      
      {/* Navbar */}
      <div>
        <div className=' w-full py-4 flex items-center justify-center flex-wrap'>
          <div className='w-full xl:w-4/5 grid-cols-3 py-4 px-8 xl:px-4 hidden lg:flex justify-center items-center '>
            <Link to="/"><img src={Smart_cash_text_Gradient} className='col-span-1 mr-2 ' style={{height: "20px"}} /></Link>
            {NavBar(false, () => {})}
            <div className=' p-2 flex backdrop-blur-lg bg-[#FFFFFF20] rounded-full flex-wrap justify-center self-end '>
              <img src={Gasell_smartcash} style={{height: "1.5vw"}} />
              <img src={UC_dark} style={{height: "1.5vw"}} />
            </div>
          </div>
        </div>

        {/* Navbar Mobile */}
        <div className=' w-full grid-cols-3 xl:px-4 flex lg:hidden '>
          <Link to="/"><img src={Smart_cash_text_Gradient} className=' my-4 mx-8 z-0' style={{height: "18px"}} /></Link>
          <div className='w-full absolute '>
            <IoIosArrowDown className='absolute right-0 my-4 mx-6 ' color='black' size={40} onClick={() => {setMobileNav(!mobileNav)}} />
            <div className={(!mobileNav ? "hidden" : "")}>
              {NavBar(true, () => {setMobileNav(!mobileNav)})}
            </div>
          </div>
        </div>
      </div>
      <div>
        {props.inner}
      </div>

      <div className="relative grid grid-cols-3 border-t bg-[#280028] border-gray-200  mt-28 h-[300]">  {/* md:mx-36 */}
      <div className="lg:col-span-2 col-span-3">
          <img src={Footer} className="md:w-full md:h-[300px] object-cover" />
        </div>
        <div className="my-6 lg:col-span-1 col-span-3 px-6">
          <div className="grid grid-cols-2">
            <div className="col-span-1">
              <h2 className="text-sm font-extrabold tracking-tight text-gray-300 uppercase">
                INFORMATION
              </h2>
              <p className="mt-1 font-medium text-sm text-gray-300">
                Boka demo
              </p>
                  <h2 className="mt-6 text-sm font-extrabold tracking-tight text-gray-300 uppercase">
                    KONTAKT
                  </h2>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    Smart Cash Sverige AB
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    Kiselgatan 19
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    602 23 Norrk??ping
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    011-470 90 00
                  </p>
            </div>
            <div className="col-span 1 ">
                  <h2 className="text-sm font-extrabold tracking-tight text-gray-300 uppercase">
                    SUPPORT
                  </h2>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    Kassaregister och kortterminaler: 011- 470 90 00
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    PC-Kassor: 011-18474
                  </p>
                  <p className="mt-1 font-medium text-sm text-gray-300">
                    support@smartcash.se
                  </p>
                  <div className="mt-12">
                      <button className="flex bg-gradient-to-tr from-[#b300b3] to-[#ff06fe] text-white py-[12px] px-4 rounded-md w-[160px]" >Skicka direkt <div className="mt-1 ml-4"> <AiOutlineArrowRight /> </div> </button>
                  </div>
              </div>

          </div>
        </div>
        <div className="col-span-3 bg-pink-600 text-white">
          <div className="text-center">
            <p className="text-base font-medium text-white sm:text-white xl:text-center">
                ?? 2021 Smart Cash Sverige AB 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function GetSideBar()
{
  const [isCartOpen, setIsCartOpen] = useState(false)

  if(isCartOpen){
    return(
      <SideBar hide={()=> setIsCartOpen(false)} inner={getCartProds()} />
    )
  }

  return (
    <div className="fixed z-0 w-full h-full mt-28">
      <div className="cursor-pointer z-40 rounded-full absolute bottom-[180px] right-[45px] w-[50px] h-[50px] bg-white shadow-md flex items-center justify-center hover:shadow-lg ease-in-out " onClick={()=>{setIsCartOpen(true)}}>
        <BsCart4 size={20} />
      </div>
    </div>
  )
}

function NavBar(isSm, trigger)
{
  const [toggle_products, setToggle_products] = useState(false)
  const [toggle_offer, setToggle_offer] = useState(false)
  const [showProductArrow, setShowProductArrow] = useState(false)
  const [showOfferAnimation, setShowOfferAnimation] = useState(false)
  const [toggle_checkout, setToggle_checkout] = useState(false)

/* const transition = useTransition(toggle_products, {
    from:{ x:-100, y:800 , opacity:0 },
    enter:{ x:0, y:-20, opacity:1 },
    leave:{ x:200, y:1200, opacity:0 },
  }); */

  const styles = StyleSheet.create({
    slideInRight: {
        animationName: slideInUp,
        animationDuration: '1s'
    }
})

 function handleClick() {
    setShowProductArrow(!showProductArrow);
}

    
      useEffect(() => {
        var specifiedProductElement = document.querySelector('.product_menu');
        var specifiedOfferElement = document.querySelector('.offer_menu');

        function handleClickOutside(event) {
          if(specifiedProductElement.contains(event.target)){
            console.log('hehe')
            setToggle_products(true);
          }
          if(specifiedOfferElement.contains(event.terget)){
            console.log('haha')
            setToggle_offer(true);
          }
          if(!specifiedProductElement.contains(event.target) && !specifiedOfferElement.contains(event.target)){
            setToggle_products(false)
            setShowProductArrow(false);
            setToggle_offer(false);
            setShowOfferAnimation(false);
          }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          // Unbind the event listener on clean up
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);
  
  return(
    <div className="z-10">
      <div className={'flex flex-cols px-4 col-span-1 w-full justify-center ' + (isSm ? "hidden" : "")} style={{marginRight: "7%"}}>
        {/* <Link to="/restaurant-products" className="text-white mx-8 font-bold uppercase"> Restaurang-products </Link> */}
        
        <div className="flex flex-col">
          <div className="text-black mx-3 font-bold uppercase cursor-pointer text-lg" onClick={() => {setToggle_products(!toggle_products); handleClick();}}>Produkter</div>
          
          
            {/* Product */}
            <div class={"w-16 overflow-hidden inline-block " + ((showProductArrow) ? "block ": "hidden ") + css(styles.slideInRight)} >
              <div class={"h-7 w-7 bg-gray-300 rotate-45 absolute top-[68px] left-[700px] " }></div>
            </div>
                {/* Offers */}
            <div class={"w-16 overflow-hidden inline-block " + ((showOfferAnimation) ? "block ": "hidden ") + css(styles.slideInRight)} >
              <div class={"h-7 w-7 bg-gray-300 rotate-45 absolute top-[68px] left-[840px]"}></div>
            </div>
          
            <div className="absolute top-[65px] right-[500px]">
              <div className={"product_menu flex bg-gray-100 rounded-xl shadow-md h-auto w-[940px] my-4 py-2 " + ((toggle_products) ? "block " : "hidden ") + css(styles.slideInRight)}>
                <Link to="/restaurant-products" className='text-black mx-6 font-bold uppercase flex justify-self-center'> <div className="w-6 h-6 mr-1 pt-1"> <MdOutlineLocalDining /> </div>       Restaurang & Cafe     </Link>
                <Link to="/beauty-products" className='text-black mx-6 font-bold uppercase flex justify-self-center'> <div className="w-6 h-6 mr-1 pt-1"><MdOutlineVolunteerActivism/> </div>       Sk??nhet & H??lsa     </Link>
                <Link to="/restaurant-products" className='text-black mx-6 font-bold uppercase flex justify-self-center'> <div className="w-6 h-6 mr-1 pt-1"><MdAddShoppingCart/> </div>      Livsmedel & Kiosk     </Link>
                <Link to="/restaurant-products" className='text-black mx-6 font-bold uppercase flex justify-self-center'> <div className="w-6 h-6 mr-1 pt-1"> <MdOutlineLocalDining /> </div>       Alla produkter     </Link>
              </div>
            </div>
          
        </div>

        
        <div className="flex flex-col">
          <div className="text-black mx-3 font-bold uppercase cursor-pointer text-lg" onClick={() => {setToggle_offer(!toggle_offer); setShowOfferAnimation(!showOfferAnimation);}}>Erbjudande</div>
          
            <div className="mr-24 absolute top-[65px] right-[1250px]">
              <div className={"offer_menu flex bg-gray-50 rounded-xl shadow-md h-auto w-[700px] absolute my-4 py-2 " + ((toggle_offer) ? "block " : "hidden ") + css(styles.slideInRight)}>
                <Link to="/restaurant-and-cafe" className='text-black mx-8 font-bold uppercase'>       Restaurang & Cafe    </Link>
                <Link to="/beauty-and-health" className='text-black mx-8 font-bold uppercase'>       Sk??nhet & H??lsa    </Link>
                <Link to="/grocery-stores" className='text-black mx-8 font-bold uppercase'>       Livsmedel & Kiosk    </Link>
              </div>
            </div>
          
        </div>
        <Link to="/inlosenavtal" className='text-black mx-5 font-bold uppercase'>       Inl??senavtal  </Link>
        <Link to="/om_oss" className='text-black mx-5 font-bold uppercase w-16'>  Om_oss        </Link>
        <Link to="/kontakt" className='text-black mx-5 font-bold uppercase'>       Kontakt       </Link>
      </div>

      <div className={'w-screen bg-white h-screen z-10 ' + (isSm ? "" : "hidden")}>
        <div className={'grid-rows-5 grid flex-col px-4 w-full items-center py-14'}>
          <Link to="/" className='text-black text-center h-28 font-bold uppercase'>Produkter</Link>
          <Link to="/erbjudande" className='text-black text-center h-28 font-bold uppercase'>Erbjudande</Link>
          <Link to="/inlosenavtal" className='text-black text-center h-28 font-bold uppercase'>Inl??senavtal</Link>
          <Link to="/om_oss" className='text-black text-center h-28 font-bold uppercase'>Om oss</Link>
          <Link to="/kontakt" className='text-black text-center h-28 font-bold uppercase'>Kontakt</Link>
        </div>
        <IoIosClose size={70} className='w-full justify-center' onClick={trigger} />
      </div>
    </div>
  );
}

function getCartProds() {
  var cookie = JSON.parse(getCookie("products"));
  
  var toRet = cookie.map((obj, key) => {
    return(
      <div key={key}>
        <Cart_product name={obj.name} price={obj.price} img={obj.img} count={obj.count} id={key}/>
      </div>
    )
  });

  return toRet;
}
