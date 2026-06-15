import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send({names: ['chinomso', 'debby', 'aisha', 'christabel']})
})
router.post('/', (req, res) => {
    const {username, password} = req.body
    console.log(username)
    console.log(password)
    res.send({user: username,
        pass:password
    })
})
router.get('/result', (req, res) => {
    res.send()
})
router.get('/:id', (req, res) => {
    const ID = req.params.id
    res.send({message : "hello world", value: ID})
})

export default router