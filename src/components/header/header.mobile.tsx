import { useNavigate } from "react-router-dom";

import logo from "../../assets/icons/logo-icon.svg";
import { appRoutesObj } from "../../app.paths";
import { TbAlignJustified } from "@react-icons/all-files/tb/TbAlignJustified";

interface HeaderMobileProps {
  handleLogoClick: () => void;
}

export default function HeaderMobile({ handleLogoClick }: HeaderMobileProps) {
  const navigate = useNavigate();

  return (
    <div className="flex w-full py-2 justify-between">
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
          onClick={() => navigate(appRoutesObj.getContactUrl())}
          className="text-secondary border border-secondary hover:text-white bg-transparent hover:bg-secondary transition-all duration-300 text-base font-bold py-3.5 px-4 flex items-center justify-center w-fit gap-1 rounded-lg"
        >
          <TbAlignJustified />
          <span>تواصل معنا</span>
        </button>
      </div>
    </div>
  );
}
