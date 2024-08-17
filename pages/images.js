import fs from'fs';
import path from'path';

consthandler = (req, res) => {
  if (req.method === 'GET') {
    const uploadDir = path.join(process.cwd(), '/public/uploads');
    const files = fs.readdirSync(uploadDir);

    const images = files.map(file => ({
      filePath: `/uploads/${file}`
    }));

    res.status(200).json(images);
  } else {
    res.status(405).json({ error: 'Méthode non autorisée' });
  }
};

exportdefault handler;
