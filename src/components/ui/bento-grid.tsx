"use client";

import { cn } from "@/lib/utils";

export interface BentoItem {
    title: string;
    description: string;
    icon: React.ReactNode;
    status?: string;
    tags?: string[];
    meta?: string;
    cta?: string;
    colSpan?: number;
    hasPersistentHover?: boolean;
    href?: string;
}

interface BentoGridProps {
    items: BentoItem[];
}

function BentoGrid({ items }: BentoGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-7xl mx-auto w-full">
            {items.map((item, index) => {
                const isLink = !!item.href;
                const Component = isLink ? 'a' : 'div';
                
                return (
                    <Component
                        key={index}
                        {...(isLink ? { href: item.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                        className={cn(
                            "group relative p-6 rounded-2xl overflow-hidden transition-all duration-300",
                            "border border-gray-200/50 dark:border-white/10 bg-white/5 dark:bg-black/40 backdrop-blur-xl",
                            "hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:hover:shadow-[0_8px_30px_rgba(255,255,255,0.06)]",
                            "hover:-translate-y-1 will-change-transform",
                            isLink ? "cursor-pointer" : "",
                            item.colSpan || "col-span-1",
                            item.colSpan === 2 ? "md:col-span-2" : "",
                            item.colSpan === 3 ? "md:col-span-3" : "",
                            {
                                "shadow-[0_8px_30px_rgb(0,0,0,0.12)] -translate-y-1": item.hasPersistentHover,
                                "dark:shadow-[0_8px_30px_rgba(255,255,255,0.06)]": item.hasPersistentHover,
                            }
                        )}
                    >
                        <div
                            className={`absolute inset-0 ${
                                item.hasPersistentHover
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-500`}
                        >
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:4px_4px]" />
                        </div>

                        <div className="relative flex flex-col h-full space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/5 dark:bg-white/10 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/20 transition-all duration-300">
                                    {item.icon}
                                </div>
                                <span
                                    className={cn(
                                        "text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-md",
                                        "bg-black/5 dark:bg-white/10 text-gray-700 dark:text-gray-200 border border-black/5 dark:border-white/10",
                                        "transition-colors duration-300 group-hover:bg-black/10 dark:group-hover:bg-white/20"
                                    )}
                                >
                                    {item.status || "Active"}
                                </span>
                            </div>

                            <div className="space-y-2 flex-grow">
                                <h3 className="font-semibold text-gray-900 dark:text-white tracking-tight text-lg">
                                    {item.title}
                                    {item.meta && (
                                        <span className="ml-3 text-xs text-blue-600 dark:text-blue-400 font-medium bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 rounded-md">
                                            {item.meta}
                                        </span>
                                    )}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
                                <div className="flex items-center space-x-2 flex-wrap gap-y-2">
                                    {item.tags?.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100/80 dark:bg-white/5 text-gray-600 dark:text-gray-300 transition-all duration-200 hover:bg-gray-200 dark:hover:bg-white/10"
                                        >
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                <span className={cn(
                                    "text-sm font-medium transition-all duration-300",
                                    "text-blue-600 dark:text-blue-400",
                                    item.hasPersistentHover ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
                                )}>
                                    {item.cta || "View PDF →"}
                                </span>
                            </div>
                        </div>

                        <div
                            className={`absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-transparent via-blue-500/5 to-transparent dark:via-blue-400/5 ${
                                item.hasPersistentHover
                                    ? "opacity-100"
                                    : "opacity-0 group-hover:opacity-100"
                            } transition-opacity duration-500 pointer-events-none`}
                        />
                    </Component>
                );
            })}
        </div>
    );
}

export { BentoGrid };
