import {Component, ElementRef, ViewChild} from '@angular/core';
import {AngularFireStorage} from '@angular/fire/storage';
import {finalize} from 'rxjs/operators';


class AngularFireStorag {
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'upload-firle';
  @ViewChild('uploadFile', {static: true}) public avatarDom: ElementRef | undefined;

  selectedImage: any = null;
  arrayPicture = '';

  constructor(private storage: AngularFireStorage) {
  }

  submit() {
    if (this.selectedImage != null) {
      const filePath = this.selectedImage.name;
      const fileRef = this.storage.ref(filePath);
      this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
        finalize(() => (fileRef.getDownloadURL().subscribe(url => {
          this.arrayPicture = url;
          console.log(url);
        })))
      ).subscribe();
    }
  }


  uploadFileImg() {
    this.selectedImage = this.avatarDom?.nativeElement.files[0];
    this.submit();
  }
}
