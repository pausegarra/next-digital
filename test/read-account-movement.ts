import '../src/container';
import { Container } from '@betino/ioc';
import { ListMovementsService } from '../src/application/use-cases/list-movements.service';

const listMovementsService = Container.resolve<ListMovementsService>('ListMovementsService');

test('List account movements', async () => {
  const movements = await listMovementsService.execute();

  expect(Array.isArray(movements)).toBe(true);

  movements.forEach(movement => {
    expect(movement).toEqual(expect.objectContaining({
      id: expect.any(String),
      amount: expect.any(Number)
    }));
  });
});
