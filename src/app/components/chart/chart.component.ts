import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { EChartsOption, ECElementEvent } from 'echarts';
import * as echarts from 'echarts';
import { PopoverBodyData } from '../../models/popover-body-data.modal';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements AfterViewInit {
  @ViewChild('chart') private chart!: ElementRef;
  @ViewChild('dot') private dot!: ElementRef<HTMLDivElement>;

  @Input() public chartOption!: EChartsOption;

  @Input() public heading!: string;

  @Input() public subHeading!: string;

  @Input() public popoverChartOption!: EChartsOption;

  @Input() public popoverBodyData!: PopoverBodyData[];

  ngAfterViewInit(): void {
    echarts.init(this.chart.nativeElement, 'dark');
  }

  public onclick(e: ECElementEvent | any, data: NgbPopover): void {
    console.log(e);

    this.dot.nativeElement.style.top =
      (e.event?.event.type === 'touchend'
        ? e.event?.event.changedTouches[0].pageY
        : e.event?.event.clientY) + 'px';
    this.dot.nativeElement.style.left =
      (e.event?.event.type === 'touchend'
        ? e.event?.event.changedTouches[0].pageX
        : e.event?.event.clientX) + 'px';
    data.open();
  }

  public toggleInstruction(index: number): void {
    this.popoverBodyData[index].showInstructions =
      !this.popoverBodyData[index].showInstructions;
  }
}
