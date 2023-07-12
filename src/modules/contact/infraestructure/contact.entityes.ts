import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class contactEntity {

	@PrimaryColumn({type: 'varchar', length:100})
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
