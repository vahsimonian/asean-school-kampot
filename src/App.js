import './App.css';

function App() {
  return (
    <div>
      <nav>
        <ul class="nav-list">
          <li class="active">
            <a href="index.html" aria-current="page">
              Home
            </a>
          </li>
          <li>
            <a href="about.html">About</a>
          </li>
          <li>
            <a href="blog.html">Blog</a>
          </li>
          <li>
            <a href="#">Another</a>
          </li>
          <li>
            <a href="#">Page</a>
          </li>
          <li>
            <a href="#">And another</a>
          </li>
        </ul>
      </nav>
      <main>
        <h1>Home</h1>
      </main>
    </div>
  );
}

export default App;
