import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  list : Todo [] = [
    {
      task: "Order/Pack tickets",
      completed: true,
    },
    {
      task: "Pack scarf",
      completed: false,
    },
    {
      task: "Pack bandana",
      completed: false,
    },
    {
      task: "Pack water",
      completed: false,
    },
    {
      task: "Pack sunscreen",
      completed: false,
    },
    {
      task: "Pack snacks",
      completed: false,
    },
    {
      task: "Pack group food",
      completed: true,
    },
    {
      task: "Pack tifo",
      completed: false,
    },
  ]

  addTask(form: NgForm): void {
    let newTodo: Todo = {
      task: form.form.value.task,
      completed: false
    };
    this.list.push(newTodo);
  }

  completeTask(form: NgForm): void {  
    this.list[form.form.value.completed].completed = true;
  }
}
