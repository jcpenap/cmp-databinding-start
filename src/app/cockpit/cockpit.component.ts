import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();

  @ViewChild('serverNameInput', {static: true}) serverNameInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverContentInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent: serverContentInput.value
    });
  }

  onAddBlueprint(serverContentInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: this.serverNameInput.nativeElement.value,
      serverContent: serverContentInput.value
    });
  }

}
