'use client'

import SectionHeading from "@/ui/heading/SectionHeading";
import { MainLayout } from "../../widgets/Layout/MainLayout";
import Heading from "@/ui/heading/Heading";
import Feedback from "@/ui/feedback/Feedback";
import Avatar from "@/ui/avatar/Avatar";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';


export default function LeadershipProgram() {

    /* TODO:
        1. прописать логику с настоящими данными:
        — добавить к участникам ссылки на их страницы
        — добавить отзывы выпускников
    */

    const [members, setMembers] = useState<number[]>(Array.from({ length: 40 }, (_, i) => i + 1))
    const [showAll, setShowAll] = useState(false);

    return <MainLayout>
        <Heading text={"лидерская программа"} />
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
            <SectionHeading title="состав лидерской программы" />
            <div className="flex flex-wrap gap-[20px] mt-[50px] justify-center">
                {members.map((member, index) => {
                    if (member < 20 || showAll) {
                        return (
                            <Avatar className="small" key={index} img="/avatar.png" />
                        )
                    } return null
                })}
            </div>
            {!showAll && members.length > 20 && (
                <button
                    onClick={() => setShowAll(true)}
                    className="mt-[40px] text-2xl m-auto hover:opacity-70 transition-opacity duration-300"
                >
                    <img src="/plus.svg" alt="Посмотреть всех" />
                </button>
            )}
            {showAll && (
                <button
                    onClick={() => setShowAll(false)}
                    className="mt-[40px] text-2xl m-auto hover:opacity-70 transition-opacity duration-300"
                >
                    <img src="/minus.svg" alt="Закрыть" />
                </button>
            )}
        </div>
        <div className="flex flex-col mt-[40px]">
            <SectionHeading title="отзывы выпускников" />
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