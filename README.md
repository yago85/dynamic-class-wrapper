
# Dynamic Class Wrapper

dynamic-class-wrapper is a customizable wrapper component for Next.js that dynamically applies classes based on the route, theme mode, device size, and optional context.
## Installation

Install my-project with npm

```bash
npm install dynamic-class-wrapper
```

## Basic Usage
You can wrap your content with the DynamicClassWrapper component and set conditional classes based on specific routes, themes, or screen sizes.

```javascript
import DynamicClassWrapper from "dynamic-class-wrapper";

export default function MyApp() {
  return (
    <DynamicClassWrapper
      applyClassFor="/about"
      className="about-class"
      fallbackClassName="default-class"
    >
      <main>Your content here</main>
    </DynamicClassWrapper>
  );
}
```


## Props


| Prop             | Type                         | Description                                              |
|------------------|------------------------------|----------------------------------------------------------|
| `className`      | `string`                     | Classes to apply for a specific route.                   |
| `fallbackClassName` | `string`                  | Classes to apply for other routes.                       |
| `applyClassFor`  | `string`                     | Route for which `className` is applied.                  |
| `darkModeClass`  | `string`                     | Classes to apply in dark mode.                           |
| `lightModeClass` | `string`                     | Classes to apply in light mode.                          |
| `mobileClass`    | `string`                     | Classes to apply on mobile devices.                      |
| `tabletClass`    | `string`                     | Classes to apply on tablets.                             |
| `desktopClass`   | `string`                     | Classes to apply on desktop devices.                     |
| `contextClassMap`| `Record<string, string>`     | Class map for each context, e.g., `{home: "home-bg"}`.   |
| `context`        | `string`                     | Context defining the classes to apply.                   |



## Examples

### Example 1: Applying Classes Based on Route
Use applyClassFor to set a class for a specific route, and a fallback for others.

```javascript
<DynamicClassWrapper
  applyClassFor="/about"
  className="bg-about-page"
  fallbackClassName="bg-default"
/>
```

### Example 2: Applying Dark and Light Mode Classes
Combine darkModeClass and lightModeClass to adjust styles based on the current theme.

```javascript
<DynamicClassWrapper
  darkModeClass="bg-dark-mode"
  lightModeClass="bg-light-mode"
/>
```
### Example 3: Responsive Design with Mobile, Tablet, and Desktop Classes
Set device-specific classes with mobileClass, tabletClass, and desktopClass.

```javascript
<DynamicClassWrapper
  mobileClass="bg-mobile"
  tabletClass="bg-tablet"
  desktopClass="bg-desktop"
/>
```
### Example 4: Using Context to Define Specific Classes
Define classes based on the context of the page, such as home or about, for even more control.
```javascript
<DynamicClassWrapper
  context="home"
  contextClassMap={{
    home: "bg-home-page",
    about: "bg-about-page",
  }}
/>
```
## License

[MIT](https://choosealicense.com/licenses/mit/)
