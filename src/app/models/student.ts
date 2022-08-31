import { Address } from "./address";

export interface Student {
  /**
   * Roll number of the student
   */
  rollNumber: string,

  /**
   * Name of the student
   */
  name: string,

  /**
   * Address of the student
   */
  address?: Address,

  /**
   * DOB of the student
   */
  dateOfBirth: Date,

  /**
   * Age of the student
   */
  age?: number,

  /**
   * Marks of the student
   */
  marks?:number[]
}
