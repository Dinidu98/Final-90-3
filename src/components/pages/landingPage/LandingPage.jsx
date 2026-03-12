import React from "react";
import logo from "../../../assets/Frame7.png";
import "./LandingPage.css";

const posts = [
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0pfHymVUingJ6nCbJ9w3jcSH3paSHSTeDkuzhBH3741CWPo2s1pCA95etDycwevU9l%26id%3D61584126279175&show_text=false&width=500",
    width: 500,
    height: 220,
  },
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid022ohWHwAAcPJAmYWbZi5d7sCa1mjg1dG5eiYJXXveQsRyD6puFSNDJD4jVegE3y8Sl%26id%3D61584126279175&show_text=false&width=500",
    width: 500,
    height: 220,
  },
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0ubeEv82tpAypzwjqUQawSJ2dc74WGeA4QaDQhuAwAhyYNzRtfziC5ZsLtTG3KruFl%26id%3D61584126279175&show_text=false&width=500",
    width: 500,
    height: 220,
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1592594275342045%2F&show_text=false&width=267&t=0",
    width: 380,
    height: 476,
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1093202446305565%2F&show_text=false&width=267&t=0",
    width: 380,
    height: 476,
  },
  {
    src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2410069972785767%2F&show_text=false&width=267&t=0",
    width: 380,
    height: 476,
  },
  {
    src: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid0Ky9g2UU48ZahtSpQCnB4X11UA5ugCHyjK5mfZ9iBkH8UH5ihjaU4S37ZjFDkHEY2l%26id%3D61584126279175&show_text=false&width=500",
    width: 500,
    height: 220,
  },
];

const LandingPage = () => {
  return (
    <div className="container">
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Final 90+3 Logo" />
          <span>Final 90+3</span>
        </div>

        <div className="tagline">
          Football Stories. Moments. Passion.
        </div>
      </nav>

      {/* Highlight Section */}
      <section className="highlight">
        <h1>Welcome to Final 90+3</h1>
        <p>
          The place where football moments live forever. Goals, atmosphere,
          fans and unforgettable stories from the beautiful game.
        </p>
      </section>

      {/* Posts */}
      <section className="posts">
        <div className="section-title">
          <h2>Latest Posts</h2>
        </div>

        <div className="posts-grid">
          {posts.map((post, index) => (
            <div className="post-card" key={index}>
              <div className="embed">
                <iframe
                  src={post.src}
                  width={post.width}
                  height={post.height}
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                  title={`fb-post-${index}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-brand">
          <h3>Final 90+3</h3>
          <p>Football never ends until the final whistle.</p>
        </div>

        <div className="footer-links">
          <a href="#">YouTube Channel</a>
        </div>

        <div className="copyright">
          © {new Date().getFullYear()} Final 90+3
        </div>
      </footer>

    </div>
  );
};

export default LandingPage;