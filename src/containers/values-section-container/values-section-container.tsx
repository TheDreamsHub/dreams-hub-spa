import { useState } from "react";

export default function ValuesSectionContainer() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const getPosition = (index: number) => {
    if (index - 1 === currentIndex) {
      return "30px";
    } else if (index - 2 === currentIndex) {
      return "60px";
    } else if (index - 3 === currentIndex) {
      return "90px";
    } else if (index - 4 === currentIndex) {
      return "120px";
    } else if (index + 1 === currentIndex) {
      return "-30px";
    } else if (index + 2 === currentIndex) {
      return "-60px";
    } else if (index + 3 === currentIndex) {
      return "-90px";
    } else if (index + 4 === currentIndex) {
      return "-120px";
    } else {
      return "0px";
    }
  };

  const getZIndex = (index: number) => {
    if (index - 1 === currentIndex) {
      return "40";
    } else if (index - 2 === currentIndex) {
      return "30";
    } else if (index - 3 === currentIndex) {
      return "20";
    } else if (index - 4 === currentIndex) {
      return "10";
    } else if (index + 1 === currentIndex) {
      return "40";
    } else if (index + 2 === currentIndex) {
      return "30";
    } else if (index + 3 === currentIndex) {
      return "20";
    } else if (index + 4 === currentIndex) {
      return "10";
    } else {
      return "50";
    }
  };

  const getScale = (index: number) => {
    if (index - 1 === currentIndex) {
      return "0.9";
    } else if (index - 2 === currentIndex) {
      return "0.8";
    } else if (index - 3 === currentIndex) {
      return "0.7";
    } else if (index - 4 === currentIndex) {
      return "0.6";
    } else if (index + 1 === currentIndex) {
      return "0.9";
    } else if (index + 2 === currentIndex) {
      return "0.8";
    } else if (index + 3 === currentIndex) {
      return "0.7";
    } else if (index + 4 === currentIndex) {
      return "0.6";
    } else {
      return "1";
    }
  };

  return (
    <div
      id="about"
      className="sm:max-w-6xl relative mx-auto w-full flex items-center justify-center my-20"
    >
      <div className="flex sm:flex-row flex-col items-center sm:gap-7 justify-between w-full">
        <div>
          <h4 className="text-2xl mb-4 text-start w-full text-secondary">
            قيمنا
          </h4>
          <div className="flex items-center flex-wrap gap-3">
            <div
              onClick={() => setCurrentIndex(0)}
              className={`${
                currentIndex === 0
                  ? "bg-accent-50 font-bold text-accent-600 backdrop-blur"
                  : "bg-primary-900 text-primary-400"
              } text-2xl flex items-center cursor-pointer justify-center px-7 py-2 transition-all duration-200 rounded-xl w-fit`}
            >
              الوضوح
            </div>
            <div
              onClick={() => setCurrentIndex(1)}
              className={`${
                currentIndex === 1
                  ? "bg-accent-50 font-bold text-accent-600 backdrop-blur"
                  : "bg-primary-900 text-primary-400"
              } text-2xl flex items-center cursor-pointer justify-center px-7 py-2 transition-all duration-200 rounded-xl w-fit`}
            >
              التحسين
            </div>
            <div
              onClick={() => setCurrentIndex(2)}
              className={`${
                currentIndex === 2
                  ? "bg-accent-50 font-bold text-accent-600 backdrop-blur"
                  : "bg-primary-900 text-primary-400"
              } text-2xl flex items-center cursor-pointer justify-center px-7 py-2 transition-all duration-200 rounded-xl w-fit`}
            >
              تلبية الاحتياج
            </div>
          </div>
        </div>
        <div className="sm:h-72 h-60 sm:mt-0 mt-40 sm:mb-0 mb-40 relative">
          <div className="sm:w-[540px] w-[320px] mx-auto h-60 sm:h-72 sm:shadow-provide"></div>
          <div
            className={`p-6 sm:w-[540px] w-full sm:h-72 h-60 absolute transition-all duration-300 backdrop-blur-3xl rounded-2xl ${
              currentIndex !== 0 ? "bg-[#0D0F1A]" : "bg-black/5"
            }`}
            style={{
              top: getPosition(0),
              zIndex: getZIndex(0),
              scale: getScale(0),
            }}
          >
            <h1 className="font-bold text-secondary sm:text-3xl mb-9 mt-4">
              الوضوح
            </h1>
            <p className="text-base text-white sm:text-2xl">
              مراحل بناء المنتجات لدينا تتسم بالوضوح في العمل والمقترحات
              والاستشارات التي تساعد في بناء المنتج الرقمي
            </p>
          </div>
          <div
            className={`p-6 sm:w-[540px] sm:h-72 h-60 w-full absolute transition-all duration-300 backdrop-blur-3xl rounded-2xl ${
              currentIndex !== 1 ? "bg-[#0D0F1A]" : "bg-black/5"
            }`}
            style={{
              top: getPosition(1),
              zIndex: getZIndex(1),
              scale: getScale(1),
            }}
          >
            <h1 className="font-bold text-secondary sm:text-3xl mb-9 mt-4">
              التحسين
            </h1>
            <p className="text-base text-white sm:text-2xl">
              التحسين سمة مهمة لتطوير التقنيات والأدوات المستخدمة في بناء
              الممتجات الرقمية
            </p>
          </div>
          <div
            className={`p-6 sm:w-[540px] sm:h-72 h-60 w-full absolute transition-all duration-300 backdrop-blur-3xl rounded-2xl ${
              currentIndex !== 2 ? "bg-[#0D0F1A]" : "bg-black/5"
            }`}
            style={{
              top: getPosition(2),
              zIndex: getZIndex(2),
              scale: getScale(2),
            }}
          >
            <h1 className="font-bold text-secondary sm:text-3xl mb-9 mt-4">
              تلبية الاحتياج
            </h1>
            <p className="text-base text-white sm:text-2xl">
              من بداية المشروع وحتى تسليمه يكون الهدف الأسمى هو تلبية احتياجات
              العميل وتقديم تجربة مميزة
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
