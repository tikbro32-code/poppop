import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Edit2, Trash2, Filter, ArrowUpDown, Play, Heart, MessageCircle, Share2, MoreVertical } from 'lucide-react';
import { useAuth } from '../data/context/AuthContext';

interface Video {
  id: string;
  url: string;
  thumbnail: string;
  description: string;
  category: string;
  views: string;
  likes: string;
  comments: string;
  shares: string;
  createdAt: string;
}

export default function ManageVideosPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [sortBy, setSortBy] = useState('date_desc');
  
  const [editingVideo, setEditingVideo] = useState<Video | null>(null);
  const [editDescription, setEditDescription] = useState('');
  const [editCategory, setEditCategory] = useState('');

  const categories = ["All", "Dance", "Show", "Beauty", "Dailylife", "Technology", "Fitness", "Trand", "Drama", "Games"];

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }
    fetchVideos();
  }, [user, categoryFilter, sortBy]);

  const fetchVideos = async () => {
    setLoading(true);
    try {
      const authorUid = user?.uid || 'user_123';
      
      const response = await fetch(`/api/videos?category=${categoryFilter === 'All' ? '' : categoryFilter}&limit=50`);
      if (!response.ok) {
        throw new Error('Failed to fetch videos');
      }
      const data = await response.json();
      
      let fetchedVideos: Video[] = [];
      if (data.success && data.data) {
        fetchedVideos = data.data.filter((v: any) => v.authorUid === authorUid);
      }

      if (sortBy === 'date_desc') {
        fetchedVideos.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      } else if (sortBy === 'date_asc') {
        fetchedVideos.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
      } else if (sortBy === 'popularity') {
        const parseK = (str: string) => {
          if (!str) return 0;
          const num = parseFloat(str);
          if (str.includes('M')) return num * 1000000;
          if (str.includes('K')) return num * 1000;
          return num;
        };
        fetchedVideos.sort((a, b) => parseK(b.views) - parseK(a.views));
      }

      setVideos(fetchedVideos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Adakah anda pasti mahu memadam video ini?")) {
      try {
        const token = await user?.getIdToken();
        const response = await fetch(`/api/videos/${id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete video');
        }
        
        setVideos(videos.filter(v => v.id !== id));
      } catch (error) {
        console.error("Error deleting video:", error);
      }
    }
  };

  const handleEditClick = (video: Video) => {
    setEditingVideo(video);
    setEditDescription(video.description);
    setEditCategory(video.category);
  };

  const handleSaveEdit = async () => {
    if (!editingVideo || !user) return;
    
    try {
      const token = await user.getIdToken();
      const response = await fetch(`/api/videos/${editingVideo.id}`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          description: editDescription,
          category: editCategory
        })
      });

      if (!response.ok) throw new Error('Failed to update video');
      
      setVideos(videos.map(v => v.id === editingVideo.id ? { ...v, description: editDescription, category: editCategory } : v));
      setEditingVideo(null);
    } catch (error) {
      console.error("Error updating video:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <ArrowLeft size={24} className="text-gray-800" />
          </button>
          <h1 className="text-xl font-bold text-gray-900">Urus Video Anda</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-4 mb-6 justify-between items-start sm:items-center bg-white p-4 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter size={18} className="text-gray-500" />
            <select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#fe2c55] focus:border-[#fe2c55] block w-full sm:w-48 p-2.5"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat === 'All' ? 'Semua Kategori' : cat}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <ArrowUpDown size={18} className="text-gray-500" />
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-[#fe2c55] focus:border-[#fe2c55] block w-full sm:w-48 p-2.5"
            >
              <option value="date_desc">Terbaru</option>
              <option value="date_asc">Terlama</option>
              <option value="popularity">Paling Popular</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#fe2c55]"></div>
          </div>
        ) : videos.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-xl border border-gray-100 shadow-sm">
            <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Play size={32} className="text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tiada video dijumpai</h3>
            <p className="text-gray-500">Anda belum memuat naik sebarang video dalam kategori ini.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                <div className="relative aspect-[9/16] bg-black">
                  <img src={video.thumbnail} alt="Thumbnail" className="w-full h-full object-cover opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-sm">
                    <div className="flex items-center gap-1">
                      <Play size={14} /> <span>{video.views}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1"><Heart size={14} /> <span>{video.likes}</span></div>
                      <div className="flex items-center gap-1"><MessageCircle size={14} /> <span>{video.comments}</span></div>
                    </div>
                  </div>
                  
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md font-medium">
                    {video.category}
                  </div>
                </div>
                
                <div className="p-4">
                  <p className="text-sm text-gray-800 line-clamp-2 mb-4 h-10 font-medium">
                    {video.description}
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500">
                      {new Date(video.createdAt).toLocaleDateString('ms-MY', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </span>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => handleEditClick(video)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                        title="Edit Video"
                      >
                        <Edit2 size={18} />
                      </button>
                      <button 
                        onClick={() => handleDelete(video.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-full transition-colors"
                        title="Padam Video"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {editingVideo && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-xl">
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Kemaskini Video</h3>
              <button onClick={() => setEditingVideo(null)} className="text-gray-400 hover:text-gray-600">
                &times;
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Keterangan (Description)</label>
                <textarea 
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent outline-none resize-none h-24"
                  placeholder="Tulis sesuatu tentang video ini..."
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Kategori</label>
                <select 
                  value={editCategory}
                  onChange={(e) => setEditCategory(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-[#fe2c55] focus:border-transparent outline-none"
                >
                  {categories.filter(c => c !== 'All').map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
              <button 
                onClick={() => setEditingVideo(null)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Batal
              </button>
              <button 
                onClick={handleSaveEdit}
                className="px-4 py-2 text-sm font-medium text-white bg-[#fe2c55] rounded-lg hover:bg-[#e62a4d]"
              >
                Simpan Perubahan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
