import '../src/container';
import { Container } from '@betino/ioc';
import { ListMovementsService } from '../src/application/use-cases/list-movements.service';
import { containerInit } from '../src/container';
import { db } from '../src/infrastructure/persistance/db';


test('List account movements', async () => {
  await db.init();
  containerInit();
  const listMovementsService = Container.resolve<ListMovementsService>('ListMovementsService');

  const movements = await listMovementsService.execute('asd');

  expect(Array.isArray(movements)).toBe(true);

  movements.forEach(movement => {
    expect(movement).toEqual(expect.objectContaining({
      id: expect.any(String),
      amount: expect.any(Number)
    }));
  });
});
