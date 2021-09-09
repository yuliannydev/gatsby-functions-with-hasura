const fetch = require(`node-fetch`).default;

module.exports = async (req, res) => {
    const response = await fetch(
        `https://mandrillapp.com/api/1.0/messages/send`,
        {
            method: `POST`,
            headers: {
                "content-type": "aplication/json",
            },
            body: JSON.stringify({
                key: "sGWMVvncpLP56uKybfTjeg",
                message:  {
                    html: "Hi",
                    text: "Hello world",
                    subject: "Hi from gatsby functions",
                    from_email: "yuliannydev@gmail.com",
                    from_name: "Raydesite",
                    to:[{
                        email: "yuliannydev@gmail.com",
                        name: "Yulianny",
                        type: "to",
                    }],
                    },
            })
        })
        .then((result) => {
            return result.json()});
        console.log({ 
            response,
         });
         res.status(200).json({
             okey: true,
         });
};