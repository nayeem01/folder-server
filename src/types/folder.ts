import { Document } from 'mongoose'
export interface folderTypes extends Document {
  id: any
  name: string
  parent: any
  children: ArrayBuffer
  ancestors: any
}
