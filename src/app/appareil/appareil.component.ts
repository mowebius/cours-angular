import { Component, OnInit, Input } from '@angular/core';
import { AppareilService} from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() id: number;
  @Input() appareilName: string;
  @Input() appareilStatus: string;
  @Input() index: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {}

  onSwitch() {
    if (this.appareilStatus === 'éteint') {
      this.appareilService.switchOnOne(this.index);
    }
    else {
      this.appareilService.switchOffOne(this.index);
    }
  }

  getStatus() {
    return this.appareilStatus;
  }

  getColor() {
    return (this.appareilStatus === 'éteint') ? 'red' : 'green';
  }

  getClass() {
    const classes = [ 'list-group-item' ];
    classes.push((this.appareilStatus === 'éteint') ? 'list-group-item-danger' : 'list-group-item-success');
    return classes;
  }

}
