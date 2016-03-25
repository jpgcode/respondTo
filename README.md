#ResponsiveMatch utility
=====================
Method to detect breakpoints. It returns "true" if the conditions defined are met. This utiliy uses mobile-fist methodology.


##Support
IE10+
It uses [window.matchmedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia).

##Usage

Detect mobile breakpoint (max-width: 767px):
`responsiveMatch('mobile');`


Detect tablet breakpoint (min-width: 767px) and (max-width: 1023px):
`responsiveMatch('tablet');`

Detect desktop breakpoint (min-width: 1023px):
`responsiveMatch('desktop');`

Custom breakpoint. Just send a number with the breakpoint you want to use. It will use it in a max-width conditional:
`responsiveMatch(1280);`