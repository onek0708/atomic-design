// src/stories/index.js
import { storiesOf } from '@storybook/vue'
import VueInfoAddon from 'storybook-addon-vue-info'
import { withKnobs } from '@storybook/addon-knobs'

import AppHeader from '@/components/organisms/AppHeader.vue'

storiesOf(`organisms/AppHeader`, module)
  .addDecorator(VueInfoAddon)
  .addDecorator(withKnobs)
  .add('デフォルト', () => {
    return {
      components: { AppHeader },
      data () {
        return {
          navigations: [
            { label: 'ホーム', url: '#' },
            { label: '番組表', url: '#' },
            { label: '通知番組', url: '#', current: true },
            { label: 'お知らせ', url: '#' },
            { label: '設定', url: '#' }
          ]
        }
      },
      template: `
          <app-header :navigations="navigations" />
      `
    }
  })
