import { Footer } from "../Footer/Footer";


interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="layout flex flex-col min-h-screen">
      <div className="layout__content flex-grow">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
};
