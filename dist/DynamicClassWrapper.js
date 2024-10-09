"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var clsx_1 = require("clsx");
var next_themes_1 = require("next-themes");
var DynamicClassWrapper = function (_a) {
    var children = _a.children, className = _a.className, fallbackClassName = _a.fallbackClassName, applyClassFor = _a.applyClassFor, darkModeClass = _a.darkModeClass, lightModeClass = _a.lightModeClass, mobileClass = _a.mobileClass, tabletClass = _a.tabletClass, desktopClass = _a.desktopClass, _b = _a.contextClassMap, contextClassMap = _b === void 0 ? {} : _b, context = _a.context;
    var pathname = (0, navigation_1.usePathname)();
    var theme = (0, next_themes_1.useTheme)().theme;
    var isRouteMatch = pathname === applyClassFor;
    var _c = (0, react_1.useState)(""), screenClass = _c[0], setScreenClass = _c[1];
    (0, react_1.useEffect)(function () {
        var updateScreenClass = function () {
            if (window.innerWidth < 640) {
                setScreenClass(mobileClass || "");
            }
            else if (window.innerWidth < 1024) {
                setScreenClass(tabletClass || "");
            }
            else {
                setScreenClass(desktopClass || "");
            }
        };
        updateScreenClass();
        window.addEventListener("resize", updateScreenClass);
        return function () {
            window.removeEventListener("resize", updateScreenClass);
        };
    }, [mobileClass, tabletClass, desktopClass]);
    var contextClass = context ? contextClassMap[context] : "";
    return ((0, jsx_runtime_1.jsx)("div", { className: (0, clsx_1.clsx)(isRouteMatch ? className : fallbackClassName, theme === "dark" ? darkModeClass : lightModeClass, screenClass, contextClass), children: children }));
};
exports.default = DynamicClassWrapper;
