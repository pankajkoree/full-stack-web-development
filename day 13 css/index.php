<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login form</title>
    <link rel="stylesheet" href="form_style.css" />
    <script>
      function success(){
        
      }
    </script>
  </head>
  <body>
    <form action="insertion.php" method="post">
    <div class="main_form">
      <header>
        <img src="user-interface.png" alt="Login logo" />
        <h1>Login Form</h1>
      </header>
      <main>
        <label for="username" id="u_lbl">Username</label>
        <input type="text" id="u_name" name="username" placeholder="username@gmail.com" required />
        <br /><br />
        <label for="password" id="p_lbl">Password</label>
        <input type="password" id="pwd" name="password" placeholder="password" required />
        <br /><br />
        <button type="submit" value="submit" name="submit" id="btn" onclick=success>
          Submit
        </button>
      </main>
    </div>
  </form>
  </body>
</html>
