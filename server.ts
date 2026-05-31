import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import multer from "multer";
import fs from "fs";
import ffmpeg from "fluent-ffmpeg";
import ffmpegInstaller from "@ffmpeg-installer/ffmpeg";

ffmpeg.setFfmpegPath(ffmpegInstaller.path);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  app.use('/uploads', express.static(path.join(process.cwd(), 'public/uploads')));

  app.get("/api/health", (req, res) => {
    res.json({ 
      success: true,
      status: "ok", 
      message: "Poppro API is running (Node.js backend)",
      timestamp: new Date().toISOString(),
      version: "1.0.0"
    });
  });

  const categoriesDB = [
    {id: "All", green: "A", white: "ll"},
    {id: "Dance", green: "Dan", white: "ce"},
    {id: "Show", green: "Sh", white: "ow"},
    {id: "Beauty", green: "Bea", white: "uty"},
    {id: "Dailylife", green: "Dail", white: "ylife"},
    {id: "Technology", green: "Tech", white: "nology"},
    {id: "Fitness", green: "Fit", white: "ness"},
    {id: "Trand", green: "Tra", white: "nd"},
    {id: "Drama", green: "Dr", white: "ama"},
    {id: "Games", green: "Ga", white: "mes"},
  ];

  app.get("/api/categories", (req, res) => {
    res.json({ success: true, data: categoriesDB });
  });

  const VIDEOS_DB_PATH = path.join(process.cwd(), 'videos_db.json');
  let videosDB = [
    {id: "1", url: "/uploads/1.mp4", author: "poppro_user", authorUid: "user_123", likes: "76.6K", comments: "302", shares: "15.6K", description: "Epic moments today! Don't forget to share with friends. 🔥 #Poppro #Trending #Viral", category: "Trand", thumbnail: "https://picsum.photos/seed/trend1/400/600", views: "4.2M", createdAt: "2026-04-07T01:48:00Z"},
    {id: "2", url: "/uploads/2.mp4", author: "poppro_user2", authorUid: "user_456", likes: "12.4K", comments: "89", shares: "456", description: "Absolutely amazing! ✨ #Entertainment #Lifestyle", category: "Dailylife", thumbnail: "https://picsum.photos/seed/daily1/400/600", views: "2.1M", createdAt: "2026-04-07T01:59:29Z"},
    {id: "3", url: "/uploads/3.mp4", author: "DanceKing", authorUid: "user_789", likes: "120K", comments: "1.2K", shares: "45K", description: "Epic Dance Battle in the Rain 💃 #Dance #Poppro", category: "Dance", thumbnail: "https://picsum.photos/seed/dance1/400/600", views: "1.2M", createdAt: "2026-04-06T10:00:00Z"},
    {id: "4", url: "/uploads/4.mp4", author: "TechGuru", authorUid: "user_101", likes: "85K", comments: "920", shares: "12K", description: "Tech Review 2026: The Future is Here 🚀 #Technology", category: "Technology", thumbnail: "https://picsum.photos/seed/tech1/400/600", views: "850K", createdAt: "2026-04-05T15:30:00Z"},
    {id: "5", url: "/uploads/5.mp4", author: "GameMaster", authorUid: "user_102", likes: "340K", comments: "5.6K", shares: "78K", description: "Pro Gamer Moves - Final Boss 🎮 #Games", category: "Games", thumbnail: "https://picsum.photos/seed/game1/400/600", views: "3.4M", createdAt: "2026-04-04T20:00:00Z"},
    {id: "6", url: "/uploads/6.mp4", author: "BeautyQueen", authorUid: "user_103", likes: "50K", comments: "430", shares: "8K", description: "10 Minute Makeup Tutorial 💄 #Beauty", category: "Beauty", thumbnail: "https://picsum.photos/seed/beauty1/400/600", views: "500K", createdAt: "2026-04-03T12:00:00Z"},
    {id: "7", url: "/uploads/7.mp4", author: "DramaStudio", authorUid: "user_104", likes: "310K", comments: "8.2K", shares: "90K", description: "Short Drama: The Betrayal 🎭 #Drama", category: "Drama", thumbnail: "https://picsum.photos/seed/drama1/400/600", views: "3.1M", createdAt: "2026-04-02T18:00:00Z"},
    {id: "8", url: "/uploads/8.mp4", author: "FitPro", authorUid: "user_105", likes: "92K", comments: "780", shares: "14K", description: "Intense Workout Motivation 💪 #Fitness", category: "Fitness", thumbnail: "https://picsum.photos/seed/fit1/400/600", views: "920K", createdAt: "2026-04-01T08:00:00Z"},
    {id: "9", url: "/uploads/9.mp4", author: "TravelBug", authorUid: "user_106", likes: "210K", comments: "1.5K", shares: "32K", description: "Beautiful sunset at the beach 🌅 #Travel", category: "Dailylife", thumbnail: "https://picsum.photos/seed/travel1/400/600", views: "1.8M", createdAt: "2023-03-30T10:00:00Z"},
    {id: "10", url: "/uploads/10.mp4", author: "ChefMaster", authorUid: "user_107", likes: "65K", comments: "540", shares: "9K", description: "Quick and easy recipe for dinner 🍝 #Food", category: "Dailylife", thumbnail: "https://picsum.photos/seed/food1/400/600", views: "700K", createdAt: "2023-03-29T14:00:00Z"},
  ];

  if (fs.existsSync(VIDEOS_DB_PATH)) {
    try {
      videosDB = JSON.parse(fs.readFileSync(VIDEOS_DB_PATH, 'utf-8'));
    } catch (e) {
      console.error("Failed to load videos DB:", e);
    }
  }

  const saveVideosDB = () => {
    fs.writeFileSync(VIDEOS_DB_PATH, JSON.stringify(videosDB, null, 2));
  };

  const parseK = (str: string) => {
    if (!str) return 0;
    const num = parseFloat(str);
    if (str.includes('M')) return num * 1000000;
    if (str.includes('K')) return num * 1000;
    return num;
  };

  app.get("/api/videos", (req, res) => {
    const category = req.query.category as string;
    const authorUid = req.query.authorUid as string;
    const sortBy = req.query.sortBy as string;
    const limit = parseInt(req.query.limit as string) || 10;
    const page = parseInt(req.query.page as string) || 1;

    let result = [...videosDB];
    
    if (category && category !== "All") {
      result = result.filter(v => v.category === category);
    }
    
    if (authorUid) {
      result = result.filter(v => v.authorUid === authorUid);
    }

    if (sortBy === 'date_desc') {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    } else if (sortBy === 'date_asc') {
      result.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    } else if (sortBy === 'popularity') {
      result.sort((a, b) => parseK(b.views) - parseK(a.views));
    }

    const start = (page - 1) * limit;
    const end = start + limit;
    const paginated = result.slice(start, end);

    res.json({
      success: true,
      total: result.length,
      page,
      limit,
      data: paginated
    });
  });

  app.get("/api/videos/:id", (req, res) => {
    const video = videosDB.find(v => v.id === req.params.id);
    if (video) {
      res.json({ success: true, data: video });
    } else {
      res.status(404).json({ success: false, message: "Video not found" });
    }
  });

  app.put("/api/videos/:id", (req, res) => {
    const videoIndex = videosDB.findIndex(v => v.id === req.params.id);
    if (videoIndex !== -1) {
      videosDB[videoIndex] = {
        ...videosDB[videoIndex],
        description: req.body.description !== undefined ? req.body.description : videosDB[videoIndex].description,
        category: req.body.category !== undefined ? req.body.category : videosDB[videoIndex].category,
      };
      saveVideosDB();
      res.json({ success: true, message: "Video updated successfully", data: videosDB[videoIndex] });
    } else {
      res.status(404).json({ success: false, message: "Video not found" });
    }
  });

  app.post("/api/videos/:id/like", (req, res) => {
    const video = videosDB.find(v => v.id === req.params.id);
    if (video) {
      res.json({ success: true, message: "Like added successfully" });
    } else {
      res.status(404).json({ success: false, message: "Video not found" });
    }
  });

  app.post("/api/videos", (req, res) => {
    const newVideo = {
      id: String(videosDB.length + 1),
      author: req.body.author,
      authorUid: req.body.authorUid,
      description: req.body.description,
      category: req.body.category,
      likes: "0",
      comments: "0",
      shares: "0",
      views: "0",
      url: req.body.url || "/uploads/1.mp4",
      thumbnail: req.body.thumbnail || "https://picsum.photos/seed/newvid/400/600",
      createdAt: new Date().toISOString()
    };
    videosDB.push(newVideo);
    saveVideosDB();
    res.status(201).json({ success: true, message: "Video created successfully", data: newVideo });
  });

  app.delete("/api/videos/:id", (req, res) => {
    const index = videosDB.findIndex(v => v.id === req.params.id);
    if (index !== -1) {
      videosDB.splice(index, 1);
      saveVideosDB();
      res.json({ success: true, message: "Video deleted successfully" });
    } else {
      res.status(404).json({ success: false, message: "Video not found" });
    }
  });

  const huntersDB = [
    {id: 1, name: "Janna Nick", username: "jannanickofficial", avatar: "https://picsum.photos/seed/janna/100/100", thumbnail: "https://picsum.photos/seed/jannavid/400/600", followers: "2.3M"},
    {id: 2, name: "Mira Filzah", username: "therealmfmirafilzah", avatar: "https://picsum.photos/seed/mira/100/100", thumbnail: "https://picsum.photos/seed/miravid/400/600", followers: "1.8M"},
    {id: 3, name: "Siti Nurhaliza", username: "toktititok", avatar: "https://picsum.photos/seed/siti/100/100", thumbnail: "https://picsum.photos/seed/sitivid/400/600", followers: "5.1M"},
    {id: 4, name: "Nur Fazura", username: "miss.fazura", avatar: "https://picsum.photos/seed/fazura/100/100", thumbnail: "https://picsum.photos/seed/fazuravid/400/600", followers: "1.2M"},
    {id: 5, name: "Danish Nora", username: "noradanishhanif", avatar: "https://picsum.photos/seed/nora/100/100", thumbnail: "https://picsum.photos/seed/noravid/400/600", followers: "980K"},
    {id: 6, name: "Neelofa", username: "neelofa", avatar: "https://picsum.photos/seed/neelofa/100/100", thumbnail: "https://picsum.photos/seed/neelofavid/400/600", followers: "3.4M"},
    {id: 7, name: "Nelydia", username: "nelydiarose", avatar: "https://picsum.photos/seed/nelydia/100/100", thumbnail: "https://picsum.photos/seed/nelydiavid/400/600", followers: "750K"},
    {id: 8, name: "JJ Lin", username: "drifterjjlin", avatar: "https://picsum.photos/seed/jjlin/100/100", thumbnail: "https://picsum.photos/seed/jjlinvid/400/600", followers: "4.2M"},
    {id: 9, name: "Dato Seri Vida", username: "datoserividaofficial", avatar: "https://picsum.photos/seed/vida/100/100", thumbnail: "https://picsum.photos/seed/vidavid/400/600", followers: "2.1M"},
  ];

  app.get("/api/hunters", (req, res) => {
    res.json({ success: true, total: huntersDB.length, data: huntersDB });
  });

  app.get("/api/hunters/:id", (req, res) => {
    const hunter = huntersDB.find(h => String(h.id) === req.params.id);
    if (hunter) {
      res.json({ success: true, data: hunter });
    } else {
      res.status(404).json({ success: false, message: "Hunter not found" });
    }
  });

  app.post("/api/hunters/:id/follow", (req, res) => {
    res.json({ success: true, message: "Successfully followed creator", data: { followerUid: req.body.followerUid, targetUid: req.body.targetUid } });
  });

  let monitorEvents = [
    {id: "1", timestamp: new Date().toLocaleTimeString('en-GB'), event: "t0", device: "mobile", mode: "direct", page: "homepage_hot", status: "success"},
    {id: "2", timestamp: new Date().toLocaleTimeString('en-GB'), event: "page_view", device: "mobile", mode: "direct", page: "homepage_hot", status: "success"},
  ];

  app.get("/api/monitor/events", (req, res) => {
    const limit = parseInt(req.query.limit as string) || 20;
    const result = monitorEvents.slice(-limit);
    res.json({ success: true, total: monitorEvents.length, data: result });
  });

  app.post("/api/monitor/events", (req, res) => {
    const event = {
      id: String(Math.floor(Math.random() * 999999)),
      timestamp: new Date().toLocaleTimeString('en-GB'),
      event: req.body.event,
      device: req.body.device,
      mode: req.body.mode,
      page: req.body.page,
      status: req.body.status || "success"
    };
    monitorEvents.unshift(event);
    if (monitorEvents.length > 100) monitorEvents = monitorEvents.slice(0, 100);
    res.json({ success: true, message: "Event logged successfully", data: event });
  });

  const usersDB: Record<string, any> = {};

  app.get("/api/users/:uid", (req, res) => {
    const user = usersDB[req.params.uid];
    if (user) {
      res.json({ success: true, data: user });
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  });

  app.post("/api/users", (req, res) => {
    if (!req.body.uid) {
      return res.status(400).json({ success: false, message: "UID required" });
    }
    usersDB[req.body.uid] = req.body;
    res.json({ success: true, message: "User saved successfully", data: req.body });
  });

  app.put("/api/users/:uid", (req, res) => {
    const uid = req.params.uid;
    let user = usersDB[uid] || { uid };
    if (req.body.name) user.name = req.body.name;
    if (req.body.username) user.username = req.body.username;
    if (req.body.bio) user.bio = req.body.bio;
    usersDB[uid] = user;
    res.json({ success: true, message: "Profile updated successfully", data: user });
  });

  const pendingCodes: Record<string, string> = {};

  app.post("/api/auth/phone/send-code", (req, res) => {
    const code = String(Math.floor(100000 + Math.random() * 900000));
    const key = req.body.region + req.body.phone;
    pendingCodes[key] = code;
    res.json({ success: true, message: "Code sent to " + req.body.region + req.body.phone });
  });

  app.post("/api/auth/phone/verify", (req, res) => {
    const key = req.body.region + req.body.phone;
    const stored = pendingCodes[key];
    if (!stored || stored !== req.body.code) {
      return res.status(401).json({ success: false, message: "Invalid or expired code" });
    }
    delete pendingCodes[key];
    const uid = `phone_${req.body.region}_${req.body.phone}_${Date.now()}`;
    res.json({ success: true, message: "Verification successful", data: { uid, phone: req.body.phone } });
  });

  const notesDB: Record<string, any> = {};

  app.get("/api/notes/:uid", (req, res) => {
    const uid = req.params.uid;
    const note = notesDB[uid] || { userUid: uid, content: "", updatedAt: new Date().toISOString() };
    res.json({ success: true, data: note });
  });

  app.post("/api/notes", (req, res) => {
    const note = {
      id: req.body.userUid,
      userUid: req.body.userUid,
      content: req.body.content,
      updatedAt: new Date().toISOString()
    };
    notesDB[req.body.userUid] = note;
    res.json({ success: true, message: "Note saved successfully", data: note });
  });

  const inboxDB = [
    {id: "1", fromUid: "poppro_system", fromName: "Poppro", avatar: "https://picsum.photos/seed/poppro/100/100", message: "Welcome to Poppro! 🎉", createdAt: new Date().toISOString(), isRead: false},
  ];

  app.get("/api/inbox", (req, res) => {
    res.json({ success: true, total: inboxDB.length, data: inboxDB });
  });

  app.put("/api/inbox/:id/read", (req, res) => {
    const msg = inboxDB.find(m => m.id === req.params.id);
    if (msg) {
      msg.isRead = true;
      res.json({ success: true, message: "Message marked as read" });
    } else {
      res.status(404).json({ success: false, message: "Message not found" });
    }
  });

  const uploadDir = path.join(process.cwd(), 'public/uploads');
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      cb(null, `file_${Date.now()}${ext}`);
    }
  });
  const upload = multer({ storage });

  app.post("/api/upload/video", upload.single('video'), async (req, res) => {
    if (!req.file) return res.status(400).json({ success: false, message: "Video file required" });
    
    const inputPath = req.file.path;
    const filenameWithoutExt = path.parse(req.file.filename).name;
    const compressedFilename = `${filenameWithoutExt}_compressed.mp4`;
    const thumbnailFilename = `${filenameWithoutExt}_thumb.jpg`;
    
    const compressedPath = path.join(uploadDir, compressedFilename);
    const thumbnailPath = path.join(uploadDir, thumbnailFilename);

    try {
      await new Promise((resolve, reject) => {
        ffmpeg(inputPath)
          .screenshots({
            timestamps: ['00:00:01.000'],
            filename: thumbnailFilename,
            folder: uploadDir,
            size: '400x600'
          })
          .on('end', resolve)
          .on('error', reject);
      });

      const hlsDirName = `${req.file.filename}_hls`;
      const hlsDir = path.join(uploadDir, hlsDirName);
      if (!fs.existsSync(hlsDir)) {
        fs.mkdirSync(hlsDir, { recursive: true });
      }

      await new Promise((resolve, reject) => {
        ffmpeg(inputPath)
          .outputOptions([
            '-preset fast',
            '-g 48',
            '-sc_threshold 0',
            '-map 0:v:0',
            '-map 0:a:0?',
            '-map 0:v:0',
            '-map 0:a:0?',
            '-s:v:0 640x360',
            '-c:v:0 libx264',
            '-b:v:0 800k',
            '-s:v:1 1280x720',
            '-c:v:1 libx264',
            '-b:v:1 2500k',
            '-c:a aac',
            '-b:a 128k',
            '-var_stream_map', 'v:0,a:0 v:1,a:1',
            '-master_pl_name', 'master.m3u8',
            '-f hls',
            '-hls_time 4',
            '-hls_playlist_type vod',
            '-hls_segment_filename', path.join(hlsDir, 'v%v_fileSequence%d.ts')
          ])
          .output(path.join(hlsDir, 'v%v_prog_index.m3u8'))
          .on('end', resolve)
          .on('error', (err) => {
            console.error('FFmpeg HLS Error:', err);
            reject(err);
          })
          .run();
      });

      if (fs.existsSync(inputPath)) {
        fs.unlinkSync(inputPath);
      }

      res.json({ 
        success: true, 
        message: "Video uploaded and processed successfully", 
        url: `/uploads/${hlsDirName}/master.m3u8`, 
        thumbnailUrl: `/uploads/${thumbnailFilename}`,
        filename: `${hlsDirName}/master.m3u8`,
        size: 0
      });
    } catch (error) {
      console.error("Error processing video:", error);
      res.status(500).json({ success: false, message: "Error processing video" });
    }
  });

  app.post("/api/upload/thumbnail", upload.single('thumbnail'), (req, res) => {
    if (!req.file) return res.status(400).json({ success: false, message: "Thumbnail file required" });
    res.json({ success: true, url: `/uploads/${req.file.filename}`, filename: req.file.filename });
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
