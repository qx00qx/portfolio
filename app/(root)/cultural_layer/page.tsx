import Heading from "@/ui/heading/Heading";
import { MainLayout } from "../../widgets/Layout/MainLayout";

export default function CulturalLayer() {
    return <MainLayout>
        <Heading text={"культурный слой"} />
        <div className="flex justify-between items-baseline mt-[50px] mb-[80px]">
            <img className="animate-spin [animation-duration:3s]" src="/asterisk.svg" alt="" />
            <div className="text w-[992px]">
                <p className="text-4xl font-semibold mb-[40px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam unde veniam voluptatibus at quibusdam, omnis placeat dicta architecto! Consequatur reprehenderit sed quia harum aut alias fugiat laudantium repellendus, voluptates debitis voluptate delectus.
                </p>
                <p className="text-4xl font-semibold">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam unde veniam voluptatibus at quibusdam, omnis placeat dicta architecto! Consequatur reprehenderit sed quia harum aut alias fugiat laudantium repellendus, voluptates debitis voluptate delectus.
                </p>
            </div>
        </div>
    </MainLayout>;
} 