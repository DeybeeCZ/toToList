import { Component } from '@angular/core'

@Component({
    selector: 'task',
    templateUrl: './addtask.component.html'
})

export class AddTaskComponent {
    title: string = 'ToDoList'
    taskes: Array<string> = []
    taskesInProgres: Array<string> = []
    taskesEnd: Array<string> = []
    task: string

    addTask = () => {
        this.taskes.push(this.task);
        this.task = '';
    }

    moveTaskToinProgress = (index: number) => {
        console.log('tarea',this.taskes[index]);
        this.taskesInProgres.push(this.taskes[index]);
        this.taskes.splice(index,1);
    }

    moveInProgressTaskToEnd = (index: number) => {
        this.taskesEnd.push(this.taskesInProgres[index]);
        this.taskesInProgres.splice(index,1);
    }
}