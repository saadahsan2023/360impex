'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState, useTransition } from 'react';

export default function RouteLoader() {
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        setLoading(true);

        // Simulate loading time
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 500); // Half second (adjust if needed)

        return () => clearTimeout(timeout);
    }, [pathname]);

    if (!loading && !isPending) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 backdrop-blur-sm z-50">
            <div className="relative">
                <div className="animate-spin h-16 w-16 border-4 border-t-[#7ed957] border-b-[#7ed957] border-l-transparent border-r-transparent rounded-full"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[#7ed957] text-xl font-semibold" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                    Loading...
                </div>
            </div>
        </div>
    );
}