
import { cn } from '@/lib/utils';
import { UsersIcon } from '@heroicons/react/24/solid'
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import React from 'react'

function EventHeader() {
    return (
        <header className="mb-12  h-full">
            <div className="text-center mb-8 bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-500 p-8 rounded-lg text-white">
                <HoverBorderGradientChip className="mb-4 bg-opacity-20 backdrop-filter backdrop-blur-lg">
                    <p className="flex items-center">
                        <UsersIcon className="mr-2 size-4" />
                        Events
                    </p>
                </HoverBorderGradientChip>
                <h2 className="mb-4 text-6xl font-bold">
                    Events
                </h2>
                <p className="max-w-3xl mx-auto text-lg font-medium">
                    Explore Keploy events and webinars. Learn from each other, move forward together, and celebrate what’s next. Whether you’re a developer, architect, tester, community manager, or something in-between, you’ll find something here.
                </p>
            </div>
        </header>
    )
}


function HoverBorderGradientChip({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn('flex justify-center text-center', className)}>
            <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
                {children}
            </HoverBorderGradient>
        </div>
    );
}

export default EventHeader