import { Component, OnInit } from '@angular/core';
import { AddImageService } from 'src/app/services/add-image.service';
import { LoadImageService } from 'src/app/services/load-image.service';
import { TransferDataService } from 'src/app/services/transfer-data.service';
import { IPictureModel } from 'src/app/types';

@Component({
  selector: 'ngg-page-body',
  templateUrl: './page-body.component.html',
  styleUrls: ['./page-body.component.scss']
})
export class PageBodyComponent implements OnInit {
  Pictures: Array<IPictureModel>;
  constructor(private addImage: AddImageService, private loadImage: LoadImageService, private transfer: TransferDataService) {
    this.Pictures = new Array<IPictureModel>();
  }

  ngOnInit(): void {
    this.transfer.Initialize();
    this.addImage.context.subscribe(message => {
      if (!message) {
        return;
      }
      this.Pictures.push(message);
    });

    this.loadImage.context.subscribe(message => {
      if (!message) {
        return;
      }
      this.Pictures.push(message);
    });
  }

}
