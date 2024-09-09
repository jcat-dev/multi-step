import { Complement } from '../types/Complement'

export const complementAPI = new Promise<Complement[]>((res, rej) => res(
  [
    {
      id: '1',
      title: 'Online service',
      info: [
        'Access to multiplayer games'
      ],
      periodWithPrice: [
        {
          price: 1,
          period: 'monthly'
        },
        {
          price: 10,
          period: 'yearly'
        }
      ]
    },

    {
      id: '2',
      title: 'Larger storage',
      info: [
        'Extra 1TB of cloud save'
      ],
      periodWithPrice: [
        {
          price: 2,
          period: 'monthly'
        },
        {
          price: 20,
          period: 'yearly'
        }
      ]
    },

    {
      id: '3',
      title: 'Customizable Profile',
      info: [
        'Custom theme on your profile'
      ],
      periodWithPrice: [
        {
          price: 2,
          period: 'monthly'
        },
        {
          price: 20,
          period: 'yearly'
        }
      ]
    }
  ]
))