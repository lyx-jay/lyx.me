import { defineConfig } from 'unocss'
import { presetUno, presetAttributify, presetWebFonts } from 'unocss'
export default defineConfig({
  presets: [
    presetAttributify(),
    presetUno()
  ],
})