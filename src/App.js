import {Notifyer} from "./notify.js"
import { Timer } from "./timer.js"
import { Emitter} from "./Emitter.js"



const App = {
    async start() {
    


        try {
            await Notifyer.init()

            Emitter.on('countdown-start', () => {
                Notifyer.notify({
                    title: "Hora do Post",
                    body: "Crie algum conteúdo para ajudar a comunidade"

            })
        })
        Emitter.on("countdown-end", Timer.init)
      
        
        Timer.init(0.1 * 60)
      
    } catch (err) {
        console.log(err.message)
    }
    }
}

export { App }