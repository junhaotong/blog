module.exports = class extends think.Logic {
    postAction() {
        this.rules = {
            name: {
                string: true,
                required: true,
                aliasName: '分类名'
            },
            image: {
                string: true,
            },
            description: {
                string: true
            }
        }
    }

    putAction() {
        this.rules = {
            name: {
                string: true,
                required: true,
                aliasName: '分类名'
            },
            image: {
                string: true,
            },
            description: {
                string: true
            }
        }
    }
};
