import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { AddImageService } from './services/add-image.service';

@Component({
  selector: 'ngg-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Gallery';
  private dialogRef: MatDialogRef<FileuploadComponent> | null;
  constructor(private dialogue: MatDialog, private addImage: AddImageService) {
    
  }
  public ImportImage(): void {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.autoFocus = true;
    config.width = '500px';

    this.dialogRef = this.dialogue.open(FileuploadComponent, config);
    this.dialogRef.afterClosed().subscribe(r => {
      if (r) {
        this.addImage.add(r);
      }
    });

  }
}
