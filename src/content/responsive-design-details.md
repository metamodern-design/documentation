Limiting transitions to three breakpoints simplifies responsive design while optimizing for the most common screen sizes. Odd numbers of column units (11, 17, and 21) are selected for the breakpoints so that a half or whole column-unit margin can be added on the left and right, such that the remaining number of column units will be divisible by 2 (10c, 16c, 20c), 3 (9c, 15c, 18c), 4 (16c, 20c), or 5 (10c, 15c, 20c). This allows for container widths of 576 or 640 px after the first breakpoint, 960 or 1024 px after the second breakpoint, and 1152 or 1280 px after the third breakpoint.

## Turning on Responsive Variants

In our Tailwind configuration, all variants (responsive, hover, focus, etc.) are turned __off__ by default. See here for [documentation on how to turn on variants](https://tailwindcss.com/docs/configuring-variants/). These options can be passed to our configuration generator.
