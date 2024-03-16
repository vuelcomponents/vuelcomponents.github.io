export default {
  root: (root) => {
   return ({
    class: [
      // Shape
      'rounded-lg',
      'shadow-xl',
      'border-0',

      // Size
      'max-h-[90vh]',
      root.props.rtl ? 'min-h-[90vh]' : null,
      root.props.rtl ?  'bg-surface-700 dark:bg-surface-800' : null,
      'w-full',
      'lg:w-4/5',

      'm-0',

      // Transitions
      'transform',
      'scale-100',

      // Color
      'dark:border',
      'dark:border-surface-700',

      // Maximized State
      {
        'transition-none': root.state.maximized,
        'transform-none': root.state.maximized,
        '!w-screen': root.state.maximized,
        '!h-screen': root.state.maximized,
        '!max-h-full': root.state.maximized,
        '!top-0': root.state.maximized,
        '!left-0': root.state.maximized
      }
    ]
  })},
  header: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-between',
      'shrink-0',

      // Spacing
      'px-8 pb-6 pt-4',

      // Shape
      'rounded-tl-lg',
      'rounded-tr-lg',

      // Colors
      'bg-surface-800 dark:bg-surface-800',
      'text-surface-700 dark:text-surface-0/80'
    ]
  },
  title: {
    class: ['font-semibold text-base leading-6']
  },
  icons: {
    class: ['flex items-center']
  },
  closeButton: {
    class: [
      'relative',

      // Flexbox and Alignment
      'flex items-center justify-center',

      // Size and Spacing
      'mr-2',
      'last:mr-0',
      'w-6 h-6',

      // Shape
      'border-0',
      'rounded-full',

      // Colors
      'text-surface-500',
      'bg-transparent',

      // Transitions
      'transition duration-200 ease-in-out',

      // States
      'hover:text-surface-100 dark:hover:text-surface-100',
      'hover:bg-ultra-100 dark:hover:bg-surface-800/80',
      'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset',
      'focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',

      // Misc
      'overflow-hidden'
    ]
  },
  maximizablebutton: {
    class: [
      'relative',

      // Flexbox and Alignment
      'flex items-center justify-center',

      // Size and Spacing
      'mr-2',
      'last:mr-0',
      'w-6 h-6',

      // Shape
      'border-0',
      'rounded-full',

      // Colors
      'text-surface-500',
      'bg-transparent',

      // Transitions
      'transition duration-200 ease-in-out',

      // States
      'hover:text-surface-700 dark:hover:text-white/80',
      'hover:bg-surface-100 dark:hover:bg-surface-800/80',
      'focus-visible:outline-none focus-visible:outline-offset-0 focus-visible:ring-1 focus-visible:ring-inset',
      'focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',

      // Misc
      'overflow-hidden'
    ]
  },
  closeButtonIcon: {
    class: [
      // Display
      'inline-block',

      // Size
      'w-3',
      'h-3'
    ]
  },
  maximizableicon: {
    class: [
      // Display
      'inline-block',

      // Size
      'w-3',
      'h-3'
    ]
  },
  content: ({ state, instance }) => ({
    class: [
      // Font
      'text-sm',
      // Spacing
      'px-8',
      'pb-8',
      'pt-0',

      // Shape
      {
        grow: state.maximized,
        'rounded-bl-lg': !instance.$slots.footer,
        'rounded-br-lg': !instance.$slots.footer
      },

      // Colors
      'bg-surface-800 dark:bg-surface-800',
      'text-surface-600 dark:text-surface-0/70',

      // Misc
      'overflow-y-auto'
    ]
  }),
  footer: {
    class: [
      // Flexbox and Alignment
      'flex items-center justify-end',
      'shrink-0',
      'text-right',
      'gap-3',

      // Spacing
      'px-6',
      'py-3',

      // Shape
      'border-t-0',
      'rounded-b-lg',

      // Colors
      'bg-surface-50 dark:bg-surface-700',
      'text-surface-700 dark:text-surface-0/80'
    ]
  },
  mask: ({ props, state }) => ({
    class: [
      // Transitions
      'transition',
      'duration-200',
      { 'p-5': !state.maximized },

      // Background and Effects
      { 'bg-surface-700/50 dark:bg-surface-950/50': props.modal, 'backdrop-blur-sm': props.modal }
    ]
  }),
  transition: ({ props }) => {
    return props.position === 'top'
      ? {
          enterFromClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0',
          enterActiveClass: 'transition-all duration-200 ease-out',
          leaveActiveClass: 'transition-all duration-200 ease-out',
          leaveToClass: 'opacity-0 scale-75 translate-x-0 -translate-y-full translate-z-0'
        }
      : props.position === 'bottom'
        ? {
            enterFromClass: 'opacity-0 scale-75 translate-y-full',
            enterActiveClass: 'transition-all duration-200 ease-out',
            leaveActiveClass: 'transition-all duration-200 ease-out',
            leaveToClass: 'opacity-0 scale-75 translate-x-0 translate-y-full translate-z-0'
          }
        : props.position === 'left' ||
            props.position === 'topleft' ||
            props.position === 'bottomleft'
          ? {
              enterFromClass: 'opacity-0 scale-75 -translate-x-full translate-y-0 translate-z-0',
              enterActiveClass: 'transition-all duration-200 ease-out',
              leaveActiveClass: 'transition-all duration-200 ease-out',
              leaveToClass: 'opacity-0 scale-75  -translate-x-full translate-y-0 translate-z-0'
            }
          : props.position === 'right' ||
              props.position === 'topright' ||
              props.position === 'bottomright'
            ? {
                enterFromClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75 translate-x-full translate-y-0 translate-z-0'
              }
            : {
                enterFromClass: 'opacity-0 scale-75',
                enterActiveClass: 'transition-all duration-200 ease-out',
                leaveActiveClass: 'transition-all duration-200 ease-out',
                leaveToClass: 'opacity-0 scale-75'
              };
  }
};
