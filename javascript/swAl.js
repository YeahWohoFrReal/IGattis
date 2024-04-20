function redirectBasedOnBrowserLanguage() {
    const userLanguage = navigator.language || navigator.userLanguage;
    let title, message, confirmButtonText;
    
    switch (true) {
        case userLanguage.startsWith('fr'):
            title = 'Travail en cours';
            message = 'Nous travaillons toujours sur le style. Veuillez procéder si vous comprenez.';
            confirmButtonText = 'Procéder';
            break;
        case userLanguage.startsWith('de'):
            title = 'Arbeit in Bearbeitung';
            message = 'Wir arbeiten noch am Stil. Bitte fahren Sie fort, wenn Sie verstehen.';
            confirmButtonText = 'Fortfahren';
            break;
        case userLanguage.startsWith('es'):
            title = 'Trabajo en progreso';
            message = 'Todavía estamos trabajando en el estilo. Por favor, proceda si entiende.';
            confirmButtonText = 'Proceder';
            break;
        case userLanguage.startsWith('it'):
            title = 'Lavoro in corso';
            message = 'Stiamo ancora lavorando sullo stile. Procedi solo se capisci.';
            confirmButtonText = 'Procedi';
            break;
        case userLanguage.startsWith('ru'):
            title = 'Работа в процессе';
            message = 'Мы все еще работаем над стилем. Пожалуйста, продолжайте, если вы понимаете.';
            confirmButtonText = 'Продолжить';
            break;
        case userLanguage.startsWith('ja'):
            title = '作業中';
            message = 'スタイルの作業中です。理解された場合は、進んでください。';
            confirmButtonText = '進む';
            break;
        case userLanguage.startsWith('pt'):
            title = 'Trabalho em andamento';
            message = 'Ainda estamos trabalhando no estilo. Por favor, prossiga se entender.';
            confirmButtonText = 'Prosseguir';
            break;
        case userLanguage.startsWith('zh'):
            title = '进行中的工作';
            message = '我们仍在努力改进风格。如果您理解，请继续。';
            confirmButtonText = '继续';
            break;
        case userLanguage.startsWith('ko'):
            title = '진행 중인 작업';
            message = '아직 스타일을 개선 중입니다. 이해하신다면 계속하세요.';
            confirmButtonText = '계속';
            break;
        case userLanguage.startsWith('ar'):
            title = 'العمل قيد التقدم';
            message = 'نحن لا زلنا نعمل على الأسلوب. يرجى المتابعة إذا فهمت.';
            confirmButtonText = 'متابعة';
            break;
        case userLanguage.startsWith('tr'):
            title = 'Devam Eden İş';
            message = 'Hala stilde çalışıyoruz. Anladıysanız devam edin.';
            confirmButtonText = 'Devam et';
            break;
        case userLanguage.startsWith('pl'):
            title = 'Praca w toku';
            message = 'Nadal pracujemy nad stylem. Proszę kontynuuj, jeśli rozumiesz.';
            confirmButtonText = 'Kontynuuj';
            break;
        case userLanguage.startsWith('nl'):
            title = 'Werk in uitvoering';
            message = 'We zijn nog steeds bezig met de stijl. Ga verder als je het begrijpt.';
            confirmButtonText = 'Doorgaan';
            break;
        case userLanguage.startsWith('sv'):
            title = 'Pågående arbete';
            message = 'Vi arbetar fortfarande med stilen. Fortsätt om du förstår.';
            confirmButtonText = 'Fortsätt';
            break;
        case userLanguage.startsWith('fi'):
            title = 'Työ kesken';
            message = 'Työskentelemme edelleen tyylissä. Jatka, jos ymmärrät.';
            confirmButtonText = 'Jatka';
            break;
        case userLanguage.startsWith('cs'):
            title = 'Práce probíhá';
            message = 'Stále pracujeme na stylu. Pokračujte, pokud rozumíte.';
            confirmButtonText = 'Pokračovat';
            break;
        case userLanguage.startsWith('ro'):
            title = 'Muncă în desfășurare';
            message = 'Încă lucrăm la stil. Vă rugăm să continuați dacă înțelegeți.';
            confirmButtonText = 'Continuați';
            break;
        case userLanguage.startsWith('hu'):
            title = 'Folyamatban lévő munka';
            message = 'Még dolgozunk a stíluson. Folytassa, ha érti.';
            confirmButtonText = 'Folytatás';
            break;
        case userLanguage.startsWith('da'):
            title = 'Arbejde i gang';
            message = 'Vi arbejder stadig på stilen. Fortsæt hvis du forstår.';
            confirmButtonText = 'Fortsæt';
            break;
        case userLanguage.startsWith('el'):
            title = 'Εργασία σε εξέλιξη';
            message = 'Συνεχίζουμε να εργαζόμαστε στο στυλ. Συνεχίστε αν καταλαβαίνετε.';
            confirmButtonText = 'Συνέχεια';
            break;
        // Add cases for other languages as needed
        default:
            title = 'Work in Progress';
            message = 'We are still working on the style. Please proceed if you understand.';
            confirmButtonText = 'Proceed';
            break;
    }

    Swal.fire({
        title: title,
        text: message,
        icon: 'info',
        showCancelButton: false,
        confirmButtonText: confirmButtonText,
        customClass: {
            container: 'custom-swal-container',
            content: 'custom-swal-content',
            confirmButton: 'custom-swal-button',
        },
        confirmButtonColor: '#1D1F2C',
        buttonsStyling: false
    }).then((result) => {
        if (result.isConfirmed) {
            // Proceed with action
            // Add your code here
            console.log('Proceed button clicked');
        }
    });
}

document.addEventListener('DOMContentLoaded', redirectBasedOnBrowserLanguage);
