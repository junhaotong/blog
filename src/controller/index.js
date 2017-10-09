const Base = require('./base.js');
const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('./../../www/vue-ssr-server-bundle.json');

module.exports = class extends Base {
    async indexAction() {
        // const renderer = createBundleRenderer(serverBundle, {
        //     runInNewContext: false, // 推荐
        //     clientManifest
        // })
        // const context = { url: this.ctx.req.url };
        // await new Promise((resolve, reject) => {
        //     renderer.renderToString(context, (err, html) => {
        //         console.log(html);
        //         this.assign('html', html);
        //         resolve();
        //     })
        // })
        return this.display('index');
    }
    adminAction() {
        return this.display('admin');
    }
};
