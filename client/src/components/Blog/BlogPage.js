import React, { useState, useEffect } from "react";

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Simulating fetching data from an API
    const fetchData = async () => {
      // Add your API call here to fetch the blog posts
      // Replace the setTimeout with the actual API call
      setLoading(true); // Set loading to true during data fetch

      setTimeout(() => {
        const dummyData = [
          {
            id: 1,
            title: "Lorem Ipsum",
            date: "June 1, 2023",
            content:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat magna ac metus commodo cursus. Integer nec nisi vitae nisi tristique finibus.",
          },
          {
            id: 2,
            title: "Dolor Sit Amet",
            date: "June 10, 2023",
            content:
              "Dolor sit amet, consectetur adipiscing elit. Nullam ac ex a justo fringilla tempor. Fusce pharetra consequat faucibus. Quisque blandit finibus tellus, ac fermentum nibh efficitur eget.",
          },
          // Additional dummy data...
        ];

        setBlogPosts(dummyData);
        setLoading(false); // Set loading to false after data fetch
      }, 500); // Simulated delay of 500ms
    };

    fetchData();
  }, []);

  const loadMorePosts = () => {
    if (loading) return;

    setLoading(true);

    // Simulating fetching more data from an API
    // Replace the setTimeout with the actual API call
    setTimeout(() => {
      const moreDummyData = [
        {
          id: 4,
          title: "Sit Amet Dolor",
          date: "July 1, 2023",
          content:
            "Sit amet dolor, consectetur adipiscing elit. Curabitur placerat, libero ac vestibulum lobortis, lacus nulla dapibus nunc, sit amet laoreet justo nunc eu nisl.",
        },
        {
          id: 5,
          title: "Volutpat Magna",
          date: "July 10, 2023",
          content:
            "Volutpat magna, consectetur adipiscing elit. Suspendisse finibus tincidunt purus, sed egestas tortor faucibus vitae. Sed lacinia libero eget nisl tempor, vel feugiat erat feugiat.",
        },
        // Additional dummy data...
      ];

      setBlogPosts((prevPosts) => [...prevPosts, ...moreDummyData]);
      setCurrentPage((prevPage) => prevPage + 1);
      setLoading(false);
    }, 1000); // Simulated delay of 1s
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 20
      ) {
        loadMorePosts();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogPosts.slice(0, indexOfLastPost);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center text-5xl font-bold mb-4">Our Blogs</h1>
      <div className="grid grid-cols-1 gap-4">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white rounded-md shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.date}</p>
            <p className="text-gray-800">{post.content}</p>
          </div>
        ))}
      </div>
      {loading && (
        <div className="text-center text-2xl font-medium mt-4 animate-pulse">
          <p>Loading our posts...</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;
