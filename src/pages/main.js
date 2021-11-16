export default function Main() {
  return (
    <div>
      <div className="sidebar-container">
        <div className="sidebar-logo">
          <a href="#!">HEALTHCARE LIFE</a>
        </div>
        <ul className="sidebar-navigation">
          <li className="header">운동 시작하기</li>
          <li>
            <a href="#!">
              <i className="fa fa-home" aria-hidden="true"></i>Homepage
            </a>
          </li>
          <li>
            <a href="#!">
              <i classNameName="fa fa-tachometer" aria-hidden="true"></i>{" "}
              Dashboard
            </a>
          </li>

          <li className="header">운동 기록하기</li>
          <li>
            <a href="#!">
              <i className="fa fa-home" aria-hidden="true"></i>Homepage
            </a>
          </li>
          <li>
            <a href="#!">
              <i classNameName="fa fa-tachometer" aria-hidden="true"></i>{" "}
              Dashboard
            </a>
          </li>

          <li className="header">목표</li>
          <li>
            <a href="#!">
              <i className="fa fa-home" aria-hidden="true"></i>Homepage
            </a>
          </li>
          <li>
            <a href="#!">
              <i classNameName="fa fa-tachometer" aria-hidden="true"></i>{" "}
              Dashboard
            </a>
          </li>

          <li className="header">친구</li>
          <li>
            <a href="#!">
              <i className="fa fa-users" aria-hidden="true"></i> Friends
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa fa-cog" aria-hidden="true"></i> Settings
            </a>
          </li>
          <li>
            <a href="#!">
              <i className="fa fa-info-circle" aria-hidden="true"></i>{" "}
              Information
            </a>
          </li>
        </ul>

        <div className="content-container">
          <div className="container-fluid"></div>
        </div>
      </div>

      <div>
        <link rel="icon" type="image/x-icon" href="assets/favicon.ico" />
        <link href="css/styles.css" rel="stylesheet" />

        {/* Responsive navbar*/}
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container">
            <a class="navbar-brand" href="/main">
              Home
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" href="#!">
                    내 정보
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="/login">
                    Login
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#!">
                    Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Page content*/}
        <div class="container">
          <div class="text-center mt-5">
            <h1>메인</h1>
            <p class="lead">!!!!!!!!!!!!!!!!!!!!</p>
            <p>Bootstrap v5.1.3</p>
          </div>
        </div>
      </div>
    </div>
  );
}
