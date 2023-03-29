import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import * as XLSX from 'xlsx';
import {User} from '../model/user';

@Component({
  selector: 'app-upload-excel',
  templateUrl: './upload-excel.component.html',
  styleUrls: ['./upload-excel.component.css']
})
export class UploadExcelComponent implements OnInit {
  data : User [] = [];
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    let workBook = null;
    let jsonData = null;
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      this.data = jsonData.Sheet1;
      console.log( this.data);
    }
    reader.readAsBinaryString(file);
  }


}
