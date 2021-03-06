module.exports = class extends think.Logic {
    indexAction() {

    }

    postAction() {
        this.rules = {
            title: {
                string: true,
                required: true,
                length: {max: 30}
            },
            content: {
                string: true,
                required: true
            },
            category_id: {
                int: true,
                required: true
            },
            tags: {
                array: true,
                default: []
            }
        }
    }

    putAction() {
        this.rules = {
            title: {
                string: true,
                required: true,
                length: {max: 20}
            },
            content: {
                string: true,
                required: true
            },
            category_id: {
                int: true,
                required: true
            },
            tabs: {
                array: true,
                default: []
            }
        }
    }

    changeStatusAction() {
        this.rules = {
            id: {
                required: true
            }
        }
    }
};
