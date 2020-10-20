import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const route = Router()

route.get('/orphanages', OrphanagesController.index)
route.post('/orphanages', OrphanagesController.create)

export default route
