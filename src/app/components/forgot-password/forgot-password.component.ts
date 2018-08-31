import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  title: string = 'recovery';
  @Input() logo: string;
  @Output() onRecovery = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.onRecovery.emit('Recovery');
  }

}
