import { Link } from 'react-router-dom';

const Home = () => {
    // Dummy blog post data (you can replace this with your actual blog data)
    const blogPosts = [
        {
            id: 1,
            title: 'Blog Post 1',
            content: 'This is the content of Blog Post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            title: 'Blog Post 2',
            content: 'This is the content of Blog Post 2. Nulla quis lorem ut libero malesuada feugiat.',
        },
        {
            id: 3,
            title: 'Blog Post 3',
            content: 'This is the content of Blog Post 3. Sed porttitor lectus nibh.',
        },
    ];

    return (
        <div>
            <h1>Welcome to the Blog</h1>
            <div style={{display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'20px' }}>
                {blogPosts.map((post) => (
                    <div key={post.id} style={{ border: '2px solid gray', padding: '10px', marginBottom: '10px' }}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                        <Link to={`/blog/${post.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
