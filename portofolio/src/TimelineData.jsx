import tcr from "./img/tcr.png";
import cwr from "./img/cwr.png";
import microsoft from "./img/microsoft.PNG";
import etelcom from "./img/etelcom.gif";
import albeda from "./img/albeda.jpg";

const TimelineData = [
  {
    year: "2023 - heden",
    imgSrc: tcr,
    imgId: "tcr",
    alt: "TCR Logo",
    title: (
      <>
        Opleiding SOFTWARE DEVELOPER -<br />
        CREATIVE MEDIA TECHNOLOGY bij
        <br />
        Techniek College Rotterdam
      </>
    ),
    align:"left",
  },
  {
    year: "2016 - 2023",
    imgSrc: cwr,
    imgId: "cwr",
    alt: "CWR Logo",
    title: (
      <>
        Functie SYSTEEMBEHEERDER bij
        <br />
        Stichting de Wijkbus Rotterdam
      </>
    ),
    align: "right",
  },
  {
    year: "2017 - 2017",
    imgSrc: microsoft,
    imgId: "microsoft",
    alt: "Microsoft Logo",
    title: <>MSCA cursus gevolgd</>,
    align: "left",
  },
  {
    year: "2014 - 2015",
    imgSrc: etelcom,
    imgId: "etelcom",
    alt: "Etelcom Logo",
    title: <>Stage bij Etelcom Computers Rotterdam</>,
    align: "right",
  },
  {
    year: "2013 - 2015",
    imgSrc: albeda,
    imgId: "albeda",
    alt: "Albeda College Logo",
    title: <>Opleiding BEHEER ICT bij Albeda College</>,
    align: "left",
  },
];

export default TimelineData;