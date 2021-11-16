export default function Login() {
  return (
    <body class="text-center">
      <main class="form-signin">
        <form>
          <img
            class="mb-4"
            src="../assets/brand/bootstrap-logo.svg"
            alt=""
            width="72"
            height="57"
          />
          <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>

          <div class="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">
              Sign in
            </button>
          </div>
          <br />
          <div>
            <a class="w-100 btn btn-lg btn-primary" href="/signup">
              {" "}
              Sign up{" "}
            </a>
          </div>
          <p class="mt-5 mb-3 text-muted">&copy; 2017–2021</p>
        </form>
      </main>
    </body>
  );
}
