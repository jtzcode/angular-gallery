import { Component, OnInit } from '@angular/core';
import { IPictureModel } from 'src/app/types';
import { MatDialogRef } from '@angular/material/dialog';
import { FilePreviewServiceService } from 'src/app/services/file-preview-service.service';

@Component({
  selector: 'ngg-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.scss']
})
export class FileuploadComponent implements OnInit {

  protected imageSource: IPictureModel | null;
  protected message: any;
  protected description: string;
  protected tag: string;

  constructor(private dialog: MatDialogRef<FileuploadComponent>,
    private preview: FilePreviewServiceService) {

    }

  ngOnInit(): void {
  }

  public OnImageSelected(files: any): void {
    this.preview.Preview(files).then(r => {
      this.imageSource = r;
    }).catch(r => {
      this.message = r;
    });
  }

  public Save(): void {
    this.imageSource.Description = this.description;
    this.imageSource.Tag = this.tag;
    this.dialog.close(this.imageSource);
  }

}
