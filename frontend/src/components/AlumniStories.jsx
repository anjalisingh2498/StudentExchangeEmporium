// src/components/AlumniStories.js

import React, { useState } from 'react';

// Sample data (you may fetch this from an API or database)
const sampleStories = [
    {
        id: 1,
        name: 'John Doe',
        title: 'From College Classroom to Industry Leader',
        summary: 'How John utilized his engineering skills to become a leader in tech innovation.',
        fullStory: 'John Doe graduated with a degree in Computer Science from XYZ University. His journey began with numerous college projects and internships which he leveraged to secure a leadership role in a tech company. His expertise in software development and management has made him a sought-after industry leader, influencing the tech community significantly.',
        link: '#'
    },
    {
        id: 2,
        name: 'Jane Smith',
        title: 'Cracking the Placement Puzzle',
        summary: 'Jane\'s journey from acing her college courses to securing her dream job at a top multinational company.',
        fullStory: 'Jane Smith, an ambitious student from XYZ University, excelled in her studies and participated in various extracurricular activities. Her preparation for placements involved intensive training and networking, which ultimately led her to secure a position at a renowned multinational corporation. Jane\'s story exemplifies how strategic planning and hard work can lead to career success.',
        link: '#'
    },
    {
        id: 3,
        name: 'Emily White',
        title: 'Turning Passion into Profession',
        summary: 'Emily\'s story of leveraging college projects into a successful entrepreneurial venture.',
        fullStory: 'Emily White turned her passion for sustainable fashion into a thriving business after graduating from XYZ University. During her college years, she worked on various projects related to eco-friendly fashion and networked with industry professionals. Her entrepreneurial spirit and dedication helped her launch a successful startup, making a positive impact in the fashion industry.',
        link: '#'
    }
];

const AlumniStories = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [fullStory, setFullStory] = useState('');
    const [stories, setStories] = useState(sampleStories);
    const [expandedStoryId, setExpandedStoryId] = useState(null); // State to track expanded story

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStory = {
            id: stories.length + 1,
            name,
            title,
            summary,
            fullStory, // Include full story
            link: '#'
        };
        setStories([...stories, newStory]);
        setName('');
        setTitle('');
        setSummary('');
        setFullStory(''); // Clear full story textarea
    };

    const handleReadMore = (id) => {
        setExpandedStoryId(expandedStoryId === id ? null : id); // Toggle expanded story
    };

    return (
        <div className="alumni-stories container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">🎓 Alumni Stories: Share Your Journey</h1>
            <p className="mb-4">We invite all alumni to share their unique stories and insights. Your experiences can inspire current and prospective students.</p>

            <form onSubmit={handleSubmit} className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Submit Your Story</h2>
                <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Story Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Summary</label>
                    <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        rows="4"
                        required
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Full Story</label>
                    <textarea
                        value={fullStory}
                        onChange={(e) => setFullStory(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        rows="6"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                    Submit Story
                </button>
            </form>

            <h2 className="text-xl font-semibold mb-4">Featured Alumni Stories</h2>
            {stories.map(story => (
                <div key={story.id} className="story bg-white p-4 shadow-md rounded-lg mb-4">
                    <h3 className="text-xl font-semibold">{story.title}</h3>
                    <p className="text-gray-700 mb-2">By {story.name}</p>
                    <p className="text-gray-600 mb-4">{story.summary}</p>
                    <button
                        onClick={() => handleReadMore(story.id)}
                        className="text-blue-500 hover:underline mb-2"
                    >
                        {expandedStoryId === story.id ? 'Show Less' : 'Read Story'}
                    </button>
                    {expandedStoryId === story.id && (
                        <p className="text-gray-800 mt-4">{story.fullStory}</p>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AlumniStories;
