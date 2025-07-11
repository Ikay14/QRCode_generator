import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3000);
  console.log(`app is listening on Port ${process.env.PORT || 3000}`)
}
bootstrap().catch(err => {
  console.error('Error during bootstrap', err);
  process.exit(1);
});
