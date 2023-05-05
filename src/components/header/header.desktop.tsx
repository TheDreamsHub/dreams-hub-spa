import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import { LanguagesEnum } from "../../core/enums/languages.enum";
import logo from "../../assets/icons/logo-icon.svg";
import { TbAlignJustified } from "@react-icons/all-files/tb/TbAlignJustified";
import { appRoutesObj } from "../../app.paths";

interface HeaderDesktopProps {
  handleLogoClick: () => void;
}

export default function HeaderDesktop({ handleLogoClick }: HeaderDesktopProps) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="mx-auto py-4 flex justify-center w-full sm:max-w-7xl relative">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <div
            className={`h-full flex items-center justify-center ${
              i18n.language === LanguagesEnum.EN ? "mr-5" : "ml-5"
            }`}
          >
            <img
              src={logo}
              alt=""
              className="h-10 w-auto cursor-pointer"
              onClick={handleLogoClick}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end gap-4 w-full">
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
