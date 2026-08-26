document.addEventListener('DOMContentLoaded', function()
{
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const togglePassword = document.getElementById('togglePassword');

    // Toggle visibilitas kata sandi
    if (togglePassword)
    {
        togglePassword.addEventListener('click', function()
        {
            const isPassword = passwordInput.getAttribute('type') === 'password';
            
            passwordInput.setAttribute('type', isPassword ? 'text' : 'password');

            // Mengubah ikon dari gembok ke ikon mata (show)
            this.classList.toggle('bxs-lock-alt', !isPassword);
            this.classList.toggle('bx-show', isPassword);
        });
    }

    // Penanganan submit form dan validasi
    if (loginForm)
    {
        loginForm.addEventListener('submit', function(event)
        {
            event.preventDefault();

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            if (username === '' || password === '')
            {
                alert('Harap isi username dan password terlebih dahulu!');
                return;
            }

            // Simulasi alur login berhasil
            alert('Login berhasil! Selamat datang, ' + username + '.');
        });
    }
});
