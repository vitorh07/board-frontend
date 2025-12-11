"use client";

import { useState } from 'react';

export default function Card({ title }: { title: string }) {
    const [checked, setChecked] = useState(false);

    return (
        <div className="bg-primary rounded-lg shadow-md p-4 m-2 flex items-start">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => setChecked(e.target.checked)}
                className="mr-4 w-5 h-5 mt-1"
            />
            <h2 className="text-lg font-semibold text-white break-words flex-1">{title}</h2>
        </div>
    );
}