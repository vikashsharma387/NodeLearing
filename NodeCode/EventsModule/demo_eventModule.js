console.log('demo event module has started...........')

var EventEmitter= require('events')

var event = new EventEmitter()

event.on('MyfirstTrigger',()=>{
    console.log('my first event emiiter')


})
event.on('MyfirstTrigger',()=>{
    console.log('my second event emiiter')
})

    event.on('MyfirstTrigger',()=>{
        console.log('my third event emiiter')
    })

        event.on('MyfirstTrigger',()=>{
            console.log('my fourth event emiiter')
        })

        event.emit('MyfirstTrigger');