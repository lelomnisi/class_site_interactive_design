TweenMax.set( '#slide-2', { xPercent: 100 })
TweenMax.to( '#slide-1', 1, { xPercent: -100, ease: Expo.easeInOut } )
TweenMax.to( '#slide-2', 1, { xPercent: 0, delay: 1, ease: Expo.easeInOut } )
TweenMax.to( '#slide-3', 1, { xPercent: 100, ease: Expo.easeInOut } )
