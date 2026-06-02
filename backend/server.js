import express from 'express';
import cors from 'cors';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { initDB } from './database.js';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// CONFIGURACIÓN DE MAILCHIMP
mailchimp.setConfig({
  apiKey: "TU_API_KEY",
  server: "TU_DATA_CENTER" // Ejemplo: "us21"
});

const LIST_ID = "TU_AUDIENCE_ID";

app.post('/mandarCorreo', async (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ ok: false, message: "No se recibió correo" });
    }

    try {
        await mailchimp.lists.addListMember(LIST_ID, {
            email_address: email,
            status: "subscribed", 
        });

        console.log("Registrado en Mailchimp:", email);
        return res.status(200).json({ ok: true });

    } catch (error) {
        console.error("Error en Mailchimp:", error);
        
        if (error.response && error.response.body.title === "Member Exists") {
            return res.status(200).json({ ok: true, message: "Ya pediste info" });
        }

        return res.status(500).json({ ok: false, message: "Error interno" });
    }
});


let db; 

// Iniciar servidor y base de datos a la vez
initDB().then(database => {
    db = database; 
    
    app.listen(PORT, () => {
        console.log(`🚀 Servidor y Base de Datos listos en http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("Error al iniciar la base de datos:", err);
});

// Obtener todos los productos
app.get('/productos', async (req, res) => {
    try {
        const productos = await db.all('SELECT * FROM productos');
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener productos" });
    }
});

// Añadir un usuario a la base de datos
app.post('/usuarios', async (req, res) => {
    const { nombre, email } = req.body;
    try {
        const result = await db.run('INSERT INTO usuarios (nombre, email) VALUES (?, ?)', [nombre, email]);
        res.status(201).json({ id: result.lastID, nombre, email });
    } catch (error) {
        res.status(400).json({ error: "Error al crear usuario (quizás el email ya existe)" });
    }
});

// Endpoint de inicio de sesión
app.post('/login', async (req, res) => {
    const { usuario, password } = req.body;

    if (!usuario || !password) {
        return res.status(400).json({ ok: false, message: "Faltan campos obligatorios" });
    }

    try {
        const user = await db.get('SELECT * FROM usuarios WHERE nombre = ? AND password = ?', [usuario, password]);

        if (user) {
            return res.status(200).json({ ok: true, message: "Login correcto" });
        } else {
            return res.status(401).json({ ok: false, message: "Usuario o contraseña incorrectos" });
        }
    } catch (error) {
        console.error("Error en el login:", error);
        return res.status(500).json({ ok: false, message: "Error interno del servidor" });
    }
});
