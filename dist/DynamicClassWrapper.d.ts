import React from "react";
interface PageWrapperProps {
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
declare const PageWrapper: React.FC<PageWrapperProps>;
export default PageWrapper;
