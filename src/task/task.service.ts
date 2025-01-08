import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Task } from '@prisma/client';

@Injectable()
export class TaskService {

  constructor(private prisma: PrismaService) { }

  async getAllTasks(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async getTaskById(id: number): Promise<Task> {
    return this.prisma.task.findUnique({ where: { id } });
  }

  async createTask(data: Task): Promise<Task> {
    return this.prisma.task.create({ data });
  }

  async updateTask(id: number, data: Task): Promise<Task> {
    return this.prisma.task.update({ where: { id }, data });
  }
  async DeleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({ where: { id } });
  }

  /*  estructura creada por nest g res task
  create(createTaskDto: CreateTaskDto) {
    return 'This action adds a new task';
  }

  findAll() {
    return `This action returns all task`;
  }

  findOne(id: number) {
    return `This action returns a #${id} task`;
  }

  update(id: number, updateTaskDto: UpdateTaskDto) {
    return `This action updates a #${id} task`;
  }

  remove(id: number) {
    return `This action removes a #${id} task`;
  }*/
}
