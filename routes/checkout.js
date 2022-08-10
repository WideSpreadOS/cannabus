const express = require('express');
const router = express.Router();



const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_PRIVATE_KEY)



const storeItems = new Map([
    [1, { id: 1, priceInCents: 10500, name: "CannaWow" }],
    [2, { id: 2, priceInCents: 22500, name: "CannaWoah" }],
    [3, { id: 3, priceInCents: 21500, name: "CannaGetSmore" }]
])

router.post("/create-checkout-session", async (req, res) => {
    console.log('const stripe = ', stripe._api.protocol + '://' + stripe._api.host + stripe._api.basePath + stripe.products.resourcePath)
    console.log('STRIPE PRODUCTS: ', stripe.products.resourcePath)
    
    try {
        console.log('ENTERED router.post - /create-checkout-session: ')
        const charge = stripe.charges.retrieve('ch_3LVIZ4ANqbfOt0H61nWDEpdK', {
            apiKey: 'sk_test_51LVGzuANqbfOt0H64l2o4Z5rkAkpXgGucrIU2T8aSgX1pcgyvOLEzgrMjxppxMqUNW8DWQ79anClu5lHmWQVgBZp007n2yDbk6',
            expand: ['customer', 'invoice.subscription'],
        });
    
    
        console.log(charge)

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: req.body.items.map(item => {
                const storeItem = storeItems.get(item.id)
                console.log(storeItem)
                return {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: storeItem.name,
                        },
                        unit_amount: storeItem.priceInCents,
                    },
                    quantity: item.quantity,
                }
            }),
            success_url: `${process.env.CLIENT_URL}/success.html`,
            cancel_url: `${process.env.CLIENT_URL}/cancel.html`,
        })
        res.json({ url: session.url })

    } catch (e) {
        res.status(500).json({ error: 'Error: ' + e.message })
    }
    console.log(storeItems)

})


module.exports = router