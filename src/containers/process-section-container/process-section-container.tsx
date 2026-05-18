import { TbLayoutDashboard } from "@react-icons/all-files/tb/TbLayoutDashboard";
import { TbCode } from "@react-icons/all-files/tb/TbCode";
import { TbRefresh } from "@react-icons/all-files/tb/TbRefresh";
import { TbPlayerPause } from "@react-icons/all-files/tb/TbPlayerPause";

type ProcessStep = {
  number: string;
  icon: JSX.Element;
  title: string;
  content: string;
};

const steps: ProcessStep[] = [
  {
    number: "01",
    icon: <TbLayoutDashboard size={22} />,
    title: "إدارة مشروعك عبر لوحة تحكم ذكية",
    content:
      "بمجرد الاشتراك، سنقوم بإنشاء لوحة تحكم خاصة بك (عبر Notion أو Trello). هنا يمكنك كتابة ومشاركة أفكارك، ميزات التطبيق، أو حتى التعديلات البسيطة في أي وقت طوال الـ 24 ساعة.",
  },
  {
    number: "02",
    icon: <TbCode size={22} />,
    title: "نطور فكرتك خطوة بخطوة",
    content:
      "سنأخذ الطلب الأول في قائمتك ونبدأ العمل عليه فوراً. نركز كامل طاقتنا على هذا الطلب لنضمن لك مخرجات سريعة وخالية من الأخطاء التقنية.",
  },
  {
    number: "03",
    icon: <TbRefresh size={22} />,
    title: "مراجعة وتعديل مستمر",
    content:
      "نسلمك التحديث خلال يومين إلى ثلاثة أيام. إذا كان لديك أي ملاحظات، نعدلها فوراً. بمجرد موافقتك على الطلب، ننتقل تلقائياً للطلب الذي يليه في القائمة.",
  },
  {
    number: "04",
    icon: <TbPlayerPause size={22} />,
    title: "ميزة الـ Pause (التحكم الكامل بأموالك)",
    content:
      "هل انتهينا من بناء النسخة الأولى وتريد التوقف مؤقتاً لتجربتها مع المستخدمين؟ لا تضيع أموالك. استخدم ميزة \"إيقاف الاشتراك مؤقتاً\"، واحتفظ بالأيام المتبقية في رصيدك حتى تكون جاهزاً للعودة.",
  },
];

export default function ProcessSectionContainer() {
  return (
    <section className="w-full py-16 sm:py-24">
      <div className="xl:max-w-7xl sm:max-w-2xl mx-auto w-full max-w-xs">
        <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold text-accent tracking-[0.3em] uppercase mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-primary-50 leading-tight mb-4 max-w-3xl">
            كيف تسير الأمور في{" "}
            <span className="text-secondary">Dreams Hub؟</span>
          </h2>
          <p className="text-base sm:text-lg text-primary-200 max-w-2xl">
            تخطّينا البيروقراطية والاجتماعات المملة. إليك كيف نعمل معاً بشكل
            يومي:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={`process-step-${index}`}
              className="group relative bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-accent/40 rounded-2xl p-6 sm:p-8 backdrop-blur-xl transition-all duration-500 overflow-hidden"
            >
              <div className="absolute top-0 end-0 w-40 h-40 bg-gradient-to-br from-secondary/10 via-accent/5 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div className="relative flex items-start gap-5">
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-br from-secondary to-accent bg-clip-text text-transparent leading-none">
                    {step.number}
                  </span>
                  <div className="w-11 h-11 rounded-xl bg-primary-800/60 border border-white/10 text-accent flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/30 transition-all duration-500">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1 min-w-0 pt-1">
                  <h3 className="text-lg sm:text-xl font-bold text-primary-50 mb-3 group-hover:text-accent transition-colors duration-300 text-start">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-primary-200 leading-relaxed text-start">
                    {step.content}
                  </p>
                </div>
              </div>

              <div className="absolute bottom-0 start-0 end-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
