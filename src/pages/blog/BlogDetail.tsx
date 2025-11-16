import React from 'react';
import { useParams } from "react-router-dom";
import { getPostBySlug } from "../../data/blogdb.js";
import { Link } from 'react-router-dom';
import FadeInScale from '../../components/animations/FadeInScale.js';

export default function BlogDetail() {
    const { slug } = useParams<{ slug: string }>();

    const post = slug ? getPostBySlug(slug) : undefined;

    if (!post) {
        return (
            <div className="flex items-center justify-center min-h-[50vh] p-10 bg-gray-50">
                <div className="text-center p-8 bg-white rounded-xl shadow-lg border border-gray-200">
                    <h1 className="text-4xl font-extrabold text-red-600 mb-4">404 - Bài viết không tìm thấy</h1>
                    <p className="text-lg text-main mb-6">Không tìm thấy bài viết với đường dẫn: **/{slug}**</p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-main hover:bg-main/90 transition-colors"
                    >
                        &larr; Quay lại danh sách Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8 bg-secondary">
            <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl overflow-hidden">
                <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-96 object-cover"
                />

                <div className="p-8 sm:p-10">

                    <div className="mb-8 border-b pb-4">
                        <p className="text-sm text-main mb-2 font-medium">
                            {post.date} | <span className="font-semibold text-main uppercase">{post.category}</span>
                        </p>
                        <FadeInScale delay={0.1} className="text-4xl sm:text-5xl font-extrabold text-main leading-snug">
                            {post.title}
                        </FadeInScale>
                    </div>

                    <FadeInScale delay={0.2} className='text-xl text-main font-semibold mb-8 italic'>
                        {post.summary}
                    </FadeInScale>

                    <div className="text-lg text-main leading-relaxed space-y-6">
                        {post.content}
                        {!post.content && (
                            <p className='italic mt-4 p-4 bg-gray-50 border-l-4 border-main text-main'>
                                Loading ...
                            </p>
                        )}
                    </div>

                </div>

                <div className="p-8 border-t bg-gray-50">
                    <Link
                        to="/blog"
                        className="text-main font-semibold hover:text-secondary-dark transition-colors flex items-center"
                    >
                        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
                        Back to blog
                    </Link>
                </div>
            </div>
        </div>
    );
}