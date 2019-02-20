const homepage = (req, res) => {
    const templateConfig = {
      page: 'settings',
      port: process.env.PORT,
    };
  
    res.render('../01-Settings/index.html', templateConfig);
  };
  
  module.exports = homepage;