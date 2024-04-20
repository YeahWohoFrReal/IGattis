// Definizione delle credenziali
var username = "R";
var password = "123";

// Funzione per mostrare il prompt di autenticazione personalizzato
function showAuthPrompt(language) {
    var inputUsername, inputPassword;
    
    switch (language) {
        case 'fr':
            inputUsername = prompt("Entrez votre nom d'utilisateur :");
            inputPassword = prompt("Entrez votre mot de passe :");
            break;
        case 'de':
            inputUsername = prompt("Geben Sie Ihren Benutzernamen ein:");
            inputPassword = prompt("Geben Sie Ihr Passwort ein:");
            break;
        case 'es':
            inputUsername = prompt("Ingrese su nombre de usuario:");
            inputPassword = prompt("Ingrese su contraseña:");
            break;
        case 'it':
            inputUsername = prompt("Inserisci il nome utente:");
            inputPassword = prompt("Inserisci la password:");
            break;
        case 'ru':
            inputUsername = prompt("Введите имя пользователя:");
            inputPassword = prompt("Введите пароль:");
            break;
        case 'ja':
            inputUsername = prompt("ユーザー名を入力してください：");
            inputPassword = prompt("パスワードを入力してください：");
            break;
        case 'pt':
            inputUsername = prompt("Digite seu nome de usuário:");
            inputPassword = prompt("Digite sua senha:");
            break;
        case 'zh':
            inputUsername = prompt("请输入用户名：");
            inputPassword = prompt("请输入密码：");
            break;
        case 'ko':
            inputUsername = prompt("사용자 이름을 입력하세요:");
            inputPassword = prompt("비밀번호를 입력하세요:");
            break;
        case 'ar':
            inputUsername = prompt("أدخل اسم المستخدم:");
            inputPassword = prompt("أدخل كلمة المرور:");
            break;
        case 'tr':
            inputUsername = prompt("Kullanıcı adınızı girin:");
            inputPassword = prompt("Şifrenizi girin:");
            break;
        case 'pl':
            inputUsername = prompt("Wprowadź nazwę użytkownika:");
            inputPassword = prompt("Wprowadź hasło:");
            break;
        case 'nl':
            inputUsername = prompt("Voer uw gebruikersnaam in:");
            inputPassword = prompt("Voer uw wachtwoord in:");
            break;
        case 'sv':
            inputUsername = prompt("Ange ditt användarnamn:");
            inputPassword = prompt("Ange ditt lösenord:");
            break;
        case 'fi':
            inputUsername = prompt("Syötä käyttäjänimesi:");
            inputPassword = prompt("Syötä salasanasi:");
            break;
        case 'cs':
            inputUsername = prompt("Zadejte své uživatelské jméno:");
            inputPassword = prompt("Zadejte své heslo:");
            break;
        case 'ro':
            inputUsername = prompt("Introduceți numele de utilizator:");
            inputPassword = prompt("Introduceți parola:");
            break;
        case 'hu':
            inputUsername = prompt("Írja be felhasználónevét:");
            inputPassword = prompt("Írja be jelszavát:");
            break;
        case 'da':
            inputUsername = prompt("Indtast dit brugernavn:");
            inputPassword = prompt("Indtast dit kodeord:");
            break;
        case 'el':
            inputUsername = prompt("Εισαγάγετε το όνομα χρήστη σας:");
            inputPassword = prompt("Εισαγάγετε τον κωδικό σας:");
            break;
        // Aggiungi altri casi per gli altri linguaggi
        default:
            inputUsername = prompt("Enter your username:");
            inputPassword = prompt("Enter your password:");
            break;
    }

    // Verifica le credenziali
    if (inputUsername === username && inputPassword === password) {
        return true; // Consenti l'accesso
    } else {
        switch (language) {
            case 'fr':
                alert("Identifiants incorrects. Accès refusé.");
                break;
            case 'de':
                alert("Falsche Anmeldedaten. Zugriff verweigert.");
                break;
            case 'es':
                alert("Credenciales incorrectas. Acceso denegado.");
                break;
            case 'it':
                alert("Credenziali errate. Accesso negato.");
                break;
            case 'ru':
                alert("Неверные учетные данные. Доступ запрещен.");
                break;
            case 'ja':
                alert("認証情報が間違っています。アクセスが拒否されました。");
                break;
            case 'pt':
                alert("Credenciais incorretas. Acesso negado.");
                break;
            case 'zh':
                alert("凭证错误。访问被拒绝。");
                break;
            case 'ko':
                alert("잘못된 자격 증명입니다. 액세스가 거부되었습니다.");
                break;
            case 'ar':
                alert("بيانات الاعتماد غير صحيحة. الوصول مرفوض.");
                break;
            case 'tr':
                alert("Hatalı kimlik bilgileri. Erişim reddedildi.");
                break;
            case 'pl':
                alert("Nieprawidłowe dane uwierzytelniające. Odmowa dostępu.");
                break;
            case 'nl':
                alert("Onjuiste referenties. Toegang geweigerd.");
                break;
            case 'sv':
                alert("Felaktiga uppgifter. Åtkomst nekad.");
                break;
            case 'fi':
                alert("Virheelliset tunnistetiedot. Pääsy evätty.");
                break;
            case 'cs':
                alert("Chybné přihlašovací údaje. Přístup odepřen.");
                break;
            case 'ro':
                alert("Date de autentificare incorecte. Acces interzis.");
                break;
            case 'hu':
                alert("Hibás hitelesítő adatok. Hozzáférés megtagadva.");
                break;
            case 'da':
                alert("Forkerte legitimationsoplysninger. Adgang nægtet.");
                break;
            case 'el':
                alert("Λάθος διαπιστευτήρια. Απορρίπτεται η πρόσβαση.");
                break;
            // Aggiungi altri casi per gli altri linguaggi
            default:
                alert("Incorrect credentials. Access denied.");
                break;
        }
        return false; // Negare l'accesso
    }
}

// Blocca il menu contestuale del mouse
document.addEventListener("contextmenu", function(e) {
    e.preventDefault(); // Impedisce il menu contestuale di aprire
});

// Mostra il prompt di autenticazione personalizzato quando l'utente tenta di aprire gli strumenti di sviluppo
window.addEventListener("keydown", function(e) {
    if ((e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73)) && !showAuthPrompt(navigator.language.substring(0, 2))) { // F12 o Ctrl+Shift+I
        e.preventDefault();
    }
});
