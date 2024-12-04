import { light } from '@fortawesome/fontawesome-svg-core/import.macro';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/**/**/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
  
      'drop-shadow-md':{
        filter : 'drop-shadow(0 4px 3px rgb(125,143,154/ 0.07)) drop-shadow(0 2px 2px rgb(125,143,154 / 0.06))'
      },
      fontFamily: {
        'sans': [
          'Open Sans',
          '-apple-system',
          'BlinkMacSystemFont',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ]},
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['"Open Sans","Raleway"'],
      'nav': ['"Poppins","Open Sans"'],
    },
    darkMode: 'selector',
    colors: {
      'gray-hover':{
        light:'#F7F5F2',
        dark:'#333333'
      },
      'error': {
        light: '#F81010'
      },
      'mode':{
        light:'#ffffff',
        dark:'#050405',
      },

      'text':{
        light:'#333333',
        dark:'#ededed'
      },
     'border':{
      light:'#03014C',
      dark:'#ffffff'
    },
    'input-label':{
      light:'#F6F6F6',
      dark:'#1c1c24'
    },
    'input-label-hover':{
      light:'#EDEDED',
      dark:'#ffffff'
    },
    'button1':{
      light:'#9b2491',
    },
    'button2':{
      light:'#E4269E'
    },
    'button3':{
      light:'#f4c13a'
    },



  
    },
    fontFamily: {
     // 'footer':['"javanese-Text"'],
  }
  },
  plugins: [
    //to clamp long text
    require('@tailwindcss/line-clamp'),
  ],
}

