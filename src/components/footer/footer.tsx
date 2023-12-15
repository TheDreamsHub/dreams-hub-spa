import { TbBrandTwitter } from "@react-icons/all-files/tb/TbBrandTwitter";
import { TbBrandLinkedin } from "@react-icons/all-files/tb/TbBrandLinkedin";
import logo from "../../assets/icons/full-logo.svg";

import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <>
      <div className="bg-[#0E101E] w-full">
        <div className="xl:max-w-7xl sm:max-w-2xl mx-auto w-full max-w-xs py-2">
          <div className="flex flex-col-reverse sm:flex-row items-center w-full justify-between gap-10">
            <p className="text-sm text-white">
              جميع الحقوق محفوظة لشركة تجمع الأحلام 2023
            </p>
            <div className="flex items-center gap-4">
              <div
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/2030-dreams-hub/?viewAsMember=true",
                    "_blank"
                  )
                }
                className="rounded-full bg-primary-800 w-10 h-10 flex items-center justify-center text-primary-100"
              >
                <TbBrandLinkedin size={20} />
              </div>
              <div 
                onClick={() =>
                  window.open(
                    "https://twitter.com/DreamsHub2030",
                    "_blank"
                  )
                }
              className="rounded-full bg-primary-800 w-10 h-10 flex items-center justify-center text-primary-100">
                <TbBrandTwitter size={20} />
              </div>
              <img
                src={logo}
                alt={t("components.Footer.go")!}
                className="w-20 h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
