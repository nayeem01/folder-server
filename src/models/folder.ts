import { model, Schema } from 'mongoose'
import { folderTypes } from '../types/folder'

const folderSchema = new Schema<folderTypes>(
  {
    _id: {
      type: String,
    },
    parent: {
      type: String,
    },
  },
  { timestamps: true }
)
export default model<folderTypes>('Folder', folderSchema)
