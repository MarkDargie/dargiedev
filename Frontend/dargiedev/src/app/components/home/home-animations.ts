// animations.ts
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// testing animation
export const test = {
  animeTrigger: trigger('flyInOut', [
    state('in', style({ transform: 'translateY(0) scale(1)', opacity: 1, })),
    transition('void => *', [
      style({ transform: 'translateY(50%) scale(1)', opacity: 0 }),
      animate('0.9s 0.3s ease-in-out')
      //animate("0.7s  0.5ms cubic-bezier(.9,-0.49,.36,1)")
    ]),
  ])
};

// Game display text next to video/image 
export const imageTextLeft = {
  animeTrigger: trigger('fadeInLeft', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    transition('void => *', [
      style({ transform: 'translateX(-50%) scale(0.9)', opacity: 0 }),
      animate('0.9s ease-in-out')
    ]),
  ])
}

// Development Text under header section
export const developmentTextLeft = {
  animeTrigger: trigger('DevFadeInLeft', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    state('out', style({ transform: 'translateX(0) scale(1)', opacity: 0, })),
    transition('out => in', [
      style({ transform: 'translateX(-20%) scale(0.9)', opacity: 0 }),
      animate('0.9s ease-in-out')
    ]),
  ])
}

// All social media icon animations
// these trigger with incremental delay when in view 
export const iconsFromBottom = {
  firstIcon: trigger('iconBtmOne', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    state('out', style({ transform: 'translateX(0) scale(1)', opacity: 0, })),
    transition('out => in', [
      style({ transform: 'translateY(140%) scale(0.5)', opacity: 0 }),
      animate('0.4s ease-in-out')
    ]),
  ]),
  secondIcon: trigger('iconBtmTwo', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    state('out', style({ transform: 'translateX(0) scale(1)', opacity: 0, })),
    transition('out => in', [
      style({ transform: 'translateY(140%) scale(0.5)', opacity: 0 }),
      animate('0.4s 0.1s ease-in-out')
    ]),
  ]),
  thirdIcon: trigger('iconBtmThree', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    state('out', style({ transform: 'translateX(0) scale(1)', opacity: 0, })),
    transition('out => in', [
      style({ transform: 'translateY(140%) scale(0.5)', opacity: 0 }),
      animate('0.4s 0.2s ease-in-out')
    ]),
  ]),
  fourthIcon: trigger('iconBtmFour', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    state('out', style({ transform: 'translateX(0) scale(1)', opacity: 0, })),
    transition('out => in', [
      style({ transform: 'translateY(140%) scale(0.5)', opacity: 0 }),
      animate('0.4s 0.3s ease-in-out')
    ]),
  ]),
  fifthIcon: trigger('iconBtmFive', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    state('out', style({ transform: 'translateX(0) scale(1)', opacity: 0, })),
    transition('out => in', [
      style({ transform: 'translateY(140%) scale(0.5)', opacity: 0 }),
      animate('0.5s 0.4s ease-in')
    ]),
  ])
}


// old backups of social icon animations

// secondIcon:trigger('iconBtmTwo', [
//   state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
//   transition('void => *', [
//     style({ transform: 'translateY(140%) scale(0.5)', opacity: 0 }),
//     animate('0.6s 0.1s ease-in')
//   ]),
// ]),
// thirdIcon:trigger('iconBtmThree', [
//   state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
//   transition('void => *', [
//     style({ transform: 'translateY(140%) scale(0.5)', opacity: 0 }),
//     animate('0.6s 0.2s ease-in')
//   ]),
// ]),
// fourthIcon:trigger('iconBtmFour', [
//   state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
//   transition('void => *', [
//     style({ transform: 'translateY(140%) scale(0.5)', opacity: 0 }),
//     animate('0.6s 0.3s ease-in')
//   ]),
// ]),
// fifthIcon:trigger('iconBtmFive', [
//   state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
//   transition('void => *', [
//     style({ transform: 'translateY(140%) scale(0.5)', opacity: 0 }),
//     animate('0.6s 0.4s ease-in')
//   ]),
// ])