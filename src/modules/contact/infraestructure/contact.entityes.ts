import { Entity, Column } from 'typeorm'

@Entity()
export class contactEntity {

	@Column({type: 'varchar', length:100})
	name: string

	@Column({type: 'varchar', length:100})
	lastname: string

	@Column({type: 'varchar', length:100})
	email:string

	@Column({type: 'varchar', length:100})
	phone:number

	@Column({type: 'boolean', default:true})
	active:boolean
}
