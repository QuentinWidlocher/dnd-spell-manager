export interface Spell {
	id: string,
	level: number,
	name: string,
	school: string,
	castingTime: string,
	range: string,
	components: string,
	duration: string,
	description: string,
	higherLevel?: string,
	picture?: string,
	selected?: boolean,
}