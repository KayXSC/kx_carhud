$(() => {
    let carhud = document.getElementsByClassName('container');
    let count = document.getElementById('velocidad');
    let fuel = document.getElementById('gasolina');
    let fuelIcon = document.getElementById('gasolina-icon');
    let cintoIcon = document.getElementById('cinturon-icon');
    $(carhud).fadeOut(300);

    let Carhud = {}

    Carhud.ShowCinto = false

    window.addEventListener("message", (event) => {
        let e = event.data;
        if (e.type === "carhud:show") {
            $(carhud).fadeIn(300)
            $(count).text(Math.round(e.velocity));
            $(fuel).text(Math.round(e.fuel))
            if (Math.round(e.velocity) <= 9) {
                $(count).text("00"+Math.round(e.velocity))
            } else if (Math.round(e.velocity) >= 9 && Math.round(e.velocity) <= 99) {
                $(count).text("0"+Math.round(e.velocity))
            }

            if (Math.round(e.velocity) === 0) {
                $(count).text("KAY");
            }

            // Change fuel icon color based on fuel level
            if (e.fuel <= 15) {
                $(fuelIcon).css('color', 'red');
            } else if (e.fuel <= 30) {
                $(fuelIcon).css('color', 'orange');
            } else {
                $(fuelIcon).css('color', 'white');
            }

            if (e.cinturon) {
                $(cintoIcon).show();
            } else {
                $(cintoIcon).hide();
            }

        } else if (e.type === "carhud:hide") {
            $(carhud).fadeOut(300)
        } else if (e.type === "toggleCinto" && Carhud.ShowCinto === true) {
            let x = false;
            x = !x;
            if (x) {
                c.play()
            } else {
                c.pause()
            }
        }
    })
})
