module.exports = function (server) {
  server.post('/api/signin', function (req, res) {
    res.send({
      redirect: '/home',
      currentAuthority: {
        '/': [],
        "/api/signin": ["get"],
        "/api/signup": ["get"],
        "/api/signout": ["get"],
        "/api/task": ["get", "remove", "save", "check"],
      },
      message: 'signin success',
      status: 'success' 
    });
  });
  server.post('/api/signup', function (req, res) {
    req.body = {};
    res.send({
      redirect: '/home',
      currentAuthority: {
        '/': [],
        "/api/signin": ["get"],
        "/api/signup": ["get"],
        "/api/signout": ["get"],
        "/api/task": ["get", "remove", "save", "check"],
      },
      message: 'signup success',
      status: 'success' 
    });
  });
};