import Link from "next/link";
import { MouseEvent, useState } from "react";

import { motion } from "framer-motion";

import { menu } from "./menu"

export default function NavItemsContainer() {
    const { Products, Resources, Solutions } = menu;
    return (
        <>
            <ul className="relative flex items-center justify-between text-gray-600 font-medium">
                <li>
                    <Link target="_blank" href="https://keploy.io/devscribe">
                        <div className="px-4 py-2 rounded-full hover:bg-neutral-100 hover:text-secondary-300/80 border border-transparent hover:shadow-md hover:border-secondary-300/5 cursor-pointer transition-all">
                            DevScribe
                        </div>
                    </Link>
                </li>
                <NavItem item_name={"Products"}>
                    <div className="flex items-center gap-20">
                        <div className="flex flex-col gap-5 ">
                            {
                                Products?.categories?.map((category) => {
                                    return (
                                        <>
                                            <div>
                                                <div className="text-base text-secondary-300">
                                                    {category.title}
                                                </div>
                                                <div className="text-sm">
                                                    {category.description}
                                                </div>
                                            </div>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-base text-secondary-300 mb-3">
                                About Product
                            </div>
                            {
                                Products?.about?.map((item) => {
                                    return (
                                        <>
                                            <Link href={item.link} className="text-sm hover:underline">
                                                {item.title}
                                            </Link>
                                        </>
                                    )
                                })
                            }
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="text-base text-secondary-300 mb-3">
                                Features
                            </div>
                            {
                                Products?.features?.map((item) => {
                                    return (
                                        <>
                                            <Link href={item.link} className="text-sm hover:underline">
                                                {item.title}
                                            </Link>
                                        </>
                                    )
                                })
                            }
                        </div>

                    </div>
                </NavItem>
                <NavItem item_name={"Solutions"}>
                    <div className="flex gap-20">
                        <div>
                            <div className="text-base text-secondary-300 mb-5">
                                Solutions
                            </div>
                            <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                                {
                                    Solutions?.solutions?.map((item) => {
                                        return (
                                            <>
                                                <Link href={item.link} className="text-sm hover:underline">
                                                    {item.title}
                                                </Link>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div className="text-base text-secondary-300 mb-5">
                                Integrations
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    Solutions?.integrations?.map((item) => {
                                        return (
                                            <>
                                                <Link href={item.link} className="text-sm hover:underline">
                                                    {item.title}
                                                </Link>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </NavItem>
                <NavItem item_name={"Resources"}>
                    <div className="grid grid-cols-3 gap-x-20">
                        <div>
                            <div className="text-base text-secondary-300 mb-5">
                                Company
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    Resources?.company?.map((item) => {
                                        return (
                                            <>
                                                <Link href={item.link} className="text-sm hover:underline">
                                                    {item.title}
                                                </Link>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div className="text-base text-secondary-300 mb-5">
                                References
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    Resources?.references?.map((item) => {
                                        return (
                                            <>
                                                <Link href={item.link} className="text-sm hover:underline">
                                                    {item.title}
                                                </Link>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div>
                            <div className="text-base text-secondary-300 mb-5">
                                Contribute
                            </div>
                            <div className="flex flex-col gap-2">
                                {
                                    Resources?.contribute?.map((item) => {
                                        return (
                                            <>
                                                <Link href={item.link} className="text-sm hover:underline">
                                                    {item.title}
                                                </Link>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </NavItem>
                <li>
                    <Link target="_blank" href="https://keploy.io/docs">
                        <div className="px-4 py-2 rounded-full hover:bg-neutral-100 hover:text-secondary-300/80 border border-transparent hover:shadow-md hover:border-secondary-300/5 cursor-pointer transition-all">
                            Docs
                        </div>
                    </Link>
                </li>
            </ul>
        </>
    )
}

const NavItem = ({ item_name, children }: { item_name: string, children: React.ReactNode }) => {
    const [showFlyout, setShowFlyout] = useState(false);

    const handle_mouse_event = (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => {
        setShowFlyout(e.type === 'mouseenter');
    }

    return (
        <>
            <li onMouseEnter={handle_mouse_event} onMouseLeave={handle_mouse_event} className="relative">
                <div className="px-4 py-2 rounded-full hover:bg-neutral-100 hover:text-secondary-300/80 border border-transparent hover:shadow-md hover:border-secondary-300/5 cursor-pointer transition-all">
                    {item_name}
                </div>
                {
                    showFlyout &&
                    <div className={`absolute top-[calc(100%_+_0.5rem)] ${item_name === "Products" ? "left-1/1" : "left-1/2"} transform -translate-x-1/2 pt-4`}>
                        <motion.div
                            transition={{
                                type: "spring",
                                mass: 0.5,
                                damping: 11.5,
                                stiffness: 100,
                                restDelta: 0.001,
                                restSpeed: 0.001,
                            }}
                            layoutId="active"
                            className="bg-white backdrop-blur-sm rounded-2xl overflow-hidden border-2 border-secondary-300/15 shadow-xl"
                        >
                            <motion.div
                                layout
                                className="w-max h-full py-6 px-8"
                            >
                                {children}
                            </motion.div>
                        </motion.div>
                    </div>
                }
            </li >
        </>
    )
}