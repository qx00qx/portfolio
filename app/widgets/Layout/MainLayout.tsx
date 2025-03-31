import SectionHeading from "@/ui/heading/SectionHeading";
import { Footer } from "../Footer/Footer";
import { ContactForm } from "@/ui/forms/ContactForm";


interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <div className="layout flex flex-col min-h-screen px-[50px]">
        <div className="layout__content mt-[50px]">
          <main>
            {children}
            <section className="feedback">
              <div className="flex justify-between mb-[100px]">
                <div className="feedback_container_left">
                  <SectionHeading title="обратная связь" />
                </div>
                <div className="feedback_container_right p-[50px]">
                  <ContactForm />
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};
