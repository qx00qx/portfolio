'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useState } from 'react'
import Input from '../Input/Input'

const contactFormSchema = z.object({
    name: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
    email: z.string().email('Введите корректный email'),
    phone: z.string()
        .min(10, 'Номер телефона должен содержать минимум 10 цифр')
        .regex(/^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
            'Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX'),
    username: z.string().min(5, 'Имя пользователя должно содержать минимум 5 символов'),
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
        },
    })

    const onSubmit = async (data: ContactFormValues) => {
        try {
            setIsSubmitting(true)
            /* TODO: логика отправки данных */
            await new Promise(resolve => setTimeout(resolve, 1000))
            setSubmitStatus('success')
            reset()
        } catch (error) {
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-[40px] max-w-[527px] mx-auto">
            <div>
                <Input
                    {...register('name')}
                    type="text"
                    id="name"
                    placeholder="имя"
                    className="border-black placeholder-black placeholder:lowercase placeholder:text-xl placeholder:opacity-50"
                />
                {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
            </div>

            <div>
                <Input
                    {...register('email')}
                    type="email"
                    id="email"
                    placeholder="ваш email"
                    className="border-black placeholder-black placeholder:lowercase placeholder:text-xl placeholder:opacity-50"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
            </div>

            <div>
                <Input
                    {...register('phone')}
                    type="phone"
                    id="phone"
                    placeholder="+7(900)000-00-00"
                    className="border-black placeholder-black placeholder:lowercase placeholder:text-xl placeholder:opacity-50"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
            </div>

            <div>
                <Input
                    {...register('username')}
                    type="text"
                    id="username"
                    placeholder="@username телеграм"
                    className="border-black placeholder-black placeholder:lowercase placeholder:text-xl placeholder:opacity-50"
                />
                {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
            </div>


            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full text-xl flex justify-center py-2 px-4 bg-black lowercase text-white disabled:opacity-50"
            >
                {isSubmitting ? 'Отправка...' : 'Оставить заявку'}
            </button>

            {submitStatus === 'success' && (
                <p className="text-green-600 text-sm">Заявка успешно отправлена!</p>
            )}
            {submitStatus === 'error' && (
                <p className="text-red-600 text-sm">Произошла ошибка при отправке.</p>
            )}
        </form>
    )
} 