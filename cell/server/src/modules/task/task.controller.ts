import { Body, Controller, Post, UseGuards, Param } from '@nestjs/common';
import { TaskService } from './task.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@/guards';
// import { OrganizationDto } from './organization.dto';

@ApiTags('task')
@UseGuards(AuthGuard)
@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  // 组织列表
  @Post('list')
  list() {
    return this.taskService.list();
  }
}
