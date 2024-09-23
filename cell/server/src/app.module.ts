import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
// modules
import { UploadModule } from '@modules/common/upload';
import { AuthModule } from '@modules/auth';
import { OrganizationModule } from '@modules/organization';
import { TaskModule } from '@modules/task';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // 静态资源目录
    ServeStaticModule.forRoot({
      rootPath: new ConfigService().get('static_dir'),
    }),
    // mysql 连接参数
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '115.29.243.9',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'cell',
      autoLoadEntities: true,
      synchronize: false,
    }),
    // modules
    UploadModule,
    AuthModule,
    OrganizationModule,
    TaskModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
