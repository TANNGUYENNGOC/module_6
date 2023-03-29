import {Injectable} from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

  constructor() {
  }

  public importExcel(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader: FileReader = new FileReader();
      reader.onload = (e: any) => {
        const data: Uint8Array = new Uint8Array(e.target.result);
        const workbook: XLSX.WorkBook = XLSX.read(data, {type: 'array'});
        const worksheet: XLSX.WorkSheet = workbook.Sheets[workbook.SheetNames[0]];
        const json: any[] = XLSX.utils.sheet_to_json(worksheet, {raw: false});
        resolve(json);
      };
      reader.onerror = (e) => {
        reject(e);
      };
      reader.readAsArrayBuffer(file);
    });
  }

}
