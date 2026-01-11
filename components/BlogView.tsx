
import React, { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, ChevronRight, Share2 } from 'lucide-react';
import { BLOG_POSTS, BlogPost } from '../constants';

interface BlogViewProps {
  selectedPost: BlogPost | null;
  onSelectPost: (post: BlogPost | null) => void;
}

const BlogView: React.FC<BlogViewProps> = ({ selectedPost, onSelectPost }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [selectedPost]);

  if (selectedPost) {
    return (
      <div className="pt-24 pb-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => onSelectPost(null)}
            className="inline-flex items-center gap-2 text-slate-500 hover:text-emerald-600 font-medium mb-12 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Zurück zur Blog-Übersicht
          </button>

          <div className="mb-10">
            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              {selectedPost.category}
            </span>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 leading-tight mb-6 tracking-tight">
              {selectedPost.title}
            </h1>
            <div className="flex items-center gap-6 text-slate-500 text-sm">
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                {selectedPost.date}
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                {selectedPost.author}
              </div>
            </div>
          </div>

          <div className="aspect-video w-full rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl ring-1 ring-slate-200">
            <img
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-full object-cover"
            />
          </div>

          <article
            className="prose prose-slate prose-lg max-w-none prose-headings:font-black prose-headings:tracking-tight prose-a:text-emerald-600 prose-img:rounded-3xl"
            dangerouslySetInnerHTML={{ __html: selectedPost.content }}
          />

          <div className="mt-16 pt-8 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">ML</div>
              <div>
                <p className="font-bold text-slate-900">Markus Lenz</p>
                <p className="text-sm text-slate-500">Energieeffizienz-Experte</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-slate-400 hover:text-emerald-600 transition-colors">
              <Share2 size={20} />
              Teilen
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-base font-bold text-emerald-600 uppercase tracking-widest mb-3 tracking-[0.2em]">Magazin</h1>
          <p className="text-4xl sm:text-5xl font-black text-slate-900 mb-6 tracking-tight">
            Wissen für Ihr Zuhause
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Aktuelle Tipps zu Sanierung, Förderung und Energieeffizienz in Düsseldorf.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.id}
              className="group bg-white rounded-[2rem] border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full cursor-pointer"
              onClick={() => onSelectPost(post)}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-emerald-700 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-slate-400 text-xs mb-4 font-bold uppercase tracking-widest">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-emerald-500" />
                    {post.date}
                  </span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 leading-tight group-hover:text-emerald-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center gap-2 text-emerald-600 font-black text-xs uppercase tracking-widest">
                  Weiterlesen
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogView;
