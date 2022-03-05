import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding-task',
  templateUrl: './data-binding-task.component.html',
  styleUrls: ['./data-binding-task.component.css']
})
export class DataBindingTaskComponent implements OnInit {

  userName = '';

  constructor() { 
  }

  ngOnInit(): void {
  }

  checkUserNameIsEmpty(){
    return this.userName === '';
  }

  onClickResetUserName(){
    this.userName ='';
  }

}
