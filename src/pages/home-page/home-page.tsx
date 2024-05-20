import logo from "../../assets/icons/full-logo.svg";

import dots from "../../assets/images/us-dots.svg";
import titleVector from "../../assets/images/title-vector.png";
import FeaturesSectionContainer from "../../containers/features-section-container/features-section-container";
import ValuesSectionContainer from "../../containers/values-section-container/values-section-container";
import { useNavigate } from "react-router-dom";
import { appRoutesObj } from "../../app.paths";
import { TbArrowLeft } from "@react-icons/all-files/tb/TbArrowLeft";
import TeamMemberImage from "../../assets/images/team-member.image";
import MonitorImage from "../../assets/images/monitor.image";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-hero bg-hero-size bg-center sm:bg-top bg-no-repeat">
        <div className="lg:w-[670px] h-auto w-11/12 backdrop-blur-3xl bg-black/5 rounded-2xl flex flex-col items-center justify-center gap-10 lg:gap-16 py-10 lg:px-20 lg:py-16">
          <img src={logo} alt="نبنيــــــــــــــــــ أحلامكـــــــــــــــ" />
          <h1 className="font-bold text-white text-center text-6xl">
            <span className="text-secondary">نبنيــــــــــــــــــ</span>{" "}
            أحلامكـــــــــــــــ
          </h1>
        </div>
      </div>

      <div className="w-full bg-us sm:bg-left bg-top bg-no-repeat bg-contain sm:bg-us-size">
        <div className="xl:max-w-7xl sm:max-w-2xl mx-auto w-full max-w-xs grid lg:grid-cols-2 items-center justify-between gap-7 lg:py-60">
          <div>
            <h4 className="text-2xl text-secondary mb-2">من نحن ؟</h4>
            <p className="text-2xl text-primary-50">
              تجمع الأحلام شركة سعودية تعمل على تصميم وتطوير البرمجيات وتقديم
              الحلول والخدمات التقنية للمؤسسات والشركات الناشئة.
            </p>
            <h4 className="text-2xl text-secondary mt-6 mb-2">رؤيتنا ؟</h4>
            <p className="text-2xl text-primary-50">
              تطوير أجود الحلول البرمجية وتطوير المجتمع التقني
            </p>
          </div>

          <div className="relative flex justify-center sm:justify-end">
            <div className="h-80 w-10/12 relative z-20 lg:w-[404px] rounded-3xl bg-black/10 backdrop-blur-lg flex items-center justify-center">
              <img
                src={logo}
                alt="نبنيــــــــــــــــــ أحلامكـــــــــــــــ"
              />
            </div>
            <img
              src={dots}
              alt=""
              className="absolute sm:-top-14 top-24 -left-16 z-10"
            />
          </div>
        </div>
      </div>

      <div className="xl:max-w-7xl py-20 relative sm:max-w-2xl mx-auto w-full max-w-xs">
        <img
          src={titleVector}
          alt="خدماتنا"
          className="mx-auto w-full hidden sm:block"
        />
        <h4 className="text-2xl text-center text-secondary mb-4 sm:mb-16 -mt-4">
          خدماتنا:
        </h4>
        <div className="grid sm:grid-cols-3 grid-cols-1 justify-between gap-4 w-full">
          <div className="w-full bg-black/5 group h-32 rounded-2xl flex items-center gap-4 pl-4">
            <div className="w-12 group h-full my-auto flex items-center">
              <MonitorImage />
            </div>
            <p className="text-primary-50 font-bold text-lg">
              تصميم وتطوير المواقع والتطبيقات الإلكترونية
            </p>
          </div>
          <div className="w-full bg-black/5 group h-32 rounded-2xl flex items-center gap-4 pl-4">
            <div className="w-12 group h-full my-auto flex items-center">
              <MonitorImage />
            </div>
            <p className="text-primary-50 font-bold text-lg">
              خدمات الصيانة والدعم التقني
            </p>
          </div>
          <div className="w-full bg-black/5 group h-32 rounded-2xl flex items-center gap-4 pl-4">
            <div className="w-12 group h-full my-auto flex items-center">
              <MonitorImage />
            </div>
            <p className="text-primary-50 font-bold text-lg">
              الاستشارات التقنية
            </p>
          </div>
        </div>
      </div>

      <div className="xl:max-w-7xl relative sm:max-w-2xl mx-auto w-full max-w-xs">
        <FeaturesSectionContainer />
      </div>

      <div className="bg-values sm:h-[500px] flex w-full items-center justify-center bg-no-repeat bg-center bg-contain">
        <div className="xl:max-w-7xl relative sm:max-w-2xl mx-auto w-full max-w-xs">
          <ValuesSectionContainer />
        </div>
      </div>

      <div className="xl:max-w-7xl sm:py-20 relative sm:max-w-2xl mx-auto w-full max-w-xs">
        <img
          src={titleVector}
          alt="خدماتنا"
          className="mx-auto w-full hidden sm:block"
        />
        <h4 className="text-2xl text-center text-secondary mb-16 -mt-4">
          فريقنا
        </h4>
        <div className="grid sm:grid-cols-3 grid-cols-1 justify-between gap-4 w-full">
          <div className="w-full bg-black/5 group h-32 rounded-2xl flex items-center gap-8 pl-4">
            <div className="w-14 group h-full my-auto flex items-center">
              <TeamMemberImage />
            </div>
            <div>
              <p className="transition-all mb-2 duration-200 text-primary-50 text-2xl group-hover:text-accent">
                نايف الشهراني
              </p>
              <p className="text-base text-primary-200 group-hover:text-accent-100 transition-all duration-200">
                الإدارة
              </p>
            </div>
          </div>
          <div className="w-full bg-black/5 group h-32 rounded-2xl flex items-center gap-8 pl-4">
            <div className="w-14 group h-full my-auto flex items-center">
              <TeamMemberImage />
            </div>
            <div>
              <p className="transition-all mb-2 duration-200 text-primary-50 text-2xl group-hover:text-accent">
                محمد الشيخ
              </p>
              <p className="text-base text-primary-200 group-hover:text-accent-100 transition-all duration-200">
                التطوير
              </p>
            </div>
          </div>
          <div className="w-full bg-black/5 group h-32 rounded-2xl flex items-center gap-8 pl-4">
            <div className="w-14 group h-full my-auto flex items-center">
              <TeamMemberImage />
            </div>
            <div>
              <p className="transition-all mb-2 duration-200 text-primary-50 text-2xl group-hover:text-accent">
                بدر الشهري
              </p>
              <p className="text-base text-primary-200 group-hover:text-accent-100 transition-all duration-200">
                المنتجات
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="xl:max-w-7xl py-20 relative sm:max-w-2xl mx-auto w-full max-w-xs">
        <h4 className="text-2xl text-center text-secondary mb-10">
          تواصل معنا
        </h4>
        <div className="mx-auto sm:w-[670px] w-full p-3 sm:p-12 bg-primary-50 rounded-xl backdrop-blur-lg flex items-center justify-between">
          <div>
            <p className="text-primary-900 text-lg font-bold mb-2">
              للمشاريع والأعمال
            </p>
            <p className="text-primary-900 opacity-70 text-sm">
              نسعد بتواصلك عبر النموذج
            </p>
          </div>
          <button
            onClick={() => navigate(appRoutesObj.getContactUrl())}
            className="text-primary-50 bg-primary hover:bg-primary-700 transition-all duration-300 text-base font-bold py-3.5 px-4 flex items-center justify-center w-fit gap-1 rounded-lg"
          >
            <span>تواصل معنا</span>
            <TbArrowLeft />
          </button>
        </div>
      </div>
    </>
  );
}
