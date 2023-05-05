import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import logo from "../../assets/icons/full-logo.svg";

import dots from "../../assets/images/us-dots.svg";

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex items-center justify-center bg-hero bg-hero-size bg-top bg-no-repeat">
        <div className="lg:w-[670px] h-auto w-full backdrop-blur-3xl bg-black/5 rounded-2xl flex flex-col items-center justify-center lg:gap-16 lg:px-20 lg:py-16">
          <img src={logo} alt="نبنيــــــــــــــــــ أحلامكـــــــــــــــ" />
          <h1 className="font-bold text-white text-6xl">
            <span className="text-secondary">نبنيــــــــــــــــــ</span>{" "}
            أحلامكـــــــــــــــ
          </h1>
        </div>
      </div>

      <div className="w-full bg-us bg-left bg-no-repeat bg-us-size">
        <div className="xl:max-w-7xl sm:max-w-2xl mx-auto w-full max-w-xs grid lg:grid-cols-2 items-center justify-between gap-7 lg:py-60">
          <div>
            <h4 className="text-2xl text-secondary mb-2">من نحن ؟</h4>
            <p className="text-2xl text-primary-50">
              تجمع الأحلام مؤسسة سعودية تعمل على تصميم وتطوير البرمجيات وتقديم
              الحلول والخدمات التقنية للمؤسسات والشركات الناشئة.
            </p>
            <h4 className="text-2xl text-secondary mt-6 mb-2">رؤيتنا ؟</h4>
            <p className="text-2xl text-primary-50">
              تطوير أجود الحلول البرمجية وتطوير المجتمع التقني
            </p>
          </div>

          <div className="relative flex justify-end">
            <div className="lg:h-80 relative z-20 lg:w-[404px] rounded-3xl bg-black/10 backdrop-blur-lg flex items-center justify-center">
              <img
                src={logo}
                alt="نبنيــــــــــــــــــ أحلامكـــــــــــــــ"
              />
            </div>
            <img src={dots} alt="" className="absolute -top-14 -left-16 z-10" />
          </div>
        </div>
      </div>

      <div className="xl:max-w-7xl sm:max-w-2xl mx-auto w-full max-w-xs">

      </div>
    </>

  );
}
