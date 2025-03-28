import { MainLayout } from "../../widgets/Layout/MainLayout";
import Heading from "@/ui/Heading/Heading";
import { ContactForm } from "@/ui/forms/ContactForm";

export default function LeadershipProgram() {
    return <MainLayout>
        <Heading text={"лидерская программа"} />
        <ContactForm />
    </MainLayout>;
} 