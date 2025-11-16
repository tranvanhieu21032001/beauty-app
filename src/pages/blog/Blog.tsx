import React, { useState } from 'react';
// Import Link from react-router-dom to handle client-side navigation
import { Link } from 'react-router-dom'; 
import FadeInScale from '../../components/animations/FadeInScale.js';
import { BLOG_POSTS } from '../../data/blogdb.js';

interface BlogPost {
    date: string;
    title: string;
    summary: string;
    category: string;
    img: string;
}

// --- UTILITY FUNCTION FOR SLUG GENERATION ---
const createSlug = (title: string): string => {
    return title
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '') // Remove all non-word chars except spaces and hyphens
        .replace(/[\s_-]+/g, '-') // Replace spaces and multiple hyphens with a single hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// --- DATA ---

const CATEGORIES = [
    'All',
    'Cosmetic treatments',
    'Facials',
    'Injectables',
    'Semi-permanent makeup',
];

const BlogCard: React.FC<{ post: BlogPost }> = ({ post }) => {
    const slug = createSlug(post.title);
    const path = `/blog/${slug}`;

    return (
        <Link to={path}>
            <FadeInScale className=" border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between h-full">
                <div>
                    <img className='h-96 w-full object-cover' src={post?.img} alt={post.title} />
                    <div className="text-xs font-medium text-gray-500 italic tracking-widest px-2 pt-2 rounded-full">
                        {post.category}
                    </div>

                    <h3 className="mt-4 text-xl font-bold text-main line-clamp-2">
                        {post.title}
                    </h3>
                    <p className="mt-2 text-sm text-main line-clamp-3">
                        {post.summary}
                    </p>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center text-sm">
                    <span className="text-sm text-main font-semibold hover:text-secondary-dark transition-colors">
                        Read More &rarr;
                    </span>
                    <span className="text-xs text-gray-500 italic">
                        {post.date}
                    </span>
                </div>
            </FadeInScale>
        </Link>
    );
};

const Blog: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<string>('All');
    const filteredPosts = BLOG_POSTS.filter(post => {
        if (activeCategory === 'All') {
            return true;
        }
        return post.category === activeCategory;
    });

    return (
        <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-main sm:text-5xl">
                        Our Latest Insights
                    </h1>
                    <p className="mt-3 text-xl text-gray-600">
                        Tips, tricks, and deep dives from our skincare experts.
                    </p>
                </div>
                <hr className='mb-8 border-gray-200'/>
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {CATEGORIES.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`
                                px-4 py-2 text-sm font-medium rounded-full transition-all duration-300
                                ${activeCategory === category
                                    ? 'bg-main text-white shadow-lg'
                                    : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-100'
                                }
                            `}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {filteredPosts.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post, index) => (
                            <BlogCard key={index} post={post} /> 
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10 bg-secondary border border-gray-200 rounded-lg">
                        <p className="text-lg text-gray-500">
                            Không có bài viết nào trong danh mục **{activeCategory}** lúc này.
                        </p>
                    </div>
                )}
                
            </div>
        </div>
    );
};

export default Blog;