module.exports = {
  purge: {
    enabled: process.env.HUGO_ENVIRONMENT === 'production',
    content: [
      'layouts/**/*.html',
      'config.toml',
      'content/**/*.html',
      'assets/js/search.js',
    ],
  },
  plugins: [require('@tailwindcss/typography')],

  theme: {
    extend : {
      colors: {
        'efs-beige': '#fffffe',
        'efs-red': '#ca6562',
        'efs-gray': '#7f7f7f',
        'efs-turq': '#a5d4d9',
        'efs-logo': '#63A8A6',
        'efs-header': '#648e8a'
      },
      borderRadius: {
        'xl' : '2.75rem'
      },
      transitionProperty: {
        'height' : 'height',
        'blur' : 'blur'
      }
    }
  },

  variants: {
    extend: { 
      height: ['hover', 'group-hover'],
      rounded: ['hover', 'group-hover'],
      transitionProperty: ['hover', 'group-hover'],
      display: ['hover', 'group-hover'],
      blur: ['hover', 'group-hover'],
      animation: ['hover', 'group-hover'],
      backgroundOpacity: ['active'],
      shadow: ['hover', 'group-hover'],
      visibility: ['hover', 'group-hover'],
      ringWidth: ['hover'],
      ringColor: ['hover']
    }
  }
};
