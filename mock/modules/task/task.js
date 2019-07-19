var taskList = require('./task.json');

module.exports = function (server) {
  server.post('/api/task', function (req, res) {
    const method = req.body.method;
    switch (method) {
      case "get" : {
        const id = req.body.id;
        if(id){
          const matchList = taskList.filter(item => item.id === id);
          const data = matchList ? matchList[0] : null;
          res.send({
            data: data, 
            message: null,
            status: 'success' 
          });
        }else{
          res.send({
            data: taskList,
            message: null,
            status: 'success' 
          });
        }
        break;
      }
      case "new" : {
        res.send({
          data: null,
          message: null,
          status: 'success' 
        });
        break;
      }
      case "remove" : {
        res.send({
          data: null,
          message: null,
          status: 'success' 
        });
        break;
      }
      default: {
        res.send({
          data: taskList,
          message: null,
          status: 'success' 
        });
      }
    }
  });
};