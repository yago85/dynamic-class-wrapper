"use client";

import React, {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import {clsx} from "clsx";
import {useTheme} from "next-themes";

interface DynamicClassWrapperProps {
    children: React.ReactNode;
    className?: string;
    fallbackClassName?: string;
    applyClassFor?: string;
    darkModeClass?: string;
    lightModeClass?: string;
    mobileClass?: string;
    tabletClass?: string;
    desktopClass?: string;
    contextClassMap?: Record<string, string>;
    context?: string;
}

const DynamicClassWrapper: React.FC<DynamicClassWrapperProps> = ({
                                                     children,
                                                     className,
                                                     fallbackClassName,
                                                     applyClassFor,
                                                     darkModeClass,
                                                     lightModeClass,
                                                     mobileClass,
                                                     tabletClass,
                                                     desktopClass,
                                                     contextClassMap = {},
                                                     context,
                                                 }) => {
    const pathname = usePathname();
    const {theme} = useTheme();
    const isRouteMatch = pathname === applyClassFor;

    const [screenClass, setScreenClass] = useState<string>("");

    useEffect(() => {
        const updateScreenClass = () => {
            if (window.innerWidth < 640) {
                setScreenClass(mobileClass || "");
            } else if (window.innerWidth < 1024) {
                setScreenClass(tabletClass || "");
            } else {
                setScreenClass(desktopClass || "");
            }
        };

        updateScreenClass();
        window.addEventListener("resize", updateScreenClass);

        return () => {
            window.removeEventListener("resize", updateScreenClass);
        };
    }, [mobileClass, tabletClass, desktopClass]);

    const contextClass = context ? contextClassMap[context] : "";

    return (
        <div
            className={clsx(
                isRouteMatch ? className : fallbackClassName,
                theme === "dark" ? darkModeClass : lightModeClass,
                screenClass,
                contextClass,
            )}
        >
      {children}
    </div>
    );
};

export default DynamicClassWrapper;
