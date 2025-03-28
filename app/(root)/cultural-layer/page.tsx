import Heading from "@/ui/Heading/Heading";
import { MainLayout } from "../../widgets/Layout/MainLayout";
import { ContactForm } from "@/ui/forms/ContactForm";

export default function CulturalLayer() {
    return <MainLayout>
        <Heading text={"культурный слой"} />
        <ContactForm />
    </MainLayout>;
} 