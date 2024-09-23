import { Injectable, UploadedFile } from '@nestjs/common';
import { BaseHttpService } from '@/share/services/baseHttp.service';
import { UploadDto } from './upload.dto';
import { join } from 'path';
import * as fs from 'fs';
import { ToolUtil } from '@/share/utils';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UploadService extends BaseHttpService {
  constructor(
    private configService: ConfigService,
    private toolUtil: ToolUtil,
  ) {
    super();
  }

  uploadImg(@UploadedFile() file: UploadDto) {
    const FileType = file.mimetype.slice(6);
    const UploadImgPath =
      this.configService.get('uploadImgDir') +
      `/${this.toolUtil.createUUID()}.${FileType}`;

    const writeImage = fs.createWriteStream(UploadImgPath);
    writeImage.write(file.buffer);
    return '上传成功';
  }
}
