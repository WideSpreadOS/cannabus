const button = document.getE("button")
console.log('HELLO')
button.addEventListener("click", () => {
    console.log('CLICKED')
    fetch("http://localhost:3000/checkout/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            items: [
                { id: 1, quantity: 3 },
                { id: 2, quantity: 1 },
            ],
        }),
    })
        .then(res => {
            if (res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        })
        .then(({ url }) => {
            window.location = url
        })
        .catch(e => {
            console.error(e.error)
        })
})