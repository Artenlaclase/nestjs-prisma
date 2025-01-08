import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from '@prisma/client';
import { Put } from '@nestjs/common';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  async createTask(@Body() data: Task) {
    return this.taskService.createTask(data);
  }

  @Get()
 async getAllTasks() {
    return this.taskService.getAllTasks();
  }

  @Get(':id')
  async getTaskById(@Param('id') id: string) {
    return this.taskService.getTaskById(Number(id));
  }

  @Put(':id')
  async updateTask(@Param('id') id: string, @Body() data: Task) {
    return this.taskService.updateTask(Number(id), data);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return this.taskService.DeleteTask(Number(id));
  }
}


