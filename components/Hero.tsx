"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";

function Hero() {

  //Hero Scale
  const [Scale, setScale] = useState('2')

  //Animation Control
  
  const [Cloud1, setCloud1] = useState("opacity-0 top-[calc(-100vw*15*2/1440) .. sm:top-[calc(-100vw*15*1.5/1440) .. md:top-[calc(-100vw*15*1.2/1440) .. lg:top-[calc(-100vw*15/1440)]");
  const [Cloud2, setCloud2] = useState("opacity-0 top-[calc(100vw*80/1440)]");
  const [PurpleBuilding1, setPurpleBuilding1] = useState(
    "opacity-0 top-[calc(100vw*0.109*2)] .. sm:top-[calc(100vw*0.109*1.5)] .. md:top-[calc(100vw*0.109*1.2)] .. lg:top-[calc(100vw*0.109)]"
  );
  const [PurpleBuilding2, setPurpleBuilding2] = useState(
    "opacity-0 top-[calc(100vw*0.15583*2)] .. sm:top-[calc(100vw*0.15583*1.5)] .. md:top-[calc(100vw*0.15583*1.2)] .. lg:top-[calc(100vw*0.15583)]"
  );
  const [LBuilding1, setLBuilding1] = useState(
    "opacity-0 top-[calc(100vw*0.21*2)] .. sm:top-[calc(100vw*0.21*1.5)] .. md:top-[calc(100vw*0.21*1.2)] .. lg:top-[calc(100vw*0.21)]"
  );
  const [RoundedBuilding, setRoundedBuilding] = useState(
    "opacity-0 top-[calc(100vw*0.243*2) .. sm:top-[calc(100vw*0.243*1.5) .. md:top-[calc(100vw*0.243*1.2) .. lg:top-[calc(100vw*0.243)]"
  );
  const [Round1, setRound1] = useState("opacity-0 top-[calc(-100vw*214*2/1440)] .. sm:top-[calc(-100vw*214*1.5/1440)] .. md:top-[calc(-100vw*214*1.2/1440)] .. lg:top-[calc(-100vw*214/1440)]");
  const [Listrik6, setListrik6] = useState(
    "opacity-0 top-[calc(100vw*164*2/1440) .. sm:top-[calc(100vw*164*1.5/1440) .. md:top-[calc(100vw*164*1.2/1440) .. lg:top-[calc(100vw*164/1440)]"
  );
  const [LongTallBuilding1, setLongTallBuilding1] = useState(
    "opacity-0 top-[calc(100vw*68*2/1440) .. sm:top-[calc(100vw*68*1.5/1440) .. md:top-[calc(100vw*68*1.2/1440) .. lg:top-[calc(100vw*68/1440)]"
  );
  const [Wifi, setWifi] = useState(
    "opacity-0 top-[calc(100vw*(-43)*2/1440) .. sm:top-[calc(100vw*(-43)*1.5/1440) .. sm:top-[calc(100vw*(-43)*1.2/1440) .. sm:top-[calc(100vw*(-43)/1440)]"
  );
  const [Listrik1, setListrik1] = useState(
    "opacity-0 top-[calc(100vw*296.87*2/1440)] .. sm:top-[calc(100vw*296.87*1.5/1440)] .. md:top-[calc(100vw*296.87*1.5/1440)] .. lg:top-[calc(100vw*296.87/1440)]"
  );
  const [Listrik2, setListrik2] = useState(
    "opacity-0 top-[calc(100vw*248.15*2/1440)] .. sm:top-[calc(100vw*248.15*1.5/1440)] .. md:top-[calc(100vw*248.15*1.2/1440)] .. lg:top-[calc(100vw*248.15/1440)]"
  );
  const [LongTallBuilding2, setLongTallBuilding2] = useState(
    "opacity-0 top-[calc(100vw*144*2/1440)] .. sm:top-[calc(100vw*144*1.5/1440)] .. md:top-[calc(100vw*144*1.2/1440)] .. lg:top-[calc(100vw*144/1440)]"
  );
  const [Lightning, setLightning] = useState(
    "opacity-0  top-[calc(100vw*28*2/1440)] .. sm:top-[calc(100vw*28*1.5/1440)] .. md:top-[calc(100vw*28*1.4/1440)] .. lg:top-[calc(100vw*28)/1440)]"
  );
  const [Listrik5, setListrik5] = useState(
    "opacity-0 top-[calc(100vw*368*2/1440)] .. sm:top-[calc(100vw*368*1.5/1440)] .. md:top-[calc(100vw*368*1.2/1440)] .. lg:top-[calc(100vw*368/1440)]"
  );
  const [Round2, setRound2] = useState("opacity-0 top-[calc(-100vw*83*2/1440)] .. sm:top-[calc(-100vw*83*1.5/1440)] .. md:top-[calc(-100vw*83*1.2/1440)] .. lg:top-[calc(-100vw*83/1440)]");
  const [PurpleBuilding3, setPurpleBuilding3] = useState(
    "opacity-0 top-[calc(100vw*463*2/1440)] .. sm:top-[calc(100vw*463*1.5/1440)] .. md:top-[calc(100vw*463*1.2/1440)] .. lg:top-[calc(100vw*463/1440)]"
  );
  const [PurpleBuilding4, setPurpleBuilding4] = useState(
    "opacity-0 top-[calc(100vw*526*2/1440)] .. sm:top-[calc(100vw*526*1.5/1440)] .. md:top-[calc(100vw*526*1.2/1440)] .. lg:top-[calc(100vw*526/1440)]"
  );
  const [PurpleBuilding5, setPurpleBuilding5] = useState(
    "opacity-0 top-[calc(100vw*519*2/1440)] .. sm:top-[calc(100vw*519*1.5/1440)] .. md:top-[calc(100vw*519*1.2/1440)] .. lg:top-[calc(100vw*519/1440)]"
  );
  const [PurpleBuilding6, setPurpleBuilding6] = useState(
    "opacity-0 top-[calc(100vw*585*2/1440)] .. sm:top-[calc(100vw*585*1.5/1440)] .. md:top-[calc(100vw*585*1.2/1440)] .. lg:top-[calc(100vw*585/1440)]"
  );
  const [Listrik3, setListrik3] = useState(
    "opacity-0 top-[calc(100vw*691*2/1440)] .. sm:top-[calc(100vw*691*1.5/1440)] .. md:top-[calc(100vw*691*1.2/1440)] .. lg:top-[calc(100vw*691/1440)]"
  );
  const [Listrik4, setListrik4] = useState(
    "opacity-0 top-[calc(100vw*625*2/1440)] .. sm:top-[calc(100vw*625*1.5/1440)] .. md:top-[calc(100vw*625*1.2/1440)] .. lg:top-[calc(100vw*625/1440)]"
  );
  const [Listrik7, setListrik7] = useState(
    "opacity-0 top-[calc(100vw*290*2/1440)] .. sm:top-[calc(100vw*290*1.5/1440)] .. md:top-[calc(100vw*290*1.2/1440)] .. lg:top-[calc(100vw*290/1440)]"
  );
  const [Listrik8, setListrik8] = useState(
    "opacity-0 top-[calc(100vw*374*2/1440)] .. sm:top-[calc(100vw*374*1.5/1440)] .. md:top-[calc(100vw*374*1.2/1440)] .. lg:top-[calc(100vw*374/1440)]"
  );
  const [IEEEHolder, setIEEEHolder] = useState("opacity-0");
  const [IEEEText1, setIEEEText1] = useState(
    "opacity-0 top-[calc(100vw*328.41*2/1440)] .. sm:top-[calc(100vw*328.41*1.5/1440)] .. md:top-[calc(100vw*328.41*1.2/1440)] .. lg:top-[calc(100vw*328.41/1440)]"
  );
  const [IEEEText2, setIEEEText2] = useState('opacity-0 top-[calc(100vw*275.31*2/1440)] .. sm:top-[calc(100vw*275.31*1.5/1440)] .. md:top-[calc(100vw*275.31*1.2/1440)] .. lg:top-[calc(100vw*275.31/1440)]');
  const [IEEEText3, setIEEEText3] = useState('opacity-0 top-[calc(100vw*316.09*2/1440)] .. sm:top-[calc(100vw*316.09*1.5/1440)] .. md:top-[calc(100vw*316.09*1.2/1440)] .. lg:top-[calc(100vw*316.09/1440)]');
  const [IEEEText4, setIEEEText4] = useState('opacity-0 top-[calc(100vw*257*2/1440)] .. sm:top-[calc(100vw*257*1.5/1440)] .. md:top-[calc(100vw*257*1.2/1440)] .. lg:top-[calc(100vw*257/1440)]');
  const [IEEETextSpeed, setIEEETextSpeed] = useState('duration-300');
  const [Welcome, setWelcome] = useState('opacity-0  top-[calc(100vw*520*2/1440)] .. sm:top-[calc(100vw*520*1.5/1440)] .. md:top-[calc(100vw*520*1.2/1440)] .. lg:top-[calc(100vw*520/1440)]');
  const [Subtitle, setSubtitle] = useState('opacity-0 top-[calc(100vw*617*2/1440)] .. sm:top-[calc(100vw*617*1.5/1440)] .. md:top-[calc(100vw*617*1.2/1440)] .. lg:top-[calc(100vw*617/1440)]');
  const [AboutButton, setAboutButton] = useState('opacity-0 top-[calc(100vw*687*2/1440)] .. sm:top-[calc(100vw*687*1.5/1440)] .. md:top-[calc(100vw*687*1.2/1440)] .. lg:top-[calc(100vw*687/1440)]');

  //Electric Glow
  const [ElectricGlow1, setElectricGlow1] = useState('');
  const [ElectricGlow2, setElectricGlow2] = useState('');
  const [ElectricGlow3, setElectricGlow3] = useState('');
  const [ElectricGlow4, setElectricGlow4] = useState('');
  const [ElectricGlow5, setElectricGlow5] = useState('');
  const [ElectricGlow6, setElectricGlow6] = useState('');
  const [ElectricGlow7, setElectricGlow7] = useState('');

  // Transition Duration Control
  const [RegularTransition, setRegularTransition] = useState('ease-in duration-300'); 
  const [LongTransition, setLongTransition] = useState('ease-in duration-1000'); 

  //Animation Runner
  useEffect(() => {
    const time = 8;

    setTimeout(function () {
      setLBuilding1("opacity-100 top-[calc(100vw*0.2*2)] .. sm:top-[calc(100vw*0.2*1.5)] .. md:top-[calc(100vw*0.2*1.2)] .. lg:top-[calc(100vw*0.2)]");
    }, 10 * time);

    setTimeout(function () {
      setRoundedBuilding("opacity-100 top-[calc(100vw*0.233*2)] .. sm:top-[calc(100vw*0.233*1.5)] .. md:top-[calc(100vw*0.233*1.2)] .. lg:top-[calc(100vw*0.233)]");
    }, 30 * time);

    setTimeout(function () {
      setPurpleBuilding2("opacity-100 top-[calc(100vw*0.14583*2)] .. sm:top-[calc(100vw*0.14583*1.5)] .. md:top-[calc(100vw*0.14583*1.2)] .. lg:top-[calc(100vw*0.14583)]");
    }, 50 * time);

    setTimeout(function () {
      setPurpleBuilding1("opacity-100 top-[calc(100vw*0.099*2)] .. sm:top-[calc(100vw*0.099*1.5)] .. md:top-[calc(100vw*0.099*1.2)] .. lg:top-[calc(100vw*0.099)]");
    }, 70 * time);

    setTimeout(function () {
      setListrik8("opacity-100 top-[calc(100vw*367*2/1440)] .. sm:top-[calc(100vw*367*1.5/1440)] .. md:top-[calc(100vw*367*1.2/1440)] .. lg:top-[calc(100vw*367/1440)]");
    }, 80 * time);

    setTimeout(function () {
      setListrik7("opacity-100 top-[calc(100vw*283*2/1440)] .. sm:top-[calc(100vw*283*1.5/1440)] .. md:top-[calc(100vw*283*1.2/1440)] .. lg:top-[calc(100vw*283/1440)]");
    }, 100 * time);

    setTimeout(function () {
      setListrik6("opacity-100 top-[calc(100vw*157*2/1440)] .. sm:top-[calc(100vw*157*1.5/1440)] .. md:top-[calc(100vw*157*1.2/1440)] .. lg:top-[calc(100vw*157/1440)]");
    }, 100 * time);

    setTimeout(function () {
      setListrik2("opacity-100 top-[calc(100vw*238.15*2/1440)] .. sm:top-[calc(100vw*238.15*1.5/1440)] .. md:top-[calc(100vw*238.15*1.2/1440)] .. lg:top-[calc(100vw*238.15/1440)]");
    }, 120 * time);

    setTimeout(function () {
      setListrik1("opacity-100 top-[calc(100vw*286.87*2/1440)] .. sm:top-[calc(100vw*286.87*1.5/1440)] .. md:top-[calc(100vw*286.871.2/1440)] .. lg:top-[calc(100vw*286.87/1440)]");
    }, 140 * time);

    setTimeout(function () {
      setListrik5("opacity-100 top-[calc(100vw*361*2/1440)] .. sm:top-[calc(100vw*361*1.5/1440)] .. md:top-[calc(100vw*361*1.2/1440)] .. lg:top-[calc(100vw*361/1440)]");
    }, 160 * time);

    setTimeout(function () {
      setRound1("opacity-100 top-[calc(-100vw*221*2/1440)] .. sm:top-[calc(-100vw*221*1.5/1440)] .. md:top-[calc(-100vw*221*1.2/1440)] .. lg:top-[calc(-100vw*221/1440)]");
    }, 90 * time);

    setTimeout(function () {
      setCloud2("opacity-100 top-[calc(100vw*73*2/1440)] .. sm:top-[calc(100vw*73*1.5/1440)] .. md:top-[calc(100vw*73*1.2/1440)] .. lg:top-[calc(100vw*73/1440)]");
    }, 120 * time);

    setTimeout(function () {
      setCloud1("opacity-100 top-[calc(-100vw*22*2/1440)] .. sm:top-[calc(-100vw*22*1.5/1440)] .. md:top-[calc(-100vw*22*1.2/1440)] .. lg:top-[calc(-100vw*22/1440)]");
    }, 140 * time);

    setTimeout(function () {
      setLongTallBuilding1("opacity-100 top-[calc(100vw*61*2/1440)] .. sm:top-[calc(100vw*61*1.5/1440)] .. md:top-[calc(100vw*61*1.2/1440)] .. lg:top-[calc(100vw*61/1440)]");
    }, 110 * time);

    setTimeout(function () {
      setWifi("opacity-100  top-[calc(100vw*(-50)*2/1440)] .. sm:top-[calc(100vw*(-50)*1.5/1440)] .. md:top-[calc(100vw*(-50)*1.2/1440)] .. lg:top-[calc(100vw*(-50)/1440)]");
    }, 110 * time);

    setTimeout(function () {
      setLongTallBuilding2("opacity-100 top-[calc(100vw*137*2/1440)] .. sm:top-[calc(100vw*137*1.5/1440)] .. md:top-[calc(100vw*137*1.2/1440)] .. lg:top-[calc(100vw*137/1440)]");
    }, 130 * time);

    setTimeout(function () {
      setLightning("opacity-100  top-[calc(100vw*21*2)/1440)] .. sm:top-[calc(100vw*21*1.5)/1440)] .. md:top-[calc(100vw*21*1.2)/1440)] .. lg:top-[calc(100vw*21)/1440)]");
    }, 130 * time);

    setTimeout(function () {
      setRound2("opacity-100 top-[calc(-100vw*90*2/1440)] .. sm:top-[calc(-100vw*90*1.5/1440)] .. md:top-[calc(-100vw*90*1.2/1440)] .. lg:top-[calc(-100vw*90/1440)]");
    }, 150 * time);

    setTimeout(function () {
      setPurpleBuilding3("opacity-100 top-[calc(100vw*456*2/1440)] .. sm:top-[calc(100vw*456*1.5/1440)] .. md:top-[calc(100vw*456*1.2/1440)] .. lg:top-[calc(100vw*456/1440)]");
    }, 170 * time);

    setTimeout(function () {
      setPurpleBuilding4("opacity-100 top-[calc(100vw*519*2/1440)] .. sm:top-[calc(100vw*519*1.5/1440)] .. md:top-[calc(100vw*519*1.2/1440)] .. lg:top-[calc(100vw*519/1440)] ");
    }, 190 * time);

    setTimeout(function () {
      setPurpleBuilding5("opacity-100 top-[calc(100vw*512*2/1440)] .. sm:top-[calc(100vw*512*1.5/1440)] .. md:top-[calc(100vw*512*1.2/1440)] .. lg:top-[calc(100vw*512/1440)]");
    }, 210 * time);

    setTimeout(function () {
      setPurpleBuilding6("opacity-100 top-[calc(100vw*578*2/1440)] .. sm:top-[calc(100vw*578*1.5/1440)] .. md:top-[calc(100vw*578*1.2/1440)] .. lg:top-[calc(100vw*578/1440)]");
    }, 230 * time);

    setTimeout(function () {
      setListrik4("opacity-100 top-[calc(100vw*618*2/1440)] .. sm:top-[calc(100vw*618*1.5/1440)] .. md:top-[calc(100vw*618*1.2/1440)] .. lg:top-[calc(100vw*618/1440)]");
    }, 250 * time);

    setTimeout(function () {
      setListrik3("opacity-100 top-[calc(100vw*684*2/1440)] .. sm:top-[calc(100vw*684*1.5/1440)] .. md:top-[calc(100vw*684*1.2/1440)] .. lg:top-[calc(100vw*684/1440)]");
    }, 270 * time);

    setTimeout(function () {
      setIEEEText1("opacity-100 top-[calc(100vw*321.41*2/1440)] .. sm:top-[calc(100vw*321.41*1.5/1440)] .. md:top-[calc(100vw*321.41*1.2/1440)] .. lg:top-[calc(100vw*321.41/1440)]");
    }, 290 * time);

    setTimeout(function () {
      setIEEEText2("opacity-100 top-[calc(100vw*265.31*2/1440)] .. sm:top-[calc(100vw*265.31*1.5/1440)] .. md:top-[calc(100vw*265.31*1.2/1440)] .. lg:top-[calc(100vw*265.31/1440)]");
    }, 310 * time);

    setTimeout(function () {
      setIEEEText3("opacity-100 top-[calc(100vw*306.09*2/1440)] .. sm:top-[calc(100vw*306.09*1.5/1440)] .. md:top-[calc(100vw*306.09*1.2/1440)] .. lg:top-[calc(100vw*306.09/1440)]");
    }, 330 * time);

    setTimeout(function () {
      setIEEEText4("opacity-100 top-[calc(100vw*253*2/1440)] .. sm:top-[calc(100vw*253*1.5/1440)] .. md:top-[calc(100vw*253*1.2/1440)] .. lg:top-[calc(100vw*253/1440)]");
    }, 350 * time);

    setTimeout(function () {
      setWelcome("opacity-100 top-[calc(100vw*513*2/1440)] .. sm:top-[calc(100vw*513*1.5/1440)] .. md:top-[calc(100vw*513*1.2/1440)] .. lg:top-[calc(100vw*513/1440)]");
    }, 370 * time);

    setTimeout(function () {
      setSubtitle("opacity-100 top-[calc(100vw*610*2/1440)] .. sm:top-[calc(100vw*610*1.5/1440)] .. md:top-[calc(100vw*610*1.2/1440)] .. lg:top-[calc(100vw*610/1440)]");
    }, 390 * time);

    setTimeout(function () {
      setAboutButton("opacity-100 top-[calc(100vw*680*2/1440)] .. sm:top-[calc(100vw*680*1.5/1440)] .. md:top-[calc(100vw*680*1.2/1440)] .. lg:top-[calc(100vw*680/1440)]");
    }, 410 * time);

    // Remove All Transition
    setTimeout(function () {
      setRegularTransition("");
      setLongTransition("")
    }, 710 * time);

    setTimeout(function () {
      setIEEEHolder("opacity-100");
    }, 70 * time);

    // IEEE Text
    
    setTimeout(function(){
      setIEEEText1('opacity-100 animate-IEEEText1Def sm:animate-IEEEText1sm md:animate-IEEEText1md lg:animate-IEEEText1lg')
      setTimeout(function () {
        setIEEEText2('opacity-100 animate-IEEEText2Def sm:animate-IEEEText2sm md:animate-IEEEText2md lg:animate-IEEEText2lg');
      }, 300);
      setTimeout(function () {
        setIEEEText3('opacity-100 animate-IEEEText3Def sm:animate-IEEEText3sm md:animate-IEEEText3md lg:animate-IEEEText3lg');
      }, 600);
      setTimeout(function () {
        setIEEEText4('opacity-100 animate-IEEEText4Def sm:animate-IEEEText4sm md:animate-IEEEText4md lg:animate-IEEEText4lg');
      }, 900);
    }, 400 * time);

    //Glow Effects
    setTimeout(function () {
        setTimeout(function () {
          setElectricGlow1('animate-glow')
        }, 0);
        setTimeout(function () {
          setElectricGlow2('animate-glow')
        }, 500);
        setTimeout(function () {
          setElectricGlow3('animate-glow')
        }, 1000);
        setTimeout(function () {
          setElectricGlow4('animate-glow')
        }, 1500);
        setTimeout(function () {
          setElectricGlow5('animate-glow')
        }, 2000);
        setTimeout(function () {
          setElectricGlow6('animate-glow')
        }, 2500);
        setTimeout(function () {
          setElectricGlow7('animate-glow')
        }, 3000);
    }, 300 * time);

  }, []);

  return (
    <main className="Hero relative w-[100%] h-[calc((100vw*11*2/16))] sm:h-[calc((100vw*11*1.5/16))] md:h-[calc((100vw*11*1.2/16))]  lg:h-[calc((100vw*11/16))] overflow-hidden">
      <div className={`HeroContent relative w-[calc(100%*2)] h-[calc((100vw*11*2)/16)] left-[calc((100vw*(-3))/16)] .. sm:left-[calc((100vw*0)/16)] sm:w-[calc(100%*1.5)] sm:h-[calc((100vw*11*1.5)/16)] .. md:w-[calc(100%*1.2)] md:h-[calc((100vw*11*1.2)/16)] .. lg:left-0 lg:w-[calc(100%)] lg:h-[calc((100vw*11)/16)] overflow-hidden`}>
        <div className="HeroShade1 absolute w-[calc(100vw*0.79*2)] h-[calc(100vw*0.706*2)]  top-[calc(-100vw*0.102*2)] left-[calc(-100vw*0.178*2)] .. sm:w-[calc(100vw*0.79*1.5)] sm:h-[calc(100vw*0.706*1.5)]  sm:top-[calc(-100vw*0.102*1.5)] sm:left-[calc(-100vw*0.178*1.5)] .. md:w-[calc(100vw*0.79*1.2)] md:h-[calc(100vw*0.706*1.2)]  md:top-[calc(-100vw*0.102*1.2)] md:left-[calc(-100vw*0.178*1.2)] .. lg:w-[calc(100vw*0.79)] lg:h-[calc(100vw*0.706)]  lg:top-[calc(-100vw*0.102)] lg:left-[calc(-100vw*0.178)] bg-gradient-radial from-hero-shade-start  to-hero-shade-end to-60% animate-heroShadeIn1"></div>
        <div className="HeroShade2 absolute w-[calc(100vw*0.79*2)] h-[calc(100vw*0.706*2)]  top-[calc(100vw*0.0076*2)] left-[calc(100vw*0.45694*2)] .. sm:w-[calc(100vw*0.79*1.5)] sm:h-[calc(100vw*0.706*1.5)]  sm:top-[calc(100vw*0.0076*1.5)] sm:left-[calc(100vw*0.45694*1.5)] .. md:w-[calc(100vw*0.79*1.2)] md:h-[calc(100vw*0.706*1.2)]  md:top-[calc(100vw*0.0076*1.2)] md:left-[calc(100vw*0.45694*1.2)] .. lg:w-[calc(100vw*0.79)] lg:h-[calc(100vw*0.706)] lg:top-[calc(100vw*0.0076)] lg:left-[calc(100vw*0.45694)] bg-gradient-radial from-hero-shade-start  to-hero-shade-end to-60% animate-heroShadeIn2"></div>
        <div className="HeroShade3 absolute w-[calc(100vw*0.79*2)] h-[calc(100vw*0.706*2)] left-[calc(100vw*121*2/1440)] .. sm:w-[calc(100vw*0.79*1.5)] sm:h-[calc(100vw*0.706*1.5)] sm:left-[calc(100vw*121*1.5/1440)] .. md:w-[calc(100vw*0.79*1.2)] md:h-[calc(100vw*0.706*1.2)] md:left-[calc(100vw*121*1.2/1440)] .. lg:w-[calc(100vw*0.79)] lg:h-[calc(100vw*0.706)] top-[0] lg:left-[calc(100vw*121/1440)] bg-gradient-radial from-hero-shade-start  to-hero-shade-end to-60% animate-heroShadeIn3"></div>
        <Image
          src="/Hero/Grid.svg"
          alt="Grid Hero"
          className={`absolute w-[calc(100vw*1.18*2)] h-[calc(100vw*0.63*2)] left-[calc(0)] top-[calc(-100vw*5*2/144)] .. sm:w-[calc(100vw*1.18*1.5)] sm:h-[calc(100vw*0.63*1.5)] sm:left-[calc(0)] sm:top-[calc(-100vw*5*1.5/144)] .. md:w-[calc(100vw*1.18*1.2)] md:h-[calc(100vw*0.63*1.2)] md:left-[calc(0)] md:top-[calc(-100vw*5*1.2/144)] .. lg:w-[calc(100vw*1.18)] lg:h-[calc(100vw*0.63)] lg:left-[calc(0)] lg:top-[calc(-100vw*5/144)] animate-gridIn`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Cloud.svg"
          alt="Cloud 1"
          className={`absolute w-[calc(100vw*200*2/1440)] h-[calc(100vw*190*2/1440)] left-[calc(100vw*213*2/1440)] .. sm:w-[calc(100vw*200*1.5/1440)] sm:h-[calc(100vw*190*1.5/1440)] sm:left-[calc(100vw*213*1.5/1440)] .. md:w-[calc(100vw*200*1.2/1440)] md:h-[calc(100vw*190*1.2/1440)] md:left-[calc(100vw*213*1.2/1440)] .. lg:w-[calc(100vw*200/1440)] lg:h-[calc(100vw*190/1440)] lg:left-[calc(100vw*213/1440)] ${RegularTransition} ${Cloud1}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Cloud.svg"
          alt="Cloud 2"
          className={`absolute w-[calc(100vw*200*2/1440)] h-[calc(100vw*190*2/1440)] left-[calc(100vw*36*2/1440)] .. sm:w-[calc(100vw*200*1.5/1440)] sm:h-[calc(100vw*190*1.5/1440)] sm:left-[calc(100vw*36*1.5/1440)] .. md:w-[calc(100vw*200*1.2/1440)] md:h-[calc(100vw*190*1.2/1440)] md:left-[calc(100vw*36*1.2/1440)] .. lg:w-[calc(100vw*200/1440)] lg:h-[calc(100vw*190/1440)] lg:left-[calc(100vw*36/1440)] ${RegularTransition} ${Cloud2}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Purple Building.svg"
          alt="Purple Building 1"
          className={`absolute w-[calc(100vw*0.11042*2)] h-[calc(100vw*0.15486*2)] left-[calc(100vw*0.262*2)] .. sm:w-[calc(100vw*0.11042*1.5)] sm:h-[calc(100vw*0.15486*1.5)] sm:left-[calc(100vw*0.262*1.5)] .. md:w-[calc(100vw*0.11042*1.2)] md:h-[calc(100vw*0.15486*1.2)] md:left-[calc(100vw*0.262*1.2)] .. lg:w-[calc(100vw*0.11042)] lg:h-[calc(100vw*0.15486)] lg:left-[calc(100vw*0.262)] ${RegularTransition} ${PurpleBuilding1}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Purple Building.svg"
          alt="Purple Building 2"
          className={`absolute w-[calc(100vw*0.11042*2)] h-[calc(100vw*0.15486*2)] left-[calc(100vw*0.17222*2)] .. sm:w-[calc(100vw*0.11042*1.5)] sm:h-[calc(100vw*0.15486*1.5)] sm:left-[calc(100vw*0.17222*1.5)] .. md:w-[calc(100vw*0.11042*1.2)] md:h-[calc(100vw*0.15486*1.2)] md:left-[calc(100vw*0.17222*1.2)] .. lg:w-[calc(100vw*0.11042)] lg:h-[calc(100vw*0.15486)] lg:left-[calc(100vw*0.17222)] ${RegularTransition} ${PurpleBuilding2}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/L Building 1.svg"
          alt="L Building 1"
          className={`absolute w-[calc(100vw*0.104*2)] h-[calc(100vw*0.198*2)] left-[calc(100vw*0.021*2)] .. sm:w-[calc(100vw*0.104*1.5)] sm:h-[calc(100vw*0.198*1.5)] sm:left-[calc(100vw*0.021*1.5)] .. md:w-[calc(100vw*0.104*1.2)] md:h-[calc(100vw*0.198*1.2)] md:left-[calc(100vw*0.021*1.2)] .. lg:w-[calc(100vw*0.104)] lg:h-[calc(100vw*0.198)] lg:left-[calc(100vw*0.021)] ${RegularTransition} ${LBuilding1}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Rounded Buildin.svg"
          alt="Rounded Building"
          className={`absolute w-[calc(100vw*2*2/15)] h-[calc(100vw*0.147*2)] left-[calc(100vw*0.105*2)] .. sm:w-[calc(100vw*2*1.5/15)] sm:h-[calc(100vw*0.147*1.5)] sm:left-[calc(100vw*0.105*1.5)] .. md:w-[calc(100vw*2*1.2/15)] md:h-[calc(100vw*0.147*1.2)] md:left-[calc(100vw*0.105*1.2)] .. lg:w-[calc(100vw*2/15)] lg:h-[calc(100vw*0.147)] lg:left-[calc(100vw*0.105)] ${RegularTransition} ${RoundedBuilding}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Round.svg"
          alt="Round 1"
          className={`absolute w-[calc(100vw*134*2/1440)] h-[calc(100vw*469*2/1440)] left-[calc(100vw*572*2/1440)] .. sm:w-[calc(100vw*134*1.5/1440)] sm:h-[calc(100vw*469*1.5/1440)] sm:left-[calc(100vw*572*1.5/1440)] .. md:w-[calc(100vw*134*1.2/1440)] md:h-[calc(100vw*469*1.2/1440)] md:left-[calc(100vw*572*1.2/1440)] .. lg:w-[calc(100vw*134/1440)] lg:h-[calc(100vw*469/1440)] lg:left-[calc(100vw*572/1440)] ${RegularTransition} ${Round1}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Listrik.svg"
          alt="Listrik 6"
          className={`absolute w-[calc(100vw*83.52*2/1440)] h-[calc(100vw*116.23*2/1440)] left-[calc(100vw*722*2/1440)] .. sm:w-[calc(100vw*83.52*1.5/1440)] sm:h-[calc(100vw*116.23*1.5/1440)] sm:left-[calc(100vw*722*1.5/1440)] .. md:w-[calc(100vw*83.52*1.2/1440)] md:h-[calc(100vw*116.23*1.2/1440)] md:left-[calc(100vw*722*1.2/1440)] .. lg:w-[calc(100vw*83.52/1440)] lg:h-[calc(100vw*116.23/1440)] lg:left-[calc(100vw*722/1440)] ${RegularTransition} ${Listrik6} ${ElectricGlow3}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Long Tall Building.svg"
          alt="Long Tall Building 1"
          className={`absolute w-[calc(100vw*192*2/1440)] h-[calc(100vw*319*2/1440)] left-[calc(100vw*788*2/1440)] .. sm:w-[calc(100vw*192*1.5/1440)] sm:h-[calc(100vw*319*1.5/1440)] sm:left-[calc(100vw*788*1.5/1440)] .. md:w-[calc(100vw*192*1.2/1440)] md:h-[calc(100vw*319*1.2/1440)] md:left-[calc(100vw*788*1.2/1440)] .. lg:w-[calc(100vw*192/1440)] lg:h-[calc(100vw*319/1440)] lg:left-[calc(100vw*788/1440)] ${RegularTransition} ${LongTallBuilding1}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Wifi.svg"
          alt="Wifi"
          className={`absolute w-[calc(100vw*194*2/1440)] h-[calc(100vw*187*2/1440)] left-[calc(100vw*775*2/1440)] .. sm:w-[calc(100vw*194*1.5/1440)] sm:h-[calc(100vw*187*1.5/1440)] sm:left-[calc(100vw*775*1.5/1440)] .. md:w-[calc(100vw*194*1.2/1440)] md:h-[calc(100vw*187*1.2/1440)] md:left-[calc(100vw*775*1.2/1440)] .. lg:w-[calc(100vw*194/1440)] lg:h-[calc(100vw*187/1440)] lg:left-[calc(100vw*775/1440)] ${RegularTransition} ${Wifi}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Listrik.svg"
          alt="Listrik 1"
          className={`absolute w-[calc(100vw*83.52*2/1440)] h-[calc(100vw*116.23*2/1440)] left-[calc(100vw*900.98*2/1440)] .. sm:w-[calc(100vw*83.52*1.5/1440)] sm:h-[calc(100vw*116.23*1.5/1440)] sm:left-[calc(100vw*900.98*1.5/1440)] .. md:w-[calc(100vw*83.52*1.2/1440)] md:h-[calc(100vw*116.23*1.2/1440)] md:left-[calc(100vw*900.98*1.2/1440)] .. lg:w-[calc(100vw*83.52/1440)] lg:h-[calc(100vw*116.23/1440)] lg:left-[calc(100vw*900.98/1440)] ${RegularTransition} ${Listrik1} ${ElectricGlow4}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Listrik.svg"
          alt="Listrik 2"
          className={`absolute w-[calc(100vw*83.52*2/1440)] h-[calc(100vw*116.23*2/1440)] left-[calc(100vw*900.98*2/1440)] .. sm:w-[calc(100vw*83.52*1.5/1440)] sm:h-[calc(100vw*116.23*1.5/1440)] sm:left-[calc(100vw*900.98*1.5/1440)] .. md:w-[calc(100vw*83.52*1.2/1440)] md:h-[calc(100vw*116.23*1.2/1440)] md:left-[calc(100vw*900.98*1.2/1440)] .. lg:w-[calc(100vw*83.52/1440)] lg:h-[calc(100vw*116.23/1440)] lg:left-[calc(100vw*900.98/1440)] ${RegularTransition} ${Listrik2} ${ElectricGlow4}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Long Tall Building.svg"
          alt="Long Tall Building 2"
          className={`absolute w-[calc(100vw*193*2/1440)] h-[calc(100vw*319*2/1440)] left-[calc(100vw*949*2/1440)] .. sm:w-[calc(100vw*193*1.5/1440)] sm:h-[calc(100vw*319*1.5/1440)] sm:left-[calc(100vw*949*1.5/1440)] .. md:w-[calc(100vw*193*1.2/1440)] md:h-[calc(100vw*319*1.2/1440)] md:left-[calc(100vw*949*1.2/1440)] .. lg:w-[calc(100vw*193/1440)] lg:h-[calc(100vw*319/1440)] lg:left-[calc(100vw*949/1440)] ${RegularTransition} ${LongTallBuilding2}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Lightning.svg"
          alt="Lightning"
          className={`absolute w-[calc(100vw*140*2/1440)] h-[calc(100vw*189*2/1440)] left-[calc(100vw*975*2/1440)] .. sm:w-[calc(100vw*140*1.5/1440)] sm:h-[calc(100vw*189*1.5/1440)] sm:left-[calc(100vw*975*1.5/1440)] .. md:w-[calc(100vw*140*1.2/1440)] md:h-[calc(100vw*189*1.2/1440)] md:left-[calc(100vw*975*1.2/1440)] .. lg:w-[calc(100vw*140/1440)] lg:h-[calc(100vw*189/1440)] lg:left-[calc(100vw*975/1440)] ${RegularTransition} ${Lightning} animate-flicker`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Listrik.svg"
          alt="Listrik 5"
          className={`absolute w-[calc(100vw*83.52*2/1440)] h-[calc(100vw*116.23*2/1440)] left-[calc(100vw*1091*2/1440)] .. sm:w-[calc(100vw*83.52*1.5/1440)] sm:h-[calc(100vw*116.23*1.5/1440)] sm:left-[calc(100vw*1091*1.5/1440)] .. md:w-[calc(100vw*83.52*1.2/1440)] md:h-[calc(100vw*116.23*1.2/1440)] md:left-[calc(100vw*1.2*1091/1440)] .. lg:w-[calc(100vw*83.52/1440)] lg:h-[calc(100vw*116.23/1440)] lg:left-[calc(100vw*1091/1440)]  ${RegularTransition} ${Listrik5} ${ElectricGlow5}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Round Long.svg"
          alt="Round 2"
          className={`absolute w-[calc(100vw*159*2/1440)] h-[calc(100vw*741*2/1440)] left-[calc(100vw*1192*2/1440)] .. sm:w-[calc(100vw*159*1.5/1440)] sm:h-[calc(100vw*741*1.5/1440)] sm:left-[calc(100vw*1192*1.5/1440)] .. md:w-[calc(100vw*159*1.2/1440)] md:h-[calc(100vw*741*1.2/1440)] md:left-[calc(100vw*1192*1.2/1440)] .. lg:w-[calc(100vw*159/1440)] lg:h-[calc(100vw*741/1440)] lg:left-[calc(100vw*1192/1440)] ${RegularTransition} ${Round2}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Purple Building.svg"
          alt="Purple Building 3"
          className={`absolute w-[calc(100vw*153*2/1440)] h-[calc(100vw*216*2/1440)] left-[calc(100vw*1031*2/1440)] .. sm:w-[calc(100vw*153*1.5/1440)] sm:h-[calc(100vw*216*1.5/1440)] sm:left-[calc(100vw*1031*1.5/1440)] .. md:w-[calc(100vw*153*1.2/1440)] md:h-[calc(100vw*216*1.2/1440)] md:left-[calc(100vw*1031*1.2/1440)] .. lg:w-[calc(100vw*153/1440)] lg:h-[calc(100vw*216/1440)] lg:left-[calc(100vw*1031/1440)] ${RegularTransition} ${PurpleBuilding3}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Purple Building.svg"
          alt="Purple Building 4"
          className={`absolute w-[calc(100vw*153*2/1440)] h-[calc(100vw*216*2/1440)] left-[calc(100vw*1145*2/1440)] .. sm:w-[calc(100vw*153*1.5/1440)] sm:h-[calc(100vw*216*1.5/1440)] sm:left-[calc(100vw*1145*1.5/1440)] .. md:w-[calc(100vw*153*1.2/1440)] md:h-[calc(100vw*216*1.2/1440)] md:left-[calc(100vw*1145*1.2/1440)] .. lg:w-[calc(100vw*153/1440)] lg:h-[calc(100vw*216/1440)] lg:left-[calc(100vw*1145/1440)] ${RegularTransition} ${PurpleBuilding4}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Purple Building.svg"
          alt="Purple Building 5"
          className={`absolute w-[calc(100vw*153*2/1440)] h-[calc(100vw*216*2/1440)] left-[calc(100vw*915*2/1440)] .. sm:w-[calc(100vw*153*1.5/1440)] sm:h-[calc(100vw*216*1.5/1440)] sm:left-[calc(100vw*915*1.5/1440)] .. md:w-[calc(100vw*153*1.2/1440)] md:h-[calc(100vw*216*1.2/1440)] md:left-[calc(100vw*915*1.2/1440)] .. lg:w-[calc(100vw*153/1440)] lg:h-[calc(100vw*216/1440)] lg:left-[calc(100vw*915/1440)] ${RegularTransition} ${PurpleBuilding5}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Purple Building.svg"
          alt="Purple Building 6"
          className={`absolute w-[calc(100vw*153*2/1440)] h-[calc(100vw*216*2/1440)] left-[calc(100vw*1031*2/1440)] .. sm:w-[calc(100vw*153*1.5/1440)] sm:h-[calc(100vw*216*1.5/1440)] sm:left-[calc(100vw*1031*1.5/1440)] .. md:w-[calc(100vw*153*1.2/1440)] md:h-[calc(100vw*216*1.2/1440)] md:left-[calc(100vw*1031*1.2/1440)] .. lg:w-[calc(100vw*153/1440)] lg:h-[calc(100vw*216/1440)] lg:left-[calc(100vw*1031/1440)] ${RegularTransition} ${PurpleBuilding6}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Listrik.svg"
          alt="Listrik 3"
          className={`absolute w-[calc(100vw*120*2/1440)] h-[calc(100vw*167*2/1440)] left-[calc(100vw*945*2/1440)] .. sm:w-[calc(100vw*120*1.5/1440)] sm:h-[calc(100vw*167*1.5/1440)] sm:left-[calc(100vw*945*1,5/1440)] .. md:w-[calc(100vw*120*1.2/1440)] md:h-[calc(100vw*167*1.2/1440)] md:left-[calc(100vw*945*1.2/1440)] .. lg:w-[calc(100vw*120/1440)] lg:h-[calc(100vw*167/1440)] lg:left-[calc(100vw*945/1440)]  ${RegularTransition} ${Listrik3} ${ElectricGlow7}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Listrik.svg"
          alt="Listrik 4"
          className={`absolute w-[calc(100vw*120*2/1440)] h-[calc(100vw*167*2/1440)] left-[calc(100vw*825*2/1440)] .. sm:w-[calc(100vw*120*1.5/1440)] sm:h-[calc(100vw*167*1.5/1440)] sm:left-[calc(100vw*825*1.5/1440)] .. md:w-[calc(100vw*120*1.2/1440)] md:h-[calc(100vw*167*1.2/1440)] md:left-[calc(100vw*825*1.2/1440)] .. lg:w-[calc(100vw*120/1440)] lg:h-[calc(100vw*167/1440)] lg:left-[calc(100vw*825/1440)] ${RegularTransition} ${Listrik4} ${ElectricGlow6}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Listrik.svg"
          alt="Listrik 7"
          className={`absolute w-[calc(100vw*83.52*2/1440)] h-[calc(100vw*116.23*2/1440)] left-[calc(100vw*516*2/1440)] .. sm:w-[calc(100vw*83.52*1.5/1440)] sm:h-[calc(100vw*116.23*1.5/1440)] sm:left-[calc(100vw*516*1.5/1440)] .. md:w-[calc(100vw*83.52*1.2/1440)] md:h-[calc(100vw*116.23*1.2/1440)] md:left-[calc(100vw*516*1.2/1440)] .. lg:w-[calc(100vw*83.52/1440)] lg:h-[calc(100vw*116.23/1440)] lg:left-[calc(100vw*516/1440)] ${RegularTransition} ${Listrik7} ${ElectricGlow2}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/Listrik.svg"
          alt="Listrik 8"
          className={`absolute w-[calc(100vw*83.52*2/1440)] h-[calc(100vw*116.23*2/1440)] left-[calc(100vw*377*2/1440)] .. sm:w-[calc(100vw*83.52*1.5/1440)] sm:h-[calc(100vw*116.23*1.5/1440)] sm:left-[calc(100vw*377*1.5/1440)] .. md:w-[calc(100vw*83.52*1.2/1440)] md:h-[calc(100vw*116.23*1.2/1440)] md:left-[calc(100vw*377*1.2/1440)] .. lg:w-[calc(100vw*83.52/1440)] lg:h-[calc(100vw*116.23/1440)] lg:left-[calc(100vw*377/1440)] ${RegularTransition} ${Listrik8} ${ElectricGlow1}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/IEEE holder.svg"
          alt="IEEE Holder"
          className={`absolute w-[calc(100vw*325.58*2/1440)] h-[calc(100vw*413*2/1440)] left-[calc(100vw*557*2/1440)] top-[calc(100vw*210*2/1440)]  .. sm:w-[calc(100vw*325.58*1.5/1440)] sm:h-[calc(100vw*413*1.5/1440)] sm:left-[calc(100vw*557*1.5/1440)] sm:top-[calc(100vw*210*1.5/1440)] .. md:w-[calc(100vw*325.58*1.2/1440)] md:h-[calc(100vw*413*1.2/1440)] md:left-[calc(100vw*557*1.2/1440)] md:top-[calc(100vw*210*1.2/1440)] .. lg:w-[calc(100vw*325.58/1440)] lg:h-[calc(100vw*413/1440)] lg:left-[calc(100vw*557/1440)] lg:top-[calc(100vw*210/1440)] ${LongTransition} ${IEEEHolder}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/I.svg"
          alt="IEEE Text 1"
          className={`absolute w-[calc(100vw*71.54*2*2/1440)] h-[calc(100vw*73.79*2*2/1440)] left-[calc(100vw*589*2/1440)] .. sm:w-[calc(100vw*71.54*2*1.5/1440)] sm:h-[calc(100vw*73.79*2*1.5/1440)] sm:left-[calc(100vw*589*1.5/1440)] .. md:w-[calc(100vw*71.54*2*1.2/1440)] md:h-[calc(100vw*73.79*2*1.2/1440)] md:left-[calc(100vw*589*1.2/1440)] .. lg:w-[calc(100vw*71.54*2/1440)] lg:h-[calc(100vw*73.79*2/1440)] lg:left-[calc(100vw*589/1440)] ease-in ${IEEETextSpeed} ${IEEEText1}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/E pt1.svg"
          alt="IEEE Text 2"
          className={`absolute w-[calc(100vw*71.54*2*2/1440)] h-[calc(100vw*73.79*2*2/1440)] left-[calc(100vw*617.47*2/1440)] .. sm:w-[calc(100vw*71.54*2*1.5/1440)] sm:h-[calc(100vw*73.79*2*1.5/1440)] sm:left-[calc(100vw*617.47*1.5/1440)] .. md:w-[calc(100vw*71.54*2*1.2/1440)] md:h-[calc(100vw*73.79*2*1.2/1440)] md:left-[calc(100vw*617.47*1.2/1440)] .. lg:w-[calc(100vw*71.54*2/1440)] lg:h-[calc(100vw*73.79*2/1440)] lg:left-[calc(100vw*617.47/1440)] ease-in ${IEEETextSpeed} ${IEEEText2}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/E pt2.svg"
          alt="IEEE Text 3"
          className={`absolute w-[calc(100vw*52.81*2*2/1440)] h-[calc(100vw*76.79*2*2/1440)] left-[calc(100vw*692.86*2/1440)] .. sm:w-[calc(100vw*52.81*2*1.2/1440)] sm:h-[calc(100vw*76.79*2*1.5/1440)] sm:left-[calc(100vw*692.86*1.5/1440)] .. md:w-[calc(100vw*52.81*2*1.2/1440)] md:h-[calc(100vw*76.79*2*1.2/1440)] md:left-[calc(100vw*692.86*1.2/1440)] .. lg:w-[calc(100vw*52.81*2/1440)] lg:h-[calc(100vw*76.79*2/1440)] lg:left-[calc(100vw*692.86/1440)] ease-in ${IEEETextSpeed} ${IEEEText3}`}
          width={100}
          height={100}
          priority
        />

        <Image
          src="/Hero/E pt3.svg"
          alt="IEEE Text 4"
          className={`absolute w-[calc(100vw*55.31*2*2/1440)] h-[calc(100vw*78.02*2*2/1440)] left-[calc(100vw*744.41*2/1440)] .. sm:w-[calc(100vw*55.31*2*1.5/1440)] sm:h-[calc(100vw*78.02*2*1.5/1440)] sm:left-[calc(100vw*744.41*1.5/1440)] .. md:w-[calc(100vw*55.31*2*1.2/1440)] md:h-[calc(100vw*78.02*2*1.2/1440)] md:left-[calc(100vw*744.41*1.2/1440)] .. lg:w-[calc(100vw*55.31*2/1440)] lg:h-[calc(100vw*78.02*2/1440)] lg:left-[calc(100vw*744.41/1440)] ease-in ${IEEETextSpeed} ${IEEEText4}`}
          width={100}
          height={100}
          priority
        />

        <h1 className={`Welcome absolute text-white text-shadow-[0_4px_10px_0_rgb(0_0_0_/_40%)] font-poppins text-[calc(100vw*1.5/15)] sm:text-[calc(100vw*1.3/15)] md:text-[calc(100vw/15)] font-bold tracking-wide leading-tight left-[calc(100vw*350/1440)] sm:left-[calc(100vw*100/1440)] md:left-[calc(100vw*36/1440)] drop-shadow-[0px_0px_20px_rgba(225,225,225,0.9)] ${RegularTransition} ${Welcome}`}>WELCOME</h1>
        <h2 className={`Subtitle absolute text-white text-shadow-[0_4px_10px_0_rgb(0_0_0_/_40%)] font-[poly] text-[calc(100vw*1.5/30)] sm:text-[calc(100vw*1.3/30)] md:text-[calc(100vw/30)] font-medium italic tracking-wider leading-tight left-[calc(100vw*350/1440)] sm:left-[calc(100vw*100/1440)] md:left-[calc(100vw*38/1440)] drop-shadow-[0px_0px_10px_rgba(225,225,225,1)] ${RegularTransition} ${Subtitle}`}>Fellow Futuremakers</h2>
        
        <Link href={'/about'}>
          <div className={`AboutButton absolute flex m-auto left-[calc(100vw*550/1440)] sm:left-[calc(100vw*290/1440)] md:left-[calc(100vw*160/1440)] py-[calc(100vw*2/1440)] px-[calc(100vw*4/1440)] sm:px-[calc(100vw*2/1440)] bg-gradient-to-r from-white to-[#652D92] rounded-[calc(100vw*64/1440)] shadow-[0_0px_10px_1px_rgba(255,255,255,0.4)] ${RegularTransition} ${AboutButton}`}>
            <button className="text-white py-[calc(100vw*8/1440)] px-[calc(100vw*63/1440)] rounded-[calc(100vw*64/1440)] bg-[#652D92] hover:bg-[#8f5db9] text-[calc(100vw*1.8/80)] sm:text-[calc(100vw*1.5/80)] md:text-[calc(100vw/80)] animate-pulse">About Us</button>
          </div>
        </Link>
        

      </div>
    </main>
  );
}

export default Hero;
