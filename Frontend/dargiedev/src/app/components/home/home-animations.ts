// animations.ts
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';

// testing animation
export const test = {
    animeTrigger:trigger('flyInOut', [
        state('in', style({ transform: 'translateY(0) scale(1)', opacity: 1, })),
        transition('void => *', [
          style({ transform: 'translateY(50%) scale(1)', opacity: 0 }),
          animate('0.9s 0.3s ease-in-out')
                     //animate("0.7s  0.5ms cubic-bezier(.9,-0.49,.36,1)")
        ]),
      ])
};

export const imageTextLeft = {
    animeTrigger:trigger('fadeInLeft', [
        state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
        transition('void => *', [
          style({ transform: 'translateX(-50%) scale(0.9)', opacity: 0 }),
          animate('0.9s ease-in-out')
        ]),
      ])
}

export const developmentTextLeft = {
  animeTrigger:trigger('DevFadeInLeft', [
      state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
      transition('void => *', [
        style({ transform: 'translateX(-20%) scale(0.9)', opacity: 0 }),
        animate('0.9s ease-in-out')
      ]),
    ])
}

export const iconsFromBottom = {
  firstIcon:trigger('iconBtmOne', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    transition('void => *', [
      style({ transform: 'translateY(140%) scale(0.9)', opacity: 0 }),
      animate('0.7s ease-in')
    ]),
  ]),
  secondIcon:trigger('iconBtmTwo', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    transition('void => *', [
      style({ transform: 'translateY(140%) scale(0.9)', opacity: 0 }),
      animate('0.7s 0.1s ease-in')
    ]),
  ]),
  thirdIcon:trigger('iconBtmThree', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    transition('void => *', [
      style({ transform: 'translateY(140%) scale(0.9)', opacity: 0 }),
      animate('0.6s 0.2s ease-in')
    ]),
  ]),
  fourthIcon:trigger('iconBtmFour', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    transition('void => *', [
      style({ transform: 'translateY(140%) scale(0.9)', opacity: 0 }),
      animate('0.6s 0.3s ease-in')
    ]),
  ]),
  fifthIcon:trigger('iconBtmFive', [
    state('in', style({ transform: 'translateX(0) scale(1)', opacity: 1, })),
    transition('void => *', [
      style({ transform: 'translateY(140%) scale(0.9)', opacity: 0 }),
      animate('0.6s 0.4s ease-in')
    ]),
  ])
}