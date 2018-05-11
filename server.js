// For Azure Web App - http://harpjs.com/docs/deployment/azure
require('harp').server(__dirname, { port: process.env.PORT || 5000 })

