import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div>
        {/* LEFT: Brand (Text Logo) */}
        <Link to="/">
          <span>Scruto Mart</span>
        </Link>

        {/* RIGHT: Controls */}
        <div>
          {/* Search (isolated) */}
          <button type="button">Search</button>

          {/* Commerce group */}
          <div>
            <Link to="/wishlist">
              <div>
                Wishlist <span>0</span>
              </div>
            </Link>

            <Link to="/cart">
              <div>
                Cart <span>0</span>
              </div>
            </Link>
          </div>

          {/* Utility group */}
          <div>
            <div>
              Notification <span>0</span>
            </div>

            <Link to="/login">
              <div>Login</div>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
