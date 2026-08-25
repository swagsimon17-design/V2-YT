/**
 * The equation. y = Sum of w times x.
 *
 * Your goal is y. Every tile is an x. The weight is what that tile is worth
 * toward that goal. Each goal's weights add up to 100.
 *
 * Plain data. No AI key. Versioned in git, so it travels with you.
 * The mentor writes this with you. Empty until then, on purpose.
 */

export interface Goal {
  id: string
  /** One sharp sentence. This is y. */
  label: string
  /** tile slot -> what it is worth toward this goal. Adds up to 100. */
  weights: Record<string, number>
}

/** Your main goal, polished into one sentence with the mentor. */
export const OVERALL_GOAL = 'Spend less time stressing about my health and disability.'

/** Your goals. You can have more than one. */
export const DEFAULT_GOALS: Goal[] = [
  {
    id: 'spend-less',
    label: 'Spend less wasting money.',
    // Money Saved is the one tile that measures this directly: every skipped
    // waste gets logged as the amount not spent. Other tiles earn a share of
    // this goal only when Simon says what they are worth to it.
    weights: { 'money-saved': 100 },
  },
  {
    id: 'health',
    label: 'Spend less time stressing about my health and disability.',
    weights: {
      meds: 40,
      sleep: 30,
      mood: 20,
      workout: 10,
    },
  },
]
