import { RequestHandler } from 'express'
import Folder from '../models/folder'

export const addRoot: RequestHandler = async (req, res, next) => {
  try {
    const folder = await Folder.create([
      { _id: 'MongoDB', parent: 'Databases' },
      { _id: 'dbm', parent: 'Databases' },
      { _id: 'Databases', parent: 'Programming' },
      { _id: 'Languages', parent: 'Programming' },
      { _id: 'Programming', parent: 'root' },
      { _id: 'root', parent: null },
    ])
    res.status(200).json({
      success: true,
      data: folder,
    })
  } catch (error) {
    next(error)
  }
}

export const addFolder: RequestHandler = async (req, res, next) => {
  try {
    const newNode = await Folder.create(req.body)
    res.status(200).json({
      success: true,
      data: newNode,
    })
  } catch (error) {
    next(error)
  }
}
export const removeFolder: RequestHandler = async (req, res, next) => {
  try {
    await Folder.deleteMany({
      $or: [{ _id: req.body._id }, { parent: req.body._id }],
    })
    res.status(200).json({
      success: true,
    })
  } catch (error) {
    next(error)
  }
}
export const read: RequestHandler = async (req, res, next) => {
  try {
    const folders = await Folder.find()
    res.status(200).json({
      success: true,
      data: folders,
    })
  } catch (error) {
    next(error)
  }
}
