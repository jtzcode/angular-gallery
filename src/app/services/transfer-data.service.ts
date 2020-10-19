import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPictureModel } from '../types';
import { AddImageService } from './add-image.service';
import { LoadImageService } from './load-image.service';

@Injectable({
  providedIn: 'root'
})
export class TransferDataService {

  constructor(private client: HttpClient, private addImage: AddImageService, private loadImage: LoadImageService) { 
    
  }

  public Initialize(): void {
    this.subscribeToAddImageContextChanges();
    this.loadImageWithSubscription();
  }

  private subscribeToAddImageContextChanges() {
    const httpOptions = {
      headers:  new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.addImage.context.subscribe(message => {
      if (message === null) {
        return;
      }
      this.client.post<IPictureModel>('http://localhost:3000/add/', message,  httpOptions).subscribe(callback => {

      });
    });
  }

  private loadImageWithSubscription() {
    const httpOptions = {
      headers:  new HttpHeaders({
        'Content-Type': 'application/text'
      })
    };
    this.client.get<string[]>('http://localhost:3000/get/', httpOptions).subscribe(pictures => {
      pictures.forEach(pic => {
        this.client.get<IPictureModel>('http://localhost:3000/id/' + pic).subscribe(image => {
          if (image !== null) {
            this.loadImage.add(image);
          }
        });
      });
    });
  }
}
