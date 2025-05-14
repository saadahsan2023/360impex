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
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-90 z-50">
            <div className="animate-spin h-12 w-12 border-4 border-[#7ed957] border-t-transparent rounded-full"></div>
        </div>
    );
}
