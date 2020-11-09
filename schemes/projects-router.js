const express = require('express') // import express
//import modal or db here
// const Projects = require('./projects-modal.js)
const router = express.Router();// instantiate router


router.get('/routerTest', (req, res) => {
  res.status(200).json({ router: "Test GET request from projects-router"})
})

//(insert api routes here (with abbreviated url))
// router.get('/', (req, res) => {...}
// router.get('/:id', (req, res) => {...}
// router.post('/', (req, res) => {...}
// router.delete('/:id', (req, res) => {...}
// router.put('/:id', (req, res) => {...}


module.exports = router; //export default router;



/* 

- [ ] Build an API with endpoints for:

- [ ] adding resources.
- [ ] retrieving a list of resources.

- [ ] adding projects.
- [ ] retrieving a list of projects.

- [ ] adding tasks.
- [ ] retrieving a list of tasks. 
  
*/


// router.get('/', (req, res) => {
//   Recipes.getRecipes()
//   .then(recipes => {
//     console.log(recipes)
//     res.status(200).json(recipes)
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get recipes' });
//   });
// })

// router.get('/:id', (req, res) => {
//   const id = req.params.id;

//   Recipes.getShoppingList(id)
//   .then(list => {
//     console.log(list)
//     res.status(200).json(list)
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get recipes' });
//   });
// })

// router.get('/:id/instructions', (req, res) => {
//   const id = req.params.id;

//   Recipes.getInstructions(id)
//   .then(instructions => {
//     console.log(instructions)
//     res.status(200).json(instructions)
//   })
//   .catch(err => {
//     res.status(500).json({ message: 'Failed to get recipes' });
//   });
// })

// module.exports = router; //export

////////////////////////////////////////////////


// const express = require('express');

// const Schemes = require('./scheme-model.js');

// const router = express.Router();

// router.get('/', (req, res) => {
//   Schemes.find()
//     .then(schemes => {
//       res.json(schemes);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get schemes' });
//     });
// });

// router.get('/:id', (req, res) => {
//   const { id } = req.params;

//   Schemes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         res.json(scheme);
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id.' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get schemes' });
//     });
// });

// router.get('/:id/steps', (req, res) => {
//   const { id } = req.params;

//   Schemes.findSteps(id)
//     .then(steps => {
//       if (steps.length) {
//         res.json(steps);
//       } else {
//         res.status(404).json({ message: 'Could not find steps for given scheme' })
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to get steps' });
//     });
// });

// router.post('/', (req, res) => {
//   const schemeData = req.body;

//   Schemes.add(schemeData)
//     .then(scheme => {
//       res.status(201).json(scheme);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to create new scheme' });
//     });
// });

// router.post('/:id/steps', (req, res) => {
//   const stepData = req.body;
//   const { id } = req.params;

//   Schemes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         return Schemes.addStep(stepData, id);
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id.' })
//       }
//     })
//     .then(step => {
//       res.status(201).json(step);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to create new step' });
//     });
// });

// router.put('/:id', (req, res) => {
//   const { id } = req.params;
//   const changes = req.body;

//   Schemes.findById(id)
//     .then(scheme => {
//       if (scheme) {
//         return Schemes.update(changes, id);
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     })
//     .then(updatedScheme => {
//       res.json(updatedScheme);
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to update scheme' });
//     });
// });

// router.delete('/:id', (req, res) => {
//   const { id } = req.params;

//   Schemes.remove(id)
//     .then(deleted => {
//       if (deleted) {
//         res.json({ removed: deleted });
//       } else {
//         res.status(404).json({ message: 'Could not find scheme with given id' });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: 'Failed to delete scheme' });
//     });
// });

// module.exports = router;