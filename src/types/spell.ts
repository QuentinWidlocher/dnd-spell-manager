export interface Spell {
	level: number,
	name: string,
	type: string,
	castingTime: string,
	range: string,
	components: string,
	duration: string,
	description: string,
	higherLevelDescrption?: string,
	castedBy: string,
	picture?: string,
}