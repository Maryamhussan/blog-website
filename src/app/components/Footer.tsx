import Link from "next/link";

export default function Footer() {
    return (
      <div className="footer">
        <div>
          <p>&copy; 2024 MyBlogs. All rights reserved.</p>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <Link
                href="https://www.facebook.com/maryam.hussain.779642"
                target="_blank"
              >
                <img
                  src="/icons/facebook.png"
                  alt="Facebook"
                  className="social-icon"
                />
              </Link>
            </li>
            <li>
              <Link href="mailto:maryamghayyas2005@gmail.com" target="_blank">
                <img
                  src="/icons/gmail.png"
                  alt="Gmail"
                  className="social-icon"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/maryam-hussain"
                target="_blank"
              >
                <img
                  src="/icons/linkedin.png"
                  alt="LinkedIn"
                  className="social-icon"
                />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/maryamhussain598/"
                target="_blank"
              >
                <img
                  src="/icons/instagram.png"
                  alt="Instagram"
                  className="social-icon"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
}