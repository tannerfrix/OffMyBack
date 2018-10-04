module.exports = {
    getItems: (req, res, next) => {
        const dbInstance = req.app.get('db')

        dbInstance.getItems().then( response => 
            res.status(200).send( response ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong."});
          console.log(err)
        } );
    },

    deleteItem: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {itemid} = req.body

        console.log(itemid)
        dbInstance.deleteItem(itemid).then( response => 
            res.status(200).send( response ) )
            .catch( err => {
                res.status(500).send({errorMessage: "Oops! Something went wrong."});
            } );
        
    },

    getItem: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const { params } = req

        dbInstance.getItem(params.id)
        .then( response => res.status(200).send( response ) )
        .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong."});
          console.log(err)
        } );
    },

    updateItem: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        const {name, description, picture, date} = req.body;

        dbInstance.updateItem([name, description, picture, date, params.id])
        .then( response => res.status(200).send( response ) )
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong."});
        } );
    },

    addNewItem: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {name, description, picture, date} = req.body;

        dbInstance.addNewItem([name, description, picture, date]).then(
            response => res.status(200).send( response ) ).catch(
                err => {
                    res.status(500).send({errorMessage: "Oops! Something went wrong."});
                }  );
    },

    getRequests: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        
        dbInstance.getRequests(params.id).then(
            response => res.status(200).send( response ) ).catch(
                err => {
                    res.status(500).send({errorMessage: "Oops! Something went wrong."});
                }  );
    },

    addRequests: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
        const { name, phone, address, city, state, zipcode, email} = req.body;

        console.log(params.id)

        dbInstance.addRequest([name, phone, address, city, state, zipcode, email]).then(
            response => res.status(200).send( response ) ).catch(
                err => {
                    res.status(500).send({errorMessage: "Oops! Something went wrong."})
                }
            )
    },

    reqLink: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.reqLink(params.id).then(
            response => res.status(200).send( response ) ).catch(
                err => {
                    res.status(500).send({errorMessage: "Oops! Something went wrong."})
                }
            )
        
    },

    joinRequest: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.joinRequest(params.id).then(
            response => res.status(200).send( response ) ).catch(
                err => {
                    res.status(500).send({errorMessage: "Oops! Something went wrong."})
                }
            )
    }
}