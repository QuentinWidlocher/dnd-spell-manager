import { School } from './schools'

export interface SearchFormType {
  keyword: string
  level: number | null
  school: School | null
  selected: boolean | null
}
