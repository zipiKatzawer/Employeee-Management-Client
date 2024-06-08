const app = import(`./dist/employee-management-client/server/server.mjs`).then(server => server.app());
exports.handle = (req,res) => app.then(it => it(req,res));
