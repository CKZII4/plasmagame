import formidable from'formidable';
import fs from'fs';
import path from'path';

exportconst config = {
  api: {
    bodyParser: false,  // Désactiver le parsing automatique du corps de la requête
  },
};

const uploadDir = path.join(process.cwd(), '/public/uploads');

// Créer le dossier d'uploads s'il n'existe pasif (!fs.existsSync(uploadDir)){
  fs.mkdirSync(uploadDir, { recursive: true });
}

consthandler = async (req, res) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm({ uploadDir, keepExtensions: true });

    form.parse(req, (err, fields, files) => {
      if (err) {
        res.status(500).json({ error: 'Erreur lors du téléchargement de l\'image' });
        return;
      }

      // Retourner le chemin du fichier téléchargé
      res.status(200).json({ filePath: `/uploads/${path.basename(files.image.path)}` });
    });
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
};

exportdefault handler;