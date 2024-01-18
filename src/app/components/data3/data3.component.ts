import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-data3',
  templateUrl: './data3.component.html',
  styleUrls: ['./data3.component.css']
})
export class Data3Component {
  @Input() tabindex:any;
  @Input() tabdata:any;
}
