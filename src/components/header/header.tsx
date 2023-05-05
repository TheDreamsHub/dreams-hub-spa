import { useNavigate } from "react-router-dom";

import useIsMobileScreen from "../../core/hooks/use-is-mobile-screen.hooks";
import { appRoutesObj } from "../../app.paths";
import HeaderMobile from "./header.mobile";
import HeaderDesktop from "./header.desktop";

export default function Header() {
  const navigate = useNavigate();
  const { isMobile } = useIsMobileScreen();

  const handleLogoClick = () => {
    navigate(appRoutesObj.getBaseUrl());
  };

  return (
    <nav className="inset-x-0 shadow-section fixed dark:bg-primary-800/5 bg-transparent top-0 right-0 left-0 z-40 flex h-16 xl:h-auto xl:px-3 gap-16">
      <div className="xl:max-w-7xl sm:max-w-4xl w-full max-w-xs mx-auto">
        {isMobile ? (
          <HeaderMobile handleLogoClick={handleLogoClick} />
        ) : (
          <HeaderDesktop handleLogoClick={handleLogoClick} />
        )}
      </div>
    </nav>
  );
}
