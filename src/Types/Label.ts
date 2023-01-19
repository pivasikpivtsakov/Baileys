export interface LabelAssociation {
	id: string
	labelId: string
	associatioinId: string
	type: string
}

export type LabelMutation = {
	index: string
	labeled: boolean
}