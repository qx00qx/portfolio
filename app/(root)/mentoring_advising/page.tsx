'use client'
import Heading from "@/ui/heading/Heading";
import { MainLayout } from "../../widgets/Layout/MainLayout";
import SectionHeading from "@/ui/heading/SectionHeading";
import Feedback from "@/ui/feedback/Feedback";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

export default function MentoringAndAdvising() {
    return <MainLayout>
        <Heading text={"менторство/эдвайз"} />
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
        <div className="flex flex-col">
            <SectionHeading title="отзывы фаундеров" />
            <div className="relative w-full">
                <Swiper
                    modules={[Navigation]}
                    navigation={true}
                    spaceBetween={30}
                    className="[&_.swiper-button-next]:text-black [&_.swiper-button-prev]:text-black"
                    slidesPerView={1}
                    style={{ padding: '20px 0' }}
                >
                    {Array.from({ length: 5 }).map((_, index) => (
                        <SwiperSlide key={index} className="!h-auto">
                            <Feedback />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </MainLayout>;
} 