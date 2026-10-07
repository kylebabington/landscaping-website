/**
 * Recent work items. To show a real photo, set `imageSrc` to a path under
 * /public/images/ (e.g. '/images/garden-bed-cleanup.jpg').
 *
 * Optional before/after: set `beforeSrc` and `afterSrc` instead of (or in
 * addition to) `imageSrc`. The Portfolio component will render a simple
 * before/after layout when both are present.
 */
export type PortfolioItem = {
  id: string
  title: string
  imageSrc?: string
  beforeSrc?: string
  afterSrc?: string
}

export const portfolioItems: PortfolioItem[] = [
  { id: 'bed-cleanup', title: 'Garden Bed Cleanup' },
  { id: 'mulch-edging', title: 'Fresh Mulch & Edging' },
  { id: 'planting', title: 'Planting' },
  { id: 'hedge-cleanup', title: 'Hedge Cleanup' },
  { id: 'bed-design', title: 'Garden Bed Design' },
  { id: 'seasonal', title: 'Seasonal Cleanup' },
]
