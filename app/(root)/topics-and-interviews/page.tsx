import Heading from "@/ui/Heading/Heading";
import { MainLayout } from "../../widgets/Layout/MainLayout";
import { ContactForm } from "@/ui/forms/ContactForm";

export default function TopicsAndInterviews() {
    return <MainLayout>
        <Heading text={"вечные темы/интервью"} />
        <ContactForm />
    </MainLayout>;
} 