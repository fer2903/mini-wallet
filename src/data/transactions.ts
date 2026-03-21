import type { Transaction } from '../types/Transaction';

export const transactions: Transaction[] = [
    {
        id: 1,
        title: 'Freelance de website',
        amount: 5000,
        category: 'Trabalho',
        date: '2024-06-01'
    },
    {
        id: 2,
        title: 'Aluguel',
        amount: -1500,
        category: 'Casa',
        date: '2024-06-03'
    },
    {
        id: 3,
        title: 'Supermercado',
        amount: -300,
        category: 'Alimentação',
        date: '2024-06-05'
    },
    {
        id: 4,
        title: 'Salário',
        amount: 8000,
        category: 'Trabalho',
        date: '2024-06-10'
    }
]
