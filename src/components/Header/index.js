import React from "react";
import {
  FiLogOut,
  FiSearch,
  FiHome,
  FiGrid,
  FiSettings,
} from "react-icons/fi";
import { MdOutlineNotificationsActive, MdPersonOutline } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr"
import { BiBot } from "react-icons/bi";

const Header = () => {

  const menu = [
    {
      label: "Dashboard",icon: <FiHome />,
    },
    { label: "Board", icon: <FiGrid />},
    { label: "Estatísticas", icon: <GrAnalytics /> },
    { label: "Notificações", icon: <MdOutlineNotificationsActive /> },
  ];

  const configs = [
    { label: "Perfil", icon: <MdPersonOutline /> },
    { label: "Configurações", icon: <FiSettings /> },
  ]


  return (
    <>
      <div className="fixed w-full flex items-center justify-between h-14 text-white z-10 bg-green-800">
        <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14  dark:bg-gray-800 border-none">
          <BiBot className="text-2xl mr-2" />
          <span className="hidden md:block text-xl">BOT FUNIL</span>
        </div>
        <div className="flex justify-between items-center h-14 bg-green-800 dark:bg-gray-800 header-right text-white">
          <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none text-green-800 text-bold">
              <FiSearch />
            </button>
            <input
              type="search"
              name=""
              id=""
              placeholder="Buscar"
              className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"
            />
          </div>
          <ul className="flex items-center">
            <li>
              <button
                aria-hidden="true"
                className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
              />
            </li>
            <li>
              <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
            </li>
            <li>
              <a
                href="/"
                className="flex items-center mr-4 hover:text-blue-100"
              >
                <span className="inline-flex mr-1">
                  <FiLogOut />
                </span>
                Sair
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-slate-300 dark:bg-gray-900 h-full text-black transition-all duration-300 border-none z-10 sidebar">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
          <ul className="flex flex-col py-4 space-y-1">
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center h-8">
                <div className="text-sm font-bold tracking-wide text-black uppercase">
                  Menu
                </div>
              </div>
            </li>
            {menu.map((item, index) => (
            <li key={index}>
              <a
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-700 hover:text-white  border-l-4 border-transparent hover:border-green-300 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4">
                  {item.icon}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                 {item.label}
                </span>
              </a>
            </li>
            ))}
            
            <li className="px-5 hidden md:block">
              <div className="flex flex-row items-center mt-5 h-8">
                <div className="text-sm font-bold tracking-wide text-black uppercase">
                  Configurações
                </div>
              </div>
            </li>
            {configs.map((item, index) => (
            <li key={index}>
              <a
                href="/"
                className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-green-700 hover:text-white  border-l-4 border-transparent hover:border-green-300 pr-6"
              >
                <span className="inline-flex justify-center items-center ml-4 text-xl">
                  {item.icon}
                </span>
                <span className="ml-2 text-sm tracking-wide truncate">
                  {item.label}
                </span>
              </a>
            </li>
            ))}
          </ul>
          <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">
            Copyright @2022
          </p>
        </div>
      </div>
    </>
  );
};

export default Header;
