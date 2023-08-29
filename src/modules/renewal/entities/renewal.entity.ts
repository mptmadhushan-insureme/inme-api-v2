/**
 * @fileOverview - notification domain business entity
 */
import { Table, Column, Model } from 'sequelize-typescript';
import { AutoMap } from '@automapper/classes';

@Table
export class RenewalEntity extends Model {
  @AutoMap()
  @Column
  title: string;
  
  @AutoMap()
  @Column
  sub_title: string;

  @AutoMap()
  @Column
  date: string;

  @AutoMap()
  @Column
  documents: string;
  
  @AutoMap()
  @Column
  repeat: string;
}