import { EChartsOption } from 'echarts';
import { PopoverBodyData } from './popover-body-data.modal';

export interface Chart {
  heading: string;
  subHeading: string;
  chartOption: EChartsOption;
  popoverChartOption: EChartsOption;
  popoverBodyData: PopoverBodyData[];
  title: string;
}
