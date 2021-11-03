import { School } from './schools'

export interface Spell {
  id: string
  level: number
  name: string
  school: School
  castingTime: string
  range: string
  components: string
  duration: string
  description: string
  higherLevel?: string
  picture?: string
  selected?: boolean
}
