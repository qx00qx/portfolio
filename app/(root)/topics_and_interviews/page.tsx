import Heading from "@/ui/heading/Heading";
import { MainLayout } from "../../widgets/Layout/MainLayout";
import Article from "@/ui/article/Article";
import SectionHeading from "@/ui/heading/SectionHeading";

export default function TopicsAndInterviews() {
    return <MainLayout>
        <Heading className="mb-[50px]" text={"вечные темы/интервью"} />
        <section className="article_block flex gap-[20px] mb-[50px]">
            <Article />
            <Article />
            <Article />
        </section>
        <section className="flex flex-col gap-[100px] mb-[100px]">
            <SectionHeading title={"задать вопрос"} />
            <div className="flex flex-col items-end">
                <textarea className="w-[769px] h-[250px] border border-gray-300 rounded-[15px] p-2" placeholder="напишите здесь" />
                <button className='mt-[50px]'>
                    <img src="/arrow-black.svg" alt="Прочитать статью" />
                </button>
            </div>
        </section>
    </MainLayout>;
} 