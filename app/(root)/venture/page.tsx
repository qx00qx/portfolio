'use client'

import Heading from "@/ui/heading/Heading";
import { MainLayout } from "../../widgets/Layout/MainLayout";
import SectionHeading from "@/ui/heading/SectionHeading";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper/modules";

export default function Venture() {
    return <MainLayout>
        <Heading text={"Венчур"} />
        <section id="about_venture" className="border-t-[1px] border-black">
            <div className="flex justify-between">
                <p className="text-2xl w-[700px] pt-[10px] ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quas tempore ab dolorum beatae alias accusamus facere molestiae perferendis nisi voluptatum iste quis ipsa, consequuntur obcaecati placeat! Exercitationem, totam fuga.
                </p>
                <img className="w-[455px] h-[477px] object-cover border-l-[1px] border-black" src="/placeholder.png" alt="" />
            </div>
        </section>
        <section id="portfolio_companies" className="my-[100px]">
            <SectionHeading title="портфельные компании" />
            <div className="py-[50px]">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    modules={[Autoplay]}
                    loop={true}
                    speed={5000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                    }}
                >
                    {[...Array(5)].map((_, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <img src="/placeholder.png" alt="" />
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    </MainLayout>;
} 