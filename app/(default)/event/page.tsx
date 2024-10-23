"use client"

import React from 'react'
import EventHeader from './_components/eventheader'
import Button from '@mui/material/Button'

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, ClockIcon, } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

import { events } from './_data/events'

function EventPage() {
    return (
        <div className='min-h-screen mt-20 container'>
            <div className='container mx-auto px-4 py-12'>
                <EventHeader />
                <div className="space-y-12">
                    <section>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {events.map((event, index) => (
                                <Card
                                    key={index}
                                    className="group overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl flex flex-col h-full"
                                >
                                    <div className="relative h-52 overflow-hidden">
                                        <Image
                                            src={`https://wsrv.nl/?url=${event.banner.url}`}
                                            alt={event.title}
                                            layout="fill"
                                            objectFit="cover"
                                            className="transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <CardHeader>
                                        <CardTitle className="text-2xl font-bold">
                                            {event.title}
                                        </CardTitle>
                                        <CardDescription className="text-sm text-gray-400 truncate">
                                            {event.subtitle}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="flex-grow space-y-2">
                                        <div className="flex items-center text-sm">
                                            <CalendarIcon className="mr-2 h-4 w-4 text-gray-500" />
                                            <span>
                                                {new Date(event.startsAt).toLocaleString()}
                                            </span>
                                        </div>
                                        <div className="flex items-center text-sm">
                                            <ClockIcon className="mr-2 h-4 w-4 text-gray-500" />
                                            <span>{event.duration} minutes</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {event.tags.slice(0, 3).map((tag, index) => (
                                                <Badge key={index} className="mr-2">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        <button
                                            className="w-full bg-yellow-400 hover:bg-yellow-500  py-2 px-4 rounded-md"
                                        >
                                            <Link href={event.registerURL || '#'} target="_blank">
                                                Register Now
                                            </Link>
                                        </button>
                                    </CardFooter>
                                </Card>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default EventPage