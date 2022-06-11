
export default function Footer() {
  return (
    <footer className="footer bg-base-100 py-5 lg:py-10">
      <div className="max-w-screen-lg mx-auto">
        <p>
          <strong>Logue</strong> by{" "}
          <a className="has-text-primary" href="https://github.com/liweili50">
            Jonas
          </a>
          . &#169; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
