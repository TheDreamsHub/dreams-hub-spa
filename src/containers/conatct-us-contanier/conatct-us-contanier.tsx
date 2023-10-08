import ContactUsFormContainer from "../conatct-us-form-contanier/conatct-us-form-contanier";

export default function ContactUsContainer() {
  return (
    <div className="w-full flex py-28 relative overflow-hidden items-center justify-center p-2 pb-10 min-h-screen h-full">
      <div className="xl:max-w-7xl sm:max-w-2xl mx-auto w-full max-w-xs grid grid-cols-1 items-center gap-10">
        <div>
          <h4 className="text-2xl text-center text-secondary mb-4">
            تواصل معنا
          </h4>
        </div>
        <div className="sm:w-2/3 mx-auto w-full">
          <ContactUsFormContainer />
        </div>
      </div>
    </div>
  );
}
