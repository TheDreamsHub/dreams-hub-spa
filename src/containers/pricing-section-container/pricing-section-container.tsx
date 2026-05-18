import { TbCheck } from "@react-icons/all-files/tb/TbCheck";
import { TbBrandWhatsapp } from "@react-icons/all-files/tb/TbBrandWhatsapp";
import { TbInfinity } from "@react-icons/all-files/tb/TbInfinity";
import { TbBolt } from "@react-icons/all-files/tb/TbBolt";
import { TbTargetArrow } from "@react-icons/all-files/tb/TbTargetArrow";
import { TbDevices } from "@react-icons/all-files/tb/TbDevices";
import { TbMessageCircle2 } from "@react-icons/all-files/tb/TbMessageCircle2";
import { TbPlayerPause } from "@react-icons/all-files/tb/TbPlayerPause";

type FeatureItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    icon: <TbDevices size={20} />,
    title: "تطوير متكامل",
    description: "تطبيقات الجوال (iOS & Android) ومواقع الويب.",
  },
  {
    icon: <TbInfinity size={20} />,
    title: "طلبات غير محدودة",
    description: "أضف أي عدد من الميزات والطلبات في قائمتك.",
  },
  {
    icon: <TbTargetArrow size={20} />,
    title: "تركيز فائق",
    description:
      "نعمل على طلب واحد نشط في نفس الوقت لضمان أعلى جودة وأسرع تسليم.",
  },
  {
    icon: <TbBolt size={20} />,
    title: "تسليم سريع",
    description: "تحديثات ومخرجات ملموسة كل 48 إلى 72 ساعة.",
  },
  {
    icon: <TbMessageCircle2 size={20} />,
    title: "تواصل مرن (Async)",
    description:
      "عبر قناة مخصصة لك على WhatsApp/Slack بدون اجتماعات طويلة.",
  },
  {
    icon: <TbPlayerPause size={20} />,
    title: "إدارة مرنة للاشتراك",
    description: "يمكنك إيقاف (Pause) أو إلغاء الاشتراك في أي وقت.",
  },
];

const WHATSAPP_LINK = "https://wa.me/966538909866";

export default function PricingSectionContainer() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="xl:max-w-7xl sm:max-w-2xl mx-auto w-full max-w-xs">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-accent tracking-[0.3em] uppercase mb-4">
            Subscription Model
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary-50 leading-tight mb-4 max-w-3xl">
            اختر خطتك وابدأ تطوير{" "}
            <span className="text-secondary">تطبيقك اليوم</span>
          </h2>
          <p className="text-base sm:text-lg text-primary-200 max-w-2xl">
            اشتراك شهري ثابت. طلبات غير محدودة. أوقف أو ألغِ اشتراكك في أي وقت.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-stretch">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-primary-50 mb-6">
              لماذا الاشتراك الشهري؟
            </h3>
            <p className="text-primary-200 text-base sm:text-lg leading-relaxed mb-8">
              نموذج عمل مرن مصمم للشركات الناشئة وأصحاب الأفكار. بدلاً من
              التعاقد الطويل والتكاليف المفاجئة، احصل على فريق تطوير كامل بسعر
              ثابت وشفاف.
            </p>
            <ul className="flex flex-col gap-4">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <TbCheck size={18} />
                </div>
                <span className="text-primary-50 text-base">
                  بدون عقود طويلة الأمد
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <TbCheck size={18} />
                </div>
                <span className="text-primary-50 text-base">
                  فريق تطوير متكامل تحت الطلب
                </span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <TbCheck size={18} />
                </div>
                <span className="text-primary-50 text-base">
                  شفافية تامة في السعر والمخرجات
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 relative">
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-secondary via-accent/40 to-primary opacity-60 blur-sm"></div>
            <div className="relative bg-[#0E101E] border border-white/10 rounded-3xl p-6 sm:p-10 backdrop-blur-xl flex flex-col h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/15 border border-secondary/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span>
                  <span className="text-xs font-bold text-secondary">
                    الأكثر طلباً · سعة محدودة
                  </span>
                </div>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-primary-50 mb-2">
                باقة التطوير الشاملة
              </h3>
              <p className="text-sm text-primary-300 mb-6">
                Full-Stack Subscription
              </p>

              <p className="text-primary-200 text-sm sm:text-base leading-relaxed mb-8">
                مثالية للشركات الناشئة وأصحاب الأفكار الذين يرغبون في بناء الـ
                MVP أو تطوير تطبيقهم الحالي بسرعة.
              </p>

              <div className="flex items-baseline gap-2 mb-8 pb-8 border-b border-white/10">
                <span className="text-5xl sm:text-6xl font-bold text-primary-50">
                  4,900
                </span>
                <span className="text-xl text-primary-200">ر.س</span>
                <span className="text-sm text-primary-300 ms-1">/ شهرياً</span>
              </div>

              <ul className="flex flex-col gap-5 mb-10 flex-1">
                {features.map((feature, index) => (
                  <li
                    key={`pricing-feature-${index}`}
                    className="flex items-start gap-4"
                  >
                    <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-primary-50 font-bold text-base mb-1">
                        {feature.title}
                      </p>
                      <p className="text-primary-200 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full flex items-center justify-center gap-3 bg-accent hover:bg-accent-600 text-primary-900 font-bold text-base sm:text-lg py-4 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-accent/20 hover:shadow-accent/40"
              >
                <TbBrandWhatsapp size={22} />
                <span>اشترك الآن وابدأ مشروعك اليوم</span>
              </a>

              <p className="text-center text-xs text-primary-300 mt-4">
                بدون رسوم خفية · إلغاء في أي وقت
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
