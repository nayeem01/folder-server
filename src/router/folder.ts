import { Router } from 'express'
import { addFolder, removeFolder, read, addRoot } from '../controller/folder'
const router = Router()

router.post('/addRoot', addRoot)
router.post('/addFolder', addFolder)
router.delete('/remove', removeFolder)
router.get('/', read)
export default router
