export default defineNitroPlugin((nitroApp) => {
    nitroApp.hooks.hook('render:html', async  (html, data) => {
        // 
    })
    nitroApp.hooks.hook('render:response', (response, { event }) => {
    //    
    })
  })