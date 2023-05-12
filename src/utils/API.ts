import arcadeIcon from '../assets/images/icon-arcade.svg'
import advancedIcon from '../assets/images/icon-advanced.svg'
import proIcon from '../assets/images/icon-pro.svg'
import { Plan } from '../types/Plan'
import { PlanComplement } from '../types/PlanComplement'

export const planAPI = new Promise<Plan[]>((res, rej) => res(
  [
    {
      id: '1',
      title: 'arcade',
      periodWithPrice: [
        {
          price: 9,
          period: 'monthly'
        },
        {
          price: 90,
          period: 'yearly'
        }
      ],
      img: arcadeIcon
    },

    {
      id: '2',
      title: 'advanced',
      periodWithPrice: [
        {
          price: 12,
          period: 'monthly'
        },
        {
          price: 120,
          period: 'yearly'
        }
      ],
      img: advancedIcon
    },

    {
      id: '3',
      title: 'pro',
      periodWithPrice: [
        {
          price: 15,
          period: 'monthly'
        },
        {
          price: 150,
          period: 'yearly'
        }
      ],
      img: proIcon
    }
  ]
))

export const complementAPI = new Promise<PlanComplement[]>((res, rej) => res(
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