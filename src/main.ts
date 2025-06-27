import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { log } from 'console';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 5050
  await app.listen(process.env.PORT || 3000);
  console.log(`app is listening on Port ${port}`)
}
bootstrap().catch(err => {
  console.error('Error during bootstrap', err);
  process.exit(1);
});
