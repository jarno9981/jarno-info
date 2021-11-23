import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { IProject, Service, Skill } from "./types";

import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Gilde Opleiding",
    about:
      "Ict Support Medewerker nv:2",
  },
  {
    Icon: FaServer,
    title: "Eigen Tijd Dingen",
    about:
      "Programming or in c# or html or nextjs",
  },
  {
    Icon: AiOutlineApi,
    title: "Huisdieren",
    about:
      "Ja heb 3 bakken met vissen en we hebben een hond ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Wat In de Toekomst",
    about: "I ga de kant op om nv:3 of hoger als ict medewerker te werken",
  },

];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "nextjs",
    level: "16",
  },
  {
    Icon: BsCircleFill,
    name: "c#",
    level: "22",
  },
  
];


