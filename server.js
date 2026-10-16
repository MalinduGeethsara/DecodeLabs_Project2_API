const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [
    { id: 1, name: "Malindu Geethsara", role: "Developer" },
    { id: 2, name: "Sandeepa Semini", role: "Designer" }
];

app.get('/users', (req, res) => {
    res.status(200).json({
        success: true,
        count: users.length,
        data: users
    });
});

app.post('/users', (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            error: "Bad Request",
            message: "Name and role are required fields!"
        });
    }

    const newUser = {
        id: users.length + 1,
        name: name,
        role: role
    };

    users.push(newUser);

    res.status(201).json({
        success: true,
        message: "User created successfully",
        data: newUser
    });
});

app.listen(PORT, () => {
    console.log(`Server is running smoothly on http://localhost:${PORT}`);
});