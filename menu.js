const {app, Menu} = require('electron')

const setMainMenu = () => {
    const template =[{
   label: 'Appweb',
    submenu:[{
     label: 'Dimas es gay',
     click: () =>{
        app.quit()
     }

    }]

    }]
}
module.exports = {
    setMainMenu
}