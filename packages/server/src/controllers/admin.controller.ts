import { Router, Request, Response } from 'express';
import { create as createOrganization } from '../services/organization.service';
const router: Router = Router();

router.post('/', async (req: Request, res: Response) => {
    try {
        const organization = req.body.data;
        await createOrganization(organization);
    } catch (ex) {
        console.log(ex);
        res.send();
    }
});