$(() => {
    const startCine = (_inCinema) => {
        if(_inCinema) {
            $('#top').css({'height': '20%'})
            $('#bottom').css({'height': '20%'})
        } else if(_inCinema === false){
            $('#top').css({'height': '0%'})
            $('#bottom').css({'height': '0%'})
        }
    }

    const eventsStart = (method, visible) => {
        if(method === 'cine') {
            startCine(visible)
        }
    }

    addEventListener('message', (event) => {
        const e = event.data;

        if (e.type === 'patata:toggle') {
            if (e.toggle) {
                $('.patata').fadeOut()
            } else {
                $('.patata').fadeIn()
            }
        }

        if(e.method !== null){
            eventsStart(e.method, e.visible)
        }
    })
})