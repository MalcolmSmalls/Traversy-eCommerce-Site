import bcrypt from "bcryptjs"

const users = [ 
    {
        name: 'Shamus',
        email: 'shamusfields@gmail.com',
        password: bcrypt.hashSync('damnshamus', 10),
        isAdmin: false
    },
    {
        name: 'Young Nudy',
        email: 'youngnudy@gmail.com',
        password: bcrypt.hashSync('projectx', 10),
        isAdmin: true
    },
    {
        name: "Rodger Smiggens",
        email: "gohomeroger@gmail.com",
        password: bcrypt.hashSync('rodger', 10),
        isAdmin: false,
    }
]

export default users