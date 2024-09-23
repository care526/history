import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { ToolUtil } from '@/share/utils';

@Module({
  imports: [],
  providers: [UploadService, ToolUtil],
  controllers: [UploadController],
})
export class UploadModule {}
