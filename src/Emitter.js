const Emitter = {
    events: {},

    on(event, cb) {
        Emitter.events[event] = Emitter.events[event] || []
        Emitter.events[event].push(cb)
    },


    emit(event, ...rest) { 
    if ( event in Emitter.events === false ){
        return;
    }
    Emitter.events[event].forEach((e) => {
        e(...rest)
    })
}
}
Emitter.on('click', (a, b, c, d, e, f) => console.log("Cliquei", a, b, c, d, e,f))
Emitter.on('click', () => console.log("Cliquei 2"))
Emitter.on('click', () => console.log("Cliquei 3"))
Emitter.emit('click', 1, 2, 3, 4, 5)

export { Emitter }
