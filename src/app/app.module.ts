import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MainComponent } from './components/main/main.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ChartComponent } from './components/chart/chart.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [AppComponent, MainComponent, ChartComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxEchartsModule.forRoot({
      /**
       * This will import all modules from echarts.
       * If you only need custom modules,
       * please refer to [Custom Build] section.
       */
      echarts: () => import('echarts'), // or import('./path-to-my-custom-echarts')
    }),
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
