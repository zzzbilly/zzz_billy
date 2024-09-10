function sendMessage() {
    const botToken = '7222132738:AAFJpBPujvsCQdczbqnV-uAGvCEoakXMcVI'; // Ganti dengan token bot Anda
    const chatId = '6029671401'; // Ganti dengan ID chat Anda atau chat grup
    const message = document.getElementById('message').value;

    if (!message) {
        alert('Please enter a message!');
        return;
    }
// Format pesan dengan Markdown atau HTML
    const formattedMessage = `
     \`\`\` pesan baru >> ${message}\`\`\``;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(formattedMessage)}&parse_mode=MarkdownV2`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Berhasil')
            } else {
                alert('Failed to send message: ' + data.description);
            }
        })
        .catch(error => {
            alert('Error: ' + error);
        });
}