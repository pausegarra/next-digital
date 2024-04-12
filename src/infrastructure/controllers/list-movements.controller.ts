import { Inject } from '@betino/ioc';
import { ListMovementsService } from '../../application/use-cases/list-movements.service';
import { Request, Response } from 'express';
import { ListMovementsResponse } from '../responses/list-movements.response';

export class ListMovementsController {
  constructor(
    @Inject('ListMovementsService') private readonly listMovementsService: ListMovementsService
  ) {}

  async exec(req: Request, res: Response) {
    try {
      const results = await this.listMovementsService.execute(req.params.accountId as string);

      res.json(new ListMovementsResponse(results));
    } catch (err: any) {
      console.log(err);
      res.status(500).json({
        message: 'Unhandled error'
      });
    }
  }
}