import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors()); 
app.use(express.json()); 

// RUTA POST
app.post('/mandarCorreo', (req, res) => {
    const { email } = req.body;
    console.log("Correo recibido en el servidor:", email);
    
    if (email) {
        return res.status(200).json({
            ok: true,
            message: "Correo registrado correctamente"
        });
    } else {
        return res.status(400).json({
            ok: false,
            message: "No se recibió ningún correo"
        });
    }
});

app.listen(PORT, () => {
    console.log(`🚀 Servidor de backend corriendo en http://localhost:${PORT}`);
});
