import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transaction {
    if (type !== 'income' && type !== 'outcome') {
      throw new Error('Invalid operation');
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    if (type === 'outcome') {
      const balance = this.transactionsRepository.getBalance();

      if (balance.outcome !== balance.total)
        throw new Error('Its outcome is greater than the total');
    }

    return transaction;
  }
}

export default CreateTransactionService;
