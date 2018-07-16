import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.css']
})
export class CameraComponent implements OnInit {

  @ViewChild("video") public video: ElementRef;
  @ViewChild("canvas") public canvas: ElementRef;
  public captures: Array<any>;
  public isOpen: boolean = false;
  isVisible: boolean = false;

  constructor() {
    this.captures = [];
  }

  ngOnInit() {
  }

  openCamera() {

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      this.isOpen = true;
      navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
        this.video.nativeElement.src = window.URL.createObjectURL(stream);
        this.video.nativeElement.play();
      });
    } else {
      console.log("Camera not supported!")
    }
  }


  capture() {
    this.captures = [];
    this.isVisible = true;
    var context = this.canvas.nativeElement.getContext("2d").drawImage(this.video.nativeElement, 0, 0, 320, 240);
    this.captures.push(this.canvas.nativeElement.toDataURL("image/png"));
    if (this.captures) {
      // this.isVisible = true;
    }
  }
}
