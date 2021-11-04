export const classes = [
    'artificer',
    'bard',
    'cleric',
    'druid',
    'paladin',
    'ranger',
    'sorcerer',
    'warlock',
    'wizard',
] as const

export type Class = typeof classes[number]