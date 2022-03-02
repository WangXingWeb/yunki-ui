import { FunctionalComponent } from 'vue';
import { createFromIconfontCN } from '@ant-design/icons-vue';
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2363452_1cq4kvyw20p.js',
});
interface IconProps {
  type: string;
}
const Icon: FunctionalComponent<IconProps> = (props) => {
  return <IconFont type={props.type}></IconFont>;
};
export default Icon;
