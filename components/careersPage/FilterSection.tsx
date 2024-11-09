"use client"
import { useState } from 'react';

interface FilterProps {
    onSearch: (filters: { location: string;experience:number|null }) => void;
}

export default function FilterSection({ onSearch }: FilterProps) {
    const [location, setLocation] = useState<string>('');
    const [experience, setExperience] = useState<number|null>(null);

    return (
        <section className="bg-[#F5F5F5] p-5">
            <div className="flex flex-col md:flex-row items-center justify-center gap-5">
                <select
                    className="border border-[#00163D] p-3 w-60 rounded-md cursor-pointer"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                >
                    <option value="">Location</option>
                    <option value="Remote">Remote</option>
                    <option value="On-site">On-site</option>
                </select>
               
                <select
                    className="border border-[#00163D] p-3 w-60 rounded-md cursor-pointer"
                    value={experience ?? ""}
                    onChange={(e) => setExperience(e.target.value === '' ? null : Number(e.target.value))}
                >
                    <option value="">Experience</option>
                    <option value={1}>0</option>
                    <option value={2}>1</option>
                </select>
                <button
                    onClick={() => onSearch({ location,experience})}
                    className="bg-[#FF914D] text-white py-3 w-60 px-5 rounded-md cursor-pointer hover:bg-[#E35134] transition duration-200"
                >
                    Search
                </button>
            </div>
        </section>
    );
}
