import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/shared/service/modal.service';
import { ReadMoreModalComponent } from '../read-more-modal/read-more-modal.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-graph-view-modal',
  templateUrl: './graph-view-modal.component.html',
  styleUrls: ['./graph-view-modal.component.scss'],
})
export class GraphViewModalComponent implements OnInit {
  constructor(
    private modalSvc: ModalService,
    private activeModal: NgbActiveModal
  ) {}

  popoverBodyData = [
    {
      numberOfData: 5,
      heading: 'Mass',
      subHeading: 'Score average',
      showInstructions: false,
      instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
    },
    {
      numberOfData: 3,
      heading: 'No Heading',
      subHeading: 'Score average',
      showInstructions: false,
      instruction: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ipsa assumenda molestiae quos ratione aut magnam? Laborum excepturi dolor beatae impedit quidem maxime culpamsit? Mollitia veniam nobis aut odio dolorem minus recusandae ullam doloremque ratione adipisci atque, quod quas debitis dolor? Ea, itaque optio.`,
    },
  ];

  popoverChartOption: any = {
    backgroundColor: '#d1d1d1',
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      show: false,
    },
    yAxis: {
      type: 'value',
      splitLine: {
        show: false,
      },
      show: false,
      boundaryGap: [0, '0.5'],
    },
    series: [
      {
        data: [10, 30, 20, 25, 10, 35, 15],
        type: 'line',
        symbol: 'circle',
        symbolSize: 10,
        lineStyle: {
          color: 'gray',
          width: 2,
        },
        itemStyle: {
          color: 'green',
        },
      },
    ],
  };

  public heading: string = 'ASP';
  public subHeading: string = 'Module score';

  ngOnInit(): void {}

  public toggleInstruction(index: number): void {
    this.popoverBodyData[index].showInstructions =
      !this.popoverBodyData[index].showInstructions;
  }

  openReadMore() {
    this.modalSvc.open(ReadMoreModalComponent, {
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
  }

  close() {
    this.activeModal.close();
  }
}
