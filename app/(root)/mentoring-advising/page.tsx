import Heading from "@/ui/Heading/Heading";
import { MainLayout } from "../../widgets/Layout/MainLayout";
import { ContactForm } from "@/ui/forms/ContactForm";

export default function MentoringAndAdvising() {
    return <MainLayout>
        <Heading text={"менторство/эдвайз"} />
        <ContactForm />
    </MainLayout>;
} 