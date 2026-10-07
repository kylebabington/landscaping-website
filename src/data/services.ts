import type { LucideIcon } from 'lucide-react'
import {
  Flower2,
  HelpCircle,
  Leaf,
  Scissors,
  Snowflake,
  Sprout,
} from 'lucide-react'

export type Service = {
  id: string
  title: string
  description: string
  items: string[]
  icon: LucideIcon
}

export const services: Service[] = [
  {
    id: 'bed-cleanup',
    title: 'Bed Cleanup & Maintenance',
    description:
      'Keep garden beds looking intentional instead of overgrown and neglected.',
    items: [
      'Garden bed cleanup',
      'Weeding',
      'Edging',
      'Mulching',
      'Overgrown bed restoration',
      'General bed maintenance',
    ],
    icon: Leaf,
  },
  {
    id: 'planting',
    title: 'Planting & Garden Design',
    description:
      'Practical plant choices and layouts that suit your property and maintenance goals.',
    items: [
      'Plant installation',
      'Shrub installation',
      'Perennial planting',
      'Plant selection',
      'Garden bed design',
      'Transplanting',
      'Low-maintenance planting ideas',
    ],
    icon: Sprout,
  },
  {
    id: 'hedge-care',
    title: 'Hedge & Shrub Care',
    description:
      'Clean shaping and cleanup for hedges and shrubs — not arborist tree work.',
    items: [
      'Hedge trimming',
      'Shrub pruning',
      'Shaping',
      'Overgrown shrub cleanup',
      'Light shrub removal where appropriate',
    ],
    icon: Scissors,
  },
  {
    id: 'seasonal',
    title: 'Seasonal Cleanup',
    description:
      'Spring and fall resets that leave the landscape ready for the season ahead.',
    items: [
      'Spring cleanup',
      'Fall cleanup',
      'Leaf removal',
      'Perennial cutbacks',
      'General landscape cleanup',
    ],
    icon: Flower2,
  },
  {
    id: 'snow-ice',
    title: 'Snow & Ice',
    description:
      'Seasonal clearing so walks and drives stay usable when winter hits.',
    items: [
      'Snow shoveling',
      'Sidewalk clearing',
      'Walkway clearing',
      'Driveway clearing',
      'Salting',
    ],
    icon: Snowflake,
  },
  {
    id: 'something-else',
    title: 'Something Else?',
    description:
      "Have a landscaping project that isn't listed? Tell me what you need. If it's something I can help with, I'll let you know.",
    items: [],
    icon: HelpCircle,
  },
]
