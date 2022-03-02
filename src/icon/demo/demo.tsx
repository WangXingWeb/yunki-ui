import { defineComponent } from 'vue';
import { Icon } from '@castianta/yunki-ui';
import './demo.less';
const Demo = defineComponent({
  components: { Icon },
  setup() {
    return () => (
      <div style="font-size:30px;">
        <Icon class="yunki-icon" type="icon-satellite"></Icon>
        <Icon class="yunki-icon" type="icon-station"></Icon>
        <Icon class="yunki-icon" type="icon-telemetry"></Icon>
        <Icon class="yunki-icon" type="icon-star"></Icon>
        <Icon class="yunki-icon" type="icon-cloud"></Icon>
        <Icon class="yunki-icon" type="icon-weather"></Icon>
        <Icon class="yunki-icon" type="icon-server"></Icon>
        <Icon class="yunki-icon" type="icon-folder"></Icon>
        <Icon class="yunki-icon" type="icon-inject"></Icon>
        <Icon class="yunki-icon" type="icon-video"></Icon>
        <Icon class="yunki-icon" type="icon-plan"></Icon>
        <Icon class="yunki-icon" type="icon-fangda"></Icon>
        <Icon class="yunki-icon" type="icon-suoxiao"></Icon>
      </div>
    );
  },
});
export default Demo;
