'use client';

import { useLenis } from '../hooks/useLenis';

export const LenisProvider = ({ children }: { children: React.ReactNode }) => {
    useLenis();

    return <>{children}</>;
}; 