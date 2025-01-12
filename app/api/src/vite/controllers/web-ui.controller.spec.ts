import { Test, TestingModule } from '@nestjs/testing';
import { WebUiController } from './web-ui.controller';

describe('WebUiController', () => {
  let controller: WebUiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WebUiController],
    }).compile();

    controller = module.get<WebUiController>(WebUiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
