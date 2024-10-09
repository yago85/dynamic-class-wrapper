import React from "react";
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
declare const DynamicClassWrapper: React.FC<DynamicClassWrapperProps>;
export default DynamicClassWrapper;
