import { storiesOf } from '@storybook/vue';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import TalButton from '../components/TalButton.vue';

export default {
  title: 'Example/TalButton',
  decorators: [withKnobs],
};

// Assign `props` to the story's component, calling
// knob methods within the `default` property of each prop,
// then pass the story's prop data to the component’s prop in
// the template with `v-bind:` or by placing the prop within
// the component’s slot.
export const exampleWithKnobs = () => ({
  components: { TalButton },
  props: {
    isDisabled: {
      default: boolean('Disabled', false),
    },
    text: {
      default: text('Text', 'Hello Storybook'),
    },
  },
  template: '<TalButton :isDisabled="isDisabled">{{ text }}</TalButton>',
});
