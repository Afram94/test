import React from 'react'
import { Link } from 'react-router-dom';
import Std_Master from '../../Master/Std_Master'
import Enox_SmartCash_3 from '../../Gfx/Enox_SmartCash_3.png'
import Mac from '../../Gfx/Mac.png'
import bg_1 from '../../Gfx/bg_1.png'
import bg_kontakt_card from '../../Gfx/bg_kontakt_card.png'
import Sigill_rosa from '../../Gfx/Sigill_rosa.png'
import Group_16 from '../../Gfx/Group_16.png'
import personalkollen_logo_blue_1 from '../../Gfx/personalkollen_logo_blue_1.png'
import fortnox_logo_1 from '../../Gfx/fortnox_logo_1.png'
import swish_logo_1 from '../../Gfx/swish_logo_1.png'
import fönster from '../../Gfx/fönster.jpg'
import Enox_ipad_iphon from '../../Gfx/Enox_ipad_iphon.png'
import Group_27 from '../../Gfx/Group_27.png'
import hehe1 from '../../Gfx/hehe1.png'
import hehe2 from '../../Gfx/hehe2.png'
import hehe3 from '../../Gfx/hehe3.png'
import hehe4 from '../../Gfx/hehe4.png'
import Smart_cash_gradientBg from "../../Gfx/Smart_cash_gradientBg.svg";
import test_9 from '../../Gfx/test_9.png'
import Rectangle from '../../Gfx/Rectangle.png'
import functions from '../../Gfx/functions.webp'
import Enox_Kassa from "../../Gfx/Enox_Kassa.png"
import Enox_mac from "../../Gfx/Enox_mac.png"
import NewCard from '../../Components/NewCard'
import { FcOk } from "react-icons/fc";

import InfoCard from "../../Components/InfoCard"


export default function RestaurantAndCafe() {
    return (
        <Std_Master Title="SKÖNHET & HÄLSA" inner={
            <div>
            <div className="grid gap-y-24">
                <div className="grid grid-cols-5 w-full lg:px-48 items-center border-b gap-4">
                    <div className="lg:col-span-2 col-span-5 px-2 mx-2 relative">
                    <p class="hidden md:block text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ett kassasystem framtaget för<br/> butiker inom skönhet & salong!</p>
                            <p class="block md:hidden text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Ett kassasystem framtaget för butiker inom skönhet & salong!</p>
                            <div className="md:w-full mt-4">
                                <h2 class="font-medium text-gray-500 font-body text-[18px]">
                                    I vårt kassasystem har vi inte bara tänkt på alla viktiga funktioner våra kunder efterfrågar utan har även <br/>
                                    jobbat på designen av kassorna då vi anser att det behöver se snyggt och prydligt ut för att matcha er butik.
                                    Med Enox kassasystem kan du enkelt hålla koll på ditt lager samt sköta era bokningar på ett enkelt & smidigt sätt.
                                    Här kan ni erbjuda era kunder e-postbekräftelser efter varje bokning. För att få reda på exakt
                                    vad du behöver så tveka inte att kontakta oss för en Demo helt kostnadsfritt.
                                </h2>

                            <div className="flex justify-end w-full py-8">
                                
                                <Link to="/kontakt" className='flex justify-center bg-gradient-to-tr from-[#F85DA7] via-[#FB58A5] to-[#F41F84] text-white py-[6px] px-4 rounded-md w-[180px]'> Boka demo </Link>
                                
                            </div>

                            </div>
                    </div>
                    <div className="lg:col-span-3 col-span-5 ">
                        <div className="col-span-1 md:h-[600px] h-[300px] bg-cover bg-no-repeat" style={{backgroundImage: "url(" + Enox_SmartCash_3 + ")"}}></div>
                    </div>
                </div>
                <div className="bg-gray-50 bg-contain bg-center"> {/* style={{backgroundImage: "url(" + bg_1 + ")"}} */}
                    <div className="grid md:grid-cols-2 grid-cols-1 lg:mx-60 py-8">
                    <div className="md:col-span-2 col-span-1 border-r border-dashed h-[100px] font-bold flex justify-center py-8 text-3xl">FUNKTIONER</div>
                        <div className="grid-cols-1 ">
                            <div className="grid grid-rows-3">
                                <div className="row-span-1 flex justify-start h-[400px] relative">
                                    <div className=" px-6 py-4">
                                        <p className=" flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Bordshantering.
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Sökfält inbyggt i kassan för att snabbt kunna söka upp kvitton, kunder & artiklar.
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Rapporter i pdf format skickat direkt till din mejladress & er ekonomiansvarig/revisor.
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Pay@Table ( öppna upp notor vid bordet och ta betalt direkt i kortterminalen).
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Artiklar kopplade till meddelanden.
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Bongsystem för köket (koppla hur många bongar du vill).
                                        </p>
                                    </div>
                                </div>
                                <div className="row-span-1 flex justify-start h-[350px] relative bg-contain bg-no-repeat" style={{backgroundImage: "url(" + Enox_mac + ")"}}>
                                </div>
                                <div className="row-span-1 flex justify-start h-[400px] relative">
                                    <div className=" px-6 py-4 pt-16">
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Lagerhantering.
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Ordersystem med nummer (via skärm eller pappersformat).
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Pucksystem där du kan ange pucknummer som skrivs ut på kvittot.
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Samla bongar för att skicka ordrar tillsammans.
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Bokningskalender med e-post bekräftelse.
                                        </p>
                                        <p className="flex mt-4 text-[18px] font-serif text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Presentkort/Rabattkort & Lunchkort (pappersform eller plastkort).
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid-cols-1">
                            <div className="grid grid-rows-3">
                                <div className="row-span-1 flex justify-start h-[350px] relative bg-contain bg-no-repeat" style={{backgroundImage: "url(" + Enox_Kassa + ")"}}>
                                </div>
                                <div className="row-span-1 flex justify-start h-[400px] relative">
                                    <div className=" px-6 py-4 pt-16">
                                        <p className="flex mt-4 text-[18px] text-sm font-medium text-gray-700">
                                            <div className="mt-[3px]"><FcOk /></div> Drickshantering enligt Skatteverkets nya krav.
                                        </p>
                                        <p className="flex mt-4 text-[18px] text-sm font-medium text-gray-700">
                                            <div className="mt-[3px]"><FcOk /></div> Kortterminal kopplad till kassan.
                                        </p>
                                        <p className="flex mt-4 text-[18px] text-sm font-medium text-gray-700">
                                            <div className="mt-[3px]"><FcOk /></div> Kunddisplay där du kan lägga upp företagsreklam eller tillbehör för merförsäljning.
                                        </p>
                                        <p className="flex mt-4 text-[18px] text-sm font-medium text-gray-700">
                                            <div className="mt-[3px]"><FcOk /></div> Inbyggt fakturasystem.
                                        </p>
                                        <p className="flex mt-4 text-[18px] text-sm font-medium text-gray-700">
                                            <div className="mt-[3px]"><FcOk /></div> Backoffice.
                                        </p>
                                        <p className="flex mt-4 text-[18px] text-sm font-medium text-gray-700">
                                            <div className="mt-[3px]"><FcOk /></div> Elektroniskt kvitto (välj att antingen mejla kvittot eller arkivera med ett knapptryck).
                                        </p>
                                    </div>
                                </div>
                                <div className="row-span-1 flex justify-start h-[400px] relative bg-contain bg-no-repeat" style={{backgroundImage: "url(" + Enox_ipad_iphon + ")"}}>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>



            


            <div className="relative grid md:grid-cols-2 grid-cols-1 py-16 mx-28 h-[500px] rounded-lg">

                <div className="col-span-1 flex justify-center mx-2">
                    <div className="grid grid-cols-2 gap-x-12">
                        <div className="col-span-1 flex justify-center bg-red-400 w-[370px]">
                            <div className="grid grid-rows-3 my-4">
                                <div className="row-span-1">Title</div>
                                <div className="row-span-1">Title_2</div>
                                <div className="row-span-1">text</div>
                            </div>
                        </div>
                        <div className="col-span-1 flex justify-center bg-red-700 w-[370px]">
                        <div className="grid grid-rows-3 my-4">
                        <div className="row-span-1">Title</div>
                        <div className="row-span-1">Title_2</div>
                        <div className="row-span-1">Text</div>
                    </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-span-1 flex mx-2 bg-cover bg-center bg-no-repeat w-[550px] h-[400px] rounded-lg bg-gray-50 " style={{backgroundImage: "url(" + Smart_cash_gradientBg + ")"}}>
                    <div className="grid grid-rows-3 my-8 items-center">
                        <div className="row-span-1 text-2xl font-bold text-[80px] text-white flex justify-center">Enox</div>
                        <div className="row-span-1 flex mx-8">
                            <div className="pt-20 mr-2">
                                <div className=" border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + hehe1 + ")"}}/>
                            </div>
                            <div className="pt-16 mr-2">
                                <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + hehe2 + ")"}}/>
                            </div>
                            <div className="pt-12 mr-2">
                                <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + hehe3 + ")"}}/>
                            </div>
                            <div className="pt-8">
                                <div className="border-2 w-[160px] h-[160px] sm:w-[100px] sm:h-[100px] rounded-full bg-cover bg-center" style={{backgroundImage: "url(" + hehe4 + ")"}}/>
                            </div>
                        </div>
                        <div className="row-span-1 mx-4 pt-8 font-medium text-gray-700">
                                I vårt kassasystem har vi inte bara tänkt på alla viktiga funktioner våra kunder efterfrågar utan har även <br/>
                                
                        </div>
                    </div>
                </div>
            {/*     <div className="md:col-span-4 col-span-1 border-r border-dashed h-[100px] font-bold flex justify-center py-8 text-3xl">Varför Enox</div>

                <div className="mx-8 flex justify-center shadow-lg my-2 ease-in-out hover:shadow-2xl lg:mx-24 md:4 text-center rounded-lg h-[300px] bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Group_28 + ")"}}>
                    <div className="grid grid-rwos-3">
                        <div className="row-span-1 py-4 text-bold font-semibold text-xl border-b">
                            Integrationer
                        </div>
                        <div className="row-span-2">
                            <div className="grid grid-cols-4 gap-x-4">
                                <div className="col-span-4 flex justify-center text-center bg-center bg-no-repeat w-[330px] h-[80px]" style={{backgroundImage: "url(" + personalkollen_logo_blue_1 + ")"}}>
                                    
                                    
                                </div>
                                    <div className="col-span-2 flex text-center bg-center bg-no-repeat w-[140px] h-[100px]" style={{backgroundImage: "url(" + fortnox_logo_1 + ")"}}></div>
                                    <div className="col-span-2 flex text-center bg-center bg-no-repeat w-[140px] h-[100px]" style={{backgroundImage: "url(" + swish_logo_1 + ")"}}></div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-8 flex justify-center shadow-lg my-2 ease-in-out hover:shadow-2xl lg:mx-24 md:4 text-center rounded-lg h-[300px] bg-contain bg-center bg-no-repeat" style={{backgroundImage: "url(" + Group_28 + ")"}}>
                <div className="grid grid-rwos-3">
                        <div className="row-span-1 py-4 text-bold font-semibold text-xl border-b h-[60px]">
                            Tjänster
                        </div>
                        <div className="row-span-2">
                            <div className="grid grid-cols-4 gap-x-4 mx-2">
                                
                                    <div className="col-span-2 w-auto h-[60px] " >
                                        <p className="flex mt-4 text-md font-medium text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Fri support mån-sön
                                        </p>
                                    </div>
                                    <div className="col-span-2 w-auto h-[60px]" >
                                        <p className="flex mt-4 text-md font-medium text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Anmälan till skatteverket
                                        </p>
                                    </div>
                                    <div className="col-span-2 w-auto h-[60px] " >
                                        <p className="flex mt-4 text-md font-medium text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Utbildning
                                        </p>
                                    </div>
                                    <div className="col-span-2 w-auto h-[60px] " >
                                        <p className="flex mt-4 text-md font-medium text-gray-500">
                                            <div className="mt-[3px]"><FcOk /></div> Programmering 
                                        </p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-red-700 mx-8 flex justify-center shadow-lg my-2 ease-in-out hover:shadow-2xl lg:mx-24 md:4 text-center rounded-lg h-[200px] ">hej</div> */}
               {/*  <div className="flex justify-center">
                    <InfoCard img={test_9} css="text-[#F01E82]" check={0} main_css={"w-[300px] h-[350px]"} title_2={"hehe"} description={"* w-[280px] h-[320px] md:w-[350px] md:h-[450px] *"}/>
                </div>
                <div className="flex justify-center">
                    <InfoCard img={test_9} css="text-[#F01E82]" check={0} main_css={"w-[300px] h-[350px]"} title_2={"hehe"} description={"* w-[280px] h-[320px] md:w-[350px] md:h-[450px] *"}/>
                </div>
                <div className="flex justify-center">
                    <InfoCard img={test_9} css="text-[#F01E82]" check={0} main_css={"w-[300px] h-[350px]"} title_2={"hehe"} description={"* w-[280px] h-[320px] md:w-[350px] md:h-[450px] *"}/>
                </div> */}
            </div>
            
        <div className="flex justify-center items-center text-center">
            <div className="md:block hidden relative bg-gray-100 w-[800px] h-[500px] rounded-lg mt-10 bg-cover" style={{backgroundImage: "url(" + bg_kontakt_card + ")"}}>
                    <div className="">
                    <div className="bg-gray-50 w-[600px] h-[370px] mt-[100px] mx-[100px] ease-in-out hover:shadow-2xl rounded-lg py-6">
                        <div className="grid grid-cols-4" /* style={{backgroundImage: "url(" + group_8 + ")"}} */>
                        <div className="absolute top-[-40px] left-0 z-10 w-[75px] h-[75px] mt-[100px] mx-[350px] shadow-lg ease-in-out hover:shadow-2xl rounded-full py-6 bg-cover boreder-2 border-black-" style={{backgroundImage: "url(" + Sigill_rosa + ")"}}></div>
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 text-2xl font-bold tracking-tight mt-4">
                                    VILL DU VETA MER? <br /> SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-8">
                                <h2 className="font-medium text-gray-700">
                                    Vi ringer up dig
                                </h2>
                            </div>
                            <div className="col-span-2 px-2 mx-2 w-full">
                                <input placeholder="NAMN/FÖRETAG" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            <div className="col-span-2 px-2 mx-2">    
                                <input placeholder="TELEFON" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            
                            <div className="col-span-4 px-2 mx-2 py-6">
                                <input placeholder="E-POST" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                                <div className="col-span-4 py-8 flex justify-center">
                                    <button className="flex justify-center bg-[#F01E82] text-white py-[8px] px-4 rounded-md w-[220px]" >Skicka</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    </div>
                </div>
            </div>


            {/* Mobile */}
            <div className="relative md:hidden flex justify-center px-2 bg-gray-50 mx-4 mt-8 ease-in-out hover:shadow-2xl rounded-lg py-6 bg-no-repeat bg-cover" style={{backgroundImage: "url(" + Group_16 + ")"}}>
                        <div className="grid grid-cols-4" /* style={{backgroundImage: "url(" + group_8 + ")"}} */>
                        {/* <div className="absolute top-[-40px] left-0 z-10 w-[75px] h-[75px] mt-[100px] mx-[350px] shadow-lg ease-in-out hover:shadow-2xl rounded-full py-6 bg-cover boreder-2 border-black-" style={{backgroundImage: "url(" + Sigill_rosa + ")"}}></div> */}
                            <div className="flex justify-center col-span-4 text-center">
                                <h2 className="flex justify-center text-gray-800 text-2xl font-bold tracking-tight mt-4">
                                    VILL DU VETA MER? <br /> SKICKA EN FÖRFRÅGAN IDAG.
                                </h2>
                            </div>
                            <div className="flex justify-center col-span-4 pb-8">
                                <h2 className="font-medium text-gray-700">
                                    Vi ringer up dig
                                </h2>
                            </div>
                            <div className="col-span-2 px-2 mx-2 w-full">
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> NAMN/FÖRETAG </label> */}
                                <input placeholder="NAMN/FÖRETAG" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            <div className="col-span-2 px-2 mx-2">    
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> TELEFON </label> */}
                                <input placeholder="TELEFON" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />
                            </div>
                            
                            <div className="col-span-4 px-2 mx-2 py-6">
                                {/* <label className="block text-sm font-medium text-gray-700 py-2"> E-POST </label> */}
                                <input placeholder="E-POST" className="w-full text-xs shadow-md focus:ring-gray-300 focus:border-gray-300 border-gray-100 rounded-md py-2 px-2" />

                                <div className="col-span-4 py-8 flex justify-center">
                                    <button className="flex justify-center bg-[#F01E82] text-white py-[8px] px-4 rounded-md w-[220px]" >Skicka</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
        </div>
        } />
    )
}
