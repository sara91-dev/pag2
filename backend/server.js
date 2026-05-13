import express from 'express';
import cors from 'cors';
import mailchimp from '@mailchimp/mailchimp_marketing';

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

app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});
