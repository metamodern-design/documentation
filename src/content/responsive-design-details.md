Limiting transitions to two breakpoints simplifies responsive design while optimizing for the most common screen sizes. Odd numbers of column units (11 and 17) are selected for the breakpoints so that a half or whole column-unit margin can be added on the left and right, such that the remaining number of column units will be divisible by 2 (10c, 16c), 3 (9c, 15c), 4 (16c), or 5 (10c, 15c). This allows for container widths of 576 or 640 px after the first breakpoint and 960 or 1024 px after the second breakpoint. A third breakpoint could be added at c21 (1344 px) to allow for a 20c (1280 px) container.

## Separator in Class Names

Metamodern's design system uses the underscore _ separator by default for responsive utility classes, as in *c11_w-full*. You can [customize this](https://tailwindcss.com/docs/configuration/#separator) by setting the *separator* key in an options object you pass to our configuration generator. When using *@metamodern/static*, you can include this option in your *metamodern.config.js* file under the key *designSystemConfig*.

## Turning on Responsive Variants

In our Tailwind configuration, all variants (responsive, hover, focus, etc.) are turned __off__ by default. See here for [documentation on how to turn on variants](https://tailwindcss.com/docs/configuring-variants/). These options can be passed to our configuration generator or included in a *metamodern.config.js* file under the key *designSystemConfig*.
