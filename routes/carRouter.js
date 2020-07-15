const express =require('express')

const carDb = require('../data/connection')

const router = express.Router()

router.get('/', (req, res) => {
    carDb('car-dealer')
    .then(cars => {
      res.json(cars); 
    })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
  });

  router.post('/', (req,res)=>{
    const data = req.body
    carDb('car-dealer')
    .insert(data)
    .then(item =>{
        res.status(201).json(data)
    })
    .catch(err =>{
        res.status(500).json({message: 'car info not posted'})
    })
})

router.post("/", (req, res) => {
    const carData = req.body;

    // validate the data

    carDb('car-dealer')
        .insert(carData, "id")
        .then(ids => {
            accountDB("accounts")
                .where({ id: ids[0] })
                .first()
                .then(accounts => {
                    res.status(200).json({ data: accounts });
                });
        })
        .catch(error => {
            res.status(500).json(error)
         })
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;
    const car = req.body;

    carDb('car-dealer')
        .where({ id })
        .update(changes) // don't forget to have a WHERE
        .then(count => {
            // count is the number of records updated
            if (count > 0) {
                res.status(200).json({message:`${car.make} updated with the following the information`, id, changes_made:`Mileage ${changes.mileage} Title status ${changes.title_status}`});
            } else {
                res.status(404).json({ message: "there was no accoutn to update" });
            }
        })
        .catch(error => {
            res.status(500).json(error)
         })
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    const removed1 = req.body

    carDb('car-dealer')
        .where({ id })
        .del(removed1) // don't forget to have a where
        .then(count => {
            // count is the number of records deleted
            if (count > 0) {
                res.status(200).json({message:'Car Deleted', id, data: req.body});
            } else {
                res.status(404).json({ message: "there was no record to delete" });
            }
        })
        .catch(error => {
            res.status(500).json(error)
         })
});

module.exports = router;