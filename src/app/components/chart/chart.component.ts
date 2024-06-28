import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Input,
  ViewChild,
} from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { EChartsOption } from 'echarts';
import { PopoverBodyData } from '../../models/popover-body-data.modal';
import { ECharts } from 'echarts/core';
import { ModalService } from 'src/app/shared/service/modal.service';
import { GraphViewModalComponent } from '../graph-view-modal/graph-view-modal.component';
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

  @Input() public title!: string;

  @Input() public subHeading!: string;

  @Input() public popoverChartOption!: EChartsOption;

  @Input() public popoverBodyData!: PopoverBodyData[];

  echartsInstance: ECharts | undefined;

  constructor(private modalSvc: ModalService) {}

  ngAfterViewInit(): void {
    window.dispatchEvent(new Event('resize'));
  }

  onChartInit(ec: ECharts) {
    this.echartsInstance = ec;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.echartsInstance) {
      this.echartsInstance.resize();
    }
  }

  public onclick(e: any, data: NgbPopover): void {
    this.modalSvc.open(GraphViewModalComponent, {
      data: {
        titleText: 'AdvancedSearch',
        confirmButtonText: 'Search',
        cancelButtonText: 'Reset',
      },
      options: {
        size: 'lg',
        centered: true,
      },
    });

    //This code sis for popover

    // this.dot.nativeElement.style.top =
    //   (e.event?.event.type === 'touchend'
    //     ? e.event?.event.changedTouches[0].pageY
    //     : e.event?.event.clientY) + 'px';
    // this.dot.nativeElement.style.left =
    //   (e.event?.event.type === 'touchend'
    //     ? e.event?.event.changedTouches[0].pageX
    //     : e.event?.event.clientX) + 'px';
    // data.open();
  }

  public toggleInstruction(index: number): void {
    this.popoverBodyData[index].showInstructions =
      !this.popoverBodyData[index].showInstructions;
  }
}
