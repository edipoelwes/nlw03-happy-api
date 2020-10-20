import { Router } from 'express'
import OrphanagesController from './controllers/OrphanagesController'

const route = Router()

route.get('/orphanages', OrphanagesController.index)
route.get('/orphanages/:id', OrphanagesController.show)
route.post('/orphanages', OrphanagesController.create)

export default route
