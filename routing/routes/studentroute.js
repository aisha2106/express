import express from 'express';
import getStudents from '../controllers/studentController.js';

const router = express.Router();

router.get('/', getStudents)

router.post('/', (req, res) => {
    const {username, password} = req.body
})
router.get('/result', (req, res) => {
    res.send()
})
router.get('/:id', (req, res) => {
    res.send()
})

export default router