import Heading from "@/ui/Heading/Heading";
import { MainLayout } from "../../widgets/Layout/MainLayout";
import { ContactForm } from "@/ui/forms/ContactForm";

export default function Venture() {
    return <MainLayout>
        <Heading text={"Венчур"} />
        <ContactForm />
    </MainLayout>;
} 