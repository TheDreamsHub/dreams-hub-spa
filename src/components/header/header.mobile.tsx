import { useEffect, useState } from "react";
import { FiMenu } from "@react-icons/all-files/fi/FiMenu";
import { HiX } from "@react-icons/all-files/hi/HiX";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/icons/logo-icon.svg";
import { appRoutesObj } from "../../app.paths";
import { TbAlignJustified } from "@react-icons/all-files/tb/TbAlignJustified";

interface HeaderMobileProps {
  handleLogoClick: () => void;
}

export default function HeaderMobile({ handleLogoClick }: HeaderMobileProps) {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);
  const [isContentOptionsShown, setIsContentOptionsShown] =
    useState<boolean>(true);

  useEffect(() => {
    if (!isCollapsed) {
      // to disable  scrolling on the page
      window.document.body.style.position = "fixed";
      window.document.body.style.width = "100%";
    } else {
      window.document.body.style.position = "unset";
    }
  }, [isCollapsed]);

  return (
    <div className="flex w-full justify-between">
      <div
        className={`${
          isCollapsed ? "h-0 py-0" : "py-4 h-[280px]"
        } bg-white dark:bg-primary-900 absolute top-16 z-[9999] p-5 shadow-xl w-60 rounded-b-[30px] backdrop-blur-xl mx-auto inset-x-0 transition-all duration-150 overflow-hidden`}
      >
        <div className="flex w-full flex-col gap-6 justify-center items-center text-center">
          <button
            onClick={() => navigate(appRoutesObj.getContactUrl())}
            className="text-secondary border border-secondary hover:text-white bg-transparent hover:bg-secondary transition-all duration-300 text-base font-bold py-3.5 px-4 flex items-center justify-center w-fit gap-1 rounded-lg"
          >
            <TbAlignJustified />
            <span>تواصل معنا</span>
          </button>
        </div>
      </div>
      <div className="mt-2 z-50">
        <img
          src={logo}
          alt=""
          className="h-10 w-auto"
          onClick={handleLogoClick}
        />
      </div>

      <div className="z-50">
        <button
          title="menu"
          type="button"
          className="mt-4 text-[#8993A4] dark:text-white"
          onClick={() => {
            setIsCollapsed(!isCollapsed);
            setIsContentOptionsShown(!isContentOptionsShown);
          }}
        >
          {!isCollapsed ? <HiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
    </div>
  );
}
