import { Footer } from "@/widgets/Footer";

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="layout">
      <div className="layout__content">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
