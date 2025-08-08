import { Fondamento } from 'next/font/google'
import type { Config } from 'tailwindcss'
import { getAutomaticTypeDirectiveNames } from 'typescript'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-ubuntu)'],
      },
      colors: {
        candy: {
          50: '#f0fbfd',
          100: '#d0f3fa',
          200: '#b9eef8',
          300: '#98e6f4',
          400: '#85e1f2',
          500: '#66d9ef',
          600: '#5dc5d9',
          700: '#489aaa',
          800: '#387783',
          900: '#2b5b64',
        },
        lemon:{
          50: "#eaffe7",
          100: "#beffb3",
          200: "#9eff8f",
          300: "#72ff5c",
          400: "#57ff3c",
          500: "#2dff0b",
          600: "#29e80a",
          700: "#20b508",
          800: "#198c06",
          900: "#136b05",
        },
        gum:{
          50: "#fff2f9",
          100: "#fed5ed",
          200: "#fec1e4",
          300: "#fea5d7",
          400: "#fd93d0",
          500: "#fd78c4",
          600: "#e66db2",
          700: "#b4558b",
          800: "#8b426c",
          900: "#6a3252",
        },
        blueberry: {
          300: '#323842',
          600: '#151A2A',
          900: '#07061D'
        },
        background: '#030712',
        pistachio: '#D3FFCC',
        creem: '#E2DFCD',
        foam: '#D7DAE2',
        snow: '#FFFFFF',
        lemon_8:{
          50: "#f9fff8",
          100: "#ecffe9",
          200: "#e3ffde",
          300: "#d6ffcf",
          400: "#ceffc6",
          500: "#c2ffb8",
          600: "#b1e8a7",
          700: "#8ab583",
          800: "#6b8c65",
          900: "#516b4d",
        },
        guava_20:{
          50: "#fcfffb",
          100: "#f4fff2",
          200: "#efffec",
          300: "#e8ffe4",
          400: "#e3ffde",
          500: "#dcffd6",
          600: "#c8e8c3",
          700: "#9cb598",
          800: "#798c76",
          900: "#5c6b5a",
        },
        snow_80:{
          50: "#ffffff",
          100: "#ffffff",
          200: "#ffffff",
          300: "#ffffff",
          400: "#ffffff",
          500: "#ffffff",
          600: "#e8e8e8",
          700: "#b5b5b5",
          800: "#8c8c8c",
          900: "#6b6b6b",
        }
      }
    },
  },
  plugins: [],
}
export default config

