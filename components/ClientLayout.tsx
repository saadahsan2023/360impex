'use client';
import React from 'react';
import Header from './Header';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
