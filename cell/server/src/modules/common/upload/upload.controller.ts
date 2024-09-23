import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { UploadService } from './upload.service';
import { UploadDto } from './upload.dto';
import { BaseException } from '@/share/exceptions/baseException';

@ApiTags('upload')
@Controller('upload')
export class UploadController {
  constructor(private uploadService: UploadService) {}

  @Post('img')
  @UseInterceptors(FileInterceptor('file'))
  uploadImg(@UploadedFile() file: UploadDto) {
    if (file.mimetype.indexOf('image/') === -1)
      throw new BaseException('仅支持jpg、jpeg、png格式的图片');

    return this.uploadService.uploadImg(file);
  }
}
